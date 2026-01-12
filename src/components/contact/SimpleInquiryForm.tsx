"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function SimpleInquiryForm() {
    const t = useTranslations('ContactPage');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        requirements: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        try {
            // Reuse the Netlify function
            const res = await fetch("/.netlify/functions/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, subject: "Quick Inquiry from Project Page" }),
            });
            if (res.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-green-50 rounded-xl p-6 text-center border border-green-100">
                <CheckCircle2 size={32} className="text-green-500 mx-auto mb-3" />
                <h4 className="font-bold text-green-800 mb-2">Inquiry Sent!</h4>
                <p className="text-sm text-green-600">We will contact you shortly.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Get a Quote</h3>
            <p className="text-slate-500 text-sm mb-6">Factory direct price. Customized solution.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Requirements (Capacity, Fuel...)"
                        rows={3}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all resize-none"
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                    {isSubmitting ? "Sending..." : (
                        <>
                            Send Inquiry Now
                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    <span>Your information is 100% secure.</span>
                </div>
            </form>
        </div>
    );
}
