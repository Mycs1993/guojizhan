import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
              {COMPANY_INFO.intro.substring(0, 150)}...
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
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products - Placeholder for now, could be dynamic */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-800 pb-2 inline-block">Our Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products/oil-gas" className="text-slate-400 hover:text-white text-sm">Oil/Gas Boiler</Link></li>
              <li><Link href="/products/biomass" className="text-slate-400 hover:text-white text-sm">Biomass Boiler</Link></li>
              <li><Link href="/products/coal" className="text-slate-400 hover:text-white text-sm">Coal Fired Boiler</Link></li>
              <li><Link href="/products/thermal-oil" className="text-slate-400 hover:text-white text-sm">Thermal Oil Heater</Link></li>
              <li><Link href="/products/pressure-vessel" className="text-slate-400 hover:text-white text-sm">Pressure Vessels</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-slate-800 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span>{COMPANY_INFO.location}</span>
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
          <p>&copy; {currentYear} {COMPANY_INFO.name} All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

