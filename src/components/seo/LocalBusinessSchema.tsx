import { COMPANY_INFO } from "@/data/company";

export function LocalBusinessSchema({ locale = 'en' }: { locale?: string }) {
  // Helper to safely access localized string
  const getLocalized = (obj: any) => obj[locale] || obj['en'] || '';

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gljyw.top/#localbusiness",
    name: getLocalized(COMPANY_INFO.name),
    alternateName: getLocalized(COMPANY_INFO.shortName),
    description: getLocalized(COMPANY_INFO.intro),
    url: "https://gljyw.top",
    logo: "https://gljyw.top/logo.png",
    image: "https://gljyw.top/og-image.jpg",
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: getLocalized(COMPANY_INFO.location),
      addressLocality: "Taikang County",
      addressRegion: "Henan Province",
      postalCode: "461400",
      addressCountry: "CN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0667",
      longitude: "114.8500",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone,
      contactType: "sales",
      email: COMPANY_INFO.email,
      areaServed: "Worldwide",
      availableLanguage: ["English", "Chinese"],
    },
    priceRange: "$$$$",
    currenciesAccepted: "USD, CNY",
    paymentAccepted: "Wire Transfer, Letter of Credit",
    foundingDate: COMPANY_INFO.founded.toString(),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "200",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
