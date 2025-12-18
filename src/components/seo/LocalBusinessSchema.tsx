import { COMPANY_INFO } from "@/data/company";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.yudongboiler.com/#localbusiness",
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    description: COMPANY_INFO.intro,
    url: "https://www.yudongboiler.com",
    logo: "https://www.yudongboiler.com/logo.png",
    image: "https://www.yudongboiler.com/og-image.jpg",
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zhangji Industrial Zone",
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
