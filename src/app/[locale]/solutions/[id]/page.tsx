import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { SOLUTIONS } from '@/data/solutions';
import { PRODUCT_CATEGORIES } from '@/data/products'; // Correct import
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowLeft, CheckCircle, Target, ArrowRight } from 'lucide-react';

interface Props {
    params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, id } = await params;
    const solution = SOLUTIONS.find((s) => s.id === id);

    if (!solution) {
        return { title: 'Solution Not Found' };
    }

    const t = await getTranslations({ locale, namespace: 'SolutionsPage' });
    const title = (solution.title as any)[locale] || solution.title.en;

    return {
        title: `${title} | Yudong Boiler Solutions`,
        description: ((solution.summary as any)[locale] || solution.summary.en).slice(0, 160),
    };
}

export default async function SolutionDetailPage({ params }: Props) {
    const { locale, id } = await params;
    const solution = SOLUTIONS.find((s) => s.id === id);
    const t = await getTranslations('SolutionsPage');
    const tCommon = await getTranslations('Common');

    if (!solution) {
        notFound();
    }

    const title = (solution.title as any)[locale] || solution.title.en;
    const description = (solution.description as any)[locale] || solution.description.en;
    const painPoints = (solution.painPoints as any)[locale] || (solution.painPoints as any)['en'];

    // Find related products
    // Logic: Look for products that match the categories listed in solution.products
    const relatedProducts = PRODUCT_CATEGORIES.filter(p =>
        solution.products.some(tag =>
            p.id.includes(tag) || p.category === tag || (p.specs && p.specs[0].fuel && p.specs[0].fuel.toLowerCase().includes(tag))
        )
    ).slice(0, 3);

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] bg-slate-900 flex items-center">
                <Image
                    src={solution.image}
                    alt={title}
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <Link
                        href="/solutions"
                        className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        {t('backToSolutions')}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
                        {(solution.summary as any)[locale] || solution.summary.en}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('overview')}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                                {description}
                            </p>
                        </div>

                        {/* Pain Points / Challenges */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Target className="text-red-500" />
                                {t('challenges')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {painPoints?.map((point: string, idx: number) => (
                                    <div key={idx} className="bg-red-50 p-6 rounded-xl border border-red-100">
                                        <div className="font-bold text-red-700 mb-2">0{idx + 1}</div>
                                        <div className="text-slate-700 font-medium">{point}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* NEW: Key Applications & Advantages */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {/* Applications */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <CheckCircle className="text-blue-500" />
                                    {t('applications')}
                                </h2>
                                <ul className="bg-slate-50 rounded-xl p-6 space-y-3 border border-slate-100">
                                    {(solution.applications as any)[locale]?.map((app: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-slate-700 font-medium">{app}</span>
                                        </li>
                                    )) || null}
                                </ul>
                            </div>

                            {/* Advantages */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Target className="text-green-500" />
                                    {t('advantages')}
                                </h2>
                                <ul className="bg-green-50 rounded-xl p-6 space-y-3 border border-green-100">
                                    {(solution.advantages as any)[locale]?.map((adv: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                            <span className="text-slate-700 font-bold">{adv}</span>
                                        </li>
                                    )) || null}
                                </ul>
                            </div>
                        </div>

                        {/* Recommended Products */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('recommendedProducts')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedProducts.map(product => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.id}`}
                                        className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group"
                                    >
                                        <div className="relative w-24 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={product.image}
                                                alt={product.name.en}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {(product.name as any)[locale] || product.name.en}
                                            </h3>
                                            <span className="text-blue-600 text-sm font-medium mt-1 inline-flex items-center">
                                                {tCommon('viewDetails')} <ArrowRight size={14} className="ml-1" />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Section for SEO */}
                        {solution.faq && solution.faq.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ</h2>
                                <div className="space-y-6">
                                    {solution.faq.map((item, index) => {
                                        const question = (item.question as any)[locale] || item.question.en;
                                        const answer = (item.answer as any)[locale] || item.answer.en;
                                        return (
                                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                                                <h3 className="text-lg font-bold text-slate-900 mb-3">{question}</h3>
                                                <p className="text-slate-600 leading-relaxed">{answer}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* JSON-LD Schema for Google FAQ Rich Snippets */}
                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
                                            "@context": "https://schema.org",
                                            "@type": "FAQPage",
                                            "mainEntity": solution.faq.map(item => ({
                                                "@type": "Question",
                                                "name": (item.question as any)[locale] || item.question.en,
                                                "acceptedAnswer": {
                                                    "@type": "Answer",
                                                    "text": (item.answer as any)[locale] || item.answer.en
                                                }
                                            }))
                                        })
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Sidebar CTA */}
                    <div>
                        <div className="bg-blue-600 rounded-2xl p-8 text-white sticky top-24">
                            <h3 className="text-xl font-bold mb-4">{t('consultExpert')}</h3>
                            <p className="text-blue-100 mb-8">
                                {t('consultDesc')}
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-blue-300" />
                                    <span>{t('benefit1')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-blue-300" />
                                    <span>{t('benefit2')}</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="block w-full bg-white text-blue-600 text-center py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                                {tCommon('contactUs')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
