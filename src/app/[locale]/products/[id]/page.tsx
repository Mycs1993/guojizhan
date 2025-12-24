import { Metadata } from "next";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { CheckCircle, MessageSquare, ShieldCheck, Clock, Download } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { generateProductMetadata, generateBreadcrumbs } from "@/lib/seo";
import { getLocale } from "next-intl/server";
import { QuickInquiryForm } from "@/components/contact/QuickInquiryForm";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale() as 'en' | 'zh';
  const product = PRODUCT_CATEGORIES.find((p) => p.id === id);

  if (!product) {
    return {};
  }

  return generateProductMetadata(product, locale);
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const locale = await getLocale() as 'en' | 'zh';
  const product = PRODUCT_CATEGORIES.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const breadcrumbs = generateBreadcrumbs(`/products/${id}`, { [id]: product.name[locale] });

  return (
    <>
      <ProductSchema productId={id} locale={locale} />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="bg-white min-h-screen pb-20">
        {/* Product Hero */}
        <div className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white">Products</Link>
              <span>/</span>
              <span className="text-white font-medium">{product.name[locale]}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{product.name[locale]}</h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              {product.description[locale]}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Product Image */}
              <div className="bg-slate-100 rounded-xl overflow-hidden aspect-video mb-8 relative flex items-center justify-center border border-slate-200">
                <span className="text-slate-400 text-lg font-medium">High Resolution Image of {product.name[locale]}</span>
                <img src={product.image} alt={product.name[locale]} className="absolute inset-0 w-full h-full object-cover" />
              </div>

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Overview</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  {product.fullDescription[locale]}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                      <span className="text-slate-700">{feature[locale]}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Specifications</h3>
                <div className="overflow-x-auto rounded-lg border border-slate-200 mb-8">
                  <table className="w-full border-collapse text-sm text-left">
                    <thead className="bg-slate-50 text-slate-700 font-semibold">
                      <tr>
                        <th className="p-4 border-b border-slate-200">Model</th>
                        <th className="p-4 border-b border-slate-200">Capacity</th>
                        <th className="p-4 border-b border-slate-200">Design Pressure</th>
                        <th className="p-4 border-b border-slate-200">Thermal Efficiency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specs.map((spec, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 border-b border-slate-200 text-slate-900 font-medium">{spec.model}</td>
                          <td className="p-4 border-b border-slate-200 text-slate-600">{spec.capacity}</td>
                          <td className="p-4 border-b border-slate-200 text-slate-600">{spec.pressure}</td>
                          <td className="p-4 border-b border-slate-200 text-green-600 font-medium">{spec.efficiency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Download Section removed per request */}
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-[140px] space-y-6">

                {/* Main Conversion Card */}
                <QuickInquiryForm productName={product.name[locale]} />

                {/* Trust Badge Card */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Why Choose Henan Yudong?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-white p-1.5 rounded-full shadow-sm text-green-600 mt-0.5">
                        <ShieldCheck size={14} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-slate-800">ISO9001 & ASME</span>
                        <span className="text-xs text-slate-500">Certified Manufacturer</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white p-1.5 rounded-full shadow-sm text-blue-600 mt-0.5">
                        <Clock size={14} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-slate-800">24/7 Support</span>
                        <span className="text-xs text-slate-500">Response within 1 hour</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white p-1.5 rounded-full shadow-sm text-orange-600 mt-0.5">
                        <MessageSquare size={14} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-slate-800">Free Consultation</span>
                        <span className="text-xs text-slate-500">Expert engineering advice</span>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
