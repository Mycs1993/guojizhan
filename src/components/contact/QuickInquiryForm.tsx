"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, Loader2, CheckCircle } from "lucide-react";

interface QuickInquiryFormProps {
  productName?: string;
}

export function QuickInquiryForm({ productName }: QuickInquiryFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: productName || "Product Inquiry",
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center">
        <CheckCircle className="mx-auto text-green-500 mb-3" size={48} />
        <h3 className="text-lg font-bold text-slate-900 mb-2">Message Sent!</h3>
        <p className="text-sm text-slate-500 mb-4">We will respond within 24 hours.</p>
        <button onClick={() => setIsSubmitted(false)} className="text-blue-600 text-sm font-medium">
          Send another inquiry
        </button>
      </div>
    );
  }


  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 ring-4 ring-blue-50/50">
      <h3 className="text-xl font-bold text-slate-900 mb-2">Get a Quote</h3>
      <p className="text-slate-500 mb-6 text-sm">Factory direct price. Customized solution.</p>

      {error && <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none text-sm"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none text-sm"
        />
        <textarea
          rows={3}
          placeholder="Requirements (Capacity, Fuel...)"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none text-sm resize-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group disabled:opacity-70"
        >
          {isSubmitting ? (
            <><Loader2 size={20} className="animate-spin" /> Sending...</>
          ) : (
            <>Send Inquiry Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>
      </form>

      <p className="text-xs text-center text-slate-400 mt-4">
        <ShieldCheck size={12} className="inline mr-1" />
        Your information is 100% secure.
      </p>
    </div>
  );
}
