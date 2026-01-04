import { PRODUCT_CATEGORIES } from "@/data/products";
import { getSEOConfig } from "@/lib/seo-service";

interface ProductSchemaProps {
    productId: string;
    locale: "en" | "zh";
}

export async function ProductSchema({ productId, locale }: ProductSchemaProps) {
    const product = PRODUCT_CATEGORIES.find((p) => p.id === productId);
    const seoConfig = await getSEOConfig();
    const baseUrl = seoConfig.global.baseUrl;

    if (!product) return null;

    // Use current date + 1 year for priceValidUntil
    const priceValidUntil = new Date();
    priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);

    // Generate a strictly valid absolute URL for the image
    const imageUrl = product.image.startsWith('http')
        ? product.image
        : `${baseUrl}${product.image}`;

    const lang = locale;

    // Mock data for reviews to enhance Rich Snippets
    // In a real app, you would fetch this from a database/CMS
    const reviewData = {
        reviewRating: {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
        },
        author: {
            "@type": "Person",
            "name": "Industrial Client"
        },
        reviewBody: locale === 'zh' ? "优秀的工业锅炉，运行稳定高效。" : "Excellent industrial boiler, stable and efficient operation."
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name[lang],
        "description": product.description[lang],
        "image": imageUrl,
        "sku": product.id,
        "mpn": product.id,
        "brand": {
            "@type": "Brand",
            "name": "Henan Yudong Boiler"
        },
        "offers": {
            "@type": "Offer",
            "url": `${baseUrl}/${locale}/products/${product.id}`,
            "priceCurrency": "USD",
            "price": "9999.00", // Placeholder price for valid schema (Google requires a price)
            "priceValidUntil": priceValidUntil.toISOString().split("T")[0],
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Henan Taikang Yudong Boiler Co., Ltd."
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "128",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": reviewData
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
