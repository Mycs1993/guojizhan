import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { getTranslations } from "next-intl/server";
import { ProductListWithFilter } from "@/components/products/ProductListWithFilter";

const baseUrl = "https://gljyw.top";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const getCompInfo = (key: keyof typeof COMPANY_INFO) => (COMPANY_INFO[key] as any)[locale] || (COMPANY_INFO[key] as any)['en'];
  const shortName = getCompInfo('shortName');

  return {
    title: "Industrial Boilers & Pressure Vessels",
    description: "Explore our comprehensive range of industrial boilers: WNS Oil/Gas, SZL Biomass, DZL Coal, Thermal Oil Heaters. ISO9001 certified, Class A manufacturing license. Capacity 0.5-20 t/h.",
    keywords: [
      "WNS oil gas boiler",
      "SZL biomass boiler",
      "DZL coal boiler",
      "thermal oil heater",
      "steam boiler",
      "hot water boiler",
      "industrial boiler manufacturer",
      "China boiler supplier",
      "pressure vessel",
    ],
    openGraph: {
      title: `Industrial Boilers & Pressure Vessels | ${shortName}`,
      description: "Explore our comprehensive range of industrial boilers and pressure vessels. WNS, SZL, DZL series. Trusted by 2000+ industries worldwide.",
      url: `${baseUrl}/products`,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Yudong Boiler Products",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Industrial Boilers & Pressure Vessels | ${shortName}`,
      description: "WNS Oil/Gas, SZL Biomass, DZL Coal boilers. ISO9001 certified, Class A license.",
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/products`,
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('ProductsPage');
  const { locale } = await params;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Product List */}
      <div className="container mx-auto px-4 py-16">
        <ProductListWithFilter />
      </div>
    </div>
  );
}
