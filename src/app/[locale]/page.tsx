import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ProductCategories } from "@/components/home/ProductCategories";
import { AboutSnippet } from "@/components/home/AboutSnippet";

import { Metadata } from "next";
import { getSEOConfig } from "@/lib/seo-service";
import { routing } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const seoConfig = await getSEOConfig();
  const baseUrl = seoConfig.global.baseUrl;

  const languages: Record<string, string> = {};
  routing.locales.forEach((l) => {
    languages[l] = `${baseUrl}/${l}`;
  });

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: languages,
    }
  };
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <ProductCategories />
      <AboutSnippet />
    </div>
  );
}

