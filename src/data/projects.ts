

export interface Project {
    id: string;
    title: {
        en: string;
        zh: string;
        ru: string;
        es: string;
        fr: string;
        ar: string;
        de: string;
    };
    location: string;
    countryCode: string; // ISO 3166-1 alpha-2 code for flag
    industry: string;
    productCategory: string;
    productModel: string;
    capacity: string;
    installDate: string;
    images: string[];
    description: {
        en: string;
        zh: string;
        ru: string;
        es: string;
        fr: string;
        ar: string;
        de: string;
    };
    // Detailed SEO Content (Optional)
    clientBackground?: {
        en: string;
        zh: string;
        ru?: string;
        es?: string;
        fr?: string;
        ar?: string;
        de?: string;
    };
    projectChallenge?: {
        en: string;
        zh: string;
        ru?: string;
        es?: string;
        fr?: string;
        ar?: string;
        de?: string;
    };
    projectSolution?: {
        en: string;
        zh: string;
        ru?: string;
        es?: string;
        fr?: string;
        ar?: string;
        de?: string;
    };
    projectResults?: {
        en: string[];
        zh: string[];
        ru?: string[];
        es?: string[];
        fr?: string[];
        ar?: string[];
        de?: string[];
    };
}

export const PROJECTS: Project[] = [
    // 1. Uzbekistan (Existing)
    {
        id: "uzbekistan-gas-boiler-heating",
        title: {
            en: "10 Ton WNS Gas Steam Boiler for Central Heating",
            zh: "10吨WNS燃气蒸汽锅炉用于集中供热",
            ru: "10-тонный газовый паровой котел WNS для центрального отопления",
            es: "Caldera de vapor a gas WNS de 10 toneladas para calefacción central",
            fr: "Chaudière à vapeur à gaz WNS de 10 tonnes pour le chauffage central",
            ar: "غلاية بخار غاز WNS 10 طن للتدفئة المركزية",
            de: "10 Tonnen WNS Gasdampfkessel für Fernwärme"
        },
        location: "Kashkadarya, Uzbekistan",
        countryCode: "uz",
        industry: "heating",
        productCategory: "gas",
        productModel: "WNS10-1.25-Q",
        capacity: "10 t/h",
        installDate: "2024-11",
        images: ["/images/projects/project_1_v2.png"],
        description: {
            en: "Supplied 3 sets of 10-ton gas fired steam boilers for a municipal central heating station, providing stable winter heating for 50,000+ residents.",
            zh: "为塔什干市某市政供热站提供3台10吨燃气蒸汽锅炉，为当地50,000多名居民提供稳定的冬季供暖保障。",
            ru: "Поставка 3 комплектов 10-тонных газовых паровых котлов для муниципальной станции центрального отопления.",
            es: "Suministro de 3 juegos de calderas de vapor a gas de 10 toneladas para una estación de calefacción central municipal.",
            fr: "Fourniture de 3 ensembles de chaudières à vapeur à gaz de 10 tonnes pour une station de chauffage central municipal.",
            ar: "توفير 3 مجموعات من غلايات البخار التي تعمل بالغاز بوزن 10 أطنان لمحطة تدفئة مركزية بلدية.",
            de: "Lieferung von 3 Sätzen 10-Tonnen-Gasdampfkesseln für eine städtische Fernwärmestation, die eine stabile Winterheizung für über 50.000 Einwohner bietet."
        },
        clientBackground: {
            en: "The Municipal District Heating Company of Kashkadarya is responsible for providing winter heating to over 50,000 residents. The region experiences temperatures dropping to -20°C, requiring a robust and reliable heating infrastructure.",
            zh: "卡什卡达里亚市政供热公司负责为当地50,000多名居民提供冬季供暖。该地区冬季气温可降至-20°C，需要坚固可靠的供热基础设施。",
            ru: "Муниципальная компания центрального отопления Кашкадарьи отвечает за обеспечение зимним отоплением более 50 000 жителей. В регионе температура опускается до -20°C, что требует надежной инфраструктуры отопления.",
            es: "La Compañía Municipal de Calefacción Urbana de Kashkadarya es responsable de proporcionar calefacción invernal a más de 50,000 residentes. La región experimenta temperaturas que descienden a -20°C, lo que requiere una infraestructura de calefacción robusta y confiable.",
            fr: "La Compagnie Municipale de Chauffage Urbain de Kashkadarya est responsable de fournir le chauffage hivernal à plus de 50 000 résidents. La région connaît des températures descendant jusqu'à -20°C, nécessitant une infrastructure de chauffage robuste et fiable.",
            ar: "شركة التدفئة المركزية لبلدية كاشكادارية مسؤولة عن توفير التدفئة الشتوية لأكثر من 50,000 ساكن. تشهد المنطقة درجات حرارة تنخفض إلى -20 درجة مئوية، مما يتطلب بنية تحتية قوية وموثوقة للتدفئة.",
            de: "Die städtische Fernwärmegesellschaft von Kashkadarya ist für die Winterheizung von über 50.000 Einwohnern verantwortlich. Die Region erlebt Temperaturen bis zu -20°C, was eine robuste und zuverlässige Heizinfrastruktur erfordert."
        },
        projectChallenge: {
            en: "The previous system relied on aging coal-fired boilers that were inefficient (65% efficiency) and caused severe air pollution. The client faced frequent breakdowns during peak winter months and rising coal procurement costs. They needed a clean, automated, and high-efficiency solution to replace the old units before the next winter season.",
            zh: "原有的供热系统依赖老旧的燃煤锅炉，效率低下（仅65%）且造成严重空气污染。在冬季高峰期，旧设备频繁故障，且煤炭采购成本不断上升。客户急需在下一个供暖季前更换为清洁、自动化的高效供热方案。",
            ru: "Предыдущая система опиралась на устаревшие угольные котлы, которые были неэффективны (КПД 65%) и вызывали сильное загрязнение воздуха. Клиент сталкивался с частыми поломками в пиковые зимние месяцы и ростом затрат на закупку угля. Им требовалось чистое, автоматизированное и высокоэффективное решение для замены старых агрегатов до начала следующего отопительного сезона.",
            es: "El sistema anterior dependía de calderas de carbón envejecidas que eran ineficientes (65% de eficiencia) y causaban una grave contaminación del aire. El cliente enfrentaba averías frecuentes durante los meses pico de invierno y el aumento de los costos de adquisición de carbón. Necesitaban una solución limpia, automatizada y de alta eficiencia para reemplazar las unidades antiguas antes de la próxima temporada de invierno.",
            fr: "L'ancien système reposait sur des chaudières au charbon vieillissantes qui étaient inefficaces (65% d'efficacité) et causaient une grave pollution de l'air. Le client était confronté à des pannes fréquentes pendant les mois d'hiver de pointe et à la hausse des coûts d'approvisionnement en charbon. Ils avaient besoin d'une solution propre, automatisée et à haute efficacité pour remplacer les anciennes unités avant la prochaine saison hivernale.",
            ar: "كان النظام السابق يعتمد على غلايات الفحم المتقادمة التي كانت غير فعالة (كفاءة 65٪) وتسببت في تلوث الهواء الشديد. واجه العميل أعطالًا متكررة خلال أشهر الشتاء الذروة وارتفاع تكاليف شراء الفحم. كانوا بحاجة إلى حل نظيف وآلي وعالي الكفاءة لاستبدال الوحدات القديمة قبل موسم الشتاء المقبل.",
            de: "Das vorherige System stützte sich auf alternde Kohlekessel, die ineffizient waren (65% Wirkungsgrad) und schwere Luftverschmutzung verursachten. Der Kunde sah sich in den Spitzenwintermonaten mit häufigen Ausfällen und steigenden Kohlebeschaffungskosten konfrontiert. Sie benötigten eine saubere, automatisierte und hocheffiziente Lösung, um die alten Einheiten vor der nächsten Wintersaison zu ersetzen."
        },
        projectSolution: {
            en: "Yudong Boiler supplied 3 units of WNS series 10-ton gas-fired steam boilers (WNS10-1.25-Q). These boilers feature a large corrugated furnace design to increase heat transfer area and are equipped with advanced low-NOx burners from Italy (Baltur/Riello). The system includes a customized PLC control panel for fully automated operation, requiring minimal manual supervision. We also provided a comprehensive water treatment system to extend boiler lifespan.",
            zh: "豫东锅炉提供了3台WNS系列10吨燃气蒸汽锅炉（WNS10-1.25-Q）。这些锅炉采用大波纹炉胆设计以增加传热面积，并配备了意大利先进的低氮燃烧器。系统包含定制的PLC控制柜，实现全自动运行，无需人工值守。我们还提供了配套的水处理系统以延长锅炉使用寿命。",
            ru: "Yudong Boiler поставила 3 единицы 10-тонных газовых паровых котлов серии WNS (WNS10-1.25-Q). Эти котлы отличаются конструкцией с большой гофрированной печью для увеличения площади теплопередачи и оснащены передовыми горелками с низким уровнем выбросов NOx из Италии (Baltur/Riello). Система включает в себя индивидуальную панель управления ПЛК для полностью автоматизированной работы, требующую минимального ручного контроля. Мы также предоставили комплексную систему водоподготовки для продления срока службы котла.",
            es: "Yudong Boiler suministró 3 unidades de calderas de vapor a gas de la serie WNS de 10 toneladas (WNS10-1.25-Q). Estas calderas cuentan con un diseño de horno corrugado grande para aumentar el área de transferencia de calor y están equipadas con quemadores avanzados de bajo NOx de Italia (Baltur/Riello). El sistema incluye un panel de control PLC personalizado para una operación totalmente automatizada, que requiere una supervisión manual mínima. También proporcionamos un sistema integral de tratamiento de agua para extender la vida útil de la caldera.",
            fr: "Yudong Boiler a fourni 3 unités de chaudières à vapeur à gaz de la série WNS de 10 tonnes (WNS10-1.25-Q). Ces chaudières disposent d'une conception de grand four ondulé pour augmenter la surface de transfert de chaleur et sont équipées de brûleurs avancés à faible émission de NOx d'Italie (Baltur/Riello). Le système comprend un panneau de commande PLC personnalisé pour un fonctionnement entièrement automatisé, nécessitant une surveillance manuelle minimale. Nous avons également fourni un système complet de traitement de l'eau pour prolonger la durée de vie de la chaudière.",
            ar: "قامت Yudong Boiler بتوريد 3 وحدات من غلايات البخار التي تعمل بالغاز من سلسلة WNS سعة 10 أطنان (WNS10-1.25-Q). تتميز هذه الغلايات بتصميم فرن مموج كبير لزيادة مساحة نقل الحرارة وهي مجهزة بمواقد متقدمة منخفضة أكاسيد النيتروجين من إيطاليا (Baltur/Riello). يشتمل النظام على لوحة تحكم PLC مخصصة للتشغيل الآلي الكامل، مما يتطلب الحد الأدنى من الإشراف اليدوي. كما قدمنا نظامًا شاملاً لمعالجة المياه لإطالة عمر الغلاية.",
            de: "Yudong Boiler lieferte 3 Einheiten von 10-Tonnen-Gasdampfkesseln der WNS-Serie (WNS10-1.25-Q). Diese Kessel verfügen über ein großes Wellofendesign zur Vergrößerung der Wärmeübertragungsfläche und sind mit fortschrittlichen Low-NOx-Brennern aus Italien (Baltur/Riello) ausgestattet. Das System umfasst ein kundenspezifisches SPS-Bedienfeld für einen vollautomatischen Betrieb, der nur minimale manuelle Überwachung erfordert. Wir haben auch ein umfassendes Wasseraufbereitungssystem bereitgestellt, um die Lebensdauer des Kessels zu verlängern."
        },
        projectResults: {
            en: [
                "Thermal efficiency increased from 65% to 98% with the new gas boilers.",
                "Reduced annual fuel costs by approximately 30% due to higher efficiency.",
                "Eliminated coal dust and reduced sulfur emissions by 99%, significantly improving local air quality.",
                "Achieved 100% stable operation during the first winter season with zero unplanned downtime."
            ],
            zh: [
                "新燃气锅炉的热效率从65%提升至98%。",
                "得益于高效率，年燃料成本降低约30%。",
                "消除了煤尘污染，硫排放减少99%，显著改善了当地空气质量。",
                "在第一个供暖季实现了100%稳定运行，零非计划停机。"
            ],
            ru: [
                "Тепловой КПД увеличился с 65% до 98% с новыми газовыми котлами.",
                "Снижение ежегодных затрат на топливо примерно на 30% благодаря более высокой эффективности.",
                "Устранена угольная пыль и снижены выбросы серы на 99%, что значительно улучшило качество местного воздуха.",
                "Достигнута 100% стабильная работа в течение первого зимнего сезона с нулевым незапланированным простоем."
            ],
            es: [
                "La eficiencia térmica aumentó del 65% al 98% con las nuevas calderas de gas.",
                "Reducción de los costos anuales de combustible en aproximadamente un 30% debido a una mayor eficiencia.",
                "Se eliminó el polvo de carbón y se redujeron las emisiones de azufre en un 99%, mejorando significativamente la calidad del aire local.",
                "Se logró una operación 100% estable durante la primera temporada de invierno con cero tiempo de inactividad no planificado."
            ],
            fr: [
                "L'efficacité thermique est passée de 65% à 98% avec les nouvelles chaudières à gaz.",
                "Réduction des coûts annuels de carburant d'environ 30% grâce à une efficacité accrue.",
                "Élimination de la poussière de charbon et réduction des émissions de soufre de 99%, améliorant considérablement la qualité de l'air local.",
                "Fonctionnement 100% stable atteint dès la première saison hivernale avec aucun temps d'arrêt imprévu."
            ],
            ar: [
                "ارتفعت الكفاءة الحرارية من 65٪ إلى 98٪ مع غلايات الغاز الجديدة.",
                "انخفاض تكاليف الوقود السنوية بنحو 30٪ بسبب كفاءة أعلى.",
                "القضاء على غبار الفحم وتقليل انبعاثات الكبريت بنسبة 99٪، مما يحسن جودة الهواء المحلي بشكل كبير.",
                "تحقيق تشغيل مستقر بنسبة 100٪ خلال موسم الشتاء الأول مع وقت توقف غير مخطط له صفر."
            ],
            de: [
                "Der thermische Wirkungsgrad stieg mit den neuen Gaskesseln von 65% auf 98%.",
                "Reduzierung der jährlichen Brennstoffkosten um ca. 30% aufgrund höherer Effizienz.",
                "Beseitigung von Kohlenstaub und Reduzierung der Schwefelemissionen um 99%, was die lokale Luftqualität erheblich verbessert.",
                "Erreichte 100% stabilen Betrieb während der ersten Wintersaison ohne ungeplante Ausfallzeiten."
            ]
        }
    },
    // 2. Bangladesh (Existing)
    {
        id: "bangladesh-thermal-oil-textile",
        title: {
            en: "6M Kcal Thermal Oil Heater for Textile Dyeing",
            zh: "600万大卡导热油炉用于纺织印染",
            ru: "Термомасляный нагреватель 6 млн ккал для окраски текстиля",
            es: "Calentador de aceite térmico de 6M Kcal para teñido textil",
            fr: "Réchauffeur d'huile thermique de 6M Kcal pour la teinture textile",
            ar: "سخان زيت حراري 6 مليون كيلو كالوري لصباغة المنسوجات",
            de: "6M Kcal Thermoölheizung für Textilfärberei"
        },
        location: "Dhaka, Bangladesh",
        countryCode: "bd",
        industry: "textile",
        productCategory: "oil",
        productModel: "YYQW-7000Y-Q",
        capacity: "6000 KW (6m Kcal)",
        installDate: "2024-08",
        images: ["/images/projects/project_2_v2.png"],
        description: {
            en: "Installed a high-efficiency gas-fired thermal oil heater for a leading textile dyeing factory, ensuring precise temperature control of 260°C for fabric dyeing.",
            zh: "为一家领先的纺织印染厂安装高效导热油炉，确保织物染色过程中的260°C精确温控。",
            ru: "Установлен высокоэффективный газовый термомасляный нагреватель для ведущей текстильной красильной фабрики.",
            es: "Se instaló un calentador de aceite térmico a gas de alta eficiencia para una fábrica de teñido textil líder.",
            fr: "Installation d'un réchauffeur d'huile thermique au gaz à haute efficacité pour une usine de teinture textile leader.",
            ar: "تم تركيب سخان زيت حراري عالي الكفاءة يعمل بالغاز لمصنع صباغة منسوجات رائد.",
            de: "Installation einer explosionsgeschützten Thermoölheizung für eine petrochemische Anlage, die sicher Hochtemperaturwärme für kritische Prozesse liefert."
        },
        clientBackground: {
            en: "A leading textile dyeing and finishing factory in Dhaka, producing fabrics for major global fashion brands. Quality consistency and color fastness are critical to their operations.",
            zh: "达卡一家领先的纺织印染整理厂，为全球主要时尚品牌生产面料。质量一致性和色牢度对他们的运营至关重要。",
            ru: "Ведущая фабрика по крашению и отделке текстиля в Дакке, производящая ткани для крупных мировых модных брендов.",
            es: "Una fábrica líder de teñido y acabado textil en Dhaka, que produce telas para las principales marcas de moda mundiales.",
            fr: "Une usine de teinture et de finition textile de premier plan à Dhaka, produisant des tissus pour les grandes marques de mode mondiales.",
            ar: "مصنع رائد لصباغة وتشطيب المنسوجات في دكا ، ينتج الأقمشة لأهم ماركات الأزياء العالمية.",
            de: "Eine führende Textilfärbe- und Veredelungsfabrik in Dhaka, die Stoffe für große globale Modemarken herstellt."
        },
        projectChallenge: {
            en: "The factory's previous heating system suffered from temperature fluctuations, leading to uneven dyeing and a high fabric rework rate (approx. 15%). Additionally, rising natural gas prices in Bangladesh demanded a more fuel-efficient solution to maintain competitiveness.",
            zh: "工厂以前的供热系统温度波动大，导致染色不均匀和较高的面料返工率（约15%）。此外，孟加拉国天然气价格上涨，需要更节能的解决方案以保持竞争力。",
            ru: "Предыдущая система отопления фабрики страдала от колебаний температуры, что приводило к неравномерному окрашиванию и высокой частоте переделки ткани (около 15%).",
            es: "El sistema de calefacción anterior de la fábrica sufría fluctuaciones de temperatura, lo que provocaba un teñido desigual y una alta tasa de retrabajo de telas (aprox. 15%).",
            fr: "L'ancien système reposait sur des chaudières au charbon vieillissantes qui étaient inefficaces (65% d'efficacité) et causaient une grave pollution de l'air. Le client était confronté à des pannes fréquentes pendant les mois d'hiver de pointe et à la hausse des coûts d'approvisionnement en charbon. Ils avaient besoin d'une solution propre, automatisée et à haute efficacité pour remplacer les anciennes unités avant la prochaine saison hivernale.",
            ar: "كان النظام السابق يعتمد على غلايات الفحم المتقادمة التي كانت غير فعالة (كفاءة 65٪) وتسببت في تلوث الهواء الشديد. واجه العميل أعطالًا متكررة خلال أشهر الشتاء الذروة وارتفاع تكاليف شراء الفحم. كانوا بحاجة إلى حل نظيف وآلي وعالي الكفاءة لاستبدال الوحدات القديمة قبل موسم الشتاء المقبل.",
            de: "Das vorherige Heizsystem der Fabrik litt unter Temperaturschwankungen, was zu ungleichmäßigem Färben und einer hohen Nacharbeitsrate (ca. 15%) führte."
        },
        projectSolution: {
            en: "We installed a 6M Kcal/h (7000KW) YYQW series gas-fired thermal oil heater. The system features a three-pass coil design for optimal heat transfer and utilizes a fully automated PID control system to maintain oil temperature within ±1°C accuracy at 260°C. A waste heat recovery unit was also added to preheat combustion air.",
            zh: "我们安装了一台600万大卡/小时（7000KW）的YYQW系列燃气导热油炉。该系统采用三回程盘管设计以优化传热，并利用全自动PID控制系统将260°C时的油温精度保持在±1°C以内。还增加了一套余热回收装置来预热助燃空气。",
            ru: "Мы установили газовый термомасляный нагреватель серии YYQW мощностью 6 млн ккал/ч (7000 кВт). Система оснащена трехходовой спиралью для оптимальной теплопередачи.",
            es: "Instalamos un calentador de aceite térmico a gas de la serie YYQW de 6M Kcal/h (7000KW). El sistema cuenta con un diseño de bobina de tres pasos para una transferencia de calor óptima.",
            fr: "Nous avons installé un réchauffeur d'huile thermique au gaz de la série YYQW de 6M Kcal/h (7000KW). Le système dispose d'une conception de serpentin à trois passes pour un transfert de chaleur optimal.",
            ar: "قمنا بتركيب سخان زيت حراري يعمل بالغاز من سلسلة YYQW بقوة 6 مليون كيلو كالوري / ساعة (7000 كيلو واط). يتميز النظام بتصميم ملف ثلاثي التمريرات لنقل الحرارة الأمثل.",
            de: "Wir installierten eine gasbefeuerte Thermoölheizung der Serie YYQW mit 6M Kcal/h (7000KW). Das System verfügt über ein Dreizug-Spiraldesign für eine optimale Wärmeübertragung."
        },
        projectResults: {
            en: [
                "Achieved precise temperature control (±1°C), reducing fabric defect rate from 15% to under 1%.",
                "Increased thermal efficiency to 95% with the economizer, saving 20% on annual gas costs.",
                "Improved production speed by 25% due to faster heating times.",
                "Ensured consistent product quality for export to European markets."
            ],
            zh: [
                "实现了精确的温度控制（±1°C），将面料次品率从15%降至1%以下。",
                "通过节能器将热效率提高至95%，每年节省20%的燃气成本。",
                "由于加热速度更快，生产速度提高了25%。",
                "确保了出口欧洲市场的产品质量一致性。"
            ],
            ru: [
                "Достигнут точный контроль температуры (±1°C), что снизило уровень брака ткани с 15% до менее 1%.",
                "Тепловой КПД увеличен до 95% с помощью экономайзера, что экономит 20% ежегодных затрат на газ.",
                "Скорость производства увеличена на 25% благодаря более быстрому нагреву.",
                "Обеспечено стабильное качество продукции для экспорта на европейские рынки."
            ],
            es: [
                "Se logró un control de temperatura preciso (±1°C), reduciendo la tasa de defectos de tela del 15% a menos del 1%.",
                "Se aumentó la eficiencia térmica al 95% con el economizador, ahorrando un 20% en costos anuales de gas.",
                "Se mejoró la velocidad de producción en un 25% debido a tiempos de calentamiento más rápidos.",
                "Se garantizó una calidad de producto constante para la exportación a los mercados europeos."
            ],
            fr: [
                "Contrôle précis de la température (±1°C) atteint, réduisant le taux de défauts de tissu de 15% à moins de 1%.",
                "Efficacité thermique augmentée à 95% avec l'économiseur, économisant 20% sur les coûts annuels de gaz.",
                "Vitesse de production améliorée de 25% grâce à des temps de chauffage plus rapides.",
                "Qualité de produit constante assurée pour l'exportation vers les marchés européens."
            ],
            ar: [
                "تحقيق تحكم دقيق في درجة الحرارة (± 1 درجة مئوية) ، مما يقلل من معدل عيوب النسيج من 15٪ إلى أقل من 1٪.",
                "زيادة الكفاءة الحرارية إلى 95٪ مع الموفر ، مما يوفر 20٪ من تكاليف الغاز السنوية.",
                "تحسين سرعة الإنتاج بنسبة 25٪ بسبب أوقات التسخين الأسرع.",
                "ضمان جودة منتج متسقة للتصدير إلى الأسواق الأوروبية."
            ],
            de: [
                "Präzise Temperaturregelung (±1°C) erreicht, wodurch die Stofffehlerrate von 15% auf unter 1% gesenkt wurde.",
                "Thermischer Wirkungsgrad mit dem Economiser auf 95% gesteigert, was 20% der jährlichen Gaskosten spart.",
                "Produktionsgeschwindigkeit um 25% durch schnellere Aufheizzeiten verbessert.",
                "Konsistente Produktqualität für den Export in europäische Märkte sichergestellt."
            ]
        }
    },
    // 3. Indonesia (Existing - Refreshed v4)
    {
        id: "indonesia-biomass-food-processing",
        title: {
            en: "15 Ton Biomass Chain Grate Boiler for Food Processing",
            zh: "15吨生物质链条炉排锅炉用于食品加工",
            ru: "15-тонный биомассовый котел с цепной решеткой для пищевой промышленности",
            es: "Caldera de biomasa de rejilla de cadena de 15 toneladas para procesamiento de alimentos",
            fr: "Chaudière à biomasse à grille à chaîne de 15 tonnes pour la transformation des aliments",
            ar: "غلاية الكتلة الحيوية بـ 15 طن لمعالجة الأغذية",
            de: "15 Tonnen Biomasse-Kettenrostkessel für die Lebensmittelverarbeitung"
        },
        location: "Surabaya, Indonesia",
        countryCode: "id",
        industry: "food",
        productCategory: "biomass",
        productModel: "SZL15-1.25-T",
        capacity: "15 t/h",
        installDate: "2025-01",
        images: ["/images/projects/project_3_v4.png"],
        description: {
            en: "Eco-friendly biomass boiler utilizing palm shell waste as fuel, significantly reducing energy costs for a large-scale food processing plant.",
            zh: "利用棕榈壳废料作为燃料的环保生物质锅炉，为大型食品加工厂显著降低能源成本。",
            ru: "Экологичный котел на биомассе, использующий отходы пальмовой скорлупы в качестве топлива.",
            es: "Caldera de biomasa ecológica que utiliza residuos de cáscara de palma como combustible.",
            fr: "Chaudière à biomasse écologique utilisant des déchets de coques de palmier comme combustible.",
            ar: "غلاية الكتلة الحيوية الصديقة للبيئة التي تستخدم نفايات قشر النخيل كوقود.",
            de: "Umweltfreundlicher Biomassekessel, der Palmschalenabfälle als Brennstoff nutzt und die Energiekosten für eine große Lebensmittelverarbeitungsanlage erheblich senkt."
        },
        clientBackground: {
            en: "A large-scale food processing plant in Surabaya, specializing in snack foods and frying. The facility has access to abundant palm kernel shell (PKS) waste from nearby plantations.",
            zh: "位于泗水的大型食品加工厂，专门生产休闲食品和油炸食品。该工厂可以方便地从附近种植园获取丰富的棕榈仁壳（PKS）废料。",
            ru: "Крупный завод по переработке пищевых продуктов в Сурабае, специализирующийся на закусках и жарке. Предприятие имеет доступ к большому количеству отходов пальмовых ядер (PKS).",
            es: "Una planta de procesamiento de alimentos a gran escala en Surabaya, especializada en bocadillos y frituras. La instalación tiene acceso a abundantes residuos de cáscara de palmiste (PKS).",
            fr: "Une usine de transformation alimentaire à grande échelle à Surabaya, spécialisée dans les snacks et la friture. L'installation a accès à d'abondants déchets de coques de palmiste (PKS).",
            ar: "مصنع كبير لمعالجة الأغذية في سورابايا ، متخصص في الأطعمة الخفيفة والقلي. يمتلك المرفق إمكانية الوصول إلى نفايات قشرة نواة النخيل الوفيرة (PKS).",
            de: "Eine große Lebensmittelverarbeitungsanlage in Surabaya, spezialisiert auf Snacks und Frittieren. Die Anlage hat Zugang zu reichlich Palmkernschalenabfällen (PKS)."
        },
        projectChallenge: {
            en: "Relying on expensive diesel fuel for heating was significantly cutting into profit margins. The client wanted to switch to biomass fuel to reduce operational costs but needed a boiler that could handle the high moisture content of various biomass materials without emitting black smoke, to comply with strict local environmental regulations.",
            zh: "依赖昂贵的柴油进行加热严重削减了利润率。客户希望转向生物质燃料以降低运营成本，但需要一台能够处理各种高水分生物质材料且不排放黑烟的锅炉，以符合当地严格的环保法规。",
            ru: "Использование дорогого дизельного топлива для отопления значительно снижало прибыль. Клиент хотел перейти на биотопливо для снижения эксплуатационных расходов.",
            es: "Depender del costoso combustible diésel para la calefacción estaba reduciendo significativamente los márgenes de beneficio. El cliente quería cambiar a combustible de biomasa.",
            fr: "Le recours au carburant diesel coûteux pour le chauffage réduisait considérablement les marges bénéficiaires. Le client souhaitait passer au combustible biomasse.",
            ar: "كان الاعتماد على وقود الديزل المكلّف للتدفئة يقلل بشكل كبير من هوامش الربح. أراد العميل التحول إلى وقود الكتلة الحيوية لتقليل تكاليف التشغيل.",
            de: "Die Abhängigkeit von teurem Dieselkraftstoff für die Heizung verringerte die Gewinnspannen erheblich. Der Kunde wollte auf Biomassebrennstoff umsteigen."
        },
        projectSolution: {
            en: "Yudong provided a 15-ton SZL series chain grate biomass steam boiler (SZL15-1.25-T). It features a longer grate design and custom air distribution to ensure complete combustion of palm shells. A multi-tube cyclone dust collector and bag filter were installed to control emissions. The automated feeding system ensures a steady fuel supply.",
            zh: "豫东提供了一台15吨SZL系列链条炉排生物质蒸汽锅炉（SZL15-1.25-T）。它采用加长炉排设计和定制配风，确保棕榈壳完全燃烧。安装了多管旋风除尘器和布袋除尘器以控制排放。自动上料系统确保了稳定的燃料供应。",
            ru: "Yudong предоставила 15-тонный паровой котел на биомассе серии SZL с цепной решеткой (SZL15-1.25-T). Он отличается удлиненной конструкцией решетки.",
            es: "Yudong proporcionó una caldera de vapor de biomasa de rejilla de cadena de la serie SZL de 15 toneladas (SZL15-1.25-T). Cuenta con un diseño de rejilla más largo.",
            fr: "Yudong a fourni une chaudière à vapeur à biomasse à grille à chaîne de la série SZL de 15 tonnes (SZL15-1.25-T). Elle dispose d'une conception de grille plus longue.",
            ar: "قدمت Yudong غلاية بخار تعمل بالكتلة الحيوية بسلسلة SZL سعة 15 طنًا (SZL15-1.25-AII). تتميز بتصميم شبكة أطول.",
            de: "Yudong lieferte einen 15-Tonnen-Kettenrost-Biomasse-Dampfkessel der SZL-Serie (SZL15-1.25-T). Er verfügt über ein längeres Rostdesign."
        },
        projectResults: {
            en: [
                "Replaced 100% of diesel consumption with low-cost palm shell waste, reducing fuel costs by over 60%.",
                "Stable steam output ensured consistent frying temperatures, maintaining product crispiness.",
                "Emissions met local clean air standards with zero visible smoke.",
                "Project ROI achieved in just 8 months due to significant fuel savings."
            ],
            zh: [
                "用低成本的棕榈壳废料替代了100%的柴油消耗，燃料成本降低了60%以上。",
                "稳定的蒸汽输出确保了恒定的油炸温度，保持了产品的酥脆度。",
                "排放符合当地清洁空气标准，零可见烟雾。",
                "由于显著的燃料节省，项目投资回报期仅为8个月。"
            ],
            ru: [
                "Заменено 100% потребления дизельного топлива на дешевые отходы пальмовой скорлупы, снижение затрат на топливо более чем на 60%.",
                "Стабильная подача пара обеспечила постоянные температуры жарки.",
                "Выбросы соответствуют местным стандартам чистого воздуха с нулевым видимым дымом.",
                "ROI проекта достигнут всего за 8 месяцев."
            ],
            es: [
                "Se reemplazó el 100% del consumo de diésel con residuos de cáscara de palma de bajo costo, reduciendo los costos de combustible en más del 60%.",
                "La salida de vapor estable aseguró temperaturas de fritura constantes.",
                "Las emisiones cumplieron con los estándares locales de aire limpio con cero humo visible.",
                "ROI del proyecto logrado en solo 8 meses."
            ],
            fr: [
                "Remplacement de 100% de la consommation de diesel par des déchets de coques de palmier à faible coût, réduisant les coûts de carburant de plus de 60%.",
                "La production de vapeur stable a assuré des temperaturas de friture constantes.",
                "Les émissions ont respecté les normes locales d'air pur avec zéro fumée visible.",
                "ROI du projet atteint en seulement 8 mois."
            ],
            ar: [
                "استبدال 100٪ من استهلاك الديزل بنفايات قشر النخيل منخفضة التكلفة ، مما يقلل من تكاليف الوقود بأكثر من 60٪.",
                "يضمن إخراج البخار المستقر درجات حرارة قلي ثابتة.",
                "استوفت الانبعاثات معايير الهواء النظيف المحلية مع عدم وجود دخان مرئي.",
                "تم تحقيق عائد الاستثمار للمشروع في 8 أشهر فقط."
            ],
            de: [
                "Ersatz von 100% des Dieselverbrauchs durch kostengünstige Palmschalenabfälle, Senkung der Brennstoffkosten um über 60%.",
                "Stabile Dampfleistung gewährleistete konstante Frittiertemperaturen.",
                "Emissionen erfüllten lokale Reinluftstandards ohne sichtbaren Rauch.",
                "Projekt-ROI in nur 8 Monaten erreicht."
            ]
        }
    },
    // 4. Russia (Existing - Refreshed v4)
    {
        id: "russia-coal-chemical-plant",
        title: {
            en: "20 Ton SZL Coal Fired Boiler for Chemical Plant",
            zh: "20吨SZL燃煤锅炉用于化工厂",
            ru: "20-тонный угольный котел SZL для химического завода",
            es: "Caldera de carbón SZL de 20 toneladas para planta química",
            fr: "Chaudière à charbon SZL de 20 tonnes pour usine chimique",
            ar: "غلاية تعمل بالفحم SZL 20 طن لمصنع كيميائي",
            de: "20 Tonnen SZL Kohlekessel für Chemiewerk"
        },
        location: "Novosibirsk, Russia",
        countryCode: "ru",
        industry: "chemical",
        productCategory: "coal",
        productModel: "SZL20-1.6-AII",
        capacity: "20 t/h",
        installDate: "2024-10",
        images: ["/images/projects/project_4_v4.png"],
        description: {
            en: "Heavy-duty coal-fired boiler system designed for continuous 24/7 operation in harsh winter conditions, supporting chemical reaction processes.",
            zh: "专为严酷冬季条件下24/7连续运行设计的重型燃煤锅炉系统，支持化工反应工艺。",
            ru: "Мощная угольная котельная система, разработанная для непрерывной работы 24/7 в суровых зимних условиях.",
            es: "Sistema de caldera de carbón de servicio pesado diseñado para funcionamiento continuo 24/7.",
            fr: "Système de chaudière au charbon robuste conçu pour un fonctionnement continu 24/7.",
            ar: "نظام غلاية تعمل بالفحم للخدمة الشاقة مصمم للتشغيل المستمر على مدار الساعة طوال أيام الأسبوع.",
            de: "Robustes kohlebefeuerter Kesselsystem, entwickelt für den 24/7-Dauerbetrieb unter rauen Winterbedingungen, das chemische Reaktionsprozesse unterstützt."
        },
        clientBackground: {
            en: "A harsh-environment chemical plant in Novosibirsk, Siberia. The facility requires continuous steam for chemical synthesis and heating, operating in temperatures that drop below -30°C in winter.",
            zh: "位于西伯利亚新西伯利亚的一家严酷环境化工厂。该设施需要持续的蒸汽用于化学合成和供暖，冬季气温可降至-30°C以下。",
            ru: "Химический завод в суровых условиях в Новосибирске, Сибирь. Предприятию требуется непрерывный пар для химического синтеза и отопления.",
            es: "Una planta química de ambiente hostil en Novosibirsk, Siberia. La instalación requiere vapor continuo para la síntesis química.",
            fr: "Une usine chimique en environnement difficile à Novossibirsk, en Sibérie. L'installation nécessite de la vapeur en continu.",
            ar: "مصنع كيميائي في بيئة قاسية في نوفوسيبيرسك ، سيبيريا. يتطلب المرفق بخارًا مستمرًا للتخليق الكيميائي والتدفئة.",
            de: "Ein Chemiewerk in rauer Umgebung in Nowosibirsk, Sibirien. Die Anlage benötigt kontinuierlichen Dampf für die chemische Synthese."
        },
        projectChallenge: {
            en: "The plant needed a highly reliable boiler capable of continuous 24/7 operation despite the extreme cold. The local coal quality varies, so the boiler needed to be adaptable to different coal grades. Any downtime in winter could lead to frozen pipes and catastrophic production losses.",
            zh: "工厂需要一台高度可靠的锅炉，能够在极寒条件下全天候连续运行。当地煤质变化大，因此锅炉需要能够适应不同的煤种。冬季的任何停机都可能导致管道冻结和灾难性的生产损失。",
            ru: "Заводу требовался высоконадежный котел, способный работать непрерывно 24/7, несмотря на сильный холод.",
            es: "La planta necesitaba una caldera altamente confiable capaz de operar continuamente las 24 horas del día, los 7 días de la semana, a pesar del frío extremo.",
            fr: "L'usine avait besoin d'une chaudière très fiable capable de fonctionner en continu 24h/24 et 7j/7 malgré le froid extrême.",
            ar: "كان المصنع بحاجة إلى غلاية موثوقة للغاية قادرة على التشغيل المستمر على مدار 24 ساعة طوال أيام الأسبوع على الرغم من البرد القارس.",
            de: "Das Werk benötigte einen äußerst zuverlässigen Kessel, der trotz der extremen Kälte rund um die Uhr kontinuierlich betrieben werden konnte."
        },
        projectSolution: {
            en: "We supplied a customized 20-ton SZL series water-tube coal boiler (SZL20-1.6-AII). The boiler features a membrane water wall structure for excellent sealing and heat value. We reinforced the external insulation and included a heavy-duty grate system to handle lower quality coal. An automatic de-slagging machine was installed to reduce manual labor.",
            zh: "我们提供了一台定制的20吨SZL系列水管燃煤锅炉（SZL20-1.6-AII）。该锅炉采用膜式水冷壁结构，密封性和热值优异。我们加强了外部保温，并配备了重型炉排系统以处理劣质煤。安装了自动除渣机以减少人工劳动。",
            ru: "Мы поставили индивидуальный 20-тонный водотрубный угольный котел серии SZL (SZL20-1.6-AII).",
            es: "Suministramos una caldera de carbón acuotubular personalizada de la serie SZL de 20 toneladas (SZL20-1.6-AII).",
            fr: "Nous avons fourni une chaudière à charbon à tubes d'eau personnalisée de la série SZL de 20 tonnes (SZL20-1.6-AII).",
            ar: "قمنا بتوريد غلاية فحم أنابيب المياه المخصصة من سلسلة SZL سعة 20 طنًا (SZL20-1.6-AII).",
            de: "Wir lieferten einen kundenspezifischen 20-Tonnen-Wasserrohr-Kohlekessel der SZL-Serie (SZL20-1.6-AII)."
        },
        projectResults: {
            en: [
                "Successfully operated through two severe winters with 100% uptime, preventing any freezing incidents.",
                "Adaptable grate design allowed burning of cheaper local coal, saving 15% on fuel costs.",
                "Membrane wall structure improved thermal efficiency by 5% compared to the old brick-set boiler.",
                "Automated ash removal significantly improved working conditions for plant operators."
            ],
            zh: [
                "成功在两个严冬中运行，正常运行时间为100%，防止了任何冻结事故。",
                "适应性强的炉排设计允许燃烧更便宜的当地煤炭，节省了15%的燃料成本。",
                "膜式水冷壁结构比老式砖砌锅炉的热效率提高了5%。",
                "自动除灰显著改善了工厂操作员的工作条件。"
            ],
            ru: [
                "Успешно работала в течение двух суровых зим со 100% временем безотказной работы.",
                "Адаптируемая конструкция решетки позволила сжигать более дешевый местный уголь.",
                "Конструкция мембранной стенки улучшила тепловой КПД на 5%.",
                "Автоматическое удаление золы значительно улучшило условия труда."
            ],
            es: [
                "Operó con éxito a través de dos inviernos severos con un 100% de tiempo de actividad.",
                "El diseño de rejilla adaptable permitió quemar carbón local más barato.",
                "La estructura de pared de membrana mejoró la eficiencia térmica en un 5%.",
                "La eliminación automatizada de cenizas mejoró significativamente las condiciones de trabajo."
            ],
            fr: [
                "A fonctionné avec succès pendant deux hivers rigoureux avec 100% de temps de disponibilité.",
                "La conception de la grille adaptable a permis de brûler du charbon local moins cher.",
                "La structure de la paroi membranaire a amélioré l'efficacité thermique de 5%.",
                "L'élimination automatisée des cendres a considérablement amélioré les conditions de travail."
            ],
            ar: [
                "تم تشغيلها بنجاح خلال شتاءين قاسيين مع وقت تشغيل بنسبة 100٪.",
                "سمح تصميم الشبكة القابل للتكيف بحرق الفحم المحلي الأرخص.",
                "حسنت بنية جدار الغشاء الكفاءة الحرارية بنسبة 5 ٪.",
                "أدت إزالة الرماد الآلي إلى تحسين ظروف العمل بشكل كبير."
            ],
            de: [
                "Erfolgreich durch zwei strenge Winter mit 100% Betriebszeit betrieben.",
                "Das anpassungsfähige Rostdesign ermöglichte das Verbrennen von billigerer lokaler Kohle.",
                "Die Membranwandstruktur verbesserte den thermischen Wirkungsgrad um 5%.",
                "Die automatisierte Ascheentfernung verbesserte die Arbeitsbedingungen erheblich."
            ]
        }
    },
    // 5. Saudi Arabia (Existing)
    {
        id: "saudi-arabia-gas-hotel",
        title: {
            en: "Low NOx LPG Hot Water Boiler for Luxury Hotel",
            zh: "豪华酒店用低氮LPG热水锅炉",
            ru: "Водогрейный котел на сжиженном газе с низким уровнем NOx для роскошного отеля",
            es: "Caldera de agua caliente de GLP con bajo NOx para hotel de lujo",
            fr: "Chaudière à eau chaude GPL à faible NOx pour hôtel de luxe",
            ar: "غلاية مياه ساخنة بغاز البترول المسال منخفضة أكاسيد النيتروجين لفندق فاخر",
            de: "Low-NOx LPG-Heißwasserkessel für Luxushotel"
        },
        location: "Riyadh, Saudi Arabia",
        countryCode: "sa",
        industry: "heating",
        productCategory: "gas",
        productModel: "WNS2.8-1.0/95/70-Q",
        capacity: "2.8 MW",
        installDate: "2024-05",
        images: ["/images/projects/project_5_v2.png"],
        description: {
            en: "Ultra-low emission hot water boiler units for a 5-star hotel, providing silent operation and consistent domestic hot water supply.",
            zh: "为五星级豪华酒店提供超低氮排放热水锅炉机组，确保静音运行和稳定的生活热水供应。",
            ru: "Водогрейные котлы со сверхнизким уровнем выбросов для 5-звездочного отеля.",
            es: "Unidades de caldera de agua caliente de emisiones ultrabajas para un hotel de 5 estrellas.",
            fr: "Unités de chaudière à eau chaude à très faibles émissions pour un hôtel 5 étoiles.",
            ar: "وحدات غلايات مياه ساخنة ذات انبعاثات منخفضة للغاية لفندق 5 نجوم.",
            de: "Ultra-emissionsarme Heißwasserkessel für ein 5-Sterne-Hotel, die einen geräuschlosen Betrieb und eine konstante Warmwasserversorgung gewährleisten."
        },
        clientBackground: {
            en: "A newly built 5-star luxury hotel in Riyadh, Saudi Arabia, featuring 300+ rooms, a spa, and multiple swimming pools. The client demanded a premium, eco-friendly heating system that aligns with their sustainability goals and provides absolute comfort for guests.",
            zh: "沙特利雅得一家新建的五星级豪华酒店，拥有300多间客房、水疗中心和多个游泳池。客户要求使用符合其可持续发展目标的高端环保加热系统，为客人提供绝对的舒适体验。",
            ru: "Недавно построенный 5-звездочный роскошный отель в Эр-Рияде, Саудовская Аравия, с 300+ номерами, спа и бассейнами. Клиент требовал премиальную экологически чистую систему отопления.",
            es: "Un hotel de lujo de 5 estrellas recién construido en Riad, Arabia Saudita. El cliente exigió un sistema de calefacción premium y ecológico.",
            fr: "Un hôtel de luxe 5 étoiles nouvellement construit à Riyad, en Arabie saoudite. Le client a exigé un système de chauffage haut de gamme et écologique.",
            ar: "فندق فاخر من 5 نجوم تم بناؤه حديثًا في الرياض ، المملكة العربية السعودية. طلب العميل نظام تدفئة ممتاز وصديق للبيئة.",
            de: "Ein neu gebautes 5-Sterne-Luxushotel in Riad, Saudi-Arabien. Der Kunde verlangte ein erstklassiges, umweltfreundliches Heizsystem."
        },
        projectChallenge: {
            en: "The hotel required a massive amount of hot water with fluctuating peak demands (morning/evening showers vs daytime). Strict noise control regulations applied due to the boiler room's proximity to guest areas. Furthermore, local environmental laws imposed strict NOx emission limits (<30mg/m³).",
            zh: "酒店需要大量的热水，且高峰需求波动大（早晚淋浴与白天相比）。由于锅炉房紧邻客房区，噪音控制要求极严。此外，当地环保法律规定了严格的氮氧化物排放限值（<30mg/m³）。",
            ru: "Отелю требовалось огромное количество горячей воды с колеблющимися пиковыми потребностями. Применялись строгие правила контроля шума.",
            es: "El hotel requería una gran cantidad de agua caliente con demandas máximas fluctuantes. Se aplicaron estrictas normas de control de ruido.",
            fr: "L'hôtel avait besoin d'une énorme quantité d'eau chaude avec des demandes de pointe fluctuantes. Des réglementations strictes de contrôle du bruit s'appliquaient.",
            ar: "تطلب الفندق كمية هائلة من الماء الساخن مع تذبذب الطلب في أوقات الذروة. تم تطبيق لوائح صارمة للتحكم في الضوضاء.",
            de: "Das Hotel benötigte eine riesige Menge an heißem Wasser mit schwankenden Spitzenbedarfen. Es galten strenge Lärmschutzvorschriften."
        },
        projectSolution: {
            en: "We installed 2 units of 2.8MW WNS series vacuum hot water boilers. These operate under negative pressure, ensuring absolute safety with no risk of explosion. We utilized ultra-low NOx burners and sound-insulating enclosures to keep noise below 60dB and NOx emissions under 28mg/m³. A smart cascade control system automatically adjusts firing rate based on real-time load.",
            zh: "我们安装了2台2.8MW WNS系列真空热水锅炉。这些锅炉在负压下运行，确保绝对安全，无爆炸风险。我们采用了超低氮燃烧器和隔音罩，将噪音控制在60dB以下，NOx排放低于28mg/m³。智能级联控制系统根据实时负荷自动调节燃烧率。",
            ru: "Мы установили 2 единицы вакуумных водогрейных котлов серии WNS мощностью 2,8 МВт. Они работают под отрицательным давлением, обеспечивая безопасность.",
            es: "Instalamos 2 unidades de calderas de agua caliente al vacío de la serie WNS de 2.8MW. Funcionan bajo presión negativa, garantizando la seguridad.",
            fr: "Nous avons installé 2 unités de chaudières à eau chaude sous vide de la série WNS de 2,8 MW. Elles fonctionnent sous pression négative, assurant la sécurité.",
            ar: "قمنا بتركيب وحدتين من غلايات الماء الساخن الفراغية سلسلة WNS بسعة 2.8 ميجاوات. تعمل هذه تحت ضغط سلبي ، مما يضمن السلامة.",
            de: "Wir haben 2 Einheiten von 2,8 MW WNS-Serie Vakuum-Heißwasserkesseln installiert. Diese arbeiten unter Unterdruck und gewährleisten Sicherheit."
        },
        projectResults: {
            en: [
                "Achieved silent operation (<60dB), ensuring zero disturbance to hotel guests.",
                "NOx emissions stabilized at 28mg/m³, surpassing the strict local green building standards.",
                "Vacuum phase change technology ensures a lifespan of 20+ years without scaling issues.",
                "Smart control reduced fuel consumption by 25% compared to conventional hot water boilers."
            ],
            zh: [
                "实现了静音运行（<60dB），确保对酒店客人零干扰。",
                "NOx排放稳定在28mg/m³，超越了当地严格的绿色建筑标准。",
                "真空相变技术确保了20年以上的使用寿命且无结垢问题。",
                "智能控制相比传统热水锅炉降低了25%的燃料消耗。"
            ],
            ru: [
                "Достигнута бесшумная работа (<60дБ), не беспокоящая гостей.",
                "Выбросы NOx стабилизировались на уровне 28 мг/м³.",
                "Технология вакуумного фазового перехода обеспечивает срок службы 20+ лет.",
                "Интеллектуальное управление снизило потребление топлива на 25%."
            ],
            es: [
                "Se logró un funcionamiento silencioso (<60dB), sin molestar a los huéspedes.",
                "Las emisiones de NOx se estabilizaron en 28mg/m³.",
                "La tecnología de cambio de fase al vacío garantiza una vida útil de más de 20 años.",
                "El control inteligente redujo el consumo de combustible en un 25%."
            ],
            fr: [
                "Fonctionnement silencieux (<60dB) atteint, ne dérangeant pas les clients.",
                "Les émissions de NOx se sont stabilisées à 28mg/m³.",
                "La technologie de changement de phase sous vide assure une durée de vie de 20+ ans.",
                "Le contrôle intelligent a réduit la consommation de carburant de 25%."
            ],
            ar: [
                "تحقيق تشغيل صامت (<60 ديسيبل) ، مما يضمن عدم إزعاج الضيوف.",
                "استقرت انبعاثات أكاسيد النيتروجين عند 28 مجم / م 3.",
                "تضمن تقنية تغيير الطور الفراغي عمرًا يزيد عن 20 عامًا.",
                "قلل التحكم الذكي من استهلاك الوقود بنسبة 25٪."
            ],
            de: [
                "Geräuschloser Betrieb (<60dB) erreicht, keine Störung der Gäste.",
                "NOx-Emissionen stabilisierten sich bei 28mg/m³.",
                "Vakuumphasenwechseltechnologie sorgt für eine Lebensdauer von 20+ Jahren.",
                "Intelligente Steuerung reduzierte den Kraftstoffverbrauch um 25%."
            ]
        }
    },
    // 6. Mexico (Existing)
    {
        id: "mexico-gas-paper",
        title: {
            en: "12 Ton Gas Fired Boiler for Paper Packaging",
            zh: "12吨燃气锅炉用于纸包装行业",
            ru: "12-тонный газовый котел для бумажной упаковки",
            es: "Caldera a gas de 12 toneladas para embalaje de papel",
            fr: "Chaudière à gaz de 12 tonnes pour l'emballage papier",
            ar: "غلاية تعمل بالغاز 12 طن لتغليف الورق",
            de: "12 Tonnen Gasheizkessel für Papierverpackungen"
        },
        location: "Mexico City, Mexico",
        countryCode: "mx",
        industry: "paper",
        productCategory: "gas",
        productModel: "WNS12-1.25-Q",
        capacity: "12 t/h",
        installDate: "2024-02",
        images: ["/images/projects/project_6_v2.png"],
        description: {
            en: "Supporting production lines for a large cardboard packaging manufacturer. The system includes full condensate recovery to save water and energy.",
            zh: "支持大型纸板包装制造商的生产线。该系统包括全冷凝水回收装置，以节约用水和能源。",
            ru: "Поддержка производственных линий для крупного производителя картонной упаковки.",
            es: "Apoyo a las líneas de producción de un gran fabricante de envases de cartón.",
            fr: "Support des lignes de production pour un grand fabricant d'emballages en carton.",
            ar: "دعم خطوط الإنتاج لمصنع كبير لتعليب الكرتون.",
            de: "Unterstützung der Produktionslinien für einen großen Kartonverpackungshersteller. Das System umfasst eine vollständige Kondensatrückgewinnung, um Wasser und Energie zu sparen."
        },
        clientBackground: {
            en: "A major cardboard packaging manufacturer in Mexico City, supplying packaging solutions for the electronics and logistics industries. Steam is essential for their corrugating machines and drying processes.",
            zh: "墨西哥城一家主要纸板包装制造商，为电子和物流行业提供包装解决方案。蒸汽对于他们的瓦楞机和干燥工艺至关重要。",
            ru: "Крупный производитель картонной упаковки в Мехико. Пар необходим для их гофрировальных машин и процессов сушки.",
            es: "Un importante fabricante de envases de cartón en la Ciudad de México. El vapor es esencial para sus máquinas corrugadoras.",
            fr: "Un grand fabricant d'emballages en carton à Mexico. La vapeur est essentielle pour leurs machines à onduler.",
            ar: "شركة كبرى لتصنيع عبوات الكرتون في مكسيكو سيتي. البخار ضروري لآلات التموج وعمليات التجفيف.",
            de: "Ein bedeutender Kartonverpackungshersteller in Mexiko-Stadt. Dampf ist für ihre Wellpappenmaschinen unerlässlich."
        },
        projectChallenge: {
            en: "The client was facing high natural gas costs which were reducing strict profit margins. Additionally, water scarcity in the region meant that continuous freshwater makeup for the boiler was expensive and environmentally unsustainable. They needed a solution that would minimize both gas and water usage.",
            zh: "客户面临高昂的天然气成本，严重压缩了利润空间。此外，该地区缺水，意味着锅炉持续的新鲜水补给既昂贵又不可持续。他们需要一种既能最大限度减少天然气又能减少用水量的解决方案。",
            ru: "Клиент столкнулся с высокими затратами на природный газ. Кроме того, нехватка воды в регионе делала подпитку котла дорогой.",
            es: "El cliente enfrentaba altos costos de gas natural. Además, la escasez de agua en la región hacía que la reposición continua de agua fuera costosa.",
            fr: "Le client était confronté à des coûts élevés de gaz naturel. De plus, la pénurie d'eau dans la région rendait l'appoint d'eau coûteux.",
            ar: "كان العميل يواجه تكاليف عالية للغاز الطبيعي. بالإضافة إلى ذلك ، كانت ندرة المياه في المنطقة تعني أن تعويض المياه العذبة مكلف.",
            de: "Der Kunde sah sich mit hohen Erdgaskosten konfrontiert. Zudem machte die Wasserknappheit in der Region die kontinuierliche Frischwassernachspeisung teuer."
        },
        projectSolution: {
            en: "Yudong designed a highly efficient 12-ton WNS Gas Steam Boiler system integrated with a dual-stage economizer and condenser. Crucially, we implemented a closed-loop condensate recovery system that recycles high-temperature condensate water back to the boiler, significantly reducing the need for cold fresh water and fuel to heat it.",
            zh: "豫东设计了一套高效的12吨WNS燃气蒸汽锅炉系统，集成了双级节能器和冷凝器。关键在于，我们实施了闭环冷凝水回收系统，将高温冷凝水回收至锅炉，显著减少了对冷新鲜水及其加热燃料的需求。",
            ru: "Yudong спроектировала высокоэффективную систему газовых паровых котлов WNS весом 12 тонн. Мы внедрили систему возврата конденсата.",
            es: "Yudong diseñó un sistema de caldera de vapor a gas WNS de 12 toneladas altamente eficiente. Implementamos un sistema de recuperación de condensado.",
            fr: "Yudong a conçu un système de chaudière à vapeur à gaz WNS de 12 tonnes très efficace. Nous avons mis en œuvre un système de récupération des condensats.",
            ar: "صممت Yudong نظام غلاية بخار غاز WNS عالي الكفاءة سعة 12 طنًا. قمنا بتنفيذ نظام استرداد المكثفات.",
            de: "Yudong entwarf ein hocheffizientes 12-Tonnen-WNS-Gasdampfkesselsystem. Wir implementierten ein Kondensatrückgewinnungssystem."
        },
        projectResults: {
            en: [
                "Achieved 99.5% thermal efficiency, reducing natural gas bills by 15% annually.",
                "Recycled 40% of steam condensate, drastically cutting water consumption and treatment costs.",
                "Provided stable, dry steam which improved the bonding quality of the corrugated cardboard products.",
                "System paid for itself in energy and water savings within 14 months."
            ],
            zh: [
                "实现了99.5%的热效率，每年减少15%的天然气账单。",
                "回收了40%的蒸汽冷凝水，大幅降低了用水量和处理成本。",
                "提供了稳定、干燥的蒸汽，提高了瓦楞纸板产品的粘合质量。",
                "系统通过节能节水在14个月内收回了成本。"
            ],
            ru: [
                "Достигнут тепловой КПД 99,5%, счета за газ снижены на 15%.",
                "Переработано 40% парового конденсата, что резко сократило потребление воды.",
                "Обеспечен стабильный, сухой пар, улучшающий качество картона.",
                "Система окупилась за 14 месяцев."
            ],
            es: [
                "Se logró una eficiencia térmica del 99.5%, reduciendo las facturas de gas en un 15%.",
                "Se recicló el 40% del condensado de vapor, reduciendo drásticamente el consumo de agua.",
                "Se proporcionó vapor seco y estable que mejoró la calidad del cartón.",
                "El sistema se amortizó en 14 meses."
            ],
            fr: [
                "Efficacité thermique de 99,5% atteinte, réduisant les factures de gaz de 15%.",
                "Recyclage de 40% du condensat de vapeur, réduisant considérablement la consommation d'eau.",
                "Fourniture d'une vapeur stable et sèche améliorant la qualité du carton.",
                "Le système s'est rentabilisé en 14 mois."
            ],
            ar: [
                "تحقيق كفاءة حرارية بنسبة 99.5٪ ، مما يقلل فواتير الغاز بنسبة 15٪ سنويًا.",
                "إعادة تدوير 40٪ من مكثفات البخار ، مما يقلل بشكل كبير من استهلاك المياه.",
                "توفير بخار مستقر وجاف مما أدى إلى تحسين جودة الكرتون.",
                "دفع النظام تكاليفه في 14 شهرًا."
            ],
            de: [
                "Thermischer Wirkungsgrad von 99,5% erreicht, Gasrechnung um 15% gesenkt.",
                "40% des Dampfkondensats recycelt, was den Wasserverbrauch drastisch senkt.",
                "Lieferung von stabilem, trockenem Dampf, der die Qualität des Kartons verbesserte.",
                "Das System amortisierte sich innerhalb von 14 Monaten."
            ]
        }
    },
    // 7. Kazakhstan (New)
    {
        id: "kazakhstan-gas-heating-almaty",
        title: {
            en: "10 Ton WNS Gas Boiler for District Heating",
            zh: "10吨WNS燃气供暖锅炉",
            ru: "10-тонный газовый котел WNS для районного отопления",
            es: "Caldera de gas WNS de 10 toneladas para calefacción urbana",
            fr: "Chaudière à gaz WNS de 10 tonnes pour le chauffage urbain",
            ar: "غلاية غاز WNS 10 طن للتدفئة المركزية",
            de: "10 Tonnen WNS Gaskessel für Fernwärme"
        },
        location: "Almaty, Kazakhstan",
        countryCode: "kz",
        industry: "heating",
        productCategory: "gas",
        productModel: "WNS10-1.25-Q",
        capacity: "10 t/h",
        installDate: "2024-12",
        images: ["/images/projects/project_kazakhstan.png"],
        description: {
            en: "Modern central heating solution for a residential district in Almaty, featuring high thermal efficiency and automated controls.",
            zh: "阿拉木图某住宅区的现代化集中供热解决方案，具有高热效率和自动化控制功能。",
            ru: "Современное решение централизованного теплоснабжения жилого района в Алматы с высоким тепловым КПД.",
            es: "Solución moderna de calefacción central para un distrito residencial en Almaty.",
            fr: "Solution moderne de chauffage central pour un quartier résidentiel à Almaty.",
            ar: "حل تدفئة مركزية حديث لمنطقة سكنية في ألماتي.",
            de: "Moderne Fernwärmelösung für ein Wohngebiet in Almaty mit hoher thermischer Effizienz und automatisierten Steuerungen."
        },
        clientBackground: {
            en: "A residential district heating project in Almaty, Kazakhstan, serving a community of 5,000 residents. The region faces severe winters with temperatures dropping to -30°C, making reliable heating a matter of public safety.",
            zh: "哈萨克斯坦阿拉木图的一个住宅区供热项目，服务于5000名居民的社区。该地区冬季严寒，气温降至-30°C，可靠的供暖是公共安全问题。",
            ru: "Проект районного теплоснабжения в Алматы, Казахстан, обслуживающий сообщество из 5000 жителей. Регион сталкивается с суровыми зимами.",
            es: "Un proyecto de calefacción urbana residencial en Almaty, Kazajstán. La región se enfrenta a inviernos severos.",
            fr: "Un projet de chauffage urbain résidentiel à Almaty, au Kazakhstan. La région fait face à des hivers rigoureux.",
            ar: "مشروع تدفئة المناطق السكنية في ألماتي ، كازاخستان. تواجه المنطقة فصول شتاء قاسية.",
            de: "Ein Fernwärmeprojekt für Wohngebiete in Almaty, Kasachstan. Die Region ist mit strengen Wintern konfrontiert."
        },
        projectChallenge: {
            en: "The existing heating infrastructure was outdated Soviet-era equipment with low efficiency and frequent leaks. Residents complained of insufficient heating during peak winter. The municipality needed a modern, automated system that could adjust output based on outdoor temperatures to save energy.",
            zh: "现有的供暖基础设施是过时的苏联时代设备，效率低且经常泄漏。居民抱怨冬季高峰期供暖不足。市政当局需要一种现代化的自动化系统，能够根据室外温度调节输出以节约能源。",
            ru: "Существующая инфраструктура отопления была устаревшей. Жители жаловались на недостаточное отопление.",
            es: "La infraestructura de calefacción existente estaba obsoleta. Los residentes se quejaban de calefacción insuficiente.",
            fr: "L'infrastructure de chauffage existante était obsolète. Les résidents se plaignaient d'un chauffage insuffisant.",
            ar: "كانت البنية التحتية للتدفئة الحالية قديمة. واشتكى السكان من عدم كفاية التدفئة.",
            de: "Die bestehende Heizinfrastruktur war veraltet. Die Bewohner beschwerten sich über unzureichende Heizung."
        },
        projectSolution: {
            en: "We supplied 3 units of 10-ton WNS Gas Hot Water Boilers installed in parallel. The system featues a weather-compensation control module that automatically adjusts boiler load based on ambient temperature sensors. It replaced the old coal system with clean natural gas, reducing urban pollution.",
            zh: "我们提供了3台并联安装的10吨WNS燃气热水锅炉。该系统具有气候补偿控制模块，可根据环境温度传感器自动调节锅炉负荷。它用清洁的天然气取代了旧的燃煤系统，减少了城市污染。",
            ru: "Мы поставили 3 единицы 10-тонных газовых водогрейных котлов WNS. Система оснащена модулем погодной компенсации.",
            es: "Suministramos 3 unidades de calderas de agua caliente a gas WNS de 10 toneladas. El sistema cuenta con un módulo de compensación climática.",
            fr: "Nous avons fourni 3 unités de chaudières à eau chaude à gaz WNS de 10 tonnes. Le système dispose d'un module de compensation météorologique.",
            ar: "قمنا بتوريد 3 وحدات من غلايات الماء الساخن الغازية WNS سعة 10 أطنان. يتميز النظام بوحدة تعويض الطقس.",
            de: "Wir lieferten 3 Einheiten von 10-Tonnen-WNS-Gas-Heißwasserkesseln. Das System verfügt über ein Wetterkompensations-Steuermodul."
        },
        projectResults: {
            en: [
                "Guaranteed indoor temperatures of 22°C even when outside is -30°C.",
                "Automated weather compensation reduced fuel consumption by 30% compared to fixed-output systems.",
                "Unmanned operation capability significantly lowered labor costs for the heating company.",
                "Reduction in coal usage improved local air quality index during winter months."
            ],
            zh: [
                "即使室外只有-30°C，也能保证室内温度达到22°C。",
                "与其固定输出系统相比，自动化气候补偿将燃料消耗降低了30%。",
                "无人值守运行能力显著降低了供热公司的人工成本。",
                "减少煤炭使用改善了冬季当地的空气质量指数。"
            ],
            ru: [
                "Гарантированная температура в помещении 22°C даже при -30°C на улице.",
                "Автоматическая погодная компенсация снизила расход топлива на 30%.",
                "Возможность беспилотной работы значительно снизила трудозатраты.",
                "Сокращение использования угля улучшило качество местного воздуха."
            ],
            es: [
                "Temperaturas interiores garantizadas de 22°C incluso con -30°C en el exterior.",
                "La compensación climática automatizada redujo el consumo de combustible en un 30%.",
                "La capacidad de operación no tripulada redujo los costos laborales.",
                "La reducción en el uso de carbón mejoró la calidad del aire local."
            ],
            fr: [
                "Températures intérieures garanties de 22°C même par -30°C à l'extérieur.",
                "La compensation météorologique automatisée a réduit la consommation de carburant de 30%.",
                "La capacité de fonctionnement sans personnel a réduit les coûts de main-d'œuvre.",
                "La réduction de l'utilisation du charbon a amélioré la qualité de l'air local."
            ],
            ar: [
                "درجات حرارة داخلية مضمونة تبلغ 22 درجة مئوية حتى عندما تكون درجة الحرارة الخارجية -30 درجة مئوية.",
                "خفض تعويض الطقس الآلي استهلاك الوقود بنسبة 30٪.",
                "أدت قدرة التشغيل بدون طيار إلى خفض تكاليف العمالة بشكل كبير.",
                "أدى انخفاض استخدام الفحم إلى تحسين جودة الهواء المحلي."
            ],
            de: [
                "Garantierte Innentemperaturen von 22°C, auch wenn es draußen -30°C ist.",
                "Automatisierte Wetterkompensation reduzierte den Brennstoffverbrauch um 30%.",
                "Fähigkeit zum unbemannten Betrieb senkte die Arbeitskosten erheblich.",
                "Reduzierung des Kohlebedarfs verbesserte die lokale Luftqualität."
            ]
        }
    },
    // 8. Vietnam (New)
    {
        id: "vietnam-thermal-oil-textile",
        title: {
            en: "Thermal Oil Heater for Textile Manufacturing",
            zh: "纺织制造用导热油炉",
            ru: "Термомасляный нагреватель для текстильного производства",
            es: "Calentador de aceite térmico para fabricación textil",
            fr: "Réchauffeur d'huile thermique pour la fabrication textile",
            ar: "سخان زيت حراري لتصنيع المنسوجات",
            de: "Thermoölheizung für die Textilherstellung"
        },
        location: "Ho Chi Minh City, Vietnam",
        countryCode: "vn",
        industry: "textile",
        productCategory: "oil",
        productModel: "YYQW-3500Y-Q",
        capacity: "3500 KW",
        installDate: "2024-09",
        images: ["/images/projects/project_vietnam.png"],
        description: {
            en: "High-precision thermal oil heater system installed in a major textile plant, providing stable high-temperature heat for setting and dyeing.",
            zh: "安装在大型纺织厂的高精度导热油炉系统，为定型和染色提供稳定的高温热源。",
            ru: "Высокоточная система термомасляного нагрева, установленная на крупном текстильном заводе.",
            es: "Sistema de calentador de aceite térmico de alta precisión instalado en una importante planta textil.",
            fr: "Système de chauffage à huile thermique de haute précision installé dans une grande usine textile.",
            ar: "تم تركيب نظام سخان زيت حراري عالي الدقة في مصنع نسيج كبير.",
            de: "Hochpräzises Thermoölheizsystem, das in einer großen Textilfabrik installiert wurde und stabile Hochtemperaturwärme zum Fixieren und Färben liefert."
        },
        clientBackground: {
            en: "A large-scale textile manufacturing plant in Ho Chi Minh City, producing denim and synthetic fabrics. The factory operates 24/7 and requires precise high-temperature heat for stenter frames and dyeing machines.",
            zh: "位于胡志明市的一家大型纺织制造厂，生产牛仔布和合成纤维面料。该工厂24/7全天候运行，需要用于定型机和染色机的高温热源。",
            ru: "Крупный завод по производству текстиля в Хошимине. Фабрика работает 24/7 и требует точного высокотемпературного нагрева.",
            es: "Una planta de fabricación textil a gran escala en la ciudad de Ho Chi Minh. La fábrica opera 24/7.",
            fr: "Une grande usine de fabrication textile à Ho Chi Minh-Ville. L'usine fonctionne 24h/24 et 7j/7.",
            ar: "مصنع كبير لتصنيع المنسوجات في مدينة هوشي منه. المصنع يعمل 24/7.",
            de: "Eine große Textilfabrik in Ho-Chi-Minh-Stadt. Die Fabrik arbeitet rund um die Uhr."
        },
        projectChallenge: {
            en: "The local government enforced a ban on coal-fired boilers in industrial zones to combat pollution. The client had to urgently replace their old coal boiler with a clean energy solution without disrupting production schedules. They also needed higher temperature precision to improve fabric quality.",
            zh: "当地政府为了治理污染，禁止在工业区使用燃煤锅炉。客户必须紧急用清洁能源解决方案更换旧的燃煤锅炉，且不能中断生产计划。他们还需要更高的温度精度以提高面料质量。",
            ru: "Местное правительство ввело запрет на угольные котлы. Клиенту пришлось срочно заменить старый угольный котел.",
            es: "El gobierno local impuso la prohibición de las calderas de carbón. El cliente tuvo que reemplazar urgentemente su antigua caldera de carbón.",
            fr: "Le gouvernement local a interdit les chaudières au charbon. Le client a dû remplacer d'urgence son ancienne chaudière au charbon.",
            ar: "فرضت الحكومة المحلية حظراً على الغلايات التي تعمل بالفحم. كان على العميل استبدال غلاية الفحم القديمة بشكل عاجل.",
            de: "Die lokale Regierung verhängte ein Verbot von Kohlekesseln. Der Kunde musste dringend seinen alten Kohlekessel ersetzen."
        },
        projectSolution: {
            en: "Yudong supplied a 3500KW (3.5MW) YYQW Gas-fired Thermal Oil Heater delivered as a skid-mounted package for rapid installation. Ideally suited for the <10 day shutdown window. The system delivers thermal oil at 260°C with ±1°C precision using a PID controller, ensuring uniform heat distribution across the stenter machines.",
            zh: "豫东提供了一台3500KW（3.5MW）YYQW燃气导热油炉，采用撬装交付以实现快速安装，非常适合<10天的停机窗口。该系统利用PID控制器提供260°C、精度±1°C的导热油，确保定型机热量分布均匀。",
            ru: "Yudong поставила газовый термомасляный нагреватель YYQW мощностью 3500 кВт (3,5 МВт). Поставляется в виде блочного пакета.",
            es: "Yudong suministró un calentador de aceite térmico a gas YYQW de 3500KW (3.5MW). Entregado como un paquete montado sobre patines.",
            fr: "Yudong a fourni un réchauffeur d'huile thermique au gaz YYQW de 3500KW (3,5 MW). Livré sous forme de paquet monté sur châssis.",
            ar: "زودت Yudong سخان زيت حراري يعمل بالغاز 3500 كيلو واط (3.5 ميجاوات) YYQW. يتم تسليمها كحزمة مثبتة على الانزلاق.",
            de: "Yudong lieferte eine 3500KW (3,5MW) YYQW gasbefeuerte Thermoölheizung. Lieferung als auf Kufen montiertes Paket."
        },
        projectResults: {
            en: [
                "Skid-mounted design allowed installation and commissioning in just 7 days, minimizing production downtime.",
                "Eliminated black smoke emissions, complying fully with Vietnam's environmental regulations.",
                "Precise temperature control reduced fabric shade variation reject rate by 90%.",
                "Thermal efficiency of 95% reduced energy costs despite the switch from cheap coal to gas."
            ],
            zh: [
                "撬装设计使得安装和调试仅需7天，最大限度减少了生产停机时间。",
                "消除了黑烟排放，完全符合越南的环保法规。",
                "精确的温度控制将面料色差废品率降低了90%。",
                "尽管从廉价煤炭转换为天然气，95%的热效率仍降低了能源成本。"
            ],
            ru: [
                "Конструкция на салазках позволила выполнить установку всего за 7 дней.",
                "Устранены выбросы черного дыма.",
                "Точный контроль температуры снизил уровень брака по оттенку ткани на 90%.",
                "Тепловой КПД 95% снизил затраты на энергию."
            ],
            es: [
                "El diseño montado sobre patines permitió la instalación en solo 7 días.",
                "Se eliminaron las emisiones de humo negro.",
                "El control preciso de la temperatura redujo la tasa de rechazo.",
                "La eficiencia térmica del 95% redujo los costos de energía."
            ],
            fr: [
                "La conception montée sur châssis a permis l'installation en seulement 7 jours.",
                "Élimination des émissions de fumée noire.",
                "Le contrôle précis de la température a réduit le taux de rejet.",
                "L'efficacité thermique de 95% a réduit les coûts énergétiques."
            ],
            ar: [
                "سمح التصميم المثبت على الانزلاق بالتركيب في 7 أيام فقط.",
                "القضاء على انبعاثات الدخان الأسود.",
                "قلل التحكم الدقيق في درجة الحرارة من معدل رفض تباين ظل القماش بنسبة 90٪.",
                "كفاءة حرارية بنسبة 95٪ تقلل من تكاليف الطاقة."
            ],
            de: [
                "Das auf Kufen montierte Design ermöglichte die Installation in nur 7 Tagen.",
                "Beseitigung von schwarzem Rauch.",
                "Präzise Temperaturregelung reduzierte die Ausschussrate.",
                "Thermischer Wirkungsgrad von 95% senkte die Energiekosten."
            ]
        }
    },
    // 9. Nigeria (New)
    {
        id: "nigeria-biomass-food",
        title: {
            en: "15 Ton Biomass Boiler for Food Indstury",
            zh: "15吨生物质锅炉用于食品行业",
            ru: "15-тонный котел на биомассе для пищевой промышленности",
            es: "Caldera de biomasa de 15 toneladas para la industria alimentaria",
            fr: "Chaudière à biomasse de 15 tonnes pour l'industrie alimentaire",
            ar: "غلاية كتلة حيوية 15 طن لصناعة الأغذية",
            de: "15-Tonnen-Biomassekessel für die Lebensmittelindustrie"
        },
        location: "Lagos, Nigeria",
        countryCode: "ng",
        industry: "food",
        productCategory: "biomass",
        productModel: "SZL15-1.25-M",
        capacity: "15 t/h",
        installDate: "2023-12",
        images: ["/images/projects/project_nigeria.png"],
        description: {
            en: "Sustainable steam generation using locally sourced wood chips and agricultural waste, reducing fuel costs by 40%.",
            zh: "利用当地采购的木屑和农业废弃物进行可持续蒸汽生产，将燃料成本降低40%。",
            ru: "Устойчивое производство пара с использованием местной щепы и сельскохозяйственных отходов.",
            es: "Generación de vapor sostenible utilizando astillas de madera y residuos agrícolas de origen local.",
            fr: "Production de vapeur durable utilisant des copeaux de bois locaux et des déchets agricoles.",
            ar: "توليد بخار مستدام باستخدام رقائق الخشب والنفايات الزراعية من مصادر محلية.",
            de: "Nachhaltige Dampferzeugung unter Verwendung von lokal beschafften Hackschnitzeln und landwirtschaftlichen Abfällen, wodurch die Brennstoffkosten um 40 % gesenkt werden."
        },
        clientBackground: {
            en: "A food processing facility in Lagos, Nigeria, producing instant noodles and beverages. The factory faces issues with unreliable grid electricity and expensive, fluctuating diesel prices, heavily impacting their operational costs.",
            zh: "尼日利亚拉各斯的一家食品加工厂，生产方便面和饮料。该工厂面临电网电力不可靠和柴油价格昂贵且波动大的问题，严重影响了其运营成本。",
            ru: "Завод по переработке пищевых продуктов в Лагосе, Нигерия. Фабрика сталкивается с проблемами ненадежной электросети.",
            es: "Una instalación de procesamiento de alimentos en Lagos, Nigeria. La fábrica se enfrenta a problemas con la red eléctrica poco fiable.",
            fr: "Une installation de transformation alimentaire à Lagos, au Nigeria. L'usine est confrontée à des problèmes d'électricité de réseau peu fiable.",
            ar: "منشأة لتجهيز الأغذية في لاغوس ، نيجيريا. يواجه المصنع مشاكل مع شبكة الكهرباء غير الموثوقة.",
            de: "Eine Lebensmittelverarbeitungsanlage in Lagos, Nigeria. Die Fabrik hat Probleme mit unzuverlässigem Netzstrom."
        },
        projectChallenge: {
            en: "The reliance on diesel generators and diesel-fired boilers was unsustainable due to soaring fuel prices. However, the region typically lacks a natural gas pipeline network. The client needed a fuel-flexible solution that could utilize locally available and cheap solid fuels without frequent breakdowns.",
            zh: "由于燃料价格飙升，依赖柴油发电机和燃柴锅炉是不可持续的。然而，该地区通常缺乏天然气管道网络。客户需要一种燃料灵活的解决方案，能够利用当地可获得且廉价的固体燃料，且不会频繁发生故障。",
            ru: "Зависимость от дизельных генераторов и дизельных котлов была неустойчивой. Клиенту требовалось гибкое топливное решение.",
            es: "La dependencia de los generadores diésel y las calderas de gasóleo era insostenible. El cliente necesitaba una solución flexible en cuanto al combustible.",
            fr: "La dépendance aux générateurs diesel et aux chaudières au diesel était insoutenable. Le client avait besoin d'une solution flexible en matière de combustible.",
            ar: "كان الاعتماد على مولدات الديزل والغلايات التي تعمل بالديزل غير مستدام. يحتاج العميل إلى حل مرن للوقود.",
            de: "Die Abhängigkeit von Dieselgeneratoren und ölbefeuerten Kesseln war unhaltbar. Der Kunde benötigte eine brennstoffflexible Lösung."
        },
        projectSolution: {
            en: "Yudong proposed a 15-ton SZL Biomass Steam Boiler capable of burning wood chips, palm kernel shells, and briquettes. The boiler features a large furnace arch designed for biomass combustion and a heavy-duty chain grate to handle varying fuel sizes. We also included a rigorous water treatment plant to handle the local hard water supply.",
            zh: "豫东提议了一台15吨SZL生物质蒸汽锅炉，能够燃烧木片、棕榈仁壳和型煤。该锅炉具有专为生物质燃烧设计的大炉拱和用于处理不同燃料尺寸的重型链条炉排。我们还包括了一个严格的水处理厂来处理当地的硬水供应。",
            ru: "Yudong предложила 15-тонный паровой котел на биомассе SZL. Котел имеет большую арку печи.",
            es: "Yudong propuso una caldera de vapor de biomasa SZL de 15 toneladas. La caldera cuenta con un gran arco de horno.",
            fr: "Yudong a proposé une chaudière à vapeur à biomasse SZL de 15 tonnes. La chaudière dispose d'une grande voûte de foyer.",
            ar: "اقترحت Yudong غلاية بخار الكتلة الحيوية SZL سعة 15 طنًا. تتميز الغلاية بقوس فرن كبير.",
            de: "Yudong schlug einen 15-Tonnen-SZL-Biomasse-Dampfkessel vor. Der Kessel verfügt über einen großen Ofenbogen."
        },
        projectResults: {
            en: [
                "Reduced monthly fuel expenditure by 70% by switching from diesel to locally sourced biomass.",
                "Achieved independence from unstable fossil fuel markets, ensuring predictable operational costs.",
                "Robust grate design handled various biomass types without jamming or slagging issues.",
                "Steam pressure remains stable at 10 bar, supporting consistent noodle steaming quality."
            ],
            zh: [
                "通过从柴油转换为当地采购的生物质，每月燃料支出减少了70%。",
                "实现了对不稳定化石燃料市场的独立，确保了可预测的运营成本。",
                "坚固的炉排设计处理了各种生物质类型，没有卡住或结渣问题。",
                "由于燃料节省，蒸汽压力保持在10 bar稳定，支持一致的面条蒸制质量。"
            ],
            ru: [
                "Снижение ежемесячных расходов на топливо на 70%.",
                "Достигнута независимость от нестабильных рынков ископаемого топлива.",
                "Прочная конструкция решетки справлялась с различными типами биомассы.",
                "Давление пара остается стабильным на уровне 10 бар."
            ],
            es: [
                "Reducción del gasto mensual de combustible en un 70%.",
                "Se logró la independencia de los mercados inestables de combustibles fósiles.",
                "El diseño robusto de la rejilla manejó varios tipos de biomasa.",
                "La presión de vapor se mantiene estable en 10 bar."
            ],
            fr: [
                "Réduction des dépenses mensuelles de carburant de 70%.",
                "Indépendance vis-à-vis des marchés instables des combustibles fossiles atteinte.",
                "La conception robuste de la grille a permis de traiter différents types de biomasse.",
                "La pression de la vapeur reste stable à 10 bars."
            ],
            ar: [
                "خفّض الإنفاق الشهري على الوقود بنسبة 70٪.",
                "تحقيق الاستقلال عن أسواق الوقود الأحفوري غير المستقرة.",
                "تعامل تصميم الشبكة القوي مع أنواع مختلفة من الكتلة الحيوية.",
                "يظل ضغط البخار مستقرًا عند 10 بار."
            ],
            de: [
                "Reduzierung der monatlichen Brennstoffausgaben um 70%.",
                "Unabhängigkeit von instabilen Märkten für fossile Brennstoffe erreicht.",
                "Robustes Rostdesign bewältigte verschiedene Biomassearten.",
                "Der Dampfdruck bleibt stabil bei 10 bar."
            ]
        }
    },
    // 10. Philippines (New)
    {
        id: "philippines-coal-paper",
        title: {
            en: "20 Ton Hybrid Boiler for Paper Mill",
            zh: "20吨混合燃料锅炉用于造纸厂",
            ru: "20-тонный гибридный котел для бумажной фабрики",
            es: "Caldera híbrida de 20 toneladas para fábrica de papel",
            fr: "Chaudière hybride de 20 tonnes pour papeterie",
            ar: "غلاية هجينة 20 طن لمصنع ورق",
            de: "20 Tonnen Hybridkessel für Papierfabrik"
        },
        location: "Manila, Philippines",
        countryCode: "ph",
        industry: "paper",
        productCategory: "coal",
        productModel: "DZL20-1.25-AII",
        capacity: "20 t/h",
        installDate: "2024-04",
        images: ["/images/projects/project_philippines.png"],
        description: {
            en: "Versatile boiler capable of burning both coal and biomass, ensuring continuous operation and fuel flexibility for the mill.",
            zh: "多功能锅炉，可燃烧煤和生物质，确保工厂的连续运行和燃料使用的灵活性。",
            ru: "Универсальный котел, способный сжигать как уголь, так и биомассу.",
            es: "Caldera versátil capaz de quemar tanto carbón como biomasa.",
            fr: "Chaudière polyvalente capable de brûler à la fois du charbon et de la biomasse.",
            ar: "غلاية متعددة الاستخدامات قادرة على حرق كل من الفحم والكتلة الحيوية.",
            de: "Vielseitiger Kessel, der sowohl Kohle als auch Biomasse verbrennen kann und so einen kontinuierlichen Betrieb und Brennstoffflexibilität für das Werk gewährleistet."
        },
        clientBackground: {
            en: "A paper mill located south of Manila, Philippines, producing kraft paper and corrugated medium. Energy costs constitute a major portion of their operating expenses, and they faced supply chain interruptions with imported coal.",
            zh: "位于菲律宾马尼拉南部的一家造纸厂，生产牛皮纸和瓦楞纸。能源成本占其运营费用的很大一部分，且面临进口煤炭供应链中断的问题。",
            ru: "Бумажная фабрика, расположенная к югу от Манилы, Филиппины. Энергетические затраты составляют значительную часть расходов.",
            es: "Una fábrica de papel ubicada al sur de Manila, Filipinas. Los costos de energía constituyen una gran parte de sus gastos operativos.",
            fr: "Une papeterie située au sud de Manille, aux Philippines. Les coûts énergétiques constituent une part importante de leurs dépenses d'exploitation.",
            ar: "مصنع ورق يقع جنوب مانيلا ، الفلبين. تشكل تكاليف الطاقة جزءًا كبيرًا من نفقات التشغيل.",
            de: "Eine Papierfabrik südlich von Manila, Philippinen. Energiekosten machen einen großen Teil ihrer Betriebskosten aus."
        },
        projectChallenge: {
            en: "The plant required a continuous, high-volume steam supply for their drying cylinders. Relying solely on coal left them vulnerable to price spikes. They wanted a system that could burn widely available and cheaper local biomass (coconut shells, wood waste) when coal prices were high, without sacrificing steam output.",
            zh: "该工厂需要为其烘缸提供连续、大流量的蒸汽供应。仅依赖煤炭使其容易受到价格飙升的影响。他们希望有一个系统，当煤价高企时，可以燃烧广泛可用且更便宜的当地生物质（椰子壳、木材废料），同时不牺牲蒸汽产量。",
            ru: "Заводу требовалось непрерывное снабжение паром большого объема. Полагаясь исключительно на уголь, они были уязвимы.",
            es: "La planta requería un suministro continuo de vapor de alto volumen. Depender únicamente del carbón los hacía vulnerables.",
            fr: "L'usine avait besoin d'un approvisionnement continu en vapeur à grand volume. Le fait de ne compter que sur le charbon les rendait vulnérables.",
            ar: "تطلب المصنع إمدادًا مستمرًا وبخارًا كبير الحجم. الاعتماد فقط على الفحم جعلهم عرضة لارتفاع الأسعار.",
            de: "Die Anlage benötigte eine kontinuierliche, großvolumige Dampfversorgung. Sich nur auf Kohle zu verlassen, machte sie anfällig."
        },
        projectSolution: {
            en: "We installed a 20-ton DZL series Hybrid Chain Grate Boiler. This custom-engineered unit features a modified air distribution system and grate bar spacing to efficiently burn both coal and various biomass fuels. The large furnace volume ensures complete combustion of high-volatile biomass.",
            zh: "我们安装了一台20吨DZL系列混合链条炉排锅炉。该定制装置具有改进的空气分配系统和炉排条间距，可有效燃烧煤炭和各种生物质燃料。大炉膛容积确保高挥发分生物质的完全燃烧。",
            ru: "Мы установили 20-тонный гибридный котел с цепной решеткой серии DZL. Этот агрегат имеет измененную систему распределения воздуха.",
            es: "Instalamos una caldera de parrilla de cadena híbrida de la serie DZL de 20 toneladas. Esta unidad cuenta con un sistema de distribución de aire modificado.",
            fr: "Nous avons installé une chaudière à grille à chaîne hybride de la série DZL de 20 tonnes. Cette unité dispose d'un système de distribution d'air modifié.",
            ar: "قمنا بتقيب غلاية سلسلة هجينة سلسلة DZL سعة 20 طنًا. تتميز هذه الوحدة بنظام توزيع هواء معدل.",
            de: "Wir installierten einen 20-Tonnen-Hybrid-Kettenrostkessel der DZL-Serie. Diese Einheit verfügt über ein modifiziertes Luftverteilungssystem."
        },
        projectResults: {
            en: [
                "Achieved fuel flexibility, reducing annual fuel costs by 25% by utilizing cheaper biomass during coal price hikes.",
                "Maintained 100% steam output (20t/h) regardless of the fuel mix used.",
                "Reduced sulfur emissions by blending low-sulfur biomass with coal.",
                "Ensured 24/7 continuous operation with a robust, heavy-duty grate system."
            ],
            zh: [
                "实现了燃料灵活性，通过在煤价上涨期间利用更便宜的生物质，使年度燃料成本降低了25%。",
                "无论使用何种燃料混合，都能保持100%的蒸汽产量（20t/h）。",
                "通过将低硫生物质与煤混合，减少了硫排放。",
                "利用坚固、重型的炉排系统确保24/7连续运行。"
            ],
            ru: [
                "Достигнута топливная гибкость, годовые затраты на топливо снижены на 25%.",
                "Поддерживается 100% выход пара (20 т/ч) независимо от топливной смеси.",
                "Снижение выбросов серы за счет смешивания биомассы с углем.",
                "Обеспечена непрерывная работа 24/7."
            ],
            es: [
                "Se logró flexibilidad de combustible, reduciendo los costos anuales en un 25%.",
                "Se mantuvo una producción de vapor del 100% (20t/h).",
                "Se redujeron las emisiones de azufre mezclando biomasa con carbón.",
                "Se garantizó una operación continua 24/7."
            ],
            fr: [
                "Flexibilité du carburant atteinte, réduisant les coûts annuels de 25%.",
                "Maintien d'une production de vapeur de 100% (20t/h).",
                "Réduction des émissions de soufre en mélangeant de la biomasse avec du charbon.",
                "Opération continue 24/7 assurée."
            ],
            ar: [
                "تحقيق مرونة الوقود ، وخفض تكاليف الوقود السنوية بنسبة 25٪.",
                "الحفاظ على إنتاج البخار بنسبة 100٪ (20 طن / ساعة).",
                "تقليل انبعاثات الكبريت عن طريق مزج الكتلة الحيوية منخفضة الكبريت مع الفحم.",
                "ضمان التشغيل المستمر 24/7."
            ],
            de: [
                "Brennstoffflexibilität erreicht, jährliche Brennstoffkosten um 25% gesenkt.",
                "100% Dampfleistung (20t/h) beibehalten.",
                "Reduzierung der Schwefelemissionen durch Mischen von Biomasse mit Kohle.",
                "24/7 Dauerbetrieb gewährleistet."
            ]
        }
    },
    // 11. Chile (New)
    {
        id: "chile-gas-mining",
        title: {
            en: "4 Ton Gas Boiler for Mining Facility",
            zh: "4吨燃气锅炉用于矿业设施",
            ru: "4-тонный газовый котел для горнодобывающего предприятия",
            es: "Caldera a gas de 4 toneladas para instalaciones mineras",
            fr: "Chaudière à gaz de 4 tonnes pour installation minière",
            ar: "غلاية غاز 4 طن لمنشأة تعدين",
            de: "4 Tonnen Gaskessel für Bergbauanlage"
        },
        location: "Antofagasta, Chile",
        countryCode: "cl",
        industry: "mining",
        productCategory: "gas",
        productModel: "WNS4-1.25-Q",
        capacity: "4 t/h",
        installDate: "2024-05",
        images: ["/images/projects/project_chile.png"],
        description: {
            en: "Compact and efficient steam boiler installed in a remote mining support facility, designed for reliability in harsh desert conditions.",
            zh: "安装在偏远矿业支持设施中的紧凑高效蒸汽锅炉，专为严酷沙漠环境下的可靠性而设计。",
            ru: "Компактный и эффективный паровой котел, установленный на удаленном горнодобывающем объекте.",
            es: "Caldera de vapor compacta y eficiente instalada en una instalación de apoyo minera remota.",
            fr: "Chaudière à vapeur compacte et efficace installée dans une installation de soutien minier isolée.",
            ar: "غلاية بخار مدمجة وفعالة تم تركيبها في منشأة دعم تعدين نائية.",
            de: "Kompakter und effizienter Dampfkessel, der in einer abgelegenen Bergbauunterstützungsanlage installiert wurde und auf Zuverlässigkeit unter rauen Wüstenbedingungen ausgelegt ist."
        },
        clientBackground: {
            en: "A copper mining support facility located in the Atacama Desert, Antofagasta, Chile. The site is remote and operates in an extreme environment with high dust levels and drastic day-night temperature shifts.",
            zh: "位于智利安托法加斯塔阿塔卡马沙漠的铜矿支持设施。该地点偏远，在灰尘含量高和昼夜温差剧烈的极端环境中运行。",
            ru: "Объект поддержки добычи меди, расположенный в пустыне Атакама, Чили.",
            es: "Una instalación de apoyo a la minería de cobre ubicada en el desierto de Atacama, Chile.",
            fr: "Une installation de soutien à l'extraction de cuivre située dans le désert d'Atacama, au Chili.",
            ar: "منشأة لدعم تعدين النحاس تقع في صحراء أتاكاما ، تشيلي.",
            de: "Eine Kupferbergbau-Unterstützungsanlage in der Atacama-Wüste, Chile."
        },
        projectChallenge: {
            en: "Water is extremely scarce and expensive in the desert. The boiler needed to be highly water-efficient. Additionally, the equipment had to withstand sandstorms and operate reliably with minimal maintenance due to the site's inaccessibility.",
            zh: "在沙漠中，水极其稀缺且昂贵。锅炉需要高效节水。此外，由于地点难以到达，设备必须能够承受沙尘暴并以最少的维护可靠运行。",
            ru: "Вода в пустыне крайне дефицитна и дорога. Котел должен был быть очень водосберегающим.",
            es: "El agua es extremadamente escasa y cara en el desierto. La caldera necesitaba ser altamente eficiente en el uso del agua.",
            fr: "L'eau est extrêmement rare et chère dans le désert. La chaudière devait être très économe en eau.",
            ar: "المياه شحيحة للغاية ومكلفة في الصحراء. كانت الغلاية بحاجة إلى أن تكون عالية الكفاءة في استخدام المياه.",
            de: "Wasser ist in der Wüste extrem knapp und teuer. Der Kessel musste sehr wassersparend sein."
        },
        projectSolution: {
            en: "Yudong provided a containerized 4-ton WNS Gas Steam Boiler solution. The container acts as a sealed protective shield against dust. We integrated a RO (Reverse Osmosis) water treatment system and a high-efficiency condensate recovery unit to recycle 90% of the water used.",
            zh: "豫东提供了集装箱式4吨WNS燃气蒸汽锅炉解决方案。集装箱作为密封的保护罩防止灰尘进入。我们集成了RO（反渗透）水处理系统和高效冷凝水回收装置，以回收90%的用水。",
            ru: "Yudong предоставила контейнерное решение для газового парового котла WNS весом 4 тонны. Контейнер действует как герметичный защитный экран.",
            es: "Yudong proporcionó una solución de caldera de vapor a gas WNS de 4 toneladas en contenedores. El contenedor actúa como un escudo protector sellado.",
            fr: "Yudong a fourni une solution de chaudière à vapeur à gaz WNS de 4 tonnes conteneurisée. Le conteneur agit comme un bouclier protecteur scellé.",
            ar: "قدمت Yudong حلاً لغلاية بخار الغاز WNS سعة 4 أطنان في حاويات. تعمل الحاوية كدرع واقي محكم الغلق.",
            de: "Yudong lieferte eine containerisierte 4-Tonnen-WNS-Gasdampfkessellösung. Der Container fungiert als abgedichteter Schutzschild."
        },
        projectResults: {
            en: [
                "Achieved 90% water recycling rate, solving the critical water scarcity issue.",
                "Containerized design prevented dust damage, ensuring 99.9% uptime over the first year.",
                "Plug-and-play installation reduced onsite setup time by 50% in the remote location.",
                "Supplied stable steam for workers' dormitory heating and mineral processing needs."
            ],
            zh: [
                "实现了90%的水回收率，解决了关键的水资源短缺问题。",
                "集装箱设计防止了灰尘损坏，确保了第一年99.9%的运行时间。",
                "即插即用安装将偏远地点的现场设置时间减少了50%。",
                "为工人宿舍供暖和矿物加工需求提供了稳定的蒸汽。"
            ],
            ru: [
                "Достигнут уровень переработки воды 90%, решена проблема дефицита воды.",
                "Контейнерная конструкция предотвратила повреждение пылью.",
                "Установка «подключи и работай» сократила время настройки на 50%.",
                "Обеспечен стабильный пар для отопления общежитий."
            ],
            es: [
                "Se logró una tasa de reciclaje de agua del 90%.",
                "El diseño en contenedores evitó daños por polvo.",
                "La instalación plug-and-play redujo el tiempo de configuración en el sitio en un 50%.",
                "Se suministró vapor estable para la calefacción de los dormitorios de los trabajadores."
            ],
            fr: [
                "Taux de recyclage de l'eau de 90% atteint.",
                "La conception conteneurisée a empêché les dommages causés par la poussière.",
                "L'installation plug-and-play a réduit le temps de configuration sur site de 50%.",
                "Fourniture de vapeur stable pour le chauffage des dortoirs des travailleurs."
            ],
            ar: [
                "تحقيق معدل إعادة تدوير المياه بنسبة 90٪.",
                "منع التصميم المعبأ في حاويات تلف الغبار.",
                "قلل التثبيت بنظام التوصيل التشغيل وقت الإعداد في الموقع بنسبة 50٪.",
                "توفير بخار مستقر لتدفئة مساكن العمال."
            ],
            de: [
                "90% Wasserrecyclingrate erreicht.",
                "Containerdesign verhinderte Staubschäden.",
                "Plug-and-Play-Installation reduzierte die Einrichtungszeit vor Ort um 50%.",
                "Lieferung von stabilem Dampf für die Heizung der Arbeiterunterkünfte."
            ]
        }
    },
    // 12. Pakistan (New - Reusing Image due to Quota)
    {
        id: "pakistan-gas-textile",
        title: {
            en: "35 Ton Gas Boiler for Textile Mill",
            zh: "35吨燃气锅炉用于纺织厂",
            ru: "35-тонный газовый котел для текстильной фабрики",
            es: "Caldera a gas de 35 toneladas para fábrica textil",
            fr: "Chaudière à gaz de 35 tonnes pour usine textile",
            ar: "غلاية غاز 35 طن لمصنع نسيج",
            de: "35 Tonnen Gaskessel für Textilfabrik"
        },
        location: "Lahore, Pakistan",
        countryCode: "pk",
        industry: "textile",
        productCategory: "gas",
        productModel: "SZS35-1.6-Q",
        capacity: "35 t/h",
        installDate: "2023-10",
        images: ["/images/products/szs-water-tube-boiler-premium.jpg"],
        description: {
            en: "Large capacity water tube boiler delivering high-quality steam for fabric processing and power generation cogeneration.",
            zh: "大容量水管锅炉，为织物加工和热电联产提供高质量蒸汽。",
            ru: "Водотрубный котел большой мощности, подающий высококачественный пар.",
            es: "Caldera acuotubular de gran capacidad que suministra vapor de alta calidad.",
            fr: "Chaudière à tubes d'eau de grande capacité fournissant de la vapeur de haute qualité.",
            ar: "غلاية أنابيب مياه كبيرة السعة توفر بخارًا عالي الجودة.",
            de: "Großraum-Wasserrohrkessel, der hochwertigen Dampf für die Gewebeverarbeitung und die Kraft-Wärme-Kopplung liefert."
        },
        clientBackground: {
            en: "One of the largest textile exporters in Lahore, Pakistan, specializing in home textiles like bed sheets and towels. The facility operates massive bleaching and dyeing lines that require constant, high-pressure steam.",
            zh: "巴基斯坦拉合尔最大的纺织品出口商之一，专营床单和毛巾等家用纺织品。该设施运行着巨大的漂白和染色生产线，需要恒定、高压的蒸汽。",
            ru: "Один из крупнейших экспортеров текстиля в Лахоре, Пакистан.",
            es: "Uno de los mayores exportadores de textiles en Lahore, Pakistán.",
            fr: "L'un des plus grands exportateurs de textiles à Lahore, au Pakistan.",
            ar: "أحد أكبر مصدري المنسوجات في لاهور ، باكستان.",
            de: "Einer der größten Textilexporteure in Lahore, Pakistan."
        },
        projectChallenge: {
            en: "The local gas supply in Lahore suffers from frequent pressure fluctuations and unplanned outages. The previous lightweight boiler couldn't maintain steam pressure drops during supply dips, leading to uneven dyeing and high fabric rejection rates.",
            zh: "拉合尔当地的天然气供应经常出现压力波动和意外中断。之前的轻型锅炉无法在供应下降期间维持蒸汽压力，导致染色不均匀和面料废品率高。",
            ru: "Местное газоснабжение в Лахоре страдает от частых колебаний давления.",
            es: "El suministro local de gas en Lahore sufre frecuentes fluctuaciones de presión.",
            fr: "L'approvisionnement local en gaz à Lahore souffre de fréquentes fluctuations de pression.",
            ar: "يعاني إمداد الغاز المحلي في لاهور من تقلبات متكررة في الضغط.",
            de: "Die lokale Gasversorgung in Lahore leidet unter häufigen Druckschwankungen."
        },
        projectSolution: {
            en: "We configured a custom SZS35-1.6-Q Water Tube Gas Boiler. The 'D' type layout with a large steam drum provides a significant steam buffer to handle load swings. We installed a specialized dual-fuel burner (Gas/Oil) with a pressure booster to ensure uninterrupted operation even during low gas pressure events.",
            zh: "我们配置了一台定制的SZS35-1.6-Q水管燃气锅炉。“D”型布局和大汽包提供了巨大的蒸汽缓冲以应对负荷波动。我们安装了带有增压器的专用双燃料燃烧器（气/油），以确保即使在低气压事件期间也能不间断运行。",
            ru: "Мы настроили нестандартный водотрубный газовый котел SZS35-1.6-Q.",
            es: "Configuramos una caldera de gas de tubo de agua personalizada SZS35-1.6-Q.",
            fr: "Nous avons configuré une chaudière à gaz à tubes d'eau personnalisée SZS35-1.6-Q.",
            ar: "قمنا بتهيئة غلاية غاز أنبوب الماء مخصصة SZS35-1.6-Q.",
            de: "Wir haben einen kundenspezifischen SZS35-1.6-Q Wasserrohr-Gaskessel konfiguriert."
        },
        projectResults: {
            en: [
                "Eliminated production stoppages due to gas pressure fluctuations.",
                "Steam quality improved (dryness >99%), resulting in brighter and more uniform fabric colors.",
                "Thermal efficiency increased to 98% with the added finned-tube economizer.",
                "Dual-fuel capability saved the client $200k in potential lost production during winter gas shedding."
            ],
            zh: [
                "消除了因气压波动导致的生产停滞。",
                "蒸汽质量提高（干燥度>99%），使面料颜色更鲜艳、更均匀。",
                "增加翅片管节能器后，热效率提高到98%。",
                "双燃料能力为客户在冬季天然气限供期间节省了20万美元的潜在生产损失。"
            ],
            ru: [
                "Устранены остановки производства из-за колебаний давления газа.",
                "Качество пара улучшилось (сухость >99%).",
                "Тепловой КПД увеличен до 98%.",
                "Возможность работы на двух видах топлива сэкономила клиенту 200 тысяч долларов."
            ],
            es: [
                "Se eliminaron las paradas de producción debido a las fluctuaciones de la presión del gas.",
                "La calidad del vapor mejoró por encima del 99%.",
                "La eficiencia térmica aumentó al 98%.",
                "La capacidad de combustible dual ahorró al cliente $200k."
            ],
            fr: [
                "Élimination des arrêts de production dus aux fluctuations de pression de gaz.",
                "La qualité de la vapeur s'est améliorée (>99% de siccité).",
                "L'efficacité thermique a augmenté à 98%.",
                "La capacité bi-combustible a permis au client d'économiser 200 000 $."
            ],
            ar: [
                "القضاء على توقف الإنتاج بسبب تقلبات ضغط الغاز.",
                "تحسن جودة البخار (جفاف> 99 ٪).",
                "زيادة الكفاءة الحرارية إلى 98٪.",
                "وفرت قدرة الوقود المزدوج للعميل 200 ألف دولار."
            ],
            de: [
                "Produktionsstopps aufgrund von Gasdruckschwankungen beseitigt.",
                "Dampfqualität verbessert (Trockenheit >99%).",
                "Thermischer Wirkungsgrad auf 98% gesteigert.",
                "Dual-Fuel-Fähigkeit sparte dem Kunden 200.000 $."
            ]
        }
    },
    // 13. UAE (New - Reusing Image)
    {
        id: "uae-thermal-oil-chemical",
        title: {
            en: "Thermal Oil Heater for Chemical Processing",
            zh: "化工加工用导热油炉",
            ru: "Термомасляный нагреватель для химической обработки",
            es: "Calentador de aceite térmico para procesamiento químico",
            fr: "Réchauffeur d'huile thermique pour traitement chimique",
            ar: "سخان زيت حراري للمعالجة الكيميائية",
            de: "Thermoölheizung für chemische Verarbeitung"
        },
        location: "Dubai, UAE",
        countryCode: "ae",
        industry: "chemical",
        productCategory: "oil",
        productModel: "YYQW-5000Y-Q",
        capacity: "5000 KW",
        installDate: "2023-11",
        images: ["/images/products/gas-thermal-oil-heater.jpg"],
        description: {
            en: "Integrated thermal fluid heating system for a petrochemical facility, operating at 280°C with precise redundancy controls.",
            zh: "用于石化设施的集成导热油加热系统，在280°C下运行，具有精确的冗余控制。",
            ru: "Интегрированная система нагрева термальной жидкости для нефтехимического предприятия.",
            es: "Sistema integrado de calentamiento de fluido térmico para una instalación petroquímica.",
            fr: "Système de chauffage à fluide thermique intégré pour une installation pétrochimique.",
            ar: "نظام تدفئة بالسوائل الحرارية متكامل لمنشأة بتروكيماوية.",
            de: "Integriertes Thermoölheizsystem für eine petrochemische Anlage, das bei 280°C mit präzisen Redundanzsteuerungen arbeitet."
        },
        clientBackground: {
            en: "A specialized chemical plant in the Jebel Ali Free Zone, Dubai, UAE, manufacturing synthetic resins and adhesives. The production process involves exothermic reactions that require precise heating and cooling cycles.",
            zh: "位于阿联酋迪拜杰贝阿里自由区的一家特种化工厂，制造合成树脂和粘合剂。其生产过程涉及需要精确加热和冷却循环的放热反应。",
            ru: "Специализированный химический завод в свободной зоне Джебель-Али, Дубай.",
            es: "Una planta química especializada en la Zona Franca de Jebel Ali, Dubai.",
            fr: "Une usine chimique spécialisée dans la zone franche de Jebel Ali, Dubaï.",
            ar: "مصنع كيميائي متخصص في المنطقة الحرة لجبل علي ، دبي ، الإمارات العربية المتحدة.",
            de: "Eine spezialisierte Chemiefabrik in der Jebel Ali Free Zone, Dubai."
        },
        projectChallenge: {
            en: "Safety standards in the Free Zone are among the highest in the world. The client needed a system that could operate at high temperatures (280°C) without high pressure (to minimize explosion risk). They also required N+1 redundancy for all critical pumps to preventing fluid stagnation and overheating.",
            zh: "自由区的安全标准居世界前列。客户需要一个能够在高温（280°C）下运行但无需高压（以最大限度降低爆炸风险）的系统。他们还要求对所有关键泵进行N+1冗余，以防止流体停滞和过热。",
            ru: "Стандарты безопасности в свободной зоне являются одними из самых высоких в мире.",
            es: "Los estándares de seguridad en la Zona Franca se encuentran entre los más altos del mundo.",
            fr: "Les normes de sécurité dans la zone franche sont parmi les plus élevées au monde.",
            ar: "معايير السلامة في المنطقة الحرة هي من بين أعلى المعايير في العالم.",
            de: "Die Sicherheitsstandards in der Freihandelszone gehören zu den höchsten der Welt."
        },
        projectSolution: {
            en: "We supplied a 5000KW YYQW Gas Thermal Oil Heater. The system uses a specialized synthetic heat transfer fluid. It features a triple-safety interlock system (flow, temperature, pressure) and 100% redundant circulation pumps. The burner is rated for Zone 2 hazardous area operation.",
            zh: "我们提供了一台5000KW YYQW燃气导热油炉。该系统使用专用的合成导热油。它具有三重安全联锁系统（流量、温度、压力）和100%冗余循环泵。燃烧器额定用于2区危险区域运行。",
            ru: "Мы поставили газовый масляный нагреватель YYQW мощностью 5000 кВт.",
            es: "Suministramos un calentador de aceite térmico a gas YYQW de 5000KW.",
            fr: "Nous avons fourni un réchauffeur d'huile thermique à gaz YYQW de 5000KW.",
            ar: "قمنا بتوريد سخان زيت حراري غاز YYQW 5000KW.",
            de: "Wir lieferten einen 5000KW YYQW Gas-Thermoölheizung."
        },
        projectResults: {
            en: [
                "Achieved precise temperature control of ±1°C, critical for product viscosity quality.",
                "Passed strict third-party safety audits by Dubai authorities on the first inspection.",
                "Low-pressure operation significantly reduced insurance premiums for the facility.",
                "Thermal oil efficiency maintained at 95% over 18 months of continuous operation."
            ],
            zh: [
                "实现了±1°C的精确温度控制，这对产品粘度质量至关重要。",
                "在第一次检查中通过了迪拜当局严格的第三方安全审计。",
                "低压运行显著降低了设施的保险费。",
                "在连续运行的18个月中，导热油效率保持在95%。"
            ],
            ru: [
                "Достигнут точный контроль температуры ±1°C.",
                "Прошел строгий аудит безопасности третьей стороной.",
                "Работа при низком давлении значительно снизила страховые взносы.",
                "Эффективность термомасла поддерживается на уровне 95%."
            ],
            es: [
                "Se logró un control preciso de la temperatura de ±1°C.",
                "Pasó estrictas auditorías de seguridad de terceros.",
                "La operación a baja presión redujo las primas de seguro.",
                "La eficiencia del aceite térmico se mantuvo en un 95%."
            ],
            fr: [
                "Contrôle précis de la température de ±1°C atteint.",
                "A passé avec succès des audits de sécurité tiers stricts.",
                "Le fonctionnement à basse pression a considérablement réduit les primes d'assurance.",
                "L'efficacité de l'huile thermique maintenue à 95%."
            ],
            ar: [
                "تحقيق تحكم دقيق في درجة الحرارة ± 1 درجة مئوية.",
                "اجتاز تدقيقات السلامة الصارمة من قبل طرف ثالث.",
                "أدى التشغيل بضغط منخفض إلى خفض أقساط التأمين بشكل كبير.",
                "الحفاظ على كفاءة الزيت الحراري عند 95٪."
            ],
            de: [
                "Präzise Temperaturregelung von ±1°C erreicht.",
                "Bestand strenge Sicherheitsaudits durch Dritte.",
                "Niederdruckbetrieb senkte die Versicherungsprämien erheblich.",
                "Thermoöleffizienz bei 95% gehalten."
            ]
        }
    },
    // 14. Thailand (New - Reusing Image)
    {
        id: "thailand-biomass-rubber",
        title: {
            en: "20 Ton Biomass Boiler for Rubber Factory",
            zh: "20吨生物质锅炉用于橡胶厂",
            ru: "20-тонный котел на биомассе для резинового завода",
            es: "Caldera de biomasa de 20 toneladas para fábrica de caucho",
            fr: "Chaudière à biomasse de 20 tonnes pour usine de caoutchouc",
            ar: "غلاية كتلة حيوية 20 طن لمصنع مطاط",
            de: "20 Tonnen Biomassekessel für Gummifabrik"
        },
        location: "Rayong, Thailand",
        countryCode: "th",
        industry: "rubber",
        productCategory: "biomass",
        productModel: "SZL20-1.6-T",
        capacity: "20 t/h",
        installDate: "2024-01",
        images: ["/images/products/szl-chain-grate-boiler-premium.jpg"],
        description: {
            en: "Biomass steam boiler utilizing wood pellets and rubber tree waste as fuel, supporting the vulcanization process efficiently.",
            zh: "利用木屑颗粒和橡胶树废料作为燃料的生物质蒸汽锅炉，高效支持硫化工艺。",
            ru: "Паровой котел на биомассе, использующий древесные гранулы и отходы каучукового дерева.",
            es: "Caldera de vapor de biomasa que utiliza pellets de madera y residuos de árboles de caucho.",
            fr: "Chaudière à vapeur à biomasse utilisant des granulés de bois et des déchets d'hévéas.",
            ar: "غلاية بخار تعمل بالكتلة الحيوية تستخدم كريات الخشب ونفايات شجر المطاط.",
            de: "Biomasse-Dampfkessel, der Holzpellets und Kautschukbaumabfälle als Brennstoff nutzt und den Vulkanisierungsprozess effizient unterstützt."
        },
        clientBackground: {
            en: "A leading rubber processing factory in Rayong, Thailand, supplying raw materials to global tire manufacturers. The site generates tons of rubber tree waste and wood chips daily.",
            zh: "位于泰国罗勇的一家领先橡胶加工厂，向全球轮胎制造商供应原材料。该工厂每天产生数吨橡胶树废料和木屑。",
            ru: "Ведущий завод по переработке каучука в Районге, Таиланд.",
            es: "Una fábrica líder de procesamiento de caucho en Rayong, Tailandia.",
            fr: "Une usine de transformation de caoutchouc de premier plan à Rayong, en Thaïlande.",
            ar: "مصنع رائد لمعالجة المطاط في رايونغ ، تايلاند.",
            de: "Eine führende Kautschukverarbeitungsfabrik in Rayong, Thailand."
        },
        projectChallenge: {
            en: "The factory was spending a fortune on heavy oil for their old boilers while paying to dispose of wood waste. They needed a system that could burn their moist rubber tree waste (high moisture content ~40%) smokelessly to meet strict new environmental regulations.",
            zh: "工厂在旧锅炉的重油上花费巨资，同时还要付费处理木材废料。他们需要一个系统，能够无烟燃烧潮湿的橡胶树废料（含水量高达约40%），以满足严格的新环保法规。",
            ru: "Фабрика тратила целое состояние на мазут для своих старых котлов.",
            es: "La fábrica gastaba una fortuna en petróleo pesado para sus viejas calderas.",
            fr: "L'usine dépensait une fortune en fioul lourd pour ses anciennes chaudières.",
            ar: "كان المصنع ينفق ثروة على الزيت الثقيل لغلاياته القديمة.",
            de: "Die Fabrik gab ein Vermögen für Schweröl für ihre alten Kessel aus."
        },
        projectSolution: {
            en: "We implemented a 20-ton SZL Biomass Chain Grate Boiler with a custom-designed elongated furnace arch to aid the drying and combustion of high-moisture fuel. The emission control system includes a multi-tube dust collector followed by a wet scrubber to ensure exhaust gases are clean and odorless.",
            zh: "我们实施了一台20吨SZL生物质链条炉排锅炉，采用定制设计的加长炉拱，以辅助高水分燃料的干燥和燃烧。排放控制系统包括多管除尘器和随后的湿式洗涤器，以确保废气清洁无味。",
            ru: "Мы внедрили 20-тонный котел с цепной решеткой на биомассе SZL.",
            es: "Implementamos una caldera de parrilla de cadena de biomasa SZL de 20 toneladas.",
            fr: "Nous avons mis en œuvre une chaudière à grille à chaîne biomasse SZL de 20 tonnes.",
            ar: "قمنا بتنفيذ غلاية شبكية سلسلة الكتلة الحيوية SZL سعة 20 طنًا.",
            de: "Wir haben einen 20-Tonnen-SZL-Biomasse-Kettenrostkessel implementiert."
        },
        projectResults: {
            en: [
                "Reduced fuel costs by 65% by replacing heavy oil with zero-cost internal waste.",
                "Turned a waste disposal expense into an energy asset, achieving a circular economy model.",
                "Stack emissions fully comply with Thailand's EIA standards (Particulates <50mg/m³).",
                "Stable steam pressure improved the consistency of the rubber vulcanization process."
            ],
            zh: [
                "通过用零成本的内部废料替代重油，燃料成本不仅降低了65%。",
                "将废物处理费用转化为能源资产，实现了循环经济模式。",
                "烟囱排放完全符合泰国的EIA标准（颗粒物<50mg/m³）。",
                "稳定的蒸汽压力提高了橡胶硫化工艺的一致性。"
            ],
            ru: [
                "Затраты на топливо снижены на 65%.",
                "Расходы на утилизацию отходов превращены в энергетический актив.",
                "Выбросы из дымовых труб полностью соответствуют стандартам ОВОС Таиланда.",
                "Стабильное давление пара улучшило процесс вулканизации."
            ],
            es: [
                "Se redujeron los costos de combustible en un 65%.",
                "Se convirtió un gasto de eliminación de residuos en un activo energético.",
                "Las emisiones de la chimenea cumplen totalmente con los estándares de la EIA de Tailandia.",
                "La presión de vapor estable mejoró la consistencia de la vulcanización."
            ],
            fr: [
                "Réduction des coûts de carburant de 65%.",
                "Transformation d'une dépense d'élimination des déchets en un atout énergétique.",
                "Les émissions de cheminée sont entièrement conformes aux normes EIE de la Thaïlande.",
                "La pression de vapeur stable a amélioré la régularité de la vulcanisation."
            ],
            ar: [
                "خفض تكاليف الوقود بنسبة 65٪.",
                "تحويل نفقات التخلص من النفايات إلى أصل للطاقة.",
                "تتوافق انبعاثات المداخن تمامًا مع معايير تقييم الأثر البيئي في تايلاند.",
                "أدى ضغط البخار المستقر إلى تحسين اتساق الفلكنة."
            ],
            de: [
                "Brennstoffkosten um 65% gesenkt.",
                "Ausgaben für die Abfallentsorgung in einen Energiewert verwandelt.",
                "Die Schornsteinemissionen entsprechen voll und ganz den EIA-Standards Thailands.",
                "Stabiler Dampfdruck verbesserte die Konsistenz der Vulkanisierung."
            ]
        }
    },
    // 15. South Africa (New - Reusing Image)
    {
        id: "south-africa-gas-pharma",
        title: {
            en: "6 Ton Gas Steam Boiler for Pharmacy",
            zh: "6吨燃气蒸汽锅炉用于制药厂",
            ru: "6-тонный газовый паровой котел для фармацевтики",
            es: "Caldera de vapor a gas de 6 toneladas para farmacia",
            fr: "Chaudière à vapeur à gaz de 6 tonnes pour la pharmacie",
            ar: "غلاية بخار غاز 6 طن للصيدلة",
            de: "6 Tonnen Gasdampfkessel für Pharmazie"
        },
        location: "Johannesburg, South Africa",
        countryCode: "za",
        industry: "chemical",
        productCategory: "gas",
        productModel: "WNS6-1.25-Q",
        capacity: "6 t/h",
        installDate: "2023-09",
        images: ["/images/products/wns-boiler-real.jpg"],
        description: {
            en: "Clean steam generation system meeting strict pharmaceutical hygiene standards, ensuring sterilization and production quality.",
            zh: "符合严格制药卫生标准的洁净蒸汽发生系统，确保灭菌和生产质量。",
            ru: "Система генерации чистого пара, отвечающая строгим фармацевтическим стандартам гигиены.",
            es: "Sistema de generación de vapor limpio que cumple con estrictos estándares de higiene farmacéutica.",
            fr: "Système de génération de vapeur propre répondant aux normes d'hygiène pharmaceutiques strictes.",
            ar: "نظام توليد بخار نظيف يلبي معايير النظافة الصيدلانية الصارمة.",
            de: "Sauberes Dampferzeugungssystem, das strenge pharmazeutische Hygienestandards erfüllt und Sterilisation und Produktionsqualität gewährleistet."
        },
        clientBackground: {
            en: "A pharmaceutical manufacturing plant in Johannesburg, South Africa, producing generic medicines and sterile injectables. The facility must adhere to strict GMP (Good Manufacturing Practice) guidelines.",
            zh: "位于南非约翰内斯堡的一家制药厂，生产仿制药和无菌注射剂。该设施必须遵守严格的GMP（药品生产质量管理规范）准则。",
            ru: "Фармацевтический завод в Йоханнесбурге, Южная Африка.",
            es: "Una planta de fabricación farmacéutica en Johannesburgo, Sudáfrica.",
            fr: "Une usine de fabrication pharmaceutique à Johannesburg, en Afrique du Sud.",
            ar: "مصنع لتصنيع الأدوية في جوهانسبرغ ، جنوب أفريقيا.",
            de: "Eine pharmazeutische Produktionsanlage in Johannesburg, Südafrika."
        },
        projectChallenge: {
            en: "Contamination is the biggest risk in pharma production. The steam used for sterilization and HVAC humidification must be absolutely clean. The client's old carbon steel boiler had rust issues, posing a contamination risk. They also needed a system that could respond quickly to batch-process load spikes.",
            zh: "污染是制药生产中的最大风险。用于灭菌和HVAC加湿的蒸汽必须绝对清洁。客户的旧碳钢锅炉存在生锈问题，构成了污染风险。他们还需要一个能够快速响应批处理负荷峰值的系统。",
            ru: "Загрязнение является самым большим риском в фармацевтическом производстве.",
            es: "La contaminación es el mayor riesgo en la producción farmacéutica.",
            fr: "La contamination est le plus grand risque dans la production pharmaceutique.",
            ar: "التلوث هو أكبر خطر في إنتاج الأدوية.",
            de: "Kontamination ist das größte Risiko in der pharmazeutischen Produktion."
        },
        projectSolution: {
            en: "We installed a 6-ton WNS Gas Steam Boiler with a full stainless steel (304 grade) operational loop for feed water and steam contact parts. We included a thermal deaerator to remove oxygen and prevent corrosion. The burner modulation ratio is 1:10, allowing precise tracking of variable batch loads.",
            zh: "我们安装了一台6吨WNS燃气蒸汽锅炉，进水和蒸汽接触部件采用全不锈钢（304级）操作回路。我们包括了一个热除氧器以去除氧气并防止腐蚀。燃烧器调节比为1:10，允许精确跟踪可变的批处理负荷。",
            ru: "Мы установили 6-тонный газовый паровой котел WNS с полным контуром из нержавеющей стали.",
            es: "Instalamos una caldera de vapor a gas WNS de 6 toneladas con un circuito operativo completo de acero inoxidable.",
            fr: "Nous avons installé une chaudière à vapeur à gaz WNS de 6 tonnes avec une boucle opérationnelle entièrement en acier inoxydable.",
            ar: "قمنا بتركيب غلاية بخار غاز WNS سعة 6 طن مع حلقة تشغيل كاملة من الفولاذ المقاوم للصدأ.",
            de: "Wir haben einen 6-Tonnen-WNS-Gasdampfkessel mit einem vollständigen Betriebskreislauf aus Edelstahl installiert."
        },
        projectResults: {
            en: [
                "Passed strict FDA/GMP site audits with zero observations regarding steam purity.",
                "Stainless steel components eliminated rust contamination risks entirely.",
                "1:10 burner modulation reduced gas cycling losses by 20%.",
                "Automated water quality monitoring ensured 24/7 compliance with water directives."
            ],
            zh: [
                "在蒸汽纯度方面以零缺陷通过了严格的FDA/GMP现场审计。",
                "不锈钢部件完全消除了铁锈污染风险。",
                "1:10的燃烧器调节比将气体循环损失减少了20%。",
                "自动水质监测确保了24/7符合用水指令。"
            ],
            ru: [
                "Прошел строгий аудит FDA/GMP с нулевыми замечаниями.",
                "Компоненты из нержавеющей стали полностью устранили риск ржавчины.",
                "Модуляция горелки 1:10 снизила потери газа на 20%.",
                "Автоматический мониторинг качества воды."
            ],
            es: [
                "Pasó estrictas auditorías de la FDA/GMP con cero observaciones.",
                "Los componentes de acero inoxidable eliminaron los riesgos de contaminación.",
                "La modulación del quemador 1:10 redujo las pérdidas por ciclos de gas.",
                "Monitoreo automatizado de la calidad del agua."
            ],
            fr: [
                "A passé avec succès des audits stricts de la FDA/GMP avec zéro observation.",
                "Les composants en acier inoxydable ont complètement éliminé les risques de rouille.",
                "La modulation du brûleur 1:10 a réduit les pertes de cycle de gaz de 20%.",
                "Surveillance automatisée de la qualité de l'eau."
            ],
            ar: [
                "اجتاز عمليات تدقيق FDA / GMP الصارمة في الموقع دون أي ملاحظات.",
                "قضت مكونات الفولاذ المقاوم للصدأ على مخاطر تلوث الصدأ تمامًا.",
                "قلل تعديل الموقد 1:10 من خسائر ركوب الغاز بنسبة 20٪.",
                "مراقبة آلية لجودة المياه."
            ],
            de: [
                "Bestand strenge FDA/GMP-Standortaudits ohne Beanstandungen.",
                "Edelstahlkomponenten eliminierten Rostkontaminationsrisiken vollständig.",
                "1:10 Brennermodulation reduzierte Gaszyklusverluste um 20%.",
                "Automatisierte Wasserqualitätsüberwachung."
            ]
        }
    },
    // 16. Argentina (New - Reusing Image)
    {
        id: "argentina-gas-food",
        title: {
            en: "8 Ton Gas Boiler for Meat Processing",
            zh: "8吨燃气锅炉用于肉类加工",
            ru: "8-тонный газовый котел для переработки мяса",
            es: "Caldera a gas de 8 toneladas para procesamiento de carne",
            fr: "Chaudière à gaz de 8 tonnes pour la transformation de la viande",
            ar: "غلاية غاز 8 طن لمعالجة اللحوم",
            de: "8 Tonnen Gaskessel für Fleischverarbeitung"
        },
        location: "Buenos Aires, Argentina",
        countryCode: "ar",
        industry: "food",
        productCategory: "gas",
        productModel: "WNS8-1.25-Q",
        capacity: "8 t/h",
        installDate: "2024-02",
        images: ["/images/products/wns-series-steam-boiler.jpg"],
        description: {
            en: "Reliable steam supply for cooking and sanitation in a large meat processing facility, equipped with economizers for maximum efficiency.",
            zh: "为大型肉类加工设施的烹饪和卫生提供可靠的蒸汽供应，配备节能器以实现最大效率。",
            ru: "Надежная подача пара для приготовления пищи и санитарии на крупном мясоперерабатывающем предприятии.",
            es: "Suministro confiable de vapor para cocción y saneamiento en una gran instalación de procesamiento de carne.",
            fr: "Approvisionnement en vapeur fiable pour la cuisson et l'assainissement dans une grande installation de transformation de la viande.",
            ar: "إمداد موثوق للبخار للطهي والصرف الصحي في منشأة كبيرة لمعالجة اللحوم.",
            de: "Zuverlässige Dampfversorgung für Kochen und Hygiene in einer großen Fleischverarbeitungsanlage, ausgestattet mit Economisern für maximale Effizienz."
        },
        clientBackground: {
            en: "A major meat processing and export facility in Buenos Aires, Argentina, specializing in high-quality beef for the EU market. The plant requires large volumes of hot water and steam for cleaning, sterilization, and rendering processes.",
            zh: "位于阿根廷布宜诺斯艾利斯的主要肉类加工和出口设施，专门向欧盟市场提供优质牛肉。该工厂需要大量的热水和蒸汽用于清洁、灭菌和提炼过程。",
            ru: "Крупное мясоперерабатывающее и экспортное предприятие в Буэнос-Айресе, Аргентина.",
            es: "Una importante instalación de procesamiento y exportación de carne en Buenos Aires, Argentina.",
            fr: "Une importante installation de transformation et d'exportation de viande à Buenos Aires, en Argentine.",
            ar: "منشأة رئيسية لتجهيز وتصدير اللحوم في بوينس آيرس ، الأرجنتين.",
            de: "Eine große Fleischverarbeitungs- und Exportanlage in Buenos Aires, Argentinien."
        },
        projectChallenge: {
            en: "The plant faces variable production shifts with huge spikes in hot water demand during sanitation windows. Rising natural gas prices were cutting into margins. They needed a highly efficient system that could recover waste heat to preheat the massive volumes of washing water required.",
            zh: "工厂面临可变的生产班次，在卫生窗口期间热水需求急剧激增。不断上涨的天然气价格正在侵蚀利润。他们需要一个高效的系统，能够回收废热来预热所需的大量洗涤水。",
            ru: "Завод сталкивается с переменными производственными сменами.",
            es: "La planta se enfrenta a turnos de producción variables.",
            fr: "L'usine fait face à des quarts de production variables.",
            ar: "يواجه المصنع نوبات إنتاج متغيرة.",
            de: "Die Anlage ist mit variablen Produktionsschichten konfrontiert."
        },
        projectSolution: {
            en: "Yudong supplied an 8-ton WNS Gas Steam Boiler integrated with a customized Flue Gas Condenser. This condenser recovers latent heat from the exhaust gases to preheat the feed water for the sanitation ring main, raising it from 20°C to 85°C essentially for free.",
            zh: "豫东提供了一台8吨WNS燃气蒸汽锅炉，集成了一个定制的烟气冷凝器。该冷凝器从废气中回收潜热，将用于卫生环形总管的给水从20°C预热到85°C，基本上是免费的。",
            ru: "Yudong поставила 8-тонный газовый паровой котел WNS.",
            es: "Yudong suministró una caldera de vapor a gas WNS de 8 toneladas.",
            fr: "Yudong a fourni une chaudière à vapeur à gaz WNS de 8 tonnes.",
            ar: "زودت Yudong غلاية بخار غاز WNS سعة 8 طن.",
            de: "Yudong lieferte einen 8-Tonnen-WNS-Gasdampfkessel."
        },
        projectResults: {
            en: [
                "Achieved 102% thermal efficiency (using Lower Heating Value) via condensation technology.",
                "Reduced natural gas consumption by 18%, resulting in an ROI of less than 12 months.",
                "Ensured consistent 85°C sanitation water, improving food safety compliance.",
                "Reduced CO2 emissions significantly, aiding the client's carbon neutrality goals."
            ],
            zh: [
                "通过冷凝技术实现了102%的热效率（使用低位热值）。",
                "天然气消耗减少了18%，投资回报期不到12个月。",
                "确保了一致的85°C卫生用水，提高了食品安全合规性。",
                "显著减少了二氧化碳排放，有助于客户的碳中和目标。"
            ],
            ru: [
                "Достигнут тепловой КПД 102% благодаря технологии конденсации.",
                "Потребление природного газа сократилось на 18%.",
                "Обеспечена стабильная вода для санитарии с температурой 85°C.",
                "Выбросы CO2 значительно сократились."
            ],
            es: [
                "Se logró una eficiencia térmica del 102%.",
                "Se redujo el consumo de gas natural en un 18%.",
                "Se garantizó agua de saneamiento constante a 85°C.",
                "Se redujeron significativamente las emisiones de CO2."
            ],
            fr: [
                "Efficacité thermique de 102% atteinte.",
                "Consommation de gaz naturel réduite de 18%.",
                "Eau d'assainissement constante à 85°C assurée.",
                "Émissions de CO2 considérablement réduites."
            ],
            ar: [
                "تحقيق كفاءة حرارية بنسبة 102٪.",
                "انخفاض استهلاك الغاز الطبيعي بنسبة 18٪.",
                "ضمان ثبات مياه الصرف الصحي عند 85 درجة مئوية.",
                "تخفيض انبعاثات ثاني أكسيد الكربون بشكل كبير."
            ],
            de: [
                "Thermischer Wirkungsgrad von 102% erreicht.",
                "Erdgasverbrauch um 18% gesenkt.",
                "Konstantes 85°C Sanitärwasser gewährleistet.",
                "CO2-Emissionen deutlich reduziert."
            ]
        }
    },
    // 17. Poland (Replaced Mongolia due to missing flag)
    {
        id: "poland-coal-heating",
        title: {
            en: "25 Ton Coal Boiler for District Heating",
            zh: "25吨燃煤锅炉用于集中供热",
            ru: "25-тонный угольный котел для районного отопления",
            es: "Caldera de carbón de 25 toneladas para calefacción urbana",
            fr: "Chaudière à charbon de 25 tonnes pour le chauffage urbain",
            ar: "غلاية فحم 25 طن للتدفئة المركزية",
            de: "25 Tonnen Kohlekessel für Fernwärme"
        },
        location: "Katowice, Poland",
        countryCode: "pl",
        industry: "heating",
        productCategory: "coal",
        productModel: "SZL25-1.6-AII",
        capacity: "25 t/h",
        installDate: "2023-01",
        images: ["/images/products/szl-boiler.jpg"], // Reusing Russia (Coal) image
        description: {
            en: "Robust coal-fired heating boiler designed to withstand harsh winter conditions, ensuring warm homes for the community.",
            zh: "坚固的燃煤供暖锅炉，设计可承受严酷的冬季条件，确保社区家庭温暖。",
            ru: "Прочный угольный отопительный котел, рассчитанный на суровые зимние условия.",
            es: "Robusta caldera de calefacción de carbón diseñada para soportar las duras condiciones invernales.",
            fr: "Chaudière de chauffage au charbon robuste conçue pour résister aux conditions hivernales rigoureuses.",
            ar: "غلاية تدفئة قوية تعمل بالفحم مصممة لتحمل ظروف الشتاء القاسية.",
            de: "Robuster kohlebefeuerter Heizkessel, der rauen Winterbedingungen standhält und warme Häuser für die Gemeinde gewährleistet."
        },
        clientBackground: {
            en: "A municipal heating company in Katowice, Poland, responsible for supplying heat to a residential complex of over 3,000 households. The region has a history of coal mining and relies heavily on local coal for energy.",
            zh: "位于波兰卡托维兹的一家市政供热公司，负责为3000多户居民的住宅区供热。该地区有煤炭开采历史，严重依赖当地煤炭作为能源。",
            ru: "Муниципальная тепловая компания в Катовице, Польша.",
            es: "Una empresa municipal de calefacción en Katowice, Polonia.",
            fr: "Une entreprise municipale de chauffage à Katowice, en Pologne.",
            ar: "شركة تدفئة بلدية في كاتوفيتشي ، بولندا.",
            de: "Ein städtisches Heizungsunternehmen in Kattowitz, Polen."
        },
        projectChallenge: {
            en: "The previous boilers were technologically outdated, with low efficiency (around 60%) and heavy smoke emissions that violated strict new EU environmental standards. The client needed a solution that could still utilize accessible local coal but with drastically reduced pollution and higher efficiency.",
            zh: "以前的锅炉技术落后，效率低（约60%），烟雾排放严重，违反了严格的欧盟新环保标准。客户需要一种既能利用可获得的当地煤炭，又能大幅减少污染并提高效率的解决方案。",
            ru: "Предыдущие котлы были технологически устаревшими.",
            es: "Las calderas anteriores estaban tecnológicamente obsoletas.",
            fr: "Les chaudières précédentes étaient technologiquement dépassées.",
            ar: "كانت الغلايات السابقة قديمة من الناحية التكنولوجية.",
            de: "Die früheren Kessel waren technologisch veraltet."
        },
        projectSolution: {
            en: "We supplied a 25-ton SZL Chain Grate Coal Boiler equipped with a state-of-the-art emission control suite, including a baghouse filter and wet Flue Gas Desulfurization (FGD) unit. The boiler features a membrane water wall structure to improve heat transfer and airtightness.",
            zh: "我们提供了一台25吨SZL链条炉排燃煤锅炉，配备了最先进的排放控制套件，包括布袋除尘器和湿式烟气脱硫（FGD）装置。该锅炉采用膜式水冷壁结构，以提高传热和气密性。",
            ru: "Мы поставили 25-тонный угольный котел с цепной решеткой SZL.",
            es: "Suministramos una caldera de carbón de parrilla de cadena SZL de 25 toneladas.",
            fr: "Nous avons fourni une chaudière à charbon à grille à chaîne SZL de 25 tonnes.",
            ar: "قمنا بتوريد غلاية فحم شبكية سلسلة SZL سعة 25 طنًا.",
            de: "Wir lieferten einen 25-Tonnen-SZL-Kettenrost-Kohlekessel."
        },
        projectResults: {
            en: [
                "Thermal efficiency jumped from 60% to 85%, significantly cutting coal consumption.",
                "SO2 and dust emissions reduced by over 90%, fully meeting EU environmental directives.",
                "Provided stable, 24/7 heating for 3,000 households during the harsh Polish winter.",
                "Automated grate system reduced labor intensity and improved operational safety."
            ],
            zh: [
                "热效率从60%跃升至85%，显著减少了煤炭消耗。",
                "二氧化硫和粉尘排放量减少了90%以上，完全符合欧盟环保指令。",
                "在严酷的波兰冬季为3000户家庭提供了稳定、24/7的供暖。",
                "自动炉排系统降低了劳动强度并提高了运行安全性。"
            ],
            ru: [
                "Тепловой КПД подскочил с 60% до 85%.",
                "Выбросы SO2 и пыли сократились более чем на 90%.",
                "Обеспечено стабильное, круглосуточное отопление.",
                "Автоматизированная каминная система снизила трудоемкость."
            ],
            es: [
                "La eficiencia térmica saltó del 60% al 85%.",
                "Las emisiones de SO2 y polvo se redujeron en más del 90%.",
                "Se proporcionó calefacción estable 24/7.",
                "Sistema de rejilla automatizado."
            ],
            fr: [
                "L'efficacité thermique est passée de 60% à 85%.",
                "Les émissions de SO2 et de poussières ont été réduites de plus de 90%.",
                "Chauffage stable 24h/24 et 7j/7 assuré.",
                "Système de grille automatisé."
            ],
            ar: [
                "قفزت الكفاءة الحرارية من 60٪ إلى 85٪.",
                "انخفاض انبعاثات ثاني أكسيد الكبريت والغبار بأكثر من 90٪.",
                "توفير تدفئة مستقرة على مدار 24/7.",
                "نظام صر الآلي يقلل من كثافة اليد العاملة."
            ],
            de: [
                "Thermischer Wirkungsgrad sprang von 60% auf 85%.",
                "SO2- und Staubemissionen um über 90% reduziert.",
                "Stabile 24/7-Heizung bereitgestellt.",
                "Automatisches Rostsystem."
            ]
        }
    },
    // 18. Malaysia (New - Reusing Image)
    {
        id: "malaysia-biomass-palm-oil",
        title: {
            en: "20 Ton Biomass Boiler for Palm Oil Mill",
            zh: "20吨生物质锅炉用于棕榈油厂",
            ru: "20-тонный котел на биомассе для завода по производству пальмового масла",
            es: "Caldera de biomasa de 20 toneladas para molino de aceite de palma",
            fr: "Chaudière à biomasse de 20 tonnes pour huilerie de palme",
            ar: "غلاية كتلة حيوية 20 طن لمصنع زيت النخيل",
            de: "20 Tonnen Biomassekessel für Palmölmühle"
        },
        location: "Sandakan, Malaysia",
        countryCode: "my",
        industry: "food",
        productCategory: "biomass",
        productModel: "SZL20-1.25-M",
        capacity: "20 t/h",
        installDate: "2024-03",
        images: ["/images/products/dzl-boiler.jpg"],
        description: {
            en: "High-efficiency biomass boiler utilizing EFB (Empty Fruit Bunches) and fibers, achieving a circular economy for the palm oil mill.",
            zh: "高效生物质锅炉，利用空果串(EFB)和纤维，为棕榈油厂实现循环经济。",
            ru: "Высокоэффективный котел на биомассе, использующий EFB и волокна.",
            es: "Caldera de biomasa de alta eficiencia que utiliza EFB (racimos de frutas vacíos) y fibras.",
            fr: "Chaudière à biomasse haute efficacité utilisant des EFB (régimes de fruits vides) et des fibres.",
            ar: "غلاية كتلة حيوية عالية الكفاءة تستخدم EFB (عناقيد الفاكهة الفارغة) والألياف.",
            de: "Hocheffizienter Biomassekessel, der EFB (leere Fruchtbündel) und Fasern nutzt und so eine Kreislaufwirtschaft für die Palmölmühle erreicht."
        },
        clientBackground: {
            en: "A large-scale palm oil plantation and processing mill in Sandakan, Malaysia. The extraction process generates huge amounts of Empty Fruit Bunches (EFB) and palm fibers, which were previously treated as waste.",
            zh: "位于马来西亚山打根的大型棕榈油种植园和加工厂。提取过程产生大量的空果串（EFB）和棕榈纤维，这些以前被视为废物。",
            ru: "Крупномасштабная плантация пальмового масла и перерабатывающий завод в Сандакане, Малайзия.",
            es: "Una plantación de aceite de palma a gran escala y un molino de procesamiento en Sandakan, Malasia.",
            fr: "Une grande plantation de palmiers à huile et une usine de transformation à Sandakan, en Malaisie.",
            ar: "مزرعة ومصنع لمعالجة زيت النخيل على نطاق واسع في سانداكان ، ماليزيا.",
            de: "Eine groß angelegte Palmölplantage und -verarbeitungsanlage in Sandakan, Malaysia."
        },
        projectChallenge: {
            en: "The mill relied on expensive diesel generators for electricity and steam, severely affecting profitability. They wanted to burn their waste EFB for energy, but EFB has high moisture and high alkali content, which causes fouling and slagging in standard boilers.",
            zh: "该工厂依赖昂贵的柴油发电机发电和产生蒸汽，严重影响了盈利能力。他们希望燃烧废弃的EFB获取能源，但EFB含水量高且碱金属含量高，会导致标准锅炉结垢和结渣。",
            ru: "Мельница полагалась на дорогие дизельные генераторы.",
            es: "El molino dependía de costosos generadores diesel.",
            fr: "L'usine dépendait de générateurs diesel coûteux.",
            ar: "اعتمدت المطحنة على مولدات الديزل باهظة الثمن.",
            de: "Die Mühle verließ sich auf teure Dieselgeneratoren."
        },
        projectSolution: {
            en: "We designed a 20-ton SZL Biomass Boiler specifically for palm waste. It features a specialized reciprocating grate to handle the high moisture EFB and large furnace volume with membrane walls to control combustion temperature and prevent slagging. We also installed soot blowers to keep heating surfaces clean.",
            zh: "我们为棕榈废料设计了一台20吨SZL生物质锅炉。它具有专用的往复式炉排来处理高水分EFB，以及带有膜式壁的大炉膛容积来控制燃烧温度并防止结渣。我们还安装了吹灰器以保持受热面清洁。",
            ru: "Мы разработали 20-тонный котел на биомассе SZL специально для пальмовых отходов.",
            es: "Diseñamos una caldera de biomasa SZL de 20 toneladas específicamente para residuos de palma.",
            fr: "Nous avons conçu une chaudière à biomasse SZL de 20 tonnes spécifiquement pour les déchets de palme.",
            ar: "لقد صممنا غلاية الكتلة الحيوية SZL سعة 20 طنًا خصيصًا لنفايات النخيل.",
            de: "Wir haben einen 20-Tonnen-SZL-Biomassekessel speziell für Palmabfälle entwickelt."
        },
        projectResults: {
            en: [
                "Allowed the mill to become self-sufficient in energy by replacing 100% of diesel fuel.",
                "Saved approximately $1.5 million USD annually in fuel costs.",
                "Solved the environmental headache of disposing of thousands of tons of EFB waste.",
                "Specialized anti-slag design enabled continuous operation for 6 months without shutdown for cleaning."
            ],
            zh: [
                "通过100%替代柴油燃料，使工厂实现了能源自给自足。",
                "每年节省约150万美元的燃料成本。",
                "解决了处理数千吨EFB废物的环境难题。",
                "专门的防结渣设计实现了连续运行6个月而无需停机清洁。"
            ],
            ru: [
                "Позволил мельнице стать самодостаточной в энергии.",
                "Сэкономил около 1,5 миллиона долларов США ежегодно.",
                "Решена экологическая проблема утилизации EFB.",
                "Специализированная конструкция против шлака."
            ],
            es: [
                "Permitió que el molino fuera autosuficiente en energía.",
                "Ahorró aproximadamente $1.5 millones de dólares anuales.",
                "Resolvió el dolor de cabeza ambiental de la eliminación de EFB.",
                "Diseño especializado anti-escoria."
            ],
            fr: [
                "A permis à l'usine de devenir autosuffisante en énergie.",
                "Économie d'environ 1,5 million de dollars USD par an.",
                "A résolu le casse-tête environnemental de l'élimination des EFB.",
                "Conception anti-scories spécialisée."
            ],
            ar: [
                "سمح للمصنع بأن يصبح مكتفيا ذاتيا من الطاقة.",
                "توفير ما يقرب من 1.5 مليون دولار أمريكي سنويًا.",
                "حل الصداع البيئي المتمثل في التخلص من نفايات EFB.",
                "تصميم متخصص مضاد للخبث."
            ],
            de: [
                "Ermöglichte der Mühle die Energieautarkie.",
                "Spart jährlich ca. 1,5 Millionen USD.",
                "Löste das Umweltproblem der Entsorgung von EFB-Abfällen.",
                "Spezielles Anti-Schlacken-Design."
            ]
        }
    }
];
