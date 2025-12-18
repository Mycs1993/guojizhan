"use client";

import { useState, useTransition } from "react";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = () => {
    const nextLocale = locale === 'en' ? 'zh' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const navLinks = [
    { href: "/", label: t('home') },
    { href: "/products", label: t('products') },
    { href: "/about", label: t('about') },
    { href: "/news", label: t('news') },
    // { href: "/contact", label: t('contact') }, // Create separate button for contact
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-400" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-blue-400" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLocaleChange}
              disabled={isPending}
              className="flex items-center space-x-1 cursor-pointer hover:text-blue-400 transition-colors"
            >
              <Globe size={16} />
              <span>{locale === 'en' ? 'English' : '中文'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                HENAN YUDONG<span className="text-blue-600">BOILER</span>
              </span>
              <span className="text-xs text-slate-500 tracking-widest uppercase">
                Since {COMPANY_INFO.founded}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 font-medium hover:text-blue-600 transition-colors uppercase text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              {t('contact')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-3 rounded-md text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t('contact')}
            </Link>
            <button
              onClick={handleLocaleChange}
              className="flex items-center justify-center space-x-2 text-slate-600 py-2 border-t border-slate-100 mt-2"
            >
              <Globe size={16} />
              <span>{locale === 'en' ? 'Switch to Chinese' : 'Switch to English'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

