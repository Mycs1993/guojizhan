"use client";

import { useTranslations } from "next-intl";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function ProjectCTA() {
    const t = useTranslations('ProjectPage');

    return (
        <div className="container mx-auto px-4 mt-16 mb-16 relative z-10">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">

                    {/* Left Side: Content & Value Prop */}
                    <div className="lg:col-span-2 bg-slate-900 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden text-white">
                        {/* Background Patterns */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
                                <Sparkles size={14} />
                                <span>Get Your Quote</span>
                            </div>

                            <h2 className="text-3xl font-bold mb-4 leading-tight">
                                {t('ctaTitle')}
                            </h2>
                            <p className="text-slate-300 mb-8 leading-relaxed">
                                Ready to optimize your industrial heating? Our engineering team provides custom designs and energy-saving analysis within 24 hours.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-slate-200">
                                    <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                                    <span>Free Technical Proposal & Drawing</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-200">
                                    <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                                    <span>Energy Saving Analysis Report</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-200">
                                    <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                                    <span>Lifetime After-sales Support</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                            <p className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-semibold">Trusted By</p>
                            <div className="flex items-center gap-2 text-white font-bold text-xl">
                                <span>2000+</span>
                                <span className="text-sm font-normal text-slate-400 normal-case">Global Clients</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-3 p-8 md:p-10 bg-white">
                        <InquiryForm className="h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
