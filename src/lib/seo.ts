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
export function generateProductMetadata(product: Product, locale: 'en' | 'zh' = 'en'): Metadata {
  const name = product.name[locale];
  const descriptionText = product.description[locale];

  const capacityRange = product.specs.length > 0
    ? `${product.specs[0].capacity} - ${product.specs[product.specs.length - 1].capacity}`
    : "";

  // Features are also localized
  const keyFeatures = product.features.slice(0, 3).map(f => f[locale]).join(", ");

  const metaDescription = `${name} - ${keyFeatures}. Capacity: ${capacityRange}. ${descriptionText}`;

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
      title: `${name} | ${COMPANY_INFO.shortName}`,
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
      title: `${name} | ${COMPANY_INFO.shortName}`,
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
export function generateNewsMetadata(news: NewsItem): Metadata {
  return {
    title: news.title,
    description: news.excerpt.slice(0, 160),
    openGraph: {
      title: `${news.title} | ${COMPANY_INFO.shortName}`,
      description: news.excerpt,
      url: `${BASE_URL}/news/${news.id}`,
      type: "article",
      publishedTime: news.date,
      images: news.image
        ? [
          {
            url: news.image.startsWith("http") ? news.image : `${BASE_URL}${news.image}`,
            width: 1200,
            height: 630,
            alt: news.title,
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${news.title} | ${COMPANY_INFO.shortName}`,
      description: news.excerpt,
      images: news.image ? [news.image.startsWith("http") ? news.image : `${BASE_URL}${news.image}`] : [],
    },
    alternates: {
      canonical: `${BASE_URL}/news/${news.id}`,
    },
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
export function generateArticleSchema(news: NewsItem): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: news.title,
    description: news.excerpt,
    datePublished: news.date,
    dateModified: news.date,
    author: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    image: news.image ? (news.image.startsWith("http") ? news.image : `${BASE_URL}${news.image}`) : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/news/${news.id}`,
    },
  };
}

