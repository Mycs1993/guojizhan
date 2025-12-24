"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function ContactForm() {
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
      console.log("=== SENDING REQUEST TO /api/contact ===");
      const res = await fetch("/api/contact", {
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
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Phone / WhatsApp</h4>
                  <p className="text-slate-600 mt-1">{COMPANY_INFO.phone}</p>
                  <p className="text-slate-500 text-sm mt-1">{COMPANY_INFO.contactPerson}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-600 mt-1">{COMPANY_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Factory Address</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">{COMPANY_INFO.location}</p>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
              <p className="text-slate-500">Fill out the form below and we will get back to you within 24 hours.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="inline-flex bg-green-100 text-green-600 p-4 rounded-full mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for contacting us. Our team will review your inquiry and respond shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 text-green-700 font-medium hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
                    <p className="font-semibold">Failed to send:</p>
                    <p>{error}</p>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="mt-2 text-sm font-medium underline hover:text-red-800"
                    >
                      Try Again
                    </button>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@company.com" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">Interest Product</label>
                    <select id="subject" name="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" value={formData.subject} onChange={handleChange}>
                      <option value="">Select a product...</option>
                      <option value="Oil/Gas Boiler">Oil/Gas Boiler</option>
                      <option value="Biomass Boiler">Biomass Boiler</option>
                      <option value="Coal Boiler">Coal Boiler</option>
                      <option value="Thermal Oil Heater">Thermal Oil Heater</option>
                      <option value="Pressure Vessel">Pressure Vessel</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Please describe your requirements (capacity, fuel type, application)..." value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {isSubmitting ? <>Processing...</> : <><Send size={18} /> Send Message</>}
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
