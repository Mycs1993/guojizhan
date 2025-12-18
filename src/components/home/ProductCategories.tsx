import { Link } from "@/i18n/routing";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { ArrowRight, Flame, Leaf, Factory, Zap, Thermometer, Container } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

// Map string icon names to components
const IconMap: Record<string, any> = {
  "Flame": Flame,
  "Leaf": Leaf,
  "Factory": Factory,
  "Zap": Zap,
  "Thermometer": Thermometer,
  "Container": Container,
};

export function ProductCategories() {
  const categories = PRODUCT_CATEGORIES;
  const t = useTranslations('HomePage.Products');
  const tCommon = useTranslations('Common');
  const locale = useLocale() as 'en' | 'zh';

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category: any) => {
            const Icon = IconMap[category.icon] || Factory;

            return (
              <Link
                href={`/products/${category.id}`}
                key={category.id}
                className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:border-blue-100 flex flex-col h-full"
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg bg-slate-100">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name[locale]}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-blue-50">
                      <Icon className="text-blue-600" size={48} />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.name[locale]}
                </h3>

                <p className="text-slate-600 mb-6 flex-grow">
                  {category.description[locale]}
                </p>

                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  <span>{tCommon('readMore')}</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

