import { MetadataRoute } from 'next';
import { PRODUCT_CATEGORIES } from '@/data/products';
import { NEWS_ITEMS } from '@/data/news';

const baseUrl = 'https://www.yudongboiler.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with appropriate priorities
  // Homepage: 1.0, Products: 0.9, Other pages: 0.8
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic product pages - priority 0.9 (high value pages)
  const productPages: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // News pages - priority 0.7
  const newsPages: MetadataRoute.Sitemap = NEWS_ITEMS.map((news) => ({
    url: `${baseUrl}/news/${news.id}`,
    lastModified: new Date(news.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...newsPages];
}

