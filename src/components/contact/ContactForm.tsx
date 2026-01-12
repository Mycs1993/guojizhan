"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useLocale } from "next-intl";

import { useTranslations } from "next-intl";

export function ContactForm() {
  const locale = useLocale();
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
    console.log("=== FORM SUBMIT CLICKED ===", formData);
    setIsSubmitting(true);
    setError(null);

    try {
      const endpoint = "/.netlify/functions/contact";
      console.log(`=== SENDING REQUEST TO ${endpoint} ===`);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("=== RESPONSE STATUS ===", res.status, res.statusText);
      const responseData = await res.json().catch(() => ({}));
      console.log("=== RESPONSE DATA ===", responseData);

      if (!res.ok) {
        throw new Error(responseData.error || `Server Error: ${res.status}`);
      }

      console.log("=== SUCCESS ===");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error("=== ERROR ===", err);
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Side */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{t('contactInfo')}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{t('phoneWhatsapp')}</h4>
                  <p className="text-slate-600 mt-1">{COMPANY_INFO.phone}</p>
                  <p className="text-slate-500 text-sm mt-1">{(COMPANY_INFO.contactPerson as any)[locale]}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{t('email')}</h4>
                  <p className="text-slate-600 mt-1">{COMPANY_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{t('factoryAddress')}</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">{(COMPANY_INFO.location as any)[locale]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 rounded-xl h-64 overflow-hidden shadow-sm border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3358.3768!2d115.000613!3d33.947227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU2JzUwLjAiTiAxMTXCsDAwJzAyLjIiRQ!5e0!3m2!1sen!2scn!4v1709825421039!5m2!1sen!2scn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Henan Yudong Boiler Factory Map"
            />
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('sendMessage')}</h2>
              <p className="text-slate-500">{t('fillForm')}</p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="inline-flex bg-green-100 text-green-600 p-4 rounded-full mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{t('messageSent')}</h3>
                <p className="text-green-700">{t('thankYouContact')}</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 text-green-700 font-medium hover:underline">
                  {t('sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
