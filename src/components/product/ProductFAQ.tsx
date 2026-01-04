"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ_DATA: Record<string, FAQItem[]> = {
    en: [
        {
            question: "What is the typical delivery time for this boiler?",
            answer: "For standard models, shipping is within 7-15 days. For customized high-pressure or large-tonnage boilers, production typically takes 20-35 days to ensure rigorous ASME standard testing."
        },
        {
            question: "Do you provide installation and commissioning services overseas?",
            answer: "Yes, we offer complete turnkey solutions. We can dispatch senior engineers to your site for installation guidance, commissioning, and free training for your local operators."
        },
        {
            question: "What is the warranty period?",
            answer: "We provide an industry-leading 24-month warranty for the main pressure parts. Accessories come with a 12-month warranty. Lifetime technical support is included with every purchase."
        },
        {
            question: "Can this boiler run on dual fuels (e.g., gas and oil)?",
            answer: "Absolutely. Our boilers can be equipped with premium dual-fuel burners (e.g., Weishaupt/Riello), allowing you to switch between Natural Gas, Diesel, or Heavy Oil to optimize operational costs."
        },
        {
            question: "Is this boiler ASME or CE certified?",
            answer: "Yes, our manufacturing facility is ISO9001 certified, and we can provide ASME 'S' & 'U' stamps or CE marking upon request to meet your local regulatory requirements."
        }
    ],
    zh: [
        {
            question: "这款锅炉的典型交货时间是多久？",
            answer: "标准型号通常在 7-15 天内发货。对于定制的高压或大吨位锅炉，生产通常需要 20-35 天，以确保通过严格的 ASME 标准测试。"
        },
        {
            question: "你们提供海外安装和调试服务吗？",
            answer: "是的，我们提供完整的交钥匙解决方案。我们可以派遣高级工程师到现场进行安装指导、调试，并为您当地的操作人员提供免费培训。"
        },
        {
            question: "保修期是多久？",
            answer: "主要的受压部件我们提供行业领先的 24 个月保修。配件享有 12 个月保修。购买即可享受终身技术支持。"
        },
        {
            question: "这台锅炉可以使用双燃料（如气和油）吗？",
            answer: "当然。我们的锅炉可以配备优质的双燃料燃烧器（如威索/利雅路），让您可以在天然气、柴油或重油之间自由切换，以优化运行成本。"
        },
        {
            question: "这台锅炉有 ASME 或 CE 认证吗？",
            answer: "有的，我们的生产设施通过了 ISO9001 认证，并且我们可以根据您的要求提供 ASME 'S' & 'U' 钢印或 CE 标志，以满足您当地的监管要求。"
        }
    ]
};

export function ProductFAQ({ locale }: { locale: "en" | "zh" }) {
    // Use explicit fallback to 'en' if locale is not found
    const items = FAQ_DATA[locale] || FAQ_DATA['en'];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Generate Google Schema JSON-LD for FAQ
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />

                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    {locale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
                </h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-slate-800 text-lg pr-4">{item.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-blue-600 flex-shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-slate-400 flex-shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
