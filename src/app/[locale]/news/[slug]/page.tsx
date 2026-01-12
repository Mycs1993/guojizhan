import { Metadata } from "next";
import { articleService } from "@/lib/articles";
import { getNewsBySlug } from "@/lib/news";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Calendar, Tag, ChevronLeft, Hash } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { generateBreadcrumbs, generateNewsMetadata, generateNewsArticleJsonLd } from "@/lib/seo";
import { enhanceContentWithLinks } from "@/lib/content-utils";

// Adapter to standardize NewsItem for SEO functions
function toSeoItem(source: any, locale: string, isDynamic: boolean = false) {
    if (isDynamic) {
        return {
            id: source.id,
            slug: source.slug,
            title: source.title,
            excerpt: source.summary,
            date: source.publishedAt,
            image: source.coverImage,
            category: 'News',
            keywords: source.tags || [] // Assume dynamic structure handles tags array
        };
    }

    // Legacy mapping
    const tags = source.tags?.[locale] || source.tags?.['en'] || [];

    return {
        id: String(source.id),
        slug: source.slug || String(source.id),
        title: source.title,
        excerpt: source.summary,
        date: source.date,
        image: source.image,
        category: source.category,
        keywords: tags
    };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
    const { slug, locale } = await params;

    const article = await articleService.getArticleBySlug(slug);
    if (article) {
        return generateNewsMetadata(toSeoItem(article, locale, true), locale);
    }

    const news = await getNewsBySlug(slug, locale as any);
    if (news) {
        return generateNewsMetadata(toSeoItem(news, locale, false), locale);
    }

    return { title: 'News Detail' };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await params;
    const t = await getTranslations('NewsPage');
    const tNav = await getTranslations('Navigation');

    let seoItem: any = null;
    let contentHtml = '';
    let category = 'News';
    let tags: string[] = []; // Unified tags

    // Fetch all tags for auto-linking (could be optimized to cached or limited set)
    const allTags = await articleService.getAllTags();
    const tagNames = allTags.map(t => t.name);

    // 1. Fetch Data
    const article = await articleService.getArticleBySlug(slug);

    if (article) {
        seoItem = toSeoItem(article, locale, true);
        const enhanced = enhanceContentWithLinks(article.content, locale, tagNames);
        contentHtml = enhanced;
        tags = article.tags || [];
    } else {
        const news = await getNewsBySlug(slug, locale as any);
        if (!news) notFound();

        seoItem = toSeoItem(news, locale, false);
        category = news.category;
        tags = seoItem.keywords;

        const rawContent = news.content?.[locale as keyof typeof news.content] || news.content?.en || [];
        const combined = Array.isArray(rawContent) ? rawContent.join('\n\n') : rawContent;
        contentHtml = enhanceContentWithLinks(combined, locale, tagNames);
    }

    // 2. Generate SEO Data
    const breadcrumbs = generateBreadcrumbs(`/news/${slug}`, { [slug]: seoItem.title });
    const jsonLd = generateNewsArticleJsonLd(seoItem, locale);

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* 1. Invisible SEO Data */}
            <BreadcrumbSchema items={breadcrumbs} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 2. Visible Breadcrumbs */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-slate-500 whitespace-nowrap overflow-hidden">
                        <Link href="/" className="hover:text-blue-600 transition-colors">{tNav('home')}</Link>
                        <span className="text-slate-300">/</span>
                        <Link href="/news" className="hover:text-blue-600 transition-colors">{tNav('news')}</Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-900 truncate font-medium">{seoItem.title}</span>
                    </div>
                </div>
            </div>

            {/* 3. Main Content */}
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors group">
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    {t('backToList')}
                </Link>

                {seoItem.image && (
                    <div className="relative h-[240px] md:h-[400px] w-full mb-10 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={seoItem.image}
                            alt={seoItem.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <header className="mb-10 border-b border-slate-100 pb-10">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                        <span className="flex items-center gap-1.5 font-medium bg-slate-50 px-3 py-1.5 rounded-lg text-slate-600">
                            <Calendar size={16} className="text-blue-600" />
                            {new Date(seoItem.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                            <Tag size={14} />
                            {category}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                        {seoItem.title}
                    </h1>
                    {seoItem.excerpt && (
                        <p className="text-xl text-slate-600 font-medium leading-relaxed border-l-4 border-blue-600 pl-6 py-2 bg-slate-50/50 italic rounded-r-lg">
                            {seoItem.excerpt}
                        </p>
                    )}
                </header>

                <article className="prose prose-blue prose-lg lg:prose-xl max-w-none text-slate-700 leading-relaxed
                    prose-p:mb-8 prose-headings:text-slate-900 prose-headings:font-bold
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-100
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-12
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                    prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2
                    ">
                    <ReactMarkdown
                        components={{
                            a: ({ node, ...props }) => <a {...props} className="text-blue-600 hover:text-blue-800 transition-colors border-b border-blue-200 hover:border-blue-600" />
                        }}
                    >
                        {contentHtml}
                    </ReactMarkdown>
                </article>

                {/* Tags Section - The Elegant Long-tail Implementation */}
                {tags.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Related Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                                <Link
                                    key={tag}
                                    href={`/topic/${tag}`}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all cursor-pointer shadow-sm hover:shadow-md"
                                >
                                    <Hash size={12} className="opacity-50" />
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
