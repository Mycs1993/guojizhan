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
import { getSEOConfig } from "@/lib/seo-service";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const seoConfig = await getSEOConfig();
  const baseUrl = seoConfig.global.baseUrl;
  const global = seoConfig.global;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: global.defaultTitle,
      template: `%s | ${global.siteName}`,
    },
    description: global.defaultDescription,
    keywords: global.defaultKeywords,
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
      siteName: global.siteName,
      title: global.defaultTitle,
      description: global.defaultDescription,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: global.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: global.defaultTitle,
      description: global.defaultDescription,
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
}

import { headers } from 'next/headers';

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

  // Check if this is an admin route
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || headersList.get('x-invoke-path') || '';
  const isAdminRoute = pathname.includes('/admin');

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // For admin routes, return a minimal layout
  if (isAdminRoute) {
    return (
      <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }

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
