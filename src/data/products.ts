export interface ProductSpec {
  model: string;
  capacity: string;
  pressure: string;
  efficiency: string;
  fuel: string;
}

export interface LocalizedString {
  en: string;
  zh: string;
}

export interface Product {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  fullDescription: LocalizedString;
  image: string;
  icon: string;
  features: LocalizedString[];
  specs: ProductSpec[];
}

export const PRODUCT_CATEGORIES: Product[] = [
  {
    id: "wns-oil-gas-boiler",
    name: {
      en: "WNS Series Oil/Gas Fired Steam Boiler",
      zh: "WNS 系列燃油/燃气卧式蒸汽锅炉"
    },
    description: {
      en: "Horizontal internal combustion three-pass wet-back boiler. High efficiency and eco-friendly.",
      zh: "卧式内燃三回程湿背式锅炉。高效节能，绿色环保，国家环保部门推荐产品。"
    },
    fullDescription: {
      en: "The WNS series is a package boiler with a horizontal internal combustion three-pass wet-back structure. It utilizes advanced corrugated furnace and threaded smoke tube technology to enhance heat transfer. Equipped with a high-performance burner and fully automated PLC control, it ensures safe, reliable, and efficient operation (>98% thermal efficiency). Ideal for textile, food, chemical, and heating industries.",
      zh: "WNS系列燃油燃气锅炉采用卧式内燃三回程湿背式结构。应用先进的波纹炉胆和螺纹烟管技术，强化传热效果。配置高性能燃烧器和全自动PLC控制系统，确保运行安全、可靠、高效（热效率>98%）。广泛应用于纺织、食品、化工、供暖等行业。"
    },
    image: "/images/products/wns-boiler.png",
    icon: "Flame",
    features: [
      { en: "Thermal Efficiency ≥ 98% with Condenser", zh: "配置冷凝器，热效率 ≥ 98%" },
      { en: "Corrugated Furnace reduces thermal stress", zh: "波纹炉胆设计，有效减缓热应力" },
      { en: "Three-pass wet-back structure", zh: "三回程湿背结构，安全可靠" },
      { en: "Low NOx Emission (<30mg/m³)", zh: "低氮排放 (<30mg/m³)，符合环保标准" },
      { en: "Fully Automated PLC Control", zh: "全自动 PLC 智能控制系统" }
    ],
    specs: [
      { model: "WNS1-1.25-Y/Q", capacity: "1 t/h", pressure: "1.25 MPa", efficiency: "98%", fuel: "Gas/Oil" },
      { model: "WNS2-1.25-Y/Q", capacity: "2 t/h", pressure: "1.25 MPa", efficiency: "98%", fuel: "Gas/Oil" },
      { model: "WNS4-1.25-Y/Q", capacity: "4 t/h", pressure: "1.25 MPa", efficiency: "98%", fuel: "Gas/Oil" },
      { model: "WNS6-1.25-Y/Q", capacity: "6 t/h", pressure: "1.25 MPa", efficiency: "98%", fuel: "Gas/Oil" },
      { model: "WNS10-1.25-Y/Q", capacity: "10 t/h", pressure: "1.25 MPa", efficiency: "98%", fuel: "Gas/Oil" },
      { model: "WNS15-1.25-Y/Q", capacity: "15 t/h", pressure: "1.25 MPa", efficiency: "98%", fuel: "Gas/Oil" },
      { model: "WNS20-1.25-Y/Q", capacity: "20 t/h", pressure: "1.25 MPa", efficiency: "98%", fuel: "Gas/Oil" }
    ]
  },
  {
    id: "szl-biomass-boiler",
    name: {
      en: "SZL Series Biomass/Coal Chain Grate Boiler",
      zh: "SZL 系列生物质/燃煤组装水管锅炉"
    },
    description: {
      en: "Double drum longitudinal chain grate water tube boiler. Efficient combustion for biomass and coal.",
      zh: "双锅筒纵置式链条炉排水管锅炉。燃烧效率高，适用于生物质颗粒及煤炭。"
    },
    fullDescription: {
      en: "SZL series shop-assembled water tube boiler adopts a double drum longitudinal arrangement. The chain grate combustion system is designed for broad fuel adaptability (biomass pellets, wood chips, coal). Featuring a cyclone burnout chamber and membrane water wall structure, it ensures high thermal efficiency and low dust emission. Easy layout and high automation make it a preferred choice for factories.",
      zh: "SZL系列组装水管锅炉采用双锅筒纵置式布置。链条炉排燃烧系统设计具有广泛的燃料适应性（生物质颗粒、木屑、烟煤）。设有旋风燃尽室和膜式水冷壁结构，确保热效率高、粉尘排放低。布置方便，自动化程度高，是工厂企业的优选产品。"
    },
    image: "/images/products/szl-boiler.png",
    icon: "Leaf",
    features: [
      { en: "Membrane Water Wall Structure", zh: "膜式水冷壁结构，密封性好" },
      { en: "Cyclone Burnout Chamber", zh: "旋风燃尽室，降低初始排尘浓度" },
      { en: "Broad Fuel Adaptability", zh: "燃料适应性广（生物质/煤）" },
      { en: "High Automation Level", zh: "自动化程度高，运行稳定" },
      { en: "Double Drum Safety Design", zh: "双锅筒设计，安全系数高" }
    ],
    specs: [
      { model: "SZL4-1.25-T", capacity: "4 t/h", pressure: "1.25 MPa", efficiency: "88%", fuel: "Biomass/Coal" },
      { model: "SZL6-1.25-T", capacity: "6 t/h", pressure: "1.25 MPa", efficiency: "88%", fuel: "Biomass/Coal" },
      { model: "SZL10-1.25-T", capacity: "10 t/h", pressure: "1.25 MPa", efficiency: "88%", fuel: "Biomass/Coal" },
      { model: "SZL15-1.25-T", capacity: "15 t/h", pressure: "1.25 MPa", efficiency: "88%", fuel: "Biomass/Coal" },
      { model: "SZL20-1.25-T", capacity: "20 t/h", pressure: "1.25 MPa", efficiency: "88%", fuel: "Biomass/Coal" }
    ]
  },
  {
    id: "dzl-coal-boiler",
    name: {
      en: "DZL Series Quick-load Coal/Biomass Boiler",
      zh: "DZL 系列快装链条炉排燃煤/生物质锅炉"
    },
    description: {
      en: "Single drum vertical chain grate boiler. Compact, quick installation, and stable output.",
      zh: "单锅筒纵置式链条炉排锅炉。结构紧凑，安装快捷，出力稳定。"
    },
    fullDescription: {
      en: "DZL series is a single-drum vertical chain grate package boiler. It features a compact structure, small footprint, and quick installation. The boiler uses threaded smoke tubes and wing-shaped flues to enhance heat transfer. It operates stably with high overload capacity, making it an economical choice for steam and heating needs.",
      zh: "DZL系列是单锅筒纵置式链条炉排快装锅炉。具有结构紧凑、占地面积小、安装快捷等特点。锅炉采用螺纹烟管和翼型烟道强化传热。运行稳定，超负荷能力强，是蒸汽和供暖需求的经济之选。"
    },
    image: "/images/products/dzl-boiler.png",
    icon: "Factory",
    features: [
      { en: "Quick Installation (Package)", zh: "整体快装出厂，安装周期短" },
      { en: "Wing-shaped Flue Design", zh: "翼型烟道设计，降低烟温" },
      { en: "Threaded Smoke Tubes", zh: "螺纹烟管，高效传热" },
      { en: "Stable Water Circulation", zh: "水循环稳定，防止爆管" },
      { en: "Economical & Durable", zh: "经济耐用，维护简单" }
    ],
    specs: [
      { model: "DZL2-1.0-AII", capacity: "2 t/h", pressure: "1.0 MPa", efficiency: "82%", fuel: "Coal/Biomass" },
      { model: "DZL4-1.25-AII", capacity: "4 t/h", pressure: "1.25 MPa", efficiency: "82%", fuel: "Coal/Biomass" },
      { model: "DZL6-1.25-AII", capacity: "6 t/h", pressure: "1.25 MPa", efficiency: "82%", fuel: "Coal/Biomass" },
      { model: "DZL10-1.25-AII", capacity: "10 t/h", pressure: "1.25 MPa", efficiency: "83%", fuel: "Coal/Biomass" }
    ]
  },
  {
    id: "lss-gas-boiler",
    name: {
      en: "LSS Series Once-through Oil/Gas Boiler",
      zh: "LSS 系列燃油/燃气贯流锅炉"
    },
    description: {
      en: "Vertical tubular once-through boiler. rapid steam generation in 3-5 minutes.",
      zh: "立式水管贯流锅炉。3-5分钟快速出汽，无需年检（部分型号）。"
    },
    fullDescription: {
      en: "LSS series is a vertical once-through steam boiler. Without a large water drum, it produces steam within 3-5 minutes of starting. It requires minimal floor space and offers high safety due to low water volume. The fully automatic control and high efficiency make it perfect for urgent steam requirements in food processing, concrete curing, and washing industries.",
      zh: "LSS系列是立式贯流蒸汽锅炉。无大水包设计，启动后3-5分钟即可产汽。占地面积小，水容量低，安全性高。全自动控制和高效率使其成为食品加工、混凝土养护和洗涤行业紧急蒸汽需求的理想选择。"
    },
    image: "/images/products/lss-boiler.png",
    icon: "Zap",
    features: [
      { en: "Rapid Steam (3-5 min)", zh: "快速出汽 (3-5分钟)" },
      { en: "Compact Vertical Design", zh: "立式结构，占地小" },
      { en: "Low Water Volume (High Safety)", zh: "水容量低，安全性高" },
      { en: "No Annual Inspection Required", zh: "部分型号无需年检" },
      { en: "Fully Automatic Control", zh: "全自动智能控制" }
    ],
    specs: [
      { model: "LSS0.5-0.7-Y/Q", capacity: "0.5 t/h", pressure: "0.7 MPa", efficiency: "96%", fuel: "Gas/Oil" },
      { model: "LSS1.0-0.7-Y/Q", capacity: "1.0 t/h", pressure: "0.7 MPa", efficiency: "96%", fuel: "Gas/Oil" },
      { model: "LSS2.0-1.0-Y/Q", capacity: "2.0 t/h", pressure: "1.0 MPa", efficiency: "96%", fuel: "Gas/Oil" }
    ]
  },
  {
    id: "yyw-thermal-oil",
    name: {
      en: "YY(Q)W Series Organic Heat Carrier Furnace",
      zh: "YY(Q)W 系列燃油/燃气导热油炉"
    },
    description: {
      en: "Horizontal thermal oil heater. High temp (320°C) at low pressure. Precision control.",
      zh: "卧式导热油炉。低压高温（320°C），控温精准，热效率高。"
    },
    fullDescription: {
      en: "YY(Q)W series thermal oil heater adopts a three-pass coil structure. It provides stable high-temperature heat (up to 320°C) at very low operating pressure (<1.0MPa), avoiding the safety risks of high-pressure steam. Widely used in chemical, textile dyeing, plastic, and rubber industries requiring precise temperature control.",
      zh: "YY(Q)W系列导热油炉采用三回程盘管结构。能在极低的工作压力下（<1.0MPa）提供稳定的高温热能（最高320°C），避免了高压蒸汽的安全隐患。广泛应用于化工、纺织印染、塑料、橡胶等需要精准控温的行业。"
    },
    image: "/images/products/yyw-thermal-oil.png",
    icon: "Thermometer",
    features: [
      { en: "High Temp Low Pressure", zh: "高温低压 (320°C @ <1.0MPa)" },
      { en: "Three-pass Coil Design", zh: "三回程圆盘管设计" },
      { en: "Precise Temp Control (±1°C)", zh: "控温精度高 (±1°C)" },
      { en: "Safety Interlocks", zh: "完善的安全联锁保护" },
      { en: "Long Service Life", zh: "油膜温度低，使用寿命长" }
    ],
    specs: [
      { model: "YY(Q)W-1200Y(Q)", capacity: "1200 kW", pressure: "0.8 MPa", efficiency: "95%", fuel: "Gas/Oil" },
      { model: "YY(Q)W-2400Y(Q)", capacity: "2400 kW", pressure: "0.8 MPa", efficiency: "95%", fuel: "Gas/Oil" },
      { model: "YY(Q)W-4600Y(Q)", capacity: "4600 kW", pressure: "0.8 MPa", efficiency: "95%", fuel: "Gas/Oil" }
    ]
  },
  {
    id: "lsh-vertical-biomass",
    name: {
      en: "LSH Series Vertical Biomass Steam Boiler",
      zh: "LSH 系列立式生物质蒸汽锅炉"
    },
    description: {
      en: "Vertical water tube boiler for biomass pellets. Compact, eco-friendly, and cost-effective.",
      zh: "立式水管生物质锅炉。结构紧凑，燃烧充分，节能环保。"
    },
    fullDescription: {
      en: "LSH series vertical biomass boiler is designed for small steam requirements. It uses biomass pellets/wood chips as fuel, reducing operating costs compared to oil/gas/electric boilers. The unique furnace design ensures complete combustion and low emissions. It is an ideal replacement for small coal-fired boilers.",
      zh: "LSH系列立式生物质锅炉专为小型蒸汽需求设计。使用生物质颗粒/木屑作为燃料，运行成本远低于燃油、燃气或电锅炉。独特的炉膛设计确保燃烧充分、排放低。是替代小型燃煤锅炉的理想选择。"
    },
    image: "/images/products/szl-boiler.png",
    icon: "Leaf",
    features: [
      { en: "Low Operating Cost", zh: "运行成本低（生物质燃料）" },
      { en: "Compact Vertical Design", zh: "立式结构，节省空间" },
      { en: "Fast Steam Generation", zh: "升温升压快" },
      { en: "Easy Operation", zh: "操作维护简单" },
      { en: "Eco-friendly", zh: "符合环保要求" }
    ],
    specs: [
      { model: "LSH0.5-0.7-T", capacity: "0.5 t/h", pressure: "0.7 MPa", efficiency: "86%", fuel: "Biomass" },
      { model: "LSH1.0-0.7-T", capacity: "1.0 t/h", pressure: "0.7 MPa", efficiency: "86%", fuel: "Biomass" }
    ]
  }
];
