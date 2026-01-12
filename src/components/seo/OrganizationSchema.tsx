import { COMPANY_INFO } from "@/data/company";

export function OrganizationSchema({ locale = 'en' }: { locale?: string }) {
  // Helper to safely access localized string
  const getLocalized = (obj: any) => obj[locale] || obj['en'] || '';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": getLocalized(COMPANY_INFO.name),
    "url": "https://gljyw.top",
    "logo": "https://gljyw.top/logo.png",
    "description": getLocalized(COMPANY_INFO.intro),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": getLocalized(COMPANY_INFO.location),
      "addressCountry": "CN",
      "addressRegion": "Henan",
      "addressLocality": "Taikang County",
      "postalCode": "461400"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0500",
      "longitude": "114.8500"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "Sales",
      "email": COMPANY_INFO.email,
      "areaServed": "Worldwide",
      "availableLanguage": ["en", "zh", "ru", "es", "fr"]
    },
    "sameAs": [
      "https://www.facebook.com/yudongboiler",
      "https://www.linkedin.com/company/yudongboiler",
      "https://twitter.com/yudongboiler"
    ],
    "priceRange": "$$$",
    "foundingDate": COMPANY_INFO.founded.toString(),
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "200"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
