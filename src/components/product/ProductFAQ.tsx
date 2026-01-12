"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ_DATA: Record<string, FAQItem[]> = {
    en: [
        {
            question: "What is the typical delivery time for this boiler?",
            answer: "For standard models, shipping is within 7-15 days. For customized high-pressure or large-tonnage boilers, production typically takes 20-35 days to ensure rigorous ASME standard testing."
        },
        {
            question: "Do you provide installation and commissioning services overseas?",
            answer: "Yes, we offer complete turnkey solutions. We can dispatch senior engineers to your site for installation guidance, commissioning, and free training for your local operators."
        },
        {
            question: "What is the warranty period?",
            answer: "We provide an industry-leading 24-month warranty for the main pressure parts. Accessories come with a 12-month warranty. Lifetime technical support is included with every purchase."
        },
        {
            question: "Can this boiler run on dual fuels (e.g., gas and oil)?",
            answer: "Absolutely. Our boilers can be equipped with premium dual-fuel burners (e.g., Weishaupt/Riello), allowing you to switch between Natural Gas, Diesel, or Heavy Oil to optimize operational costs."
        },
        {
            question: "Is this boiler ASME or CE certified?",
            answer: "Yes, our manufacturing facility is ISO9001 certified, and we can provide ASME 'S' & 'U' stamps or CE marking upon request to meet your local regulatory requirements."
        }
    ],
    zh: [
        {
            question: "这款锅炉的典型交货时间是多久？",
            answer: "标准型号通常在 7-15 天内发货。对于定制的高压或大吨位锅炉，生产通常需要 20-35 天，以确保通过严格的 ASME 标准测试。"
        },
        {
            question: "你们提供海外安装和调试服务吗？",
            answer: "是的，我们提供完整的交钥匙解决方案。我们可以派遣高级工程师到现场进行安装指导、调试，并为您当地的操作人员提供免费培训。"
        },
        {
            question: "保修期是多久？",
            answer: "主要的受压部件我们提供行业领先的 24 个月保修。配件享有 12 个月保修。购买即可享受终身技术支持。"
        },
        {
            question: "这台锅炉可以使用双燃料（如气和油）吗？",
            answer: "当然。我们的锅炉可以配备优质的双燃料燃烧器（如威索/利雅路），让您可以在天然气、柴油或重油之间自由切换，以优化运行成本。"
        },
        {
            question: "这台锅炉有 ASME 或 CE 认证吗？",
            answer: "有的，我们的生产设施通过了 ISO9001 认证，并且我们可以根据您的要求提供 ASME 'S' & 'U' 钢印或 CE 标志，以满足您当地的监管要求。"
        }
    ],
    es: [
        {
            question: "¿Cuál es el tiempo de entrega típico para esta caldera?",
            answer: "Para modelos estándar, el envío es dentro de 7-15 días. Para calderas personalizadas de alta presión o gran tonelaje, la producción generalmente toma 20-35 días para garantizar pruebas rigurosas bajo normas ASME."
        },
        {
            question: "¿Ofrecen servicios de instalación y puesta en marcha en el extranjero?",
            answer: "Sí, ofrecemos soluciones completas llave en mano. Podemos enviar ingenieros senior a su sitio para guiar la instalación, puesta en marcha y capacitación gratuita para sus operadores locales."
        },
        {
            question: "¿Cuál es el período de garantía?",
            answer: "Ofrecemos una garantía líder en la industria de 24 meses para las partes principales de presión. Los accesorios vienen con una garantía de 12 meses. Se incluye soporte técnico de por vida con cada compra."
        },
        {
            question: "¿Puede esta caldera funcionar con combustibles duales (por ejemplo, gas y aceite)?",
            answer: "Absolutamente. Nuestras calderas pueden equiparse con quemadores duales premium (por ejemplo, Weishaupt/Riello), lo que le permite cambiar entre Gas Natural, Diésel o Aceite Pesado para optimizar los costos operativos."
        },
        {
            question: "¿Esta caldera tiene certificación ASME o CE?",
            answer: "Sí, nuestra planta de fabricación tiene certificación ISO9001, y podemos proporcionar sellos ASME 'S' & 'U' o marcado CE a pedido para cumplir con sus requisitos regulatorios locales."
        }
    ],
    fr: [
        {
            question: "Quel est le délai de livraison typique pour cette chaudière ?",
            answer: "Pour les modèles standard, l'expédition se fait sous 7 à 15 jours. Pour les chaudières personnalisées haute pression ou gros tonnage, la production prend généralement 20 à 35 jours pour garantir des tests rigoureux selon les normes ASME."
        },
        {
            question: "Fournissez-vous des services d'installation et de mise en service à l'étranger ?",
            answer: "Oui, nous proposons des solutions complètes clé en main. Nous pouvons envoyer des ingénieurs seniors sur votre site pour le guidage de l'installation, la mise en service et la formation gratuite de vos opérateurs locaux."
        },
        {
            question: "Quelle est la période de garantie ?",
            answer: "Nous offrons une garantie leader de l'industrie de 24 mois pour les pièces sous pression principales. Les accessoires sont assortis d'une garantie de 12 mois. Un support technique à vie est inclus avec chaque achat."
        },
        {
            question: "Cette chaudière peut-elle fonctionner avec deux combustibles (par exemple, gaz et fioul) ?",
            answer: "Absolument. Nos chaudières peuvent être équipées de brûleurs bi-combustibles haut de gamme (par exemple, Weishaupt/Riello), vous permettant de basculer entre le gaz naturel, le diesel ou le fioul lourd pour optimiser les coûts d'exploitation."
        },
        {
            question: "Cette chaudière est-elle certifiée ASME ou CE ?",
            answer: "Oui, notre usine de fabrication est certifiée ISO9001, et nous pouvons fournir les poinçons ASME 'S' & 'U' ou le marquage CE sur demande pour répondre à vos exigences réglementaires locales."
        }
    ],
    de: [
        {
            question: "Was ist die typische Lieferzeit für diesen Kessel?",
            answer: "Bei Standardmodellen erfolgt der Versand innerhalb von 7-15 Tagen. Bei kundenspezifischen Hochdruck- oder Großtonnagekesseln dauert die Produktion in der Regel 20-35 Tage, um strenge Tests nach ASME-Standard zu gewährleisten."
        },
        {
            question: "Bieten Sie Installations- und Inbetriebnahmedienste im Ausland an?",
            answer: "Ja, wir bieten komplette schlüsselfertige Lösungen an. Wir können leitende Ingenieure zu Ihrem Standort entsenden, um Installationsanweisungen, Inbetriebnahme und kostenlose Schulungen für Ihre lokalen Bediener anzubieten."
        },
        {
            question: "Wie lange ist die Garantiezeit?",
            answer: "Wir bieten eine branchenführende Garantie von 24 Monaten für die wichtigsten Druckteile. Zubehörteile haben eine 12-monatige Garantie. Lebenslanger technischer Support ist bei jedem Kauf inbegriffen."
        },
        {
            question: "Kann dieser Kessel mit zwei Brennstoffen (z. B. Gas und Öl) betrieben werden?",
            answer: "Absolut. Unsere Kessel können mit hochwertigen Zweistoffbrennern (z. B. Weishaupt/Riello) ausgestattet werden, sodass Sie zwischen Erdgas, Diesel oder Schweröl wechseln können, um die Betriebskosten zu optimieren."
        },
        {
            question: "Ist dieser Kessel ASME- oder CE-zertifiziert?",
            answer: "Ja, unsere Fertigungsstätte ist ISO9001-zertifiziert, und wir können auf Anfrage ASME 'S' & 'U'-Stempel oder CE-Kennzeichnung bereitstellen, um Ihre lokalen regulatorischen Anforderungen zu erfüllen."
        }
    ],
    ru: [
        {
            question: "Каков типичный срок поставки для этого котла?",
            answer: "Для стандартных моделей отгрузка осуществляется в течение 7-15 дней. Для индивидуальных котлов высокого давления или большого тоннажа производство обычно занимает 20-35 дней для обеспечения строгих испытаний по стандарту ASME."
        },
        {
            question: "Предоставляете ли вы услуги по установке и вводу в эксплуатацию за рубежом?",
            answer: "Да, мы предлагаем полные решения «под ключ». Мы можем направить старших инженеров на ваш объект для руководства установкой, ввода в эксплуатацию и бесплатного обучения ваших местных операторов."
        },
        {
            question: "Каков гарантийный срок?",
            answer: "Мы предоставляем ведущую в отрасли 24-месячную гарантию на основные детали под давлением. На аксессуары предоставляется 12-месячная гарантия. Пожизненная техническая поддержка включена в каждую покупку."
        },
        {
            question: "Может ли этот котел работать на двух видах топлива (например, газ и мазут)?",
            answer: "Безусловно. Наши котлы могут быть оснащены премиальными двухтопливными горелками (например, Weishaupt/Riello), что позволяет переключаться между природным газом, дизельным топливом или мазутом для оптимизации эксплуатационных расходов."
        },
        {
            question: "Имеет ли этот котел сертификат ASME или CE?",
            answer: "Да, наше производственное предприятие сертифицировано по ISO9001, и мы можем предоставить штампы ASME 'S' & 'U' или маркировку CE по запросу для удовлетворения ваших местных нормативных требований."
        }
    ],
    ar: [
        {
            question: "ما هو وقت التسليم النموذجي لهذه الغلاية؟",
            answer: "بالنسبة للنماذج القياسية، يتم الشحن في غضون 7-15 يومًا. بالنسبة للغلايات المخصصة ذات الضغط العالي أو الحمولة الكبيرة، يستغرق الإنتاج عادةً 20-35 يومًا لضمان اختبارات معايير ASME الصارمة."
        },
        {
            question: "هل تقدمون خدمات التركيب والتكليف في الخارج؟",
            answer: "نعم، نحن نقدم حلولاً كاملة تسليم المفتاح. يمكننا إرسال كبار المهندسين إلى موقعك لتوجيه التركيب والتكليف والتدريب المجاني للمشغلين المحليين."
        },
        {
            question: "ما هي فترة الضمان؟",
            answer: "نحن نقدم ضمانًا رائدًا في الصناعة لمدة 24 شهرًا لأجزاء الضغط الرئيسية. تأتي الملحقات بضمان لمدة 12 شهرًا. يتم تضمين الدعم الفني مدى الحياة مع كل عملية شراء."
        },
        {
            question: "هل يمكن تشغيل هذه الغلاية بوقود مزدوج (مثل الغاز والزيت)؟",
            answer: "بالتأكيد. يمكن تجهيز غلاياتنا بمواقد وقود مزدوجة متميزة (مثل Weishaupt/Riello)، مما يسمح لك بالتبديل بين الغاز الطبيعي أو الديزل أو الزيت الثقيل لتحسين تكاليف التشغيل."
        },
        {
            question: "هل هذه الغلاية حاصلة على شهادة ASME أو CE؟",
            answer: "نعم، منشأة التصنيع الخاصة بنا حاصلة على شهادة ISO9001، ويمكننا توفير أختام ASME 'S' & 'U' أو علامة CE عند الطلب لتلبية المتطلبات التنظيمية المحلية الخاصة بك."
        }
    ]
};

const FAQ_TITLES: Record<string, string> = {
    en: "Frequently Asked Questions",
    zh: "常见问题",
    es: "Preguntas Frecuentes",
    fr: "Foire Aux Questions",
    de: "Häufig Gestellte Fragen",
    ru: "Часто Задаваемые Вопросы",
    ar: "الأسئلة الشائعة"
};

// ... existing imports

interface FAQItem {
    question: string;
    answer: string;
}

// ... existing FAQ_DATA and FAQ_TITLES ...

export function ProductFAQ({ locale, productFaqs = [] }: { locale: string, productFaqs?: FAQItem[] }) {
    // 1. Get Common FAQs for current locale
    const commonItems = FAQ_DATA[locale] || FAQ_DATA['en'];

    // 2. Merge: Product Specific FAQs (First) + Common FAQs (Second)
    // This puts the most relevant technical details at the top
    const items = [...productFaqs, ...commonItems];

    const title = FAQ_TITLES[locale] || FAQ_TITLES['en'];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Generate Google Schema JSON-LD for FAQ
    // Includes both specific and common questions for maximum SEO coverage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />

                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    {title}
                </h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-slate-800 text-lg pr-4">{item.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-blue-600 flex-shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-slate-400 flex-shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
