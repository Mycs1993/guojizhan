import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-blue-700 relative overflow-hidden py-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Upgrade Your Industrial Heating System?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Get a customized energy-saving solution proposal from our senior engineers within 24 hours. 
          Maximize efficiency and minimize costs today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Free Quote
            <ArrowRight size={20} />
          </Link>
          <a 
            href="https://wa.me/8618739408082" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
        
        <p className="mt-6 text-blue-200 text-sm">
          No obligation quote • 24/7 Technical Support • Worldwide Shipping
        </p>
      </div>
    </section>
  );
}
