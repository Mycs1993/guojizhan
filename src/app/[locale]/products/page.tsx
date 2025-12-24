import { Metadata } from "next";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Flame, Leaf, Factory, Zap, Thermometer, Container, CheckCircle } from "lucide-react";

// Reuse IconMap logic
const IconMap: Record<string, any> = {
  "Flame": Flame,
  "Leaf": Leaf,
  "Factory": Factory,
  "Zap": Zap,
  "Thermometer": Thermometer,
  "Container": Container,
};

const baseUrl = "https://gljyw.top";

export const metadata: Metadata = {
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
    title: `Industrial Boilers & Pressure Vessels | ${COMPANY_INFO.shortName}`,
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
    title: `Industrial Boilers & Pressure Vessels | ${COMPANY_INFO.shortName}`,
    description: "WNS Oil/Gas, SZL Biomass, DZL Coal boilers. ISO9001 certified, Class A license.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/products`,
  },
};

export default async function ProductsPage() {
  const t = await getTranslations('ProductsPage');
  const locale = await getLocale() as 'en' | 'zh';

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
        <div className="grid grid-cols-1 gap-12">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const Icon = IconMap[category.icon] || Factory;
            const isEven = index % 2 === 0;

            return (
              <div
                key={category.id}
                id={category.id}
                className={`bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Placeholder Area */}
                <div className="md:w-2/5 h-64 md:h-auto bg-slate-200 relative group overflow-hidden">
                  {/* Using standard img tag to handle external URLs reliably without Next.js config complexity for now */}
                  <img
                    src={category.image}
                    alt={`${category.name[locale]} - ${category.description[locale]}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors"></div>
                </div>

                {/* Content Area */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{category.name[locale]}</h2>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {category.description[locale]}
                  </p>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                    {category.features?.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                        <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
                        <span>{feature[locale]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/contact?product=${category.id}`}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      {t('requestQuote')}
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href={`/products/${category.id}`}
                      className="inline-flex items-center gap-2 text-slate-700 px-6 py-3 rounded-md font-medium hover:text-blue-600 transition-colors border border-slate-200 hover:border-blue-200"
                    >
                      {t('viewDetails')}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
