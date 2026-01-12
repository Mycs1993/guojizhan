import { COMPANY_INFO } from "@/data/company";
import { useTranslations, useLocale } from "next-intl";

export function Stats() {
  const t = useTranslations('HomePage.Stats');

  // Mapping keys to values from COMPANY_INFO manually or by structure
  // Here we reconstruct the stats array dynamically to use translations
  /*
  const stats = [
    { label: t('experience'), value: "40+" },
    { label: t('factoryArea'), value: "60,000 m²" },
    { label: t('production'), value: "5,000 Ton" },
    { label: t('employees'), value: "200+" },
  ];
  */

  const locale = useLocale();
  const stats = COMPANY_INFO.stats.map(stat => ({
    label: (stat.label as any)[locale] || (stat.label as any)['en'],
    value: stat.value
  }));

  return (
    <section className="py-8 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-blue-100 font-medium text-lg md:text-xl uppercase tracking-wide opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

