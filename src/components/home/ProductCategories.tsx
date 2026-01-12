"use client";

import { Link } from "@/i18n/routing";
import { PRODUCT_CATEGORIES, Product } from "@/data/products";
import { ArrowRight, Flame, Leaf, Factory, Zap, Thermometer, Container, Wind } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Map string icon names to components
const IconMap: Record<string, any> = {
    "Flame": Flame,
    "Leaf": Leaf,
    "Factory": Factory,
    "Zap": Zap,
    "Thermometer": Thermometer,
    "Container": Container,
    "Wind": Wind,
};

export function ProductCategories() {
    const categories = PRODUCT_CATEGORIES;
    const t = useTranslations('HomePage.Products');
    const tCommon = useTranslations('Common');
    const locale = useLocale();

    const [activeTab, setActiveTab] = useState<"all" | "steam" | "hot_water" | "thermal_oil" | "hot_air">("all");

    const tabs = [
        { id: "all", label: t('tabs.all') },
        { id: "steam", label: t('tabs.steam') },
        { id: "thermal_oil", label: t('tabs.thermal_oil') },
        { id: "hot_water", label: t('tabs.hot_water') },
        { id: "hot_air", label: t('tabs.hot_air') },
    ] as const;

    const filteredProducts = activeTab === "all"
        ? categories
        : categories.filter((product) => product.category === activeTab);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h2>
                    <p className="text-slate-600">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border",
                                activeTab === tab.id
                                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => {
                        const Icon = IconMap[product.icon] || Factory;
                        const name = product.name[locale] || product.name['en'];
                        const description = product.description[locale] || product.description['en'];

                        return (
                            <Link
                                href={`/products/${product.id}`}
                                key={product.id}
                                className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:border-blue-100 flex flex-col h-full duration-300"
                            >
                                <div className="relative h-48 mb-6 overflow-hidden rounded-lg bg-slate-100">
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={name}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full bg-blue-50">
                                            <Icon className="text-blue-600" size={48} />
                                        </div>
                                    )}
                                    {/* Category Badge */}
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-700 shadow-sm">
                                        {t(`tabs.${product.category}`)}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {name}
                                </h3>

                                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                                    {description}
                                </p>

                                <div className="flex items-center text-blue-600 font-semibold text-sm">
                                    <span>{tCommon('readMore')}</span>
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        <p>No products found in this category.</p>
                    </div>
                )}

            </div>
        </section>
    );
}
