import { Metadata } from "next";
import { articleService } from "@/lib/articles";
import { getNewsById } from "@/lib/news";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Calendar, Tag, ChevronLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const locale = (await getLocale()) as "en" | "zh";

    // Try dynamic article first
    const article = await articleService.getArticleBySlug(slug);
    if (article) {
        return {
            title: `${article.title} - News`,
            description: article.summary,
        };
    }

    // Fallback to legacy news
    const news = await getNewsById(slug, locale);
    if (news) {
        return {
            title: `${news.title} - News`,
            description: news.summary,
        };
    }

    return { title: "News Detail" };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const locale = (await getLocale()) as "en" | "zh";
    const t = await getTranslations('NewsPage');

    // 1. Try fetching from dynamic articles
    const article = await articleService.getArticleBySlug(slug);

    if (article) {
        return (
            <div className="bg-white min-h-screen pb-20">
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
                        <ChevronLeft size={20} />
                        {t('backToList')}
                    </Link>

                    {article.coverImage && (
                        <div className="relative h-[400px] w-full mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={article.coverImage}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <header className="mb-8">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                            <span className="flex items-center gap-1 font-medium">
                                <Calendar size={16} className="text-blue-600" />
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                <Tag size={14} />
                                News
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                            {article.title}
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed border-l-4 border-blue-600 pl-6 py-2 bg-slate-50 italic">
                            {article.summary}
                        </p>
                    </header>

                    <div className="prose prose-blue lg:prose-xl max-w-none text-slate-800 leading-relaxed font-normal
            prose-p:mb-8 prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
            prose-strong:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-2xl prose-img:shadow-lg prose-blockquote:border-l-4 prose-blockquote:border-blue-600
            prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl">
                        <ReactMarkdown>{article.content}</ReactMarkdown>
                    </div>
                </div>
            </div>
        );
    }

    // 2. Fallback to legacy news items
    const news = await getNewsById(slug, locale);
    if (!news) {
        notFound();
    }

    const content = locale === 'en' ? news.content?.en : news.content?.zh;

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
                    <ChevronLeft size={20} />
                    {t('backToList')}
                </Link>

                {news.image && (
                    <div className="relative h-[400px] w-full mb-8 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <header className="mb-8">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1 font-medium">
                            <Calendar size={16} className="text-blue-600" />
                            {news.date}
                        </span>
                        <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            <Tag size={14} />
                            {news.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                        {news.title}
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed border-l-4 border-blue-600 pl-6 py-2 bg-slate-50 italic">
                        {news.summary}
                    </p>
                </header>

                <div className="prose prose-blue lg:prose-xl max-w-none text-slate-800 leading-relaxed font-normal">
                    {content?.map((paragraph, index) => (
                        <p key={index} className="mb-6">{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
