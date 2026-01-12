"use client";

import { Project } from "@/data/projects";
import { Link } from "@/i18n/routing";
import { ArrowRight, MapPin, Calendar, Activity } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
    project: Project;
    locale: string;
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
    const t = useTranslations('ProjectPage');
    const tCountries = useTranslations('HomePage.GlobalReach.Countries');

    // Helper to safely access localized string
    const getLocalized = (obj: any) => obj[locale] || obj['en'];

    return (
        <Link
            href={`/projects/${project.id}`}
            className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-slate-100">
                <Image
                    src={project.images[0]}
                    alt={getLocalized(project.title)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Flag & Country Badge */}
                <div className="absolute top-4 left-4 bg-white shadow-md px-4 py-2 rounded-full flex items-center gap-3 border border-slate-100 z-10">
                    <Image
                        src={`/images/flags/${project.countryCode}.png`}
                        alt={project.countryCode}
                        width={28}
                        height={21}
                        className="rounded-sm object-cover shadow-sm"
                    />
                    <span className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                        {tCountries(project.countryCode as any)}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Industry Tag */}
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md uppercase tracking-wider">
                        {project.industry}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {getLocalized(project.title)}
                </h3>

                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {getLocalized(project.description)}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Activity className="w-4 h-4 text-slate-400" />
                        <span>{project.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{project.installDate}</span>
                    </div>
                </div>

                <div
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-slate-50 group-hover:bg-blue-600 text-slate-600 group-hover:text-white rounded-lg transition-colors font-medium text-sm"
                >
                    {t('viewCase')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}
