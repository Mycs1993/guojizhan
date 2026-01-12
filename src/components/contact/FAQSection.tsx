"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
    q: string;
    a: string;
}

interface FAQSectionProps {
    items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                    >
                        <span className="font-bold text-slate-800 text-lg pr-4">{item.q}</span>
                        {openIndex === index ? (
                            <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                        ) : (
                            <ChevronDown className="text-slate-400 flex-shrink-0" size={20} />
                        )}
                    </button>
                    <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                            }`}
                    >
                        <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            {item.a}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
