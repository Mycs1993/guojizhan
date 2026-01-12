import { MetadataRoute } from 'next';
import { NEWS_ITEMS_LOCALIZED } from '@/data/news';
import { PROJECTS } from '@/data/projects';
import { PRODUCT_CATEGORIES } from '@/data/products';

const BASE_URL = 'https://www.hnlggl.com'; // User's domain

// Helper to generate SEO-friendly slugs (matches src/lib/news.ts)
function slugify(text: string) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const products = PRODUCT_CATEGORIES;
  const projects = PROJECTS;
  const news = NEWS_ITEMS_LOCALIZED;
  const locales = ['en', 'zh', 'ru', 'es', 'fr', 'ar']; // Supported locales

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Static Routes
  const staticRoutes = ['', '/about', '/contact', '/products', '/solutions', '/projects', '/news'];

  locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  // 2. Product Detail Routes
  products.forEach((product) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });
  });

  // 3. Project Detail Routes
  projects.forEach((project) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  // 4. News Detail Routes
  news.forEach((item) => {
    // Generate slug from English title if not present
    const slug = item.slug || slugify(item.title.en);
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/news/${slug}`,
        lastModified: new Date(item.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}
