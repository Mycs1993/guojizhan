import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { ContactForm } from "@/components/contact/ContactForm";
import { getTranslations } from "next-intl/server";
import { Clock, Globe, ShieldCheck, Trophy, BadgeCheck, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { FAQSection } from "@/components/contact/FAQSection";
import { GlobalMap } from "@/components/about/GlobalMap";
import Image from "next/image";

// Metadata generation ... (keep existing generateMetadata)

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  const tAbout = await getTranslations({ locale, namespace: "AboutPage" });

  return (
    <>
      <LocalBusinessSchema locale={locale} />
      <div className="bg-slate-50 min-h-screen">
        {/* Page Header with Background Image */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/facilities/rd-center.jpg"
              alt="Contact Support"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-[2px]"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">{t('title')}</h1>
            <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="-mt-10 relative z-20 mb-20">
          <ContactForm />
        </div>

        {/* Global Network Section - Added for Visual Variety */}
        <div className="bg-slate-900 py-12 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-xl md:text-2xl block">{t('whyChooseUs')}</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-8">{tAbout('globalReach')}</h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                {tAbout('globalReachDesc')}
              </p>
            </div>

            <div className="w-full h-[600px] md:h-[850px]">
              <GlobalMap />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t('whyChooseUs')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Trophy className="text-yellow-500" size={32} />}
                title={t('reason1Title')}
                desc={t('reason1Desc')}
              />
              <FeatureCard
                icon={<Globe className="text-blue-500" size={32} />}
                title={t('reason2Title')}
                desc={t('reason2Desc')}
              />
              <FeatureCard
                icon={<BadgeCheck className="text-green-500" size={32} />}
                title={t('reason3Title')}
                desc={t('reason3Desc')}
              />
              <FeatureCard
                icon={<Clock className="text-purple-500" size={32} />}
                title={t('reason4Title')}
                desc={t('reason4Desc')}
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-50 py-20 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">{t('faqTitle')}</h2>
            <FAQSection
              items={[
                { q: t('faq1Q'), a: t('faq1A') },
                { q: t('faq2Q'), a: t('faq2A') },
                { q: t('faq3Q'), a: t('faq3A') },
                { q: t('faq4Q'), a: t('faq4A') },
                { q: t('faq5Q'), a: t('faq5A') },
                { q: t('faq6Q'), a: t('faq6A') },
                { q: t('faq7Q'), a: t('faq7A') },
                { q: t('faq8Q'), a: t('faq8A') },
                { q: t('faq9Q'), a: t('faq9A') },
                { q: t('faq10Q'), a: t('faq10A') },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow text-center group">
      <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}
