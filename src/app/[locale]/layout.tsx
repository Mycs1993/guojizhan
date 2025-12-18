import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CTASection } from "@/components/home/CTASection";
import { COMPANY_INFO } from "@/data/company";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://www.yudongboiler.com"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${COMPANY_INFO.name} - Professional Boiler Manufacturer`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description: "Leading industrial boiler and pressure vessel manufacturer in China. Oil/Gas, Biomass, Coal, Electric Boilers, and Thermal Oil Heaters. ISO9001 Certified, Class A License.",
  keywords: ["industrial boiler", "steam boiler", "hot water boiler", "biomass boiler", "gas boiler", "pressure vessel", "China boiler manufacturer", "boiler supplier"],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} - Professional Boiler Manufacturer`,
    description: "Leading industrial boiler and pressure vessel manufacturer in China. Trusted by 2000+ industries worldwide.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, // Add your OG image
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} - Professional Boiler Manufacturer`,
    description: "Leading industrial boiler and pressure vessel manufacturer in China.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative`}
      >
        <NextIntlClientProvider messages={messages}>
          <OrganizationSchema />
          <Header />
          <main className="flex-grow pt-[116px] md:pt-[132px]">
            {children}
          </main>
          {/* Pre-footer Call to Action Section - Global for max conversion */}
          <CTASection />
          <Footer />

          {/* Floating Actions */}
          <FloatingCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
