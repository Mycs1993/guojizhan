"use client";

import { ArrowRight, ShieldCheck, Award, Globe, Factory as FactoryIcon, Leaf as LeafIcon, Zap as ZapIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const BACKGROUND_IMAGES = [
  "/images/hero/banner-1.jpg", // local image
  "https://images.unsplash.com/photo-1565457599723-93339f40822e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('HomePage.Hero');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-slate-900 text-white min-h-[calc(100vh-132px)] flex items-center overflow-hidden">

      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGES[currentSlide]})` }}
          />
        </AnimatePresence>

        {/* Dark Overlay Gradient - Essential for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
      </div>

      {/* Optional: Animated background elements */}
      {/* <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3 animate-pulse z-0"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-sm font-semibold border border-blue-600/30 backdrop-blur-sm">
              <Award size={14} />
              {t('badgeYear')}
            </span>
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-green-600/20 text-green-400 text-sm font-semibold border border-green-600/30 backdrop-blur-sm">
              <ShieldCheck size={14} />
              {t('badgeLicense')}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            {t('titleLine1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              {t('titleLine2')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl drop-shadow-md whitespace-pre-line">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/products"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1"
            >
              {t('ctaProducts')}
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white rounded-lg font-bold transition-all flex items-center justify-center hover:-translate-y-1"
            >
              {t('ctaQuote')}
            </Link>
          </div>

          {/* Trust Indicators / Social Proof */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">{t('trustedBy')}</p>
            <div className="flex flex-wrap gap-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Mock Logos - In real app use Images */}
              <div className="flex items-center gap-2 font-bold text-xl text-white drop-shadow-md"><Globe size={24} /> GlobalTextile</div>
              <div className="flex items-center gap-2 font-bold text-xl text-white drop-shadow-md"><FactoryIcon size={24} /> MegaChem</div>
              <div className="flex items-center gap-2 font-bold text-xl text-white drop-shadow-md"><LeafIcon size={24} /> EcoFood</div>
              <div className="flex items-center gap-2 font-bold text-xl text-white drop-shadow-md"><ZapIcon size={24} /> PowerGen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
