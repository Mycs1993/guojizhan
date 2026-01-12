import { COMPANY_INFO } from "@/data/company";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const COUNTRIES = [
    "cn", "us", "ru", "de", "fr", "gb", "it", "es", "ca", "au",
    "jp", "kr", "in", "br", "mx", "za", "sa", "ae", "tr", "id",
    "th", "vn", "my", "pl", "nl", "se", "ch", "kz",
    // New additions (High boiler demand markets)
    "bd", "pk", "ph", "uz", "eg", "ng", "sg", "ar", "cl", "co",
    "pe", "nz", "ie", "pt", "ro", "hu", "rs", "lk", "ke", "ma"
];

export function GlobalReach() {
    const t = useTranslations('HomePage.GlobalReach');
    const locale = useLocale();

    // Stats Logic
    const stats = COMPANY_INFO.stats.map(stat => ({
        label: (stat.label as any)[locale] || (stat.label as any)['en'],
        value: stat.value
    }));

    const half = Math.ceil(COUNTRIES.length / 2);
    const firstRow = COUNTRIES.slice(0, half);
    const secondRow = COUNTRIES.slice(half);

    return (
        <div className="flex flex-col">
            {/* Stats Section - Blue Background */}
            <section className="bg-blue-600 py-6 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-1">
                                <div className="text-3xl md:text-4xl font-bold mb-0.5 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-blue-100 font-medium text-sm md:text-base uppercase tracking-wide opacity-90">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Reach Section - White Background */}
            <section className="bg-white py-6 overflow-hidden">
                <div className="container mx-auto px-4 mb-4 text-center">
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
                        {t('title')}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-sm">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Flags Marquee */}
                <div className="flex flex-col gap-3">
                    {/* First Row */}
                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-marquee flex gap-8 items-center whitespace-nowrap py-2">
                            {firstRow.concat(firstRow).map((code, index) => (
                                <div
                                    key={`row1-${code}-${index}`}
                                    className="flex flex-col items-center gap-2 min-w-[80px] transition-all duration-300 transform hover:scale-110"
                                >
                                    <div className="relative w-14 h-10 shadow-sm rounded-md overflow-hidden bg-slate-50 border border-slate-200">
                                        <Image
                                            src={`/images/flags/${code}.png`}
                                            alt={t(`Countries.${code}`)}
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-[10px] font-medium text-slate-500 hidden sm:block">
                                        {t(`Countries.${code}`)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-marquee-reverse flex gap-8 items-center whitespace-nowrap py-2">
                            {secondRow.concat(secondRow).map((code, index) => (
                                <div
                                    key={`row2-${code}-${index}`}
                                    className="flex flex-col items-center gap-2 min-w-[80px] transition-all duration-300 transform hover:scale-110"
                                >
                                    <div className="relative w-14 h-10 shadow-sm rounded-md overflow-hidden bg-slate-50 border border-slate-200">
                                        <Image
                                            src={`/images/flags/${code}.png`}
                                            alt={t(`Countries.${code}`)}
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-[10px] font-medium text-slate-500 hidden sm:block">
                                        {t(`Countries.${code}`)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
