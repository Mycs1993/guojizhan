import { COMPANY_INFO } from "@/data/company";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": "https://gljyw.top",
    "logo": "https://gljyw.top/logo.png",
    "description": COMPANY_INFO.intro,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.location,
      "addressCountry": "CN",
      "addressRegion": "Henan",
      "addressLocality": "Taikang County"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "Sales",
      "email": COMPANY_INFO.email,
      "areaServed": "Worldwide",
      "availableLanguage": ["en", "zh"]
    },
    "sameAs": [
      // Add your social media links here
    ],
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
