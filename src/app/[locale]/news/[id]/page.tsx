import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { getLocale } from "next-intl/server";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Image from "next/image";

import { COMPANY_INFO } from "@/data/company";
import { getNewsItem } from "@/lib/news";
import { ArticleSchema } from "@/components/seo/ArticleSchema";

type PageProps = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  // 默认使用英文生成 metadata，足够满足 SEO；若需按 locale，可在此 fetch locale
  const item = await getNewsItem(id, "en");

  if (!item) {
    return {
      title: "News - Not Found",
    };
  }

  const baseUrl = "https://gljyw.top";

  return {
    title: `${item.title} | ${COMPANY_INFO.shortName}`,
    description: item.summary,
    openGraph: {
      title: `${item.title} | ${COMPANY_INFO.shortName}`,
      description: item.summary,
      url: `${baseUrl}/news/${item.id}`,
      type: "article",
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const locale = await getLocale();

  const item = await getNewsItem(id, locale as "en" | "zh");

  if (!item) {
    notFound();
  }

  const paragraphs =
    locale === "zh" ? item!.content.zh : item!.content.en;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <ArticleSchema
        article={{
          id: String(item!.id),
          title: item!.title,
          excerpt: item!.summary,
          date: item!.date,
          image: item!.image,
          category: item!.category,
        }}
      />
      {/* Hero */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex items-center text-slate-300 text-sm mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            {locale === "zh" ? "返回新闻列表" : "Back to News"}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {item!.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {item!.date}
            </span>
            <span className="inline-flex items-center gap-1 bg-slate-800/70 px-3 py-1 rounded-full text-blue-200 font-medium">
              <Tag size={14} />
              {item!.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Image */}
          <div className="h-64 md:h-80 bg-slate-200 relative overflow-hidden">
            <Image
              src={item!.image || "/images/news/default.jpg"}
              alt={item!.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          {/* Text */}
          <div className="p-6 md:p-10">
            <div className="prose prose-slate md:prose-lg max-w-none">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


