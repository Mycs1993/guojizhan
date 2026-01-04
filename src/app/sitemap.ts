import { MetadataRoute } from "next";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { routing } from "@/i18n/routing";
import { NEWS_ITEMS } from "@/data/news";
import { promises as fs } from "node:fs";
import path from "node:path";

const baseUrl = "https://gljyw.top";

async function readLocalNewsJson(): Promise<Array<{ id: number | string; date?: string }> | null> {
  try {
    const filePath = path.join(process.cwd(), "public", "news.json");
    const raw = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(raw);
    const rawItems = Array.isArray(data)
      ? data
      : Array.isArray(data?.items)
        ? data.items
        : [];

    return rawItems
      .map((n: any) => ({ id: n.id, date: n.date }))
      .filter((n: any) => n.id !== undefined && n.id !== null);
  } catch {
    return null;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = routing.locales;

  // 1. Static pages
  const staticRoutes = [
    "", // Homepage
    "/products",
    "/about",
    "/contact",
    "/news",
  ];

  const staticPages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      staticPages.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly", // Homepage updates more often
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  // 2. Dynamic product pages
  const productPages: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const product of PRODUCT_CATEGORIES) {
      productPages.push({
        url: `${baseUrl}/${locale}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  // 3. News pages
  const localNews = await readLocalNewsJson();
  const newsSource = localNews ?? NEWS_ITEMS;
  const newsPages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const news of newsSource) {
      newsPages.push({
        url: `${baseUrl}/${locale}/news/${news.id}`,
        lastModified: news.date ? new Date(news.date) : new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return [...staticPages, ...productPages, ...newsPages];
}

