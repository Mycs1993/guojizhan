"use client";

import { Link } from "@/i18n/routing";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { ArrowRight, Flame, Leaf, Factory, Zap, Thermometer, Container, CheckCircle, Wind } from "lucide-react";
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

export function ProductListWithFilter() {
    const categories = PRODUCT_CATEGORIES;
    const t = useTranslations('ProductsPage'); // Use ProductsPage translation namespace for page specific strings
    const tHome = useTranslations('HomePage.Products'); // Use HomePage namespace for tab labels
    const tCommon = useTranslations('Common');
    const locale = useLocale();

    const [activeTab, setActiveTab] = useState<"all" | "steam" | "hot_water" | "thermal_oil" | "hot_air">("all");

    const tabs = [
        { id: "all", label: tHome('tabs.all') },
        { id: "steam", label: tHome('tabs.steam') },
        { id: "thermal_oil", label: tHome('tabs.thermal_oil') },
        { id: "hot_water", label: tHome('tabs.hot_water') },
        { id: "hot_air", label: tHome('tabs.hot_air') },
    ] as const;

    const filteredProducts = activeTab === "all"
        ? categories
        : categories.filter((product) => product.category === activeTab);

    return (
        <div>
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

            {/* Product List */}
            <div className="grid grid-cols-1 gap-12">
                {filteredProducts.map((category, index) => {
                    const Icon = IconMap[category.icon] || Factory;
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={category.id}
                            id={category.id}
                            className={`bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100 flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image Placeholder Area */}
                            <div className="md:w-2/5 h-64 md:h-auto bg-slate-200 relative group overflow-hidden">
                                {/* Using standard img tag to handle external URLs reliably without Next.js config complexity for now */}
                                <img
                                    src={category.image}
                                    alt={`${category.name[locale as keyof typeof category.name]} - ${category.description[locale as keyof typeof category.description]}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors"></div>
                            </div>

                            {/* Content Area */}
                            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                        <Icon size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">{category.name[locale as keyof typeof category.name]}</h2>
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                                    {category.description[locale as keyof typeof category.description]}
                                </p>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                                    {category.features?.slice(0, 4).map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
                                            <span>{feature[locale as keyof typeof feature]}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Link
                                        href={`/contact?product=${category.id}`}
                                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        {t('requestQuote')}
                                        <ArrowRight size={18} />
                                    </Link>

                                    <Link
                                        href={`/products/${category.id}`}
                                        className="inline-flex items-center gap-2 text-slate-700 px-6 py-3 rounded-md font-medium hover:text-blue-600 transition-colors border border-slate-200 hover:border-blue-200"
                                    >
                                        {t('viewDetails')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-slate-500">
                    <p>No products found in this category.</p>
                </div>
            )}
        </div>
    );
}
