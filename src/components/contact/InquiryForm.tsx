"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

interface InquiryFormProps {
    onSuccess?: () => void;
    className?: string;
}

export function InquiryForm({ onSuccess, className }: InquiryFormProps) {
    const t = useTranslations('ContactPage');

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const endpoint = "/.netlify/functions/contact";
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const responseData = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(responseData.error || `Server Error: ${res.status}`);
            }

            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            if (onSuccess) {
                setTimeout(onSuccess, 3000); // Optional: close or notify parent after success
            }
        } catch (err) {
            console.error("=== ERROR ===", err);
            setError(err instanceof Error ? err.message : "Failed to send message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={`bg-green-50 border border-green-200 rounded-lg p-8 text-center ${className}`}>
                <div className="inline-flex bg-green-100 text-green-600 p-4 rounded-full mb-4">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{t('messageSent')}</h3>
                <p className="text-green-700">{t('thankYouContact')}</p>
                <button type="button" onClick={() => setIsSubmitted(false)} className="mt-6 text-green-700 font-medium hover:underline">
                    {t('sendAnother')}
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
                    <p className="font-semibold">{t('failedToSend')}</p>
                    <p>{error}</p>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="mt-2 text-sm font-medium underline hover:text-red-800"
                    >
                        {t('tryAgain')}
                    </button>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">{t('fullName')}</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">{t('emailAddress')}</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@company.com" value={formData.email} onChange={handleChange} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">{t('phoneNumber')}</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">{t('interestProduct')}</label>
                    <select id="subject" name="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={formData.subject} onChange={handleChange}>
                        <option value="">{t('selectProduct')}</option>
                        <option value="Oil/Gas Boiler">{t('products.oilGas')}</option>
                        <option value="Biomass Boiler">{t('products.biomass')}</option>
                        <option value="Coal Boiler">{t('products.coal')}</option>
                        <option value="Thermal Oil Heater">{t('products.thermalOil')}</option>
                        <option value="Pressure Vessel">{t('products.pressureVessel')}</option>
                        <option value="Other">{t('otherInquiry')}</option>
                    </select>
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">{t('message')}</label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder={t('messagePlaceholder')} value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isSubmitting ? <>{t('processing')}</> : <><Send size={18} /> {t('sendMessageBtn')}</>}
            </button>
        </form>
    );
}
