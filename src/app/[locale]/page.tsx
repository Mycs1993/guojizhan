import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ProductCategories } from "@/components/home/ProductCategories";
import { AboutSnippet } from "@/components/home/AboutSnippet";

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

