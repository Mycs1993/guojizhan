import type { Metadata } from "next";
import { Product } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

const BASE_URL = "https://gljyw.top";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image?: string;
  category?: string;
}

/**
 * 鐢熸垚浜у搧椤甸潰鐨?Metadata
 * Requirements: 1.2, 2.2
 */
/**
 * 鐢熸垚浜у搧椤甸潰鐨?Metadata
 * Requirements: 1.2, 2.2
 */
export function generateProductMetadata(product: Product, locale: 'en' | 'zh' | string = 'en'): Metadata {
  const name = product.name[locale as keyof typeof product.name] || product.name['en'];
  const descriptionText = product.description[locale as keyof typeof product.description] || product.description['en'];

  // Helper for localized company info
  const getCompInfo = (key: keyof typeof COMPANY_INFO) => (COMPANY_INFO[key] as any)[locale] || (COMPANY_INFO[key] as any)['en'];

  const capacityRange = product.specs.length > 0
    ? `${product.specs[0].capacity} - ${product.specs[product.specs.length - 1].capacity}`
    : "";

  // Features are also localized
  const keyFeatures = product.features.slice(0, 3).map(f => f[locale as any] || f['en']).join(", ");

  const metaDescription = `${name} - ${keyFeatures}. Capacity: ${capacityRange}. ${descriptionText}`;
  const shortName = getCompInfo('shortName');

  return {
    title: name,
    description: metaDescription.slice(0, 160),
    keywords: [
      name,
      "industrial boiler",
      "steam boiler",
      product.specs[0]?.fuel || "boiler",
      "China manufacturer",
    ],
    openGraph: {
      title: `${name} | ${shortName}`,
      description: descriptionText,
      url: `${BASE_URL}/products/${product.id}`,
      images: [
        {
          url: product.image.startsWith("http") ? product.image : `${BASE_URL}${product.image}`,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | ${shortName}`,
      description: descriptionText,
      images: [product.image.startsWith("http") ? product.image : `${BASE_URL}${product.image}`],
    },
    alternates: {
      canonical: `${BASE_URL}/products/${product.id}`,
    },
  };
}

/**
 * 鐢熸垚鏂伴椈鏂囩珷椤甸潰鐨?Metadata
 * Requirements: 2.5
 */
export function generateNewsMetadata(news: NewsItem & { slug?: string, keywords?: string[] }, locale: string = 'en'): Metadata {
  // Helper for localized company info
  const getCompInfo = (key: keyof typeof COMPANY_INFO) => (COMPANY_INFO[key] as any)[locale] || (COMPANY_INFO[key] as any)['en'];
  const shortName = getCompInfo('shortName');

  const url = `${BASE_URL}/${locale}/news/${news.slug || news.id}`;
  const images = news.image
    ? [news.image.startsWith("http") ? news.image : `${BASE_URL}${news.image}`]
    : [`${BASE_URL}/og-image.jpg`];

  return {
    title: `${news.title} - News | ${shortName}`,
    description: news.excerpt.slice(0, 160),
    keywords: news.keywords,
    alternates: {
      canonical: url,
      languages: {
        'en': `${BASE_URL}/en/news/${news.slug || news.id}`,
        'zh': `${BASE_URL}/zh/news/${news.slug || news.id}`,
      }
    },
    openGraph: {
      title: `${news.title} | ${shortName}`,
      description: news.excerpt,
      url: url,
      type: "article",
      publishedTime: news.date,
      authors: [shortName],
      images: images.map(img => ({
        url: img,
        width: 1200,
        height: 630,
        alt: news.title
      })),
      siteName: shortName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${news.title} | ${shortName}`,
      description: news.excerpt,
      images: images,
    }
  };
}

/**
 * 鏍规嵁璺緞鐢熸垚闈㈠寘灞戝鑸暟鎹?
 * Requirements: 2.3
 */
export function generateBreadcrumbs(path: string, customNames?: Record<string, string>): BreadcrumbItem[] {
  const segments = path.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: BASE_URL },
  ];

  let currentPath = "";
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name = customNames?.[segment] || formatSegmentName(segment);
    breadcrumbs.push({
      name,
      url: `${BASE_URL}${currentPath}`,
    });
  }

  return breadcrumbs;
}

/**
 * 鏍煎紡鍖?URL 娈典负鍙鍚嶇О
 */
function formatSegmentName(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * 鐢熸垚 BreadcrumbList Schema JSON-LD
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * 鐢熸垚 Article Schema JSON-LD
 */
/**
 * Generate Article Schema JSON-LD
 */
export function generateNewsArticleJsonLd(news: NewsItem & { slug?: string }, locale: string = 'en'): object {
  const getCompInfo = (key: keyof typeof COMPANY_INFO) => (COMPANY_INFO[key] as any)[locale] || (COMPANY_INFO[key] as any)['en'];
  const companyName = getCompInfo('name');
  const url = `${BASE_URL}/${locale}/news/${news.slug || news.id}`;
  const images = news.image ? [news.image.startsWith("http") ? news.image : `${BASE_URL}${news.image}`] : [];

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title,
    description: news.excerpt,
    datePublished: news.date,
    dateModified: news.date, // Ideally this should be updated date if available
    author: [{
      "@type": "Organization",
      name: companyName,
      url: BASE_URL
    }],
    publisher: {
      "@type": "Organization",
      name: companyName,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    image: images,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

