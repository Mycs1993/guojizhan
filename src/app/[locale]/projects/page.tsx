import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectCTA } from '@/components/projects/ProjectCTA';
import { Factory, Globe, TrendingUp } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ProjectPage' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
    };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations('ProjectPage');

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 pattern-grid-lg opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        {t('subtitle')}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-1">40+</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide">{t('stats.countries')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-1">2000+</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide">{t('stats.clients')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wide">{t('stats.satisfaction')}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 -mt-10 relative z-20">
                {/* Filter Bar (Placeholder for Phase 2) */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 mb-8 flex flex-wrap gap-4 items-center justify-between hidden">
                    <span className="text-slate-500 text-sm">Filter by Industry...</span>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} locale={locale} />
                    ))}
                </div>

                {/* Empty State (if needed) */}
                {PROJECTS.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500">{t('noProjects')}</p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <ProjectCTA />
        </div>
    );
}
