import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PROJECTS } from '@/data/projects';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowLeft, MapPin, Calendar, Activity, Factory, CheckCircle, ArrowRight, Trophy } from 'lucide-react';
import { PRODUCT_CATEGORIES as PRODUCTS } from '@/data/products';
import { SimpleInquiryForm } from '@/components/contact/SimpleInquiryForm';

interface Props {
    params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, id } = await params;
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    const t = await getTranslations({ locale, namespace: 'ProjectPage' });
    // Fallback for localized description if specific key not found
    const description = (project.description as any)[locale] || (project.description as any)['en'];
    const title = (project.title as any)[locale] || (project.title as any)['en'];

    return {
        title: `${title} | Yudong Boiler`,
        description: description.slice(0, 160),
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { locale, id } = await params;
    const project = PROJECTS.find((p) => p.id === id);
    const t = await getTranslations('ProjectPage');
    const tCommon = await getTranslations('Common');
    const tCountries = await getTranslations('HomePage.GlobalReach.Countries');

    if (!project) {
        notFound();
    }

    const description = (project.description as any)[locale] || (project.description as any)['en'];
    const title = (project.title as any)[locale] || (project.title as any)['en'];

    // Find related product (simple matching by category)
    const relatedProduct = PRODUCTS.find(p => p.id.includes(project.productCategory) || p.category.includes(project.productCategory));

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] bg-slate-900">
                <Image
                    src={project.images[0]}
                    alt={title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full pb-12 pt-20">
                    <div className="container mx-auto px-4">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft size={20} className="mr-2" />
                            {t('backToProjects') || 'Back to Projects'}
                        </Link>

                        <div className="flex flex-wrap gap-4 mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/90 text-white text-sm font-bold uppercase tracking-wider backdrop-blur-sm border border-blue-500/50">
                                {project.industry}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/80 text-slate-200 text-sm font-medium backdrop-blur-sm border border-slate-600">
                                {project.productModel}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight">
                            {title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-slate-300 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-blue-400" />
                                <span>{project.location.split(',')[0]}, {tCountries(project.countryCode as any)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-blue-400" />
                                <span>{project.installDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Key Specs Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Activity className="text-blue-600" />
                                {t('projectSpecs') || 'Project Specifications'}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <div className="text-sm text-slate-500 mb-1">{t('specCapacity') || 'Capacity'}</div>
                                    <div className="font-bold text-slate-900 text-lg">{project.capacity}</div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <div className="text-sm text-slate-500 mb-1">{t('specModel') || 'Model'}</div>
                                    <div className="font-bold text-slate-900 text-lg">{project.productModel}</div>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg">
                                    <div className="text-sm text-slate-500 mb-1">{t('specIndustry') || 'Industry'}</div>
                                    <div className="font-bold text-slate-900 text-lg capitalize">{project.industry}</div>
                                </div>
                                {/* Add more specs if available in a generic 'specs' object later */}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                {t('projectOverview') || 'Project Overview'}
                            </h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg leading-relaxed text-slate-600">
                                    {description}
                                </p>
                                <p className="text-slate-600 mt-4">
                                    {/* Generic filler content to flesh out the page if description is short */}
                                    {t('projectFiller') ||
                                        "This project demonstrates our commitment to delivering high-efficiency, reliable heating solutions tailored to specific industrial needs. The system was designed to maximize energy efficiency while ensuring strict compliance with local environmental regulations. Our engineering team worked closely with the client from initial consultation through to final commissioning to ensure optimal performance."}
                                </p>
                            </div>
                        </div>

                        {/* SEO Rich Content Section */}
                        {((project as any).clientBackground || (project as any).projectChallenge) && (
                            <div className="space-y-8">
                                {/* Client Background */}
                                {(project as any).clientBackground && (
                                    <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                                        <h3 className="text-xl font-bold text-slate-900 mb-4">{t('clientBackground')}</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            {((project as any).clientBackground)[locale] || ((project as any).clientBackground)['en']}
                                        </p>
                                    </div>
                                )}

                                {/* Challenge & Solution */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {(project as any).projectChallenge && (
                                        <div className="bg-white rounded-xl p-8 border-l-4 border-red-500 shadow-sm">
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                {t('challenge')}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {((project as any).projectChallenge)[locale] || ((project as any).projectChallenge)['en']}
                                            </p>
                                        </div>
                                    )}
                                    {(project as any).projectSolution && (
                                        <div className="bg-white rounded-xl p-8 border-l-4 border-blue-500 shadow-sm">
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                {t('solution')}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {((project as any).projectSolution)[locale] || ((project as any).projectSolution)['en']}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Results */}
                                {(project as any).projectResults && (
                                    <div className="bg-slate-900 rounded-xl p-8 text-white shadow-lg overflow-hidden relative">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                                            <Trophy className="text-yellow-400" size={24} />
                                            {t('results')}
                                        </h3>
                                        <div className="grid sm:grid-cols-1 gap-4 relative z-10">
                                            {(((project as any).projectResults)[locale] || ((project as any).projectResults)['en']).map((result: string, idx: number) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
                                                    <span className="text-slate-200 text-lg">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Gallery (Placeholder for multi-image support) */}
                        <div className="grid grid-cols-2 gap-4">
                            {project.images.slice(1).map((img, idx) => (
                                <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-sm">
                                    <Image src={img} alt={`${title} - ${idx + 2}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Company Promise */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-lg">
                            <h3 className="text-xl font-bold mb-4">{t('whyChooseUs') || 'Why Choose Yudong?'}</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-blue-200 mt-0.5 flex-shrink-0" />
                                    <span>{t('reason1') || '40+ Years Manufacturing Experience'}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-blue-200 mt-0.5 flex-shrink-0" />
                                    <span>{t('reason2') || 'A-Class Boiler License'}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-blue-200 mt-0.5 flex-shrink-0" />
                                    <span>{t('reason3') || 'Global Installation Support'}</span>
                                </li>
                            </ul>

                            <Link href="/contact" className="mt-8 block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                {tCommon('contactUs')}
                            </Link>
                        </div>

                        {/* Related Product */}
                        {relatedProduct && (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                                <h3 className="font-bold text-slate-900 mb-4">{t('relatedProduct') || 'Related Product'}</h3>
                                <Link href={`/products/${relatedProduct.id}`} className="block group">
                                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-slate-100">
                                        <Image
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name.en}
                                            fill
                                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {(relatedProduct.name as any)[locale] || relatedProduct.name.en}
                                    </h4>
                                    <div
                                        className="text-blue-600 text-sm font-medium inline-flex items-center group-hover:underline"
                                    >
                                        {tCommon('readMore')} <ArrowRight size={14} className="ml-1" />
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* Quick Inquiry Form */}
                        <SimpleInquiryForm />
                    </div>
                </div>
            </div>
        </div >
    );
}
