import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { articleService } from "@/lib/articles";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Calendar, Tag, ArrowRight, Hash } from "lucide-react";
import { notFound } from "next/navigation";
import { COMPANY_INFO } from "@/data/company";

// Helper to decode URL-encoded tags (e.g., "gas%20boiler" -> "gas boiler")
const decodeTag = (tag: string) => decodeURIComponent(tag).replace(/-/g, ' ');

export async function generateMetadata({
    params,
}: {
    params: Promise<{ tag: string; locale: string }>;
}): Promise<Metadata> {
    const { tag, locale } = await params;
    const decodedTag = decodeTag(tag);

    // Title case for display
    const displayTag = decodedTag.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const getCompInfo = (key: keyof typeof COMPANY_INFO) => (COMPANY_INFO[key] as any)[locale] || (COMPANY_INFO[key] as any)['en'];
    const shortName = getCompInfo('shortName');

    return {
        title: `${displayTag} - Industry Insights & News | ${shortName}`,
        description: `Explore the latest news, technical articles, and case studies about ${displayTag} from ${shortName}. Expert knowledge in industrial heating solutions.`,
        keywords: [displayTag, `${displayTag} news`, `${displayTag} articles`, "industrial boiler", "heating technology"],
        openGraph: {
            title: `${displayTag} - Industry Insights | ${shortName}`,
            description: `Latest updates and technical insights regarding ${displayTag}.`,
            type: "website",
        },
    };
}

export default async function TopicPage({
    params,
}: {
    params: Promise<{ tag: string; locale: string }>;
}) {
    const { tag, locale } = await params;
    const decodedTag = decodeTag(tag);
    const displayTag = decodedTag.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const t = await getTranslations('NewsPage'); // Reuse News translations

    // Fetch articles
    const articles = await articleService.getArticlesByTag(decodedTag);

    if (articles.length === 0) {
        // Optional: Show 404 or a "No articles found" state?
        // For SEO, if a tag has 0 articles, it shouldn't exist.
        // But for user experience, if they click a dead tag, show empty state instead of 404.
    }

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Topic Header */}
            <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute right-10 top-10 transform rotate-12">
                        <Hash size={300} />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
                        <Hash size={14} />
                        <span>Topic Cluster</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">{displayTag}</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Discover our curated collection of articles, news, and technical guides focused on <span className="text-white font-semibold">{displayTag}</span>.
                    </p>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container mx-auto px-4 py-16">
                {articles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((item) => (
                            <article
                                key={item.id}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col h-full group"
                            >
                                <Link href={`/news/${item.slug}`} className="block h-48 bg-slate-200 relative overflow-hidden cursor-pointer">
                                    <Image
                                        src={item.coverImage || "/images/news/default.jpg"}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
                                </Link>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {new Date(item.publishedAt).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <Link href={`/news/${item.slug}`}>
                                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {item.title}
                                        </h2>
                                    </Link>

                                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                                        {item.summary}
                                    </p>

                                    <Link
                                        href={`/news/${item.slug}`}
                                        className="inline-flex items-center text-blue-600 font-semibold text-sm hover:translate-x-1 transition-transform mt-auto"
                                    >
                                        {t('readMore')} <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                            <Tag size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">No articles found</h3>
                        <p className="text-slate-500">We couldn't find any articles tagged with "{displayTag}".</p>
                        <Link href="/news" className="inline-block mt-6 text-blue-600 font-semibold hover:underline">
                            Browse all news
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
