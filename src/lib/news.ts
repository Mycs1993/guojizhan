import "server-only";
import { NEWS_ITEMS, NEWS_ITEMS_LOCALIZED } from "@/data/news";
import { promises as fs } from "node:fs";
import path from "node:path";

export type NewsLocale = "en" | "zh" | "es" | "ar" | "fr" | "ru" | "de";

export type NewsItem = {
  id: number | string;
  slug?: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  image?: string;
  locale?: NewsLocale;
  content?: {
    en?: string[];
    zh?: string[];
    es?: string[];
    ar?: string[];
    fr?: string[];
    ru?: string[];
    de?: string[];
  };
};

const NEWS_JSON_URL = process.env.NEWS_JSON_URL;
const REVALIDATE_SECONDS = 3600; // 1 hour

async function readLocalNewsJson(): Promise<NewsItem[] | null> {
  try {
    const filePath = path.join(process.cwd(), "public", "news.json");
    const raw = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(raw);
    const rawItems = Array.isArray(data)
      ? data
      : Array.isArray(data?.items)
        ? data.items
        : [];

    const items: NewsItem[] = rawItems.map((n: any) => ({
      id: n.id ?? "",
      title: n.title ?? "",
      date: n.date ?? "",
      summary: n.summary ?? "",
      category: n.category ?? "",
      image: n.image,
      locale: n.locale,
      content: n.content,
    }));

    return items.filter((n) => !!n.id && !!n.title);
  } catch {
    return null;
  }
}

/**
 * 浠庤繙绋?JSON 鑾峰彇鏂伴椈
 * 鏈熸湜缁撴瀯锛氭暟缁勶紝瀛楁 id/title/date/summary/category/image/locale/content.en/content.zh
 * 濡傛灉 JSON 澶栧眰鏄?{ items: [...] } 涔熶細灏濊瘯璇诲彇 items
 */
async function fetchRemoteNews(): Promise<NewsItem[] | null> {
  if (!NEWS_JSON_URL) return null;

  try {
    const res = await fetch(NEWS_JSON_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const rawItems = Array.isArray(data)
      ? data
      : Array.isArray(data?.items)
        ? data.items
        : [];

    const items: NewsItem[] = rawItems.map((n: any) => ({
      id: n.id ?? "",
      title: n.title ?? "",
      date: n.date ?? "",
      summary: n.summary ?? "",
      category: n.category ?? "",
      image: n.image,
      locale: n.locale,
      content: n.content,
    }));

    return items.filter((n) => !!n.id && !!n.title);
  } catch (err) {
    console.error("[news] fetch remote failed, fallback to local:", err);
    return null;
  }
}

// Helper to generate SEO-friendly slugs
function slugify(text: string) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

import { articleService } from "./articles";

export async function getNewsList(locale: NewsLocale): Promise<NewsItem[]> {
  const remote = await fetchRemoteNews();
  const localJson = await readLocalNewsJson();

  // Fetch dynamic articles from our new service
  const dynamicArticles = await articleService.getAllArticles(false);
  const mappedDynamic: NewsItem[] = dynamicArticles.map(a => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    date: new Date(a.publishedAt).toISOString().split('T')[0],
    summary: a.summary,
    category: "News",
    image: a.coverImage,
    locale: locale // Currently assumes same locale for all articles, or refine later
  }));

  let baseList: NewsItem[] = [];

  if (remote || localJson) {
    baseList = (remote ?? localJson ?? []);
  } else {
    baseList = NEWS_ITEMS_LOCALIZED.map(item => ({
      id: item.id,
      slug: slugify(item.title.en),
      title: item.title[locale],
      date: item.date,
      summary: item.summary[locale],
      category: item.category[locale],
      image: item.image,
      locale,
      content: {
        en: item.content.en,
        zh: item.content.zh,
        es: item.content.es,
        ar: item.content.ar,
        fr: item.content.fr,
        ru: item.content.ru,
        de: item.content.de
      }
    }));
  }

  const merged = [...mappedDynamic, ...baseList];

  return merged
    .filter((item) => !item.locale || item.locale === locale)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getNewsById(
  id: number | string,
  locale: NewsLocale
): Promise<NewsItem | null> {
  const list = await getNewsList(locale);
  const found =
    list.find((n) => String(n.id) === String(id)) ??
    list.find((n) => Number(n.id) === Number(id));

  return found ?? null;
}

export async function getNewsBySlug(
  slug: string,
  locale: NewsLocale
): Promise<NewsItem | null> {
  const list = await getNewsList(locale);
  // Try finding by slug first, fallback to ID if it looks like an ID
  const found = list.find((n) => n.slug === slug) ??
    list.find((n) => String(n.id) === slug);
  return found ?? null;
}

// Backward-compatible alias (older pages import getNewsItem)
export const getNewsItem = getNewsById;

export const NEWS_REVALIDATE_SECONDS = REVALIDATE_SECONDS;

