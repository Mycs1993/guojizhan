import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { CheckCircle, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductSchema } from "@/components/seo/ProductSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { generateProductMetadata, generateBreadcrumbs } from "@/lib/seo";
import { getSEOConfig } from "@/lib/seo-service";
import { routing } from "@/i18n/routing";
import { getLocale } from "next-intl/server";
import { QuickInquiryForm } from "@/components/contact/QuickInquiryForm";
import { ProductFAQ } from "@/components/product/ProductFAQ";
import { Info } from "lucide-react";

// --- Localization Data ---
const PAGE_TEXT: Record<string, any> = {
  en: {
    home: "Home",
    products: "Products",
    highResImage: "High Resolution Image of",
    productOverview: "Product Overview",
    keyFeatures: "Key Features",
    techSpecs: "Technical Specifications",
    whyChoose: "Why Choose Henan Yudong?",
    isoTitle: "ISO9001 & ASME",
    isoDesc: "Certified Manufacturer",
    supportTitle: "24/7 Support",
    supportDesc: "Response within 1 hour",
    consultTitle: "Free Consultation",
    consultDesc: "Expert engineering advice",
    columns: {
      model: "Model",
      capacity: "Rated Capacity",
      pressure: "Pressure",
      efficiency: "Efficiency",
      fuel: "Fuel",
      dimensions: "Dimensions (LxWxH)",
      weight: "Weight",
      heatingSurface: "Heating Surface",
      waterCapacity: "Water Capacity",
      oilCapacity: "Oil Capacity",
      circulationVolume: "Circulation Rate",
      pipeDiameter: "Pipe Diameter",
      fuelConsumption: "Consumption",
      steamTemp: "Steam Temp",
      feedWaterTemp: "Feed Water Temp",
      condenserArea: "Condenser Area",
      economizerArea: "Economizer Area",
      grateArea: "Grate Area",
      maxTemp: "Max Temp",
      outletTemp: "Outlet Temp",
      inletTemp: "Inlet Temp",
      exhaustTemp: "Exhaust Temp",
      blowdownRate: "Blowdown Rate",
      ambientTemp: "Ambient Temp",
      powerSupply: "Power Supply",
      totalPower: "Total Power",
      thermalPower: "Thermal Power (kW)",
      hotAirTemp: "Hot Air Temp",
      outputHeat: "Output Heat",
      airVolume: "Air Volume",
      blowerPower: "Blower Power"
    }
  },
  zh: {
    home: "首页",
    products: "产品中心",
    highResImage: "高清图片：",
    productOverview: "产品概览",
    keyFeatures: "核心特点",
    techSpecs: "技术参数",
    whyChoose: "为什么选择豫东锅炉？",
    isoTitle: "ISO9001 & ASME",
    isoDesc: "认证制造商",
    supportTitle: "7x24小时支持",
    supportDesc: "1小时内快速响应",
    consultTitle: "免费咨询",
    consultDesc: "专家级工程建议",
    columns: {
      model: "型号",
      capacity: "额定容量",
      pressure: "额定压力",
      efficiency: "热效率",
      fuel: "适用燃料",
      dimensions: "外形尺寸 (LxWxH)",
      weight: "运输重量",
      heatingSurface: "受热面积",
      waterCapacity: "水容量",
      oilCapacity: "导热油容量",
      circulationVolume: "循环流量",
      pipeDiameter: "管径",
      fuelConsumption: "燃料消耗",
      steamTemp: "蒸汽温度",
      feedWaterTemp: "给水温度",
      condenserArea: "冷凝器面积",
      economizerArea: "节能器面积",
      grateArea: "炉排面积",
      maxTemp: "最高温度",
      outletTemp: "出水/出油温度",
      inletTemp: "进水/进油温度",
      exhaustTemp: "排烟温度",
      blowdownRate: "排污率",
      ambientTemp: "环境温度",
      powerSupply: "电源",
      totalPower: "总装机功率",
      thermalPower: "热功率 (kW)",
      hotAirTemp: "热风温度",
      outputHeat: "输出热量",
      airVolume: "风量",
      blowerPower: "风机功率"
    }
  },
  es: {
    home: "Inicio",
    products: "Productos",
    highResImage: "Imagen de alta resolución de",
    productOverview: "Descripción del producto",
    keyFeatures: "Características clave",
    techSpecs: "Especificaciones técnicas",
    whyChoose: "¿Por qué elegir Henan Yudong?",
    isoTitle: "ISO9001 y ASME",
    isoDesc: "Fabricante certificado",
    supportTitle: "Soporte 24/7",
    supportDesc: "Respuesta en 1 hora",
    consultTitle: "Consulta gratuita",
    consultDesc: "Asesoramiento de ingeniería experto",
    columns: {
      model: "Modelo",
      capacity: "Capacidad nominal",
      pressure: "Presión",
      efficiency: "Eficiencia",
      fuel: "Combustible",
      dimensions: "Dimensiones (LxAxA)",
      weight: "Peso",
      heatingSurface: "Superficie de calentamiento",
      waterCapacity: "Capacidad de agua",
      oilCapacity: "Capacidad de aceite",
      circulationVolume: "Tasa de circulación",
      pipeDiameter: "Diámetro de tubería",
      fuelConsumption: "Consumo",
      steamTemp: "Temp. de vapor",
      feedWaterTemp: "Temp. de agua de alimentación",
      condenserArea: "Área del condensador",
      economizerArea: "Área del economizador",
      grateArea: "Área de la rejilla",
      maxTemp: "Temp. máxima",
      outletTemp: "Temp. de salida",
      inletTemp: "Temp. de entrada",
      exhaustTemp: "Temp. de escape",
      blowdownRate: "Tasa de purga",
      ambientTemp: "Temp. ambiente",
      powerSupply: "Fuente de alimentación",
      totalPower: "Potencia total",
      thermalPower: "Potencia térmica (kW)",
      hotAirTemp: "Temp. aire caliente",
      outputHeat: "Calor de salida",
      airVolume: "Volumen de aire",
      blowerPower: "Potencia del soplador"
    }
  },
  fr: {
    home: "Accueil",
    products: "Produits",
    highResImage: "Image haute résolution de",
    productOverview: "Aperçu du produit",
    keyFeatures: "Caractéristiques principales",
    techSpecs: "Spécifications techniques",
    whyChoose: "Pourquoi choisir Henan Yudong ?",
    isoTitle: "ISO9001 et ASME",
    isoDesc: "Fabricant certifié",
    supportTitle: "Assistance 24/7",
    supportDesc: "Réponse sous 1 heure",
    consultTitle: "Consultation gratuite",
    consultDesc: "Conseils d'experts en ingénierie",
    columns: {
      model: "Modèle",
      capacity: "Capacité nominale",
      pressure: "Pression",
      efficiency: "Efficacité",
      fuel: "Carburant",
      dimensions: "Dimensions (LxlxH)",
      weight: "Poids",
      heatingSurface: "Surface de chauffe",
      waterCapacity: "Capacité en eau",
      oilCapacity: "Capacité en huile",
      circulationVolume: "Taux de circulation",
      pipeDiameter: "Diamètre du tuyau",
      fuelConsumption: "Consommation",
      steamTemp: "Temp. vapeur",
      feedWaterTemp: "Temp. eau d'alimentation",
      condenserArea: "Zone du condenseur",
      economizerArea: "Zone de l'économiseur",
      grateArea: "Zone de la grille",
      maxTemp: "Temp. max",
      outletTemp: "Temp. de sortie",
      inletTemp: "Temp. d'entrée",
      exhaustTemp: "Temp. d'échappement",
      blowdownRate: "Taux de purge",
      ambientTemp: "Temp. ambiante",
      powerSupply: "Alimentation électrique",
      totalPower: "Puissance totale",
      thermalPower: "Puissance thermique (kW)",
      hotAirTemp: "Temp. air chaud",
      outputHeat: "Chaleur de sortie",
      airVolume: "Volume d'air",
      blowerPower: "Puissance du ventilateur"
    }
  },
  de: {
    home: "Startseite",
    products: "Produkte",
    highResImage: "Hochauflösendes Bild von",
    productOverview: "Produktübersicht",
    keyFeatures: "Hauptmerkmale",
    techSpecs: "Technische Daten",
    whyChoose: "Warum Henan Yudong wählen?",
    isoTitle: "ISO9001 & ASME",
    isoDesc: "Zertifizierter Hersteller",
    supportTitle: "24/7 Support",
    supportDesc: "Antwort innerhalb von 1 Stunde",
    consultTitle: "Kostenlose Beratung",
    consultDesc: "Experten-Ingenieurberatung",
    columns: {
      model: "Modell",
      capacity: "Nennkapazität",
      pressure: "Druck",
      efficiency: "Effizienz",
      fuel: "Brennstoff",
      dimensions: "Abmessungen (LxBxH)",
      weight: "Gewicht",
      heatingSurface: "Heizfläche",
      waterCapacity: "Wasserkapazität",
      oilCapacity: "Ölkapazität",
      circulationVolume: "Zirkulationsrate",
      pipeDiameter: "Rohrdurchmesser",
      fuelConsumption: "Verbrauch",
      steamTemp: "Dampftemp.",
      feedWaterTemp: "Speisewassertemp.",
      condenserArea: "Kondensatorfläche",
      economizerArea: "Economizerfläche",
      grateArea: "Rostfläche",
      maxTemp: "Max. Temp.",
      outletTemp: "Austrittstemp.",
      inletTemp: "Eintrittstemp.",
      exhaustTemp: "Abgastemp.",
      blowdownRate: "Absalzrate",
      ambientTemp: "Umgebungstemp.",
      powerSupply: "Stromversorgung",
      totalPower: "Gesamtleistung",
      thermalPower: "Wärmeleistung (kW)",
      hotAirTemp: "Heißlufttemp.",
      outputHeat: "Ausgangswärme",
      airVolume: "Luftvolumen",
      blowerPower: "Gebläseleistung"
    }
  },
  ru: {
    home: "Главная",
    products: "Продукция",
    highResImage: "Изображение высокого разрешения",
    productOverview: "Обзор продукта",
    keyFeatures: "Ключевые особенности",
    techSpecs: "Технические характеристики",
    whyChoose: "Почему выбирают Henan Yudong?",
    isoTitle: "ISO9001 и ASME",
    isoDesc: "Сертифицированный производитель",
    supportTitle: "Поддержка 24/7",
    supportDesc: "Ответ в течение 1 часа",
    consultTitle: "Бесплатная консультация",
    consultDesc: "Экспертные инженерные советы",
    columns: {
      model: "Модель",
      capacity: "Номинальная мощность",
      pressure: "Давление",
      efficiency: "Эффективность",
      fuel: "Топливо",
      dimensions: "Размеры (ДхШхВ)",
      weight: "Вес",
      heatingSurface: "Поверхность нагрева",
      waterCapacity: "Объем воды",
      oilCapacity: "Объем масла",
      circulationVolume: "Скорость циркуляции",
      pipeDiameter: "Диаметр трубы",
      fuelConsumption: "Потребление",
      steamTemp: "Темп. пара",
      feedWaterTemp: "Темп. питательной воды",
      condenserArea: "Площадь конденсатора",
      economizerArea: "Площадь экономайзера",
      grateArea: "Площадь решетки",
      maxTemp: "Макс. темп.",
      outletTemp: "Темп. выхода",
      inletTemp: "Темп. входа",
      exhaustTemp: "Темп. выхлопа",
      blowdownRate: "Скорость продувки",
      ambientTemp: "Темп. окр. среды",
      powerSupply: "Электропитание",
      totalPower: "Общая мощность",
      thermalPower: "Тепловая мощность (кВт)",
      hotAirTemp: "Темп. гор. воздуха",
      outputHeat: "Выходное тепло",
      airVolume: "Объем воздуха",
      blowerPower: "Мощность вентилятора"
    }
  },
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    highResImage: "صورة عالية الدقة لـ",
    productOverview: "نظرة عامة على المنتج",
    keyFeatures: "الميزات الرئيسية",
    techSpecs: "المواصفات الفنية",
    whyChoose: "لماذا تختار Henan Yudong؟",
    isoTitle: "ISO9001 & ASME",
    isoDesc: "مصنع معتمد",
    supportTitle: "دعم 24/7",
    supportDesc: "الرد في غضون ساعة واحدة",
    consultTitle: "استشارة مجانية",
    consultDesc: "نصائح هندسية من الخبراء",
    columns: {
      model: "الموديل",
      capacity: "السعة المقدرة",
      pressure: "الضغط",
      efficiency: "الكفاءة",
      fuel: "الوقود",
      dimensions: "الأبعاد (طول×عرض×ارتفاع)",
      weight: "الوزن",
      heatingSurface: "سطح التسخين",
      waterCapacity: "سعة المياه",
      oilCapacity: "سعة الزيت",
      circulationVolume: "معدل الدوران",
      pipeDiameter: "قطر الأنبوب",
      fuelConsumption: "الاستهلاك",
      steamTemp: "درجة حرارة البخار",
      feedWaterTemp: "درجة حرارة مياه التغذية",
      condenserArea: "منطقة المكثف",
      economizerArea: "منطقة المقتصد",
      grateArea: "منطقة الشبكة",
      maxTemp: "أقصى درجة حرارة",
      outletTemp: "درجة حرارة المخرج",
      inletTemp: "درجة حرارة المدخل",
      exhaustTemp: "وجة حرارة العادم",
      blowdownRate: "معدل التفريغ",
      ambientTemp: "درجة حرارة المحيط",
      powerSupply: "مزود الطاقة",
      totalPower: "الطاقة الإجمالية",
      thermalPower: "الطاقة الحرارية (كيلوواط)",
      hotAirTemp: "درجة حرارة الهواء الساخن",
      outputHeat: "حرارة الإخراج",
      airVolume: "حجم الهواء",
      blowerPower: "طاقة المنفاخ"
    }
  }
};

const TECHNICAL_NOTE: Record<string, any> = {
  en: {
    title: "Technical Note & Customization",
    intro: "The parameters listed above are for standard reference only. As a professional manufacturer with 40+ years of experience, we specialize in <strong>customized solutions</strong> to meet your specific project requirements:",
    items: [
      { label: "Pressure", text: "Custom high-pressure designs up to 3.82 MPa or higher." },
      { label: "Fuel", text: "Adaptable for specific biomass mixtures, waste heat, or local gas types." },
      { label: "Dimensions", text: "Compact designs available for restricted boiler room spaces." },
      { label: "Voltage", text: "Electric boilers customized for local grid voltage/frequency." }
    ],
    disclaimer: "* Data is subject to change without prior notice due to continuous product improvement. Please confirm final specifications with our engineering team."
  },
  zh: {
    title: "技术说明与定制服务",
    intro: "以上列出的参数仅供标准参考。作为拥有40多年经验的专业制造商，我们专注于提供<strong>定制解决方案</strong>以满足您的特定项目需求：",
    items: [
      { label: "压力定制", text: "支持高达 3.82 MPa 或更高的高压锅炉定制设计。" },
      { label: "燃料适配", text: "可针对特定的生物质混合物、废热或当地燃气类型进行适配。" },
      { label: "尺寸调整", text: "可为受限的锅炉房空间提供紧凑型设计方案。" },
      { label: "电压定制", text: "电加热锅炉可根据当地电网电压/频率进行定制。" }
    ],
    disclaimer: "* 数据因产品持续改进可能会有变更，恕不另行通知。请与我们的工程团队确认最终规格。"
  },
  es: {
    title: "Nota Técnica y Personalización",
    intro: "Los parámetros listados anteriormente son solo para referencia estándar. Como fabricante profesional con más de 40 años de experiencia, nos especializamos en <strong>soluciones personalizadas</strong> para satisfacer los requisitos específicos de su proyecto:",
    items: [
      { label: "Presión", text: "Diseños personalizados de alta presión de hasta 3.82 MPa o más." },
      { label: "Combustible", text: "Adaptable para mezclas específicas de biomasa, calor residual o tipos de gas locales." },
      { label: "Dimensiones", text: "Diseños compactos disponibles para espacios restringidos de salas de calderas." },
      { label: "Voltaje", text: "Calderas eléctricas personalizadas para el voltaje/frecuencia de la red local." }
    ],
    disclaimer: "* Los datos están sujetos a cambios sin previo aviso debido a la mejora continua del producto. Por favor, confirme las especificaciones finales con nuestro equipo de ingeniería."
  },
  fr: {
    title: "Note Technique & Personnalisation",
    intro: "Les paramètres listés ci-dessus sont uniquement à titre de référence standard. En tant que fabricant professionnel avec plus de 40 ans d'expérience, nous sommes spécialisés dans les <strong>solutions personnalisées</strong> pour répondre aux exigences spécifiques de votre projet :",
    items: [
      { label: "Pression", text: "Conceptions personnalisées haute pression jusqu'à 3,82 MPa ou plus." },
      { label: "Carburant", text: "Adaptable pour des mélanges de biomasse spécifiques, la chaleur résiduelle ou les types de gaz locaux." },
      { label: "Dimensions", text: "Conceptions compactes disponibles pour les espaces de chaufferie restreints." },
      { label: "Tension", text: "Chaudières électriques personnalisées pour la tension/fréquence du réseau local." }
    ],
    disclaimer: "* Les données sont sujettes à modification sans préavis en raison de l'amélioration continue des produits. Veuillez confirmer les spécifications finales avec notre équipe d'ingénierie."
  },
  de: {
    title: "Technischer Hinweis & Anpassung",
    intro: "Die oben aufgeführten Parameter dienen nur als Standardreferenz. Als professioneller Hersteller mit über 40 Jahren Erfahrung sind wir auf <strong>maßgeschneiderte Lösungen</strong> spezialisiert, um Ihre spezifischen Projektanforderungen zu erfüllen:",
    items: [
      { label: "Druck", text: "Kundenspezifische Hochdruckkonstruktionen bis zu 3,82 MPa oder höher." },
      { label: "Brennstoff", text: "Anpassbar für spezifische Biomassemischungen, Abwärme oder lokale Gasarten." },
      { label: "Abmessungen", text: "Kompakte Designs für begrenzte Kesselräume verfügbar." },
      { label: "Spannung", text: "Elektrokessel, angepasst an die lokale Netzspannung/-frequenz." }
    ],
    disclaimer: "* Daten können sich aufgrund kontinuierlicher Produktverbesserungen ohne vorherige Ankündigung ändern. Bitte bestätigen Sie die endgültigen Spezifikationen mit unserem Ingenieurteam."
  },
  ru: {
    title: "Техническое примечание и индивидуализация",
    intro: "Приведенные выше параметры предназначены только для стандартной справки. Как профессиональный производитель с более чем 40-летним опытом, мы специализируемся на <strong>индивидуальных решениях</strong> для удовлетворения конкретных требований вашего проекта:",
    items: [
      { label: "Давление", text: "Индивидуальные конструкции высокого давления до 3,82 МПа или выше." },
      { label: "Топливо", text: "Возможность адаптации под конкретные смеси биомассы, отходящее тепло или местные виды газа." },
      { label: "Размеры", text: "Доступны компактные конструкции для ограниченных пространств котельных." },
      { label: "Напряжение", text: "Электрические котлы, настроенные под местное напряжение/частоту сети." }
    ],
    disclaimer: "* Данные могут быть изменены без предварительного уведомления в связи с постоянным совершенствованием продукции. Пожалуйста, уточните окончательные спецификации у нашей инженерной группы."
  },
  ar: {
    title: "ملاحظة فنية وتخصيص",
    intro: "المعايير المذكورة أعلاه هي للإشارة القياسية فقط. كشركة مصنعة مهنية تتمتع بخبرة تزيد عن 40 عامًا، نحن متخصصون في <strong>الحلول المخصصة</strong> لتلبية متطلبات مشروعك المحددة:",
    items: [
      { label: "الضغط", text: "تصاميم مخصصة للضغط العالي تصل إلى 3.82 ميجا باسكال أو أعلى." },
      { label: "الوقود", text: "قابل للتكيف مع مخاليط الكتلة الحيوية المحددة، أو الحرارة المهدرة، أو أنواع الغاز المحلية." },
      { label: "الأبعاد", text: "تصاميم مدمجة متاحة لمساحات غرف الغلايات المقيدة." },
      { label: "الجهد الكهربي", text: "غلايات كهربائية مخصصة لجهد/تردد الشبكة المحلية." }
    ],
    disclaimer: "* البيانات عرضة للتغيير دون إشعار مسبق بسبب التحسين المستمر للمنتج. يرجى تأكيد المواصفات النهائية مع فريق الهندسة لدينا."
  }
};


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale() as 'en' | 'zh';
  const product = PRODUCT_CATEGORIES.find((p) => p.id === id);

  if (!product) {
    return {};
  }

  const meta = await generateProductMetadata(product, locale);
  const seoConfig = await getSEOConfig();
  const baseUrl = seoConfig.global.baseUrl;

  const languages: Record<string, string> = {};
  routing.locales.forEach((l) => {
    languages[l] = `${baseUrl}/${l}/products/${product.id}`;
  });

  return {
    ...meta,
    alternates: {
      canonical: `${baseUrl}/${locale}/products/${product.id}`,
      languages: languages,
    }
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const locale = await getLocale();
  const product = PRODUCT_CATEGORIES.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Helper to safely get localized content with fallback to English
  const t = (field: any) => field[locale] || field['en'];
  const pText = PAGE_TEXT[locale] || PAGE_TEXT['en'];

  const breadcrumbs = generateBreadcrumbs(`/products/${id}`, { [id]: t(product.name) });

  return (
    <>
      <ProductSchema productId={id} locale={locale as any} />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="bg-white min-h-screen pb-20">
        {/* Product Hero */}
        <div className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white">{pText.home}</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white">{pText.products}</Link>
              <span>/</span>
              <span className="text-white font-medium">{t(product.name)}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t(product.name)}</h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              {t(product.description)}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Product Image */}
              <div className="bg-slate-100 rounded-xl overflow-hidden aspect-video mb-8 relative flex items-center justify-center border border-slate-200">
                <span className="text-slate-400 text-lg font-medium">{pText.highResImage} {t(product.name)}</span>
                <Image
                  src={product.image}
                  alt={t(product.name)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 100vw"
                  priority
                />
              </div>

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{pText.productOverview}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  {t(product.fullDescription)}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{pText.keyFeatures}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                      <span className="text-slate-700">{t(feature)}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{pText.techSpecs}</h3>

                {/* Dynamic Table Logic - Full Columns with Sticky Model */}
                {(() => {
                  const allKeys = new Set<string>();
                  product.specs.forEach(spec => Object.keys(spec).forEach(k => allKeys.add(k)));

                  const columnConfig: Record<string, string> = pText.columns;

                  // Show ALL columns that exist in the data (excluding model which is handled separately)
                  const visibleColumns = Object.keys(columnConfig).filter(key => allKeys.has(key) && key !== 'model');

                  return (
                    <div className="relative overflow-x-auto rounded-lg border border-slate-200 mb-8 shadow-sm">
                      <table className="w-full border-collapse text-sm text-left whitespace-nowrap">
                        <thead className="bg-slate-50 text-slate-700 font-semibold">
                          <tr>
                            {/* Sticky Model Header */}
                            <th className="sticky left-0 z-20 bg-slate-50 p-3 border-b border-r border-slate-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] min-w-[120px]">
                              {columnConfig.model}
                            </th>
                            {/* Other Headers */}
                            {visibleColumns.map(key => (
                              <th key={key} className="p-3 border-b border-slate-200 bg-slate-50 min-w-[100px]">
                                {columnConfig[key]}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {product.specs.map((spec, idx) => (
                            <tr key={idx} className="hover:bg-blue-50/30 transition-colors odd:bg-white even:bg-slate-50/50">
                              {/* Sticky Model Cell */}
                              <td className="sticky left-0 z-10 p-3 border-b border-r border-slate-200 font-bold text-slate-900 bg-inherit shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                {spec.model}
                              </td>
                              {/* Other Cells */}
                              {visibleColumns.map(key => (
                                <td key={key} className="p-3 border-b border-slate-200 text-slate-600">
                                  {/* @ts-ignore */}
                                  {spec[key] || "-"}
                                  {/* Show unit for Oil Capacity and Circulation Rate if needed/not in data */}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })()}

                {/* Technical Note & Customization CTA */}
                {(() => {
                  const content = TECHNICAL_NOTE[locale] || TECHNICAL_NOTE['en'];

                  return (
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-12">
                      <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
                        <Info size={20} className="text-blue-600" />
                        {content.title}
                      </h4>
                      <div className="space-y-4 text-sm text-slate-600">
                        <p dangerouslySetInnerHTML={{ __html: content.intro }} />
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                          {content.items.map((item: any, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">●</span>
                              <span><strong>{item.label}:</strong> {item.text}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="italic text-slate-500 text-xs border-t border-slate-200 pt-3 mt-2">
                          {content.disclaimer}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* FAQ Section Integrated into Main Content Flow */}
              <div className="mt-12">
                <ProductFAQ
                  locale={locale as any}
                  productFaqs={product.faq?.map(f => ({
                    question: f.question[locale] || f.question['en'],
                    answer: f.answer[locale] || f.answer['en']
                  }))}
                />
              </div>
            </div>
            {/* Removed extra closing div to keep sidebar inside grid */}

            <div className="lg:col-span-1">
              <div className="sticky top-[140px] space-y-6">

                {/* Main Conversion Card */}
                <QuickInquiryForm productName={product.name[locale]} />

                {/* Trust Badge Card */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">{pText.whyChoose}</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-white p-1.5 rounded-full shadow-sm text-green-600 mt-0.5">
                        <ShieldCheck size={14} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-slate-800">{pText.isoTitle}</span>
                        <span className="text-xs text-slate-500">{pText.isoDesc}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white p-1.5 rounded-full shadow-sm text-blue-600 mt-0.5">
                        <Clock size={14} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-slate-800">{pText.supportTitle}</span>
                        <span className="text-xs text-slate-500">{pText.supportDesc}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white p-1.5 rounded-full shadow-sm text-orange-600 mt-0.5">
                        <MessageSquare size={14} />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-slate-800">{pText.consultTitle}</span>
                        <span className="text-xs text-slate-500">{pText.consultDesc}</span>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
