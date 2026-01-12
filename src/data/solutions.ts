export interface Solution {
    id: string;
    icon: string; // Lucide icon name or image path
    title: {
        en: string;
        zh: string;
        ru: string;
        es: string;
        fr: string;
        ar: string;
    };
    summary: { // Short description for card
        en: string;
        zh: string;
        ru: string;
        es: string;
        fr: string;
        ar: string;
    };
    description: { // Full description for detail page
        en: string;
        zh: string;
        ru: string;
        es: string;
        fr: string;
        ar: string;
    };
    painPoints: {
        en: string[];
        zh: string[];
    };
    // [NEW] Application Scenarios
    applications: {
        en: string[];
        zh: string[];
        ru: string[];
        es: string[];
        fr: string[];
        ar: string[];
        de: string[];
    };
    // [NEW] Technical Advantages
    advantages: {
        en: string[];
        zh: string[];
        ru: string[];
        es: string[];
        fr: string[];
        ar: string[];
        de: string[];
    };
    // [NEW] FAQ for SEO
    faq?: {
        question: { en: string; zh: string; ru: string; es: string; fr: string; ar: string; de: string };
        answer: { en: string; zh: string; ru: string; es: string; fr: string; ar: string; de: string };
    }[];
    products: string[]; // IDs or categories of recommended products
    image: string;
}

export const SOLUTIONS: Solution[] = [
    {
        id: "textile-dyeing",
        icon: "Shirt",
        title: {
            en: "Textile & Dyeing Industry",
            zh: "纺织印染行业",
            ru: "Текстильная и красильная промышленность",
            es: "Industria Textil y de Teñido",
            fr: "Industrie Textile et Teinture",
            ar: "صناعة المنسوجات والصباغة"
        },
        summary: {
            en: "Precision heat for dyeing (Steam) & setting (Thermal Oil).",
            zh: "为染色（蒸汽）和定型（导热油）提供精准热源。",
            ru: "Точное тепло для крашения (пар) и фиксации (термомасло).",
            es: "Calor de precisión para teñido (vapor) y fijación (aceite térmico).",
            fr: "Chaleur de précision pour la teinture (vapeur) et le fixage (huile thermique).",
            ar: "حرارة دقيقة للصباغة (بخار) والضبط (زيت حراري)."
        },
        description: {
            en: "The textile industry has dual heating needs: saturated steam for dyeing/rinsing and high-temperature thermal oil (260°C-300°C) for stenting/setting. Yudong provides a comprehensive solution: WNS series steam boilers for stable continuous steam supply, and YYW thermal oil heaters for precise high-temperature control without high pressure. Our systems ensure uniform dyeing colors and perfect fabric setting results while recovering waste heat to reduce fuel costs by up to 20%.",
            zh: "纺织行业具有双重加热需求：用于染色/漂洗的饱和蒸汽，以及用于拉幅/定型的高温导热油（260°C-300°C）。豫东提供综合解决方案：WNS系列蒸汽锅炉提供稳定的连续蒸汽供应，YYW导热油炉在常压下提供精确的高温控制。我们的系统确保均匀的染色色泽和完美的织物定型效果，同时通过余热回收将燃料成本降低高达20%。",
            ru: "Текстильная промышленность имеет двойные потребности в нагреве: насыщенный пар для крашения/полоскания и высокотемпературное термомасло (260°C-300°C) для сушки/фиксации. Yudong предлагает комплексное решение: паровые котлы серии WNS для стабильной непрерывной подачи пара и термомасляные нагреватели YYW для точного контроля высоких температур без высокого давления. Наши системы обеспечивают равномерный цвет при крашении и идеальные результаты фиксации ткани, одновременно утилизируя отработанное тепло для снижения затрат на топливо до 20%.",
            es: "La industria textil tiene necesidades duales de calentamiento: vapor saturado para teñido/enjuague y aceite térmico de alta temperatura (260°C-300°C) para estirado/fijación. Yudong ofrece una solución integral: calderas de vapor serie WNS para un suministro continuo y estable de vapor, y calentadores de aceite térmico YYW para un control preciso de alta temperatura sin alta presión. Nuestros sistemas aseguran colores de teñido uniformes y resultados perfectos de fijación de telas, recuperando el calor residual para reducir los costos de combustible hasta en un 20%.",
            fr: "L'industrie textile a des besoins de chauffage doubles : vapeur saturée pour la teinture/rinçage et huile thermique à haute température (260°C-300°C) pour le ramage/fixage. Yudong propose une solution complète : chaudières à vapeur série WNS pour un approvisionnement stable et continu en vapeur, et réchauffeurs d'huile thermique YYW pour un contrôle précis de la haute température sans haute pression. Nos systèmes assurent des couleurs de teinture uniformes et des résultats parfaits de fixage du tissu tout en récupérant la chaleur résiduelle pour réduire les coûts de carburant jusqu'à 20%.",
            ar: "تتميز صناعة النسيج باحتياجات تسخين مزدوجة: البخار المشبع للصباغة/الشطف والزيت الحراري عالي الحرارة (260-300 درجة مئوية) للتثبيت/الضبط. تقدم يودونغ حلاً شاملاً: غلايات البخار من سلسلة WNS لتوفير إمدادات بخار مستمرة ومستقرة، وسخانات الزيت الحراري YYW للتحكم الدقيق في درجة الحرارة العالية بدون ضغط مرتفع. تضمن أنظمتنا ألوان صباغة موحدة ونتائج مثالية لتثبيت القماش مع استعادة الحرارة المهدرة لتقليل تكاليف الوقود بنسبة تصل إلى 20٪."
        },
        painPoints: {
            en: ["Color inconsistency due to temp fluctuation", "High operational pressure risks", "Fabric waste from unstable heat"],
            zh: ["温度波动导致色差", "高温高压安全风险", "供热不稳定造成废布"]
        },
        applications: {
            en: ["Yarn Dyeing", "Fabric Printing", "Stenting & Setting", "Garment Washing"],
            zh: ["纱线染色", "织物印花", "拉幅定型", "成衣水洗"],
            ru: ["Крашение пряжи", "Печать на ткани", "Сушка и фиксация (стентеринг)", "Стирка одежды"],
            es: ["Teñido de hilos", "Estampado de telas", "Estirado y fijación", "Lavado de prendas"],
            fr: ["Teinture de fils", "Impression sur tissu", "Ramage et fixage", "Lavage de vêtements"],
            ar: ["صباغة الغزل", "طباعة القماش", "ضبط وشد القماش", "غسيل الملابس"],
            de: ["Garnfärben", "Stoffdruck", "Spannen & Fixieren", "Kleiderwaschen"]
        },
        advantages: {
            en: ["Precise Temp Control (±1°C)", "Fuel Saving > 20%", "Consistent Steam Quality"],
            zh: ["精准温控 (±1°C)", "燃料节省 > 20%", "恒定蒸汽品质"],
            ru: ["Точный контроль температуры (±1°C)", "Экономия топлива > 20%", "Стабильное качество пара"],
            es: ["Control preciso de temperatura (±1°C)", "Ahorro de combustible > 20%", "Calidad de vapor consistente"],
            fr: ["Contrôle précis de la température (±1°C)", "Économie de carburant > 20%", "Qualité de vapeur constante"],
            ar: ["تحكم دقيق في درجة الحرارة (±1°C)", "توفير الوقود > 20٪", "جودة بخار متسقة"],
            de: ["Präzise Temp.-Regelung (±1°C)", "Kraftstoffeinsparung > 20%", "Konstante Dampfqualität"]
        },
        faq: [
            {
                question: {
                    en: "Why is thermal oil preferred over steam for fabric setting?",
                    zh: "为什么织物定型首选导热油而不是蒸汽？",
                    ru: "Почему для фиксации ткани предпочтительнее термомасло, а не пар?",
                    es: "¿Por qué se prefiere el aceite térmico al vapor para la fijación de telas?",
                    fr: "Pourquoi l'huile thermique est-elle préférée à la vapeur pour le fixage du tissu ?",
                    ar: "لماذا يفضل الزيت الحراري على البخار لضبط القماش؟",
                    de: "Warum wird Thermalöl gegenüber Dampf für die Stofffixierung bevorzugt?"
                },
                answer: {
                    en: "Fabric stenting requires high temperatures (260°C+). To achieve this with steam, dangerous high pressure (>5.0 MPa) is needed. Thermal oil achieves 300°C at very low pressure (<1.0 MPa), making it safer and more precise.",
                    zh: "织物拉幅定型需要高温（260°C+）。如果使用蒸汽，需要极高的危险压力（>5.0 MPa）。导热油在极低压力（<1.0 MPa）下即可达到300°C，更加安全且控温更精准。",
                    ru: "Для сушки ткани требуются высокие температуры (260°C+). Для достижения этого с помощью пара требуется опасное высокое давление (>5,0 МПа). Термомасло достигает 300°C при очень низком давлении (<1,0 МПа), что делает его более безопасным и точным.",
                    es: "La fijación de telas requiere altas temperaturas (260°C+). Con vapor, se necesita una presión peligrosamente alta. El aceite térmico alcanza los 300°C at very low pressure.",
                    fr: "Le ramage du tissu nécessite des températures élevées (260°C+). Avec la vapeur, une haute pression dangereuse est nécessaire. L'huile thermique atteint 300°C à très basse pression.",
                    ar: "يتطلب تثبيت القماش درجات حرارة عالية (260 درجة مئوية +). لتحقيق ذلك بالبخار، يلزم ضغط مرتفع خطير. يحقق الزيت الحراري 300 درجة مئوية عند ضغط منخفض للغاية.",
                    de: "Die Stofffixierung erfordert hohe Temperaturen (260°C+). Um dies mit Dampf zu erreichen, ist ein gefährlich hoher Druck (>5,0 MPa) erforderlich. Thermalöl erreicht 300°C bei sehr niedrigem Druck (<1,0 MPa), was es sicherer und präziser macht."
                }
            },
            {
                question: {
                    en: "Can your boilers recover waste heat from the dyeing process?",
                    zh: "你们的锅炉能回收印染过程中的余热吗？",
                    ru: "Могут ли ваши котлы утилизировать отработанное тепло процесса крашения?",
                    es: "¿Pueden sus calderas recuperar el calor residual del proceso de teñido?",
                    fr: "Vos chaudières peuvent-elles récupérer la chaleur résiduelle du processus de teinture ?",
                    ar: "هل يمكن لغلاياتكم استعادة الحرارة المهدرة من عملية الصباغة؟",
                    de: "Können Ihre Kessel Abwärme aus dem Färbeprozess zurückgewinnen?"
                },
                answer: {
                    en: "Yes, our systems are equipped with economizers and condensers that capture waste heat from flue gas, preheating the feed water or dyeing water, improving efficiency by 10-15%.",
                    zh: "是的，我们的系统配备有节能器和冷凝器，可回收烟气中的余热，用于预热给水或染缸用水，将整体效率在提升10-15%。",
                    ru: "Да, наши системы оснащены экономайзерами и конденсаторами, которые улавливают отработанное тепло дымовых газов, повышая эффективность на 10-15%.",
                    es: "Sí, nuestros sistemas están equipados con economizadores y condensadores, mejorando la eficiencia en un 10-15%.",
                    fr: "Oui, nos systèmes sont équipés d'économiseurs et de condenseurs, améliorant l'efficacité de 10 à 15 %.",
                    ar: "نعم، تم تجهيز أنظمتنا بمقتصدات ومكثفات تلتقط الحرارة المهدرة من غازات المداخن، مما يحسن الكفاءة بنسبة 10-15٪.",
                    de: "Ja, unsere Systeme sind mit Economizern und Kondensatoren ausgestattet, die Abwärme aus Rauchgasen erfassen und das Speisewasser oder das Färbewasser vorwärmen, was die Effizienz um 10-15% verbessert."
                }
            },
            {
                question: {
                    en: "How to avoid uneven dyeing color?",
                    zh: "如何避免染色不均匀（色差）？",
                    ru: "Как избежать неравномерного окрашивания?",
                    es: "¿Cómo evitar el color de teñido desigual?",
                    fr: "Comment éviter une couleur de teinture inégale ?",
                    ar: "كيف تتجنب لون الصباغة غير المتساوي؟",
                    de: "Wie vermeide ich ungleichmäßige Färbefarben?"
                },
                answer: {
                    en: "Uneven dyeing is often caused by temperature fluctuations. Our boilers use PID intelligent control to maintain temperature stability within ±1°C, ensuring consistent color quality across batches.",
                    zh: "染色不均匀通常由温度波动引起。我们的锅炉采用PID智能控制，将温度稳定性保持在±1°C以内，确保批次间色泽质量一致。",
                    ru: "Неравномерное окрашивание часто вызвано колебаниями температуры. Наши котлы используют интеллектуальное управление PID для поддержания стабильности температуры в пределах ±1°C.",
                    es: "El teñido desigual a menudo es causado por fluctuaciones de temperatura. Nuestras calderas utilizan control inteligente PID para mantener la estabilidad de la temperatura dentro de ±1°C.",
                    fr: "La teinture inégale est souvent causée par des fluctuations de température. Nos chaudières utilisent un contrôle intelligent PID pour maintenir la stabilité de la température à ±1°C.",
                    ar: "غالبًا ما يكون الصباغة غير المتساوية ناتجة عن تقلبات درجات الحرارة. تستخدم غلاياتنا تحكم PID الذكي للحفاظ على استقرار درجة الحرارة في حدود ± 1 درجة مئوية.",
                    de: "Ungleichmäßiges Färben wird oft durch Temperaturschwankungen verursacht. Unsere Kessel verwenden eine intelligente PID-Steuerung, um die Temperaturstabilität innerhalb von ±1°C zu halten."
                }
            },
            {
                question: {
                    en: "What is the lifespan of your thermal oil heater?",
                    zh: "你们导热油炉的使用寿命是多久？",
                    ru: "Каков срок службы вашего термомасляного нагревателя?",
                    es: "¿Cuál es la vida útil de su calentador de aceite térmico?",
                    fr: "Quelle est la durée de vie de votre réchauffeur d'huile thermique ?",
                    ar: "ما هو عمر سخان الزيت الحراري الخاص بكم؟",
                    de: "Wie hoch ist die Lebensdauer Ihres Thermalölheizgeräts?"
                },
                answer: {
                    en: "With proper maintenance, our thermal oil heaters have a design life of over 15 years. The double-coil design reduces thermal stress and prevents tube fouling.",
                    zh: "在适当维护下，我们的导热油炉设计寿命超过15年。双层盘管设计减少了热应力并防止管内结焦。",
                    ru: "При правильном обслуживании наши термомасляные нагреватели имеют расчетный срок службы более 15 лет. Конструкция с двойной спиралью снижает термическое напряжение.",
                    es: "Con un mantenimiento adecuado, nuestros calentadores tienen una vida útil de diseño de más de 15 años. El diseño de doble bobina reduce el estrés térmico.",
                    fr: "Avec un entretien approprié, nos réchauffeurs ont une durée de vie nominale de plus de 15 ans. La conception à double serpentin réduit les contraintes thermiques.",
                    ar: "مع الصيانة المناسبة، تتمتع سخانات الزيت الحراري لدينا بعمر تصميمي يزيد عن 15 عامًا. يقلل تصميم الملف المزدوج من الإجهاد الحراري.",
                    de: "Bei ordnungsgemäßer Wartung haben unsere Thermalölheizgeräte eine Lebensdauer von über 15 Jahren. Das Doppelspulendesign reduziert thermischen Stress."
                }
            },
            {
                question: {
                    en: "Do you provide installation service abroad?",
                    zh: "你们提供海外安装服务吗？",
                    ru: "Предоставляете ли вы услуги по установке за рубежом?",
                    es: "¿Ofrecen servicio de instalación en el extranjero?",
                    fr: "Fournissez-vous un service d'installation à l'étranger ?",
                    ar: "هل تقدمون خدمة التركيب في الخارج؟",
                    de: "Bieten Sie Installationsdienste im Ausland an?"
                },
                answer: {
                    en: "Yes, we can send experienced engineers to your site for installation guidance and operator training. We also offer 24/7 online technical support.",
                    zh: "是的，我们可以派遣经验丰富的工程师到您的现场进行安装指导和操作员培训。我们要提供7*24小时在线技术支持。",
                    ru: "Да, мы можем отправить опытных инженеров на ваш объект для руководства установкой и обучения операторов.",
                    es: "Sí, podemos enviar ingenieros experimentados a su sitio para obtener orientación de instalación y capacitación de operadores.",
                    fr: "Oui, nous pouvons envoyer des ingénieurs expérimentés sur votre site pour des conseils d'installation et la formation des opérateurs.",
                    ar: "نعم، يمكننا إرسال مهندسين ذوي خبرة إلى موقعك للحصول على إرشادات التثبيت وتدريب المشغلين.",
                    de: "Ja, wir können erfahrene Ingenieure an Ihren Standort schicken, um Installationsanleitungen und Bedienerschulungen zu geben."
                }
            }
        ],
        products: ["wns-oil-gas-steam-boiler", "yyqw-thermal-oil-heater", "yglw-organic-heat-carrier"],
        image: "/images/solutions/textile_v2.png"
    },
    {
        id: "food-processing",
        icon: "Utensils",
        title: {
            en: "Food & Beverage Processing",
            zh: "食品饮料加工",
            ru: "Пищевая промышленность",
            es: "Procesamiento de Alimentos y Bebidas",
            fr: "Transformation Alimentaire et Boissons",
            ar: "تجهيز الأغذية والمشروبات"
        },
        summary: {
            en: "Clean, food-grade steam meeting strict hygiene standards.",
            zh: "符合严格卫生标准的洁净食品级蒸汽。",
            ru: "Чистый пищевой пар, соответствующий строгим стандартам гигиены.",
            es: "Vapor limpio de grado alimenticio que cumple con estrictos estándares de higiene.",
            fr: "Vapeur propre de qualité alimentaire répondant à des normes d'hygiène strictes.",
            ar: "بخار نظيف صالح للأكل يلبي معايير النظافة الصارمة."
        },
        description: {
            en: "Food safety is non-negotiable. Processes like sterilization, autoclaving, and cooking require 'clean steam' free from impurities. Yudong recommends our Gas Steam Boilers equipped with stainless steel components and pure water treatment systems. Our WNS series offers rapid steam generation to meet fluctuating load demands during batch processing, ensuring productivity without compromising hygiene.",
            zh: "食品安全是不可妥协的。杀菌、高压灭菌和烹饪等工艺需要不含杂质的“洁净蒸汽”。豫东推荐配备不锈钢组件和纯水处理系统的燃气蒸汽锅炉。我们的WNS系列提供快速产汽，以满足批次加工过程中的波动负荷需求，在确保生产率的同时不牺牲卫生标准。",
            ru: "Безопасность пищевых продуктов не подлежит обсуждению. Процессы, такие как стерилизация, автоклавирование и варка, требуют «чистого пара», свободного от примесей. Yudong рекомендует наши газовые паровые котлы, оснащенные компонентами из нержавеющей стали и системами очистки воды. Наша серия WNS обеспечивает быструю генерацию пара для удовлетворения колебаний нагрузки во время серийной обработки, гарантируя производительность без ущерба для гигиены.",
            es: "La seguridad alimentaria no es negociable. Procesos como la esterilización, el autoclave y la cocción requieren 'vapor limpio' libre de impurezas. Yudong recomienda nuestras Calderas de Vapor a Gas equipadas con componentes de acero inoxidable y sistemas de tratamiento de agua pura. Nuestra serie WNS ofrece una rápida generación de vapor para satisfacer las demandas de carga fluctuantes durante el procesamiento por lotes, asegurando la productividad sin comprometer la higiene.",
            fr: "La sécurité alimentaire n'est pas négociable. Des processus comme la stérilisation, l'autoclavage et la cuisson nécessitent de la 'vapeur propre' exempte d'impuretés. Yudong recommande nos chaudières à vapeur à gaz équipées de composants en acier inoxydable et de systèmes de traitement de l'eau pure. Notre série WNS offre une production rapide de vapeur pour répondre aux demandes de charge fluctuantes pendant le traitement par lots, assurant la productivité sans compromettre l'hygiène.",
            ar: "سلامة الأغذية أمر غير قابل للتفاوض. تتطلب عمليات مثل التعقيم والأوتوكلاف والطبخ 'بخارًا نظيفًا' خاليًا من الشوائب. توصي يودونغ بغلايات البخار الغازية المجهزة بمكونات من الفولاذ المقاوم للصدأ وأنظمة معالجة المياه النقية. توفر سلسلة WNS الخاصة بنا توليدًا سريعًا للبخار لتلبية متطلبات الحمل المتقلبة أثناء المعالجة بالدفعات، مما يضمن الإنتاجية دون المساس بالنظافة."
        },
        painPoints: {
            en: ["Risk of steam contamination", "Strict environmental audits", "High fuel cost for continuous steam"],
            zh: ["蒸汽污染食品风险", "严格的环保审查", "连续用汽燃料成本高"]
        },
        applications: {
            en: ["Sterilization", "Autoclaving", "Food Drying", "Beverage Bottling"],
            zh: ["高温杀菌", "高压灭菌", "食品烘干", "饮料灌装"],
            ru: ["Стерилизация", "Автоклавирование", "Сушка продуктов", "Розлив напитков"],
            es: ["Esterilización", "Autoclave", "Secado de alimentos", "Embotellado de bebidas"],
            fr: ["Stérilisation", "Autoclavage", "Séchage des aliments", "Mise en bouteille de boissons"],
            ar: ["التعقيم", "الأوتوكلاف", "تجفيف الأغذية", "تعبئة المشروبات"],
            de: ["Sterilisation", "Autoklavieren", "Lebensmitteltrocknung", "Getränkeabfüllung"]
        },
        advantages: {
            en: ["Food Grade Pure Steam", "Stainless Steel Components", "Rapid Response to Load"],
            zh: ["食品级纯净蒸汽", "不锈钢组件", "快速负荷响应"],
            ru: ["Чистый пар пищевого качества", "Компоненты из нержавеющей стали", "Быстрая реакция на нагрузку"],
            es: ["Vapor puro de grado alimenticio", "Componentes de acero inoxidable", "Respuesta rápida a la carga"],
            fr: ["Vapeur pure de qualité alimentaire", "Composants en acier inoxydable", "Réponse rapide à la charge"],
            ar: ["بخار نقي صالح للأكل", "مكونات الفولاذ المقاوم للصدأ", "استجابة سريعة للحمل"],
            de: ["Lebensmittelechter reiner Dampf", "Edelstahlkomponenten", "Schnelle Lastreaktion"]
        },
        faq: [
            {
                question: {
                    en: "Does the steam boiler come with water treatment?",
                    zh: "蒸汽锅炉配有水处理设备吗？",
                    ru: "Поставляется ли паровой котел с водоподготовкой?",
                    es: "¿La caldera de vapor viene con tratamiento de agua?",
                    fr: "La chaudière à vapeur est-elle équipée d'un traitement de l'eau ?",
                    ar: "هل تأتي غلاية البخار مع معالجة المياه؟",
                    de: "Wird der Dampfkessel mit Wasseraufbereitung geliefert?"
                },
                answer: {
                    en: "Yes, for the food industry, we equip boilers with ROI/Softener water treatment systems to ensure steam purity and prevent scale buildup.",
                    zh: "是的，针对食品行业，我们配备反渗透/软水器水处理系统，以确保蒸汽纯度并防止水垢积聚。",
                    ru: "Да, для пищевой промышленности мы оснащаем котлы системами водоподготовки ROI/Softener для обеспечения чистоты пара.",
                    es: "Sí, para la industria alimentaria, equipamos las calderas con sistemas de tratamiento de agua ROI / Suavizante.",
                    fr: "Oui, pour l'industrie alimentaire, nous équipons les chaudières de systèmes de traitement de l'eau ROI/Adoucisseur.",
                    ar: "نعم، بالنسبة لصناعة الأغذية، نقوم بتجهيز الغلايات بأنظمة معالجة المياه ROI/Softener لضمان نقاء البخار.",
                    de: "Ja, für die Lebensmittelindustrie statten wir Kessel mit ROI/Enthärter-Wasseraufbereitungssystemen aus, um die Dampfreinheit zu gewährleisten."
                }
            },
            {
                question: {
                    en: "Is the boiler capable of handling variable loads?",
                    zh: "锅炉能够应对变化的负荷吗？",
                    ru: "Способен ли котел выдерживать переменные нагрузки?",
                    es: "¿Es capaz la caldera de manejar cargas variables?",
                    fr: "La chaudière est-elle capable de gérer des charges variables ?",
                    ar: "هل الغلاية قادرة على التعامل مع الأحمال المتغيرة؟",
                    de: "Ist der Kessel in der Lage, variable Lasten zu bewältigen?"
                },
                answer: {
                    en: "Absolutely. Our WNS series features a large steam space and intelligent modulation, allowing it to respond quickly to load spikes during batch cooking.",
                    zh: "完全可以。我们的WNS系列具有大蒸汽空间和智能调节功能，使其能够快速响应批量烹饪期间的负荷峰值。",
                    ru: "Абсолютно. Наша серия WNS имеет большое паровое пространство и интеллектуальную модуляцию.",
                    es: "Absolutamente. Nuestra serie WNS cuenta con un gran espacio de vapor y modulación inteligente.",
                    fr: "Absolument. Notre série WNS dispose d'un grand espace vapeur et d'une modulation intelligente.",
                    ar: "قطعاً. تتميز سلسلة WNS الخاصة بنا بمساحة بخار كبيرة وتعديل ذكي.",
                    de: "Absolut. Unsere WNS-Serie verfügt über einen großen Dampfraum und eine intelligente Modulation, die eine schnelle Reaktion auf Lastspitzen ermöglicht."
                },
            },
            {
                question: {
                    en: "Is the steam pure enough for direct food contact?",
                    zh: "蒸汽纯度足以直接接触食品吗？",
                    ru: "Достаточно ли чист пар для прямого контакта с пищей?",
                    es: "¿Es el vapor lo suficientemente puro para el contacto directo con los alimentos?",
                    fr: "La vapeur est-elle assez pure pour un contact direct avec les aliments ?",
                    ar: "هل البخار نقي بما يكفي للتلامس المباشر مع الطعام؟",
                    de: "Ist der Dampf rein genug für den direkten Kontakt mit Lebensmitteln?"
                },
                answer: {
                    en: "Yes, when paired with our stainless steel condensing exchanger and pure water treatment, the steam meets food-grade safety standards for direct heating.",
                    zh: "是的，配合我们的不锈钢冷凝换热器和纯水处理系统，产生的蒸汽符合食品级安全标准，可直接用于加热。",
                    ru: "Да, в сочетании с нашим конденсационным теплообменником из нержавеющей стали и очисткой воды пар соответствует стандартам пищевой безопасности.",
                    es: "Sí, cuando se combina con nuestro intercambiador de condensación de acero inoxidable, el vapor cumple con los estándares de grado alimenticio.",
                    fr: "Oui, lorsqu'il est associé à notre échangeur à condensation en acier inoxydable, la vapeur répond aux normes de qualité alimentaire.",
                    ar: "نعم، عند اقترانه بمبادل التكثيف المصنوع من الفولاذ المقاوم للصدأ ومعالجة المياه النقية، يلبي البخار معايير سلامة الأغذية.",
                    de: "Ja, in Kombination mit unserem Edelstahl-Kondensationswärmetauscher und Reinstwasseraufbereitung entspricht der Dampf den lebensmittelrechtlichen Standards."
                }
            },
            {
                question: {
                    en: "How much fuel can I save with a condensing boiler?",
                    zh: "使用冷凝锅炉可以节省多少燃料？",
                    ru: "Сколько топлива я могу сэкономить с конденсационным котлом?",
                    es: "¿Cuánto combustible puedo ahorrar con una caldera de condensación?",
                    fr: "Combien de carburant puis-je économiser avec une chaudière à condensation ?",
                    ar: "كم من الوقود يمكنني توفيره مع غلاية التكثيف؟",
                    de: "Wie viel Brennstoff kann ich mit einem Brennwertkessel sparen?"
                },
                answer: {
                    en: "By recovering latent heat from exhaust gases, our condensing boilers achieve >98% thermal efficiency, saving 10-15% fuel costs compared to standard boilers.",
                    zh: "通过回收废气中的潜热，我们的冷凝锅炉热效率达到>98%，比普通锅炉节省10-15%的燃料成本。",
                    ru: "Утилизируя скрытое тепло выхлопных газов, наши конденсационные котлы достигают КПД >98%, экономя 10-15% топлива.",
                    es: "Al recuperar el calor latente de los gases de escape, nuestras calderas logran una eficiencia >98%, ahorrando un 10-15% de combustible.",
                    fr: "En récupérant la chaleur latente des gaz d'échappement, nos chaudières atteignent une efficacité >98%, économisant 10-15% de carburant.",
                    ar: "من خلال استعادة الحرارة الكامنة من غازات العادم، تحقق غلايات التكثيف لدينا كفاءة حرارية > 98٪، وتوفر 10-15٪ من تكاليف الوقود.",
                    de: "Durch die Rückgewinnung latenter Wärme aus Abgasen erreichen unsere Brennwertkessel einen Wirkungsgrad von >98% und sparen 10-15% Brennstoff."
                }
            },
            {
                question: {
                    en: "What safety features are included?",
                    zh: "包含哪些安全功能？",
                    ru: "Какие функции безопасности включены?",
                    es: "¿Qué características de seguridad están incluidas?",
                    fr: "Quelles caractéristiques de sécurité sont incluses ?",
                    ar: "ما هي ميزات الأمان المضمنة؟",
                    de: "Welche Sicherheitsfunktionen sind enthalten?"
                },
                answer: {
                    en: "The boiler includes multi-level protection: auto-shutoff for low water, over-pressure relief valves, flameout protection, and steam temperature monitoring.",
                    zh: "锅炉包含多级保护：低水位自动停机、超压泄放阀、熄火保护和蒸汽温度监控。",
                    ru: "Котел включает многоуровневую защиту: автоотключение при низком уровне воды, сбросные клапаны, защита от погасания пламени.",
                    es: "Incluye protección multinivel: apagado automático por bajo nivel de agua, válvulas de alivio de sobrepresión, protección contra apagado.",
                    fr: "La chaudière comprend une protection à plusieurs niveaux : arrêt automatique en cas de niveau d'eau bas, soupapes de décharge, protection contre l'extinction.",
                    ar: "تتضمن الغلاية حماية متعددة المستويات: الإغلاق التلقائي للمياه المنخفضة، وصمامات تخفيف الضغط الزائد، وحماية انطفاء اللهب.",
                    de: "Der Kessel verfügt über einen mehrstufigen Schutz: automatische Abschaltung bei niedrigem Wasserstand, Überdruckventile, Flammenausfallschutz."
                }
            }
        ],
        products: ["wns-oil-gas-steam-boiler", "szs-gas-steam-boiler", "dzl-biomass-boiler"],
        image: "/images/solutions/food_v2.png"
    },
    {
        id: "chemical-pharma",
        icon: "FlaskConical",
        title: {
            en: "Chemical & Pharmaceutical",
            zh: "化工医药行业",
            ru: "Химическая и фармацевтическая промышленность",
            es: "Industria Química y Farmacéutica",
            fr: "Industrie Chimique et Pharmaceutique",
            ar: "الصناعات الكيماوية والدوائية"
        },
        summary: {
            en: "Explosion-proof, precise temp control for critical reactions.",
            zh: "防爆设计，为关键反应提供精确温控。",
            ru: "Взрывозащищенное исполнение, точный контроль температуры для критических реакций.",
            es: "A prueba de explosiones, control preciso de temperatura para reacciones críticas.",
            fr: "Conception antidéflagrante, contrôle précis de la température pour les réactions critiques.",
            ar: "تتميز بتصميم مقاوم للانفجار، وتحكم دقيق في درجة الحرارة للتفاعلات الحرجة."
        },
        description: {
            en: "Chemical polymerization and pharmaceutical fermentation require extremely stable heat sources. Fluctuations of even 1°C can ruin a batch. Yudong's boilers feature PLC intelligent control systems with ±0.5°C precision. For hazardous environments, we offer explosion-proof designs and advanced safety interlocks (pressure, temperature, flameout protection). The SZS series is particularly popular for large-scale chemical plants due to its high capacity and reliability.",
            zh: "化工聚合和医药发酵需要极其稳定的热源。即使是1°C的波动也可能破坏整个批次。豫东的锅炉采用PLC智能控制系统，精度可达±0.5°C。针对危险环境，我们提供防爆设计和先进的安全联锁装置（压力、温度、熄火保护）。SZS系列因其高容量和可靠性，在大型化工厂中特别受欢迎。",
            ru: "Химическая полимеризация и фармацевтическая ферментация требуют чрезвычайно стабильных источников тепла. Колебания даже в 1°C могут испортить партию. Котлы Yudong оснащены интеллектуальными системами управления ПЛК с точностью ±0,5°C. Для опасных сред мы предлагаем взрывозащищенные конструкции и передовые защитные блокировки (давление, температура, защита от погасания пламени). Серия SZS особенно популярна на крупных химических заводах благодаря своей высокой мощности и надежности.",
            es: "La polimerización química y la fermentación farmacéutica requieren fuentes de calor extremadamente estables. Las fluctuaciones de incluso 1°C pueden arruinar un lote. Las calderas de Yudong cuentan con sistemas de control inteligente PLC con una precisión de ±0.5°C. Para entornos peligrosos, ofrecemos diseños a prueba de explosiones y enclavamientos de seguridad avanzados (protección de presión, temperatura, apagado de llama). La serie SZS es particularmente popular para plantas químicas a gran escala debido a su alta capacidad y confiabilidad.",
            fr: "La polymérisation chimique et la fermentation pharmaceutique nécessitent des sources de chaleur extrêmement stables. Des fluctuations de même 1°C peuvent ruiner un lot. Les chaudières de Yudong disposent de systèmes de contrôle intelligents PLC avec une précision de ±0,5°C. Pour les environnements dangereux, nous proposons des conceptions antidéflagrantes et des verrouillages de sécurité avancés (pression, température, protection contre l'extinction de flamme). La série SZS est particulièrement populaire pour les grandes usines chimiques en raison de sa grande capacité et de sa fiabilité.",
            ar: "تتطلب البلمرة الكيميائية والتخمير الصيدلاني مصادر حرارة مستقرة للغاية. التقلبات حتى بمقدار 1 درجة مئوية يمكن أن تدمر دفعة كاملة. تتميز غلايات يودونغ بأنظمة تحكم ذكية PLC بدقة ± 0.5 درجة مئوية. بالنسبة للبيئات الخطرة، نقدم تصميمات مقاومة للانفجار وأقفال أمان متقدمة (الضغط، درجة الحرارة، حماية انطفاء اللهب). تحظى سلسلة SZS بشعبية خاصة في المصانع الكيميائية واسعة النطاق نظرًا لقدرتها العالية وموثوقيتها."
        },
        painPoints: {
            en: ["Precise temp control (±1°C)", "Explosion risk in hazardous zones", "EPA emission compliance"],
            zh: ["需精确温控 (±1°C)", "危险区域防爆要求", "环保排放合规性"]
        },
        applications: {
            en: ["Reactor Heating", "Polymerization", "Distillation", "Fermentation"],
            zh: ["反应釜加热", "聚合反应", "蒸馏提取", "生物发酵"],
            ru: ["Нагрев реактора", "Полимеризация", "Дистилляция", "Ферментация"],
            es: ["Calentamiento de reactores", "Polimerización", "Destilación", "Fermentación"],
            fr: ["Chauffage de réacteur", "Polymérisation", "Distillation", "Fermentation"],
            ar: ["تدفئة المفاعل", "البلمرة", "التقطير", "التخمير"],
            de: ["Reaktorheizung", "Polymerisation", "Destillation", "Fermentation"]
        },
        advantages: {
            en: ["Explosion Proof Design", "High Temp Stability", "Emission < 30mg/m³"],
            zh: ["防爆设计", "高温稳定性", "排放 < 30mg/m³"],
            ru: ["Взрывозащищенное исполнение", "Стабильность при высоких температурах", "Выбросы < 30 мг/м³"],
            es: ["Diseño a prueba de explosiones", "Estabilidad a alta temperatura", "Emisión < 30mg/m³"],
            fr: ["Conception antidéflagrante", "Stabilité à haute température", "Émission < 30mg/m³"],
            ar: ["تصميم مقاوم للانفجار", "استقرار درجة الحرارة العالية", "انبعاثات < 30 ملغ/م³"],
            de: ["Explosionsgeschütztes Design", "Hohe Temp.-Stabilität", "Emission < 30mg/m³"]
        },
        faq: [
            {
                question: {
                    en: "Do you offer explosion-proof boilers?",
                    zh: "你们提供防爆锅炉吗？",
                    ru: "Вы предлагаете взрывозащищенные котлы?",
                    es: "¿Ofrecen calderas a prueba de explosiones?",
                    fr: "Proposez-vous des chaudières antidéflagrantes ?",
                    ar: "هل تقدمون غلايات مقاومة للانفجار؟",
                    de: "Bieten Sie explosionsgeschützte Kessel an?"
                },
                answer: {
                    en: "Yes, our boilers can be customized with explosion-proof burners and control panels to meet ATEX or local safety standards for hazardous zones.",
                    zh: "是的，我们的锅炉可以定制防爆燃烧器和控制面板，以满足ATEX或当地危险区域的安全标准。",
                    ru: "Да, наши котлы могут быть настроены с взрывозащищенными горелками и панелями управления.",
                    es: "Sí, nuestras calderas se pueden personalizar con quemadores y paneles de control a prueba de explosiones.",
                    fr: "Oui, nos chaudières peuvent être personnalisées avec des brûleurs et des panneaux de commande antidéflagrants.",
                    ar: "نعم، يمكن تخصيص غلاياتنا بشعلات وألواح تحكم مقاومة للانفجار.",
                    de: "Ja, unsere Kessel können mit explosionsgeschützten Brennern und Schalttafeln angepasst werden."
                }
            },
            {
                question: {
                    en: "How precise is the temperature control?",
                    zh: "温控精度如何？",
                    ru: "Насколько точен контроль температуры?",
                    es: "¿Qué tan preciso es el control de temperatura?",
                    fr: "Quelle is the précision du contrôle de la température ?",
                    ar: "ما مدى دقة التحكم في درجة الحرارة؟",
                    de: "Wie präzise ist die Temperaturregelung?"
                },
                answer: {
                    en: "Our PLC PID control system ensures temperature stability within ±0.5°C to ±1°C, which is critical for sensitive chemical reactions.",
                    zh: "我们的PLC PID控制系统确保温度稳定性在±0.5°C至±1°C之间，这对敏感的化学反应至关重要。",
                    ru: "Наша система управления PLC PID обеспечивает стабильность температуры в пределах ±0,5°C - ±1°C.",
                    es: "Nuestro sistema de control PLC PID asegura la estabilidad de la temperatura dentro de ±0.5°C a ±1°C.",
                    fr: "Notre système de contrôle PLC PID assure une stabilité de température de ±0,5°C à ±1°C.",
                    ar: "يضمن نظام التحكم PLC PID استقرار درجة الحرارة في حدود ± 0.5 درجة مئوية إلى ± 1 درجة مئوية.",
                    de: "Unser PLC-PID-Regelsystem gewährleistet eine Temperaturstabilität innerhalb von ±0,5°C bis ±1°C."
                }
            },
            {
                question: {
                    en: "Can the boiler run on waste chemical gas?",
                    zh: "锅炉可以使用化工废气作为燃料吗？",
                    ru: "Может ли котел работать на отходящем химическом газе?",
                    es: "¿Puede la caldera funcionar con gas químico residual?",
                    fr: "La chaudière peut-elle fonctionner avec des gaz chimiques résiduaires ?",
                    ar: "هل يمكن للغلاية أن تعمل بالغازات الكيميائية المهدورة؟",
                    de: "Kann der Kessel mit chemischem Abgas betrieben werden?"
                },
                answer: {
                    en: "Yes, we can design custom burners to utilize waste gas (e.g., hydrogen, biogas) mixed with natural gas, helping you reduce disposal costs.",
                    zh: "是的，我们可以设计定制燃烧器，混合燃烧废气（如氢气、沼气）和天然气，帮助您降低处理成本。",
                    ru: "Да, мы можем разработать специальные горелки для использования отходящего газа, смешанного с природным газом.",
                    es: "Sí, podemos diseñar quemadores personalizados para utilizar gas residual mezclado con gas natural.",
                    fr: "Oui, nous pouvons concevoir des brûleurs personnalisés pour utiliser les gaz résiduaires mélangés au gaz naturel.",
                    ar: "نعم، يمكننا تصميم شعلات مخصصة لاستخدام غاز النفايات الممزوج بالغاز الطبيعي.",
                    de: "Ja, wir können kundenspezifische Brenner entwickeln, um Abgas gemischt mit Erdgas zu nutzen."
                }
            },
            {
                question: {
                    en: "What is the delivery time for a custom reactor heater?",
                    zh: "定制反应釜加热器的交货期是多久？",
                    ru: "Каков срок поставки нестандартного нагревателя реактора?",
                    es: "¿Cuál es el tiempo de entrega de un calentador de reactor personalizado?",
                    fr: "Quel est le délai de livraison d'un réchauffeur de réacteur personnalisé ?",
                    ar: "ما هو وقت التسليم لسخان المفاعل المخصص؟",
                    de: "Wie lange ist die Lieferzeit für eine kundenspezifische Reaktorheizung?"
                },
                answer: {
                    en: "Standard models are in stock. Customized units typically require 35-45 days for design, manufacturing, and testing.",
                    zh: "标准型号有现货。定制装置通常需要35-45天的时间进行设计、制造和测试。",
                    ru: "Стандартные модели есть на складе. Изготовление индивидуальных заказов обычно занимает 35-45 дней.",
                    es: "Los modelos estándar están en stock. Las unidades personalizadas suelen requerir 35-45 días.",
                    fr: "Les modèles standard sont en stock. Les unités personnalisées nécessitent généralement 35 à 45 jours.",
                    ar: "النماذج القياسية في المخزون. تتطلب الوحدات المخصصة عادةً 35-45 يومًا.",
                    de: "Standardmodelle sind auf Lager. Maßgeschneiderte Einheiten benötigen in der Regel 35-45 Tage."
                }
            },
            {
                question: {
                    en: "Do you have ASME certification for pressure vessels?",
                    zh: "你们的压力容器有ASME认证吗？",
                    ru: "Есть ли у вас сертификация ASME для сосудов под давлением?",
                    es: "¿Tienen certificación ASME para recipientes a presión?",
                    fr: "Avez-vous la certification ASME pour les récipients sous pression ?",
                    ar: "هل لديكم شهادة ASME لأوعية الضغط؟",
                    de: "Haben Sie eine ASME-Zertifizierung für Druckbehälter?"
                },
                answer: {
                    en: "Yes, we are authorized to manufacture ASME 'U' and 'S' stamped vessels and strictly follow international code requirements.",
                    zh: "是的，我们拥有制造ASME 'U' 和 'S' 钢印容器的授权，并严格遵循国际规范要求。",
                    ru: "Да, мы уполномочены производить сосуды с клеймами ASME «U» и «S» и строго следуем нормам.",
                    es: "Sí, estamos autorizados para fabricar recipientes con sello ASME 'U' y 'S'.",
                    fr: "Oui, nous sommes autorisés à fabriquer des récipients estampillés ASME 'U' et 'S'.",
                    ar: "نعم، نحن مخولون بتصنيع الأوعية المختومة بـ ASME 'U' و 'S'.",
                    de: "Ja, wir sind berechtigt, Behälter mit ASME-Stempel 'U' und 'S' herzustellen."
                }
            }
        ],
        products: ["szs-gas-steam-boiler", "yyqw-thermal-oil-heater", "wns-oil-gas-steam-boiler"],
        image: "/images/solutions/chemical_v2.png"
    },
    {
        id: "hotel-heating",
        icon: "Building2",
        title: {
            en: "Hotel & Central Heating",
            zh: "酒店与集中供暖",
            ru: "Отели и центральное отопление",
            es: "Hoteles y Calefacción Central",
            fr: "Hôtels et Chauffage Central",
            ar: "الفنادق والتدفئة المركزية"
        },
        summary: {
            en: "Silent, space-saving hot water units for 24/7 comfort.",
            zh: "静音、省空间的24小时热水机组，提供舒适体验。",
            ru: "Бесшумные, компактные установки горячего водоснабжения для круглосуточного комфорта.",
            es: "Unidades de agua caliente silenciosas y que ahorran espacio para un confort 24/7.",
            fr: "Unités d'eau chaude silencieuses et peu encombrantes pour un confort 24/7.",
            ar: "وحدات مياه ساخنة صامتة وموفرة للمساحة لراحة على مدار الساعة طوال أيام الأسبوع."
        },
        description: {
            en: "Hotels require massive amounts of hot water with zero noise and minimal space usage. Yudong's CWNS Atmospheric Hot Water Boilers act as a heat transfer center, providing domestic hot water and heating simultaneously. Being 'atmospheric' type (operating below atmospheric pressure), they are inherently safe from explosion and require fewer government inspections. The silent burner technology ensures guest comfort is never disturbed.",
            zh: "酒店需要大量的热水，同时要求零噪音和最小的占地空间。豫东的 CWNS 常压热水锅炉作为一个换热中心，可同时提供生活热水和采暖。作为“常压”型（在低于大气压下运行），它们本质上是安全的，无爆炸风险，且免于繁琐的政府年检。静音燃烧器技术确保客人的舒适度从未受到打扰。",
            ru: "Отелям требуются огромные объемы горячей воды при нулевом уровне шума и минимальном использовании пространства. Атмосферные водогрейные котлы Yudong CWNS действуют как центр теплопередачи, обеспечивая горячее водоснабжение и отопление одновременно. Будучи «атмосферным» типом (работающим ниже атмосферного давления), они по своей сути безопасны от взрыва и требуют меньше государственных проверок. Технология бесшумной горелки гарантирует, что комфорт гостей никогда не будет нарушен.",
            es: "Los hoteles requieren cantidades masivas de agua caliente con cero ruido y un uso mínimo del espacio. Las Calderas de Agua Caliente Atmosférica CWNS de Yudong actúan como un centro de transferencia de calor, proporcionando agua caliente sanitaria y calefacción simultáneamente. Al ser de tipo 'atmosférico' (operando por debajo de la presión atmosférica), son inherentemente seguras contra explosiones y requieren menos inspecciones gubernamentales. La tecnología de quemador silencioso asegura que el confort de los huéspedes nunca se vea perturbado.",
            fr: "Les hôtels ont besoin de quantités massives d'eau chaude sans aucun bruit et avec un encombrement minimal. Les chaudières à eau chaude atmosphériques CWNS de Yudong agissent comme un centre de transfert de chaleur, fournissant simultanément de l'eau chaude sanitaire et du chauffage. De type 'atmosphérique' (fonctionnant sous la pression atmosphérique), elles sont intrinsèquement sûres contre les explosions et nécessitent moins d'inspections gouvernementales. La technologie de brûleur silencieux garantit que le confort des clients n'est jamais perturbé.",
            ar: "تتطلب الفنادق كميات هائلة من الماء الساخن مع انعدام الضوضاء والحد الأدنى من استخدام المساحة. تعمل غلايات المياه الساخنة الجوية CWNS من يودونغ كمركز لنقل الحرارة، حيث توفر الماء الساخن المنزلي والتدفئة في وقت واحد. نظرًا لكونها من النوع 'الجوي' (تعمل تحت الضغط الجوي)، فهي آمنة بطبيعتها من الانفجار وتتطلب عددًا أقل من عمليات التفتيش الحكومية. تضمن تقنية الموقد الصامت عدم إزعاج راحة الضيوف أبدًا."
        },
        painPoints: {
            en: ["Noise complaints from guests", "Safety inspection hassles", "High space occupation"],
            zh: ["客人噪音投诉", "繁琐的安全年检", "机房占地过大"]
        },
        applications: {
            en: ["Hotel Hot Water", "Swimming Pool Heating", "School Heating", "Hospital Sanitization"],
            zh: ["酒店热水供应", "泳池恒温", "学校供暖", "医院消毒"],
            ru: ["Горячее водоснабжение отелей", "Подогрев бассейнов", "Отопление школ", "Санитария больниц"],
            es: ["Agua caliente para hoteles", "Climatización de piscinas", "Calefacción de escuelas", "Desinfección hospitalaria"],
            fr: ["Eau chaude pour hôtels", "Chauffage de piscine", "Chauffage d'école", "Désinfection hospitalière"],
            ar: ["المياه الساخنة للفنادق", "تدفئة حمامات السباحة", "تدفئة المدارس", "التعقيم في المستشفيات"],
            de: ["Hotel-Warmwasser", "Schwimmbadheizung", "Schulheizung", "Krankenhaus-Desinfektion"]
        },
        advantages: {
            en: ["Silent Operation (<60dB)", "Atmospheric Safety", "No Annual Inspection"],
            zh: ["静音运行 (<60dB)", "常压安全设计", "免报检"],
            ru: ["Бесшумная работа (<60 дБ)", "Атмосферная безопасность", "Без ежегодного осмотра"],
            es: ["Funcionamiento silencioso (<60dB)", "Seguridad atmosférica", "Sin inspección anual"],
            fr: ["Fonctionnement silencieux (<60dB)", "Sécurité atmosphérique", "Pas d'inspection annuelle"],
            ar: ["تشغيل صامت (<60 ديسيبل)", "السلامة الجوية", "لا يوجد تفتيش سنوي"],
            de: ["Leiser Betrieb (<60dB)", "Atmosphärische Sicherheit", "Keine jährliche Inspektion"]
        },
        faq: [
            {
                question: {
                    en: "Are these boilers noisy?",
                    zh: "这些锅炉噪音大吗？",
                    ru: "Шумные ли эти котлы?",
                    es: "¿Son ruidosas estas calderas?",
                    fr: "Ces chaudières sont-elles bruyantes ?",
                    ar: "هل هذه الغلايات مزعجة؟",
                    de: "Sind diese Kessel laut?"
                },
                answer: {
                    en: "No, our hotel-specific models use ultra-low noise burners (<60dB) and sound-absorbing insulation, making them suitable for basement or rooftop installation without disturbing guests.",
                    zh: "不，我们酒店专用型号使用超低氮低噪音燃烧器（<60dB）和吸音保温材料，非常适合地下室或屋顶安装，不会打扰客人。",
                    ru: "Нет, наши модели для отелей используют сверхнизкошумные горелки (<60 дБ).",
                    es: "No, nuestros modelos específicos para hoteles utilizan quemadores de ruido ultra bajo (<60dB).",
                    fr: "Non, nos modèles spécifiques aux hôtels utilisent des brûleurs à très faible bruit (<60dB).",
                    ar: "لا، تستخدم نماذجنا الخاصة بالفنادق شعلات ذات ضوضاء منخفضة للغاية (< 60 ديسيبل).",
                    de: "Nein, unsere hotelspezifischen Modelle verwenden extrem geräuscharme Brenner (<60dB)."
                }
            },
            {
                question: {
                    en: "Do we need an annual inspection for this boiler?",
                    zh: "这种锅炉需要年检吗？",
                    ru: "Нужен ли ежегодный осмотр этого котла?",
                    es: "¿Necesitamos una inspección anual para esta caldera?",
                    fr: "Avons-nous besoin d'une inspection annuelle pour cette chaudière ?",
                    ar: "هل نحتاج إلى تفتيش سنوي لهذه الغلاية؟",
                    de: "Brauchen wir eine jährliche Inspektion für diesen Kessel?"
                },
                answer: {
                    en: "Our CWNS series atmospheric boilers operate at zero pressure and are typically exempt from annual government safety inspections in many regions.",
                    zh: "我们的CWNS系列常压锅炉在零压力下运行，在许多地区通常免于政府的年度安全检查。",
                    ru: "Наши атмосферные котлы серии CWNS работают при нулевом давлении и, как правило, освобождены от проверок.",
                    es: "Nuestras calderas atmosféricas de la serie CWNS funcionan a presión cero y normalmente están exentas de inspecciones.",
                    fr: "Nos chaudières atmosphériques de la série CWNS fonctionnent à pression nulle et sont généralement exemptées d'inspections.",
                    ar: "تعمل غلاياتنا الجوية من سلسلة CWNS عند ضغط صفر وهي معفاة عادةً من عمليات التفتيش الحكومية السنوية.",
                    de: "Unsere atmosphärischen Kessel der CWNS-Serie arbeiten mit Nulldruck und sind in der Regel von Inspektionen befreit."
                },
            },
            {
                question: {
                    en: "How much space is needed for installation?",
                    zh: "安装需要多少空间？",
                    ru: "Сколько места нужно для установки?",
                    es: "¿Cuánto espacio se necesita para la instalación?",
                    fr: "Combien d'espace est nécessaire pour l'installation ?",
                    ar: "كم من المساحة المطلوبة للتثبيت؟",
                    de: "Wie viel Platz wird für die Installation benötigt?"
                },
                answer: {
                    en: "Our vertical and compact horizontal designs save up to 30% of floor space. We can provide custom layout drawings to fit your specific boiler room dimensions.",
                    zh: "我们的立式和紧凑卧式设计节省高达30%的占地面积。我们可以提供定制布局图以适应您的具体锅炉房尺寸。",
                    ru: "Наши вертикальные и компактные горизонтальные конструкции экономят до 30% площади пола.",
                    es: "Nuestros diseños verticales y horizontales compactos ahorran hasta un 30% de espacio.",
                    fr: "Nos conceptions verticales et horizontales compactes permettent d'économiser jusqu'à 30 % de surface au sol.",
                    ar: "توفر تصميماتنا الرأسية والأفقية المدمجة ما يصل إلى 30٪ من مساحة الأرضية.",
                    de: "Unsere vertikalen und kompakten horizontalen Designs sparen bis zu 30% Platz."
                }
            },
            {
                question: {
                    en: "Can it work with my existing piping system?",
                    zh: "它可以与我现有的管道系统配合工作吗？",
                    ru: "Может ли он работать с моей существующей системой трубопроводов?",
                    es: "¿Puede funcionar con mi sistema de tuberías existente?",
                    fr: "Peut-il fonctionner avec mon système de tuyauterie existant ?",
                    ar: "هل يمكن أن تعمل مع نظام الأنابيب الحالي الخاص بي؟",
                    de: "Kann es mit meinem bestehenden Rohrsystem arbeiten?"
                },
                answer: {
                    en: "Yes, our boilers are designed with standard flange connections and can be easily retrofitted into existing HVAC or process heating piping networks.",
                    zh: "是的，我们的锅炉采用标准法兰接口设计，可以轻松改装到现有的暖通空调或工艺供热管道网络中。",
                    ru: "Да, наши котлы имеют стандартные фланцевые соединения и могут быть легко модернизированы.",
                    es: "Sí, nuestras calderas están diseñadas con conexiones de brida estándar.",
                    fr: "Oui, nos chaudières sont conçues avec des raccords à bride standard.",
                    ar: "نعم، تم تصميم غلاياتنا بوصلات شفة قياسية ويمكن تحديثها بسهولة.",
                    de: "Ja, unsere Kessel sind mit Standard-Flanschanschlüssen ausgestattet und können leicht nachgerüstet werden."
                }
            },
            {
                question: {
                    en: "Is the operation fully automatic?",
                    zh: "操作是全自动的吗？",
                    ru: "Является ли операция полностью автоматической?",
                    es: "¿La operación es totalmente automática?",
                    fr: "L'opération est-elle entièrement automatique ?",
                    ar: "هل العملية تلقائية بالكامل؟",
                    de: "Ist der Betrieb vollautomatisch?"
                },
                answer: {
                    en: "Yes, the system is equipped with a PLC touchscreen controller for one-button start/stop. It can also operate unattended with timed scheduling.",
                    zh: "是的，系统配备PLC触摸屏控制器，实现一键启停。它还可以通过定时调度实现无人值守运行。",
                    ru: "Да, система оснащена контроллером с сенсорным экраном PLC для запуска/остановки одним нажатием.",
                    es: "Sí, el sistema está equipado con un controlador de pantalla táctil PLC para inicio/parada con un solo botón.",
                    fr: "Oui, le système est équipé d'un contrôleur à écran tactile PLC pour un démarrage/arrêt à un bouton.",
                    ar: "نعم، النظام مجهز بوحدة تحكم بشاشة تعمل باللمس PLC لبدء / إيقاف زر واحد.",
                    de: "Ja, das System ist mit einer SPS-Touchscreen-Steuerung für Start/Stopp mit einer Taste ausgestattet."
                }
            }
        ],
        products: ["cwns-atmospheric-hot-water-boiler", "wns-hot-water-boiler", "wns-oil-gas-steam-boiler"],
        image: "/images/solutions/hotel_v2.png"
    }
];
