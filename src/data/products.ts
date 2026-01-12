export interface Product {
  id: string;
  name: {
    en: string;
    zh: string;
    [key: string]: string;
  };
  description: {
    en: string;
    zh: string;
    [key: string]: string;
  };
  fullDescription: {
    en: string;
    zh: string;
    [key: string]: string;
  };
  category: "steam" | "thermal_oil" | "hot_water" | "hot_air";
  image: string;
  icon: string;
  features: {
    en: string;
    zh: string;
    [key: string]: string;
  }[];
  faq?: {
    question: { en: string, zh: string, [key: string]: string };
    answer: { en: string, zh: string, [key: string]: string };
  }[];
  specs: {
    model: string;
    capacity?: string;
    pressure?: string;
    efficiency: string;
    fuel: string;
    heatingSurface?: string;
    dimensions?: string;
    weight?: string;
    waterCapacity?: string;
    fuelConsumption?: string;
    circulationVolume?: string; // 循环油量
    pipeDiameter?: string;      // 管径
    oilCapacity?: string;       // 炉内油量
    steamTemp?: string;         // 蒸汽温度
    feedWaterTemp?: string;     // 给水温度
    condenserArea?: string;     // 冷凝器面积
    economizerArea?: string;    // 节能器面积
    grateArea?: string;         // 炉排面积
    maxTemp?: string;           // 最高使用温度
    outletTemp?: string;        // 出水温度
    inletTemp?: string;         // 进水温度
    inletDiameter?: string;     // 进水口径
    outletDiameter?: string;    // 出水口径
    exhaustTemp?: string;       // 排烟温度
    blowdownRate?: string;      // 排污率
    ambientTemp?: string;       // 环境温度
    powerSupply?: string;       // 电源 (e.g., 380V/50Hz)
    totalPower?: string;        // 总功率 (e.g., 1.5kW)
    thermalPower?: string;      // 热功率 (e.g., 70kW)
    motorPower?: string;        // 电机功率 (e.g., 5.5kW)
    blowerPower?: string;       // 送风机功率 (e.g., 1.5kW)
    outputHeat?: string;        // 输出热量 (e.g., 100,000 kcal/h)
    airVolume?: string;         // 热风量 (e.g., 3000-5000 m³/h)
    hotAirTemp?: string;        // 热风温度 (e.g., 60-150°C)
    gasConsumption?: string;
    current?: string;
    power?: string;
    voltage?: string;
    frequency?: string;
    flowRate?: string;
    steamOutlet?: string;       // 主汽阀口径 (DN)
    safetyValve?: string;       // 安全阀口径 (DN)
    feedWaterInlet?: string;    // 进水口径 (DN)
    blowdown?: string;          // 排污阀口径 (DN)
    chimneyDiameter?: string;   // 烟囱口径 (mm)
  }[];
}

export const PRODUCT_CATEGORIES: Product[] = [
  // 1. WNS Oil/Gas Steam Boiler (Existing)
  {
    id: "wns-oil-gas-steam-boiler",
    category: "steam",
    name: {
      en: "WNS Series Oil/Gas Fired Steam Boiler",
      zh: "WNS系列燃油/燃气蒸汽锅炉",
      es: "Caldera de Vapor a Gas/Aceite Serie WNS",
      fr: "Chaudière à Vapeur Fioul/Gaz Série WNS",
      de: "WNS-Serie Öl-/Gasbefeuerter Dampfkessel",
      ru: "Паровой котел серии WNS на жидком топливе/газе",
      ar: "غلاية بخار سلسلة WNS تعمل بالزيت/الغاز"
    },
    description: {
      en: "Horizontal three-pass wetback oil/gas boiler, high efficiency & automatic.",
      zh: "卧式三回程湿背式燃油燃气锅炉，高效全自动。",
      es: "Caldera horizontal de tres pasos con respaldo húmedo, alta eficiencia y automática.",
      fr: "Chaudière horizontale à trois passes à dos humide, haute efficacité et automatique.",
      de: "Horizontaler Dreizug-Nassrückenkessel, hohe Effizienz & automatisch.",
      ru: "Горизонтальный трехходовой котел с мокрой спинкой, высокая эффективность и автоматика.",
      ar: "غلاية أفقية بثلاث ممرات ذات ظهر رطب، عالية الكفاءة وتعمل تلقائيًا."
    },
    fullDescription: {
      en: "The WNS series oil/gas steam boiler is a horizontal quick-install internal combustion three-pass fire tube boiler. It adopts an offset furnace wet-back structure. The high-temperature flue gas successively flushes the second and third pass smoke tubes, then discharges into the atmosphere through the rear smoke chamber and chimney. The boiler has sufficient thermal power: the heating surface is configured according to high standards to fully absorb effective heat, resulting in low exhaust gas temperature, small heat loss, ensuring sufficient output and high efficiency. The boiler is equipped with movable front and rear smoke box covers, making maintenance convenient.\n\nThe WNS series boiler is equipped with industrial burners with good technical performance, adopting advanced technologies such as automatic proportional combustion adjustment, automatic water supply adjustment, program start/stop, and fully automatic operation. It also has automatic protection functions such as high and low water level alarms, low water level, ultra-high steam pressure, and flameout protection. This type of boiler is characterized by compact structure, safety and reliability, simple operation, quick installation, less pollution, low noise, and high efficiency. It holds a new type patent certificate, Utility Model Name: A Horizontal Oil-fired Steam Boiler; Patent No.: ZL 2014 2 0504448.2.\n\nThe WNS series oil/gas steam boiler is suitable for the chemical industry: fertilizer plants, oil refineries, beverage plants, coating plants, plastic plants, glass plants, sulfuric acid plants, etc.; manufacturing industry: paper mills, textile mills, dairy plants, wineries, food factories, edible fungus workshops, shoe factories, ceramic factories, furniture factories, tire factories, mat factories, cigarette factories, chopstick factories, printing plants, tape factories, foam factories, hardware factories, flooring factories, cabinet factories, door factories, battery factories, salt factories, tea factories, instrument factories, etc.; construction industry: road and bridge maintenance, concrete steam curing, aerated brick steam curing, etc.; as well as agricultural product processing, pharmaceutical production, fireproof material production and other industries.",
      zh: "WNS型燃油/气蒸汽锅炉为卧式快装内燃三回程火管锅。采用偏置炉胆湿背式结构，高温烟气依次冲刷第二及第三回程烟管，然后由后烟室经烟囱排入大气。该锅炉热力充足：锅炉受热面积按照高标准设计配置，充分吸收有效热量，排烟温度低，热损失小，保证出力足，效率高。锅炉装有活动的前后烟箱盖，使锅炉检修方便。\n\nWNS型燃油/气蒸汽锅炉配置技术性能良好的工业燃烧器，采用了燃烧自动比例调节，给水自动调节，程序启停，全自动运行等先进技术，并具有高低水位报警和低水位、超高汽压、熄火等自动保护功能。该型锅炉具有结构紧凑、安全可靠、操作简便、安装迅速、污染少、噪音低、效率高等特点。拥有新型专利证书，实用新型名称：一种卧式燃油蒸汽锅炉；专利号：ZL 2014 2 0504448.2。\n\nWNS型燃油/气蒸汽锅炉适用于化工行业：肥料厂、炼油厂、饮料厂、涂装厂、塑料厂、玻璃厂、硫酸厂等，制造行业：造纸厂、纺织厂、制奶厂、造酒厂、 食品厂、食品菌坊、制鞋厂、陶瓷厂、家具厂、轮胎厂、凉席厂、卷烟厂、筷子厂、印刷厂、胶带厂、泡沫厂、五金厂、地板厂、橱柜厂、木门厂、电池厂、盐厂、茶叶厂、仪器厂等，建筑行业：路桥保养、混泥土蒸养、加气砖蒸压等，以及农产品加工、医药生产、防火材料生产等行业均可以使用。",
      es: "La caldera de vapor de aceite/gas de la serie WNS es una caldera de tubo de fuego horizontal de tres pasos de combustión interna de instalación rápida. Adopta una estructura de respaldo húmedo de horno desplazado. Los gases de combustión a alta temperatura barren sucesivamente los tubos de humo del segundo y tercer paso, luego se descargan a la atmósfera a través de la cámara de humo trasera y la chimenea. La caldera tiene suficiente potencia térmica: la superficie de calentamiento está configurada de acuerdo con altos estándares para absorber completamente el calor efectivo, lo que resulta en una baja temperatura de los gases de escape, pequeña pérdida de calor, asegurando una salida suficiente y alta eficiencia. La caldera está equipada con cubiertas de caja de humo delantera y trasera móviles, lo que facilita el mantenimiento.\n\nLa caldera de la serie WNS está equipada con quemadores industriales con buen rendimiento técnico, adoptando tecnologías avanzadas como ajuste automático de combustión proporcional, ajuste automático de suministro de agua, arranque/parada de programa y operación totalmente automática. También tiene funciones de protección automática como alarmas de nivel de agua alto y bajo, nivel de agua bajo, presión de vapor ultra alta y protección contra apagado. Este tipo de caldera se caracteriza por su estructura compacta, seguridad y confiabilidad, operación simple, instalación rápida, menos contaminación, bajo nivel de ruido y alta eficiencia. Posee un certificado de patente de nuevo tipo, Nombre del Modelo de Utilidad: Una Caldera de Vapor Horizontal a Petróleo; Patente No.: ZL 2014 2 0504448.2.",
      fr: "La chaudière à vapeur fioul/gaz de la série WNS est une chaudière à tubes de fumée horizontale à trois passes à combustion interne à installation rapide. Elle adopte une structure à dos humide à four décalé. Les gaz de combustion à haute température balayent successivement les tubes de fumée des deuxième et troisième passes, puis sont rejetés dans l'atmosphère par la chambre de fumée arrière et la cheminée. La chaudière a une puissance thermique suffisante : la surface de chauffe est configurée selon des normes élevées pour absorber pleinement la chaleur efficace, ce qui entraîne une basse température des gaz d'échappement, une faible perte de chaleur, assurant une production suffisante et une efficacité élevée. La chaudière est équipée de couvercles de boîte à fumée avant et arrière mobiles, ce qui rend l'entretien pratique.\n\nLa chaudière de la série WNS est équipée de brûleurs industriels avec de bonnes performances techniques, adoptant des technologies avancées telles que le réglage automatique de la combustion proportionnelle, le réglage automatique de l'alimentation en eau, le démarrage/arrêt du programme et le fonctionnement entièrement automatique. Elle dispose également de fonctions de protection automatique telles que les alarmes de niveau d'eau haut et bas, le niveau d'eau bas, la pression de vapeur ultra-élevée et la protection contre l'extinction. Ce type de chaudière se caractérise par une structure compacte, la sécurité et la fiabilité, un fonctionnement simple, une installation rapide, moins de pollution, un faible bruit et une efficacité élevée.",
      de: "Der Öl-/Gas-Dampfkessel der WNS-Serie ist ein horizontaler, schnell installierbarer Dreizug-Flammrohrkessel mit interner Verbrennung. Er verwendet eine Nassrückenstruktur mit versetztem Ofen. Das Hochtemperatur-Rauchgas spült nacheinander die Rauchrohre des zweiten und dritten Zuges und wird dann durch die hintere Rauchkammer und den Schornstein in die Atmosphäre abgegeben. Der Kessel verfügt über eine ausreichende Wärmeleistung: Die Heizfläche ist nach hohen Standards konfiguriert, um die effektive Wärme vollständig zu absorbieren, was zu einer niedrigen Abgastemperatur und einem geringen Wärmeverlust führt und eine ausreichende Leistung und einen hohen Wirkungsgrad gewährleistet. Der Kessel ist mit beweglichen vorderen und hinteren Rauchkastenabdeckungen ausgestattet, was die Wartung erleichtert.\n\nDer Kessel der WNS-Serie ist mit Industriebrennern mit guter technischer Leistung ausgestattet und verwendet fortschrittliche Technologien wie automatische proportionale Verbrennungseinstellung, automatische Wasserversorgungseinstellung, Programmstart/-stopp und vollautomatischen Betrieb. Er verfügt außerdem über automatische Schutzfunktionen wie Hoch- und Niedrigwasserstandalarme, Niedrigwasserstand, ultrahohen Dampfdruck und Flammenausfallschutz. Dieser Kesseltyp zeichnet sich durch kompakte Struktur, Sicherheit und Zuverlässigkeit, einfache Bedienung, schnelle Installation, weniger Umweltverschmutzung, geringen Geräuschpegel und hohe Effizienz aus.",
      ru: "Паровой котел серии WNS на жидком топливе/газе — это горизонтальный быстромонтируемый жаротрубный котел с внутренней камерой сгорания и трехходовой конструкцией. Он имеет смещенную топку с мокрой спинкой. Высокотемпературные дымовые газы последовательно проходят через дымовые трубы второго и третьего хода, затем выбрасываются в атмосферу через заднюю дымовую камеру и дымоход. Котел обладает достаточной тепловой мощностью: поверхность нагрева спроектирована по высоким стандартам для полного поглощения полезного тепла, что обеспечивает низкую температуру выхлопных газов, малые потери тепла, гарантируя достаточную производительность и высокий КПД. Котел оснащен подвижными крышками переднего и заднего дымовых ящиков, что облегчает обслуживание.\n\nКотел серии WNS оснащен промышленными горелками с хорошими техническими характеристиками, использующими передовые технологии, такие как автоматическая пропорциональная регулировка горения, автоматическая регулировка подачи воды, программный запуск/остановка и полностью автоматическая работа. Он также имеет функции автоматической защиты, такие как сигнализация высокого и низкого уровня воды, защита от низкого уровня воды, сверхвысокого давления пара и погасания пламени. Этот тип котла характеризуется компактной конструкцией, безопасностью и надежностью, простотой эксплуатации, быстрой установкой, меньшим загрязнением, низким уровнем шума и высокой эффективностью.",
      ar: "سلسلة غلايات البخار بالزيت/الغاز WNS هي غلاية أنابيب نارية أفقية سريعة التركيب ذات احتراق داخلي بثلاثة ممرات. تعتمد هيكل ظهر رطب لفرن مأوفست. تقوم غازات المداخن ذات درجة الحرارة العالية بغسل أنابيب الدخان للمرور الثاني والثالث تباعًا، ثم يتم تفريغها في الغلاف الجوي عبر غرفة الدخان الخلفية والمدخنة. تتمتع الغلاية بطاقة حرارية كافية: تم تكوين سطح التسخين وفقًا لمعايير عالية لامتصاص الحرارة الفعالة بالكامل، مما يؤدي إلى انخفاض درجة حرارة غاز العادم، وفقدان حرارة صغير، مما يضمن إخراجًا كافيًا وكفاءة عالية. تم تجهيز الغلاية بأغطية صندوق دخان أمامية وخلفية متحركة، مما يجعل الصيانة مريحة.\n\nتم تجهيز غلاية سلسلة WNS بشعلات صناعية ذات أداء تقني جيد، وتعتمد تقنيات متقدمة مثل الضبط التلقائي للاحتراق المتناسب، والضبط التلقائي لإمدادات المياه، وبدء/إيقاف البرنامج، والتشغيل التلقائي بالكامل. كما أن لديها وظائف حماية تلقائية مثل إنذارات مستوى المياه المرتفع والمنخفض، ومستوى المياه المنخفض، وضغط البخار الفائق الارتفاع، والحماية من انطفاء اللهب. يتميز هذا النوع من الغلايات بهيكل مضغوط، والسلامة والموثوقية، والتشغيل البسيط، والتركيب السريع، والتلوث الأقل، والضوضاء المنخفضة، والكفاءة العالية."
    },
    image: "/images/products/wns-series-steam-boiler.jpg",
    icon: "Flame",
    features: [
      {
        en: "Large Diameter Corrugated Furnace: Composed of a large-diameter full corrugated furnace, providing a large combustion space for complete fuel combustion, effective absorption of thermal expansion, and a large radiant heating surface.",
        zh: "大直径波纹炉胆：锅炉燃烧室有大直径全波纹炉胆组成，燃烧空间大，燃料燃烧彻底，有效吸收热膨胀，辐射受热面大。",
        es: "Hogar corrugado de gran diámetro: Compuesto por un hogar totalmente corrugado de gran diámetro, que proporciona un gran espacio de combustión.",
        fr: "Foyer ondulé de grand diamètre : Composé d'un foyer entièrement ondulé de grand diamètre, offrant un grand espace de combustion.",
        de: "Wellrohr-Flammrohr mit großem Durchmesser: Besteht aus einem Wellrohr mit großem Durchmesser und bietet einen großen Verbrennungsraum.",
        ru: "Гофрированная топка большого диаметра: Состоит из полностью гофрированной топки большого диаметра, обеспечивающей большое пространство для сгорания.",
        ar: "فرن مموج بقطر كبير: يتكون من فرن مموج بالكامل بقطر كبير، مما يوفر مساحة احتراق كبيرة."
      },
      {
        en: "High Steam Quality: Large boiler shell diameter and water capacity ensure strong adaptability to load changes and stable output. Large steam space volume provides sufficient height between the steam-water interface and the steam outlet, resulting in low steam humidity.",
        zh: "蒸汽品质高：锅壳直径大，水容量大，对负荷变化适应能力强，出力稳定；蒸汽空间容积大，汽水界面与蒸汽出口净距离足够高，蒸汽湿度小。",
        es: "Alta calidad de vapor: Gran diámetro de la carcasa y capacidad de agua aseguran adaptabilidad y salida estable.",
        fr: "Haute qualité de vapeur : Le grand diamètre de la coque et la capacité en eau assurent l'adaptabilité et une sortie stable.",
        de: "Hohe Dampfqualität: Großer Kesselmanteldurchmesser und Wasserkapazität sorgen für Anpassungsfähigkeit und stabile Leistung.",
        ru: "Высокое качество пара: Большой диаметр обечайки котла и объем воды обеспечивают адаптивность и стабильную производительность.",
        ar: "جودة بخار عالية: يضمن القطر الكبير لهيكل الغلاية وسعة المياه القدرة على التكيف والمخرجات المستقرة."
      },
      {
        en: "Sufficient Safety Water-Drop Time: The combustion chamber is positioned low, and the water level is determined in accordance with national regulations and strict international standards for water level fluctuation time, providing ample safe water-drop space to ensure boiler operation safety.",
        zh: "安全降水时间足：锅炉的燃烧室低位布置，水位确定符合国家规程，同时严格按国际通用标准的水位波动时间要求，具有充足的安全的降水空间，保证锅炉的运行安全。",
        es: "Tiempo suficiente de descenso de agua seguro: Cámara de combustión baja, amplio espacio seguro de descenso de agua.",
        fr: "Temps de chute d'eau de sécurité suffisant : Chambre de combustion basse, grand espace de chute d'eau de sécurité.",
        de: "Ausreichende Sicherheits-Wasserabfallzeit: Niedrig angeordnete Brennkammer, reichlich sicherer Wasserabfallraum.",
        ru: "Достаточное безопасное время падения уровня воды: Низкое расположение камеры сгорания, большой запас безопасного снижения уровня.",
        ar: "وقت كافٍ لخفض مستوى المياه بأمان: غرفة احتراق منخفضة، مساحة كافية لخفض مستوى المياه بأمان."
      },
      {
        en: "Multi-functional Safety Explosion-proof Device: An explosion-proof device connected to the furnace is installed on the boiler rear panel. It prevents high energy generated instantly during violent deflagration in the furnace from causing damage, can reset automatically, and also serves as a flame observation sight glass and inspection channel, facilitating furnace inspection and maintenance during operation.",
        zh: "多功能安全防爆装置：锅炉后面板上设有与炉膛连通的防爆装置，防止燃料在炉膛中发生剧烈爆燃时，泄放瞬间产生的高能量，能自动复位，同时具有观火视镜和检修通道的功能作用，利用运行中燃烧火焰的调整，炉膛检修、维护方便。",
        es: "Dispositivo multifuncional de seguridad a prueba de explosiones: Previene daños por deflagración y facilita la inspección.",
        fr: "Dispositif de sécurité multifonctionnel antidéflagrant : Empêche les dommages dus à la déflagration et facilite l'inspection.",
        de: "Multifunktionale Sicherheits-Explosionsschutzvorrichtung: Verhindert Schäden durch Verpuffung und erleichtert die Inspektion.",
        ru: "Многофункциональное взрывозащищенное устройство: Предотвращает повреждения при дефлаграции и облегчает осмотр.",
        ar: "جهاز أمان متعدد الوظائف مضاد للانفجار: يمنع التلف الناتج عن التضاغط ويسهل الفحص."
      },
      {
        en: "Convenient Internal Inspection: Manholes are provided at the top of the boiler, and handholes/manhole devices are provided at the lower middle parts of the front and rear ends, facilitating maintenance and cleaning of internal devices and the boiler bottom.",
        zh: "锅内检修方便：锅炉顶部设有人孔，锅炉前后端中下部分设有人孔装置，便于锅内装置及锅炉底部的维修和清理。",
        es: "Inspección interna conveniente: Bocas de hombre y de mano para fácil mantenimiento.",
        fr: "Inspection interne pratique : Trous d'homme et de main pour un entretien facile.",
        de: "Bequeme interne Inspektion: Mannlöcher und Handlöcher für einfache Wartung.",
        ru: "Удобный внутренний осмотр: Люки и лазы для простого обслуживания.",
        ar: "فحص داخلي مريح: فتحات دخول وفتحات يدوية لسهولة الصيانة."
      },
      {
        en: "Unique Front and Rear Smoke Box Sealing: The smoke box adopts double-opening doors for easy opening. It uses multi-stage labyrinth sealing with special sealing materials, providing good compressibility to block flue gas leakage, and can be reused.",
        zh: "前后烟箱密封独特：烟箱采用双开式烟箱门，开启方便，多级迷宫式密封，密封材质特制，压缩性好，隔阻烟气的泄露，可重复使用。",
        es: "Sellado único de caja de humo: Puertas de doble apertura y sellado laberíntico multietapa.",
        fr: "Étanchéité unique de la boîte à fumée : Portes à double ouverture et étanchéité labyrinthe à plusieurs étages.",
        de: "Einzigartige Rauchkastenabdichtung: Doppelt öffnende Türen und mehrstufige Labyrinthdichtung.",
        ru: "Уникальное уплотнение дымовых ящиков: Двустворчатые двери и многоступенчатое лабиринтное уплотнение.",
        ar: "ختم فريد لصندوق الدخان: أبواب مزدوجة الفتح وختم متاهة متعدد المراحل."
      },
      {
        en: "Reliable Pressure and Water Level Protection: Multiple control protections are set for boiler pressure and water level, as well as over-smoke temperature protection, ensuring the safety of boiler operation.",
        zh: "压力、水位保护可靠：锅炉压力、水位设置多重控制保护，以及超烟温保护，确保锅炉运行的安全。",
        es: "Protección confiable de presión y nivel de agua: Múltiples protecciones para operación segura.",
        fr: "Protection fiable de la pression et du niveau d'eau : Protections multiples pour un fonctionnement sûr.",
        de: "Zuverlässiger Druck- und Wasserstandsschutz: Mehrfachschutz für sicheren Betrieb.",
        ru: "Надежная защита давления и уровня воды: Многократная защита для безопасной работы.",
        ar: "حماية موثوقة للضغط ومستوى المياه: حماية متعددة للتشغيل الآمن."
      },
      {
        en: "High Level of Automatic Control: The boiler controller uses Siemens or Delixi electrical components with reliable performance. Three forms of controllers: standard type, LCD menu type with Chinese/English display, and touch screen type with human-machine dialogue remote control.",
        zh: "自动控制水平高：锅炉控制器采用西门子或德力西电气元件，性能可靠。控制器的三种形式：普通型、具有液晶显示的中英文菜单型、人机对话远程控制的触摸屏型。",
        es: "Alto nivel de control automático: Componentes Siemens/Delixi, opciones de pantalla táctil.",
        fr: "Haut niveau de contrôle automatique : Composants Siemens/Delixi, options d'écran tactile.",
        de: "Hohes Maß an automatischer Steuerung: Siemens/Delixi-Komponenten, Touchscreen-Optionen.",
        ru: "Высокий уровень автоматического управления: Компоненты Siemens/Delixi, варианты с сенсорным экраном.",
        ar: "مستوى عالٍ من التحكم التلقائي: مكونات Siemens/Delixi، خيارات شاشة اللمس."
      }
    ],
    faq: [
      {
        question: {
          en: "Is this boiler suitable for food processing?",
          zh: "这种锅炉适合食品加工吗？",
          es: "¿Es adecuada esta caldera para el procesamiento de alimentos?",
          fr: "Cette chaudière est-elle adaptée à la transformation des aliments ?",
          de: "Ist dieser Kessel für die Lebensmittelverarbeitung geeignet?",
          ru: "Подходит ли этот котел для пищевой промышленности?",
          ar: "هل هذه الغلاية مناسبة لتجهيز الأغذية؟"
        },
        answer: {
          en: "Yes, the WNS series provides stable, high-quality steam, making it ideal for sterilization and processing in the food industry.",
          zh: "是的，WNS系列提供稳定、高质量的蒸汽，非常适合食品行业的杀菌和加工。",
          es: "Sí, la serie WNS proporciona vapor estable y de alta calidad, ideal para esterilización y procesamiento en la industria alimentaria.",
          fr: "Oui, la série WNS fournit une vapeur stable et de haute qualité, idéale pour la stérilisation et la transformation dans l'industrie alimentaire.",
          de: "Ja, die WNS-Serie liefert stabilen, hochwertigen Dampf, ideal für Sterilisation und Verarbeitung in der Lebensmittelindustrie.",
          ru: "Да, серия WNS обеспечивает стабильный, высококачественный пар, идеально подходящий для стерилизации и переработки в пищевой промышленности.",
          ar: "نعم، توفر سلسلة WNS بخارًا مستقرًا وعالي الجودة، مما يجعلها مثالية للتعقيم والمعالجة في صناعة الأغذية."
        }
      },
      {
        question: {
          en: "How efficient is this boiler?",
          zh: "这种锅炉的效率如何？",
          es: "¿Qué tan eficiente es esta caldera?",
          fr: "Quelle est l'efficacité de cette chaudière ?",
          de: "Wie effizient ist dieser Kessel?",
          ru: "Насколько эффективен этот котел?",
          ar: "ما هي كفاءة هذه الغلاية؟"
        },
        answer: {
          en: "With the integrated condenser/economizer, thermal efficiency can reach >98%, significantly reducing fuel costs.",
          zh: "配合集成的冷凝器/节能器，热效率可达>98%，显著降低燃料成本。",
          es: "Con el condensador/economizador integrado, la eficiencia térmica puede alcanzar el >98%, reduciendo significativamente los costos de combustible.",
          fr: "Avec le condenseur/économiseur intégré, l'efficacité thermique peut atteindre >98 %, réduisant considérablement les coûts de carburant.",
          de: "Mit dem integrierten Kondensator/Economizer kann der thermische Wirkungsgrad >98% erreichen, was die Brennstoffkosten erheblich senkt.",
          ru: "С интегрированным конденсатором/экономайзером тепловой КПД может достигать >98%, что значительно снижает затраты на топливо.",
          ar: "مع المكثف/المقتصد المدمج، يمكن أن تصل الكفاءة الحرارية إلى >98٪، مما يقلل بشكل كبير من تكاليف الوقود."
        }
      }
    ],
    specs: [
      {
        model: "WNS0.5",
        capacity: "0.5 T/H",
        pressure: "1.25 MPa",
        efficiency: "92.5%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "12.964 m²",
        condenserArea: "10.56 m²",
        exhaustTemp: "155.93°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "3.47 T",
        waterCapacity: "1.83 T",
        fuelConsumption: "41.34 Nm³/h (Gas)",
        dimensions: "2610 x 1200 x 1616 mm"
      },
      {
        model: "WNS1",
        capacity: "1 T/H",
        pressure: "1.25 MPa",
        efficiency: "90.63%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "28.6 m²",
        condenserArea: "21.12 m²",
        exhaustTemp: "156.43°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "6.8 T",
        waterCapacity: "3.6 T",
        fuelConsumption: "85.6 Nm³/h (Gas)",
        dimensions: "4100 x 2200 x 2200 mm"
      },
      {
        model: "WNS1.5",
        capacity: "1.5 T/H",
        pressure: "1.25 MPa",
        efficiency: "92.91%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "34.7 m²",
        exhaustTemp: "144.9°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "6.97 T",
        waterCapacity: "2.6 T",
        fuelConsumption: "123.47 Nm³/h (Gas)",
        dimensions: "4130 x 1900 x 2160 mm"
      },
      {
        model: "WNS2",
        capacity: "2 T/H",
        pressure: "1.25 MPa",
        efficiency: "90.4%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "57.63 m²",
        exhaustTemp: "164.7°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "8.5 T",
        waterCapacity: "4.9 T",
        fuelConsumption: "172.8 Nm³/h (Gas)",
        dimensions: "4450 x 2800 x 2120 mm"
      },
      {
        model: "WNS4",
        capacity: "4 T/H",
        pressure: "1.25 MPa",
        efficiency: "90.6%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "107.16 m²",
        exhaustTemp: "158.27°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "11.6 T",
        waterCapacity: "9.3 T",
        fuelConsumption: "321.2 Nm³/h (Gas)",
        dimensions: "4800 x 3100 x 3050 mm"
      },
      {
        model: "WNS6",
        capacity: "6 T/H",
        pressure: "1.25 MPa",
        efficiency: "90.8%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "197.61 m²",
        exhaustTemp: "156.71°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "16.6 T",
        waterCapacity: "12.1 T",
        fuelConsumption: "498 Nm³/h (Gas)",
        dimensions: "5400 x 3100 x 3320 mm"
      },
      {
        model: "WNS8",
        capacity: "8 T/H",
        pressure: "1.25 MPa",
        efficiency: "94.2%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "291.33 m²",
        exhaustTemp: "100°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "21.5 T",
        waterCapacity: "15.3 T",
        fuelConsumption: "631.5 Nm³/h (Gas)",
        dimensions: "6750 x 2480 x 3410 mm"
      },
      {
        model: "WNS15",
        capacity: "15 T/H",
        pressure: "1.25 MPa",
        efficiency: "93.47%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "427.15 m²",
        exhaustTemp: "133.2°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "24.3 T",
        waterCapacity: "40 T",
        fuelConsumption: "1094.5 Nm³/h (Gas)",
        dimensions: "7420 x 3340 x 3510 mm"
      },
      {
        model: "WNS20",
        capacity: "20 T/H",
        pressure: "1.25 MPa",
        efficiency: "93.12%",
        fuel: "Gas / Oil",
        steamTemp: "194°C",
        feedWaterTemp: "20°C",
        heatingSurface: "517.2 m²",
        exhaustTemp: "140.93°C",
        blowdownRate: "5%",
        ambientTemp: "20°C",
        weight: "50 T",
        waterCapacity: "30 T",
        fuelConsumption: "1598.5 Nm³/h (Gas)",
        dimensions: "7965 x 3730 x 3960 mm"
      }
    ]
  },
  // 2. SZS Water Tube Steam Boiler (Existing)
  {
    id: "szs-gas-steam-boiler",
    category: "steam",
    name: {
      en: "SZS Series Water Tube Steam Boiler",
      zh: "SZS系列水管蒸汽锅炉",
      es: "Caldera de Vapor Acuotubular Serie SZS",
      fr: "Chaudière à Vapeur à Tubes d'Eau Série SZS",
      de: "SZS-Serie Wasserrohr-Dampfkessel",
      ru: "Водотрубный паровой котел серии SZS",
      ar: "غلاية بخار أنابيب المياه سلسلة SZS"
    },
    description: {
      en: "Double-drum D-type layout, suitable for large capacity requirements.",
      zh: "双锅筒D型布置，适用于大容量需求。",
      es: "Diseño tipo D de doble tambor, adecuado para requisitos de gran capacidad.",
      fr: "Disposition de type D à double tambour, adaptée aux besoins de grande capacité.",
      de: "Doppeltrommel-D-Typ-Layout, geeignet für große Kapazitätsanforderungen.",
      ru: "Двухбарабанная D-образная компоновка, подходит для большой мощности.",
      ar: "تخطيط من النوع D مزدوج الأسطوانة، مناسب لمتطلبات السعة الكبيرة."
    },
    fullDescription: {
      en: "The SZS series boiler features a double-drum longitudinal 'D' type layout with a membrane water wall structure. The right side is the furnace, and the left side is the convection tube bundle. It is fixed on the chassis through movable supports in the middle and at both ends of the lower drum, ensuring overall expansion towards both ends.\n\nThe furnace is surrounded by narrow-pitch membrane water walls, which completely seal and separate the furnace from the convection tube bundle. The rear of the convection tube bundle uses a staggered structure, while the front uses an in-line structure. The flue gas generated by combustion enters the burnout chamber and convection tube bundle, then turns to the front left side to enter the spiral finned tube economizer and condenser, and finally discharges into the atmosphere.\n\nThe SZS oil/gas boiler adopts a membrane wall structure for both the furnace water wall and the convection flue, ensuring good sealing, high heat absorption, and reducing refractory brick maintenance. It uses high thermal resistance material for insulation. Equipped with an economizer and condenser at the tail, it effectively reduces exhaust gas temperature and achieves high thermal efficiency. It holds a new utility model patent: A Three-pass Low Nitrogen Condensing Steam Boiler; Patent No.: ZL 2020 2 0046462.8.\n\nThe SZS boiler meets strict low nitrogen emission standards (NOx ≤ 30mg/Nm³), making it suitable for regions with strict environmental policies like Beijing and Zhengzhou. Widely used in chemical, paper making, machinery, food processing, pharmaceutical, brewing, and construction material industries.",
      zh: "SZS系列锅炉本体为双锅筒、纵置式、室燃D型布置结构，右侧为炉膛，左侧为对流管束。通过下锅筒中间和两端的活动支座固定在本体底盘上，并保证锅炉整体向两端膨胀。炉膛四周为窄间距管膜式水冷壁，炉膛左侧的膜式水冷壁将炉膛与对流管束完全密封隔开，对流管束区后部为拉稀的措列结构。锅炉前部为顺列结构，炉膛燃烧产生烟气从炉膛尾部的出烟口进入燃尽室、对流管束区，然后从锅炉左侧前部转向进入螺旋翅片管节能器和冷凝器，最后进入烟道入烟囱排向大气。\n\nSZS型油气锅炉炉膛水冷壁及对流烟道全部采用膜式壁结构，密封性好，热吸收率高，且有效降低耐火砖的使用及维修工作量。锅炉采用高热阻材料作为绝热层，保温性能良好。尾部布置有节能冷凝器，能有效降低排烟温度，锅炉热效率高。拥有新型专利证书，实用新型名称：一种三回程低氮冷凝蒸汽锅炉；专利号：ZL 2020 2 0046462.8。\n\nSZS燃油气锅炉符合目前我国低氮排放标准要求(NOx≦30mg/NM3)，可以很好的适配环境政策较为严苛的北京、郑州等地区。广泛适用于化工、造纸、机械、食品加工、医药生产、酿酒行业、建筑物料加工、防火材料加工等行业。",
      es: "La caldera de la serie SZS presenta un diseño longitudinal tipo 'D' de doble tambor con una estructura de pared de agua de membrana. El lado derecho es el horno y el lado izquierdo es el haz de tubos de convección. Está fijado en el chasis a través de soportes móviles en el medio y en ambos extremos del tambor inferior, lo que garantiza una expansión general hacia ambos extremos.\n\nEl horno está rodeado por paredes de agua de membrana de paso estrecho, que sellan y separan completamente el horno del haz de tubos de convección. La parte trasera del haz de tubos de convección utiliza una estructura escalonada, mientras que la parte delantera utiliza una estructura en línea. Los gases de combustión generados entran en la cámara de combustión y el haz de tubos de convección, luego giran hacia el lado frontal izquierdo para entrar en el economizador y condensador de tubo de aleta espiral, y finalmente descargan a la atmósfera.\n\nLa caldera de aceite/gas SZS adopta una estructura de pared de membrana tanto para la pared de agua del horno como para la chimenea de convección, lo que garantiza un buen sellado, una alta absorción de calor y reduce el mantenimiento del ladrillo refractario. Utiliza material de alta resistencia térmica para el aislamiento. Con economizador y condensador en la cola, reduce eficazmente la temperatura de los gases de escape y logra una alta eficiencia térmica. Patente: Una caldera de vapor de condensación de bajo nitrógeno de tres pasos; Patente No.: ZL 2020 2 0046462.8.\n\nLa caldera SZS cumple con los estrictos estándares de bajas emisiones de nitrógeno (NOx ≤ 30mg/Nm³).",
      fr: "La chaudière de la série SZS présente une disposition longitudinale de type 'D' à double tambour avec une structure de paroi d'eau à membrane. Le côté droit est le four et le côté gauche est le faisceau de tubes de convection. Elle est fixée sur le châssis par des supports mobiles au milieu et aux deux extrémités du tambour inférieur, assurant une expansion globale vers les deux extrémités.\n\nLe four est entouré de parois d'eau à membrane à pas étroit, qui scellent et séparent complètement le four du faisceau de tubes de convection. L'arrière du faisceau de tubes de convection utilise une structure décalée, tandis que l'avant utilise une structure en ligne. Les gaz de combustion générés entrent dans la chambre de combustion et le faisceau de tubes de convection, puis tournent vers le côté avant gauche pour entrer dans l'économiseur à tubes à ailettes spiralées et le condenseur, et enfin se déversent dans l'atmosphère.\n\nLa chaudière fioul/gaz SZS adopte une structure de paroi à membrane pour la paroi d'eau du four et le carneau de convection, assurant une bonne étanchéité, une absorption thermique élevée et réduisant l'entretien des briques réfractaires. Elle utilise un matériau à haute résistance thermique pour l'isolation. Équipée d'un économiseur et d'un condenseur à l'arrière, elle réduit efficacement la température des gaz d'échappement et atteint une efficacité thermique élevée. Brevet : Une chaudière à vapeur à condensation à faible teneur en azote à trois passes ; Brevet n° : ZL 2020 2 0046462.8.\n\nLa chaudière SZS répond aux normes strictes d'émission d'azote (NOx ≤ 30mg/Nm³).",
      de: "Der Kessel der SZS-Serie verfügt über ein Doppeltrommel-Längs-'D'-Typ-Layout mit einer Membranwasserwandstruktur. Die rechte Seite ist der Ofen und die linke Seite das Konvektionsrohrbündel. Er ist über bewegliche Stützen in der Mitte und an beiden Enden der unteren Trommel am Fahrgestell befestigt, was eine allgemeine Ausdehnung zu beiden Enden gewährleistet.\n\nDer Ofen ist von engmaschigen Membranwasserwänden umgeben, die den Ofen vollständig abdichten und vom Konvektionsrohrbündel trennen. Die Rückseite des Konvektionsrohrbündels verwendet eine versetzte Struktur, während die Vorderseite eine Inline-Struktur verwendet. Das durch die Verbrennung erzeugte Rauchgas tritt in die Ausbrennkammer und das Konvektionsrohrbündel ein, dreht sich dann zur vorderen linken Seite, um in den Spiralrippenrohr-Economizer und Kondensator einzutreten, und wird schließlich in die Atmosphäre abgegeben.\n\nDer SZS-Öl-/Gaskessel verwendet eine Membranwandstruktur sowohl für die Ofenwasserwand als auch für den Konvektionsrauch, was eine gute Abdichtung, eine hohe Wärmeaufnahme und eine Reduzierung der Wartung von feuerfesten Ziegeln gewährleistet. Er verwendet Material mit hohem Wärmewiderstand zur Isolierung. Ausgestattet mit einem Economizer und Kondensator am Ende reduziert er effektiv die Abgastemperatur und erreicht einen hohen thermischen Wirkungsgrad. Patent: Ein Dreizug-Kondensationsdampfkessel mit niedrigem Stickstoffgehalt; Patent Nr.: ZL 2020 2 0046462.8.\n\nDer SZS-Kessel erfüllt strenge Standards für niedrige Stickstoffemissionen (NOx ≤ 30mg/Nm³).",
      ru: "Котел серии SZS имеет двухбарабанную продольную D-образную компоновку с мембранной конструкцией водяной стенки. Правая сторона — топочная камера, левая — конвективный пучок труб. Он закреплен на шасси через подвижные опоры в середине и на обоих концах нижнего барабана, обеспечивая общее расширение к обоим концам.\n\nТопка окружена мембранными водяными стенками с узким шагом, которые полностью герметизируют и отделяют топку от конвективного пучка труб. Задняя часть конвективного пучка труб использует шахматную структуру, а передняя — рядную. Дымовые газы, образующиеся при сгорании, поступают в камеру дожигания и конвективный пучок труб, затем поворачивают к передней левой стороне для входа в экономайзер со спиральными ребрами и конденсатор, и, наконец, выбрасываются в атмосферу.\n\nКотел SZS на жидком топливе/газе использует мембранную структуру стенки как для водяной стенки топки, так и для конвективного газохода, обеспечивая хорошую герметичность, высокое теплопоглощение и сокращение обслуживания огнеупорного кирпича. Использует материал с высоким термическим сопротивлением для изоляции. Оснащенный экономайзером и конденсатором в хвостовой части, он эффективно снижает температуру выхлопных газов и достигает высокого теплового КПД. Патент: Трехходовой конденсационный паровой котел с низким содержанием азота; Патент №: ZL 2020 2 0046462.8.\n\nКотел SZS соответствует строгим стандартам низких выбросов азота (NOx ≤ 30 мг/Нм³).",
      ar: "تتميز غلاية سلسلة SZS بتخطيط طولي مزدوج الأسطوانة من النوع 'D' مع هيكل جدار مائي غشائي. الجانب الأيمن هو الفرن، والجانب الأيسر هو حزمة أنابيب الحمل الحراري. يتم تثبيته على الهيكل من خلال دعامات متحركة في المنتصف وعند كلا طرفي الأسطوانة السفلية، مما يضمن التوسع الكلي نحو كلا الطرفين.\n\nالفرن محاط بجدران مائية غشائية ضيقة المسافة، والتي تغلق الفرن تمامًا وتفصله عن حزمة أنابيب الحمل الحراري. يستخدم الجزء الخلفي من حزمة أنابيب الحمل الحراري هيكلًا متدرجًا، بينما يستخدم الجزء الأمامي هيكلًا في الخط. تدخل غازات المداخن الناتجة عن الاحتراق إلى غرفة الاحتراق وحزمة أنابيب الحمل الحراري، ثم تتجه إلى الجانب الأيسر الأمامي للدخول إلى المقتصد والمكثف ذو الأنبوب المزعنف الحلزوني، وتفريغها أخيرًا في الغلاف الجوي.\n\nتعتمد غلاية الزيت/الغاز SZS هيكل جدار غشائي لكل من جدار مياه الفرن ومداخن الحمل الحراري، مما يضمن ختمًا جيدًا، وامتصاصًا عاليًا للحرارة، وتقليل صيانة الطوب الحراري. يستخدم مواد ذات مقاومة حرارية عالية للعزل. مجهز بمقتصد ومكثف في الذيل، فهو يقلل بشكل فعال من درجة حرارة غاز العادم ويحقق كفاءة حرارية عالية. براءة اختراع: غلاية بخار مكثفة منخفضة النيتروجين بثلاث تمريرات؛ براءة اختراع رقم: ZL 2020 2 0046462.8.\n\nتلبي غلاية SZS معايير انبعاثات النيتروجين المنخفضة الصارمة (NOx ≤ 30mg/Nm³)."
    },
    image: "/images/products/szs-water-tube-boiler-premium.jpg",
    icon: "Factory",
    faq: [
      {
        question: {
          en: "What is the difference between WNS and SZS series?",
          zh: "WNS系列和SZS系列有什么区别？",
          es: "¿Cuál es la diferencia entre las series WNS y SZS?",
          fr: "Quelle est la différence entre les séries WNS et SZS ?",
          de: "Was ist der Unterschied zwischen den Serien WNS und SZS?",
          ru: "В чем разница между сериями WNS и SZS?",
          ar: "ما الفرق بين سلسلة WNS و SZS؟"
        },
        answer: {
          en: "WNS is a horizontal fire-tube boiler suitable for capacities up to 20 tons, offering compact size. SZS is a water-tube boiler suitable for larger capacities (up to 100+ tons) and higher pressures.",
          zh: "WNS是卧式火管锅炉，适用于20吨以下的容量，体积紧凑。SZS是水管锅炉，适用于更大容量（高达100吨以上）和更高压力的需求。",
          es: "WNS es una caldera pirotubular horizontal adecuada para capacidades de hasta 20 toneladas, de tamaño compacto. SZS es acuatubular, para mayores capacidades y presiones.",
          fr: "WNS est une chaudière à tubes de fumée horizontale adaptée aux capacités jusqu'à 20 tonnes. SZS est une chaudière à tubes d'eau adaptée aux grandes capacités et pressions élevées.",
          de: "WNS ist ein horizontaler Flammrohrkessel für Kapazitäten bis 20 Tonnen, kompakt. SZS ist ein Wasserrohrkessel für größere Kapazitäten und höhere Drücke.",
          ru: "WNS - это горизонтальный жаротрубный котел до 20 тонн. SZS - водотрубный котел для больших мощностей и высоких давлений.",
          ar: "WNS هي غلاية أنابيب نارية أفقية مناسبة لـ 20 طنًا. SZS هي غلاية أنابيب مياه مناسبة للسعات الكبيرة والضغوط العالية."
        }
      },
      {
        question: {
          en: "How does the 'D' type layout benefit the boiler?",
          zh: "'D'型布置对锅炉有什么好处？",
          es: "¿Cómo beneficia el diseño tipo 'D' a la caldera?",
          fr: "En quoi la disposition de type 'D' profite-t-elle à la chaudière ?",
          de: "Welchen Vorteil hat das 'D'-Typ-Layout für den Kessel?",
          ru: "В чем преимущество D-образной компоновки?",
          ar: "كيف يفيد التخطيط من النوع 'D' الغلاية؟"
        },
        answer: {
          en: "The D-type layout ensures good water circulation, sufficient heating surface, and stable operation. It also allows for a compact footprint while maintaining high efficiency.",
          zh: "D型布置确保了良好的水循环、充足的受热面和稳定运行。它还可以在保持高效率的同时实现紧凑的占地面积。",
          es: "El diseño tipo D asegura una buena circulación del agua y operación estable. También permite una huella compacta manteniendo alta eficiencia.",
          fr: "La disposition de type D assure une bonne circulation de l'eau et un fonctionnement stable, tout en permettant un encombrement réduit et une efficacité élevée.",
          de: "Das D-Typ-Layout sorgt für eine gute Wasserzirkulation und stabilen Betrieb. Es ermöglicht auch eine kompakte Stellfläche bei hoher Effizienz.",
          ru: "D-образная компоновка обеспечивает хорошую циркуляцию воды и стабильную работу. Это также позволяет уменьшить занимаемую площадь при сохранении высокой эффективности.",
          ar: "يضمن التخطيط من النوع D دورانًا جيدًا للمياه وتشغيلًا مستقرًا. كما يسمح بمساحة مضغوطة مع الحفاظ على كفاءة عالية."
        }
      }
    ],
    features: [
      {
        en: "Ultra-large Combustion Chamber: Ensures complete fuel combustion, high efficiency, and low pollution.",
        zh: "超大燃烧室设计：使燃料燃烧充分，燃烧效率高，污染小。",
        es: "Cámara de combustión ultra grande: Garantiza una combustión completa, alta eficiencia y baja contaminación.",
        fr: "Chambre de combustion ultra-large : Assure une combustion complète, une efficacité élevée et une faible pollution.",
        de: "Ultragroße Brennkammer: Sorgt für vollständige Verbrennung, hohe Effizienz und geringe Umweltverschmutzung.",
        ru: "Сверхбольшая камера сгорания: Обеспечивает полное сгорание топлива, высокую эффективность и низкий уровень загрязнения.",
        ar: "غرفة احتراق كبيرة جدًا: تضمن احتراقًا كاملاً للوقود وكفاءة عالية وتلوثًا منخفضًا."
      },
      {
        en: "Sufficient Heating Surface: Large steam-water space ensures stable boiler parameters.",
        zh: "富余受热面：具有足够大的汽水空间，保证锅炉参数稳定。",
        es: "Superficie de calentamiento suficiente: Gran espacio vapor-agua asegura parámetros estables.",
        fr: "Surface de chauffe suffisante : Le grand espace vapeur-eau assure des paramètres stables.",
        de: "Ausreichende Heizfläche: Großer Dampf-Wasser-Raum sorgt für stabile Kesselparameter.",
        ru: "Достаточная поверхность нагрева: Большое пароводяное пространство обеспечивает стабильные параметры котла.",
        ar: "سطح تسخين كافٍ: تضمن مساحة البخار والماء الكبيرة معلمات غلاية مستقرة."
      },
      {
        en: "Safety Pressure Relief: Explosion-proof door on furnace top releases energy in case of deflagration.",
        zh: "安全泄压：炉顶设有防爆门，能够泄放炉膛爆炸释放的能量。",
        es: "Alivio de presión de seguridad: Puerta a prueba de explosiones en la parte superior del horno.",
        fr: "Décharge de pression de sécurité : Porte antidéflagrante sur le dessus du four.",
        de: "Sicherheitsdruckentlastung: Explosionsgeschützte Tür am Ofendach.",
        ru: "Безопасный сброс давления: Взрывозащищенная дверь на верху топки.",
        ar: "تخفيف ضغط الأمان: باب مقاوم للانفجار على سطح الفرن يطلق الطاقة في حالة التضاغط."
      },
      {
        en: "Automatic Regulation: Continuous electric feed water regulation with high/low water level alarms and interlock protection.",
        zh: "自动调节：给水采用连续电动调节，并具有高低水位报警、联锁保护功能。",
        es: "Regulación automática: Regulación eléctrica continua del agua de alimentación con alarmas.",
        fr: "Régulation automatique : Régulation électrique continue de l'eau d'alimentation avec alarmes.",
        de: "Automatische Regelung: Kontinuierliche elektrische Speisewasserregelung mit Alarmen.",
        ru: "Автоматическое регулирование: Непрерывное электрическое регулирование питательной воды с сигнализацией.",
        ar: "التنظيم التلقائي: تنظيم مياه التغذية الكهربائية المستمر مع إنذارات مستوى المياه المرتفع/المنخفض."
      },
      {
        en: "Precise Temperature Control: Some models use spray desuperheaters for sensitive and wide-range temperature adjustment.",
        zh: "精准调温：部分炉型采用喷水减温器，温度调节灵敏，调温幅度大。",
        es: "Control de temperatura preciso: Algunos modelos usan atemperadores de pulverización.",
        fr: "Contrôle précis de la température : Certains modèles utilisent des désurchauffeurs à pulvérisation.",
        de: "Präzise Temperaturregelung: Einige Modelle verwenden Sprühenthitzer.",
        ru: "Точный контроль температуры: В некоторых моделях используются впрыскивающие пароохладители.",
        ar: "تحكم دقيق في درجة الحرارة: تستخدم بعض النماذج مزيلات التحميص بالرش لضبط درجة الحرارة."
      },
      {
        en: "Compact Structure: Quick-install structure shortens installation cycle and facilitates transport.",
        zh: "结构紧凑：考虑到整体运输要求，设计布置紧凑。采用快装结构，有效缩短安装周期。",
        es: "Estructura compacta: La estructura de instalación rápida acorta el ciclo de instalación.",
        fr: "Structure compacte : La structure à installation rapide raccourcit le cycle d'installation.",
        de: "Kompakte Struktur: Schnellinstallationsstruktur verkürzt den Installationszyklus.",
        ru: "Компактная конструкция: Быстромонтируемая конструкция сокращает цикл установки.",
        ar: "هيكل مدمج: هيكل سريع التركيب يقصر دورة التثبيت ويسهل النقل."
      }
    ],
    specs: [
      {
        model: "SZS2",
        capacity: "2 T/H",
        pressure: "2.5 MPa",
        efficiency: "> 98%",
        fuel: "Gas / Oil",
        steamTemp: "225°C",
        feedWaterTemp: "20°C",
        heatingSurface: "46.22 m² (Main)",
        economizerArea: "23.3 m²",
        condenserArea: "15.0 m²",
        weight: "20.4 T",
        fuelConsumption: "144 Nm³/h (Gas) / 124 Kg/h (Oil)",
        dimensions: "5.7 x 1.97 x 3.60 m"
      },
      {
        model: "SZS4",
        capacity: "4 T/H",
        pressure: "2.5 MPa",
        efficiency: "> 98%",
        fuel: "Gas / Oil",
        steamTemp: "225°C",
        feedWaterTemp: "20°C",
        heatingSurface: "90.22 m² (Main)",
        economizerArea: "35.8 m²",
        condenserArea: "25.4 m²",
        weight: "25.0 T",
        fuelConsumption: "288 Nm³/h (Gas) / 244 Kg/h (Oil)",
        dimensions: "5.76 x 41.0 x 3.70 m"
      },
      {
        model: "SZS6",
        capacity: "6 T/H",
        pressure: "1.25/1.6/2.5 MPa",
        efficiency: "> 98%",
        fuel: "Gas / Oil",
        steamTemp: "194/204/225°C",
        feedWaterTemp: "20°C",
        heatingSurface: "125.60 m² (Main)",
        economizerArea: "63.4 m²",
        condenserArea: "41.5 m²",
        weight: "32.0 T",
        fuelConsumption: "432 Nm³/h (Gas) / 372 Kg/h (Oil)",
        dimensions: "8.00 x 3.60 x 4.70 m"
      },
      {
        model: "SZS10",
        capacity: "10 T/H",
        pressure: "1.25/1.6/2.5 MPa",
        efficiency: "> 98%",
        fuel: "Gas / Oil",
        steamTemp: "194/204/225°C",
        feedWaterTemp: "104/20°C",
        heatingSurface: "205.56 m² (Main)",
        economizerArea: "132.2 m²",
        condenserArea: "62.8 m²",
        weight: "40.0 T",
        fuelConsumption: "720 Nm³/h (Gas) / 620 Kg/h (Oil)",
        dimensions: "7.87 x 3.40 x 3.40 m"
      },
      {
        model: "SZS15",
        capacity: "15 T/H",
        pressure: "1.25/1.6/2.5 MPa",
        efficiency: "> 98%",
        fuel: "Gas / Oil",
        steamTemp: "194/204/225°C",
        feedWaterTemp: "104/20°C",
        heatingSurface: "216.84 m² (Main)",
        economizerArea: "283.6 m²",
        condenserArea: "101.1 m²",
        weight: "45.0 T",
        fuelConsumption: "1080 Nm³/h (Gas) / 930 Kg/h (Oil)",
        dimensions: "8.90 x 3.90 x 4.00 m"
      },
      {
        model: "SZS20",
        capacity: "20 T/H",
        pressure: "1.25/1.6/2.5 MPa",
        efficiency: "> 98%",
        fuel: "Gas / Oil",
        steamTemp: "194/204/225°C",
        feedWaterTemp: "104/20°C",
        heatingSurface: "271.50 m² (Main)",
        economizerArea: "411.2 m²",
        condenserArea: "134.7 m²",
        weight: "50.6 T",
        fuelConsumption: "1440 Nm³/h (Gas) / 1240 Kg/h (Oil)",
        dimensions: "8.90 x 3.90 x 4.00 m"
      },
      {
        model: "SZS25",
        capacity: "25 T/H",
        pressure: "1.25/1.6/2.5 MPa",
        efficiency: "> 98%",
        fuel: "Gas / Oil",
        steamTemp: "194/204/225°C",
        feedWaterTemp: "104/20°C",
        heatingSurface: "285.24 m² (Main)",
        economizerArea: "504.8 m²",
        condenserArea: "168.3 m²",
        weight: "60.0 T",
        fuelConsumption: "1800 Nm³/h (Gas) / 1550 Kg/h (Oil)",
        dimensions: "10.5 x 4.12 x 4.15 m"
      },
      {
        model: "SZS30",
        capacity: "30 T/H",
        pressure: "1.25/1.6/2.5 MPa",
        efficiency: "> 98%",
        fuel: "Gas / Oil",
        steamTemp: "194/204/225°C",
        feedWaterTemp: "104/20°C",
        heatingSurface: "392.34 m² (Main)",
        economizerArea: "471.2 m²",
        condenserArea: "252.4 m²",
        weight: "68.2 T",
        fuelConsumption: "2160 Nm³/h (Gas) / 1860 Kg/h (Oil)",
        dimensions: "10.5 x 4.30 x 4.23 m"
      }
    ]
  },
  // 3. DZL Biomass/Coal Boiler (Existing)
  {
    id: "dzl-biomass-boiler",
    category: "steam",
    name: {
      en: "DZL Series Biomass/Coal Fired Boiler",
      zh: "DZL系列生物质/燃煤锅炉",
      es: "Caldera de Biomasa/Carbón Serie DZL",
      fr: "Chaudière Biomasse/Charbon Série DZL",
      de: "DZL-Serie Biomasse-/Kohlekessel",
      ru: "Котел серии DZL на биомассе/угле",
      ar: "غلاية سلسلة DZL تعمل بالكتلة الحيوية/الفحم"
    },
    description: {
      en: "Single-drum longitudinal type chain grate boiler, widely used for heating and drying.",
      zh: "单锅筒纵置式链条炉排锅炉，广泛用于供暖和干燥。",
      es: "Caldera de parrilla de cadena longitudinal de un solo tambor, ampliamente utilizada para calefacción y secado.",
      fr: "Chaudière à grille à chaîne longitudinale à un seul tambour, largement utilisée pour le chauffage et le séchage.",
      de: "Einzeltrommel-Längskettenrostkessel, weit verbreitet für Heizung und Trocknung.",
      ru: "Однобарабанный продольный котел с цепной решеткой, широко используемый для отопления и сушки.",
      ar: "غلاية شبكة سلسلة من النوع الطولي بأسطوانة واحدة، تستخدم على نطاق واسع للتدفئة والتجفيف."
    },
    fullDescription: {
      en: "The DZL single-drum longitudinal chain grate boiler features an arched tube sheet and threaded smoke tubes, transforming the drum from a quasi-rigid body into a quasi-elastic structure. It eliminates stays in the tube sheet area, reducing stress. The smoke tubes in the tube sheet are changed from two-pass to single-pass, solving the problem of tube sheet cracks.\n\nThe lower part of the DZL biomass boiler drum is arranged with riser tube rows, eliminating the dead water zone at the bottom of the drum, preventing sludge deposition, and ensuring good cooling of the high-temperature zone of the drum, thus preventing bulging at the bottom. The boiler uses high-efficiency heat transfer threaded smoke tubes to achieve enhanced heat transfer, resulting in fast heating and pressure boosting, and improved thermal efficiency.\n\nThe DZL boiler is compact with a small footprint, saving infrastructure investment. The unique double-layer secondary air design improves biomass fuel ignition conditions. Independent wind chambers ensure reasonable air distribution, forming an aerodynamic field conducive to combustion in the furnace, resulting in high combustion temperature and efficiency.",
      zh: "DZL单锅筒纵置式链条炉排锅炉采用拱型管板与螺纹烟管组成锅筒，使锅筒由准钢性体变为准弹性结构，取消了管板区的拉撑件，减少了应力。管板内烟管由两回程改回单回程，解决了管板裂纹的难题。\n\nDZL单锅筒纵置式链条炉排生物质锅炉锅筒下部由于布置了升管排，消除了锅筒底部的死水区，使泥渣不易沉积，锅筒高温区能良好的冷却，预防了锅炉下部鼓包。该锅炉采用高效传热螺纹烟管，获得强化传热效果，达到锅炉升温、升压快的特点，提高了锅炉的热效率。\n\nDZL单锅筒纵置式链条炉排锅炉结构紧凑、与同类型锅炉相比较，外形尺寸小，节省锅炉房基建投资。独特的双层二次风设计，改善了生物质燃料着火条件，采用独立风室，达到了合理布风，使炉膛内形成一个有利于燃烧的空气动力场，使得燃烧温度高、燃烧效率高。",
      es: "La caldera de parrilla de cadena longitudinal de un solo tambor DZL cuenta con una hoja de tubo arqueada y tubos de humo roscados, transformando el tambor de un cuerpo casi rígido en una estructura casi elástica. Elimina los tirantes en el área de la hoja de tubo, reduciendo el estrés. Los tubos de humo en la placa de tubos cambian de dos pasos a un solo paso, resolviendo el problema de las grietas en la placa de tubos.\n\nLa parte inferior del tambor de la caldera de biomasa DZL está dispuesta con filas de tubos ascendentes, eliminando la zona de agua muerta en la parte inferior del tambor, evitando la deposición de lodos y asegurando un buen enfriamiento de la zona de alta temperatura del tambor, evitando así el abultamiento en la parte inferior. La caldera utiliza tubos de humo roscados de transferencia de calor de alta eficiencia para lograr una transferencia de calor mejorada, lo que resulta en un calentamiento y aumento de presión rápidos, y una eficiencia térmica mejorada.\n\nLa caldera DZL es compacta y ocupa poco espacio, lo que ahorra inversión en infraestructura. El diseño único de aire secundario de doble capa mejora las condiciones de ignición del combustible de biomasa. Las cámaras de viento independientes aseguran una distribución razonable del aire, formando un campo aerodinámico propicio para la combustión en el horno, lo que resulta en una alta temperatura de combustión y eficiencia.",
      fr: "La chaudière à grille à chaîne longitudinale à un seul tambour DZL présente une plaque tubulaire arquée et des tubes de fumée filetés, transformant le tambour d'un corps quasi rigide en une structure quasi élastique. Elle élimine les entretoises dans la zone de la plaque tubulaire, réduisant ainsi les contraintes. Les tubes de fumée dans la plaque tubulaire passent de deux passes à une seule passe, résolvant le problème des fissures de la plaque tubulaire.\n\nLa partie inférieure du tambour de la chaudière à biomasse DZL est disposée avec des rangées de tubes montants, éliminant la zone d'eau morte au fond du tambour, empêchant le dépôt de boues et assurant un bon refroidissement de la zone à haute température du tambour, empêchant ainsi le gonflement au fond. La chaudière utilise des tubes de fumée filetés à transfert de chaleur à haute efficacité pour obtenir un transfert de chaleur amélioré, ce qui entraîne un chauffage et une augmentation de la pression rapides, ainsi qu'une efficacité thermique améliorée.\n\nLa chaudière DZL est compacte avec un faible encombrement, ce qui permet d'économiser sur les investissements en infrastructure. La conception unique à double couche d'air secondaire améliore les conditions d'allumage du combustible biomasse. Des chambres à vent indépendantes assurent une distribution d'air raisonnable, formant un champ aérodynamique propice à la combustion dans le four, ce qui entraîne une température de combustion et une efficacité élevées.",
      de: "Der DZL-Einzeltrommel-Längskettenrostkessel verfügt über einen gewölbten Rohrboden und Gewinderauchrohre, wodurch die Trommel von einem quasi-starren Körper in eine quasi-elastische Struktur verwandelt wird. Es eliminiert Anker im Rohrbodenbereich und reduziert so Spannungen. Die Rauchrohre im Rohrboden werden von zwei Zügen auf einen Zug umgestellt, wodurch das Problem von Rohrbodenrissen gelöst wird.\n\nDer untere Teil der Trommel des DZL-Biomassekessels ist mit Steigrohrreihen angeordnet, wodurch die Totwasserzone am Boden der Trommel beseitigt, Schlammablagerungen verhindert und eine gute Kühlung der Hochtemperaturzone der Trommel gewährleistet wird, wodurch ein Ausbeulen am Boden verhindert wird. Der Kessel verwendet hocheffiziente Gewinderauchrohre, um eine verbesserte Wärmeübertragung zu erreichen, was zu einer schnellen Erwärmung und Drucksteigerung sowie einem verbesserten thermischen Wirkungsgrad führt.\n\nDer DZL-Kessel ist kompakt und platzsparend, was Infrastrukturinvestitionen spart. Das einzigartige doppelschichtige Sekundärluftdesign verbessert die Zündbedingungen für Biomasse-Brennstoffe. Unabhängige Windkammern sorgen für eine vernünftige Luftverteilung und bilden ein aerodynamisches Feld, das der Verbrennung im Ofen förderlich ist, was zu einer hohen Verbrennungstemperatur und Effizienz führt.",
      ru: "Однобарабанный продольный котел с цепной решеткой DZL имеет арочную трубную решетку и дымовые трубы с резьбой, превращая барабан из квазижесткого тела в квазиупругую конструкцию. Это устраняет стяжки в зоне трубной решетки, снижая напряжение. Дымовые трубы в трубной решетке изменены с двухходовых на одноходовые, что решает проблему трещин трубной решетки.\n\nНижняя часть барабана котла на биомассе DZL оснащена рядами подъемных труб, устраняющих застойную зону воды в нижней части барабана, предотвращающих отложение шлама и обеспечивающих хорошее охлаждение высокотемпературной зоны барабана, тем самым предотвращая выпучивание днища. В котле используются высокоэффективные дымовые трубы с резьбой для достижения улучшенной теплопередачи, что приводит к быстрому нагреву и повышению давления, а также повышению теплового КПД.\n\nКотел DZL компактен и занимает мало места, экономя инвестиции в инфраструктуру. Уникальная конструкция двухслойного вторичного воздуха улучшает условия воспламенения биомассы. Независимые воздушные камеры обеспечивают разумное распределение воздуха, формируя аэродинамическое поле, способствующее сгоранию в топке, что приводит к высокой температуре и эффективности сгорания.",
      ar: "تتميز غلاية الشبكة ذات السلسلة الطولية أحادية الأسطوانة DZL بوجود لوح أنبوب مقوس وأنابيب دخان ملولبة، مما يحول الأسطوانة من جسم شبه صلب إلى هيكل شبه مرن. يزيل الدعامات في منطقة لوح الأنبوب، مما يقلل من الضغط. يتم تغيير أنابيب الدخان في لوح الأنبوب من ممرين إلى ممر واحد، مما يحل مشكلة تشقق لوح الأنبوب.\n\nيتم ترتيب الجزء السفلي من أسطوانة غلاية الكتلة الحيوية DZL بصفوف أنابيب صاعدة، مما يزيل منطقة المياه الميتة في الجزء السفلي من الأسطوانة، ويمنع ترسب الحمأة، ويضمن تبريدًا جيدًا لمنطقة درجة الحرارة العالية في الأسطوانة، وبالتالي يمنع الانتفاخ في الأسفل. تستخدم الغلاية أنابيب دخان ملولبة عالية الكفاءة لنقل الحرارة لتحقيق نقل حرارة محسن، مما يؤدي إلى تسخين سريع وتعزيز الضغط، وتحسين الكفاءة الحرارية.\n\nغلاية DZL مضغوطة ذات بصمة صغيرة، مما يوفر استثمار البنية التحتية. يعمل تصميم الهواء الثانوي الفريد مزدوج الطبقة على تحسين ظروف إشعال وقود الكتلة الحيوية. تضمن غرف الرياح المستقلة توزيعًا معقولًا للهواء، وتشكل مجالًا ديناميكيًا هوائيًا مواتيًا للاحتراق في الفرن، مما يؤدي إلى درجة حرارة احتراق وكفاءة عالية."
    },
    image: "/images/products/dzl-biomass-boiler-premium.jpg",
    icon: "Leaf",
    features: [
      { en: "Controlled Speed Combustion: Simulates controlled speed combustion to prevent deflagration.", zh: "控速燃烧：可实现模拟控速燃烧，不会产生爆燃。", es: "Combustión de velocidad controlada: Previene la deflagración.", fr: "Combustion à vitesse contrôlée : Empêche la déflagration.", de: "Geschwindigkeitsgesteuerte Verbrennung: Verhindert Verpuffung.", ru: "Контролируемая скорость сгорания: Предотвращает дефлаграцию.", ar: "احتراق متحكم في السرعة: يمنع التضاغط." },
      { en: "Secondary Air Control: Adjustable secondary air volume controls ignition speed.", zh: "二次风控制：通过调整控制二次风量，可控制燃烧引燃速度。", es: "Control de aire secundario: Volumen ajustable controla la velocidad de ignición.", fr: "Contrôle de l'air secondaire : Le volume réglable contrôle la vitesse d'allumage.", de: "Sekundärluftsteuerung: Einstellbares Volumen steuert die Zündgeschwindigkeit.", ru: "Контроль вторичного воздуха: Регулируемый объем контролирует скорость воспламенения.", ar: "التحكم في الهواء الثانوي: حجم قابل للتعديل يتحكم في سرعة الإشعال." },
      { en: "High Efficiency Combustion: Front and rear arches with secondary air ensure re-combustion of fly ash.", zh: "高效燃烧：前后拱布置二次风，保证颗粒分解后的飞灰二次燃烧，燃烧效率高。", es: "Combustión de alta eficiencia: Arcos delanteros y traseros aseguran el re-quemado de cenizas volantes.", fr: "Combustion à haute efficacité : Les arches avant et arrière assurent la re-combustion des cendres volantes.", de: "Hocheffiziente Verbrennung: Vordere und hintere Bögen sorgen für Nachverbrennung von Flugasche.", ru: "Высокоэффективное сгорание: Передние и задние арки обеспечивают дожигание летучей золы.", ar: "احتراق عالي الكفاءة: تضمن الأقواس الأمامية والخلفية إعادة احتراق الرماد المتطاير." },
      { en: "Mechanized Feeding: Flake chain grate ensures uniform feeding, stable combustion, and easy ash removal.", zh: "机械化进料：采用鳞片式链条炉排，机械化进料，进料均匀，燃烧稳定，控制方便，具备不易回火，机械清灰方便的特点。", es: "Alimentación mecanizada: La parrilla de cadena asegura una alimentación uniforme.", fr: "Alimentation mécanisée : La grille à chaîne assure une alimentation uniforme.", de: "Mechanisierte Beschickung: Kettenrost sorgt für gleichmäßige Beschickung.", ru: "Механизированная подача: Цепная решетка обеспечивает равномерную подачу.", ar: "تغذية ميكانيكية: تضمن شبكة السلسلة تغذية موحدة." },
      { en: "Stable Output: Stable operation with convenient adjustment and sufficient output.", zh: "稳定出力：运行稳定，调整方便，出力足。", es: "Salida estable: Operación estable con ajuste conveniente.", fr: "Sortie stable : Fonctionnement stable avec réglage pratique.", de: "Stabile Leistung: Stabiler Betrieb mit bequemer Einstellung.", ru: "Стабильная производительность: Стабильная работа с удобной регулировкой.", ar: "مخرجات مستقرة: تشغيل مستقر مع ضبط مريح." },
      { en: "Environmental Protection: Dust reduction design in furnace and chimney outlet keeps emissions low.", zh: "环保减尘：炉膛内的八字墙、出口烟囱部分均有降尘作用，使锅炉的原始排尘浓度控制在标准以下，保证了锅炉烟尘排放达到国家环保的指标。", es: "Protección ambiental: Diseño de reducción de polvo mantiene las emisiones bajas.", fr: "Protection de l'environnement : La conception de réduction de la poussière maintient les émissions faibles.", de: "Umweltschutz: Staubreduzierungskonstruktion hält Emissionen niedrig.", ru: "Защита окружающей среды: Конструкция снижения пыли поддерживает низкий уровень выбросов.", ar: "حماية البيئة: تصميم تقليل الغبار يحافظ على انخفاض الانبعاثات." }
    ],
    faq: [
      {
        question: {
          en: "What fuel can this boiler burn? Only coal?",
          zh: "这台锅炉能烧什么燃料？只能烧煤吗？",
          es: "¿Qué combustible puede quemar esta caldera? ¿Solo carbón?",
          fr: "Quel combustible cette chaudière peut-elle brûler ? Seulement du charbon ?",
          de: "Welchen Brennstoff kann dieser Kessel verbrennen? Nur Kohle?",
          ru: "Какое топливо может сжигать этот котел? Только уголь?",
          ar: "ما هو الوقود الذي يمكن أن تحرقه هذه الغلاية؟ هل الفحم فقط؟"
        },
        answer: {
          en: "It is designed for versatility. It can burn bituminous coal, anthracite, and various biomass fuels like wood chips, pellets, and peanut shells. We customize the grate and arch design based on your fuel.",
          zh: "它设计灵活，可以燃烧烟煤、无烟煤以及木屑、颗粒、花生壳等各种生物质燃料。我们会根据您的燃料定制炉排和炉拱设计。",
          es: "Está diseñado para la versatilidad. Puede quemar carbón bituminoso, antracita y varios combustibles de biomasa. Personalizamos la parrilla según su combustible.",
          fr: "Elle est conçue pour la polyvalence. Elle peut brûler du charbon bitumineux, de l'anthracite et divers combustibles biomasse. Nous personnalisons la grille en fonction de votre combustible.",
          de: "Es ist auf Vielseitigkeit ausgelegt. Er kann bituminöse Kohle, Anthrazit und verschiedene Biomassebrennstoffe verbrennen. Wir passen das Rostdesign an Ihren Brennstoff an.",
          ru: "Он разработан для универсальности. Он может сжигать битуминозный уголь, антрацит и различные виды биотоплива. Мы настраиваем конструкцию решетки под ваше топливо.",
          ar: "تم تصميمها لتعدد الاستخدامات. يمكن أن تحرق الفحم البيتوميني والأنثراسايت وأنواع وقود الكتلة الحيوية المختلفة. نقوم بتخصيص تصميم الشبكة بناءً على وقودك."
        }
      },
      {
        question: {
          en: "How do you prevent tube sheet cracks?",
          zh: "你们如何防止管板裂纹？",
          es: "¿Cómo previenen las grietas en la placa de tubos?",
          fr: "Comment évitez-vous les fissures de la plaque tubulaire ?",
          de: "Wie verhindern Sie Rohrbodenrisse?",
          ru: "Как вы предотвращаете трещины трубной решетки?",
          ar: "كيف تمنع تشققات لوح الأنبوب؟"
        },
        answer: {
          en: "We use an arched tube sheet and threaded smoke tubes to create a quasi-elastic structure that absorbs thermal expansion and stress, completely solving the cracking issue found in traditional designs.",
          zh: "我们采用拱形管板和螺纹烟管，形成准弹性结构，有效吸收热膨胀和应力，彻底解决了传统设计中的裂纹问题。",
          es: "Utilizamos una placa de tubos arqueada y tubos de humo roscados para crear una estructura cuasi-elástica que absorbe la expansión térmica.",
          fr: "Nous utilisons une plaque tubulaire arquée et des tubes de fumée filetés pour créer une structure quasi élastique qui absorbe la dilatation thermique.",
          de: "Wir verwenden einen gewölbten Rohrboden und Gewinderauchrohre, um eine quasi-elastische Struktur zu schaffen, die die Wärmeausdehnung absorbiert.",
          ru: "Мы используем арочную трубную решетку и дымовые трубы с резьбой для создания квазиупругой конструкции, поглощающей тепловое расширение.",
          ar: "نحن نستخدم لوح أنبوب مقوس وأنابيب دخان ملولبة لإنشاء هيكل شبه مرن يمتص التمدد الحراري."
        }
      }
    ],
    specs: [
      {
        model: "DZL2",
        capacity: "2 T/H",
        pressure: "0.7-1.25 MPa",
        efficiency: "83-84%",
        fuel: "Biomass / Coal",
        steamTemp: "170-194°C",
        feedWaterTemp: "20°C",
        grateArea: "4.1 m²",
        weight: "23 T",
        dimensions: "5500 x 2300 x 3300 mm"
      },
      {
        model: "DZL4",
        capacity: "4 T/H",
        pressure: "1.25-1.6 MPa",
        efficiency: "83-84%",
        fuel: "Biomass / Coal",
        steamTemp: "194-204°C",
        feedWaterTemp: "20°C",
        grateArea: "5.85 m²",
        weight: "25 T",
        dimensions: "6600 x 2600 x 3600 mm"
      },
      {
        model: "DZL6",
        capacity: "6 T/H",
        pressure: "1.25-1.6 MPa",
        efficiency: "83-84%",
        fuel: "Biomass / Coal",
        steamTemp: "194-204°C",
        feedWaterTemp: "20°C",
        grateArea: "7.95 m²",
        weight: "35 T",
        dimensions: "8200 x 2900 x 3800 mm"
      },
      {
        model: "DZL8",
        capacity: "8 T/H",
        pressure: "1.25-1.6 MPa",
        efficiency: "83-84%",
        fuel: "Biomass / Coal",
        steamTemp: "194-204°C",
        feedWaterTemp: "20°C",
        grateArea: "9.75 m²",
        weight: "45 T",
        dimensions: "8100 x 3100 x 3800 mm"
      },
      {
        model: "DZL10",
        capacity: "10 T/H",
        pressure: "1.25-1.6 MPa",
        efficiency: "83-84%",
        fuel: "Biomass / Coal",
        steamTemp: "194-204°C",
        feedWaterTemp: "20°C",
        grateArea: "10.77 m²",
        weight: "33/28 T",
        dimensions: "7700x3200x3600 / 8600x3000x2600 mm"
      }
    ]
  },
  // 4. YGL(W) Organic Heat Carrier (Existing)
  {
    id: "yglw-organic-heat-carrier",
    category: "thermal_oil",
    name: {
      en: "YGL(W) Organic Heat Carrier Boiler",
      zh: "YG(L)W 有机热载体炉 (导热油炉)",
      es: "Caldera de Portador de Calor Orgánico YGL(W)",
      fr: "Chaudière à Caloporteur Organique YGL(W)",
      de: "YGL(W) Organischer Wärmeträgerkessel",
      ru: "Котел с органическим теплоносителем YGL(W)",
      ar: "غلاية حامل الحرارة العضوي YGL(W)"
    },
    description: {
      en: "High temperature at low pressure, safe and energy-saving thermal oil heater.",
      zh: "低压高温，安全节能的导热油加热设备。",
      es: "Alta temperatura a baja presión, calentador de aceite térmico seguro y eficiente.",
      fr: "Haute température à basse pression, réchauffeur d'huile thermique sûr et économe en énergie.",
      de: "Hohe Temperatur bei niedrigem Druck, sicherer und energiesparender Thermalölhitzer.",
      ru: "Высокая температура при низком давлении, безопасный и энергосберегающий термомасляный нагреватель.",
      ar: "درجة حرارة عالية عند ضغط منخفض، سخان زيت حراري آمن وموفر للطاقة."
    },
    fullDescription: {
      en: "YG(L)W Organic Heat Carrier Boiler (Thermal Oil Heater) is an industrial heating equipment that uses biomass, coal, wood, etc. as fuel and thermal oil as the heat carrier. It uses a forced liquid-phase circulation pump to transport heat energy to the heating equipment and then return for reheating.\n\nCore advantages: 1. High temperature and low pressure: It can supply heat up to 340°C while the operating pressure is usually below 1.0 MPa, providing extremely high safety. 2. High thermal efficiency: Compared with traditional steam heating, it can save energy by 1-1.5 times. 3. Reasonable heating surface design ensures long service life of thermal oil. The radiant section uses square coils, and the convection section uses serpentine tubes, ensuring good thermal expansion performance and low stress.\n\nWidely used in petrochemical (polymerization, heating), oil/fiber (distillation, decomposition), textile dyeing (heat setting, drying), plastic/building materials (hot pressing, curing), and food/machinery industries.",
      zh: "YG（L）W有机热载体炉（导热油炉）是工业生产使用的供热设备。以生物质、煤、秸秆、木材为燃料，导热油为热载体，通过循环油泵强制液相循环，将热量输送给用热设备后返回重新加热。\n\n核心优势：1. 高温低压：供热温度可达 340℃，但工作压力通常在 1.0MPa 以下，安全性极高。2. 热效率高：与传统蒸汽供热相比可节能 1-1.5 倍。3. 受热面布置合理，导热油使用寿命长。辐射段采用方盘管，对流段采用蛇形管，热膨胀性能好，应力低。\n\n广泛适用于石油化工（聚合、强制保温）、油脂/纤维（蒸馏、油脂分解）、纺织印染（热定型、烘干）、塑料/建材（热压、石膏板烘干）以及食品/机械等行业。",
      es: "La caldera de portador de calor orgánico YG(L)W (calentador de aceite térmico) es un equipo de calefacción industrial que utiliza biomasa, carbón, madera, etc., como combustible y aceite térmico como portador de calor. Utiliza una bomba de circulación de fase líquida forzada para transportar energía térmica al equipo de calefacción y luego regresar para recalentarse.\n\nVentajas principales: 1. Alta temperatura y baja presión: puede suministrar calor hasta 340°C mientras que la presión de funcionamiento suele ser inferior a 1,0 MPa, lo que proporciona una seguridad extremadamente alta. 2. Alta eficiencia térmica: en comparación con el calentamiento de vapor tradicional, puede ahorrar energía entre 1 y 1,5 veces. 3. El diseño razonable de la superficie de calentamiento garantiza una larga vida útil del aceite térmico. La sección radiante utiliza bobinas cuadradas y la sección de convección utiliza tubos serpentinos, lo que garantiza un buen rendimiento de expansión térmica y bajo estrés.\n\nAmpliamente utilizado en industrias petroquímicas, aceite/fibra, teñido textil, plástico/materiales de construcción y alimentos/maquinaria.",
      fr: "La chaudière à caloporteur organique YG(L)W (réchauffeur d'huile thermique) est un équipement de chauffage industriel qui utilise la biomasse, le charbon, le bois, etc., comme combustible et l'huile thermique comme caloporteur. Elle utilise une pompe de circulation en phase liquide forcée pour transporter l'énergie thermique vers l'équipement de chauffage, puis revenir pour le réchauffage.\n\nAvantages principaux : 1. Haute température et basse pression : Elle peut fournir de la chaleur jusqu'à 340°C alors que la pression de service est généralement inférieure à 1,0 MPa, offrant une sécurité extrêmement élevée. 2. Efficacité thermique élevée : Par rapport au chauffage à la vapeur traditionnel, elle peut économiser de l'énergie de 1 à 1,5 fois. 3. La conception raisonnable de la surface de chauffe assure une longue durée de vie de l'huile thermique. La section rayonnante utilise des serpentins carrés et la section de convection utilise des tubes serpentins, assurant de bonnes performances de dilatation thermique et une faible contrainte.\n\nLargement utilisée dans les industries pétrochimique, huile/fibre, teinture textile, plastique/matériaux de construction et agroalimentaire/machines.",
      de: "Der YG(L)W Organische Wärmeträgerkessel (Thermalölhitzer) ist eine industrielle Heizanlage, die Biomasse, Kohle, Holz usw. als Brennstoff und Thermalöl als Wärmeträger verwendet. Er verwendet eine Zwangsumlaufpumpe für die Flüssigphase, um Wärmeenergie zu den Heizgeräten zu transportieren und dann zum Wiedererwärmen zurückzukehren.\n\nKernvorteile: 1. Hohe Temperatur und niedriger Druck: Er kann Wärme bis zu 340°C liefern, während der Betriebsdruck normalerweise unter 1,0 MPa liegt, was eine extrem hohe Sicherheit bietet. 2. Hoher thermischer Wirkungsgrad: Im Vergleich zur herkömmlichen Dampfheizung kann er 1-1,5 Mal Energie sparen. 3. Ein vernünftiges Design der Heizfläche gewährleistet eine lange Lebensdauer des Thermalöls. Der Strahlungsabschnitt verwendet quadratische Spulen und der Konvektionsabschnitt verwendet Schlangenrohre, was eine gute Wärmeausdehnung und geringe Belastung gewährleistet.\n\nWeit verbreitet in der Petrochemie, Öl/Faser, Textilfärbung, Kunststoff/Baumaterialien und Lebensmittel/Maschinenindustrie.",
      ru: "Котел с органическим теплоносителем YG(L)W (термомасляный нагреватель) — это промышленное отопительное оборудование, использующее биомассу, уголь, древесину и т. д. в качестве топлива и термомасло в качестве теплоносителя. Он использует насос принудительной циркуляции жидкой фазы для транспортировки тепловой энергии к нагревательному оборудованию, а затем возвращается для повторного нагрева.\n\nОсновные преимущества: 1. Высокая температура и низкое давление: Может подавать тепло до 340°C, при этом рабочее давление обычно ниже 1,0 МПа, что обеспечивает чрезвычайно высокую безопасность. 2. Высокий тепловой КПД: По сравнению с традиционным паровым отоплением, может экономить энергию в 1–1,5 раза. 3. Разумная конструкция поверхности нагрева обеспечивает длительный срок службы термомасла. Секция радиации использует квадратные змеевики, а конвективная секция — змеевидные трубы, что обеспечивает хорошее тепловое расширение и низкое напряжение.\n\nШироко используется в нефтехимической, масляно-волоконной, текстильной, пластиковой/строительной и пищевой/машиностроительной промышленности.",
      ar: "غلاية حامل الحرارة العضوي YG(L)W (سخان الزيت الحراري) هي معدات تسخين صناعية تستخدم الكتلة الحيوية، الفحم، الخشب، إلخ كوقود وزيت حراري كحامل للحرارة. تستخدم مضخة تداول المرحلة السائلة القسرية لنقل الطاقة الحرارية إلى معدات التسخين ثم العودة لإعادة التسخين.\n\nالمزايا الأساسية: 1. درجة حرارة عالية وضغط منخفض: يمكنها توفير الحرارة حتى 340 درجة مئوية بينما يكون ضغط التشغيل عادةً أقل من 1.0 ميجا باسكال، مما يوفر أمانًا عاليًا للغاية. 2. كفاءة حرارية عالية: بالمقارنة مع التدفئة بالبخار التقليدية، يمكنها توفير الطاقة بمقدار 1-1.5 مرة. 3. يضمن التصميم المعقول لسطح التسخين عمر خدمة طويل للزيت الحراري. يستخدم القسم المشع ملفات مربعة، ويستخدم قسم الحمل الحراري أنابيب اعوجاجية، مما يضمن أداء تمدد حراري جيد وضغط منخفض.\n\nتستخدم على نطاق واسع في البتروكيماويات (البلمرة، التسخين)، الزيت/الألياف (التقطير، التحلل)، صباغة المنسوجات (ضبط الحرارة، التجفيف)، البلاستيك/مواد البناء (الضغط الساخن، المعالجة)، وصناعات الأغذية/الآلات."
    },
    image: "/images/products/yglw-biomass-thermal-oil-heater-premium.jpg",
    icon: "Thermometer",
    features: [
      { en: "High Fuel Adaptability: Can be designed for different solid fuels.", zh: "燃料适应性强：可根据不同固体燃料性质单独设计炉膛结构。", es: "Alta adaptabilidad de combustible: Puede diseñarse para diferentes combustibles sólidos.", fr: "Haute adaptabilité au combustible : Peut être conçu pour différents combustibles solides.", de: "Hohe Brennstoffanpassungsfähigkeit: Kann für verschiedene feste Brennstoffe ausgelegt werden.", ru: "Высокая топливная адаптивность: Может быть спроектирован для различных твердых видов топлива.", ar: "قدرة عالية على التكيف مع الوقود: يمكن تصميمه لأنواع مختلفة من الوقود الصلب." },
      { en: "Advanced Coil Design: Square coils for radiation and serpentine for convection.", zh: "先进盘管设计：辐射段采用方盘管，对流段采用蛇形管，应力低。", es: "Diseño avanzado de bobina: Bobinas cuadradas y serpentinas para bajo estrés.", fr: "Conception de bobine avancée : Bobines carrées et serpentines pour une faible contrainte.", de: "Fortschrittliches Spulendesign: Quadratische und Schlangenspulen für geringe Belastung.", ru: "Продвинутая конструкция змеевика: Квадратные и змеевидные трубы для низкого напряжения.", ar: "تصميم ملف متقدم: ملفات مربعة وخيوط اعوجاجية لضغط منخفض." },
      { en: "Three-Pass Flue Gas: Uniform medium velocity and stable operation.", zh: "烟气三回程：介质流速均匀，运行安全稳定。", es: "Gas de combustión de tres pasos: Velocidad uniforme y operación estable.", fr: "Gaz de combustion à trois passes : Vitesse uniforme et fonctionnement stable.", de: "Dreizug-Rauchgas: Gleichmäßige Geschwindigkeit und stabiler Betrieb.", ru: "Трехходовые дымовые газы: Равномерная скорость и стабильная работа.", ar: "غاز المداخن ثلاثي الممرات: سرعة موحدة وتشغيل مستقر." },
      { en: "Large Heating Surface: Ensures high heat transfer and stable output.", zh: "出力稳定：受热面面积大，传热效果好，出力足。", es: "Gran superficie de calentamiento: Asegura alta transferencia de calor y salida estable.", fr: "Grande surface de chauffe : Assure un transfert de chaleur élevé et une sortie stable.", de: "Große Heizfläche: Sorgt für hohen Wärmeübergang und stabile Leistung.", ru: "Большая поверхность нагрева: Обеспечивает высокую теплопередачу и стабильную производительность.", ar: "سطح تسخين كبير: يضمن نقل حرارة عالي ومخرجات مستقرة." },
      { en: "Diverse Grate Options: Fixed or chain grate, manual or mechanical feeding.", zh: "炉排结构多样：可选固定炉排或全自动链条炉排，支持人工或机械上料。", es: "Diversas opciones de parrilla: Parrilla fija o de cadena, alimentación manual o mecánica.", fr: "Diverses options de grille : Grille fixe ou à chaîne, alimentation manuelle ou mécanique.", de: "Diverse Rostoptionen: Fest- oder Kettenrost, manuelle oder mechanische Beschickung.", ru: "Различные варианты решетки: Неподвижная или цепная решетка, ручная или механическая подача.", ar: "خيارات شبكة متنوعة: شبكة ثابتة أو سلسلة، تغذية يدوية أو ميكانيكية." },
      { en: "Perfect Protection: Precise oil temp control and multiple safety interlocks.", zh: "完善自控保护：出油温度精确控制，具备介质温压及多重保护。", es: "Protección perfecta: Control preciso de temperatura y múltiples enclavamientos.", fr: "Protection parfaite : Contrôle précis de la température et multiples verrouillages.", de: "Perfekter Schutz: Präzise Temperaturkontrolle und mehrere Sicherheitsverriegelungen.", ru: "Идеальная защита: Точный контроль температуры и множество блокировок.", ar: "حماية مثالية: تحكم دقيق في درجة الحرارة وأقفال أمان متعددة." }
    ],
    faq: [
      {
        question: {
          en: "What operations is this thermal oil heater suitable for?",
          zh: "这种导热油炉适合什么作业？",
          es: "¿Para qué operaciones es adecuado este calentador de aceite térmico?",
          fr: "À quelles opérations ce réchauffeur d'huile thermique convient-il ?",
          de: "Für welche Arbeiten ist dieser Thermalölhitzer geeignet?",
          ru: "Для каких операций подходит этот термомасляный нагреватель?",
          ar: "ما هي العمليات التي يناسبها سخان الزيت الحراري هذا؟"
        },
        answer: {
          en: "It is perfect for high-temperature, low-pressure applications in wood processing, textiles (dyeing/drying), food processing, and chemical industries where 300°C+ heat is needed.",
          zh: "它非常适合木材加工、纺织（印染/烘干）、食品加工和化工行业中需要300℃以上高温低压供热的应用。",
          es: "Es perfecto para aplicaciones de alta temperatura y baja presión en procesamiento de madera, textiles y productos químicos.",
          fr: "Il est parfait pour les applications à haute température et basse pression dans le traitement du bois, les textiles et l'industrie chimique.",
          de: "Es ist perfekt für Hochtemperatur- und Niederdruckanwendungen in der Holzverarbeitung, Textilindustrie und chemischen Industrie.",
          ru: "Он идеально подходит для высокотемпературных операций низкого давления в деревообработке, текстильной и химической промышленности.",
          ar: "إنها مثالية للتطبيقات ذات درجة الحرارة العالية والضغط المنخفض في معالجة الأخشاب والمنسوجات والصناعات الكيماوية."
        }
      },
      {
        question: {
          en: "Is it safe to operate?",
          zh: "运行安全吗？",
          es: "¿Es seguro de operar?",
          fr: "Est-il sûr à utiliser ?",
          de: "Ist der Betrieb sicher?",
          ru: "Безопасно ли это в эксплуатации?",
          ar: "هل هي آمنة للتشغيل؟"
        },
        answer: {
          en: "Yes, the system operates at very low pressure (<1.0 MPa) unlike steam boilers, which significantly reduces explosion risks. We use square and serpentine coils to ensure safe thermal expansion.",
          zh: "是的，该系统在极低压力（<1.0 MPa）下运行，与蒸汽锅炉不同，大大降低了爆炸风险。我们采用方盘管和蛇形管确保热膨胀安全。",
          es: "Sí, el sistema opera a muy baja presión (<1.0 MPa), lo que reduce significativamente los riesgos de explosión.",
          fr: "Oui, le système fonctionne à très basse pression (<1,0 MPa), ce qui réduit considérablement les risques d'explosion.",
          de: "Ja, das System arbeitet mit sehr niedrigem Druck (<1,0 MPa), was das Explosionsrisiko erheblich reduziert.",
          ru: "Да, система работает при очень низком давлении (<1,0 МПа), что значительно снижает риск взрыва.",
          ar: "نعم، يعمل النظام عند ضغط منخفض للغاية (<1.0 ميجا باسكال)، مما يقلل بشكل كبير من مخاطر الانفجار."
        }
      }
    ],
    specs: [
      // YGW Vertical Series
      {
        model: "YGW-1200MA",
        capacity: "1200 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "4220 x 2480 x 2800 mm",
        weight: "12 T",
        oilCapacity: "0.75 m³",
        circulationVolume: "80 m³/h",
        pipeDiameter: "DN125"
      },
      {
        model: "YGW-1400MA",
        capacity: "1400 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "4500 x 2550 x 2810 mm",
        weight: "13.5 T",
        oilCapacity: "1.2 m³",
        circulationVolume: "100 m³/h",
        pipeDiameter: "DN125"
      },
      {
        model: "YGW-1800MA",
        capacity: "1800 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "4550 x 2730 x 3010 mm",
        weight: "14.5 T",
        oilCapacity: "1.5 m³",
        circulationVolume: "100 m³/h",
        pipeDiameter: "DN150"
      },
      {
        model: "YGW-2400MA",
        capacity: "2400 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "5200 x 2730 x 2960 mm",
        weight: "17 T",
        oilCapacity: "2.1 m³",
        circulationVolume: "160 m³/h",
        pipeDiameter: "DN150"
      },
      {
        model: "YGW-3000MA",
        capacity: "3000 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "6000 x 2730 x 3240 mm",
        weight: "20 T",
        oilCapacity: "2.4 m³",
        circulationVolume: "160 m³/h",
        pipeDiameter: "DN150"
      },
      {
        model: "YGW-3500MA",
        capacity: "3500 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "6400 x 2770 x 3470 mm",
        weight: "25 T",
        oilCapacity: "2.6 m³",
        circulationVolume: "200 m³/h",
        pipeDiameter: "DN200"
      },
      // YLW Horizontal Series
      {
        model: "YLW-1400MA",
        capacity: "1400 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "4121 x 1900 x 2900 mm",
        weight: "14 T",
        oilCapacity: "1.2 m³",
        circulationVolume: "100 m³/h",
        pipeDiameter: "DN125"
      },
      {
        model: "YLW-1800MA",
        capacity: "1800 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "4400 x 2400 x 3000 mm",
        weight: "20 T",
        oilCapacity: "1.5 m³",
        circulationVolume: "100 m³/h",
        pipeDiameter: "DN150"
      },
      {
        model: "YLW-2400MA",
        capacity: "2400 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "5680 x 2480 x 3240 mm",
        weight: "25 T",
        oilCapacity: "2.1 m³",
        circulationVolume: "160 m³/h",
        pipeDiameter: "DN150"
      },
      {
        model: "YLW-3000MA",
        capacity: "3000 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "6000 x 2650 x 3240 mm",
        weight: "30 T",
        oilCapacity: "2.4 m³",
        circulationVolume: "160 m³/h",
        pipeDiameter: "DN150"
      },
      {
        model: "YLW-3500MA",
        capacity: "3500 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "6400 x 2770 x 3470 mm",
        weight: "35 T",
        oilCapacity: "2.6 m³",
        circulationVolume: "200 m³/h",
        pipeDiameter: "DN200"
      },
      {
        model: "YLW-4200MA",
        capacity: "4200 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "6900 x 2820 x 3470 mm",
        weight: "40 T",
        oilCapacity: "2.8 m³",
        circulationVolume: "250 m³/h",
        pipeDiameter: "DN200"
      },
      {
        model: "YLW-4700MA",
        capacity: "4700 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "7680 x 2985 x 3715 mm",
        weight: "44 T",
        oilCapacity: "3.0 m³",
        circulationVolume: "250 m³/h",
        pipeDiameter: "DN200"
      },
      {
        model: "YLW-6000MA",
        capacity: "6000 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "7900 x 3200 x 3475 mm",
        weight: "48 T",
        oilCapacity: "4.8 m³",
        circulationVolume: "350 m³/h",
        pipeDiameter: "DN250"
      },
      {
        model: "YLW-7000MA",
        capacity: "7000 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "8400 x 3300 x 3475 mm",
        weight: "50 T",
        oilCapacity: "7.0 m³",
        circulationVolume: "460 m³/h",
        pipeDiameter: "DN250"
      },
      {
        model: "YLW-10000MA",
        capacity: "10000 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "9200 x 3300 x 3550 mm",
        weight: "70 T",
        oilCapacity: "9.5 m³",
        circulationVolume: "540 m³/h",
        pipeDiameter: "DN300"
      },
      {
        model: "YLW-12000MA",
        capacity: "12000 KW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Biomass / Coal",
        dimensions: "12600 x 3820 x 3630 mm",
        weight: "142 T",
        oilCapacity: "12.8 m³",
        circulationVolume: "600 m³/h",
        pipeDiameter: "DN350"
      }
    ]
  },
  // 5. YY(Q)W Thermal Oil Heater
  {
    id: "yyqw-thermal-oil-heater",
    category: "thermal_oil",
    name: {
      en: "YY(Q)W Horizontal Oil/Gas Thermal Oil Heater",
      zh: "YY(Q)W系列卧式燃油/燃气导热油炉",
      es: "Calentador de Aceite Térmico Horizontal de Gas/Aceite YY(Q)W",
      fr: "Chauffage au Fioul Thermique Horizontal à Gaz/Huile YY(Q)W",
      de: "YY(Q)W Horizontaler Öl/Gas-Thermalölhitzer",
      ru: "Горизонтальный газовый/масляный термомасляный котел YY(Q)W",
      ar: "سخان الزيت الحراري الأفقي بالغاز/الزيت YY(Q)W"
    },
    description: {
      en: "Horizontal design, precise temperature control, high efficiency thermal oil boiler.",
      zh: "卧式结构，控温精确，高效能导热油锅炉。",
      es: "Diseño horizontal, control de temperatura preciso, caldera de aceite térmico de alta eficiencia.",
      fr: "Conception horizontale, contrôle précis de la température, chaudière à huile thermique à haute efficacité.",
      de: "Horizontales Design, präzise Temperaturregelung, hocheffizienter Thermalölkessel.",
      ru: "Горизонтальная конструкция, точный контроль температуры, высокоэффективный термомасляный котел.",
      ar: "تصميم أفقي، تحكم دقيق في درجة الحرارة، غلاية زيت حراري عالية الكفاءة."
    },
    fullDescription: {
      en: "The YY(Q)W series is a horizontal quick-loading organic heat carrier boiler. It adopts a compact three-pass coil design with closely-packed inner, middle, and outer coils. The inner coil acts as the radiant heating surface, creating a sealed combustion chamber, while the outer coils form the convective heating surface. This structure ensures sufficient heating area, low surface heat load, and prevents oil overheating. It features a patented efficient heat transfer structure (Patent No: ZL 2014 2 0508472.3) and advanced combustion systems for precise oil temperature control. The system operates safely at low pressure (<1.0 MPa) while delivering high temperatures up to 320°C. Energy efficiency is optimized through tailored coil gaps that maximize flue gas heat exchange.",
      zh: "YY(Q)W系列是卧式快装型有机热载体锅炉。采用紧凑的三回程盘管设计，由内、中、外（或内、外）密排盘管组成。内盘管作为辐射受热面，形成密封燃烧室，外盘管构成对流受热面。这种结构确保了充足的受热面积，降低了管表面热负荷，有效防止导热油过热。该系列拥有高效传热结构专利（专利号：ZL 2014 2 0508472.3），配备先进的燃烧和控制系统，实现油温的精确调节。它在低压（<1.0 MPa）下安全工作，却能提供高达320°C的高温热能。通过优化的盘管间隙设计，使烟气流速达到最佳状态，进一步提升了换热效率。",
      es: "La serie YY(Q)W es una caldera de portador de calor orgánico de carga rápida horizontal. Adopta un diseño compacto de bobina de tres pasos con bobinas internas, medias y externas estrechamente empaquetadas. La bobina interna actúa como superficie de calentamiento radiante, creando una cámara de combustión sellada, mientras que las bobinas externas forman la superficie de calentamiento convectiva. Esta estructura asegura un área de calentamiento suficiente, baja carga de calor superficial y evita el sobrecalentamiento del aceite. Cuenta con una estructura patentada de transferencia de calor eficiente (Patente No: ZL 2014 2 0508472.3) y sistemas de combustión avanzados para un control preciso de la temperatura del aceite. El sistema funciona de manera segura a baja presión (<1.0 MPa) mientras entrega altas temperaturas de hasta 320°C. La eficiencia energética se optimiza a través de espacios de bobina adaptados que maximizan el intercambio de calor de los gases de combustión.",
      fr: "La série YY(Q)W est une chaudière à caloporteur organique à chargement rapide horizontal. Elle adopte une conception compacte à serpentin à trois passes avec des serpentins intérieurs, moyens et extérieurs étroitement serrés. Le serpentin intérieur agit comme surface de chauffage rayonnant, créant une chambre de combustion scellée, tandis que les serpentins extérieurs forment la surface de chauffage par convection. Cette structure assure une surface de chauffage suffisante, une faible charge thermique de surface et empêche la surchauffe de l'huile. Elle dispose d'une structure de transfert de chaleur efficace brevetée (Brevet N° : ZL 2014 2 0508472.3) et de systèmes de combustion avancés pour un contrôle précis de la température de l'huile. Le système fonctionne en toute sécurité à basse pression (<1,0 MPa) tout en fournissant des températures élevées jusqu'à 320°C. L'efficacité énergétique est optimisée grâce à des espaces de serpentin adaptés qui maximisent l'échange thermique des gaz de combustion.",
      de: "Die YY(Q)W-Serie ist ein horizontaler Schnelllade-Kessel mit organischem Wärmeträger. Er verfügt über ein kompaktes Dreizug-Spulendesign mit dicht gepackten Innen-, Mittel- und Außenspulen. Die Innenspule fungiert als Strahlungsheizfläche und bildet eine geschlossene Brennkammer, während die Außenspulen die konvektive Heizfläche bilden. Diese Struktur gewährleistet eine ausreichende Heizfläche, eine geringe Oberflächenwärmelast und verhindert eine Überhitzung des Öls. Er verfügt über eine patentierte effiziente Wärmeübertragungsstruktur (Patent-Nr.: ZL 2014 2 0508472.3) und fortschrittliche Verbrennungssysteme zur präzisen Steuerung der Öltemperatur. Das System arbeitet sicher bei niedrigem Druck (<1,0 MPa) und liefert gleichzeitig hohe Temperaturen bis zu 320°C. Die Energieeffizienz wird durch maßgeschneiderte Spaltenabstände optimiert, die den Wärmeaustausch des Rauchgases maximieren.",
      ru: "Серия YY(Q)W — это горизонтальный котел с органическим теплоносителем быстрой загрузки. Он имеет компактную конструкцию трехходового змеевика с плотно упакованными внутренними, средними и внешними змеевиками. Внутренний змеевик действует как поверхность радиационного нагрева, создавая герметичную камеру сгорания, в то время как внешние змеевики образуют поверхность конвективного нагрева. Эта структура обеспечивает достаточную площадь нагрева, низкую тепловую нагрузку на поверхность и предотвращает перегрев масла. Он оснащен запатентованной эффективной конструкцией теплопередачи (Патент №: ZL 2014 2 0508472.3) и передовыми системами сгорания для точного контроля температуры масла. Система безопасно работает при низком давлении (<1,0 МПа), обеспечивая высокие температуры до 320°C. Энергоэффективность оптимизирована за счет специально подобранных зазоров между змеевиками, которые максимизируют теплообмен дымовых газов.",
      ar: "سلسلة YY(Q)W هي غلاية حاملة للحرارة العضوية أفقية سريعة التحميل. تعتمد تصميم ملف ثلاثي الممرات مدمج مع ملفات داخلية، ووسطى، وخارجية معبأة بشكل وثيق. يعمل الملف الداخلي كسطح تسخين مشع، مما يخلق غرفة احتراق محكمة الغلق، بينما تشكل الملفات الخارجية سطح التسخين بالحمل الحراري. يضمن هذا الهيكل مساحة تسخين كافية، وحمل حراري سطحي منخفض، ويمنع ارتفاع درجة حرارة الزيت. تتميز بهيكل نقل حرارة فعال حاصل على براءة اختراع (رقم براءة الاختراع: ZL 2014 2 0508472.3) وأنظمة احتراق متقدمة للتحكم الدقيق في درجة حرارة الزيت. يعمل النظام بأمان عند ضغط منخفض (<1.0 ميجا باسكال) مع توفير درجات حرارة عالية تصل إلى 320 درجة مئوية. تم تحسين كفاءة الطاقة من خلال فجوات الملف المصممة خصيصًا والتي تزيد من تبادل حرارة غازات المداخن."
    },
    image: "/images/products/yyqw-thermal-oil-heater-premium.jpg",
    icon: "Thermometer",
    faq: [
      {
        question: {
          en: "What is the maximum temperature this heater can reach?",
          zh: "这种加热炉最高能达到多少温度？",
          es: "¿Cuál es la temperatura máxima que puede alcanzar este calentador?",
          fr: "Quelle est la température maximale que ce réchauffeur peut atteindre ?",
          de: "Was ist die maximale Temperatur, die dieser Erhitzer erreichen kann?",
          ru: "Какую максимальную температуру может достичь этот нагреватель?",
          ar: "ما هي أقصى درجة حرارة يمكن أن يصل إليها هذا السخان؟"
        },
        answer: {
          en: "It can achieve high temperatures up to 320°C at very low operating pressures (<1.0 MPa), making it safer than steam boilers for high-temp applications.",
          zh: "它可以在极低的工作压力（<1.0 MPa）下达到高达320°C的高温，比蒸汽锅炉更安全。",
          es: "Puede alcanzar temperaturas de hasta 320°C a presiones muy bajas (<1.0 MPa), siendo más seguro que las calderas de vapor.",
          fr: "Il peut atteindre des températures élevées jusqu'à 320°C à des pressions de service très basses (<1,0 MPa), ce qui le rend plus sûr que les chaudières à vapeur.",
          de: "Er kann hohe Temperaturen bis zu 320°C bei sehr niedrigen Betriebsdrücken (<1,0 MPa) erreichen, was ihn sicherer als Dampfkessel macht.",
          ru: "Он может достигать высоких температур до 320°C при очень низком рабочем давлении (<1,0 МПа), что делает его безопаснее паровых котлов.",
          ar: "يمكن أن تحقق درجات حرارة عالية تصل إلى 320 درجة مئوية عند ضغوط تشغيل منخفضة للغاية (<1.0 ميجا باسكال)، مما يجعلها أكثر أمانًا من غلايات البخار."
        }
      },
      {
        question: {
          en: "Does the thermal oil need to be replaced often?",
          zh: "导热油需要经常更换吗？",
          es: "¿Es necesario reemplazar el aceite térmico con frecuencia?",
          fr: "L'huile thermique doit-elle être remplacée souvent ?",
          de: "Muss das Thermalöl oft gewechselt werden?",
          ru: "Нужно ли часто менять термомасло?",
          ar: "هل يحتاج الزيت الحراري إلى الاستبدال كثيرًا؟"
        },
        answer: {
          en: "High-quality thermal oil can last for many years if the system is properly designed and maintained to prevent oxidation and overheating. Our coil design minimizes these risks.",
          zh: "如果系统设计和维护得当，防止氧化和过热，优质导热油可以使用多年。我们的盘管设计最大限度地降低了这些风险。",
          es: "El aceite térmico de alta calidad puede durar muchos años si el sistema se mantiene adecuadamente.",
          fr: "L'huile thermique de haute qualité peut durer de nombreuses années si le système est correctement conçu et entretenu.",
          de: "Hochwertiges Thermalöl kann viele Jahre halten, wenn das System ordnungsgemäß gewartet wird.",
          ru: "Высококачественное термомасло может прослужить много лет при правильном обслуживании системы.",
          ar: "يمكن أن يستمر الزيت الحراري عالي الجودة لسنوات عديدة إذا تم صيانة النظام بشكل صحيح."
        }
      }
    ],
    features: [
      {
        en: "Precise Temp Control",
        zh: "精确温控",
        es: "Control de temperatura preciso",
        fr: "Contrôle précis de la température",
        de: "Präzise Temperaturregelung",
        ru: "Точный контроль температуры",
        ar: "تحكم دقيق في درجة الحرارة"
      },
      {
        en: "Patented Heat Transfer",
        zh: "专利传热结构",
        es: "Transferencia de calor patentada",
        fr: "Transfert de chaleur breveté",
        de: "Patentierte Wärmeübertragung",
        ru: "Запатентованная теплопередача",
        ar: "نقل الحرارة الحاصل على براءة اختراع"
      },
      {
        en: "Low Pressure High Temp",
        zh: "低压高温",
        es: "Baja presión, alta temperatura",
        fr: "Basse pression, haute température",
        de: "Niederdruck Hohe Temperatur",
        ru: "Низкое давление, высокая температура",
        ar: "ضغط منخفض درجة حرارة عالية"
      },
      {
        en: "Compact Coil Design",
        zh: "紧凑盘管设计",
        es: "Diseño de bobina compacto",
        fr: "Conception de serpentin compacte",
        de: "Kompaktes Spulendesign",
        ru: "Компактная конструкция змеевика",
        ar: "تصميم ملف مدمج"
      },
      {
        en: "Safe & Reliable",
        zh: "安全可靠",
        es: "Seguro y confiable",
        fr: "Sûr et fiable",
        de: "Sicher & Zuverlässig",
        ru: "Безопасный и надежный",
        ar: "آمن وموثوق"
      }
    ],
    specs: [
      {
        model: "1800Y/Q",
        capacity: "1800 KW",
        pressure: "1.1 MPa",
        efficiency: "92%",
        fuel: "Oil / Gas",
        maxTemp: "320°C",
        oilCapacity: "1.18 m³",
        circulationVolume: "96.7 m³/h",
        pipeDiameter: "DN150",
        weight: "8.74 T"
      },
      {
        model: "2100Y/Q",
        capacity: "2100 KW",
        pressure: "1.1 MPa",
        efficiency: "92%",
        fuel: "Oil / Gas",
        maxTemp: "320°C",
        oilCapacity: "1.7 m³",
        circulationVolume: "112.8 m³/h",
        pipeDiameter: "DN150",
        weight: "9.69 T"
      },
      {
        model: "2400Y/Q",
        capacity: "2400 KW",
        pressure: "1.1 MPa",
        efficiency: "92%",
        fuel: "Oil / Gas",
        maxTemp: "320°C",
        oilCapacity: "1.85 m³",
        circulationVolume: "151.2 m³/h",
        pipeDiameter: "DN150",
        weight: "11 T"
      },
      {
        model: "3000Y/Q",
        capacity: "3000 KW",
        pressure: "1.1 MPa",
        efficiency: "92%",
        fuel: "Oil / Gas",
        maxTemp: "320°C",
        oilCapacity: "3.94 m³",
        circulationVolume: "189 m³/h",
        pipeDiameter: "DN150",
        weight: "17.8 T"
      },
      {
        model: "4100Y/Q",
        capacity: "4100 KW",
        pressure: "1.1 MPa",
        efficiency: "90%",
        fuel: "Oil / Gas",
        maxTemp: "320°C",
        oilCapacity: "3.2 m³",
        circulationVolume: "200 m³/h",
        pipeDiameter: "DN200",
        weight: "25.5 T"
      },
      {
        model: "4700Y/Q",
        capacity: "4700 KW",
        pressure: "1.1 MPa",
        efficiency: "90%",
        fuel: "Oil / Gas",
        maxTemp: "320°C",
        oilCapacity: "4.2 m³",
        circulationVolume: "246.8 m³/h",
        pipeDiameter: "DN200",
        weight: "31 T"
      },
      {
        model: "5800Y/Q",
        capacity: "5800 KW",
        pressure: "1.1 MPa",
        efficiency: "90%",
        fuel: "Oil / Gas",
        maxTemp: "320°C",
        oilCapacity: "4.5 m³",
        circulationVolume: "300 m³/h",
        pipeDiameter: "DN250",
        weight: "37.5 T"
      }
    ]
  },
  // 6. WNS Hot Water Boiler
  {
    id: "wns-hot-water-boiler",
    category: "hot_water",
    name: {
      en: "WNS Series Horizontal Oil/Gas Pressurized Hot Water Boiler",
      zh: "WNS卧式燃油/燃气承压热水锅炉",
      es: "Caldera de Agua Caliente Presurizada de Aceite/Gas Serie WNS",
      fr: "Chaudière à Eau Chaude Sous Pression Fioul/Gaz Série WNS",
      de: "WNS-Serie Öl-/Gas-Druckheißwasserkessel",
      ru: "Водогрейный котел под давлением серии WNS на жидком топливе/газе",
      ar: "غلاية المياه الساخنة المضغوطة بالزيت/الغاز سلسلة WNS"
    },
    description: {
      en: "Horizontal three-pass wet-back design, high efficiency hot water supply.",
      zh: "卧式三回程湿背式设计，高效热水供应。",
      es: "Diseño horizontal de tres pasos con respaldo húmedo, suministro de agua caliente de alta eficiencia.",
      fr: "Conception horizontale à trois passes à dos humide, alimentation en eau chaude à haute efficacité.",
      de: "Horizontales Dreizug-Nassrückendesign, hocheffiziente Warmwasserversorgung.",
      ru: "Горизонтальная трехходовая конструкция с мокрой спинкой, высокоэффективное горячее водоснабжение.",
      ar: "تصميم أفقي ثلاثي الممرات ذو ظهر رطب، إمداد مياه ساخنة عالي الكفاءة."
    },
    fullDescription: {
      en: "The WNS series pressurized hot water boiler features a horizontal internal combustion three-pass fire tube structure. The corrugated furnace and threaded smoke tubes enhance heat transfer and absorb thermal expansion. With a large water capacity and sufficient heating surface, it ensures stable output and high efficiency. Ideal for hotels, hospitals, swimming pools, and large-scale residential heating.",
      zh: "WNS系列承压热水锅炉采用卧式内燃三回程火管结构。波纹炉胆和螺纹烟管增强了传热效果并吸收热膨胀。具有大水容量和充足的受热面积，保证了出力稳定和高效率。非常适合酒店、医院、游泳池和大型住宅供暖。",
      es: "La caldera de agua caliente presurizada de la serie WNS presenta una estructura de tubo de fuego horizontal de tres pasos de combustión interna. El horno corrugado y los tubos de humo roscados mejoran la transferencia de calor y absorben la expansión térmica. Con una gran capacidad de agua y suficiente superficie de calentamiento, garantiza una salida estable y una alta eficiencia. Ideal para hoteles, hospitales, piscinas y calefacción residencial a gran escala.",
      fr: "La chaudière à eau chaude sous pression de la série WNS présente une structure horizontale à tubes de fumée à trois passes à combustion interne. Le four ondulé et les tubes de fumée filetés améliorent le transfert de chaleur et absorbent la dilatation thermique. Avec une grande capacité d'eau et une surface de chauffe suffisante, elle assure une production stable et une efficacité élevée. Idéal pour les hôtels, les hôpitaux, les piscines et le chauffage résidentiel à grande échelle.",
      de: "Der Druckheißwasserkessel der WNS-Serie verfügt über eine horizontale Flammrohrstruktur mit drei Zügen und interner Verbrennung. Der Wellrohrofen und die Gewinderauchrohre verbessern die Wärmeübertragung und absorbieren die Wärmeausdehnung. Mit einer großen Wasserkapazität und einer ausreichenden Heizfläche gewährleistet er eine stabile Leistung und einen hohen Wirkungsgrad. Ideal für Hotels, Krankenhäuser, Schwimmbäder und großflächige Wohnraumheizungen.",
      ru: "Водогрейный котел под давлением серии WNS имеет горизонтальную жаротрубную конструкцию с внутренней камерой сгорания и тремя ходами. Гофрированная топка и дымовые трубы с резьбой улучшают теплопередачу и поглощают тепловое расширение. Благодаря большому объему воды и достаточной поверхности нагрева он обеспечивает стабильную производительность и высокий КПД. Идеально подходит для отелей, больниц, бассейнов и крупномасштабного отопления жилых помещений.",
      ar: "تتميز غلاية المياه الساخنة المضغوطة سلسلة WNS بهيكل أنبوب ناري أفقي ثلاثي الممرات ذو احتراق داخلي. يعزز الفرن المموج وأنابيب الدخان الملولبة نقل الحرارة وتمتص التمدد الحراري. بفضل سعة المياه الكبيرة وسطح التسخين الكافي، تضمن مخرجات مستقرة وكفاءة عالية. مثالية للفنادق والمستشفيات وحمامات السباحة وتدفئة المناطق السكنية واسعة النطاق."
    },
    image: "/images/products/wns-hot-water-boiler-premium.jpg",
    icon: "Waves",
    features: [
      { en: "Patented Horizontal Design", zh: "专利卧式设计", es: "Diseño horizontal patentado", fr: "Conception horizontale brevetée", de: "Patentiertes horizontales Design", ru: "Запатентованная горизонтальная конструкция", ar: "تصميم أفقي حاصل على براءة اختراع" },
      { en: "Corrugated Furnace", zh: "波纹炉胆", es: "Hogar corrugado", fr: "Foyer ondulé", de: "Wellrohrofen", ru: "Гофрированная топка", ar: "فرن مموج" },
      { en: "Threaded Smoke Tubes", zh: "螺纹烟管", es: "Tubos de humo roscados", fr: "Tubes de fumée filetés", de: "Gewinderauchrohre", ru: "Дымовые трубы с резьбой", ar: "أنابيب دخان ملولبة" },
      { en: "Large Water Capacity", zh: "大水容量", es: "Gran capacidad de agua", fr: "Grande capacité d'eau", de: "Große Wasserkapazität", ru: "Большая емкость для воды", ar: "سعة مياه كبيرة" },
      { en: "Multiple Safety Interlocks", zh: "多重安全联锁", es: "Múltiples enclavamientos de seguridad", fr: "Multiples verrouillages de sécurité", de: "Mehrere Sicherheitsverriegelungen", ru: "Множественные блокировки безопасности", ar: "أقفال أمان متعددة" }
    ],
    faq: [
      {
        question: {
          en: "What is the difference between this and a steam boiler?",
          zh: "这款锅炉和蒸汽锅炉有什么区别？",
          es: "¿Cuál es la diferencia entre esto y una caldera de vapor?",
          fr: "Quelle est la différence entre celle-ci et une chaudière à vapeur ?",
          de: "Was ist der Unterschied zwischen diesem und einem Dampfkessel?",
          ru: "В чем разница между этим котлом и паровым котлом?",
          ar: "ما الفرق بين هذه وغلاية البخار؟"
        },
        answer: {
          en: "This boiler produces hot water at specific temperatures (e.g., 95°C/70°C) for heating or domestic use, whereas a steam boiler generates steam for industrial processes.",
          zh: "该锅炉产生特定温度（如95°C/70°C）的热水用于供暖或生活用水，而蒸汽锅炉产生用于工业过程的蒸汽。",
          es: "Esta caldera produce agua caliente a temperaturas específicas para calefacción, mientras que una caldera de vapor genera vapor para procesos industriales.",
          fr: "Cette chaudière produit de l'eau chaude à des températures spécifiques pour le chauffage, tandis qu'une chaudière à vapeur génère de la vapeur pour les processus industriels.",
          de: "Dieser Kessel erzeugt heißes Wasser mit bestimmten Temperaturen zum Heizen, während ein Dampfkessel Dampf für industrielle Prozesse erzeugt.",
          ru: "Этот котел производит горячую воду определенных температур для отопления, тогда как паровой котел генерирует пар для промышленных процессов.",
          ar: "تنتج هذه الغلاية الماء الساخن بدرجات حرارة محددة للتدفئة، بينما تولد غلاية البخار البخار للعمليات الصناعية."
        }
      },
      {
        question: {
          en: "Can it be used for central heating?",
          zh: "它可以用于集中供暖吗？",
          es: "¿Se puede utilizar para calefacción central?",
          fr: "Peut-elle être utilisée pour le chauffage central ?",
          de: "Kann es für die Zentralheizung verwendet werden?",
          ru: "Можно ли использовать его для центрального отопления?",
          ar: "هل يمكن استخدامها للتدفئة المركزية؟"
        },
        answer: {
          en: "Yes, it is ideal for central heating in large buildings like hotels, hospitals, and residential districts due to its high efficiency and large capacity.",
          zh: "是的，由于其高效率和大容量，它非常适合酒店、医院和居民区等大型建筑的集中供暖。",
          es: "Sí, es ideal para la calefacción central en grandes edificios debido a su alta eficiencia y gran capacidad.",
          fr: "Oui, elle est idéale pour le chauffage central dans les grands bâtiments en raison de sa haute efficacité et de sa grande capacité.",
          de: "Ja, es ist aufgrund seiner hohen Effizienz und großen Kapazität ideal für die Zentralheizung in großen Gebäuden.",
          ru: "Да, он идеально подходит для центрального отопления в больших зданиях благодаря своей высокой эффективности и большой мощности.",
          ar: "نعم، إنها مثالية للتدفئة المركزية في المباني الكبيرة نظرًا لكفاءتها العالية وقدرتها الكبيرة."
        }
      }
    ],
    specs: [
      {
        model: "WNS0.7-0.7/95/70-Y/Q",
        capacity: "0.7 MW",
        pressure: "0.7 MPa",
        efficiency: "90.63%",
        fuel: "Oil / Gas",
        outletTemp: "95°C",
        inletTemp: "70°C",
        circulationVolume: "24 T/h",
        fuelConsumption: "85.6 Nm³/h (Gas)",
        dimensions: "4440 x 2400 x 2200 mm"
      },
      {
        model: "WNS1.4-0.7/95/70-Y/Q",
        capacity: "1.4 MW",
        pressure: "0.7 MPa",
        efficiency: "90.4%",
        fuel: "Oil / Gas",
        outletTemp: "95°C",
        inletTemp: "70°C",
        circulationVolume: "48 T/h",
        fuelConsumption: "172.8 Nm³/h (Gas)",
        dimensions: "4520 x 2800 x 2200 mm"
      },
      {
        model: "WNS2.8-1.0/95/70-Y/Q",
        capacity: "2.8 MW",
        pressure: "1.0 MPa",
        efficiency: "90.6%",
        fuel: "Oil / Gas",
        outletTemp: "95°C",
        inletTemp: "70°C",
        circulationVolume: "96 T/h",
        fuelConsumption: "321.2 Nm³/h (Gas)",
        dimensions: "4800 x 3100 x 3050 mm"
      },
      {
        model: "WNS4.2-1.0/95/70-Y/Q",
        capacity: "4.2 MW",
        pressure: "1.0 MPa",
        efficiency: "90.8%",
        fuel: "Oil / Gas",
        outletTemp: "95°C",
        inletTemp: "70°C",
        circulationVolume: "144 T/h",
        fuelConsumption: "498 Nm³/h (Gas)",
        dimensions: "5400 x 3100 x 3320 mm"
      },
      {
        model: "WNS7.0-1.0/95/70-Y/Q",
        capacity: "7.0 MW",
        pressure: "1.0 MPa",
        efficiency: "94.2%",
        fuel: "Oil / Gas",
        outletTemp: "95°C",
        inletTemp: "70°C",
        circulationVolume: "240 T/h",
        fuelConsumption: "631.5 Nm³/h (Gas)",
        dimensions: "6750 x 2480 x 3410 mm"
      },
      {
        model: "WNS10.5-1.25/115/70-Y/Q",
        capacity: "10.5 MW",
        pressure: "1.25 MPa",
        efficiency: "93.47%",
        fuel: "Oil / Gas",
        outletTemp: "115°C",
        inletTemp: "70°C",
        circulationVolume: "360 T/h",
        fuelConsumption: "1094.5 Nm³/h (Gas)",
        dimensions: "7420 x 3340 x 3510 mm"
      },
      {
        model: "WNS14-1.25/115/70-Y/Q",
        capacity: "14.0 MW",
        pressure: "1.25 MPa",
        efficiency: "93.12%",
        fuel: "Oil / Gas",
        outletTemp: "115°C",
        inletTemp: "70°C",
        circulationVolume: "480 T/h",
        fuelConsumption: "1598.5 Nm³/h (Gas)",
        dimensions: "7965 x 3730 x 3960 mm"
      }
    ]
  },
  // 7. CWNS Atmospheric Hot Water Boiler
  {
    id: "cwns-atmospheric-hot-water-boiler",
    category: "hot_water",
    name: {
      en: "CWNS Series Horizontal Atmospheric Hot Water Boiler",
      zh: "CWNS型卧式燃油/燃气常压热水锅炉",
      es: "Caldera de Agua Caliente Atmosférica Horizontal Serie CWNS",
      fr: "Chaudière à Eau Chaude Atmosphérique Horizontale Série CWNS",
      de: "CWNS-Serie Horizontaler Atmosphärischer Heißwasserkessel",
      ru: "Горизонтальный атмосферный водогрейный котел серии CWNS",
      ar: "غلاية المياه الساخنة الجوية الأفقية سلسلة CWNS"
    },
    description: {
      en: "Atmospheric pressure operation for absolute safety. High-efficiency hot water solution for hotels, schools, and residential heating.",
      zh: "常压运行，绝对安全。适用于酒店、学校和住宅供暖的高效热水解决方案。",
      es: "Operación a presión atmosférica para una seguridad absoluta. Solución de agua caliente de alta eficiencia.",
      fr: "Fonctionnement à pression atmosphérique pour une sécurité absolue. Solution d'eau chaude haute efficacité.",
      de: "Betrieb bei atmosphärischem Druck für absolute Sicherheit. Hocheffiziente Warmwasserlösung.",
      ru: "Работа при атмосферном давлении для абсолютной безопасности. Высокоэффективное решение для горячего водоснабжения.",
      ar: "تشغيل الضغط الجوي لسلامة مطلقة. حل مياه ساخنة عالي الكفاءة."
    },
    fullDescription: {
      en: "The CWNS Series Horizontal Atmospheric Hot Water Boiler represents a high standard in safe and reliable civil heating. Unlike pressurized boilers, the CWNS series is open to the atmosphere, meaning the internal pressure is always zero. This design fundamentally eliminates any possibility of explosion, making it exceptionally safe for installation in populated areas such as schools, hospitals, residential districts, and bath centers. The boiler utilizes a horizontal internal combustion three-pass design with a full wet-back combustion chamber. This significantly increases the radiant heating surface, boosts thermal efficiency to over 94%, and effectively reduces NOx emissions. Equipped with a smart PLC controller, the boiler allows for fully automated operation, including programmed startup, shutdowns, and temperature control. The outer casing is made of stainless steel or high-grade color plate, ensuring durability and aesthetics. Due to its atmospheric nature, this boiler typically bypasses complex annual government inspections and does not require a licensed high-pressure boiler operator.",
      zh: "CWNS系列卧式燃油/燃气常压热水锅炉代表了安全可靠供暖的高标准。与承压锅炉不同，CWNS系列的本体时刻与大气相通，内部压力始终为零。这种设计从根本上消除了爆炸的可能性，使其特别适合安装在学校、医院、居民小区和洗浴中心等人口密集区域。该锅炉采用卧式内燃三回程设计，配合全湿背燃烧室，显著增加了辐射受热面积，将热效率提升至94%以上，并有效降低了氮氧化物排放。配备智能PLC控制器，实现全自动运行，用户可编程设定启停时间和温度控制。外壳采用不锈钢或高级彩板，耐用且美观。由于其常压特性，该锅炉通常无需复杂的年度政府特种设备检验，也无需持证司炉工。",
      es: "La caldera de agua caliente atmosférica horizontal de la serie CWNS representa un alto estándar en calefacción civil segura y confiable. A diferencia de las calderas presurizadas, la serie CWNS está abierta a la atmósfera, lo que significa que la presión interna es siempre cero. Este diseño elimina fundamentalmente cualquier posibilidad de explosión, haciéndolo excepcionalmente seguro para su instalación en áreas pobladas. La caldera utiliza un diseño horizontal de tres pasos de combustión interna con una cámara de combustión completa de respaldo húmedo. Esto aumenta significativamente la superficie de calentamiento radiante, aumenta la eficiencia térmica a más del 94% y reduce eficazmente las emisiones de NOx. Equipado con un controlador PLC inteligente, la caldera permite un funcionamiento totalmente automatizado. La carcasa exterior está hecha de acero inoxidable o placa de color de alta calidad.",
      fr: "La chaudière à eau chaude atmosphérique horizontale de la série CWNS représente un standard élevé en matière de chauffage civil sûr et fiable. Contrairement aux chaudières sous pression, la série CWNS est ouverte à l'atmosphère, ce qui signifie que la pression interne est toujours nulle. Cette conception élimine fondamentalement toute possibilité d'explosion, ce qui la rend exceptionnellement sûre pour une installation dans des zones peuplées. La chaudière utilise une conception horizontale à trois passes à combustion interne avec une chambre de combustion à dos humide complet. Cela augmente considérablement la surface de chauffage rayonnant, porte l'efficacité thermique à plus de 94 % et réduit efficacement les émissions de NOx. Équipée d'un contrôleur PLC intelligent, la chaudière permet un fonctionnement entièrement automatisé.",
      de: "Der horizontale atmosphärische Heißwasserkessel der CWNS-Serie stellt einen hohen Standard für sichere und zuverlässige Zivilheizungen dar. Im Gegensatz zu Druckkesseln ist die CWNS-Serie zur Atmosphäre hin offen, was bedeutet, dass der Innendruck immer Null ist. Dieses Design eliminiert grundsätzlich jede Explosionsmöglichkeit und macht es außergewöhnlich sicher für die Installation in besiedelten Gebieten. Der Kessel verwendet ein horizontales Dreizug-Design mit interner Verbrennung und einer vollständigen Nassrücken-Brennkammer. Dies vergrößert die Strahlungsheizfläche erheblich, steigert den thermischen Wirkungsgrad auf über 94% und reduziert effektiv die NOx-Emissionen. Ausgestattet mit einer intelligenten SPS-Steuerung ermöglicht der Kessel einen vollautomatischen Betrieb.",
      ru: "Горизонтальный атмосферный водогрейный котел серии CWNS представляет собой высокий стандарт безопасного и надежного гражданского отопления. В отличие от котлов под давлением, серия CWNS открыта для атмосферы, что означает, что внутреннее давление всегда равно нулю. Эта конструкция принципиально исключает любую возможность взрыва, что делает ее исключительно безопасной для установки в населенных пунктах. Котел использует горизонтальную трехходовую конструкцию с внутренней камерой сгорания и полностью мокрой спинкой. Это значительно увеличивает поверхность радиационного нагрева, повышает тепловой КПД до более чем 94% и эффективно снижает выбросы NOx. Оснащенный интеллектуальным контроллером ПЛК, котел обеспечивает полностью автоматическую работу.",
      ar: "تمثل غلاية المياه الساخنة الجوية الأفقية سلسلة CWNS معيارًا عاليًا في التدفئة المدنية الآمنة والموثوقة. على عكس الغلايات المضغوطة، فإن سلسلة CWNS مفتوحة للغلاف الجوي، مما يعني أن الضغط الداخلي دائمًا صفر. يزيل هذا التصميم بشكل أساسي أي احتمال للانفجار، مما يجعله آمنًا بشكل استثنائي للتركيب في المناطق المأهولة. تستخدم الغلاية تصميمًا أفقيًا ثلاثي الممرات للاحتراق الداخلي مع غرفة احتراق كاملة الظهر الرطب. يزيد هذا بشكل كبير من سطح التسخين المشع، ويعزز الكفاءة الحرارية لأكثر من 94٪، ويقلل بشكل فعال من انبعاثات أكاسيد النيتروجين. مجهزة بوحدة تحكم PLC ذكية، تسمح الغلاية بالتشغيل الآلي بالكامل."
    },
    image: "/images/products/cwns-hot-water-boiler-premium.jpg",
    icon: "ShieldCheck",
    features: [
      { en: "Zero Pressure, Zero Explosion Risk", zh: "零压力，零爆炸风险", es: "Cero presión, cero riesgo de explosión", fr: "Pression nulle, risque d'explosion nul", de: "Null Druck, Null Explosionsrisiko", ru: "Нулевое давление, нулевой риск взрыва", ar: "ضغط صفر، خطر انفجار صفر" },
      { en: "Exempt from Annual Inspection", zh: "免除繁琐年检", es: "Exento de inspección anual", fr: "Exempté d'inspection annuelle", de: "Von der jährlichen Inspektion befreit", ru: "Освобожден от ежегодного осмотра", ar: "معفى من الفحص السنوي" },
      { en: "Fully Automated & Unattended", zh: "全自动无人值守", es: "Totalmente automatizado y desatendido", fr: "Entièrement automatisé et sans surveillance", de: "Vollautomatisch & Unbeaufsichtigt", ru: "Полностью автоматизированный и без присмотра", ar: "مؤتمتة بالكامل وغير مراقبة" },
      { en: "High Efficiency Wet-Back Design", zh: "高效全湿背设计", es: "Diseño de respaldo húmedo de alta eficiencia", fr: "Conception à dos humide haute efficacité", de: "Hocheffizientes Nassrückendesign", ru: "Высокоэффективная конструкция с мокрой спинкой", ar: "تصميم ظهر رطب عالي الكفاءة" },
      { en: "Long-lasting Stainless Shell", zh: "长寿命不锈钢外壳", es: "Carcasa de acero inoxidable de larga duración", fr: "Coque en acier inoxydable durable", de: "Langlebige Edelstahlschale", ru: "Долговечная нержавеющая оболочка", ar: "غلاف غير قابل للصدأ طويل الأمد" }
    ],
    faq: [
      {
        question: {
          en: "What does 'atmospheric' mean for this boiler?",
          zh: "这种锅炉的“常压”是什么意思？",
          es: "¿Qué significa 'atmosférico' para esta caldera?",
          fr: "Que signifie 'atmosphérique' pour cette chaudière ?",
          de: "Was bedeutet 'atmosphärisch' für diesen Kessel?",
          ru: "Что означает 'атмосферный' для этого котла?",
          ar: "ماذا تعني 'الضغط الجوي' لهذه الغلاية؟"
        },
        answer: {
          en: "It means the boiler is open to the atmosphere and operates at zero gauge pressure. This fundamentally eliminates the risk of explosion and usually exempts the boiler from annual government safety inspections.",
          zh: "这意味着锅炉与大气相通，在零表压下运行。这从根本上消除了爆炸风险，通常也无需进行政府的年度安全检查。",
          es: "Significa que la caldera está abierta a la atmósfera y opera a presión manométrica cero, eliminando el riesgo de explosión.",
          fr: "Cela signifie que la chaudière est ouverte à l'atmosphère et fonctionne à une pression manométrique nulle, éliminant tout risque d'explosion.",
          de: "Das bedeutet, dass der Kessel zur Atmosphäre hin offen ist und bei null Überdruck arbeitet, was das Explosionsrisiko eliminiert.",
          ru: "Это означает, что котел открыт для атмосферы и работает при нулевом манометрическом давлении. Это полностью исключает риск взрыва.",
          ar: "هذا يعني أن الغلاية مفتوحة للغلاف الجوي وتعمل عند ضغط قياس صفر. هذا يزيل بشكل أساسي خطر الانفجار."
        }
      },
      {
        question: {
          en: "Do I need a licensed operator for this boiler?",
          zh: "操作这台锅炉需要持证上岗吗？",
          es: "¿Necesito un operador con licencia para esta caldera?",
          fr: "Ai-je besoin d'un opérateur agréé pour cette chaudière ?",
          de: "Benötige ich einen lizenzierten Bediener für diesen Kessel?",
          ru: "Нужен ли мне лицензированный оператор для этого котла?",
          ar: "هل أحتاج إلى مشغل مرخص لهذه الغلاية؟"
        },
        answer: {
          en: "In most countries and regions, atmospheric hot water boilers do not require a licensed high-pressure boiler operator, which reduces your labor and management costs. Provided with full automation.",
          zh: "在大多数国家和地区，常压热水锅炉不需要持证的高压锅炉操作工，这降低了您的人工和管理成本。且配备全自动控制。",
          es: "En la mayoría de las regiones, las calderas atmosféricas no requieren un operador con licencia, lo que reduce los costos.",
          fr: "Dans la plupart des régions, les chaudières atmosphériques ne nécessitent pas d'opérateur agréé, ce qui réduit les coûts.",
          de: "In den meisten Regionen erfordern atmosphärische Kessel keinen lizenzierten Bediener, was die Kosten senkt.",
          ru: "В большинстве регионов атмосферные котлы не требуют лицензированного оператора, что снижает расходы.",
          ar: "في معظم المناطق، لا تتطلب الغلايات الجوية مشغلًا مرخصًا، مما يقلل من التكاليف."
        }
      }
    ],
    specs: [
      {
        model: "CWNS0.35-Y(Q)",
        capacity: "0.35 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "420 L",
        outletDiameter: "65 mm",
        inletDiameter: "40 mm",
        weight: "1280 Kg",
        dimensions: "1960 x 920 x 1255 mm"
      },
      {
        model: "CWNS0.48-Y(Q)",
        capacity: "0.48 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "630 L",
        outletDiameter: "65 mm",
        inletDiameter: "40 mm",
        weight: "1550 Kg",
        dimensions: "2480 x 1020 x 1435 mm"
      },
      {
        model: "CWNS0.58-Y(Q)",
        capacity: "0.58 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "900 L",
        outletDiameter: "80 mm",
        inletDiameter: "40 mm",
        weight: "1900 Kg",
        dimensions: "2670 x 1120 x 1485 mm"
      },
      {
        model: "CWNS0.7-Y(Q)",
        capacity: "0.7 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "1050 L",
        outletDiameter: "80 mm",
        inletDiameter: "50 mm",
        weight: "2100 Kg",
        dimensions: "2670 x 1120 x 1485 mm"
      },
      {
        model: "CWNS1.05-Y(Q)",
        capacity: "1.05 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "1560 L",
        outletDiameter: "100 mm",
        inletDiameter: "50 mm",
        weight: "2900 Kg",
        dimensions: "2930 x 1360 x 1760 mm"
      },
      {
        model: "CWNS1.4-Y(Q)",
        capacity: "1.4 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "2300 L",
        outletDiameter: "100 mm",
        inletDiameter: "50 mm",
        weight: "3750 Kg",
        dimensions: "3300 x 1470 x 1890 mm"
      },
      {
        model: "CWNS1.75-Y(Q)",
        capacity: "1.75 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "2700 L",
        outletDiameter: "125 mm",
        inletDiameter: "50 mm",
        weight: "3950 Kg",
        dimensions: "3530 x 1580 x 2010 mm"
      },
      {
        model: "CWNS2.1-Y(Q)",
        capacity: "2.1 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "3700 L",
        outletDiameter: "125 mm",
        inletDiameter: "50 mm",
        weight: "4950 Kg",
        dimensions: "3800 x 1680 x 2110 mm"
      },
      {
        model: "CWNS2.8-Y(Q)",
        capacity: "2.8 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "4100 L",
        outletDiameter: "150 mm",
        inletDiameter: "50 mm",
        weight: "8100 Kg",
        dimensions: "4200 x 1780 x 2175 mm"
      }
    ]
  },
  // 8. CLHS Vertical Hot Water Boiler
  {
    id: "clhs-vertical-hot-water-boiler",
    category: "hot_water",
    name: {
      en: "CLHS Vertical Atmospheric Hot Water Boiler",
      zh: "CLHS立式燃油/燃气常压热水锅炉",
      es: "Caldera de Agua Caliente Atmosférica Vertical Serie CLHS",
      fr: "Chaudière à Eau Chaude Atmosphérique Verticale CLHS",
      de: "Vertikaler Atmosphärischer Heißwasserkessel CLHS",
      ru: "Вертикальный атмосферный водогрейный котел CLHS",
      ar: "غلاية المياه الساخنة الجوية العمودية CLHS"
    },
    description: {
      en: "Compact vertical design, instant hot water. The smartest choice for small-to-medium heating needs.",
      zh: "紧凑立式设计，即热式热水供应。中小规模供暖的最明智选择。",
      es: "Diseño vertical compacto, agua caliente instantánea. La opción más inteligente para necesidades de calefacción pequeñas a medianas.",
      fr: "Conception verticale compacte, eau chaude instantanée. Le choix le plus intelligent pour les besoins de chauffage petits et moyens.",
      de: "Kompaktes vertikales Design, sofortiges heißes Wasser. Die klügste Wahl für kleine bis mittlere Heizbedürfnisse.",
      ru: "Компактный вертикальный дизайн, мгновенная горячая вода. Самый разумный выбор для малых и средних нужд отопления.",
      ar: "تصميم عمودي مدمج، مياه ساخنة فورية. الخيار الأذكى لاحتياجات التدفئة الصغيرة والمتوسطة."
    },
    fullDescription: {
      en: "The CLHS series is a masterpiece of space-saving engineering. Designed with a vertical layout, it occupies less than half the floor space of traditional horizontal boilers while delivering robust performance. Its cylindrical design requires minimal installation area, making it perfect for basements, rooftops, or tight mechanical rooms. Operating at atmospheric pressure with zero risk of explosion, it creates a safe environment suitable for small hotels, villas, and bathhouses. The optimized internal structure ensures quick heat transfer, providing hot water within minutes of startup. Additionally, it offers a lower initial investment and installation cost compared to horizontal units, with an automation system that simplifies operation.",
      zh: "CLHS系列是空间节省工程的杰作。采用立式结构设计，其占地面积不到传统卧式锅炉的一半，却能提供强劲的供热性能。其圆柱形设计需要的安装区域极小，非常适合地下室、屋顶或狭窄的机械室。常压运行，零爆炸风险，无需专用锅炉房，特别适合小型酒店、别墅和澡堂等场景。优化的内部结构确保热传递迅速，启动后几分钟内即可提供热水。此外，与卧式机组相比，其初始投资和安装成本更低，自动化系统也使操作更加简便。",
      es: "La serie CLHS es una obra maestra de ingeniería para ahorrar espacio. Diseñado con un diseño vertical, ocupa menos de la mitad del espacio de piso que las calderas horizontales tradicionales, al tiempo que ofrece un rendimiento robusto. Su diseño cilíndrico requiere un área de instalación mínima, lo que lo hace perfecto para sótanos, azoteas o salas de máquinas estrechas. Operando a presión atmosférica con cero riesgo de explosión, crea un entorno seguro adecuado para pequeños hoteles, villas y casas de baños. La estructura interna optimizada asegura una transferencia de calor rápida, proporcionando agua caliente minutos después del arranque. Además, ofrece una inversión inicial y un costo de instalación más bajos en comparación con las unidades horizontales, con un sistema de automatización que simplifica la operación.",
      fr: "La série CLHS est un chef-d'œuvre de l'ingénierie d'économie d'espace. Conçu avec une disposition verticale, il occupe moins de la moitié de l'espace au sol des chaudières horizontales traditionnelles tout en offrant des performances robustes. Sa conception cylindrique nécessite une zone d'installation minimale, ce qui le rend parfait pour les sous-sols, les toits ou les salles mécaniques étroites. Fonctionnant à la pression atmosphérique sans risque d'explosion, il crée un environnement sûr adapté aux petits hôtels, villas et bains publics. La structure interne optimisée assure un transfert de chaleur rapide, fournissant de l'eau chaude quelques minutes après le démarrage. De plus, il offre un investissement initial et un coût d'installation inférieurs par rapport aux unités horizontales, avec un système d'automatisation qui simplifie le fonctionnement.",
      de: "Die CLHS-Serie ist ein Meisterwerk der platzsparenden Technik. Mit einem vertikalen Layout entworfen, nimmt sie weniger als die Hälfte der Bodenfläche traditioneller horizontaler Kessel ein und bietet dennoch eine robuste Leistung. Ihr zylindrisches Design erfordert minimalen Installationsplatz und ist perfekt für Keller, Dächer oder enge Maschinenräume. Da sie bei atmosphärischem Druck ohne Explosionsrisiko arbeitet, schafft sie eine sichere Umgebung, die für kleine Hotels, Villen und Badehäuser geeignet ist. Die optimierte interne Struktur sorgt für eine schnelle Wärmeübertragung und liefert heißes Wasser innerhalb von Minuten nach dem Start. Darüber hinaus bietet sie im Vergleich zu horizontalen Einheiten geringere Anfangsinvestitions- und Installationskosten sowie ein Automatisierungssystem, das den Betrieb vereinfacht.",
      ru: "Серия CLHS — это шедевр компактной инженерии. Спроектированный с вертикальной компоновкой, он занимает менее половины площади пола традиционных горизонтальных котлов, обеспечивая при этом надежную производительность. Его цилиндрическая конструкция требует минимальной площади установки, что делает его идеальным для подвалов, крыш или тесных механических помещений. Работающий при атмосферном давлении с нулевым риском взрыва, он создает безопасную среду, подходящую для небольших отелей, вилл и бань. Оптимизированная внутренняя структура обеспечивает быструю теплопередачу, обеспечивая горячую воду уже через несколько минут после запуска. Кроме того, он предлагает более низкие первоначальные инвестиции и стоимость установки по сравнению с горизонтальными агрегатами, а система автоматизации упрощает эксплуатацию.",
      ar: "سلسلة CLHS هي تحفة في الهندسة الموفرة للمساحة. تم تصميمه بتخطيط عمودي، ويشغل أقل من نصف مساحة الأرضية للغلايات الأفقية التقليدية مع توفير أداء قوي. يتطلب تصميمه الأسطواني الحد الأقصى من مساحة التثبيت، مما يجعله مثاليًا للأقبية أو الأسطح أو الغرف الميكانيكية الضيقة. يعمل بالضغط الجوي مع خطر انفجار صفر، مما يخلق بيئة آمنة مناسبة للفنادق الصغيرة والفيلات والحمامات. يضمن الهيكل الداخلي المحسن نقل الحرارة السريع، وتوفير الماء الساخن في غضون دقائق من بدء التشغيل. بالإضافة إلى ذلك، فإنه يوفر استثمارًا أوليًا وتكلفة تركيب أقل مقارنة بالوحدات الأفقية، مع نظام أتمتة يبسط التشغيل."
    },
    image: "/images/products/clhs-vertical-hot-water-boiler-premium.jpg",
    icon: "ArrowUp",
    features: [
      { en: "Ultra-Compact Vertical Design", zh: "超紧凑立式设计", es: "Diseño vertical ultracompacto", fr: "Conception verticale ultra-compacte", de: "Ultrakompaktes vertikales Design", ru: "Ультракомпактный вертикальный дизайн", ar: "تصميم عمودي فائق الصغر" },
      { en: "Atmospheric Safety", zh: "常压安全运行", es: "Seguridad atmosférica", fr: "Sécurité atmosphérique", de: "Atmosphärische Sicherheit", ru: "Атмосферная безопасность", ar: "السلامة الجوية" },
      { en: "Fast Hot Water Supply", zh: "快速热水供应", es: "Suministro rápido de agua caliente", fr: "Alimentation rapide en eau chaude", de: "Schnelle Warmwasserversorgung", ru: "Быстрая подача горячей воды", ar: "إمداد سريع بالمياه الساخنة" },
      { en: "Easy Installation", zh: "安装简便", es: "Fácil instalación", fr: "Installation facile", de: "Einfache Installation", ru: "Простая установка", ar: "سهولة التركيب" },
      { en: "Cost-Effective Solution", zh: "高性价比方案", es: "Solución rentable", fr: "Solution rentable", de: "Kostengünstige Lösung", ru: "Экономичное решение", ar: "حل فعال من حيث التكلفة" }
    ],
    faq: [
      {
        question: {
          en: "Does this vertical boiler supply hot water instantly?",
          zh: "这种立式锅炉能即时供应热水吗？",
          es: "¿Esta caldera vertical suministra agua caliente al instante?",
          fr: "Cette chaudière verticale fournit-elle de l'eau chaude instantanément ?",
          de: "Liefert dieser vertikale Kessel sofort heißes Wasser?",
          ru: "Подает ли этот вертикальный котел горячую воду мгновенно?",
          ar: "هل توفر هذه الغلاية العمودية الماء الساخن على الفور؟"
        },
        answer: {
          en: "Yes, thanks to its optimized internal structure and relatively small water capacity, it can reach the set temperature very quickly to provide hot water.",
          zh: "是的，由于其优化的内部结构和相对较小的水容量，它可以非常快地达到设定温度以提供热水。",
          es: "Sí, gracias a su estructura interna optimizada, puede alcanzar la temperatura establecida muy rápidamente.",
          fr: "Oui, grâce à sa structure interne optimisée, elle peut atteindre la température de consigne très rapidement.",
          de: "Ja, dank seiner optimierten internen Struktur kann es die eingestellte Temperatur sehr schnell erreichen.",
          ru: "Да, благодаря оптимизированной внутренней структуре, он может очень быстро достигать заданной температуры.",
          ar: "نعم، بفضل هيكلها الداخلي المحسن، يمكن أن تصل إلى درجة الحرارة المحددة بسرعة كبيرة."
        }
      },
      {
        question: {
          en: "How much space can I save with this model?",
          zh: "这款机型能帮我节省多少空间？",
          es: "¿Cuánto espacio puedo ahorrar con este modelo?",
          fr: "Combien d'espace puis-je économiser avec ce modèle ?",
          de: "Wie viel Platz kann ich mit diesem Modell sparen?",
          ru: "Сколько места я могу сэкономить с этой моделью?",
          ar: "ما مقدار المساحة التي يمكنني توفيرها مع هذا النموذج؟"
        },
        answer: {
          en: "Its vertical cylindrical footprint is less than half that of a traditional horizontal boiler, making it an excellent choice for tight spaces like basements or corners.",
          zh: "其立式圆柱形占地面积不到传统卧式锅炉的一半，是地下室或角落等狭窄空间的绝佳选择。",
          es: "Su huella cilíndrica vertical es menos de la mitad que la de una caldera horizontal tradicional.",
          fr: "Son encombrement cylindrique vertical est inférieur à la moitié de celui d'une chaudière horizontale traditionnelle.",
          de: "Seine vertikale zylindrische Grundfläche beträgt weniger als die Hälfte der eines herkömmlichen horizontalen Kessels.",
          ru: "Его вертикальная цилиндрическая площадь занимает менее половины площади традиционного горизонтального котла.",
          ar: "بصمته الأسطوانية العمودية أقل من نصف بصمة الغلاية الأفقية التقليدية."
        }
      }
    ],
    specs: [
      {
        model: "CLHS0.12-85/65-Y(Q)",
        capacity: "0.12 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "170 L",
        outletDiameter: "40 mm",
        inletDiameter: "40 mm",
        dimensions: "630 x 630 x 1150 mm",
        weight: "380 Kg"
      },
      {
        model: "CLHS0.24-85/65-Y(Q)",
        capacity: "0.24 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "342 L",
        outletDiameter: "65 mm",
        inletDiameter: "65 mm",
        dimensions: "750 x 750 x 1380 mm",
        weight: "446 Kg"
      },
      {
        model: "CLHS0.35-85/65-Y(Q)",
        capacity: "0.35 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "550 L",
        outletDiameter: "80 mm",
        inletDiameter: "80 mm",
        dimensions: "950 x 880 x 1700 mm",
        weight: "720 Kg"
      },
      {
        model: "CLHS0.5-85/65-Y(Q)",
        capacity: "0.5 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "736 L",
        outletDiameter: "80 mm",
        inletDiameter: "80 mm",
        dimensions: "1110 x 1040 x 1850 mm",
        weight: "775.1 Kg"
      },
      {
        model: "CLHS0.6-85/65-Y(Q)",
        capacity: "0.6 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "1000 L",
        outletDiameter: "80 mm",
        inletDiameter: "80 mm",
        dimensions: "1310 x 1140 x 1960 mm",
        weight: "1200 Kg"
      },
      {
        model: "CLHS0.7-85/65-Y(Q)",
        capacity: "0.7 MW",
        pressure: "Atmospheric",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        outletTemp: "85°C",
        inletTemp: "65°C",
        waterCapacity: "1280 L",
        outletDiameter: "100 mm",
        inletDiameter: "100 mm",
        dimensions: "1450 x 1380 x 2250 mm",
        weight: "1900 Kg"
      }
    ]
  },
  // 9. LSS Vertical Steam Boiler
  {
    id: "lss-vertical-steam-boiler",
    category: "steam",
    name: {
      en: "LSS Series Vertical Oil/Gas Steam Boiler",
      zh: "LSS型立式燃油/燃气蒸汽锅炉",
      es: "Caldera de Vapor Vertical de Aceite/Gas Serie LSS",
      fr: "Chaudière à Vapeur Verticale Fioul/Gaz Série LSS",
      de: "Vertikaler Öl-/Gas-Dampfkessel Serie LSS",
      ru: "Вертикальный паровой котел на жидком топливе/газе серии LSS",
      ar: "غلاية البخار العمودية بالزيت/الغاز سلسلة LSS"
    },
    description: {
      en: "Rapid steam generation in 20 minutes. Compact vertical design with no special foundation required.",
      zh: "20分钟快速出蒸汽。紧凑立式设计，无需特殊基础即可安装。",
      es: "Generación rápida de vapor en 20 minutos. Diseño vertical compacto sin necesidad de cimientos especiales.",
      fr: "Génération rapide de vapeur en 20 minutes. Conception verticale compacte sans fondation spéciale requise.",
      de: "Schnelle Dampferzeugung in 20 Minuten. Kompaktes vertikales Design ohne spezielles Fundament erforderlich.",
      ru: "Быстрая генерация пара за 20 минут. Компактная вертикальная конструкция не требует специального фундамента.",
      ar: "توليد بخار سريع في 20 دقيقة. تصميم عمودي مدمج مع عدم الحاجة إلى أساس خاص."
    },
    fullDescription: {
      en: "The LSS series is a highly efficient vertical through-flow steam boiler. Unlike traditional boilers that require hours to heat up, the LSS series can reach full load from a cold start in just 20 minutes. This makes it ideal for industries that need intermittent steam supply or agile production scheduling. Its advanced water pipe structure allows for rapid heating, significantly reducing fuel consumption during startup, while the internal steam-water separator ensures high steam dryness. The boiler is delivered as a complete skid-mounted unit with minimal vibration, allowing installation on standard flat floors without heavy concrete foundations. Its smaller water volume compared to horizontal boilers also minimizes operational hazards.",
      zh: "LSS系列是一种高效立式贯流蒸汽锅炉。与需要数小时预热的传统锅炉不同，LSS系列从冷启动到满负荷运行仅需20分钟。这使其非常适合需要间歇性蒸汽供应或灵敏生产调度的行业。其先进的水管结构允许快速加热，显著降低了启动期间的燃料消耗，同时内置的汽水分离器确保了高蒸汽干度。该锅炉作为整机撬装交付，振动极小，无需重型混凝土基础即可安装在标准平坦地面上。与卧式锅炉相比，其较小的水容量也最大限度地减少了操作隐患。",
      es: "La serie LSS es una caldera de vapor de flujo continuo vertical altamente eficiente. A diferencia de las calderas tradicionales que requieren horas para calentarse, la serie LSS puede alcanzar la carga completa desde un arranque en frío en solo 20 minutos. Esto lo hace ideal para industrias que necesitan suministro de vapor intermitente o programación de producción ágil. Su avanzada estructura de tuberías de agua permite un calentamiento rápido, reduciendo significativamente el consumo de combustible durante el arranque, mientras que el separador interno de vapor-agua garantiza una alta sequedad del vapor. La caldera se entrega como una unidad completa montada sobre patines con vibración mínima, lo que permite la instalación en pisos planos estándar sin cimientos de concreto pesados. Su menor volumen de agua en comparación con las calderas horizontales también minimiza los riesgos operativos.",
      fr: "La série LSS est une chaudière à vapeur à flux continu verticale très efficace. Contrairement aux chaudières traditionnelles qui nécessitent des heures pour chauffer, la série LSS peut atteindre la pleine charge à partir d'un démarrage à froid en seulement 20 minutes. Cela le rend idéal pour les industries qui ont besoin d'un approvisionnement en vapeur intermittent ou d'une planification de production agile. Sa structure avancée de tuyaux d'eau permet un chauffage rapide, réduisant considérablement la consommation de carburant lors du démarrage, tandis que le séparateur vapeur-eau interne assure une sécheresse élevée de la vapeur. La chaudière est livrée sous forme d'unité complète montée sur patins avec une vibration minimale, permettant l'installation sur des sols plats standard sans fondations en béton lourdes. Son volume d'eau plus petit par rapport aux chaudières horizontales minimise également les risques opérationnels.",
      de: "Die LSS-Serie ist ein hocheffizienter vertikaler Durchlaufdampfkessel. Im Gegensatz zu herkömmlichen Kesseln, die Stunden zum Aufheizen benötigen, kann die LSS-Serie in nur 20 Minuten von einem Kaltstart auf Volllast hochfahren. Dies macht sie ideal für Industrien, die eine intermittierende Dampfversorgung oder eine flexible Produktionsplanung benötigen. Ihre fortschrittliche Wasserrohrstruktur ermöglicht eine schnelle Erwärmung, wodurch der Brennstoffverbrauch während des Anfahrens erheblich reduziert wird, während der interne Dampf-Wasser-Abscheider eine hohe Dampftrockenheit gewährleistet. Der Kessel wird als komplette, auf einem Rahmen montierte Einheit mit minimaler Vibration geliefert, was die Installation auf normalen, ebenen Böden ohne schwere Betonfundamente ermöglicht. Ihr geringeres Wasservolumen im Vergleich zu horizontalen Kesseln minimiert auch Betriebsgefahren.",
      ru: "Серия LSS — это высокоэффективный вертикальный прямоточный паровой котел. В отличие от традиционных котлов, которые требуют часов для разогрева, серия LSS может достичь полной нагрузки с холодного пуска всего за 20 минут. Это делает его идеальным для отраслей, требующих прерывистой подачи пара или гибкого производственного планирования. Его передовая конструкция водяных труб обеспечивает быстрый нагрев, значительно снижая расход топлива при запуске, а внутренний пароводяной сепаратор гарантирует высокую сухость пара. Котел поставляется в виде комплектного блочного агрегата с минимальной вибрацией, что позволяет устанавливать его на стандартных плоских полах без тяжелых бетонных фундаментов. Его меньший объем воды по сравнению с горизонтальными котлами также минимизирует эксплуатационные риски.",
      ar: "سلسلة LSS هي غلاية بخار عمودية عالية الكفاءة تعمل بالتدفق المستمر. على عكس الغلايات التقليدية التي تتطلب ساعات للتسخين، يمكن لسلسلة LSS الوصول إلى الحمل الكامل من البداية الباردة في 20 دقيقة فقط. هذا يجعلها مثالية للصناعات التي تحتاج إلى إمدادات بخار متقطعة أو وجدولة إنتاج مرنة. يسمح هيكل أنابيب المياه المتقدم بالتسخين السريع، مما يقلل بشكل كبير من استهلاك الوقود أثناء بدء التشغيل، بينما يضمن فاصل البخار والماء الداخلي جفاف البخار العالي. يتم تسليم الغلاية كوحدة كاملة مثبتة على زلاجات مع الحد الأدنى من الاهتزاز، مما يسمح بالتركيب على أرضيات مسطحة قياسية دون أساسات خرسانية ثقيلة. كما يقلل حجم المياه الأصغر مقارنة بالغلايات الأفقية من مخاطر التشغيل."
    },
    image: "/images/products/lss-vertical-steam-boiler-premium.jpg",
    icon: "Flame",
    faq: [
      {
        question: {
          en: "Does this small boiler require annual government inspection?",
          zh: "这种小型锅炉需要每年进行政府年检吗？",
          es: "¿Esta pequeña caldera requiere inspección gubernamental anual?",
          fr: "Cette petite chaudière nécessite-t-elle une inspection gouvernementale annuelle ?",
          de: "Erfordert dieser kleine Kessel eine jährliche staatliche Inspektion?",
          ru: "Требует ли этот небольшой котел ежегодной государственной инспекции?",
          ar: "هل تتطلب هذه الغلاية الصغيرة فحصًا حكوميًا سنويًا؟"
        },
        answer: {
          en: "For models with water capacity <30L, it is generally inspection-free in many regions. However, regulations vary by country. Please check your local boiler safety codes.",
          zh: "对于水容量小于30L的型号，在许多地区通常免检。但法规因国家而异，请查阅您当地的锅炉安全规范。",
          es: "Para modelos con capacidad de agua <30L, generalmente está exenta de inspección en muchas regiones. Sin embargo, las regulaciones varían según el país.",
          fr: "Pour les modèles avec une capacité en eau <30L, elle est généralement sans inspection dans de nombreuses régions. Cependant, les réglementations varient selon les pays.",
          de: "Bei Modellen mit weniger als 30L Wasserkapazität ist sie in vielen Regionen in der Regel inspektionsfrei. Die Vorschriften variieren jedoch je nach Land.",
          ru: "Для моделей с объемом воды <30 л, как правило, не требуется инспекция во многих регионах. Однако правила варьируются в зависимости от страны.",
          ar: "بالنسبة للنماذج ذات سعة مياه أقل من 30 لترًا، فهي عمومًا خالية من التفتيش في العديد من المناطق. ومع ذلك، تختلف اللوائح حسب البلد."
        }
      },
      {
        question: {
          en: "How fast can it produce steam?",
          zh: "它产生蒸汽的速度有多快？",
          es: "¿Qué tan rápido puede producir vapor?",
          fr: "À quelle vitesse peut-elle produire de la vapeur ?",
          de: "Wie schnell kann sie Dampf erzeugen?",
          ru: "Как быстро он может производить пар?",
          ar: "ما مدى سرعة إنتاج البخار؟"
        },
        answer: {
          en: "Thanks to its once-through structure and small water volume, it can generate steam in just 3-5 minutes from a cold start.",
          zh: "得益于其贯流式结构和小水容量，它可以在冷启动后仅3-5分钟内产生蒸汽。",
          es: "Gracias a su estructura de paso único y pequeño volumen de agua, puede generar vapor en solo 3-5 minutos desde un arranque en frío.",
          fr: "Grâce à sa structure à passage unique et son petit volume d'eau, elle peut générer de la vapeur en seulement 3 à 5 minutes après un démarrage à froid.",
          de: "Dank ihrer Zwangsdurchlaufstruktur und dem geringen Wasservolumen kann sie in nur 3-5 Minuten nach dem Kaltstart Dampf erzeugen.",
          ru: "Благодаря прямоточной конструкции и небольшому объему воды, он может генерировать пар всего за 3-5 минут после холодного пуска.",
          ar: "بفضل هيكلها أحادي التمرير وحجم الماء الصغير، يمكنها توليد البخار في 3-5 دقائق فقط من البداية الباردة."
        }
      }
    ],
    features: [
      { en: "20 Minutes Rapid Steam", zh: "20分钟快速出汽", es: "Vapor rápido en 20 minutos", fr: "Vapeur rapide en 20 minutes", de: "20 Minuten schneller Dampf", ru: "Быстрый пар за 20 минут", ar: "بخار سريع في 20 دقيقة" },
      { en: "No Special Foundation Needed", zh: "无需特殊地基", es: "No se necesita cimentación especial", fr: "Aucune fondation spéciale requise", de: "Kein spezielles Fundament erforderlich", ru: "Не требуется специального фундамента", ar: "لا حاجة لأساس خاص" },
      { en: "High Steam Dryness", zh: "高蒸汽干度", es: "Alta sequedad del vapor", fr: "Haute sécheresse de la vapeur", de: "Hohe Dampftrockenheit", ru: "Высокая сухость пара", ar: "جفاف بخار عالي" },
      { en: "Skid-mounted Delivery", zh: "整机撬装交付", es: "Entrega montada sobre patines", fr: "Livraison montée sur patins", de: "Lieferung auf einem Rahmen montiert", ru: "Поставка в блочном исполнения", ar: "توصيل مثبت على زلاجة" }
    ],
    specs: [
      {
        model: "LSS0.3-0.7-Y(Q)",
        capacity: "0.3 T/H",
        pressure: "0.7-1.0 MPa",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        steamTemp: "170-184°C",
        feedWaterTemp: "20°C",
        heatingSurface: "8.4 m²",
        waterCapacity: "0.7 m³",

        dimensions: "1340 x 1300 x 2510 mm",
        weight: "2.1 T"
      },
      {
        model: "LSS0.5-0.7-Y(Q)",
        capacity: "0.5 T/H",
        pressure: "0.7-1.0 MPa",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        steamTemp: "170-184°C",
        feedWaterTemp: "20°C",
        heatingSurface: "15 m²",
        waterCapacity: "1.05 m³",

        dimensions: "1540 x 1500 x 2860 mm",
        weight: "2.7 T"
      },
      {
        model: "LSS0.7-0.7-Y(Q)",
        capacity: "0.7 T/H",
        pressure: "0.7-1.0 MPa",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        steamTemp: "170-184°C",
        feedWaterTemp: "20°C",
        heatingSurface: "21.5 m²",
        waterCapacity: "1.63 m³",

        dimensions: "1900 x 1800 x 3040 mm",
        weight: "3.64 T"
      },
      {
        model: "LSS1.0-0.7-Y(Q)",
        capacity: "1.0 T/H",
        pressure: "0.7-1.0 MPa",
        efficiency: "93-94%",
        fuel: "Oil / Gas",
        steamTemp: "170-184°C",
        feedWaterTemp: "20°C",
        heatingSurface: "26 m²",
        waterCapacity: "1.65 m³",
        dimensions: "1900 x 1800 x 3310 mm",
        weight: "3.8 T"
      }
    ]
  },
  // 10. Low Nitrogen Vacuum Boiler
  {
    id: "low-nitrogen-vacuum-boiler",
    category: "hot_water",
    name: {
      en: "ZKW Series Low Nitrogen Vacuum Hot Water Boiler",
      zh: "ZKW系列低氮真空热水锅炉",
      es: "Caldera de Agua Caliente al Vacío de Bajo Nitrógeno Serie ZKW",
      fr: "Chaudière à Eau Chaude Sous Vide à Faible Teneur en Azote Série ZKW",
      de: "ZKW-Serie Niedrigstickstoff-Vakuum-Heißwasserkessel",
      ru: "Вакуумный водогрейный котел с низким содержанием азота серии ZKW",
      ar: "غلاية المياه الساخنة الفراغية منخفضة النيتروجين سلسلة ZKW"
    },
    description: {
      en: "Operates under negative pressure for absolute safety. Built-in heat exchanger ensures clean hot water and zero scaling.",
      zh: "负压运行，绝对安全。内置换热器确保提供清洁热水且永不结垢。",
      es: "Opera bajo presión negativa para una seguridad absoluta. El intercambiador de calor incorporado garantiza agua caliente limpia y cero incrustaciones.",
      fr: "Fonctionne sous pression négative pour une sécurité absolue. L'échangeur de chaleur intégré garantit une eau chaude propre et aucune accumulation de tartre.",
      de: "Betrieb unter Unterdruck für absolute Sicherheit. Eingebauter Wärmetauscher sorgt für sauberes heißes Wasser und null Verkalkung.",
      ru: "Работает под отрицательным давлением для абсолютной безопасности. Встроенный теплообменник обеспечивает чистую горячую воду и отсутствие накипи.",
      ar: "يعمل تحت ضغط سلبي لسلامة مطلقة. يضمن المبادل الحراري المدمج مياه ساخنة نظيفة وعدم وجود قشور."
    },
    fullDescription: {
      en: "The ZKW series vacuum hot water boiler is a revolutionary heating equipment that operates under negative pressure (-0.02 MPa). The internal heat medium water circulates in a sealed vacuum chamber and transfers heat to the external water through a built-in stainless steel heat exchanger. Because the medium water never leaves the boiler and is free of oxygen, the boiler offers an extremely long service life without scaling or corrosion. The internal pressure is always below atmospheric pressure, eliminating explosion risks. Its closed-loop design ensures no new water enters the main chamber, preventing scaling. The system can support multiple built-in heat exchangers to supply heating, domestic hot water, and swimming pool water simultaneously, making it ideal for high-end hotels, hospitals, and schools.",
      zh: "ZKW系列真空热水锅炉是一种在负压（-0.02 MPa）下运行的革命性供热设备。内部热媒水在密封的真空室中循环，通过内置的不锈钢换热器将热量传递给外部水。由于媒水从不离开锅炉且不含氧气，锅炉不仅使用寿命极长，且无结垢或腐蚀问题。内部压力始终低于大气压，彻底消除了爆炸风险。其闭环设计意味着没有新水进入主腔室，有效防止了结垢。该系统支持多个内置换热器，可同时供应采暖、生活热水和泳池水，是高端酒店、医院和学校的理想选择。",
      es: "La caldera de agua caliente al vacío de la serie ZKW es un equipo de calefacción revolucionario que opera bajo presión negativa (-0.02 MPa). El agua del medio térmico interno circula en una cámara de vacío sellada y transfiere calor al agua externa a través de un intercambiador de calor de acero inoxidable incorporado. Debido a que el agua del medio nunca sale de la caldera y está libre de oxígeno, la caldera ofrece una vida útil extremadamente larga sin incrustaciones ni corrosión. La presión interna siempre está por debajo de la presión atmosférica, eliminando los riesgos de explosión. Su diseño de circuito cerrado asegura que no entre agua nueva en la cámara principal, evitando la incrustación. El sistema puede soportar múltiples intercambiadores de calor incorporados para suministrar calefacción, agua caliente sanitaria y agua de piscina simultáneamente, lo que lo hace ideal para hoteles de alta gama, hospitales y escuelas.",
      fr: "La chaudière à eau chaude sous vide de la série ZKW est un équipement de chauffage révolutionnaire qui fonctionne sous pression négative (-0,02 MPa). L'eau du fluide caloporteur interne circule dans une chambre à vide scellée et transfère la chaleur à l'eau externe via un échangeur de chaleur en acier inoxydable intégré. Comme l'eau du fluide ne quitte jamais la chaudière et est exempte d'oxygène, la chaudière offre une durée de vie extrêmement longue sans entartrage ni corrosion. La pression interne est toujours inférieure à la pression atmosphérique, ce qui élimine les risques d'explosion. Sa conception en boucle fermée garantit qu'aucune nouvelle eau ne pénètre dans la chambre principale, empêchant ainsi l'entartrage. Le système peut prendre en charge plusieurs échangeurs de chaleur intégrés pour fournir simultanément le chauffage, l'eau chaude sanitaire et l'eau de piscine, ce qui le rend idéal pour les hôtels haut de gamme, les hôpitaux et les écoles.",
      de: "Der Vakuum-Heißwasserkessel der ZKW-Serie ist ein revolutionäres Heizgerät, das unter Unterdruck (-0,02 MPa) arbeitet. Das interne Wärmeträgerwasser zirkuliert in einer abgedichteten Vakuumkammer und überträgt über einen eingebauten Edelstahl-Wärmetauscher Wärme an das externe Wasser. Da das Trägerwasser den Kessel nie verlässt und sauerstofffrei ist, bietet der Kessel eine extrem lange Lebensdauer ohne Verkalkung oder Korrosion. Der Innendruck liegt immer unter dem Atmosphärendruck, wodurch Explosionsrisiken eliminiert werden. Sein geschlossenes Kreislaufdesign stellt sicher, dass kein neues Wasser in die Hauptkammer gelangt, was Verkalkung verhindert. Das System kann mehrere eingebaute Wärmetauscher unterstützen, um gleichzeitig Heizung, Brauchwarmwasser und Schwimmbadwasser zu liefern, was es ideal für High-End-Hotels, Krankenhäuser und Schulen macht.",
      ru: "Вакуумный водогрейный котел серии ZKW — это революционное отопительное оборудование, работающее под отрицательным давлением (-0,02 МПа). Внутренняя теплоносительная вода циркулирует в герметичной вакуумной камере и передает тепло внешней воде через встроенный теплообменник из нержавеющей стали. Поскольку теплоносительная вода никогда не покидает котел и не содержит кислорода, котел обеспечивает чрезвычайно долгий срок службы без накипи или коррозии. Внутреннее давление всегда ниже атмосферного, что исключает риск взрыва. Его конструкция с замкнутым контуром гарантирует, что новая вода не попадет в основную камеру, предотвращая образование накипи. Система может поддерживать несколько встроенных теплообменников для одновременной подачи отопления, горячего водоснабжения и воды для бассейна, что делает ее идеальной для элитных отелей, больниц и школ.",
      ar: "غلاية المياه الساخنة الفراغية سلسلة ZKW هي معدات تدفئة ثورية تعمل تحت ضغط سلبي (-0.02 ميجا باسكال). يدور ماء الوسط الحراري الداخلي في غرفة مفرغة محكمة الغلق وينقل الحرارة إلى الماء الخارجي من خلال مبادل حراري مدمج من الفولاذ المقاوم للصدأ. نظرًا لأن ماء الوسط لا يغادر الغلاية أبدًا وهو خالٍ من الأكسجين، فإن الغلاية توفر عمر خدمة طويل للغاية دون تكلس أو تآكل. الضغط الداخلي دائمًا أقل من الضغط الجوي، مما يزيل مخاطر الانفجار. يضمن تصميمه ذو الحلقة المغلقة عدم دخول مياه جديدة إلى الغرفة الرئيسية، مما يمنع التكلس. يمكن للنظام دعم العديد من المبادلات الحرارية المدمجة لتوفير التدفئة والمياه الساخنة المنزلية ومياه حمام السباحة في وقت واحد، مما يجعله مثاليًا للفنادق الراقية والمستشفيات والمدارس."
    },
    image: "/images/products/low-nitrogen-vacuum-boiler-premium-red.jpg",
    icon: "Leaf",
    features: [
      { en: "Negative Pressure Safety", zh: "负压安全运行", es: "Seguridad de presión negativa", fr: "Sécurité de pression négative", de: "Unterdrucksicherheit", ru: "Безопасность при отрицательном давлении", ar: "سلامة الضغط السلبي" },
      { en: "Built-in Heat Exchanger", zh: "内置换热器", es: "Intercambiador de calor incorporado", fr: "Échangeur de chaleur intégré", de: "Eingebauter Wärmetauscher", ru: "Встроенный теплообменник", ar: "مبادل حراري مدمج" },
      { en: "No Scaling, Long Life", zh: "永不结垢，长寿命", es: "Sin incrustaciones, larga vida", fr: "Pas d'entartrage, longue durée de vie", de: "Keine Verkalkung, lange Lebensdauer", ru: "Без накипи, долгий срок службы", ar: "بدون قشور، عمر طويل" },
      { en: "Multi-purpose Supply", zh: "一机多用", es: "Suministro multipropósito", fr: "Approvisionnement polyvalent", de: "Mehrzweckversorgung", ru: "Многоцелевое снабжение", ar: "تزويد متعدد الأغراض" },
      { en: "Low NOx Emissions", zh: "低氮排放", es: "Bajas emisiones de NOx", fr: "Faibles émissions de NOx", de: "Geringe NOx-Emissionen", ru: "Низкие выбросы NOx", ar: "انبعاثات أكاسيد النيتروجين منخفضة" }
    ],
    faq: [
      {
        question: {
          en: "Why is it called a 'Vacuum' boiler?",
          zh: "为什么叫“真空”锅炉？",
          es: "¿Por qué se llama caldera de 'vacío'?",
          fr: "Pourquoi l'appelle-t-on chaudière 'à vide' ?",
          de: "Warum nennt man es 'Vakuum'-Kessel?",
          ru: "Почему он называется 'вакуумным' котлом?",
          ar: "لماذا تسمى غلاية 'فراغية'؟"
        },
        answer: {
          en: "It operates under negative pressure (below atmospheric pressure). The internal heat medium boils at a lower temperature, which guarantees absolute safety against explosion and high efficiency.",
          zh: "它在负压（低于大气压）下运行。内部热媒在较低温度下沸腾，这保证了绝对的防爆安全性和高效率。",
          es: "Funciona bajo presión negativa (por debajo de la presión atmosférica). Garantiza una seguridad absoluta contra explosiones.",
          fr: "Elle fonctionne sous pression négative (inférieure à la pression atmosphérique). Garantit une sécurité absolue contre les explosions.",
          de: "Er arbeitet unter Unterdruck (unter Atmosphärendruck). Garantiert absolute Sicherheit gegen Explosionen.",
          ru: "Он работает под отрицательным давлением. Это гарантирует абсолютную защищенность от взрыва.",
          ar: "وهي تعمل تحت ضغط سلبي (أقل من الضغط الجوي). يضمن السلامة المطلقة ضد الانفجار."
        }
      },
      {
        question: {
          en: "Does this boiler suffer from scaling?",
          zh: "这台锅炉会结垢吗？",
          es: "¿Esta caldera sufre de incrustaciones?",
          fr: "Cette chaudière souffre-t-elle d'entartrage ?",
          de: "Leidet dieser Kessel unter Verkalkung?",
          ru: "Страдает ли этот котел от накипи?",
          ar: "هل تعاني هذه الغلاية من الترسبات؟"
        },
        answer: {
          en: "No. The internal medium water is in a closed loop and completely oxygen-free, so the boiler body never scales or corrodes, ensuring a service life of over 20 years.",
          zh: "不会。内部热媒水处于闭环状态且完全无氧，因此锅炉本体永远不会结垢或腐蚀，确保存使用寿命超过20年。",
          es: "No. El agua del medio interno está en un circuito cerrado, por lo que el cuerpo de la caldera nunca se incrusta ni se corroe.",
          fr: "Non. L'eau du milieu interne est en boucle fermée, donc le corps de la chaudière ne s'entartre ni ne se corrode jamais.",
          de: "Nein. Das innere Mediumwasser befindet sich in einem geschlossenen Kreislauf, so dass der Kesselkörper niemals verkalkt oder korrodiert.",
          ru: "Нет. Внутренняя среда находится в замкнутом контуре, поэтому корпус котла никогда не покрывается накипью и не подвергается коррозии.",
          ar: "لا. مياه الوسط الداخلي في حلقة مغلقة، لذلك لا يتكلس جسم الغلاية أو يتآكل أبدًا."
        }
      }
    ],
    specs: [
      {
        model: "ZKS0.35",
        capacity: "0.35 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "1340 L",
        outletDiameter: "DN50",
        fuelConsumption: "36.8 Nm³/h (Gas)"
      },
      {
        model: "ZKS0.5",
        capacity: "0.5 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "2000 L",
        outletDiameter: "DN65",
        fuelConsumption: "49 Nm³/h (Gas)"
      },
      {
        model: "ZKS0.7",
        capacity: "0.7 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "2600 L",
        outletDiameter: "DN80",
        fuelConsumption: "73.5 Nm³/h (Gas)"
      },
      {
        model: "ZKS1.05",
        capacity: "1.05 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "3250 L",
        outletDiameter: "DN100",
        fuelConsumption: "110.3 Nm³/h (Gas)"
      },
      {
        model: "ZKS1.4",
        capacity: "1.4 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "3950 L",
        outletDiameter: "DN100",
        fuelConsumption: "147 Nm³/h (Gas)"
      },
      {
        model: "ZKS1.75",
        capacity: "1.75 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "4920 L",
        outletDiameter: "DN125",
        fuelConsumption: "183.6 Nm³/h (Gas)"
      },
      {
        model: "ZKS2.1",
        capacity: "2.1 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "5950 L",
        outletDiameter: "DN125",
        fuelConsumption: "220.6 Nm³/h (Gas)"
      },
      {
        model: "ZKS2.8",
        capacity: "2.8 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "7430 L",
        outletDiameter: "DN150",
        fuelConsumption: "294.1 Nm³/h (Gas)"
      },
      {
        model: "ZKS3.5",
        capacity: "3.5 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "8520 L",
        outletDiameter: "DN150",
        fuelConsumption: "368 Nm³/h (Gas)"
      },
      {
        model: "ZKS4.2",
        capacity: "4.2 MW",
        pressure: "-0.02 MPa",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil",
        waterCapacity: "9560 L",
        outletDiameter: "DN200",
        fuelConsumption: "441.2 Nm³/h (Gas)"
      }
    ]
  },
  // 11. CWDR Horizontal Electric Hot Water Boiler
  {
    id: "cwdr-horizontal-electric-hot-water-boiler",
    category: "hot_water",
    name: {
      en: "CWDR Horizontal Electric Heating Hot Water Boiler",
      zh: "CWDR卧式电加热热水锅炉",
      es: "Caldera de Agua Caliente de Calefacción Eléctrica Horizontal CWDR",
      fr: "Chaudière à Eau Chaude Chauffage Électrique Horizontale CWDR",
      de: "CWDR-Horizontaler Elektroheizungs-Heißwasserkessel",
      ru: "Горизонтальный электрический водогрейный котел CWDR",
      ar: "غلاية المياه الساخنة التدفئة الكهربائية الأفقية CWDR"
    },
    description: {
      en: "Eco-friendly, silent, and 98% efficient. The ultimate green heating solution.",
      zh: "环保、静音、98%高效。终极绿色供暖解决方案。",
      es: "Ecológico, silencioso y 98% eficiente. La solución de calefacción verde definitiva.",
      fr: "Écologique, silencieux et efficace à 98 %. La solution de chauffage écologique ultime.",
      de: "Umweltfreundlich, leise und 98% effizient. Die ultimative grüne Heizlösung.",
      ru: "Экологичный, бесшумный и эффективный на 98%. Идеальное зеленое решение для отопления.",
      ar: "صديقة للبيئة، صامتة، وكفاءة 98٪. الحل الأمثل للتدفئة الخضراء."
    },
    fullDescription: {
      en: "The CWDR series is a horizontal electric hot water boiler designed for ease of use and maximum efficiency. It produces zero emissions and operates silently, making it perfect for residential areas, schools, and hospitals. It features high-quality heating elements using low-surface-load brand-name electric heating tubes for a lifespan exceeding 3000 hours. The system is equipped with a PLC intelligent control system capable of automatic temperature regulation, timing control, and load cycling to extend equipment life. Safety is prioritized with comprehensive protection against leakage, over-voltage, over-current, and water shortage. It achieves 98% thermal efficiency with segmented switching to match real-time load, minimizing electricity costs.",
      zh: "CWDR系列是专为易用性和最大效率而设计的卧式电热水锅炉。它零排放、静音运行，非常适合居民区、学校和医院。优采用低表面负荷的名牌电加热管，寿命超过3000小时。配备PLC智能控制系统，能够自动调节温度、定时控制和循环加载，延长设备寿命。具有漏电、过压、过流和缺水等全面保护功能。拥有98%的热效率，支持分段切换以匹配实时负载，最大限度地降低电费成本。",
      es: "La serie CWDR es una caldera de agua caliente eléctrica horizontal diseñada para facilitar su uso y máxima eficiencia. No produce emisiones y funciona silenciosamente, lo que la hace perfecta para áreas residenciales, escuelas y hospitales. Cuenta con elementos calefactores de alta calidad que utilizan tubos de calefacción eléctrica de marca de baja carga superficial para una vida útil superior a las 3000 horas. El sistema está equipado con un sistema de control inteligente PLC capaz de regular automáticamente la temperatura, controlar el tiempo y ciclar la carga para prolongar la vida útil del equipo. La seguridad es prioritaria con una protección integral contra fugas, sobretensión, sobrecorriente y escasez de agua. Logra una eficiencia térmica del 98% con conmutación segmentada para igualar la carga en tiempo real, minimizando los costos de electricidad.",
      fr: "La série CWDR est une chaudière à eau chaude électrique horizontale conçue pour la facilité d'utilisation et une efficacité maximale. Elle ne produit aucune émission et fonctionne silencieusement, ce qui la rend parfaite pour les zones résidentielles, les écoles et les hôpitaux. Elle dispose d'éléments chauffants de haute qualité utilisant des tubes chauffants électriques de marque à faible charge de surface pour une durée de vie supérieure à 3000 heures. Le système est équipé d'un système de contrôle intelligent API capable de réguler automatiquement la température, de contrôler le temps et de faire varier la charge pour prolonger la durée de vie de l'équipement. La sécurité est prioritaire avec une protection complète contre les fuites, les surtensions, les surintensités et les pénuries d'eau. Elle atteint une efficacité thermique de 98 % avec une commutation segmentée pour correspondre à la charge en temps réel, minimisant ainsi les coûts d'électricité.",
      de: "Die CWDR-Serie ist ein horizontaler Elektro-Heißwasserkessel, der für Benutzerfreundlichkeit und maximale Effizienz entwickelt wurde. Er erzeugt keine Emissionen und arbeitet geräuschlos, was ihn perfekt für Wohngebiete, Schulen und Krankenhäuser macht. Er verfügt über hochwertige Heizelemente mit Marken-Elektroheizrohren mit geringer Oberflächenbelastung für eine Lebensdauer von über 3000 Stunden. Das System ist mit einer intelligenten SPS-Steuerung ausgestattet, die in der Lage ist, die Temperatur automatisch zu regeln, die Zeitsteuerung zu steuern und Lastwechsel durchzuführen, um die Lebensdauer der Ausrüstung zu verlängern. Sicherheit hat Priorität mit umfassendem Schutz gegen Leckagen, Überspannung, Überstrom und Wassermangel. Er erreicht einen thermischen Wirkungsgrad von 98% mit segmentierter Schaltung, um die Echtzeitlast anzupassen und die Stromkosten zu minimieren.",
      ru: "Серия CWDR — это горизонтальный электрический водогрейный котел, разработанный для простоты использования и максимальной эффективности. Он не производит выбросов и работает бесшумно, что делает его идеальным для жилых районов, школ и больниц. Он оснащен высококачественными нагревательными элементами с использованием фирменных электрических нагревательных трубок с низкой поверхностной нагрузкой со сроком службы более 3000 часов. Система оснащена интеллектуальной системой управления PLC, способной автоматически регулировать температуру, контролировать время и циклически нагружать оборудование для продления срока его службы. Безопасность является приоритетом благодаря комплексной защите от утечек, перенапряжения, перегрузки по току и нехватки воды. Он достигает тепловой эффективности 98% благодаря сегментированному переключению для соответствия нагрузке в реальном времени, минимизируя расходы на электроэнергию.",
      ar: "سلسلة CWDR هي غلاية مياه ساخنة كهربائية أفقية مصممة لسهولة الاستخدام والكفاءة القصوى. لا تنتج أي انبعاثات وتعمل بصمت، مما يجعلها مثالية للمناطق السكنية والمدارس والمستشفيات. تتميز بعناصر تسخين عالية الجودة تستخدم أنابيب تسخين كهربائية ذات علامة تجارية منخفضة الحمل السطحي لعمر افتراضي يتجاوز 3000 ساعة. تم تجهيز النظام بنظام تحكم ذكي PLC قادر على التنظيم التلقائي لدرجة الحرارة، والتحكم في الوقت، ودورة التحميل لإطالة عمر المعدات. يتم إعطاء الأولوية للسلامة مع حماية شاملة ضد التسرب والجهد الزائد والتيار الزائد ونقص المياه. تحقق كفاءة حرارية بنسبة 98٪ مع تبديل مجزأ لمطابقة الحمل في الوقت الفعلي، مما يقلل من تكاليف الكهرباء."
    },
    image: "/images/products/wdr-electric-steam-boiler-premium.jpg",
    icon: "Zap",
    faq: [
      {
        question: {
          en: "What are the advantages of electric heating?",
          zh: "电加热有什么优点？",
          es: "¿Cuáles son las ventajas de la calefacción eléctrica?",
          fr: "Quels sont les avantages du chauffage électrique ?",
          de: "Welche Vorteile hat die Elektroheizung?",
          ru: "Каковы преимущества электрического отопления?",
          ar: "ما هي مزايا التدفئة الكهربائية؟"
        },
        answer: {
          en: "Electric heating offers zero emissions, silent operation, and high thermal efficiency (up to 98%). It also eliminates the need for fuel storage and pipelines.",
          zh: "电加热提供零排放、静音运行和高热效率（高达98%）。它还消除了对燃料储存和管道的需求。",
          es: "La calefacción eléctrica ofrece cero emisiones, funcionamiento silencioso y alta eficiencia térmica (hasta el 98%). También elimina el almacenamiento de combustible.",
          fr: "Le chauffage électrique offre zéro émission, un fonctionnement silencieux et une efficacité thermique élevée (jusqu'à 98 %). Il élimine également le besoin de stockage de carburant.",
          de: "Elektroheizung bietet null Emissionen, geräuschlosen Betrieb und einen hohen thermischen Wirkungsgrad (bis zu 98%). Außerdem entfallen Brennstofflager und Rohrleitungen.",
          ru: "Электрическое отопление обеспечивает нулевые выбросы, бесшумную работу и высокий тепловой КПД (до 98%). Оно также устраняет необходимость в хранении топлива.",
          ar: "توفر التدفئة الكهربائية صفر انبعاثات، وتشغيلًا صامتًا، وكفاءة حرارية عالية (تصل إلى 98٪). كما أنه يلغي الحاجة إلى تخزين الوقود وخطوط الأنابيب."
        }
      },
      {
        question: {
          en: "Is the electric heating element durable?",
          zh: "电加热元件耐用吗？",
          es: "¿Es duradero el elemento calefactor eléctrico?",
          fr: "L'élément chauffant électrique est-il durable ?",
          de: "Ist das elektrische Heizelement langlebig?",
          ru: "Долговечен ли электрический нагревательный элемент?",
          ar: "هل عنصر التسخين الكهربائي متين؟"
        },
        answer: {
          en: "We use high-quality brand-name electric heating tubes with low surface load, ensuring a service life of over 3000 hours.",
          zh: "我们采用低表面负荷的高品质名牌电加热管，确保使用寿命超过3000小时。",
          es: "Utilizamos tubos de calefacción eléctrica de marca de alta calidad con baja carga superficial, asegurando una vida útil superior a 3000 horas.",
          fr: "Nous utilisons des tubes chauffants électriques de marque de haute qualité avec une faible charge de surface, garantissant une durée de vie de plus de 3000 heures.",
          de: "Wir verwenden hochwertige Marken-Elektroheizrohre mit geringer Oberflächenbelastung, die eine Lebensdauer von über 3000 Stunden gewährleisten.",
          ru: "Мы используем высококачественные фирменные электрические нагревательные трубки с низкой поверхностной нагрузкой, обеспечивающие срок службы более 3000 часов.",
          ar: "نحن نستخدم أنابيب تسخين كهربائية عالية الجودة ذات علامة تجارية منخفضة الحمل السطحي، مما يضمن عمر خدمة يزيد عن 3000 ساعة."
        }
      }
    ],
    features: [
      { en: "Zero Emissions & Pollution", zh: "零排放零污染", es: "Cero emisiones y contaminación", fr: "Zéro émissions et pollution", de: "Null Emissionen & Verschmutzung", ru: "Нулевые выбросы и загрязнение", ar: "صفر انبعاثات وتلوث" },
      { en: "98% Ultra-High Efficiency", zh: "98%超高热效率", es: "Eficiencia ultra alta del 98%", fr: "Efficacité ultra-haute de 98 %", de: "98% Ultrahohe Effizienz", ru: "Сверхвысокая эффективность 98%", ar: "كفاءة فائقة 98٪" },
      { en: "Silent Operation", zh: "静音运行", es: "Funcionamiento silencioso", fr: "Fonctionnement silencieux", de: "Geräuschloser Betrieb", ru: "Бесшумная работа", ar: "تشغيل صامت" },
      { en: "Intelligent PLC Control", zh: "智能PLC控制", es: "Control inteligente PLC", fr: "Contrôle API intelligent", de: "Intelligente SPS-Steuerung", ru: "Интеллектуальное управление ПЛК", ar: "تحكم PLC ذكي" },
      { en: "Modular Heating Groups", zh: "模块化加热组", es: "Grupos de calefacción modulares", fr: "Groupes de chauffage modulaires", de: "Modulare Heizgruppen", ru: "Модульные нагревательные группы", ar: "مجموعات تسخين معيارية" }
    ],
    specs: [
      {
        model: "CWDR0.21-85/60",
        capacity: "0.21 MW",
        pressure: "Atmospheric",
        efficiency: "98%",
        fuel: "Electricity",
        outletTemp: "85°C",
        inletTemp: "60°C",
        heatingSurface: "1800 m²",
        dimensions: "1600 x 1000 x 1400 mm",
        weight: "0.9 T"
      },
      {
        model: "CWDR0.5-85/60",
        capacity: "0.5 MW",
        pressure: "Atmospheric",
        efficiency: "98%",
        fuel: "Electricity",
        outletTemp: "85°C",
        inletTemp: "60°C",
        heatingSurface: "4200 m²",
        dimensions: "1800 x 1200 x 1500 mm",
        weight: "1.4 T"
      },
      {
        model: "CWDR0.7-85/60",
        capacity: "0.7 MW",
        pressure: "Atmospheric",
        efficiency: "98%",
        fuel: "Electricity",
        outletTemp: "85°C",
        inletTemp: "60°C",
        heatingSurface: "6000 m²",
        dimensions: "2100 x 1200 x 1600 mm",
        weight: "2.1 T"
      },
      {
        model: "CWDR1.0-85/60",
        capacity: "1.0 MW",
        pressure: "Atmospheric",
        efficiency: "98%",
        fuel: "Electricity",
        outletTemp: "85°C",
        inletTemp: "60°C",
        heatingSurface: "9000 m²",
        dimensions: "2700 x 1300 x 1700 mm",
        weight: "2.5 T"
      },
      {
        model: "CWDR2.1-85/60",
        capacity: "2.1 MW",
        pressure: "Atmospheric",
        efficiency: "98%",
        fuel: "Electricity",
        outletTemp: "85°C",
        inletTemp: "60°C",
        heatingSurface: "18000 m²",
        dimensions: "3800 x 1600 x 2000 mm",
        weight: "3.8 T"
      },
      {
        model: "CWDR2.8-85/60",
        capacity: "2.8 MW",
        pressure: "Atmospheric",
        efficiency: "98%",
        fuel: "Electricity",
        outletTemp: "85°C",
        inletTemp: "60°C",
        heatingSurface: "24000 m²",
        dimensions: "4300 x 1800 x 2200 mm",
        weight: "5.7 T"
      }
    ]
  },
  // 12. LDR Vertical Electric Steam Boiler
  {
    id: "ldr-vertical-electric-steam-boiler",
    category: "steam",
    name: {
      en: "LDR Series Vertical Electric Steam Boiler",
      zh: "LDR系列立式电加热蒸汽锅炉",
      es: "Caldera de Vapor Eléctrica Vertical Serie LDR",
      fr: "Chaudière à Vapeur Électrique Verticale Série LDR",
      de: "Vertikaler elektrischer Dampfkessel der Serie LDR",
      ru: "Вертикальный электрический паровой котел серии LDR",
      ar: "غلاية البخار الكهربائية العمودية سلسلة LDR"
    },
    description: {
      en: "Compact electric steam boiler with segmented heating technology. 3 minutes to steam.",
      zh: "采用分段加热技术的紧凑型电蒸汽锅炉。3分钟快速出汽。",
      es: "Caldera de vapor eléctrica compacta con tecnología de calefacción segmentada. 3 minutos para vapor.",
      fr: "Chaudière à vapeur électrique compacte avec technologie de chauffage segmentée. 3 minutes pour la vapeur.",
      de: "Kompakter elektrischer Dampfkessel mit segmentierter Heiztechnologie. 3 Minuten bis zum Dampf.",
      ru: "Компактный электрический паровой котел с технологией сегментированного нагрева. 3 минуты до пара.",
      ar: "غلاية بخار كهربائية مدمجة مع تقنية تسخين مجزأة. 3 دقائق للبخار."
    },
    fullDescription: {
      en: "The LDR series is a vertical electric steam boiler designed for efficiency and grid stability. It features mechanical-electrical separation technology and segmented power switching, which adjusts power usage based on steam demand to minimize grid impact. The segmented heating system automatically adjusts the number of active heating groups to match load changes, saving energy. Heating elements are isolated from the control components to ensure safety and longevity. It produces dry, clean steam within 3-5 minutes of startup and includes comprehensive protection against over-pressure, low water level, phase loss, and leakage.",
      zh: "LDR系列是专为效率和电网稳定性设计的立式电蒸汽锅炉。它采用机电分离技术和分段功率切换，根据蒸汽需求调整功率使用，最大限度地减少对电网的冲击。分段加热系统自动调节投入工作的加热组数量以匹配负载变化，节约能源。加热元件与控制元件隔离，确保安全和长寿命。启动后3-5分钟内产生干燥、清洁的蒸汽，并包括过压、低水位、缺相和漏电保护。",
      es: "La serie LDR es una caldera de vapor eléctrica vertical diseñada para la eficiencia y la estabilidad de la red. Cuenta con tecnología de separación mecánica-eléctrica y conmutación de potencia segmentada, que ajusta el uso de energía en función de la demanda de vapor para minimizar el impacto en la red. El sistema de calefacción segmentado ajusta automáticamente el número de grupos de calefacción activos para que coincida con los cambios de carga, ahorrando energía. Los elementos calefactores están aislados de los componentes de control para garantizar la seguridad y la longevidad. Produce vapor seco y limpio dentro de los 3-5 minutos posteriores al arranque e incluye protección integral contra sobrepresión, bajo nivel de agua, pérdida de fase y fugas.",
      fr: "La série LDR est une chaudière à vapeur électrique verticale conçue pour l'efficacité et la stabilité du réseau. Elle dispose d'une technologie de séparation mécanique-électrique et d'une commutation de puissance segmentée, qui ajuste la consommation d'énergie en fonction de la demande de vapeur pour minimiser l'impact sur le réseau. Le système de chauffage segmenté ajuste automatiquement le nombre de groupes de chauffage actifs pour correspondre aux changements de charge, économisant ainsi de l'énergie. Les éléments chauffants sont isolés des composants de commande pour assurer la sécurité et la longévité. Elle produit de la vapeur sèche et propre dans les 3 à 5 minutes suivant le démarrage et comprend une protection complète contre la surpression, le faible niveau d'eau, la perte de phase et les fuites.",
      de: "Die LDR-Serie ist ein vertikaler elektrischer Dampfkessel, der für Effizienz und Netzstabilität entwickelt wurde. Sie verfügt über eine mechanisch-elektrische Trenntechnologie und eine segmentierte Leistungsschaltung, die den Stromverbrauch basierend auf dem Dampfbedarf anpasst, um die Auswirkungen auf das Netz zu minimieren. Das segmentierte Heizsystem passt automatisch die Anzahl der aktiven Heizgruppen an Laständerungen an und spart Energie. Heizelemente sind von den Steuerkomponenten isoliert, um Sicherheit und Langlebigkeit zu gewährleisten. Sie erzeugt innerhalb von 3-5 Minuten nach dem Start trockenen, sauberen Dampf und umfasst einen umfassenden Schutz gegen Überdruck, niedrigen Wasserstand, Phasenverlust und Leckagen.",
      ru: "Серия LDR — это вертикальный электрический паровой котел, разработанный для эффективности и стабильности сети. Он оснащен технологией механико-электрического разделения и сегментированным переключением мощности, которое регулирует потребление энергии в зависимости от потребности в паре для минимизации воздействия на сеть. Системы сегментированного нагрева автоматически регулируют количество активных групп нагрева в соответствии с изменениями нагрузки, экономя энергию. Нагревательные элементы изолированы от компонентов управления для обеспечения безопасности и долговечности. Он производит сухой, чистый пар в течение 3-5 минут после запуска и включает комплексную защиту от избыточного давления, низкого уровня воды, потери фазы и утечки.",
      ar: "سلسلة LDR هي غلاية بخار كهربائية عمودية مصممة للكفاءة واستقرار الشبكة. تتميز بتكنولوجيا الفصل الميكانيكي الكهربائي وتبديل الطاقة المجزأة، والتي تضبط استخدام الطاقة بناءً على الطلب على البخار لتقليل التأثير على الشبكة. يقوم نظام التسخين المجزأ تلقائيًا بضبط عدد مجموعات التسخين النشطة لمطابقة تغييرات الحمل، وتوفير الطاقة. يتم عزل عناصر التسخين عن مكونات التحكم لضمان السلامة وطول العمر. تنتج بخارًا جافًا ونظيفًا في غضون 3-5 دقائق من بدء التشغيل وتتضمن حماية شاملة ضد الضغط الزائد وانخفاض مستوى الماء وفقدان الطور والتسرب."
    },
    image: "/images/products/ldr-electric-steam-boiler-premium-v2.jpg",
    icon: "Zap",
    faq: [
      {
        question: {
          en: "Is this electric boiler safe to use?",
          zh: "这种电锅炉使用安全吗？",
          es: "¿Es seguro usar esta caldera eléctrica?",
          fr: "Cette chaudière électrique est-elle sûre à utiliser ?",
          de: "Ist dieser Elektrokessel sicher im Gebrauch?",
          ru: "Безопасно ли использовать этот электрический котел?",
          ar: "هل هذه الغلاية الكهربائية آمنة للاستخدام؟"
        },
        answer: {
          en: "Yes, it features a water-electricity separation design to prevent leakage risks. It also includes protection against over-voltage, low water level, and overheating.",
          zh: "是的，它采用水电分离设计，防止漏电风险。它还包括过压、低水位和过热保护。",
          es: "Sí, cuenta con un diseño de separación agua-electricidad para evitar riesgos de fugas. También incluye protección contra sobretensión, bajo nivel de agua y sobrecalentamiento.",
          fr: "Oui, elle dispose d'une conception de séparation eau-électricité pour éviter les risques de fuite. Elle comprend également une protection contre les surtensions, le niveau d'eau bas et la surchauffe.",
          de: "Ja, er verfügt über ein Wasser-Strom-Trennungsdesign, um Leckagerisiken zu vermeiden. Er umfasst auch Schutz gegen Überspannung, niedrigen Wasserstand und Überhitzung.",
          ru: "Да, он имеет конструкцию разделения воды и электричества для предотвращения рисков утечки. Он также включает защиту от перенапряжения, низкого уровня воды и перегрева.",
          ar: "نعم، تتميز بتصميم فصل الماء والكهرباء لمنع مخاطر التسرب. وتشمل أيضًا حماية ضد الجهد االزائد، وانخفاض مستوى الماء، والسخونة الزائدة."
        }
      },
      {
        question: {
          en: "Does it produce any noise during operation?",
          zh: "运行时有噪音吗？",
          es: "¿Produce algún ruido durante el funcionamiento?",
          fr: "Produit-elle du bruit pendant le fonctionnement ?",
          de: "Erzeugt er während des Betriebs Lärm?",
          ru: "Производит ли он шум во время работы?",
          ar: "هل تصدر أي ضجيج أثناء التشغيل؟"
        },
        answer: {
          en: "Electric boilers are extremely quiet compared to gas/oil boilers, making them perfect for laboratories, hospitals, or residential areas.",
          zh: "与燃油/燃气锅炉相比，电锅炉非常安静，非常适合实验室、医院或居民区。",
          es: "Las calderas eléctricas son extremadamente silenciosas en comparación con las calderas de gas/aceite, lo que las hace perfectas para laboratorios, hospitales o áreas residenciales.",
          fr: "Les chaudières électriques sont extrêmement silencieuses par rapport aux chaudières au gaz/fioul, ce qui les rend parfaites pour les laboratoires, les hôpitaux ou les zones résidentielles.",
          de: "Elektrokessel sind im Vergleich zu Gas-/Ölkesseln extrem leise, was sie perfekt für Labore, Krankenhäuser oder Wohngebiete macht.",
          ru: "Электрические котлы работают очень тихо по сравнению с газовыми/мазутными котлами, что делает их идеальными для лабораторий, больниц или жилых районов.",
          ar: "الغلايات الكهربائية هادئة للغاية مقارنة بغلايات الغاز/الزيت، مما يجعلها مثالية للمختبرات والمستشفيات أو المناطق السكنية."
        }
      }
    ],
    features: [
      { en: "Segmented Power Switching", zh: "分段功率切换", es: "Conmutación de potencia segmentada", fr: "Commutation de puissance segmentée", de: "Segmentierte Leistungsschaltung", ru: "Сегментированное переключение мощности", ar: "تبديل الطاقة المجزأة" },
      { en: "Water-Electricity Separation", zh: "水电分离设计", es: "Separación agua-electricidad", fr: "Séparation eau-électricité", de: "Wasser-Strom-Trennung", ru: "Разделение воды и электричества", ar: "فصل الماء والكهرباء" },
      { en: "Medical Grade Clean Steam", zh: "医疗级洁净蒸汽", es: "Vapor limpio de grado médico", fr: "Vapeur propre de qualité médicale", de: "Medizinischer reiner Dampf", ru: "Чистый пар медицинского класса", ar: "بخار نظيف من الدرجة الطبية" },
      { en: "No Chimney Required", zh: "无需烟囱", es: "No se requiere chimenea", fr: "Aucune cheminée requise", de: "Kein Schornstein erforderlich", ru: "Дымоход не требуется", ar: "لا حاجة لمدخنة" },
      { en: "98% Thermal Efficiency", zh: "98%热效率", es: "98% de eficiencia térmica", fr: "Efficacité thermique de 98 %", de: "98% thermischer Wirkungsgrad", ru: "Тепловой КПД 98%", ar: "كفاءة حرارية 98٪" }
    ],
    specs: [
      {
        model: "LDR0.1-0.4",
        capacity: "0.1 T/H",
        pressure: "0.4 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "151°C",
        dimensions: "900 x 900 x 2200 mm",
        weight: "615 kg"
      },
      {
        model: "LDR0.2-0.4",
        capacity: "0.2 T/H",
        pressure: "0.4 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "151°C",
        dimensions: "1000 x 1000 x 2500 mm",
        weight: "750 kg"
      },
      {
        model: "LDR0.3-0.4",
        capacity: "0.3 T/H",
        pressure: "0.4 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "151°C",
        dimensions: "1100 x 1100 x 2600 mm",
        weight: "920 kg"
      },
      {
        model: "LDR0.5-0.7",
        capacity: "0.5 T/H",
        pressure: "0.7 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "170°C",
        dimensions: "1400 x 1400 x 3200 mm",
        weight: "1350 kg"
      },
      {
        model: "LDR0.7-0.7",
        capacity: "0.7 T/H",
        pressure: "0.7 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "170°C",
        dimensions: "1300 x 1300 x 3500 mm",
        weight: "1800 kg"
      },
      {
        model: "LDR1.0-0.7",
        capacity: "1.0 T/H",
        pressure: "0.7 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "184°C",
        dimensions: "1600 x 1600 x 3600 mm",
        weight: "2100 kg"
      }
    ]
  },
  // 13. WDR Horizontal Electric Steam Boiler
  {
    id: "wdr-horizontal-electric-steam-boiler",
    category: "steam",
    name: {
      en: "WDR Horizontal Electric Steam Boiler",
      zh: "WDR卧式电加热蒸汽锅炉",
      es: "Caldera de Vapor Eléctrica Horizontal WDR",
      fr: "Chaudière à Vapeur Électrique Horizontale WDR",
      de: "WDR Horizontaler elektrischer Dampfkessel",
      ru: "Горизонтальный электрический паровой котел WDR",
      ar: "غلاية البخار الكهربائية الأفقية WDR"
    },
    description: {
      en: "Large capacity, high-efficiency horizontal electric steam boiler.",
      zh: "大容量、高效率卧式电加热蒸汽锅炉。",
      es: "Caldera de vapor eléctrica horizontal de gran capacidad y alta eficiencia.",
      fr: "Chaudière à vapeur électrique horizontale à grande capacité et haute efficacité.",
      de: "Horizontaler elektrischer Dampfkessel mit großer Kapazität und hohem Wirkungsgrad.",
      ru: "Мощный, высокоэффективный горизонтальный электрический паровой котел.",
      ar: "غلاية بخار كهربائية أفقية ذات سعة كبيرة وكفاءة عالية."
    },
    fullDescription: {
      en: "The WDR series is a large-capacity horizontal electric steam boiler designed for industrial applications requiring high-quality saturated steam. Its horizontal layout allows for a generous steam-water space, ensuring stable pressure and dry steam output (only 1-3% water content). The horizontal arrangement allows for better cooling of heating tubes, significantly extending their lifespan. It features fully automatic PLC control over pressure, water level, and timing, supporting remote monitoring. Comprehensive safety interlocks protect against over-pressure, low water level, and electrical faults.",
      zh: "WDR系列是大容量卧式电蒸汽锅炉，专为需要优质饱和蒸汽的工业应用而设计。其卧式布局提供了宽敞的汽水空间，确保压力稳定和干燥的蒸汽输出 （含水量仅1-3%）。卧式布置使加热管冷却更好，显著延长其使用寿命。它具有全自动PLC控制压力、水位和定时，支持远程监控。全面的安全联锁装置提供过压、低水位和电气故障保护。",
      es: "La serie WDR es una caldera de vapor eléctrica horizontal de gran capacidad diseñada para aplicaciones industriales que requieren vapor saturado de alta calidad. Su diseño horizontal permite un amplio espacio vapor-agua, asegurando una presión estable y una salida de vapor seco (solo 1-3% de contenido de agua). La disposición horizontal permite un mejor enfriamiento de los tubos calefactores, extendiendo significativamente su vida útil. Cuenta con control PLC totalmente automático sobre presión, nivel de agua y temporización, soportando monitoreo remoto. Los enclavamientos de seguridad integrales protegen contra sobrepresión, bajo nivel de agua y fallos eléctricos.",
      fr: "La série WDR est une chaudière à vapeur électrique horizontale de grande capacité conçue pour les applications industrielles nécessitant une vapeur saturée de haute qualité. Sa disposition horizontale permet un espace vapeur-eau généreux, assurant une pression stable et une sortie de vapeur sèche (seulement 1-3% de teneur en eau). La disposition horizontale permet un meilleur refroidissement des tubes chauffants, prolongeant considérablement leur durée de vie. Elle dispose d'un contrôle PLC entièrement automatique de la pression, du niveau d'eau et de la minuterie, prenant en charge la surveillance à distance. Des verrouillages de sécurité complets protègent contre la surpression, le faible niveau d'eau et les défauts électriques.",
      de: "Die WDR-Serie ist ein horizontaler elektrischer Dampfkessel mit großer Kapazität, der für industrielle Anwendungen entwickelt wurde, die hochwertigen Sattdampf erfordern. Das horizontale Layout bietet einen großzügigen Dampf-Wasser-Raum, der einen stabilen Druck und eine trockene Dampfabgabe (nur 1-3% Wassergehalt) gewährleistet. Die horizontale Anordnung ermöglicht eine bessere Kühlung der Heizrohre und verlängert deren Lebensdauer erheblich. Sie verfügt über eine vollautomatische SPS-Steuerung für Druck, Wasserstand und Zeitsteuerung und unterstützt die Fernüberwachung. Umfassende Sicherheitsverriegelungen schützen vor Überdruck, niedrigem Wasserstand und elektrischen Störungen.",
      ru: "Серия WDR — это мощные горизонтальные электрические паровые котлы, разработанные для промышленных применений, требующих качественного насыщенного пара. Горизонтальная компоновка обеспечивает просторное пароводяное пространство, гарантируя стабильное давление и выдачу сухого пара (содержание влаги всего 1-3%). Горизонтальное расположение способствует лучшему охлаждению нагревательных трубок, значительно продлевая их срок службы. Оснащен полностью автоматическим ПЛК-управлением давлением, уровнем воды и таймингом, поддерживает удаленный мониторинг. Комплексные защитные блокировки предотвращают превышение давления, низкий уровень воды и электрические сбои.",
      ar: "سلسلة WDR هي غلاية بخار كهربائية أفقية ذات سعة كبيرة مصممة للتطبيقات الصناعية التي تتطلب بخارًا مشبعًا عالي الجودة. يسمح تصميمها الأفقي بمساحة وفيرة للبخار والماء، مما يضمن ضغطًا مستقرًا ومخرجات بخار جاف (محتوى مائي 1-3٪ فقط). يسمح الترتيب الأفقي بتبريد أفضل لأنابيب التسخين، مما يطيل عمرها بشكل كبير. تتميز بالتحكم PLC التلقائي بالكامل في الضغط ومستوى المياه والتوقيت، مما يدعم المراقبة عن بعد. توفر أقفال الأمان الشاملة حماية ضد الضغط الزائد وانخفاض مستوى المياه والأعطال الكهربائية."
    },
    image: "/images/products/wdr-electric-steam-boiler-premium.jpg",
    icon: "Zap",
    features: [
      {
        en: "Horizontal Design for Longevity",
        zh: "延长寿命的卧式设计",
        es: "Diseño horizontal para mayor longevidad",
        fr: "Conception horizontale pour la longévité",
        de: "Horizontales Design für Langlebigkeit",
        ru: "Горизонтальная конструкция для долговечности",
        ar: "تصميم أفقي لطول العمر"
      },
      {
        en: "High Quality Saturated Steam",
        zh: "优质饱和蒸汽",
        es: "Vapor saturado de alta calidad",
        fr: "Vapeur saturée de haute qualité",
        de: "Hochwertiger Sattdampf",
        ru: "Высококачественный насыщенный пар",
        ar: "بخار مشبع عالي الجودة"
      },
      {
        en: "PLC Intelligent Control",
        zh: "PLC智能控制",
        es: "Control inteligente PLC",
        fr: "Contrôle intelligent PLC",
        de: "SPS-Intelligente Steuerung",
        ru: "Интеллектуальное управление PLC",
        ar: "تحكم ذكي PLC"
      },
      {
        en: "98% Thermal Efficiency",
        zh: "98%热效率",
        es: "98% de eficiencia térmica",
        fr: "Efficacité thermique de 98%",
        de: "98% thermischer Wirkungsgrad",
        ru: "Тепловой КПД 98%",
        ar: "كفاءة حرارية 98٪"
      },
      {
        en: "Multi-level Protection",
        zh: "多重安全保护",
        es: "Protección multinivel",
        fr: "Protection multi-niveaux",
        de: "Mehrstufiger Schutz",
        ru: "Многоуровневая защита",
        ar: "حماية متعددة المستويات"
      }
    ],
    faq: [
      {
        question: {
          en: "How durable are the electric heating elements?",
          zh: "电加热元件耐用吗？",
          es: "¿Qué tan duraderos son los elementos calefactores eléctricos?",
          fr: "Quelle est la durabilité des éléments chauffants électriques ?",
          de: "Wie langlebig sind die elektrischen Heizelemente?",
          ru: "Насколько долговечны электрические нагревательные элементы?",
          ar: "ما مدى متانة عناصر التسخين الكهربائية؟"
        },
        answer: {
          en: "We use premium Incoloy 800 or 316L stainless steel heating tubes with low surface load design, significantly extending their lifespan and resisting scale accumulation.",
          zh: "我们采用优质Incoloy 800或316L不锈钢加热管，配合低表面负荷设计，显著延长使用寿命并防止结垢及腐蚀。",
          es: "Utilizamos tubos de calefacción de acero inoxidable Incoloy 800 o 316L de primera calidad para una vida útil prolongada.",
          fr: "Nous utilisons des tubes chauffants en acier inoxydable Incoloy 800 ou 316L de qualité supérieure pour une durée de vie prolongée.",
          de: "Wir verwenden hochwertige Incoloy 800 oder 316L Edelstahl-Heizrohre für eine verlängerte Lebensdauer.",
          ru: "Мы используем нагревательные трубки из нержавеющей стали Incoloy 800 или 316L премиум-класса для продления срока службы.",
          ar: "نستخدم أنابيب تسخين من الفولاذ المقاوم للصدأ Incoloy 800 أو 316L عالية الجودة لإطالة العمر الافتراضي."
        }
      },
      {
        question: {
          en: "Is the steam suitable for food processing?",
          zh: "这产生的蒸汽适合食品加工吗？",
          es: "¿El vapor es adecuado para el procesamiento de alimentos?",
          fr: "La vapeur convient-elle à la transformation des aliments ?",
          de: "Ist der Dampf für die Lebensmittelverarbeitung geeignet?",
          ru: "Подходит ли пар для пищевой промышленности?",
          ar: "هل البخار مناسب لتجهيز الأغذية؟"
        },
        answer: {
          en: "Yes, electric boilers produce pure, clean steam without any combustion residues, making it ideal for the food processing, pharmaceutical, and sterilization industries.",
          zh: "是的，电锅炉产生纯净、清洁的蒸汽，没有任何燃烧残留物，非常适合食品加工、制药和灭菌行业。",
          es: "Sí, las calderas eléctricas producen vapor puro y limpio, ideal para las industrias alimentaria y farmacéutica.",
          fr: "Oui, les chaudières électriques produisent une vapeur pure et propre, idéale pour les industries agroalimentaires et pharmaceutiques.",
          de: "Ja, Elektrokessel erzeugen reinen, sauberen Dampf, ideal für die Lebensmittel- und Pharmaindustrie.",
          ru: "Да, электрические котлы производят чистый пар, идеально подходящий для пищевой и фармацевтической промышленности.",
          ar: "نعم، تنتج الغلايات الكهربائية بخارًا نقيًا ونظيفًا، وهو مثالي للصناعات الغذائية والصيدلانية."
        }
      }
    ],
    specs: [
      {
        model: "WDR0.3-0.7/1.0",
        capacity: "0.3 T/H",
        pressure: "0.7 / 1.0 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "170 / 184°C",
        dimensions: "1600 x 1400 x 1600 mm",
        weight: "1.2 T"
      },
      {
        model: "WDR0.5-0.7/1.0",
        capacity: "0.5 T/H",
        pressure: "0.7 / 1.0 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "170 / 184°C",
        dimensions: "1800 x 1500 x 1700 mm",
        weight: "1.6 T"
      },
      {
        model: "WDR0.7-0.7/1.0",
        capacity: "0.7 T/H",
        pressure: "0.7 / 1.0 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "170 / 184°C",
        dimensions: "2000 x 1600 x 1750 mm",
        weight: "2.1 T"
      },
      {
        model: "WDR1.0-1.0/1.25",
        capacity: "1.0 T/H",
        pressure: "1.0 / 1.25 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "184 / 194°C",
        dimensions: "2200 x 1700 x 1850 mm",
        weight: "2.8 T"
      },
      {
        model: "WDR2.0-1.0/1.25",
        capacity: "2.0 T/H",
        pressure: "1.0 / 1.25 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "184 / 194°C",
        dimensions: "2800 x 1900 x 2100 mm",
        weight: "4.5 T"
      },
      {
        model: "WDR3.0-1.0/1.25",
        capacity: "3.0 T/H",
        pressure: "1.0 / 1.25 MPa",
        efficiency: "≥ 98%",
        fuel: "Electricity",
        steamTemp: "184 / 194°C",
        dimensions: "3200 x 2100 x 2300 mm",
        weight: "6.2 T"
      }
    ]
  },
  // 14. Horizontal Biomass Steam Generator
  {
    id: "horizontal-biomass-steam-generator",
    category: "steam",
    name: {
      en: "Horizontal Biomass Steam Generator",
      zh: "卧式生物质蒸汽发生器",
      es: "Generador de Vapor de Biomasa Horizontal",
      fr: "Générateur de Vapeur à Biomasse Horizontal",
      de: "Horizontaler Biomasse-Dampferzeuger",
      ru: "Горизонтальный парогенератор на биомассе",
      ar: "مولد بخار الكتلة الحيوية الأفقي"
    },
    description: {
      en: "Green power solution: Low cost, renewable, and fast steam generation.",
      zh: "绿色动力源：低成本、可再生、快速产汽。",
      es: "Solución de energía verde: bajo costo, renovable y generación rápida de vapor.",
      fr: "Solution d'énergie verte : faible coût, renouvelable et génération rapide de vapeur.",
      de: "Grüne Energielösung: Kostengünstig, erneuerbar und schnelle Dampferzeugung.",
      ru: "Зеленое энергетическое решение: низкая стоимость, возобновляемость и быстрая генерация пара.",
      ar: "حل الطاقة الخضراء: تكلفة منخفضة، متجددة، وتوليد بخار سريع."
    },
    fullDescription: {
      en: "Our Horizontal Biomass Steam Generator is a green power solution designed for businesses seeking low operational costs. It features an advanced automated feeding system and utilizes renewable biomass pellets (wood, straw, etc.) as fuel. With ultra-low operating costs (1/2 of natural gas, 1/4 of electricity), it is a fast ROI choice. The horizontal design ensures stable water level control and a larger steam space, capable of generating high-quality steam within 5-10 minutes of startup. The multi-pass flue design with built-in turbulators absorbs exhaust heat fully, achieving >90% thermal efficiency. Water volume < 30L often exempts it from complex government approvals. It is ideal for Food Processing, Laundry, Wood Processing, Chemical Industry, and Agriculture.",
      zh: "这款卧式生物质蒸汽发生器专为追求低运行成本的企业设计，是绿色的动力源。它采用先进的机械化自动给料系统，以木质颗粒、秸秆颗粒等可再生生物质为燃料。运行成本极低（仅为天然气的1/2，电加热的1/4），是回本最快的选择。其卧式设计保证了更稳定的水位控制和更大的蒸汽空间，能够在启动后5-10分钟内快速产生高质量蒸汽。采用多回程烟道设计，内置高效扰流片，充分吸收烟气余热，热效率高达90%以上。水容量小于30L，通常免除复杂的政府审批手续。非常适合食品加工、洗涤熨烫、木材加工、化工及农业温室等行业。",
      es: "Nuestro generador de vapor de biomasa horizontal es una solución de energía verde diseñada para empresas que buscan bajos costos operativos. Cuenta con un avanzado sistema de alimentación automatizado y utiliza pellets de biomasa renovables (madera, paja, etc.) como combustible. Con costos operativos ultra bajos (1/2 de gas natural, 1/4 de electricidad), es una opción de ROI rápido. El diseño horizontal garantiza un control estable del nivel de agua y un mayor espacio de vapor, capaz de generar vapor de alta calidad dentro de los 5-10 minutos posteriores al arranque. El diseño de combustión de múltiples pasos con turbuladores incorporados absorbe completamente el calor de escape, logrando una eficiencia térmica superior al 90%. El volumen de agua < 30 L a menudo lo exime de aprobaciones gubernamentales complejas. Es ideal para procesamiento de alimentos, lavandería, procesamiento de madera, industria química y agricultura.",
      fr: "Notre générateur de vapeur à biomasse horizontal est une solution d'énergie verte conçue pour les entreprises à la recherche de faibles coûts d'exploitation. Il dispose d'un système d'alimentation automatisé avancé et utilise des granulés de biomasse renouvelables (bois, paille, etc.) comme combustible. Avec des coûts d'exploitation ultra-bas (1/2 du gaz naturel, 1/4 de l'électricité), c'est un choix à retour sur investissement rapide. La conception horizontale assure un contrôle stable du niveau d'eau et un espace vapeur plus grand, capable de générer de la vapeur de haute qualité en 5 à 10 minutes après le démarrage. La conception du conduit de fumée à plusieurs passages avec turbulateurs intégrés absorbe complètement la chaleur d'échappement, atteignant une efficacité thermique > 90 %. Le volume d'eau < 30 L l'exempte souvent des approbations gouvernementales complexes. Il est idéal pour la transformation des aliments, la blanchisserie, la transformation du bois, l'industrie chimique et l'agriculture.",
      de: "Unser Horizontaler Biomasse-Dampferzeuger ist eine grüne Energielösung für Unternehmen, die niedrige Betriebskosten suchen. Er verfügt über ein fortschrittliches automatisiertes Zuführsystem und nutzt erneuerbare Biomassepellets (Holz, Stroh usw.) als Brennstoff. Mit extrem niedrigen Betriebskosten (1/2 von Erdgas, 1/4 von Strom) ist er eine schnelle ROI-Wahl. Das horizontale Design sorgt für eine stabile Wasserstandskontrolle und einen größeren Dampfraum, der in der Lage ist, innerhalb von 5-10 Minuten nach dem Start hochwertigen Dampf zu erzeugen. Das Mehrzug-Rauchgasdesign mit eingebauten Turbulatoren absorbiert die Abgaswärme vollständig und erreicht einen thermischen Wirkungsgrad von >90%. Ein Wasservolumen von < 30 L befreit ihn oft von komplexen behördlichen Genehmigungen. Er ist ideal für Lebensmittelverarbeitung, Wäscherei, Holzverarbeitung, chemische Industrie und Landwirtschaft.",
      ru: "Наш горизонтальный парогенератор на биомассе — это зеленое энергетическое решение, разработанное для предприятий, стремящихся к низким эксплуатационным расходам. Он оснащен передовой автоматизированной системой подачи и использует возобновляемые пеллеты из биомассы (дерево, солома и т. д.) в качестве топлива. Благодаря сверхнизким эксплуатационным расходам (1/2 от природного газа, 1/4 от электричества) это выбор с быстрой окупаемостью. Горизонтальная конструкция обеспечивает стабильный контроль уровня воды и большее паровое пространство, способное генерировать высококачественный пар в течение 5-10 минут после запуска. Многоходовая конструкция дымохода со встроенными турбулизаторами полностью поглощает тепло выхлопных газов, достигая теплового КПД >90%. Объем воды < 30 л часто освобождает его от сложных правительственных согласований. Идеально подходит для пищевой промышленности, прачечных, деревообработки, химической промышленности и сельского хозяйства.",
      ar: "مولد بخار الكتلة الحيوية الأفقي لدينا هو حل للطاقة الخضراء مصمم للشركات التي تسعى للحصول على تكاليف تشغيل منخفضة. يتميز بنظام تغذية آلي متقدم ويستخدم كريات الكتلة الحيوية المتجددة (الخشب والقش وما إلى ذلك) كوقود. مع تكاليف تشغيل منخفضة للغاية (1/2 من الغاز الطبيعي، 1/4 من الكهرباء)، فهو خيار عائد استثمار سريع. يضمن التصميم الأفقي تحكمًا مستقرًا في مستوى المياه ومساحة بخار أكبر، قادرة على توليد بخار عالي الجودة في غضون 5-10 دقائق من بدء التشغيل. يمتص تصميم المداخن متعدد الممرات مع الخزانات المدمجة حرارة العادم بالكامل، مما يحقق كفاءة حرارية تزيد عن 90٪. حجم الماء < 30 لتر يعفيه في كثير من الأحيان من الموافقات الحكومية المعقدة. إنه مثالي لمعالجة الأغذية والمغاسل ومعالجة الأخشاب والصناعة الكيميائية والزراعة."
    },
    image: "/images/products/biomass-steam-generator-premium.jpg",
    icon: "Leaf",
    features: [
      { en: "Ultra-low Operating Cost", zh: "极低运行成本", es: "Costo operativo ultra bajo", fr: "Coût d'exploitation ultra-bas", de: "Extrem niedrige Betriebskosten", ru: "Сверхнизкие эксплуатационные расходы", ar: "تكلفة تشغيل منخفضة للغاية" },
      { en: "Inspection-free (<30L)", zh: "免报检 (<30L)", es: "Sin inspección (<30L)", fr: "Sans inspection (<30L)", de: "Inspektionsfrei (<30L)", ru: "Без инспекции (<30L)", ar: "خالية من التفتيش (<30 لتر)" },
      { en: "Automatic Feeding & Ignition", zh: "自动给料点火", es: "Alimentación e ignición automáticas", fr: "Alimentation et allumage automatiques", de: "Automatische Zuführung & Zündung", ru: "Автоматическая подача и розжиг", ar: "تغذية وإشعال تلقائي" },
      { en: ">90% Thermal Efficiency", zh: ">90% 高热效率", es: ">90% de eficiencia térmica", fr: ">90 % d'efficacité thermique", de: ">90% thermischer Wirkungsgrad", ru: ">90% тепловой эффективности", ar: "> 90٪ كفاءة حرارية" },
      { en: "Carbon Neutral", zh: "低碳环保", es: "Carbono neutral", fr: "Neutre en carbone", de: "Kohlenstoffneutral", ru: "Углеродно-нейтральный", ar: "محايد للكربون" }
    ],
    faq: [
      {
        question: {
          en: "Does it emit black smoke?",
          zh: "它会排放黑烟吗？",
          es: "¿Emite humo negro?",
          fr: "Émet-il de la fumée noire ?",
          de: "Stößt er schwarzen Rauch aus?",
          ru: "Выделяет ли он черный дым?",
          ar: "هل ينبعث منه دخان أسود؟"
        },
        answer: {
          en: "No. With our advanced cyclone dust collector and optimized semi-gasification combustion, the exhaust is clean and clear, meeting strict environmental standards without visible smoke.",
          zh: "不会。配合我们先进的旋风除尘器和优化的半气化燃烧技术，排烟清洁无色，符合严格的环保标准，无可见烟雾。",
          es: "No. Con nuestro colector de polvo ciclónico y combustión optimizada, el escape es limpio y claro.",
          fr: "Non. Avec notre dépoussiéreur cyclone et une combustion optimisée, l'échappement est propre et clair.",
          de: "Nein. Mit unserem Zyklonstaubabscheider und optimierter Verbrennung ist das Abgas sauber und klar.",
          ru: "Нет. С нашим циклонным пылеуловителем и оптимизированным сжиганием выхлоп чистый и прозрачный.",
          ar: "لا. مع مجمع الغبار الإعصاري المتقدم والاحتراق المحسن، يكون العادم نظيفًا وواضحًا."
        }
      },
      {
        question: {
          en: "How much can I save compared to gas/diesel?",
          zh: "相比燃气/柴油，我能省多少钱？",
          es: "¿Cuánto puedo ahorrar en comparación con gas/diesel?",
          fr: "Combien puis-je économiser par rapport au gaz/diesel ?",
          de: "Wie viel kann ich im Vergleich zu Gas/Diesel sparen?",
          ru: "Сколько я могу сэкономить по сравнению с газом/дизелем?",
          ar: "كم يمكنني التوفير مقارنة بالغاز/الديزل؟"
        },
        answer: {
          en: "Biomass usage typically reduces fuel costs by 30-50% compared to natural gas and can be up to 70% cheaper than diesel or electricity.",
          zh: "与天然气相比，生物质的使用通常可降低30-50%的燃料成本，比柴油或电力便宜可达70%。",
          es: "El uso de biomasa generalmente reduce los costos de combustible en un 30-50% en comparación con el gas natural.",
          fr: "L'utilisation de la biomasa réduit généralement les coûts de carburant de 30 à 50 % par rapport au gaz naturel.",
          de: "Die Nutzung von Biomasse senkt die Brennstoffkosten im Vergleich zu Erdgas in der Regel um 30-50%.",
          ru: "Использование биомассы обычно снижает расходы на топливо на 30-50% по сравнению с природным газом.",
          ar: "يقلل استخدام الكتلة الحيوية عادةً من تكاليف الوقود بنسبة 30-50٪ مقارنة بالغاز الطبيعي."
        }
      }
    ],
    specs: [
      {
        model: "YDZ-100",
        capacity: "100 kg/h",
        pressure: "0.7 MPa",
        efficiency: "≥ 88%",
        fuel: "Biomass",
        steamTemp: "170°C",
        fuelConsumption: "~15-18 kg/h",
        powerSupply: "380V/50Hz",
        totalPower: "1.5 kW",
        waterCapacity: "< 30 L",
        dimensions: "1600 x 900 x 1550 mm",
        weight: "650 kg"
      },
      {
        model: "YDZ-200",
        capacity: "200 kg/h",
        pressure: "0.7 MPa",
        efficiency: "≥ 89%",
        fuel: "Biomass",
        steamTemp: "170°C",
        fuelConsumption: "~30-35 kg/h",
        powerSupply: "380V/50Hz",
        totalPower: "2.2 kW",
        waterCapacity: "< 30 L",
        dimensions: "1850 x 1100 x 1650 mm",
        weight: "950 kg"
      },
      {
        model: "YDZ-500",
        capacity: "500 kg/h",
        pressure: "0.7 / 1.0 MPa",
        efficiency: "≥ 90%",
        fuel: "Biomass",
        steamTemp: "170 / 184°C",
        fuelConsumption: "~75-85 kg/h",
        powerSupply: "380V/50Hz",
        totalPower: "4.5 kW",
        waterCapacity: "~150 L",
        dimensions: "2200 x 1500 x 2100 mm",
        weight: "2200 kg"
      },
      {
        model: "YDZ-1000",
        capacity: "1000 kg/h",
        pressure: "0.7 / 1.0 MPa",
        efficiency: "≥ 92%",
        fuel: "Biomass",
        steamTemp: "170 / 184°C",
        fuelConsumption: "~150-170 kg/h",
        powerSupply: "380V/50Hz",
        totalPower: "7.5 kW",
        waterCapacity: "~280 L",
        dimensions: "2800 x 1800 x 2400 mm",
        weight: "3500 kg"
      }
    ]
  },
  // 15. Gas Steam Generator
  {
    id: "gas-steam-generator",
    category: "steam",
    name: {
      en: "Gas Fired Steam Generator",
      zh: "燃气蒸汽发生器",
      es: "Generador de Vapor a Gas",
      fr: "Générateur de Vapeur au Gaz",
      de: "Gasbefeuerter Dampferzeuger",
      ru: "Газовый парогенератор",
      ar: "مولد بخار يعمل بالغاز"
    },
    description: {
      en: "3-minute fast steam, inspection-free (<30L), 99% efficient condensing technology.",
      zh: "3分钟闪速出汽，免报检 (<30L)，99%高效全冷凝技术。",
      es: "Vapor rápido en 3 minutos, sin inspección (<30L), tecnología de condensación con 99% de eficiencia.",
      fr: "Vapeur rapide en 3 minutes, sans inspection (<30L), technologie de condensation efficace à 99 %.",
      de: "3 Minuten schneller Dampf, inspektionsfrei (<30L), 99% effiziente Brennwerttechnik.",
      ru: "Быстрый пар за 3 минуты, без инспекции (<30 л), конденсационная технология с эффективностью 99%.",
      ar: "بخار سريع في 3 دقائق، خالي من الفحص (<30 لتر)، تقنية تكثيف بكفاءة 99٪."
    },
    fullDescription: {
      en: "The gas steam generator adopts specified finned tube heat exchange technology, producing high-pressure steam in just 3-5 minutes from a cold start. Its water volume design is less than 30L, exempting it from complex boiler safety regulations in many regions. Equipped with a built-in condenser to fully recover exhaust heat, it achieves thermal efficiency up to 99%. It uses staged combustion or fully premixed combustion technology to ensure ultra-low NOx (<30mg) emissions. The modular design supports multi-unit parallel operation, automatically adjusting the number of active units based on steam demand, saving over 20% energy compared to a single large boiler.",
      zh: "燃气蒸汽发生器采用翅片管换热技术，冷机启动仅需3-5分钟即可产出高压蒸汽。水容积设计小于30L，符合多数国家（如中国及东南亚部分地区）的锅炉安全监管免除标准，省去复杂的审批手续。配备内置冷凝器，充分回收烟气余热，热效率最高可达99%。采用分级燃烧技术或全预混燃烧技术，实现超低氮排放（<30mg）。支持模块化组合和多机并联使用，根据用气量自动调节启停数量，比单台大锅炉节能20%以上。",
      es: "El generador de vapor a gas adopta una tecnología de intercambio de calor de tubo con aletas especificada, produciendo vapor a alta presión en solo 3-5 minutos desde un arranque en frío. Su diseño de volumen de agua es inferior a 30L, lo que lo exime de las complejas regulaciones de seguridad de calderas en muchas regiones. Equipado con un condensador incorporado para recuperar completamente el calor de escape, logra una eficiencia térmica de hasta el 99%. Utiliza tecnología de combustión por etapas o combustión completamente premezclada para garantizar emisiones de NOx ultra bajas (<30mg). El diseño modular admite el funcionamiento en paralelo de múltiples unidades, ajustando automáticamente el número de unidades activas en función de la demanda de vapor, ahorrando más del 20% de energía en comparación con una sola caldera grande.",
      fr: "Le générateur de vapeur au gaz adopte une technologie d'échange de chaleur à tubes à ailettes spécifiée, produisant de la vapeur haute pression en seulement 3 à 5 minutes à partir d'un démarrage à froid. Sa conception de volume d'eau est inférieure à 30 L, ce qui l'exonère des réglementations complexes en matière de sécurité des chaudières dans de nombreuses régions. Équipé d'un condenseur intégré pour récupérer entièrement la chaleur d'échappement, il atteint une efficacité thermique allant jusqu'à 99 %. Il utilise une technologie de combustion étagée ou de combustion entièrement prémélangée pour garantir des émissions de NOx ultra-faibles (<30 mg). La conception modulaire prend en charge le fonctionnement en parallèle de plusieurs unités, ajustant automatiquement le nombre d'unités actives en fonction de la demande de vapeur, économisant plus de 20 % d'énergie par rapport à une seule grande chaudière.",
      de: "Der Gas-Dampferzeuger verwendet eine spezielle Rippenrohr-Wärmetauschtechnologie und erzeugt Hochdruckdampf in nur 3-5 Minuten nach dem Kaltstart. Sein Wasservolumen ist auf weniger als 30 l ausgelegt, wodurch er in vielen Regionen von komplexen Kesselsicherheitsvorschriften befreit ist. Ausgestattet mit einem eingebauten Kondensator zur vollständigen Rückgewinnung der Abgaswärme erreicht er einen thermischen Wirkungsgrad von bis zu 99%. Er verwendet gestufte Verbrennungs- oder voll vorgemischte Verbrennungstechnologie, um extrem niedrige NOx-Emissionen (<30 mg) zu gewährleisten. Das modulare Design unterstützt den Parallelbetrieb mehrerer Einheiten und passt die Anzahl der aktiven Einheiten automatisch an den Dampfbedarf an, wodurch im Vergleich zu einem einzelnen großen Kessel über 20% Energie eingespart werden.",
      ru: "Газовый парогенератор использует специальную технологию теплообмена с ребристыми трубами, производя пар высокого давления всего за 3-5 минут после холодного пуска. Его конструкция объема воды составляет менее 30 л, что освобождает его от сложных правил безопасности котлов во многих регионах. Оснащен встроенным конденсатором для полной рекуперации тепла выхлопных газов, достигая тепловой эффективности до 99%. Использует технологию ступенчатого сжигания или полностью предварительно смешанного сжигания для обеспечения сверхнизких выбросов NOx (<30 мг). Модульная конструкция поддерживает параллельную работу нескольких блоков, автоматически регулируя количество активных блоков в зависимости от потребности в паре, экономя более 20% энергии по сравнению с одним большим котлом.",
      ar: "يعتمد مولد البخار الغازي تقنية التبادل الحراري لأنبوب الزعانف المحددة، مما ينتج بخارًا عالي الضغط في 3-5 دقائق فقط من بدء التشغيل البارد. تصميم حجم الماء أقل من 30 لترًا، مما يعفيه من لوائح سلامة الغلايات المعقدة في العديد من المناطق. مجهز بمكثف مدمج لاستعادة حرارة العادم بالكامل، ويحقق كفاءة حرارية تصل إلى 99٪. يستخدم تقنية الاحتراق المرحلي أو الاحتراق المخلوط مسبقًا بالكامل لضمان انبعاثات أكاسيد النيتروجين منخفضة للغاية (<30 مجم). يدعم التصميم المعياري التشغيل المتوازي لعدة وحدات، وتعديل عدد الوحدات النشطة تلقائيًا بناءً على الطلب على البخار، مما يوفر أكثر من 20٪ من الطاقة مقارنة بغلاية كبيرة واحدة."
    },
    image: "/images/products/gas-steam-generator-premium.jpg",
    icon: "Flame",
    features: [
      { en: "3-Minute Fast Steam", zh: "3分钟闪速出汽", es: "Vapor rápido de 3 minutos", fr: "Vapeur rapide en 3 minutes", de: "3-Minuten-Schnelldampf", ru: "Быстрый пар за 3 минуты", ar: "بخار سريع في 3 دقائق" },
      { en: "Inspection-Free (<30L)", zh: "免报检 (<30L)", es: "Sin inspección (<30L)", fr: "Sans inspection (<30L)", de: "Inspektionsfrei (<30L)", ru: "Без инспекции (<30L)", ar: "خالية من التفتيش (<30 لتر)" },
      { en: "99% Condensing Efficiency", zh: "99%全冷凝效率", es: "Eficiencia de condensación del 99%", fr: "Efficacité de condensation de 99 %", de: "99% Kondensationseffizienz", ru: "Эффективность конденсации 99%", ar: "كفاءة تكثيف 99٪" },
      { en: "Ultra-low NOx (<30mg)", zh: "超低氮排放 (<30mg)", es: "NOx ultra bajo (<30mg)", fr: "NOx ultra-faible (<30 mg)", de: "Extrem niedrige NOx (<30 mg)", ru: "Сверхнизкий NOx (<30 мг)", ar: "أكسيد النيتروجين منخفض للغاية (<30 مجم)" },
      { en: "Modular Energy Saving", zh: "模块化节能", es: "Ahorro de energía modular", fr: "Économie d'énergie modulaire", de: "Modulare Energieeinsparung", ru: "Модульное энергосбережение", ar: "توفير الطاقة المعياري" }
    ],
    faq: [
      {
        question: {
          en: "What is the main difference between this generator and a traditional boiler?",
          zh: "这种发生器和传统锅炉的主要区别是什么？",
          es: "¿Cuál es la principal diferencia entre este generador y una caldera tradicional?",
          fr: "Quelle est la principale différence entre ce générateur et une chaudière traditionnelle ?",
          de: "Was ist der Hauptunterschied zwischen diesem Generator und einem herkömmlichen Kessel?",
          ru: "В чем основная разница между этим генератором и традиционным котлом?",
          ar: "ما هو الفرق الرئيسي بين هذا المولد والغلاية التقليدية؟"
        },
        answer: {
          en: "The water volume is less than 30L, which makes it safer (no explosion risk) and usually exempt from government inspection. It also produces steam much faster (3-5 mins).",
          zh: "其水容量小于30L，这使其更安全（无爆炸风险），通常免于政府检查。而且它产生蒸汽的速度要快得多（3-5分钟）。",
          es: "El volumen de agua es inferior a 30L, lo que lo hace más seguro y generalmente exento de inspección.",
          fr: "Le volume d'eau est inférieur à 30 L, ce qui le rend plus sûr et généralement exempté d'inspection.",
          de: "Das Wasservolumen beträgt weniger als 30 l, was es sicherer macht und in der Regel von der staatlichen Inspektion befreit.",
          ru: "Объем воды составляет менее 30 л, что делает его более безопасным и, как правило, освобождает от государственной инспекции.",
          ar: "حجم الماء أقل من 30 لترًا، مما يجعله أكثر أمانًا ويعفى عادةً من التفتيش الحكومي."
        }
      },
      {
        question: {
          en: "Can multiple units work together?",
          zh: "多台机组可以协同工作吗？",
          es: "¿Pueden trabajar juntas varias unidades?",
          fr: "Plusieurs unités peuvent-elles fonctionner ensemble ?",
          de: "Können mehrere Einheiten zusammenarbeiten?",
          ru: "Могут ли несколько блоков работать вместе?",
          ar: "هل يمكن لوحدات متعددة العمل معًا؟"
        },
        answer: {
          en: "Yes, our modular control system allows you to connect multiple generators in parallel. They will automatically turn on/off based on total steam demand, saving energy compared to one large boiler.",
          zh: "是的，我们的模块化控制系统允许您并联连接多台发生器。它们将根据总蒸汽需求自动开启/关闭，比单台大锅炉更节能。",
          es: "Sí, nuestro sistema de control modular permite conectar múltiples generadores en paralelo, ahorrando energía.",
          fr: "Oui, notre système de contrôle modulaire vous permet de connecter plusieurs générateurs en parallèle, économisant de l'énergie.",
          de: "Ja, unser modulares Steuerungssystem ermöglicht es Ihnen, mehrere Generatoren parallel zu schalten und so Energie zu sparen.",
          ru: "Да, наша модульная система управления позволяет подключать несколько генераторов параллельно, экономя энергию.",
          ar: "نعم، يسمح نظام التحكم المعياري لدينا بتوصيل مولدات متعددة على التوازي، مما يوفر الطاقة."
        }
      }
    ],
    specs: [
      {
        model: "LSS-0.1",
        capacity: "100 kg/h",
        thermalPower: "70 kW",
        pressure: "0.7 MPa",
        steamTemp: "171°C",
        efficiency: "98%",
        waterCapacity: "<30 L",
        fuelConsumption: "NG: ~7-8 m³/h | LPG: ~6 kg/h",
        inletDiameter: "DN15",
        outletDiameter: "DN20",
        exhaustTemp: "<60°C",
        fuel: "Natural Gas / LPG"
      },
      {
        model: "LSS-0.2",
        capacity: "200 kg/h",
        thermalPower: "140 kW",
        pressure: "0.7 MPa",
        steamTemp: "171°C",
        efficiency: "98%",
        waterCapacity: "<30 L",
        fuelConsumption: "NG: ~14-16 m³/h | LPG: ~12 kg/h",
        inletDiameter: "DN20",
        outletDiameter: "DN25",
        exhaustTemp: "<60°C",
        fuel: "Natural Gas / LPG"
      },
      {
        model: "LSS-0.5",
        capacity: "500 kg/h",
        thermalPower: "350 kW",
        pressure: "0.7 / 1.0 MPa",
        steamTemp: "171 / 184°C",
        efficiency: "99%",
        waterCapacity: "<50 L (Modular)",
        fuelConsumption: "NG: ~35-38 m³/h | LPG: ~28 kg/h",
        inletDiameter: "DN25",
        outletDiameter: "DN40",
        exhaustTemp: "<55°C",
        fuel: "Natural Gas / LPG"
      },
      {
        model: "LSS-1.0",
        capacity: "1000 kg/h",
        thermalPower: "700 kW",
        pressure: "0.7 / 1.0 MPa",
        steamTemp: "171 / 184°C",
        efficiency: "99%",
        waterCapacity: "<50 L * 2",
        fuelConsumption: "NG: ~70-75 m³/h | LPG: ~56 kg/h",
        inletDiameter: "DN32",
        outletDiameter: "DN50",
        exhaustTemp: "<55°C",
        fuel: "Natural Gas / LPG"
      },
      {
        model: "LSS-2.0",
        capacity: "2000 kg/h",
        thermalPower: "1400 kW",
        pressure: "0.7 / 1.0 MPa",
        steamTemp: "171 / 184°C",
        efficiency: "99%",
        waterCapacity: "<50 L * 4",
        fuelConsumption: "NG: ~140-150 m³/h | LPG: ~112 kg/h",
        inletDiameter: "DN40",
        outletDiameter: "DN65",
        exhaustTemp: "<55°C",
        fuel: "Natural Gas / LPG"
      }
    ]
  },
  // 16. SZL Chain Grate Boiler
  {
    id: "szl-chain-grate-boiler",
    category: "steam",
    name: {
      en: "SZL Series Double Drum Chain Grate Boiler",
      zh: "SZL双锅筒纵置式链条炉排锅炉",
      es: "Caldera de Rejilla de Cadena de Doble Tambor Serie SZL",
      fr: "Chaudière à Grille à Chaîne à Double Tambour Série SZL",
      de: "SZL-Serie Doppeltrommel-Kettenrostkessel",
      ru: "Котел с цепной решеткой и двойным барабаном серии SZL",
      ar: "غلاية شبكة سلسلة مزدوجة الطبل سلسلة SZL"
    },
    description: {
      en: "Double drum, membrane wall, high-efficiency biomass/coal boiler.",
      zh: "双锅筒膜式壁，高效生物质/燃煤锅炉。",
      es: "Doble tambor, pared de membrana, caldera de biomasa/carbón de alta eficiencia.",
      fr: "Double tambour, paroi membranaire, chaudière biomasse/charbon à haute efficacité.",
      de: "Doppeltrommel, Membranwand, hocheffizienter Biomasse-/Kohlekessel.",
      ru: "Двойной барабан, мембранная стенка, высокоэффективный котел на биомассе/угле.",
      ar: "طبل مزدوج، جدار غشاء، غلاية الكتلة الحيوية/الفحم عالية الكفاءة."
    },
    fullDescription: {
      en: "The SZL series is a double-drum longitudinal chain grate boiler designed for high-efficiency solid fuel combustion. It features a membrane water cooling wall structure that ensures excellent sealing and heat absorption. Key technologies include a double drum design that ensures a stable water cycle and large steam space for high-quality dry steam. The membrane water wall enhances heat transfer efficiency and ensures the furnace is airtight, reducing heat loss. A unique S-type flue gas flow forces dust to separate via inertia in the cyclone burnout chamber, reducing emissions and improving burnout. The automated chain grate features independent air chambers for precise air distribution, accommodating various fuels like biomass pellets and coal.",
      zh: "SZL系列是双锅筒纵置式链条炉排锅炉，专为高效固体燃料燃烧而设计。它采用膜式水冷壁结构，确保了极佳的密封性和吸热性。核心技术包括双锅筒设计，确保稳定的水循环和巨大的蒸汽空间，产出高质量的干燥蒸汽。膜式水冷壁提高传热效率并确保炉膛气密性，减少热损失。独特的S型烟气流程在旋风燃尽室利用惯性分离粉尘，减少排放并提高燃尽率。自动链条炉排设有独立风室进行精确配风，适应生物质颗粒、煤等多种燃料。",
      es: "La serie SZL es una caldera de rejilla de cadena longitudinal de doble tambor diseñada para la combustión de combustible sólido de alta eficiencia. Cuenta con una estructura de pared de enfriamiento de agua de membrana que garantiza un excelente sellado y absorción de calor. Las tecnologías clave incluyen un diseño de doble tambor que garantiza un ciclo de agua estable y un gran espacio de vapor para vapor seco de alta calidad. La pared de agua de membrana mejora la eficiencia de transferencia de calor y asegura que el horno sea hermético, reduciendo la pérdida de calor. Un flujo de gas de combustión único tipo S obliga al polvo a separarse por inercia en la cámara de quemado del ciclón, reduciendo las emisiones y mejorando el quemado. La rejilla de cadena automatizada cuenta con cámaras de aire independientes para una distribución precisa del aire, acomodando varios combustibles como pellets de biomasa y carbón.",
      fr: "La série SZL est une chaudière à grille à chaîne longitudinale à double tambour conçue pour la combustion de combustibles solides à haute efficacité. Elle dispose d'une structure de paroi de refroidissement par eau à membrane qui assure une excellente étanchéité et une absorption de la chaleur. Les technologies clés comprennent une conception à double tambour qui assure un cycle de l'eau stable et un grand espace de vapeur pour une vapeur sèche de haute qualité. La paroi d'eau à membrane améliore l'efficacité du transfert de chaleur et garantit l'étanchéité du four, réduisant ainsi les pertes de chaleur. Un flux de gaz de combustion unique de type S force la poussière à se séparer par inertie dans la chambre de combustion cyclonique, réduisant les émissions et améliorant la combustion. La grille à chaîne automatisée dispose de chambres à air indépendantes pour une distribution précise de l'air, s'adaptant à divers combustibles comme les granulés de biomasse et le charbon.",
      de: "Die SZL-Serie ist ein Doppeltrommel-Längskettenrostkessel, der für eine hocheffiziente Festbrennstoffverbrennung ausgelegt ist. Er verfügt über eine Membran-Wasserkühlwandstruktur, die eine hervorragende Abdichtung und Wärmeaufnahme gewährleistet. Zu den Schlüsseltechnologien gehört ein Doppeltrommeldesign, das einen stabilen Wasserkreislauf und einen großen Dampfraum für hochwertigen Trockendampf gewährleistet. Die Membranwasserwand verbessert die Wärmeübertragungseffizienz und stellt sicher, dass der Ofen luftdicht ist, wodurch Wärmeverluste reduziert werden. Ein einzigartiger S-förmiger Rauchgasstrom zwingt den Staub, sich durch Trägheit in der Zyklon-Ausbrandkammer abzuscheiden, was die Emissionen reduziert und den Ausbrand verbessert. Der automatisierte Kettenrost verfügt über unabhängige Luftkammern für eine präzise Luftverteilung und eignet sich für verschiedene Brennstoffe wie Biomassepellets und Kohle.",
      ru: "Серия SZL — это продольный котел с цепной решеткой и двойным барабаном, разработанный для высокоэффективного сжигания твердого топлива. Он имеет мембранную структуру стенки водяного охлаждения, которая обеспечивает отличную герметичность и теплопоглощение. Ключевые технологии включают конструкцию с двойным барабаном, которая обеспечивает стабильный цикл воды и большое паровое пространство для высококачественного сухого пара. Мембранная водяная стенка повышает эффективность теплопередачи и обеспечивает герметичность топки, снижая потери тепла. Уникальный S-образный поток дымовых газов заставляет пыль отделяться по инерции в камере дожигания циклона, снижая выбросы и улучшая выгорание. Автоматизированная цепная решетка имеет независимые воздушные камеры для точного распределения воздуха, вмещая различные виды топлива, такие как пеллеты из биомассы и уголь.",
      ar: "سلسلة SZL هي غلاية شبكة سلسلة طولية مزدوجة الطبل مصممة لاحتراق الوقود الصلب عالي الكفاءة. تتميز بهيكل جدار تبريد بالماء الغشائي الذي يضمن إحكامًا ممتازًا وامتصاصًا للحرارة. تشمل التقنيات الرئيسية تصميم طبل مزدوج يضمن دورة مياه مستقرة ومساحة بخار كبيرة لبخار جاف عالي الجودة. يعزز جدار الماء الغشائي كفاءة نقل الحرارة ويضمن أن يكون الفرن محكم الغلق، مما يقلل من فقدان الحرارة. يجبر تدفق غاز المداخن الفريد من نوع S الغبار على الانفصال عن طريق القصور الذاتي في غرفة احتراق الإعصار، مما يقلل من الانبعاثات ويحسن الاحتراق. تتميز شبكة السلسلة الآلية بغرف هوائية مستقلة لتوزيع الهواء بدقة، وتستوعب أنواعًا مختلفة من الوقود مثل كريات الكتلة الحيوية والفحم."
    },
    image: "/images/products/szl-chain-grate-boiler-premium.jpg",
    icon: "Factory",
    faq: [
      {
        question: {
          en: "What fuel types can this boiler handle?",
          zh: "这种锅炉可以处理哪些类型的燃料？",
          es: "¿Qué tipos de combustible puede manejar esta caldera?",
          fr: "Quels types de combustibles cette chaudière peut-elle traiter ?",
          de: "Welche Brennstoffarten kann dieser Kessel verarbeiten?",
          ru: "Какие виды топлива может использовать этот котел?",
          ar: "ما هي أنواع الوقود التي يمكن لهذه الغلاية التعامل معها؟"
        },
        answer: {
          en: "It is designed for versatile solid fuels, including coal (bituminous, anthracite), biomass pellets, wood chips, and agricultural waste like rice husks.",
          zh: "它专为多种固体燃料设计，包括煤（烟煤、无烟煤）、生物质颗粒、木片和稻壳等农业废弃物。",
          es: "Está diseñada para combustibles sólidos versátiles, incluidos carbón (bituminoso, antracita), pellets de biomasa, astillas de madera y residuos agrícolas como cáscaras de arroz.",
          fr: "Elle est conçue pour des combustibles solides polyvalents, y compris le charbon (bitumineux, anthracite), les granulés de biomasse, les copeaux de bois et les déchets agricoles comme les balles de riz.",
          de: "Er ist für vielseitige Festbrennstoffe ausgelegt, einschließlich Kohle (Bitumen, Anthrazit), Biomasse-Pellets, Holzhackschnitzel und landwirtschaftliche Abfälle wie Reishülsen.",
          ru: "Он предназначен для разнообразных видов твердого топлива, включая уголь (битуминозный, антрацит), пеллеты из биомассы, древесную щепу и сельскохозяйственные отходы, такие как рисовая шелуха.",
          ar: "تم تصميمها للوقود الصلب متعدد الاستخدامات، بما في ذلك الفحم (البيتوميني، الأنثراسيت)، وكريات الكتلة الحيوية، ورقائق الخشب، والنفايات الزراعية مثل قشور الأرز."
        }
      },
      {
        question: {
          en: "How is the ash removal handled?",
          zh: "如何处理除灰？",
          es: "¿Cómo se maneja la eliminación de cenizas?",
          fr: "Comment l'élimination des cendres est-elle gérée ?",
          de: "Wie wird die Ascheentfernung gehandhabt?",
          ru: "Как осуществляется удаление золы?",
          ar: "كيف يتم التعامل مع إزالة الرماد؟"
        },
        answer: {
          en: "The automated chain grate system continuously moves fuel through the combustion chamber and discharges ash automatically at the end, minimizing manual labor.",
          zh: "自动链条炉排系统持续将燃料送入燃烧室，并在末端自动排出灰渣，最大限度地减少人工劳动。",
          es: "El sistema de rejilla de cadena automatizado mueve continuamente el combustible a través de la cámara de combustión y descarga las cenizas automáticamente al final, minimizando el trabajo manual.",
          fr: "Le système de grille à chaîne automatisé déplace continuellement le combustible à travers la chambre de combustion et évacue les cendres automatiquement à la fin, minimisant le travail manuel.",
          de: "Das automatisierte Kettenrostsystem bewegt den Brennstoff kontinuierlich durch die Brennkammer und trägt die Asche am Ende automatisch aus, was die manuelle Arbeit minimiert.",
          ru: "Автоматизированная система цепной решетки непрерывно перемещает топливо через камеру сгорания и автоматически выгружает золу в конце, сводя к минимуму ручной труд.",
          ar: "يقوم نظام شبكة السلسلة الآلي بتحريك الوقود باستمرار عبر غرفة الاحتراق وتفريغ الرماد تلقائيًا في النهاية، مما يقلل من العمل اليدوي."
        }
      }
    ],
    features: [
      { en: "Double Drum Layout", zh: "双锅筒布置", es: "Diseño de doble tambor", fr: "Disposition à double tambour", de: "Doppeltrommel-Layout", ru: "Компоновка с двойным барабаном", ar: "تخطيط طبل مزدوج" },
      { en: "Membrane Water Wall", zh: "膜式水冷壁", es: "Pared de agua de membrana", fr: "Paroi d'eau à membrane", de: "Membranwasserwand", ru: "Мембранная водяная стенка", ar: "جدار تبريد مياه غشائي" },
      { en: "Cyclone Dust Separation", zh: "旋风除尘", es: "Separación de polvo ciclónica", fr: "Séparation des poussières par cyclone", de: "Zyklonstaubabscheidung", ru: "Циклонное пылеулавливание", ar: "فصل الغبار الإعصاري" },
      { en: "Automated Chain Grate", zh: "自动链条炉排", es: "Rejilla de cadena automatizada", fr: "Grille à chaîne automatisée", de: "Automatisierter Kettenrost", ru: "Автоматизированная цепная решетка", ar: "شبكة سلسلة آلية" },
      { en: "Multi-Fuel Adaptability", zh: "多燃料适应性", es: "Adaptabilidad multicombustible", fr: "Adaptabilité multi-combustibles", de: "Mehrstoffanpassungsfähigkeit", ru: "Многотопливная адаптивность", ar: "قدرة تكيف متعددة الوقود" }
    ],
    specs: [
      {
        model: "SZL2-1.25/2.5",
        capacity: "2 T/H",
        pressure: "1.25-2.5 MPa",
        efficiency: "79.55%",
        fuel: "Biomass / Coal",
        steamTemp: "194-225°C",
        grateArea: "3.2 m²",
        dimensions: "5500 x 2350 x 3970 mm",
        weight: "25 T"
      },
      {
        model: "SZL4-1.25/2.5",
        capacity: "4 T/H",
        pressure: "1.25-2.5 MPa",
        efficiency: "78.82%",
        fuel: "Biomass / Coal",
        steamTemp: "194-225°C",
        grateArea: "6.7 m²",
        dimensions: "7730 x 2360 x 3520 mm",
        weight: "30 T"
      },
      {
        model: "SZL6-1.25/2.5",
        capacity: "6 T/H",
        pressure: "1.25-2.5 MPa",
        efficiency: "79.5%",
        fuel: "Biomass / Coal",
        steamTemp: "194-225°C",
        grateArea: "7.5 m²",
        dimensions: "6150 x 2840 x 3540 mm",
        weight: "22.5 T"
      },
      {
        model: "SZL10-1.25/2.5",
        capacity: "10 T/H",
        pressure: "1.25-2.5 MPa",
        efficiency: "80.2%",
        fuel: "Biomass / Coal",
        steamTemp: "194-225°C",
        grateArea: "11.8 m²",
        dimensions: "7853 x 3316 x 3524 mm",
        weight: "26.5 T"
      },
      {
        model: "SZL15-1.25/2.5",
        capacity: "15 T/H",
        pressure: "1.25-2.5 MPa",
        efficiency: "82.0%",
        fuel: "Biomass / Coal",
        steamTemp: "194-225°C",
        grateArea: "18 m²",
        dimensions: "10000 x 3200 x 3500 mm",
        weight: "30 T"
      },
      {
        model: "SZL20-1.25/2.5",
        capacity: "20 T/H",
        pressure: "1.25-2.5 MPa",
        efficiency: "82.0%",
        fuel: "Biomass / Coal",
        steamTemp: "194-225°C",
        grateArea: "23 m²",
        dimensions: "11000 x 3200 x 3500 mm",
        weight: "35 T"
      }
    ]
  },
  // 17. Biomass Hot Air Stove
  {
    id: "biomass-hot-air-stove",
    category: "hot_air",
    name: {
      en: "Biomass Indirect Hot Air Stove",
      zh: "生物质间接热风炉",
      es: "Estufa de Aire Caliente Indirecta de Biomasa",
      fr: "Poêle à Air Chaud Indirect à Biomasse",
      de: "Indirekter Biomasse-Heißluftofen",
      ru: "Косвенная тепловая пушка на биомассе",
      ar: "موقد الهواء الساخن غير المباشر بالكتلة الحيوية"
    },
    description: {
      en: "Clean hot air, 60% cost reduction, automated biomass heating.",
      zh: "清洁热风，成本降低60%，全自动生物质供热。",
      es: "Aire caliente limpio, reducción de costos del 60%, calefacción de biomasa automatizada.",
      fr: "Air chaud propre, réduction des coûts de 60 %, chauffage à biomasse automatisé.",
      de: "Saubere Heißluft, 60% Kostenreduzierung, automatisierte Biomasseheizung.",
      ru: "Чистый горячий воздух, снижение затрат на 60%, автоматическое отопление биомассой.",
      ar: "هواء ساخن نظيف، خفض التكلفة بنسبة 60٪، تسخين الكتلة الحيوية الآلي."
    },
    fullDescription: {
      en: "Our Biomass Indirect Hot Air Stove uses indirect heating technology with a heat exchanger structure to completely isolate flue gas from air. It outputs pure, odorless, and dust-free hot air, perfectly meeting drying requirements for food, medicine, and high-end coating. Fuel costs are reduced by 30-50% compared to oil/gas heaters and over 60% compared to electric heating. Core heat exchanger components are made of 304/310S stainless steel, offering oxidation and corrosion resistance with precise temperature control from 60°C to 350°C. Fully automated control handles feeding, ignition, and temperature, supporting linkage control with drying systems. It uses renewable biomass pellet fuel for carbon-neutral operation without black smoke.",
      zh: "我们的生物质间接热风炉采用间接加热技术和热交换器结构，将烟气与空气完全隔离。输出的热风纯净、无味、无尘，完美符合食品、药材及高档喷涂的烘干要求。相比燃油、燃气热风机，燃料成本降低30-50%；相比电加热，成本可降低60%以上。换热器核心部件采用304/310S不锈钢，抗氧化、耐腐蚀，排风温度可在60°C - 350°C范围内精准调节。全自动智能控制负责进料、点火和恒温，无需人工频繁值守，支持与烘干系统联动。使用生可再生物质颗粒燃料，实现无黑烟排放的碳中和运行。",
      es: "Nuestra estufa de aire caliente indirecta de biomasa utiliza tecnología de calentamiento indirecto con una estructura de intercambiador de calor para aislar completamente el gas de combustión del aire. Produce aire caliente puro, inodoro y libre de polvo, cumpliendo perfectamente con los requisitos de secado para alimentos, medicinas y recubrimientos de alta gama. Los costos de combustible se reducen en un 30-50% en comparación con los calentadores de aceite/gas y más del 60% en comparación con la calefacción eléctrica. Los componentes centrales del intercambiador de calor están hechos de acero inoxidable 304/310S, ofreciendo resistencia a la oxidación y corrosión con un control preciso de la temperatura de 60°C a 350°C. El control totalmente automatizado maneja la alimentación, el encendido y la temperatura, soportando el control de enlace con sistemas de secado. Utiliza combustible de pellets de biomasa renovable para una operación neutral en carbono sin humo negro.",
      fr: "Notre poêle à air chaud indirect à biomasse utilise une technologie de chauffage indirect avec une structure d'échangeur de chaleur pour isoler complètement les gaz de combustion de l'air. Il produit de l'air chaud pur, inodore et sans poussière, répondant parfaitement aux exigences de séchage pour les aliments, les médicaments et les revêtements haut de gamme. Les coûts de carburant sont réduits de 30 à 50 % par rapport aux appareils de chauffage au fioul/gaz et de plus de 60 % par rapport au chauffage électrique. Les composants centraux de l'échangeur de chaleur sont en acier inoxydable 304/310S, offrant une résistance à l'oxydation et à la corrosion avec un contrôle précis de la température de 60°C à 350°C. La commande entièrement automatisée gère l'alimentation, l'allumage et la température, prenant en charge le contrôle de liaison avec les systèmes de séchage. Il utilise des granulés de biomasse renouvelables pour un fonctionnement neutre en carbone sans fumée noire.",
      de: "Unser indirekter Biomasse-Heißluftofen verwendet eine indirekte Heiztechnologie mit einer Wärmetauscherstruktur, um Rauchgas vollständig von der Luft zu isolieren. Er gibt reine, geruchlose und staubfreie Heißluft ab und erfüllt perfekt die Trocknungsanforderungen für Lebensmittel, Medikamente und hochwertige Beschichtungen. Die Brennstoffkosten werden im Vergleich zu Öl-/Gasheizungen um 30-50% und im Vergleich zu Elektroheizungen um über 60% gesenkt. Die Kernkomponenten des Wärmetauschers bestehen aus Edelstahl 304/310S und bieten Oxidations- und Korrosionsbeständigkeit bei präziser Temperaturregelung von 60°C bis 350°C. Die vollautomatische Steuerung übernimmt die Zuführung, Zündung und Temperatur und unterstützt die Verknüpfungssteuerung mit Trocknungssystemen. Er verwendet erneuerbaren Biomasse-Pellet-Brennstoff für einen klimaneutralen Betrieb ohne schwarzen Rauch.",
      ru: "Наша косвенная тепловая пушка на биомассе использует технологию косвенного нагрева со структурой теплообменника для полной изоляции дымовых газов от воздуха. Она выдает чистый, без запаха и пыли горячий воздух, идеально отвечая требованиям сушки для пищевых продуктов, лекарств и высококачественных покрытий. Затраты на топливо снижаются на 30-50% по сравнению с масляными/газовыми обогревателями и более чем на 60% по сравнению с электрическим отоплением. Основные компоненты теплообменника изготовлены из нержавеющей стали 304/310S, обеспечивая устойчивость к окислению и коррозии с точным контролем температуры от 60°C до 350°C. Полностью автоматизированное управление обеспечивает подачу, розжиг и температуру, поддерживая управление связью с системами сушки. Использует возобновляемое топливо из биомассы для углеродно-нейтральной работы без черного дыма.",
      ar: "يستخدم موقد الهواء الساخن غير المباشر بالكتلة الحيوية تقنية التسخين غير المباشر مع هيكل مبادل حراري لعزل غاز المداخن تمامًا عن الهواء. يخرج هواء ساخنًا نقيًا وعديم الرائحة وخاليًا من الغبار، ويلبي تمامًا متطلبات التجفيف للأغذية والأدوية والطلاء عالي التطور. يتم تقليل تكاليف الوقود بنسبة 30-50٪ مقارنة بسخانات الزيت/الغاز وأكثر من 60٪ مقارنة بالتدفئة الكهربائية. مكونات المبادل الحراري الأساسية مصنوعة من الفولاذ المقاوم للصدأ 304/310S، مما يوفر مقاومة للأكسدة والتآكل مع تحكم دقيق في درجة الحرارة من 60 درجة مئوية إلى 350 درجة مئوية. يتعامل التحكم المؤتمت بالكامل مع التغذية والإشعال ودرجة الحرارة، ويدعم التحكم في الارتباط مع أنظمة التجفيف. يستخدم وقود كريات الكتلة الحيوية المتجددة للتشغيل المحايد للكربون بدون دخان أسود."
    },
    image: "/images/products/biomass-hot-air-stove-premium.jpg",
    icon: "Wind",
    features: [
      { en: "Clean & Odorless Hot Air", zh: "清洁无味热风", es: "Aire caliente limpio e inodoro", fr: "Air chaud propre et inodore", de: "Saubere & geruchlose Heißluft", ru: "Чистый и без запаха горячий воздух", ar: "هواء ساخن نظيف وعديم الرائحة" },
      { en: "Save 60% vs Electric", zh: "比电加热省60%", es: "Ahorre un 60% frente a eléctrico", fr: "Économisez 60 % par rapport à l'électrique", de: "Sparen Sie 60% gegenüber Elektro", ru: "Экономия 60% по сравнению с электричеством", ar: "وفر 60٪ مقابل الكهرباء" },
      { en: "Stainless Steel Exchanger", zh: "不锈钢换热器", es: "Intercambiador de acero inoxidable", fr: "Échangeur en acier inoxydable", de: "Edelstahl-Wärmetauscher", ru: "Теплообменник из нержавеющей стали", ar: "مبادل ستانلس ستيل" },
      { en: "Auto Temp Control (60-350°C)", zh: "自动温控 (60-350°C)", es: "Control automático de temperatura (60-350°C)", fr: "Contrôle automatique de la température (60-350°C)", de: "Automatische Temperaturregelung (60-350°C)", ru: "Автоматический контроль температуры (60-350°C)", ar: "تحكم تلقائي في درجة الحرارة (60-350 درجة مئوية)" },
      { en: "Carbon Neutral Biomass", zh: "碳中和生物质", es: "Biomasa neutra en carbono", fr: "Biomasse neutre en carbone", de: "Klimaneutrale Biomasse", ru: "Углеродно-нейтральная биомасса", ar: "كتلة حيوية محايدة للكربون" }
    ],
    faq: [
      {
        question: {
          en: "Is the hot air clean enough for drying food?",
          zh: "产生的热风足够清洁以烘干食品吗？",
          es: "¿El aire caliente es lo suficientemente limpio para secar alimentos?",
          fr: "L'air chaud est-il assez propre pour sécher les aliments ?",
          de: "Ist die Heißluft sauber genug zum Trocknen von Lebensmitteln?",
          ru: "Достаточно ли чист горячий воздух для сушки пищевых продуктов?",
          ar: "هل الهواء الساخن نظيف بما يكفي لتجفيف الطعام؟"
        },
        answer: {
          en: "Yes, it uses indirect heating with a stainless steel heat exchanger. The combustion smoke is completely isolated from the clean air, making it odorless and dust-free.",
          zh: "是的，它采用不锈钢换热器进行间接加热。燃烧烟气与洁净空气完全隔离，无味无尘。",
          es: "Sí, utiliza calentamiento indirecto con un intercambiador de calor. El humo está completamente aislado del aire limpio.",
          fr: "Oui, il utilise un chauffage indirect avec un échangeur de chaleur. La fumée de combustion est complètement isolée de l'air pur.",
          de: "Ja, es verwendet eine indirekte Heizung mit einem Wärmetauscher. Der Verbrennungsrauch ist vollständig von der Reinluft isoliert.",
          ru: "Да, он использует косвенный нагрев с теплообменником. Дым сгорания полностью изолирован от чистого воздуха.",
          ar: "نعم، يستخدم التدفئة غير المباشرة مع مبادل حراري. يتم عزل دخان الاحتراق تمامًا عن الهواء النظيف."
        }
      },
      {
        question: {
          en: "What industries can use this stove?",
          zh: "哪些行业可以使用这种热风炉？",
          es: "¿Qué industrias pueden utilizar esta estufa?",
          fr: "Quelles industries peuvent utiliser ce poêle ?",
          de: "Welche Branchen können diesen Ofen nutzen?",
          ru: "Какие отрасли могут использовать эту печь?",
          ar: "ما هي الصناعات التي يمكن أن تستخدم هذا الموقد؟"
        },
        answer: {
          en: "It is widely used for drying grain, food processing, tea leaves, wood, chemical powder, and curing high-end paints.",
          zh: "广泛用于粮食烘干、食品加工、茶叶、木材、化工粉末以及高档油漆的固化。",
          es: "Se utiliza ampliamente para secar granos, procesamiento de alimentos, hojas de té, madera, polvos químicos y curado de pinturas.",
          fr: "Il est largement utilisé pour le séchage des céréales, la transformation des aliments, les feuilles de thé, le bois, les poudres chimiques et le durcissement des peintures.",
          de: "Es wird häufig zum Trocknen von Getreide, Lebensmittelverarbeitung, Teeblättern, Holz, chemischem Pulver und zum Aushärten von Farben verwendet.",
          ru: "Широко используется для сушки зерна, пищевой промышленности, чайных листьев, дерева, химических порошков и отверждения красок.",
          ar: "يستخدم على نطاق واسع لتجفيف الحبوب ومعالجة الأغذية وأوراق الشاي والخشب والمساحيق الكيميائية وعلاج الدهانات."
        }
      }
    ],
    specs: [
      {
        model: "100,000 kcal",
        outputHeat: "100,000 kcal/h",
        thermalPower: "116 kW",
        airVolume: "3000-5000 m³/h",
        hotAirTemp: "60-150°C",
        fuelConsumption: "~25-30 kg/h",
        efficiency: "≥ 85%",
        blowerPower: "1.5 kW",
        fuel: "Biomass",
        dimensions: "1600 x 1100 x 1800 mm"
      },
      {
        model: "300,000 kcal",
        outputHeat: "300,000 kcal/h",
        thermalPower: "350 kW",
        airVolume: "8000-12000 m³/h",
        hotAirTemp: "60-150°C",
        fuelConsumption: "~75-85 kg/h",
        efficiency: "≥ 85%",
        blowerPower: "3 kW",
        fuel: "Biomass",
        dimensions: "2100 x 1400 x 2200 mm"
      },
      {
        model: "600,000 kcal",
        outputHeat: "600,000 kcal/h",
        thermalPower: "700 kW",
        airVolume: "15000-20000 m³/h",
        hotAirTemp: "60-150°C",
        fuelConsumption: "~150-170 kg/h",
        efficiency: "≥ 88%",
        blowerPower: "7.5 kW",
        fuel: "Biomass",
        dimensions: "2800 x 1800 x 2600 mm"
      },
      {
        model: "1,200,000 kcal",
        outputHeat: "1,200,000 kcal/h",
        thermalPower: "1400 kW",
        airVolume: "30000-40000 m³/h",
        hotAirTemp: "60-200°C",
        fuelConsumption: "~300-340 kg/h",
        efficiency: "≥ 90%",
        blowerPower: "15 kW",
        fuel: "Biomass",
        dimensions: "3800 x 2200 x 3200 mm"
      },
      {
        model: "2,000,000 kcal",
        outputHeat: "2,000,000 kcal/h",
        thermalPower: "2320 kW",
        airVolume: "50000-60000 m³/h",
        hotAirTemp: "60-200°C",
        fuelConsumption: "~500-550 kg/h",
        efficiency: "≥ 92%",
        blowerPower: "30 kW",
        fuel: "Biomass",
        dimensions: "5200 x 2600 x 3800 mm"
      }
    ]
  },
  // 18. DZH Moving Grate Boiler
  {
    id: "dzh-moving-grate-boiler",
    category: "steam",
    name: {
      en: "DZH Series Moving Grate Boiler",
      zh: "DZH系列单锅筒活动炉排锅炉",
      es: "Caldera de Rejilla Móvil Serie DZH",
      fr: "Chaudière à Grille Mobile Série DZH",
      de: "DZH-Serie Wanderrostkessel",
      ru: "Котел с подвижной решеткой серии DZH",
      ar: "غلاية شبكة متحركة سلسلة DZH"
    },
    description: {
      en: "Manual/moving grate, single drum, wing-shaped flue, wood log compatible.",
      zh: "手烧/活动炉排，单锅筒，翼型烟道，可烧长木条。",
      es: "Rejilla manual/móvil, tambor simple, conducto de humos en forma de ala, compatible con troncos de madera.",
      fr: "Grille manuelle/mobile, tambour simple, conduit de fumée en forme d'aile, compatible avec les bûches de bois.",
      de: "Manueller/beweglicher Rost, Einzeltrommel, flügelförmiger Rauchzug, holzscheitkompatibel.",
      ru: "Ручная/подвижная решетка, один барабан, крыловидный дымоход, совместимость с дровами.",
      ar: "شبكة يدوية/متحركة، طبل واحد، مجرى عادم على شكل جناح، متوافق مع جذوع الخشب."
    },
    fullDescription: {
      en: "The DZH series is a manual or mechanically moving grate boiler designed for flexible solid fuel combustion. Its unique single-drum and wing-shaped flue design ensures efficient heat transfer and durability. It is particularly suitable for irregular fuels like long wood logs. The horizontal three-pass water-fire tube structure ensures compact size and high efficiency. Wing-shaped flues are located on both sides to prevent tube plate cracking from high temperatures and ensure uniform heating. The spacious furnace and adjustable moving grate allow for burning uncrushed wood logs up to 2 meters long while ensuring complete combustion and easy ash removal.",
      zh: "DZH系列是手烧或机械活动炉排锅炉，专为灵活的固体燃料燃烧而设计。其独特的单锅筒和翼型烟道设计确保了高效传热和耐用性。特别适合燃烧长木条等不规则燃料。卧式三回程水火管结构确保体积紧凑和高效率。两侧的翼型烟道防止高温导致管板开裂，确保受热均匀。宽敞的炉膛和可调节的活动炉排允许直接燃烧长达2米的未粉碎木材，同时确保燃烧充分和排渣顺畅。",
      es: "La serie DZH es una caldera de rejilla manual o mecánicamente móvil diseñada para una combustión flexible de combustible sólido. Su diseño único de un solo tambor y conducto de humos en forma de ala garantiza una transferencia de calor eficiente y durabilidad. Es particularmente adecuada para combustibles irregulares como troncos de madera largos. La estructura horizontal de tres pasos de tubos de agua y fuego garantiza un tamaño compacto y una alta eficiencia. Los conductos de humo en forma de ala están ubicados en ambos lados para evitar el agrietamiento de la placa de tubos debido a las altas temperaturas y garantizar un calentamiento uniforme. El horno espacioso y la rejilla móvil ajustable permiten quemar troncos de madera sin triturar de hasta 2 metros de largo mientras aseguran una combustión completa y una fácil eliminación de cenizas.",
      fr: "La série DZH est une chaudière à grille manuelle ou mécaniquement mobile conçue pour une combustion flexible de combustibles solides. Sa conception unique à tambour unique et à conduit de fumée en forme d'aile assure un transfert de chaleur efficace et une durabilité. Elle est particulièrement adaptée aux combustibles irréguliers comme les longues bûches de bois. La structure horizontale à trois passes tubes d'eau-feu assure une taille compacte et une efficacité élevée. Des conduits de fumée en forme d'aile sont situés des deux côtés pour empêcher la fissuration de la plaque tubulaire due aux températures élevées et assurer un chauffage uniforme. Le four spacieux et la grille mobile réglable permettent de brûler des bûches de bois non broyées jusqu'à 2 mètres de long tout en assurant une combustion complète et une élimination facile des cendres.",
      de: "Die DZH-Serie ist ein manueller oder mechanisch bewegter Rostkessel, der für eine flexible Festbrennstoffverbrennung ausgelegt ist. Sein einzigartiges Einzeltrommel- und flügelförmiges Rauchzugdesign sorgt für effiziente Wärmeübertragung und Langlebigkeit. Er eignet sich besonders für unregelmäßige Brennstoffe wie lange Holzscheite. Die horizontale Dreizug-Wasser-Feuer-Rohrstruktur sorgt für kompakte Größe und hohe Effizienz. Flügelförmige Rauchzüge befinden sich auf beiden Seiten, um Risse in der Rohrplatte durch hohe Temperaturen zu verhindern und eine gleichmäßige Erwärmung zu gewährleisten. Der geräumige Ofen und der verstellbare Wanderrost ermöglichen das Verbrennen von unzerkleinerten Holzscheiten bis zu 2 Metern Länge bei gleichzeitiger Gewährleistung einer vollständigen Verbrennung und einer einfachen Ascheentfernung.",
      ru: "Серия DZH — это котел с ручной или механически подвижной решеткой, предназначенный для гибкого сжигания твердого топлива. Его уникальная конструкция с одним барабаном и крыловидным дымоходом обеспечивает эффективную теплопередачу и долговечность. Он особенно подходит для нерегулярного топлива, такого как длинные дрова. Горизонтальная трехходовая водотрубная структура обеспечивает компактные размеры и высокую эффективность. Крыловидные дымоходы расположены с обеих сторон для предотвращения растрескивания трубной решетки от высоких температур и обеспечения равномерного нагрева. Просторная топка и регулируемая подвижная решетка позволяют сжигать неизмельченные дрова длиной до 2 метров, обеспечивая полное сгорание и легкое удаление золы.",
      ar: "سلسلة DZH هي غلاية شبكة يدوية أو متحركة ميكانيكيًا مصممة لاحتراق الوقود الصلب المرن. يضمن تصميمها الفريد من نوعه للطبل الواحد ومجرى العادم على شكل جناح نقلًا فعالًا للحرارة ومتانة. وهي مناسبة بشكل خاص للوقود غير المنتظم مثل جذوع الخشب الطويلة. يضمن هيكل أنبوب الماء والنار الأفقي ثلاثي الممرات حجمًا مدمجًا وكفاءة عالية. توجد مجاري العادم على شكل جناح على كلا الجانبين لمنع تشقق لوحة الأنبوب من درجات الحرارة العالية وضمان تسخين موحد. يسمح الفرن الواسع والشبكة المتحركة القابلة للتعديل بحرق جذوع الخشب غير المطحونة التي يصل طولها إلى 2 متر مع ضمان الاحتراق الكامل وإزالة الرماد بسهولة."
    },
    image: "/images/products/dzh-manual-biomass-boiler-premium.jpg",
    icon: "Factory",
    features: [
      { en: "Wing-Shaped Flue", zh: "翼型烟道", es: "Conducto de humos en forma de ala", fr: "Conduit de fumée en forme d'aile", de: "Flügelförmiger Rauchzug", ru: "Крыловидный дымоход", ar: "مجرى عادم على شكل جناح" },
      { en: "Burns 2m Wood Logs", zh: "可烧2米长木条", es: "Quema troncos de madera de 2 m", fr: "Brûle des bûches de bois de 2 m", de: "Verbrennt 2m Holzscheite", ru: "Сжигает 2-метровые дрова", ar: "يحرق جذوع الخشب بطول 2 متر" },
      { en: "Moving Grate Design", zh: "活动炉排设计", es: "Diseño de rejilla móvil", fr: "Conception de grille mobile", de: "Wanderrost-Design", ru: "Конструкция с подвижной решеткой", ar: "تصميم شبكة متحركة" },
      { en: "Single Drum Structure", zh: "单锅筒结构", es: "Estructura de tambor simple", fr: "Structure à tambour unique", de: "Einzeltrommelstruktur", ru: "Однобарабанная структура", ar: "هيكل طبل واحد" },
      { en: "Manual/Auto Feeding", zh: "手动/自动进料", es: "Alimentación manual/automática", fr: "Alimentation manuelle/automatique", de: "Manuelle/Automatische Zuführung", ru: "Ручная/автоматическая подача", ar: "تغذية يدوية/آلية" }
    ],
    faq: [
      {
        question: {
          en: "What fuels can this boiler burn?",
          zh: "这台锅炉可以燃烧什么燃料？",
          es: "¿Qué combustibles puede quemar esta caldera?",
          fr: "Quels combustibles cette chaudière peut-elle brûler ?",
          de: "Welche Brennstoffe kann dieser Kessel verbrennen?",
          ru: "Какие виды топлива может сжигать этот котел?",
          ar: "ما هو العقود الذي يمكن لهذه الغلاية حرقه؟"
        },
        answer: {
          en: "It is very flexible and can burn irregular solid fuels such as long wood logs (up to 2m), coal lumps, waste wood, and biomass briquettes.",
          zh: "它非常灵活，可以燃烧不规则的固体燃料，如长木条（最长2米）、块煤、废木料和生物质压块。",
          es: "Es muy flexible y puede quemar combustibles sólidos irregulares como troncos de madera largos (hasta 2 m) y carbón.",
          fr: "Elle est très flexible et peut brûler des combustibles solides irréguliers tels que de longues bûches de bois (jusqu'à 2 m) et du charbon.",
          de: "Er ist sehr flexibel und kann unregelmäßige Festbrennstoffe wie lange Holzscheite (bis zu 2 m) und Kohle verbrennen.",
          ru: "Он очень гибкий и может сжигать нерегулярные твердые виды топлива, такие как длинные бревна (до 2 м) и уголь.",
          ar: "وهي مرنة للغاية ويمكن أن تحرق الوقود الصلب غير المنتظم مثل جذوع الخشب الطويلة (حتى 2 متر) والفحم."
        }
      },
      {
        question: {
          en: "What is the advantage of the 'Wing-Shaped Flue'?",
          zh: "“翼型烟道”有什么优势？",
          es: "¿Cuál es la ventaja del 'Conducto de humos en forma de ala'?",
          fr: "Quel est l'avantage du 'conduit de fumée en forme d'aile' ?",
          de: "Was ist der Vorteil des 'flügelförmigen Rauchzugs'?",
          ru: "В чем преимущество 'крыловидного дымохода'?",
          ar: "ما هي ميزة 'مجرى العادم على شكل جناح'؟"
        },
        answer: {
          en: "The wing-shaped flues are placed near the high-temperature zone to ensure uniform heating of the tube plate relative to the drum bottom, preventing cracks caused by thermal stress.",
          zh: "翼型烟道布置在高温区附近，确保管板与锅筒底部的受热均匀，防止热应力引起的裂纹。",
          es: "Garantiza un calentamiento uniforme de la placa de tubos en relación con el fondo del tambor, evitando grietas por estrés térmico.",
          fr: "Il assure un chauffage uniforme de la plaque tubulaire par rapport au fond du tambour, empêchant les fissures dues aux contraintes thermiques.",
          de: "Er sorgt für eine gleichmäßige Erwärmung der Rohrplatte relativ zum Trommelboden und verhindert Risse durch thermische Beanspruchung.",
          ru: "Он обеспечивает равномерный нагрев трубной решетки относительно дна барабана, предотвращая трещины от теплового напряжения.",
          ar: "يضمن تسخينًا موحدًا للوحة الأنبوب بالنسبة لقاع الطبل، مما يمنع الشقوق الناتجة عن الإجهاد الحراري."
        }
      }
    ],
    specs: [
      {
        model: "DZH0.5",
        capacity: "0.5 T/H",
        pressure: "0.4 / 0.7 MPa",
        efficiency: "≥ 78%",
        fuel: "Biomass / Wood / Coal",
        steamTemp: "170°C",
        grateArea: "1.28 m²",
        dimensions: "3228 x 2000 x 2656 mm",
        weight: "8 T"
      },
      {
        model: "DZH1",
        capacity: "1 T/H",
        pressure: "0.7 / 1.0 MPa",
        efficiency: "≥ 79%",
        fuel: "Biomass / Wood / Coal",
        steamTemp: "170 / 184°C",
        grateArea: "2.1 m²",
        dimensions: "4108 x 2200 x 2915 mm",
        weight: "10 T"
      },
      {
        model: "DZH2",
        capacity: "2 T/H",
        pressure: "0.7 / 1.0 / 1.25 MPa",
        efficiency: "≥ 80%",
        fuel: "Biomass / Wood / Coal",
        steamTemp: "170 / 184 / 194°C",
        grateArea: "3.36 m²",
        dimensions: "4700 x 2300 x 3270 mm",
        weight: "14 T"
      },
      {
        model: "DZH4",
        capacity: "4 T/H",
        pressure: "1.25 / 1.6 MPa",
        efficiency: "≥ 81%",
        fuel: "Biomass / Wood / Coal",
        steamTemp: "194 / 204°C",
        grateArea: "5.2 m²",
        dimensions: "5590 x 2550 x 3563 mm",
        weight: "22 T"
      }
    ]
  },
  // 19. Horizontal Biomass Steam Generator
  {
    id: "horizontal-biomass-steam-generator-new",
    category: "steam",
    name: {
      en: "Horizontal Biomass Steam Generator",
      zh: "卧式生物质蒸汽发生器",
      es: "Generador de Vapor de Biomasa Horizontal",
      fr: "Générateur de Vapeur à Biomasse Horizontal",
      de: "Horizontaler Biomasse-Dampferzeuger",
      ru: "Горизонтальный парогенератор на биомассе",
      ar: "مولد بخار الكتلة الحيوية الأفقي"
    },
    description: {
      en: "Efficient horizontal biomass steam generator, compact and energy-saving.",
      zh: "高效卧式生物质蒸汽发生器，结构紧凑，节能环保。",
      es: "Generador de vapor de biomasa horizontal eficiente, compacto y ahorrador de energía.",
      fr: "Générateur de vapeur à biomasse horizontal efficace, compact et économe en énergie.",
      de: "Effizienter horizontaler Biomasse-Dampferzeuger, kompakt und energiesparend.",
      ru: "Эффективный горизонтальный парогенератор на биомассе, компактный и энергосберегающий.",
      ar: "مولد بخار الكتلة الحيوية الأفقي الفعال， مدمج وموفر للطاقة."
    },
    fullDescription: {
      en: "This horizontal biomass steam generator adopts a fire-tube or water-fire tube hybrid structure designed for efficient combustion of biomass pellets, wood chips, and agricultural waste. It features a larger furnace volume for complete combustion and a multi-pass design for high thermal efficiency (>88%). Ideal for medium-scale industrial applications such as food processing, textile manufacturing, and chemical heating, offering a sustainable alternative to coal or oil-fired boilers.",
      zh: "该卧式生物质蒸汽发生器采用火管或是水火管混合结构，专为高效燃烧生物质颗粒、木片和农业废弃物而设计。它具有更大的炉膛容积以确保燃料充分燃烧，并采用多回程设计以实现高热效率（>88%）。非常适合食品加工、纺织制造和化工供热等中型工业应用，是替代燃煤或燃油锅炉的可持续选择。"
    },
    image: "/images/products/biomass-steam-generator-horizontal-v2.jpg",
    icon: "Leaf",
    features: [
      { en: "High Efficiency (>88%)", zh: "高热效率 (>88%)" },
      { en: "Multi-Pass Design", zh: "多回程设计" },
      { en: "Large Furnace Volume", zh: "大炉膛容积" },
      { en: "Auto Feeding System", zh: "自动送料系统" },
      { en: "Low Emissions", zh: "低排放" }
    ],
    specs: [
      {
        model: "DZH-0.5",
        capacity: "500 kg/h",
        thermalPower: "350 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "1.2 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "85 kg/h",
        efficiency: "≥ 88%",
        steamOutlet: "DN40",
        safetyValve: "DN40",
        feedWaterInlet: "DN25",
        blowdown: "DN40",
        chimneyDiameter: "250mm",
        weight: "2800 kg",
        dimensions: "2800 x 1500 x 2000 mm"
      },
      {
        model: "DZH-1.0",
        capacity: "1000 kg/h",
        thermalPower: "700 kW",
        pressure: "1.0 MPa",
        steamTemp: "184 °C",
        waterCapacity: "2.1 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "160 kg/h",
        efficiency: "≥ 88%",
        steamOutlet: "DN50",
        safetyValve: "DN40 x 2",
        feedWaterInlet: "DN32",
        blowdown: "DN40",
        chimneyDiameter: "300mm",
        weight: "4200 kg",
        dimensions: "3200 x 1700 x 2200 mm"
      },
      {
        model: "DZH-2.0",
        capacity: "2000 kg/h",
        thermalPower: "1400 kW",
        pressure: "1.25 MPa",
        steamTemp: "194 °C",
        waterCapacity: "3.5 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "320 kg/h",
        efficiency: "≥ 88%",
        steamOutlet: "DN65",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN40",
        blowdown: "DN40",
        chimneyDiameter: "400mm",
        weight: "6500 kg",
        dimensions: "3800 x 1900 x 2500 mm"
      },
      {
        model: "DZH-4.0",
        capacity: "4000 kg/h",
        thermalPower: "2800 kW",
        pressure: "1.25 MPa",
        steamTemp: "194 °C",
        waterCapacity: "5.8 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "640 kg/h",
        efficiency: "≥ 88%",
        steamOutlet: "DN100",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN40",
        blowdown: "DN50",
        chimneyDiameter: "500mm",
        weight: "11000 kg",
        dimensions: "4500 x 2200 x 2900 mm"
      },
      {
        model: "DZH-6.0",
        capacity: "6000 kg/h",
        thermalPower: "4200 kW",
        pressure: "1.25 MPa",
        steamTemp: "194 °C",
        waterCapacity: "8.2 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "960 kg/h",
        efficiency: "≥ 88%",
        steamOutlet: "DN125",
        safetyValve: "DN65 x 2",
        feedWaterInlet: "DN50",
        blowdown: "DN50",
        chimneyDiameter: "600mm",
        weight: "15500 kg",
        dimensions: "5200 x 2400 x 3100 mm"
      },
      {
        model: "DZL-1T",
        capacity: "1000 kg/h",
        thermalPower: "0.7 MW",
        pressure: "0.7 / 1.0 MPa",
        steamTemp: "170 / 184 °C",
        waterCapacity: "2.6 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "150 kg/h",
        efficiency: "≥ 88%",
        weight: "14000 kg",
        dimensions: "3500 x 1800 x 2200 mm"
      },
      {
        model: "DZL-2T",
        capacity: "2000 kg/h",
        thermalPower: "1.4 MW",
        pressure: "1.0 / 1.25 MPa",
        steamTemp: "184 / 194 °C",
        waterCapacity: "4.2 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "300 kg/h",
        efficiency: "≥ 88%",
        weight: "22000 kg",
        dimensions: "4200 x 2100 x 2500 mm"
      },
      {
        model: "DZL-4T",
        capacity: "4000 kg/h",
        thermalPower: "2.8 MW",
        pressure: "1.25 / 1.6 MPa",
        steamTemp: "194 / 204 °C",
        waterCapacity: "6.5 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "600 kg/h",
        efficiency: "≥ 89%",
        weight: "34000 kg",
        dimensions: "5600 x 2400 x 3100 mm"
      },
      {
        model: "DZL-6T",
        capacity: "6000 kg/h",
        thermalPower: "4.2 MW",
        pressure: "1.25 / 1.6 MPa",
        steamTemp: "194 / 204 °C",
        waterCapacity: "7.8 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "900 kg/h",
        efficiency: "≥ 88%",
        weight: "42000 kg",
        dimensions: "6200 x 2600 x 3300 mm"
      },
      {
        model: "DZL-8T",
        capacity: "8000 kg/h",
        thermalPower: "5.6 MW",
        pressure: "1.25 / 1.6 MPa",
        steamTemp: "194 / 204 °C",
        waterCapacity: "9.5 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "1200 kg/h",
        efficiency: "≥ 88%",
        weight: "48000 kg",
        dimensions: "6800 x 2800 x 3500 mm"
      },
      {
        model: "DZL-10T",
        capacity: "10000 kg/h",
        thermalPower: "7.0 MW",
        pressure: "1.25 / 1.6 / 2.5 MPa",
        steamTemp: "194 / 204 / 225 °C",
        waterCapacity: "11.2 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "1500 kg/h",
        efficiency: "≥ 88%",
        weight: "56000 kg",
        dimensions: "7500 x 3000 x 3800 mm"
      },
      {
        model: "DZL-15T",
        capacity: "15000 kg/h",
        thermalPower: "10.5 MW",
        pressure: "1.25 / 1.6 / 2.5 MPa",
        steamTemp: "194 / 204 / 225 °C",
        waterCapacity: "15.6 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "2250 kg/h",
        efficiency: "≥ 88%",
        weight: "72000 kg",
        dimensions: "8200 x 3200 x 4200 mm"
      },
      {
        model: "DZL-20T",
        capacity: "20000 kg/h",
        thermalPower: "14.0 MW",
        pressure: "1.25 / 1.6 / 2.5 MPa",
        steamTemp: "194 / 204 / 225 °C",
        waterCapacity: "18.5 m³",
        fuel: "Biomass Pellets",
        fuelConsumption: "3000 kg/h",
        efficiency: "≥ 88%",
        weight: "85000 kg",
        dimensions: "9000 x 3500 x 4500 mm"
      }
    ],
    faq: []
  },
  // 20. Biomass Steam Generator (Vertical)
  {
    id: "biomass-steam-generator-vertical",
    category: "steam",
    name: {
      en: "Vertical Biomass Steam Generator",
      zh: "立式生物质蒸汽发生器",
      es: "Generador de Vapor de Biomasa Vertical",
      fr: "Générateur de Vapeur à Biomasse Vertical",
      de: "Vertikaler Biomasse-Dampferzeuger",
      ru: "Вертикальный парогенератор на биомассе",
      ar: "مولد بخار الكتلة الحيوية العمودي"
    },
    description: {
      en: "Vertical biomass steam generator, exemption from inspection, easy installation.",
      zh: "立式生物质蒸汽发生器，免检产品，安装简便。",
      es: "Generador de vapor de biomasa vertical, exento de inspección, fácil instalación.",
      fr: "Générateur de vapeur à biomasse vertical, exempté d'inspection, installation facile.",
      de: "Vertikaler Biomasse-Dampferzeuger, inspektionsfrei, einfache Installation.",
      ru: "Вертикальный парогенератор на биомассе, освобождение от инспекции, простая установка.",
      ar: "مولد بخار الكتلة الحيوية العمودي， إعفاء من التفتيش， سهل التركيب."
    },
    fullDescription: {
      en: "This vertical biomass steam generator is a compact, small-footprint solution designed for small businesses. It typically has a water capacity below 30L, exempting it from complex annual inspections in many regions. With one-button start and automatic feeding, it provides steam quickly (within 5-10 minutes). Perfect for garment ironing, tofu making, sterilization, and small-scale food processing.",
      zh: "这款立式生物质蒸汽发生器是专为小型企业设计的紧凑型、占地面积小的解决方案。其水容量通常低于30L，在许多地区免除了繁琐的年检。具有一键启动和自动送料功能，可快速提供蒸汽（5-10分钟内）。非常适合服装熨烫、豆腐制作、消毒灭菌和小型食品加工。"
    },
    image: "/images/products/biomass-steam-generator-vertical.jpg",
    icon: "Leaf",
    features: [
      { en: "Inspection Exempt (<30L)", zh: "免检产品 (<30L)" },
      { en: "Rapid Steam (5-10min)", zh: "快速出汽 (5-10分钟)" },
      { en: "Small Footprint", zh: "占地面积小" },
      { en: "Automatic Operation", zh: "全自动运行" },
      { en: "Cost Effective", zh: "性价比高" }
    ],
    specs: [
      {
        model: "LHS-50kg",
        capacity: "50 kg/h",
        thermalPower: "35 kW",
        pressure: "0.4 / 0.7 MPa",
        steamTemp: "151 / 170 °C",
        waterCapacity: "28 L",
        fuel: "Biomass Pellets",
        fuelConsumption: "8-10 kg/h",
        efficiency: "≥ 90%",
        steamOutlet: "DN15",
        safetyValve: "DN20",
        feedWaterInlet: "DN15",
        blowdown: "DN20",
        chimneyDiameter: "100mm",
        dimensions: "1100 x 900 x 1800 mm",
        weight: "450 kg"
      },
      {
        model: "LHS-100kg",
        capacity: "100 kg/h",
        thermalPower: "70 kW",
        pressure: "0.4 / 0.7 MPa",
        steamTemp: "151 / 170 °C",
        waterCapacity: "28 L",
        fuel: "Biomass Pellets",
        fuelConsumption: "18-20 kg/h",
        efficiency: "≥ 90%",
        steamOutlet: "DN15",
        safetyValve: "DN20",
        feedWaterInlet: "DN15",
        blowdown: "DN20",
        chimneyDiameter: "100mm",
        dimensions: "1300 x 1100 x 2000 mm",
        weight: "650 kg"
      },
      {
        model: "LHS-200kg",
        capacity: "200 kg/h",
        thermalPower: "140 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "28 L",
        fuel: "Biomass Pellets",
        fuelConsumption: "35-40 kg/h",
        efficiency: "≥ 90%",
        steamOutlet: "DN25",
        safetyValve: "DN25",
        feedWaterInlet: "DN25",
        blowdown: "DN25",
        chimneyDiameter: "150mm",
        dimensions: "1400 x 1200 x 2200 mm",
        weight: "850 kg"
      },
      {
        model: "LHS-300kg",
        capacity: "300 kg/h",
        thermalPower: "210 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "295 L",
        fuel: "Biomass Pellets",
        fuelConsumption: "50-60 kg/h",
        efficiency: "≥ 91%",
        steamOutlet: "DN25",
        safetyValve: "DN25",
        feedWaterInlet: "DN25",
        blowdown: "DN25",
        chimneyDiameter: "150mm",
        dimensions: "1600 x 1400 x 2400 mm",
        weight: "1200 kg"
      },
      {
        model: "LHS-500kg",
        capacity: "500 kg/h",
        thermalPower: "350 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "480 L",
        fuel: "Biomass Pellets",
        fuelConsumption: "85-100 kg/h",
        efficiency: "≥ 92%",
        steamOutlet: "DN32",
        safetyValve: "DN32",
        feedWaterInlet: "DN25",
        blowdown: "DN25",
        chimneyDiameter: "200mm",
        dimensions: "1800 x 1600 x 2800 mm",
        weight: "1800 kg"
      }
    ],
    faq: []
  },
  // 21. Gas Steam Generator
  {
    id: "gas-steam-generator-vertical",
    category: "steam",
    name: {
      en: "Gas Fired Vertical Steam Generator",
      zh: "燃气蒸汽发生器 (立式)",
      es: "Generador de Vapor a Gas Vertical",
      fr: "Générateur de Vapeur au Gaz Vertical",
      de: "Vertikaler Gas-Dampferzeuger",
      ru: "Вертикальный газовый парогенератор",
      ar: "مولد بخار غاز عمودي"
    },
    description: {
      en: "Clean energy gas steam generator, instant steam, intelligent control.",
      zh: "清洁能源燃气蒸汽发生器，即开即用，智能控制。",
      es: "Generador de vapor a gas de energía limpia, vapor instantáneo, control inteligente.",
      fr: "Générateur de vapeur au gaz à énergie propre, vapeur instantanée, contrôle intelligent.",
      de: "Sauberer Energie-Gas-Dampferzeuger, sofortiger Dampf, intelligente Steuerung.",
      ru: "Газовый парогенератор на чистой энергии, мгновенный пар, интеллектуальное управление.",
      ar: "مولد بخار غاز الطاقة النظيفة， بخار فوري， تحكم ذكي."
    },
    fullDescription: {
      en: "The Gas Fired Vertical Steam Generator offers instant steam production with high thermal efficiency (≥95%). Its once-through design ensures safety by eliminating the risk of explosion. Equipped with a fully intelligent PLC control system and brand-name burner, it ensures low Nitrogen Oxide (NOx) emissions and stable operation. Widely used in laboratories, hospitals, catering, and washing industries.",
      zh: "燃气立式蒸汽发生器提供即时蒸汽生产，热效率高（≥95%）。其直流式设计消除了爆炸风险，确保安全。配备全智能PLC控制系统和名牌燃烧器，确保低氮氧化物（NOx）排放和稳定运行。广泛用于实验室、医院、餐饮和洗涤行业。"
    },
    image: "/images/products/gas-steam-generator.jpg",
    icon: "Flame",
    features: [
      { en: "Instant Steam (3-5min)", zh: "即开即用 (3-5分钟)" },
      { en: "High Efficiency (≥95%)", zh: "高热效率 (≥95%)" },
      { en: "Low NOx Emissions", zh: "低氮排放" },
      { en: "Explosion Proof Design", zh: "防爆设计" },
      { en: "Intelligent Control", zh: "智能控制" }
    ],
    specs: [
      {
        model: "LSS-0.1 (100kg)",
        capacity: "100 kg/h",
        thermalPower: "70 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "28 L",
        fuel: "Natural Gas / LPG",
        gasConsumption: "7-8 Nm³/h",
        efficiency: "≥ 96%",
        steamOutlet: "DN15",
        safetyValve: "DN20",
        feedWaterInlet: "DN15",
        blowdown: "DN20",
        chimneyDiameter: "100mm",
        dimensions: "900 x 800 x 1800 mm",
        weight: "400 kg"
      },
      {
        model: "LSS-0.2 (200kg)",
        capacity: "200 kg/h",
        thermalPower: "140 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "28 L",
        fuel: "Natural Gas / LPG",
        gasConsumption: "15-16 Nm³/h",
        efficiency: "≥ 96%",
        steamOutlet: "DN25",
        safetyValve: "DN25",
        feedWaterInlet: "DN15",
        blowdown: "DN25",
        chimneyDiameter: "150mm",
        dimensions: "1000 x 900 x 2000 mm",
        weight: "550 kg"
      },
      {
        model: "LSS-0.3 (300kg)",
        capacity: "300 kg/h",
        thermalPower: "210 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "28 L",
        fuel: "Natural Gas / LPG",
        gasConsumption: "22-24 Nm³/h",
        efficiency: "≥ 96%",
        steamOutlet: "DN25",
        safetyValve: "DN25",
        feedWaterInlet: "DN25",
        blowdown: "DN25",
        chimneyDiameter: "150mm",
        dimensions: "1200 x 1000 x 2100 mm",
        weight: "700 kg"
      },
      {
        model: "LSS-0.5 (500kg)",
        capacity: "500 kg/h",
        thermalPower: "350 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "28 L (Coil Type)",
        fuel: "Natural Gas / LPG",
        gasConsumption: "38-40 Nm³/h",
        efficiency: "≥ 96%",
        steamOutlet: "DN32",
        safetyValve: "DN32",
        feedWaterInlet: "DN25",
        blowdown: "DN25",
        chimneyDiameter: "200mm",
        dimensions: "1500 x 1200 x 2300 mm",
        weight: "1100 kg"
      },
      {
        model: "LSS-1.0 (1000kg)",
        capacity: "1000 kg/h",
        thermalPower: "700 kW",
        pressure: "0.7 MPa",
        steamTemp: "170 °C",
        waterCapacity: "28 L (Coil Type)",
        fuel: "Natural Gas / LPG",
        gasConsumption: "75-80 Nm³/h",
        efficiency: "≥ 96%",
        steamOutlet: "DN50",
        safetyValve: "DN40",
        feedWaterInlet: "DN32",
        blowdown: "DN40",
        chimneyDiameter: "300mm",
        dimensions: "1800 x 1500 x 2600 mm",
        weight: "1800 kg"
      }
    ],
    faq: []
  },
  // 22. Horizontal Gas Steam Generator
  {
    id: "horizontal-gas-steam-generator",
    category: "steam",
    name: {
      en: "Horizontal Gas Fired Steam Generator",
      zh: "燃气卧式蒸汽发生器",
      es: "Generador de Vapor a Gas Horizontal",
      fr: "Générateur de Vapeur au Gaz Horizontal",
      de: "Horizontaler Gas-Dampferzeuger",
      ru: "Горизонтальный газовый парогенератор",
      ar: "مولد بخار غاز أفقي"
    },
    description: {
      en: "Large capacity horizontal styling, stable pressure and continuous output.",
      zh: "大容量卧式设计，压力稳定，连续输出。",
      es: "Diseño horizontal de gran capacidad, presión estable y salida continua.",
      fr: "Conception horizontale de grande capacité, pression stable et sortie continue.",
      de: "Horizontales Design mit großer Kapazität, stabiler Druck und kontinuierliche Leistung.",
      ru: "Горизонтальный дизайн большой емкости, стабильное давление и непрерывная производительность.",
      ar: "تصميم أفقي ذو سعة كبيرة， ضغط مستقر وإخراج مستمر."
    },
    fullDescription: {
      en: "Compared to vertical models, this Horizontal Gas Steam Generator offers larger water capacity and steam space, resulting in drier, higher-quality steam and more stable pressure output. It is suitable for industrial processes requiring continuous and stable steam supply, such as large-scale food processing, chemical reactions, and rubber vulcanization. It features a three-pass wetback structure for maximum heat transfer efficiency.",
      zh: "与立式型号相比，这款燃气卧式蒸汽发生器提供更大的水容量和蒸汽空间，产生从而产生更干燥、更高质量的蒸汽和更稳定的压力输出。它适用于需要连续稳定蒸汽供应的工业过程，如大型食品加工、化学反应和橡胶硫化。采用三回程湿背式结构，最大限度地提高传热效率。"
    },
    image: "/images/products/horizontal-gas-steam-generator.jpg",
    icon: "Flame",
    features: [
      { en: "Large Steam Capacity", zh: "大蒸汽容量" },
      { en: "Stable Pressure", zh: "压力稳定" },
      { en: "High Steam Quality (Dry)", zh: "高品质干燥蒸汽" },
      { en: "Three-Pass Structure", zh: "三回程结构" },
      { en: "Long Service Life", zh: "使用寿命长" }
    ],
    specs: [
      {
        model: "WNS-1T",
        capacity: "1000 kg/h",
        thermalPower: "0.7 MW",
        pressure: "1.0 / 1.25 MPa",
        steamTemp: "184 / 194 °C",
        waterCapacity: "2.1 m³",
        fuel: "Natural Gas",
        gasConsumption: "75 Nm³/h",
        efficiency: "≥ 98%",
        steamOutlet: "DN50",
        safetyValve: "DN40 x 2",
        feedWaterInlet: "DN25",
        blowdown: "DN40",
        chimneyDiameter: "300mm",
        powerSupply: "3kW",
        weight: "4500 kg",
        dimensions: "3200 x 1800 x 2100 mm"
      },
      {
        model: "WNS-2T",
        capacity: "2000 kg/h",
        thermalPower: "1.4 MW",
        pressure: "1.0 / 1.25 MPa",
        steamTemp: "184 / 194 °C",
        waterCapacity: "3.8 m³",
        fuel: "Natural Gas",
        gasConsumption: "150 Nm³/h",
        efficiency: "≥ 98%",
        steamOutlet: "DN65",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN32",
        blowdown: "DN40",
        chimneyDiameter: "400mm",
        powerSupply: "5.5kW",
        weight: "6800 kg",
        dimensions: "3800 x 2000 x 2400 mm"
      },
      {
        model: "WNS-4T",
        capacity: "4000 kg/h",
        thermalPower: "2.8 MW",
        pressure: "1.25 / 1.6 MPa",
        steamTemp: "194 / 204 °C",
        waterCapacity: "6.2 m³",
        fuel: "Natural Gas",
        gasConsumption: "300 Nm³/h",
        efficiency: "≥ 98%",
        steamOutlet: "DN100",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN40",
        blowdown: "DN50",
        chimneyDiameter: "500mm",
        powerSupply: "11kW",
        weight: "10500 kg",
        dimensions: "4500 x 2300 x 2800 mm"
      },
      {
        model: "WNS-6T",
        capacity: "6000 kg/h",
        thermalPower: "4.2 MW",
        pressure: "1.25 / 1.6 MPa",
        steamTemp: "194 / 204 °C",
        waterCapacity: "8.5 m³",
        fuel: "Natural Gas",
        gasConsumption: "450 Nm³/h",
        efficiency: "≥ 98%",
        steamOutlet: "DN125",
        safetyValve: "DN65 x 2",
        feedWaterInlet: "DN40",
        blowdown: "DN50",
        chimneyDiameter: "600mm",
        powerSupply: "15kW",
        weight: "16000 kg",
        dimensions: "5200 x 2500 x 3100 mm"
      },
      {
        model: "WNS-10T",
        capacity: "10000 kg/h",
        thermalPower: "7.0 MW",
        pressure: "1.25 / 1.6 MPa",
        steamTemp: "194 / 204 °C",
        waterCapacity: "12.6 m³",
        fuel: "Natural Gas",
        gasConsumption: "750 Nm³/h",
        efficiency: "≥ 98%",
        steamOutlet: "DN150",
        safetyValve: "DN80 x 2",
        feedWaterInlet: "DN50",
        blowdown: "DN65",
        chimneyDiameter: "800mm",
        powerSupply: "22kW",
        weight: "22000 kg",
        dimensions: "6500 x 2800 x 3400 mm"
      }
    ],
    faq: []
  },
  // 23. Electric Steam Generator
  {
    id: "electric-steam-generator-compact",
    category: "steam",
    name: {
      en: "Electric Steam Generator",
      zh: "电蒸汽发生器",
      es: "Generador de Vapor Eléctrico",
      fr: "Générateur de Vapeur Électrique",
      de: "Elektrischer Dampferzeuger",
      ru: "Электрический парогенератор",
      ar: "مولد بخار كهربائي"
    },
    description: {
      en: "Zero emissions, quiet operation, precision control electric steam generator.",
      zh: "零排放，静音运行，精准控制电蒸汽发生器。",
      es: "Cero emisiones, funcionamiento silencioso, control de precisión.",
      fr: "Zéro émission, fonctionnement silencieux, contrôle de précision.",
      de: "Null Emissionen, leiser Betrieb, Präzisionssteuerung.",
      ru: "Нулевые выбросы, тихая работа, точный контроль.",
      ar: "صفر انبعاثات， تشغيل هادئ， تحكم دقيق."
    },
    fullDescription: {
      en: "This Electric Steam Generator converts electrical energy into steam energy with near 100% efficiency. It produces zero emissions, operates quietly, and requires no specialized ventilation or fuel storage. Ideal for strictly regulated environments like cleanrooms, laboratories, hospitals, and electronics manufacturing. Features precise power regulation and instant steam production.",
      zh: "这款电蒸汽发生器以接近 100% 的效率将电能转化为蒸汽热能。它零排放、静音运行，且无需专用通风或燃料储存。非常适合受严格监管的环境，如洁净室、实验室、医院和电子制造。具有精确的功率调节和即时产汽功能。"
    },
    image: "/images/products/electric-steam-generator.jpg",
    icon: "Zap",
    features: [
      { en: "Zero Emissions", zh: "零排放" },
      { en: "99% Efficiency", zh: "99% 热效率" },
      { en: "Quiet & Compact", zh: "静音且紧凑" },
      { en: "Precise Control", zh: "精准控制" },
      { en: "Easy Installation", zh: "安装简便" }
    ],
    specs: [
      {
        model: "LDR-18",
        capacity: "25 kg/h",
        power: "18 kW",
        current: "27 A",
        pressure: "0.4 - 0.7 MPa",
        voltage: "380V / 50Hz",
        steamOutlet: "DN15",
        safetyValve: "DN20",
        feedWaterInlet: "DN15",
        blowdown: "DN20",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "600 x 500 x 1100 mm",
        weight: "80 kg"
      },
      {
        model: "LDR-36",
        capacity: "50 kg/h",
        power: "36 kW",
        current: "54 A",
        pressure: "0.4 - 0.7 MPa",
        voltage: "380V / 50Hz",
        steamOutlet: "DN15",
        safetyValve: "DN20",
        feedWaterInlet: "DN15",
        blowdown: "DN20",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "700 x 600 x 1200 mm",
        weight: "120 kg"
      },
      {
        model: "LDR-72",
        capacity: "100 kg/h",
        power: "72 kW",
        current: "108 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        steamOutlet: "DN25",
        safetyValve: "DN25",
        feedWaterInlet: "DN20",
        blowdown: "DN25",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "850 x 750 x 1400 mm",
        weight: "200 kg"
      },
      {
        model: "LDR-144",
        capacity: "200 kg/h",
        power: "144 kW",
        current: "216 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        steamOutlet: "DN40",
        safetyValve: "DN32",
        feedWaterInlet: "DN25",
        blowdown: "DN25",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1100 x 1000 x 1600 mm",
        weight: "450 kg"
      },
      {
        model: "LDR-216",
        capacity: "300 kg/h",
        power: "216 kW",
        current: "324 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        steamOutlet: "DN50",
        safetyValve: "DN40",
        feedWaterInlet: "DN32",
        blowdown: "DN32",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1250 x 1100 x 1700 mm",
        weight: "650 kg"
      },
      {
        model: "LDR-360",
        capacity: "500 kg/h",
        power: "360 kW",
        current: "540 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        steamOutlet: "DN65",
        safetyValve: "DN50",
        feedWaterInlet: "DN40",
        blowdown: "DN40",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1500 x 1300 x 1900 mm",
        weight: "900 kg"
      },
      {
        model: "LDR-720",
        capacity: "1000 kg/h",
        power: "720 kW",
        current: "1080 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        steamOutlet: "DN80",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN50",
        blowdown: "DN50",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1800 x 1500 x 2200 mm",
        weight: "1500 kg"
      }
    ],
    faq: []
  },
  // 24. Gas Thermal Oil Heater
  {
    id: "gas-thermal-oil-heater",
    category: "thermal_oil",
    name: {
      en: "Gas Fired Thermal Oil Heater",
      zh: "燃气导热油炉",
      es: "Calentador de Aceite Térmico a Gas",
      fr: "Réchauffeur d'Huile Thermique au Gaz",
      de: "Gasbefeuerter Thermalölhitzer",
      ru: "Газовый термомасляный нагреватель",
      ar: "سخان زيت حراري يعمل بالغاز"
    },
    description: {
      en: "High temperature low pressure heating, precise temperature control.",
      zh: "高温低压供热，精准控温。",
      es: "Calefacción de alta temperatura y baja presión, control preciso de la temperatura.",
      fr: "Chauffage haute température basse pression, contrôle précis de la température.",
      de: "Hochtemperatur-Niederdruckheizung, präzise Temperaturregelung.",
      ru: "Высокотемпературный нагрев при низком давлении, точный контроль температуры.",
      ar: "تسخين بدرجة حرارة عالية وضغط منخفض， تحكم دقيق في درجة الحرارة."
    },
    fullDescription: {
      en: "This Gas Fired Thermal Oil Heater typically uses a multi-coil design for uniform heating. It can achieve high operating temperatures (up to 320°C) at very low operating pressures (<0.3 MPa), making it safer than high-pressure steam boilers. It is equipped with advanced burner technology and waste heat recovery to ensure high thermal efficiency. Widely used in chemical, textile printing, asphalt heating, and wood processing industries.",
      zh: "这款燃气导热油炉通常采用多盘管设计以实现均匀加热。它可以在极低的工作压力（<0.3 MPa）下达到很高的工作温度（高达 320°C），比高压蒸汽锅炉更安全。配备先进的燃烧器技术和余热回收装置，确保高热效率。广泛应用于化工、纺织印染、沥青加热和木材加工行业。"
    },
    image: "/images/products/gas-thermal-oil-heater-v2.jpg",
    icon: "Thermometer",
    features: [
      { en: "High Temp (320°C)", zh: "高温 (320°C)" },
      { en: "Low Pressure (<0.3 MPa)", zh: "低压 (<0.3 MPa)" },
      { en: "Safe Operation", zh: "安全运行" },
      { en: "Precise Temp Control", zh: "精准温控" },
      { en: "Energy Saving", zh: "节能减排" }
    ],
    specs: [
      {
        model: "YY(Q)W-350Y(Q)",
        thermalPower: "350 kW",
        outputHeat: "300,000 kcal/h",
        pressure: "0.6 - 1.0 MPa",
        maxTemp: "320 °C",
        efficiency: "≥ 95%",
        fuel: "Natural Gas / Oil",
        gasConsumption: "35 Nm³/h",
        oilCapacity: "150 L",
        steamOutlet: "DN40",
        feedWaterInlet: "DN40",
        blowdown: "DN25",
        chimneyDiameter: "250mm",
        dimensions: "2500 x 1200 x 1800 mm",
        weight: "2500 kg"
      },
      {
        model: "YY(Q)W-700Y(Q)",
        thermalPower: "700 kW",
        outputHeat: "600,000 kcal/h",
        pressure: "0.6 - 1.0 MPa",
        maxTemp: "320 °C",
        efficiency: "≥ 95%",
        fuel: "Natural Gas / Oil",
        gasConsumption: "70 Nm³/h",
        oilCapacity: "350 L",
        steamOutlet: "DN50",
        feedWaterInlet: "DN50",
        blowdown: "DN32",
        chimneyDiameter: "300mm",
        dimensions: "3200 x 1500 x 2200 mm",
        weight: "4200 kg"
      },
      {
        model: "YY(Q)W-1400Y(Q)",
        thermalPower: "1400 kW",
        outputHeat: "1,200,000 kcal/h",
        pressure: "0.8 - 1.0 MPa",
        maxTemp: "320 °C",
        efficiency: "≥ 95%",
        fuel: "Natural Gas / Oil",
        gasConsumption: "140 Nm³/h",
        oilCapacity: "600 L",
        steamOutlet: "DN65",
        feedWaterInlet: "DN65",
        blowdown: "DN40",
        chimneyDiameter: "400mm",
        dimensions: "4500 x 1800 x 2600 mm",
        weight: "7500 kg"
      },
      {
        model: "YY(Q)W-2800Y(Q)",
        thermalPower: "2800 kW",
        outputHeat: "2,400,000 kcal/h",
        pressure: "0.8 - 1.0 MPa",
        maxTemp: "320 °C",
        efficiency: "≥ 95%",
        fuel: "Natural Gas / Oil",
        gasConsumption: "280 Nm³/h",
        oilCapacity: "1200 L",
        steamOutlet: "DN100",
        feedWaterInlet: "DN80",
        blowdown: "DN50",
        chimneyDiameter: "500mm",
        dimensions: "5800 x 2200 x 3000 mm",
        weight: "11000 kg"
      },
      {
        model: "YY(Q)W-4200Y(Q)",
        thermalPower: "4200 kW",
        outputHeat: "3,600,000 kcal/h",
        pressure: "1.0 MPa",
        maxTemp: "320 °C",
        efficiency: "≥ 95%",
        fuel: "Natural Gas / Oil",
        gasConsumption: "420 Nm³/h",
        oilCapacity: "1800 L",
        steamOutlet: "DN125",
        feedWaterInlet: "DN100",
        blowdown: "DN50",
        chimneyDiameter: "600mm",
        dimensions: "6500 x 2500 x 3300 mm",
        weight: "15000 kg"
      },
      {
        model: "YY(Q)W-7000Y(Q)",
        thermalPower: "7000 kW",
        outputHeat: "6,000,000 kcal/h",
        pressure: "1.0 MPa",
        maxTemp: "320 °C",
        efficiency: "≥ 95%",
        fuel: "Natural Gas / Oil",
        gasConsumption: "700 Nm³/h",
        oilCapacity: "3000 L",
        steamOutlet: "DN150",
        feedWaterInlet: "DN125",
        blowdown: "DN65",
        chimneyDiameter: "800mm",
        dimensions: "8000 x 2800 x 3600 mm",
        weight: "22000 kg"
      }
    ],
    faq: []
  },
  // 25. Electric Thermal Oil Heater
  {
    id: "electric-thermal-oil-heater",
    category: "thermal_oil",
    name: {
      en: "Electric Heated Thermal Oil Heater",
      zh: "电加热导热油炉",
      es: "Calentador de Aceite Térmico Eléctrico",
      fr: "Réchauffeur d'Huile Thermique Électrique",
      de: "Elektrischer Thermalölhitzer",
      ru: "Электрический термомасляный нагреватель",
      ar: "سخان زيت حراري كهربائي"
    },
    description: {
      en: "Clean and efficient electric heating for thermal oil systems.",
      zh: "清洁高效的导热油电加热系统。",
      es: "Calefacción eléctrica limpia y eficiente para sistemas de aceite térmico.",
      fr: "Chauffage électrique propre et efficace pour les systèmes d'huile thermique.",
      de: "Saubere und effiziente Elektroheizung für Thermalölsysteme.",
      ru: "Чистый и эффективный электрический нагрев для термомасляных систем.",
      ar: "تسخين كهربائي نظيف وفعال لأنظمة الزيت الحراري."
    },
    fullDescription: {
      en: "With electric heating elements directly immersed in the organic carrier (thermal oil), this heater provides extremely high efficiency (>98%) and fast heat-up times. It is controlled by PID logic for precise temperature accuracy within ±1°C. Ideal for industries requiring high precision heating, such as carbon fiber production, composite molding, and laboratory chemical reactions. Explosion-proof designs are available.",
      zh: "电加热元件直接浸没在有机载体（导热油）中，该加热器提供极高的效率（>98%）和快速升温时间。由 PID 逻辑控制，可实现 ±1°C 以内的精确温度控制。非常适合需要高精度加热的行业，如碳纤维生产、复合材料成型和实验室化学反应。可提供防爆设计。"
    },
    image: "/images/products/electric-thermal-oil-heater.jpg",
    icon: "Zap",
    features: [
      { en: "High Efficiency (>98%)", zh: "高热效率 (>98%)" },
      { en: "Precise Control (±1°C)", zh: "精准控制 (±1°C)" },
      { en: "Safe & Clean", zh: "安全清洁" },
      { en: "No Emissions", zh: "零排放" },
      { en: "Explosion Proof Optional", zh: "可选防爆" }
    ],
    specs: [
      {
        model: "YDR-30",
        power: "30 kW",
        outputHeat: "25,800 kcal/h",
        maxTemp: "300 °C",
        pressure: "0.6 MPa",
        flowRate: "12 m³/h",
        fuel: "Electric",
        efficiency: "≥ 98%",
        feedWaterInlet: "DN25", // Using inlet/outlet fields generically
        steamOutlet: "DN25",
        blowdown: "DN20",
        dimensions: "1200 x 600 x 1500 mm",
        weight: "300 kg"
      },
      {
        model: "YDR-60",
        power: "60 kW",
        outputHeat: "51,600 kcal/h",
        maxTemp: "300 °C",
        pressure: "0.6 MPa",
        flowRate: "12 m³/h",
        fuel: "Electric",
        efficiency: "≥ 98%",
        feedWaterInlet: "DN32",
        steamOutlet: "DN32",
        blowdown: "DN25",
        dimensions: "1400 x 800 x 1600 mm",
        weight: "500 kg"
      },
      {
        model: "YDR-120",
        power: "120 kW",
        outputHeat: "103,200 kcal/h",
        maxTemp: "300 °C",
        pressure: "0.6 MPa",
        flowRate: "20 m³/h",
        fuel: "Electric",
        efficiency: "≥ 98%",
        feedWaterInlet: "DN40",
        steamOutlet: "DN40",
        blowdown: "DN32",
        dimensions: "1600 x 1000 x 1800 mm",
        weight: "800 kg"
      },
      {
        model: "YDR-240",
        power: "240 kW",
        outputHeat: "206,400 kcal/h",
        maxTemp: "300 °C",
        pressure: "0.6 MPa",
        flowRate: "40 m³/h",
        fuel: "Electric",
        efficiency: "≥ 98%",
        feedWaterInlet: "DN50",
        steamOutlet: "DN50",
        blowdown: "DN40",
        dimensions: "1800 x 1200 x 2000 mm",
        weight: "1200 kg"
      },
      {
        model: "YDR-360",
        power: "360 kW",
        outputHeat: "309,600 kcal/h",
        maxTemp: "300 °C",
        pressure: "0.6 MPa",
        flowRate: "60 m³/h",
        fuel: "Electric",
        efficiency: "≥ 98%",
        feedWaterInlet: "DN65",
        steamOutlet: "DN65",
        blowdown: "DN40",
        dimensions: "2000 x 1400 x 2200 mm",
        weight: "1600 kg"
      }
    ],
    faq: []
  },
  // 26. Electromagnetic Steam Generator
  {
    id: "electromagnetic-steam-generator",
    category: "steam",
    name: {
      en: "Electromagnetic Steam Generator",
      zh: "电磁蒸汽发生器",
      es: "Generador de Vapor Electromagnético",
      fr: "Générateur de Vapeur Électromagnétique",
      de: "Elektromagnetischer Dampferzeuger",
      ru: "Электромагнитный парогенератор",
      ar: "مولد بخار كهرومغناطيسي"
    },
    description: {
      en: "Advanced magnetic induction heating, instant steam, long lifespan.",
      zh: "先进磁感应加热，急速出汽，超长寿命。",
      es: "Calentamiento por inducción magnética avanzado, vapor instantáneo, larga vida útil.",
      fr: "Chauffage par induction magnétique avancé, vapeur instantanée, longue durée de vie.",
      de: "Fortschrittliche magnetische Induktionsheizung, sofortiger Dampf, lange Lebensdauer.",
      ru: "Передовой магнитный индукционный нагрев, мгновенный пар, долгий срок службы.",
      ar: "تسخين بالحث المغناطيسي المتقدم， بخار فوري， عمر طويل."
    },
    fullDescription: {
      en: "Utilizing high-frequency electromagnetic induction for heating, this generator separates water from electricity, significantly enhancing safety. The oscillating magnetic field prevents scale formation on the heating body, ensuring consistent high efficiency over a long lifespan (>10 years). It offers rapid startup (steam in 60 seconds) and precise variable frequency power control, saving 20%+ energy compared to traditional resistance heating.",
      zh: "利用高频电磁感应加热，该发生器实现水电分离，显著提高安全性。振荡磁场防止加热体结垢，确保持久的高效能（寿命>10年）。具有快速启动（60秒出汽）和精确的变频功率控制，比传统电阻加热节能20%以上。"
    },
    image: "/images/products/electromagnetic-steam-generator.jpg",
    icon: "Zap",
    features: [
      { en: "Magnetic Induction", zh: "磁感应加热" },
      { en: "Water-Elec Separation", zh: "水电分离" },
      { en: "No Scale Formation", zh: "不易结垢" },
      { en: "Long Lifespan (>10yr)", zh: "超长寿命 (>10年)" },
      { en: "Energy Saving (20%+)", zh: "节能 (20%+)" }
    ],
    specs: [
      {
        model: "LDR(C)-0.1",
        capacity: "100 kg/h",
        power: "72 kW",
        current: "108 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        frequency: "20-25 KHz",
        steamOutlet: "DN25",
        safetyValve: "DN25",
        feedWaterInlet: "DN20",
        blowdown: "DN25",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1000 x 900 x 1600 mm",
        weight: "250 kg"
      },
      {
        model: "LDR(C)-0.2",
        capacity: "200 kg/h",
        power: "144 kW",
        current: "216 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        frequency: "20-25 KHz",
        steamOutlet: "DN40",
        safetyValve: "DN32",
        feedWaterInlet: "DN25",
        blowdown: "DN25",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1200 x 1100 x 1800 mm",
        weight: "450 kg"
      },
      {
        model: "LDR(C)-0.3",
        capacity: "300 kg/h",
        power: "216 kW",
        current: "324 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        frequency: "20-25 KHz",
        steamOutlet: "DN50",
        safetyValve: "DN40",
        feedWaterInlet: "DN32",
        blowdown: "DN32",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1400 x 1200 x 2000 mm",
        weight: "650 kg"
      },
      {
        model: "LDR(C)-0.5",
        capacity: "500 kg/h",
        power: "360 kW",
        current: "540 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        frequency: "20-25 KHz",
        steamOutlet: "DN65",
        safetyValve: "DN50",
        feedWaterInlet: "DN40",
        blowdown: "DN40",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1600 x 1400 x 2200 mm",
        weight: "950 kg"
      },
      {
        model: "LDR(C)-1.0",
        capacity: "1000 kg/h",
        power: "720 kW",
        current: "1080 A",
        pressure: "0.7 MPa",
        voltage: "380V / 50Hz",
        frequency: "20-25 KHz",
        steamOutlet: "DN80",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN50",
        blowdown: "DN50",
        fuel: "Electric",
        efficiency: "≥ 98%",
        dimensions: "1900 x 1600 x 2500 mm",
        weight: "1600 kg"
      }
    ],
    faq: []
  },
  // 27. Biomass/Oil/Gas Steam Generator
  {
    id: "biomass-oil-gas-steam-generator",
    category: "steam",
    name: {
      en: "Multi-Fuel (Biomass/Oil/Gas) Steam Generator",
      zh: "生物质燃油汽蒸汽发生器",
      es: "Generador de Vapor de Biomasa/Aceite/Gas",
      fr: "Générateur de Vapeur Biomasse/Fioul/Gaz",
      de: "Biomasse-/Öl-/Gas-Dampferzeuger",
      ru: "Парогенератор на биомассе/жидком топливе/газе",
      ar: "مولد بخار الكتلة الحيوية/الزيت/الغاز"
    },
    description: {
      en: "Versatile multi-fuel compatibility for flexible operation.",
      zh: "多燃料兼容，操作灵活。",
      es: "Versátil compatibilidad multicombustible para una operación flexible.",
      fr: "Compatibilité multi-combustibles polyvalente pour un fonctionnement flexible.",
      de: "Vielseitige Mehrstoffkompatibilität für flexiblen Betrieb.",
      ru: "Универсальная совместимость с несколькими видами топлива для гибкой работы.",
      ar: "ت兼容 متعدد الوقود متعدد الاستخدامات للتشغيل المرن."
    },
    fullDescription: {
      en: "This innovative Multi-Fuel Steam Generator is designed for maximum operational flexibility. It can be equipped with burn chambers layout that supports both biomass pellets and oil/gas burners. This allows users to switch fuels based on market availability and cost, ensuring uninterrupted production and optimal economic efficiency.",
      zh: "这款创新的多燃料蒸汽发生器专为最大的操作灵活性而设计。它可配置支持生物质颗粒和燃油/燃气燃烧器的燃烧室布局。这允许用户根据市场供应和成本切换燃料，确保不间断生产和最佳经济效益。"
    },
    image: "/images/products/biomass-oil-gas-steam-generator-v2.jpg",
    icon: "Factory",
    features: [
      { en: "Multi-Fuel Capability", zh: "多燃料能力" },
      { en: "High Flexibility", zh: "高灵活性" },
      { en: "Economic Operation", zh: "经济运行" },
      { en: "Continuous Production", zh: "连续生产" }
    ],
    specs: [
      {
        model: "MFSG-0.5",
        capacity: "500 kg/h",
        thermalPower: "350 kW",
        pressure: "0.7 MPa",
        fuel: "Biomass / Diesel / Gas",
        fuelConsumption: "Biomass: 90kg/h / Gas: 38Nm³/h",
        efficiency: "≥ 92%",
        steamOutlet: "DN32",
        safetyValve: "DN32",
        feedWaterInlet: "DN25",
        blowdown: "DN25",
        chimneyDiameter: "200mm",
        dimensions: "2800 x 1500 x 2000 mm",
        weight: "2200 kg"
      },
      {
        model: "MFSG-1.0",
        capacity: "1000 kg/h",
        thermalPower: "700 kW",
        pressure: "1.0 MPa",
        fuel: "Biomass / Diesel / Gas",
        fuelConsumption: "Biomass: 180kg/h / Gas: 75Nm³/h",
        efficiency: "≥ 92%",
        steamOutlet: "DN50",
        safetyValve: "DN40",
        feedWaterInlet: "DN32",
        blowdown: "DN40",
        chimneyDiameter: "300mm",
        dimensions: "3200 x 1800 x 2300 mm",
        weight: "3500 kg"
      },
      {
        model: "MFSG-2.0",
        capacity: "2000 kg/h",
        thermalPower: "1400 kW",
        pressure: "1.0 / 1.25 MPa",
        fuel: "Biomass / Diesel / Gas",
        fuelConsumption: "Biomass: 360kg/h / Gas: 150Nm³/h",
        efficiency: "≥ 92%",
        steamOutlet: "DN65",
        safetyValve: "DN50",
        feedWaterInlet: "DN32",
        blowdown: "DN40",
        chimneyDiameter: "400mm",
        dimensions: "4000 x 2200 x 2800 mm",
        weight: "5800 kg"
      },
      {
        model: "MFSG-4.0",
        capacity: "4000 kg/h",
        thermalPower: "2800 kW",
        pressure: "1.25 MPa",
        fuel: "Biomass / Diesel / Gas",
        fuelConsumption: "Biomass: 720kg/h / Gas: 300Nm³/h",
        efficiency: "≥ 92%",
        steamOutlet: "DN100",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN40",
        blowdown: "DN50",
        chimneyDiameter: "500mm",
        dimensions: "4800 x 2400 x 3000 mm",
        weight: "10500 kg"
      },
      {
        model: "MFSG-6.0",
        capacity: "6000 kg/h",
        thermalPower: "4200 kW",
        pressure: "1.25 MPa",
        fuel: "Biomass / Diesel / Gas",
        fuelConsumption: "Biomass: 1080kg/h / Gas: 450Nm³/h",
        efficiency: "≥ 92%",
        steamOutlet: "DN125",
        safetyValve: "DN65 x 2",
        feedWaterInlet: "DN50",
        blowdown: "DN50",
        chimneyDiameter: "600mm",
        dimensions: "5600 x 2600 x 3300 mm",
        weight: "15500 kg"
      }
    ],
    faq: []
  },
  // 28. Dual Fuel Steam Generator
  {
    id: "dual-fuel-steam-generator-custom",
    category: "steam",
    name: {
      en: "Oil/Gas Dual Fuel Steam Generator",
      zh: "燃油气生物质两用蒸汽发生器",
      es: "Generador de Vapor de Combustible Dual",
      fr: "Générateur de Vapeur Bi-combustible",
      de: "Zweistoff-Dampferzeuger",
      ru: "Двухтопливный парогенератор",
      ar: "مولد بخار مزدوج الوقود"
    },
    description: {
      en: "Switchable between oil, gas and biomass to ensure continuous production.",
      zh: "可在燃油、燃气和生物质之间切换，确保连续生产。",
      es: "Conmutable entre aceite, gas y biomasa.",
      fr: "Commutable entre fioul, gaz et biomasse.",
      de: "Umschaltbar zwischen Öl, Gas und Biomasse.",
      ru: "Переключаемый между жидким топливом, газом и биомассой.",
      ar: "قابل للتبديل بين الزيت والغاز والكتلة الحيوية."
    },
    fullDescription: {
      en: "The Dual Fuel Steam Generator is equipped with a specialized dual-fuel burner that can seamlessly switch between natural gas and light oil (diesel). This dual redundancy ensures that your steam supply is never interrupted by gas shortages or supply line issues. It combines the clean efficiency of gas with the reliability of stored oil backup.",
      zh: "燃油气两用蒸汽发生器配备专用的双燃料燃烧器，可在天然气和轻油（柴油）之间无缝切换。这种双重冗余确保您的蒸汽供应永远不会因天然气短缺或供应管线问题而中断。它结合了燃气的清洁效率和储存燃油备份的可靠性。"
    },
    image: "/images/products/dual-fuel-steam-generator.jpg",
    icon: "Factory",
    features: [
      { en: "Dual Fuel (Gas/Oil)", zh: "双燃料 (气/油)" },
      { en: "High Reliability", zh: "高可靠性" },
      { en: "Backup Energy Source", zh: "备用能源" },
      { en: "Seamless Switching", zh: "无缝切换" }
    ],
    specs: [
      {
        model: "WNS-1T-Dual",
        capacity: "1000 kg/h",
        thermalPower: "0.7 MW",
        pressure: "1.0 MPa",
        steamTemp: "184 °C",
        waterCapacity: "2.1 m³",
        fuel: "Natural Gas / Diesel",
        fuelConsumption: "Diesel: 65kg/h / Gas: 75Nm³/h",
        efficiency: "≥ 96%",
        steamOutlet: "DN50",
        safetyValve: "DN40 x 2",
        feedWaterInlet: "DN25",
        blowdown: "DN40",
        chimneyDiameter: "300mm",
        weight: "4500 kg",
        dimensions: "3200 x 1800 x 2100 mm"
      },
      {
        model: "WNS-2T-Dual",
        capacity: "2000 kg/h",
        thermalPower: "1.4 MW",
        pressure: "1.25 MPa",
        steamTemp: "194 °C",
        waterCapacity: "3.8 m³",
        fuel: "Natural Gas / Diesel",
        fuelConsumption: "Diesel: 130kg/h / Gas: 150Nm³/h",
        efficiency: "≥ 96%",
        steamOutlet: "DN65",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN32",
        blowdown: "DN40",
        chimneyDiameter: "400mm",
        weight: "6800 kg",
        dimensions: "3800 x 2000 x 2400 mm"
      },
      {
        model: "WNS-4T-Dual",
        capacity: "4000 kg/h",
        thermalPower: "2.8 MW",
        pressure: "1.25 / 1.6 MPa",
        steamTemp: "204 °C",
        waterCapacity: "6.2 m³",
        fuel: "Natural Gas / Diesel",
        fuelConsumption: "Diesel: 260kg/h / Gas: 300Nm³/h",
        efficiency: "≥ 96%",
        steamOutlet: "DN100",
        safetyValve: "DN50 x 2",
        feedWaterInlet: "DN40",
        blowdown: "DN50",
        chimneyDiameter: "500mm",
        weight: "10500 kg",
        dimensions: "4500 x 2300 x 2800 mm"
      }
    ],
    faq: []
  },
  // 29. Oil/Gas Hot Air Stove
  {
    id: "oil-gas-hot-air-stove",
    category: "hot_air",
    name: {
      en: "Oil/Gas Fired Hot Air Stove",
      zh: "燃油/燃气热风炉 (RL/W型)",
      es: "Estufa de Aire Caliente a Gas/Aceite",
      fr: "Poêle à Air Chaud Fioul/Gaz",
      de: "Öl-/Gas-Warmluftofen",
      ru: "Теплогенератор на жидком топливе/газе",
      ar: "موقد الهواء الساخن بالزيت/الغاز"
    },
    description: {
      en: "Indirect heating hot air stove for clean hot air supply.",
      zh: "间接加热热风炉，提供洁净热风。",
      es: "Estufa de aire caliente de calentamiento indirecto para suministro de aire caliente limpio.",
      fr: "Poêle à air chaud à chauffage indirect pour une alimentation en air chaud propre.",
      de: "Indirekt beheizter Warmluftofen für saubere Warmluftversorgung.",
      ru: "Теплогенератор косвенного нагрева для подачи чистого горячего воздуха.",
      ar: "موقد هواء ساخن بتسخين غير مباشر لتوفير هواء ساخن نظيف."
    },
    fullDescription: {
      en: "The RL/W series oil/gas fired hot air stove adopts indirect heating technology. The fuel (light oil or gas) burns in the combustion chamber to generate high-temperature flue gas. This gas enters a heat exchanger where it exchanges heat with the fresh air blown in by the blower. The heated clean air is then supplied to the drying equipment, while the flue gas is discharged through the chimney. This ensures the output air is free from combustion byproducts, making it ideal for food, pharmaceutical, and chemical drying applications requiring high air quality.",
      zh: "RL/W系列燃油/燃气热风炉采用间接加热技术。燃料（轻油或天然气）在燃烧室内燃烧产生高温烟气，烟气进入热交换器与鼓风机吹入的新鲜空气进行热交换。被加热的洁净空气随后被输送到干燥设备，而烟气通过烟囱排出。这确保了输出的热风不含燃烧副产物，非常适合对空气质量要求较高的食品、制药和化工干燥应用。"
    },
    image: "/images/products/oil-gas-hot-air-stove-v2.jpg",
    icon: "Wind",
    features: [
      { en: "Clean Hot Air", zh: "洁净热风" },
      { en: "Indirect Heating", zh: "间接加热" },
      { en: "High Efficiency", zh: "高热效率" },
      { en: "Auto Temp Control", zh: "自动温控" },
      { en: "Easy Operation", zh: "操作简便" }
    ],
    specs: [
      {
        model: "RL/W-30",
        outputHeat: "300,000 kcal/h",
        thermalPower: "350 kW",
        airVolume: "4500-6500 m³/h",
        hotAirTemp: "60-250 °C",
        motorPower: "5.5 kW",
        fuelConsumption: "Diesel: 30kg/h / Gas: 35Nm³/h",
        dimensions: "1800 x 1000 x 2000 mm",
        weight: "1800 kg",
        efficiency: "≥ 85%",
        fuel: "Oil / Gas"
      },
      {
        model: "RL/W-60",
        outputHeat: "600,000 kcal/h",
        thermalPower: "700 kW",
        airVolume: "8000-12000 m³/h",
        hotAirTemp: "60-250 °C",
        motorPower: "11 kW",
        fuelConsumption: "Diesel: 60kg/h / Gas: 70Nm³/h",
        dimensions: "2200 x 1400 x 2400 mm",
        weight: "2800 kg",
        efficiency: "≥ 85%",
        fuel: "Oil / Gas"
      },
      {
        model: "RL/W-120",
        outputHeat: "1,200,000 kcal/h",
        thermalPower: "1400 kW",
        airVolume: "16000-24000 m³/h",
        hotAirTemp: "60-250 °C",
        motorPower: "22 kW",
        fuelConsumption: "Diesel: 120kg/h / Gas: 140Nm³/h",
        dimensions: "3000 x 1800 x 2800 mm",
        weight: "4500 kg",
        efficiency: "≥ 85%",
        fuel: "Oil / Gas"
      }
    ]
  }
];
