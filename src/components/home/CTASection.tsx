"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { COMPANY_INFO } from "@/data/company";

export function CTASection() {
  const t = useTranslations('CTASection');

  return (
    <section className="bg-blue-700 relative overflow-hidden py-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            {t('getQuote')}
            <ArrowRight size={20} />
          </Link>
          <a
            href={`https://wa.me/${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            {t('whatsapp')}
          </a>
        </div>

        <p className="mt-6 text-blue-200 text-sm">
          {t('features')}
        </p>
      </div>
    </section>
  );
}
