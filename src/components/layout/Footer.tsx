"use client";

import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: tNav('home') },
    { href: "/products", label: tNav('products') },
    { href: "/about", label: tNav('about') },
    { href: "/news", label: tNav('news') },
    { href: "/contact", label: tNav('contact') },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              HENAN YUDONG<span className="text-blue-400">BOILER</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t('companyIntro')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-800 pb-2 inline-block">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-800 pb-2 inline-block">{t('ourProducts')}</h4>
            <ul className="space-y-3">
              <li><Link href="/products/wns-oil-gas-boiler" className="text-slate-400 hover:text-white text-sm">{t('products.oilGas')}</Link></li>
              <li><Link href="/products/szl-biomass-boiler" className="text-slate-400 hover:text-white text-sm">{t('products.biomass')}</Link></li>
              <li><Link href="/products/dzl-coal-boiler" className="text-slate-400 hover:text-white text-sm">{t('products.coal')}</Link></li>
              <li><Link href="/products/yyw-thermal-oil" className="text-slate-400 hover:text-white text-sm">{t('products.thermalOil')}</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white text-sm">{t('products.pressureVessel')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-800 pb-2 inline-block">{t('contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span>{t('location')}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} {(COMPANY_INFO.name as any)[useLocale()]} {t('rightsReserved')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">{t('privacyPolicy')}</Link>
            <Link href="/terms" className="hover:text-white">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
