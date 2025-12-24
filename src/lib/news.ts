import "server-only";
import { NEWS_ITEMS, NEWS_ITEMS_LOCALIZED } from "@/data/news";
import { promises as fs } from "node:fs";
import path from "node:path";

export type NewsLocale = "en" | "zh";

export type NewsItem = {
  id: number | string;
  title: string;
  date: string;
  summary: string;
  category: string;
  image?: string;
  locale?: NewsLocale;
  content?: {
    en?: string[];
    zh?: string[];
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
 * 从远程 JSON 获取新闻
 * 期望结构：数组，字段 id/title/date/summary/category/image/locale/content.en/content.zh
 * 如果 JSON 外层是 { items: [...] } 也会尝试读取 items
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

export async function getNewsList(locale: NewsLocale): Promise<NewsItem[]> {
  const remote = await fetchRemoteNews();
  const localJson = await readLocalNewsJson();
  
  // If we have remote or local JSON data, use it
  if (remote || localJson) {
    const merged = remote ?? localJson ?? [];
    return merged
      .filter((item) => !item.locale || item.locale === locale)
      .sort((a, b) => (a.date > b.date ? -1 : 1));
  }
  
  // Otherwise, use localized static data
  return NEWS_ITEMS_LOCALIZED.map(item => ({
    id: item.id,
    title: item.title[locale],
    date: item.date,
    summary: item.summary[locale],
    category: item.category[locale],
    image: item.image,
    locale,
    content: {
      en: item.content.en,
      zh: item.content.zh
    }
  })).sort((a, b) => (a.date > b.date ? -1 : 1));
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

// Backward-compatible alias (older pages import getNewsItem)
export const getNewsItem = getNewsById;

export const NEWS_REVALIDATE_SECONDS = REVALIDATE_SECONDS;
