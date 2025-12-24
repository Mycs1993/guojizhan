import { MetadataRoute } from "next";
import { PRODUCT_CATEGORIES } from "@/data/products";
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
  // Static pages with appropriate priorities
  // Homepage: 1.0, Products: 0.9, Other pages: 0.8
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamic product pages - priority 0.9 (high value pages)
  const productPages: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // News pages - priority 0.7
  const localNews = await readLocalNewsJson();
  const newsSource = localNews ?? NEWS_ITEMS;
  const newsPages: MetadataRoute.Sitemap = newsSource.map((news: any) => ({
    url: `${baseUrl}/news/${news.id}`,
    lastModified: news.date ? new Date(news.date) : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...newsPages];
}

