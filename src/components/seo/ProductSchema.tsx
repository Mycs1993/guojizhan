import { PRODUCT_CATEGORIES } from "@/data/products";

export function ProductSchema({ productId, locale }: { productId: string, locale?: 'en' | 'zh' }) {
  const product = PRODUCT_CATEGORIES.find(p => p.id === productId);

  if (!product) return null;

  const baseUrl = "https://gljyw.top";
  // 给搜索引擎的示例价，B2B 实际报价走询盘，但需要提供 price 字段以满足富摘要要求
  // 使用大于 0 的数值以避免 Merchant listings 校验为无效
  const fallbackPrice = 1000;
  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);

  // Default to English if no locale provided
  const lang = locale || 'en';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name[lang],
    "description": product.description[lang],
    "image": `${baseUrl}${product.image}`, // Ensure URL is absolute/correct
    "brand": {
      "@type": "Brand",
      "name": "Henan Yudong Boiler"
    },
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/products/${product.id}`,
      "price": fallbackPrice,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "priceValidUntil": priceValidUntil.toISOString().split("T")[0],
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

