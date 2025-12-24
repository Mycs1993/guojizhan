import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { COMPANY_INFO } from "@/data/company";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getNewsList, NEWS_REVALIDATE_SECONDS } from "@/lib/news";
import Image from "next/image";

const baseUrl = "https://gljyw.top";

export const metadata: Metadata = {
  title: "News & Insights - Boiler Industry Updates",
  description: "Stay updated with the latest company news, product launches, and industry technical knowledge from Henan Yudong Boiler. Expert insights on industrial boiler technology.",
  keywords: ["boiler news", "industrial boiler updates", "boiler technology", "boiler industry trends", "boiler maintenance tips"],
  openGraph: {
    title: `News & Insights | ${COMPANY_INFO.shortName}`,
    description: "Stay updated with our latest company news, product launches, and industry technical knowledge.",
    url: `${baseUrl}/news`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Yudong Boiler News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `News & Insights | ${COMPANY_INFO.shortName}`,
    description: "Latest company news, product launches, and industry insights.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/news`,
  },
};

export const revalidate = 3600;

export default async function NewsPage() {
  const locale = (await getLocale()) as "en" | "zh";
  const t = await getTranslations('NewsPage');
  const news = await getNewsList(locale);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col h-full group"
            >
              {/* Image */}
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <Image
                  src={item.image || "/images/news/default.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full text-blue-600 font-medium">
                    <Tag size={12} />
                    {item.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h2>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.summary}
                </p>

                <Link 
                  href={`/news/${item.id}`} 
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:translate-x-1 transition-transform mt-auto"
                >
                  {t('readMore')} <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
