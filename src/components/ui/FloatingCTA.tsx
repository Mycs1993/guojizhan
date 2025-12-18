"use client";

import { MessageSquare, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function FloatingCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-0 top-[60%] -translate-y-1/2 z-50 flex flex-col gap-2 p-2">
      {/* WhatsApp / Chat */}
      <a 
        href="https://wa.me/8618739408082" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-end group"
      >
        <span className="bg-green-600 text-white text-sm font-medium px-3 py-2 rounded-l-md opacity-0 group-hover:opacity-100 -mr-4 group-hover:mr-2 transition-all duration-300 shadow-md">
          Chat on WhatsApp
        </span>
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12">
          <MessageSquare size={24} fill="currentColor" />
        </div>
      </a>

      {/* Phone */}
      <a 
        href="tel:+8618739408082" 
        className="flex items-center justify-end group"
      >
        <span className="bg-blue-600 text-white text-sm font-medium px-3 py-2 rounded-l-md opacity-0 group-hover:opacity-100 -mr-4 group-hover:mr-2 transition-all duration-300 shadow-md whitespace-nowrap">
          Call: +86-187-3940-8082
        </span>
        <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12">
          <Phone size={24} />
        </div>
      </a>

      {/* Email / Quote */}
      <Link 
        href="/contact" 
        className="flex items-center justify-end group"
      >
        <span className="bg-orange-600 text-white text-sm font-medium px-3 py-2 rounded-l-md opacity-0 group-hover:opacity-100 -mr-4 group-hover:mr-2 transition-all duration-300 shadow-md whitespace-nowrap">
          Get a Free Quote
        </span>
        <div className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-12 h-12">
          <Mail size={24} />
        </div>
      </Link>
    </div>
  );
}
