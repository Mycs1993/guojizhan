"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
    setIsLangMenuOpen(false);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(l => l.code === locale) || languages[0];

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className="flex items-center space-x-4 relative" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              disabled={isPending}
              className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors py-1"
            >
              <Globe size={16} />
              <span>{currentLanguage.label}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown */}
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white text-slate-900 rounded-md shadow-lg border border-slate-100 py-2 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center space-x-3 ${locale === lang.code ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-900 hover:text-blue-600'}`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
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
            <div className="border-t border-slate-100 pt-4 mt-2">
              <div className="flex items-center space-x-2 text-slate-900 mb-3 px-2">
                <Globe size={16} />
                <span className="font-bold">Language</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
            <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm ${locale === lang.code ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-900 hover:bg-slate-50'}`}
            >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
            </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

