import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { SOLUTIONS } from '@/data/solutions';
import Image from 'next/image';
import { ArrowRight, Factory, Shirt, Utensils, FlaskConical, Building2 } from 'lucide-react';

// Icon map for dynamic rendering
const IconMap: any = {
    Shirt: Shirt,
    Utensils: Utensils,
    FlaskConical: FlaskConical,
    Building2: Building2
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'SolutionsPage' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
    };
}

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations('SolutionsPage');

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 pattern-grid-lg opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{t('title')}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="space-y-12">
                    {SOLUTIONS.map((solution, index) => {
                        const Icon = IconMap[solution.icon] || Factory;
                        const title = (solution.title as any)[locale] || solution.title.en;
                        const summary = (solution.summary as any)[locale] || solution.summary.en;
                        const painPoints = (solution.painPoints as any)[locale] || (solution.painPoints as any)['en'];
                        const isEven = index % 2 === 0;

                        return (
                            <Link
                                key={solution.id}
                                href={`/solutions/${solution.id}`}
                                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col items-stretch border border-slate-100 hover:border-blue-200 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Image Portion */}
                                <div className={`relative w-full md:w-5/12 h-64 md:h-auto overflow-hidden z-0 ${isEven ? 'rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none' : 'rounded-t-3xl md:rounded-r-3xl md:rounded-tl-none'}`}>
                                    <Image
                                        src={solution.image}
                                        alt={title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>

                                    {/* Mobile Icon Badge */}
                                    <div className="absolute top-4 left-4 md:hidden bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-100/50 z-20">
                                        <Icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>

                                {/* Desktop Floating Badge - Moved to Parent to avoid clipping */}
                                {/* Positioned absolutely relative to the flex container */}
                                <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 z-20 items-center justify-center w-20 h-20 origin-center ${isEven ? 'left-[41.666667%] -ml-10' : 'left-[58.333333%] -ml-10'}`}>
                                    <Icon className="w-10 h-10 text-blue-600" />
                                </div>

                                {/* Content Portion */}
                                <div className={`p-8 md:p-12 flex flex-col justify-center w-full md:w-7/12 relative overflow-hidden bg-white z-0 ${isEven ? 'rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none' : 'rounded-b-3xl md:rounded-l-3xl md:rounded-br-none'}`}>
                                    {/* Watermark Icon */}
                                    <Icon className={`absolute -bottom-8 w-64 h-64 text-slate-50 group-hover:text-blue-50/50 transition-colors duration-500 -z-0 transform -rotate-12 ${isEven ? '-right-8' : '-left-8'}`} />

                                    <div className="relative z-10 px-2">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                                            {title}
                                        </h3>
                                        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                            {summary}
                                        </p>

                                        {/* Key Benefits / Pain Points Tagline */}
                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {painPoints && painPoints.slice(0, 3).map((point: string, idx: number) => (
                                                <span key={idx} className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full border border-slate-200">
                                                    {point}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center text-blue-600 font-bold text-lg group-hover:translate-x-2 transition-transform origin-left">
                                            <span className="border-b-2 border-transparent group-hover:border-blue-600 transition-all duration-300">
                                                {t('learnMore')}
                                            </span>
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
