import { PRODUCT_CATEGORIES } from "@/data/products";

export function ProductSchema({ productId, locale }: { productId: string, locale?: 'en' | 'zh' }) {
  const product = PRODUCT_CATEGORIES.find(p => p.id === productId);

  if (!product) return null;

  // Default to English if no locale provided
  const lang = locale || 'en';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name[lang],
    "description": product.description[lang],
    "image": `https://www.yudongboiler.com/${product.image}`, // Ensure URL is absolute/correct
    "brand": {
      "@type": "Brand",
      "name": "Henan Yudong Boiler"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.yudongboiler.com/products/${product.id}`,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Henan Taikang Yudong Boiler Co., Ltd."
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

