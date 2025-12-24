import { Link } from "@/i18n/routing";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function AboutSnippet() {
  const t = useTranslations('HomePage.About');

  // These could also be moved to translation files if they need to be translated
  // For now, we'll keep them here or assume they are static specs
  const features = [
    "Class A Boiler Manufacturing License",
    "Class D Pressure Vessel Manufacturing License",
    "ISO9001 Quality Management System",
    "Over 40 Years of Industry Experience",
    "Exported to Southeast Asia, Europe, North America",
    "Advanced Production Technology"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            {/* About Image */}
            <div className="rounded-xl overflow-hidden shadow-xl relative min-h-[400px]">
              <Image 
                src="/images/about/factory-main.jpg"
                alt="Yudong Boiler Factory"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">
              {t('subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('title')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t('description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

