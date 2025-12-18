import { Metadata } from "next";
import { COMPANY_INFO } from "@/data/company";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { ContactForm } from "@/components/contact/ContactForm";

const baseUrl = "https://www.yudongboiler.com";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote",
  description: `Contact ${COMPANY_INFO.name} for industrial boiler quotes and technical support. Phone: ${COMPANY_INFO.phone}, Email: ${COMPANY_INFO.email}. Factory located in Taikang County, Henan, China.`,
  keywords: ["boiler quote", "contact boiler manufacturer", "boiler supplier contact", "boiler inquiry", "boiler technical support"],
  openGraph: {
    title: `Contact Us - Get a Free Quote | ${COMPANY_INFO.shortName}`,
    description: "Get in touch with our expert team for quotes and technical support. Response within 24 hours.",
    url: `${baseUrl}/contact`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Yudong Boiler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${COMPANY_INFO.shortName}`,
    description: "Get quotes and technical support. Response within 24 hours.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <div className="bg-slate-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-slate-300 text-lg">
              Get in touch with our expert team for quotes and technical support
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
