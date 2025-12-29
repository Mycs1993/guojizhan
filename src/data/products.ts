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
    id: "wns-low-nox-hot-water",
    name: {
      en: "WNS Low-NOx Condensing Gas Hot Water Boiler",
      zh: "WNS 低氮冷凝燃气热水锅炉",
    },
    description: {
      en: "Low-NOx condensing hot water boiler with three-pass wet-back structure and built‑in condenser. Efficiency up to �?9%, designed for ultra‑low NOx emission (�?0mg/Nm³).",
      zh: "采用三回程全湿背结构并内置冷凝器的低氮燃气热水锅炉，热效率可�?�?9%，满�?NOx �?0mg 超低氮排放要求�?,
    },
    fullDescription: {
      en: "The WNS low-NOx condensing hot water boiler adopts a mature three-pass full wet-back structure with a large front smoke box. Equipped with a low-NOx burner, large furnace chamber and high-efficiency threaded smoke tubes, combined with FGR flue gas recirculation or fully premixed surface combustion technology, it effectively reduces flame temperature in the high-temperature zone and controls NOx formation, meeting ultra-low emission requirements (NOx �?30 mg/Nm³). The large-diameter corrugated furnace provides sufficient combustion space and absorbs thermal expansion, with large water volume and strong load adaptability. The rear section is fitted with a built-in condenser made of ND steel spiral fin tubes to increase heating surface, fully recover exhaust heat, lower flue gas temperature, and improve overall efficiency. The boiler body uses high-quality insulation and cold-formed steel casing with a rigid frame and removable decorative panels, resulting in a modern appearance and minimal heat loss.",
      zh: "WNS 低氮冷凝热水锅炉采用成熟的三回程全湿背式结构，大开启前烟箱设计，配置低氮燃烧机配合大炉膛及高效传热螺纹烟管，并可采用烟气外循环（FGR）或全预混表面燃烧技术，有效降低炉膛火焰高温区温度，控制 NOx 浓度上升，经测试可满�?NOx �?0mg 的超低氮排放标准。锅炉燃烧室由大直径全波纹炉胆组成，燃烧空间大、燃料燃烧充分，辐射受热面积大；锅壳直径大、水容量大，对负荷变化适应能力强、出力稳定。尾部设置内置冷凝器，采用耐低温腐蚀 ND 钢螺旋翅片管，在有限空间内增加传热面积，充分吸收尾部烟气热量，降低排烟温度、提高锅炉热效率，且内置式结构不占用锅炉房面积。本体外表面采用硅酸铝保温并配合高强度冷拉板骨架及可拆卸装饰盖，整体造型美观新颖、散热损失小�?,
    },
    image: "/images/products/wns-boiler-real.jpg",
    icon: "Leaf",
    features: [
      {
        en: "Ultra-low NOx emission (�?0 mg/Nm³) with FGR or fully premixed combustion",
        zh: "配合 FGR 或全预混燃烧技术，NOx 排放 �?0mg/Nm³，满足超低氮标准",
      },
      {
        en: "Three-pass full wet-back design with large corrugated furnace",
        zh: "三回程全湿背结构，大直径波纹炉胆，燃烧空间大、燃烧充�?,
      },
      {
        en: "Built-in ND steel finned-tube condenser, efficiency up to �?9%",
        zh: "尾部内置 ND 钢螺旋翅片管冷凝器，综合热效率可�?�?9%",
      },
      {
        en: "Large water volume and strong load adaptability, stable output",
        zh: "锅壳直径大、水容量大，对负荷变化适应能力强、出力稳�?,
      },
      {
        en: "High-quality insulation and casing with low heat loss and modern appearance",
        zh: "硅酸铝保温配合冷拉板骨架与可拆装面板，散热损失小、整体造型美观",
      },
    ],
    specs: [
      {
        model: "WNS-0.35MW-LN",
        capacity: "0.35 MW",
        pressure: "�?,
        efficiency: "�?9%",
        fuel: "Natural gas / LNG",
      },
      {
        model: "WNS-0.7MW-LN",
        capacity: "0.7 MW",
        pressure: "�?,
        efficiency: "�?9%",
        fuel: "Natural gas / LNG",
      },
      {
        model: "WNS-1.4MW-LN",
        capacity: "1.4 MW",
        pressure: "�?,
        efficiency: "�?9%",
        fuel: "Natural gas / LNG",
      },
      {
        model: "WNS-2.8MW-LN",
        capacity: "2.8 MW",
        pressure: "�?,
        efficiency: "�?9%",
        fuel: "Natural gas / LNG",
      },
      {
        model: "WNS-4.2MW-LN",
        capacity: "4.2 MW",
        pressure: "�?,
        efficiency: "�?9%",
        fuel: "Natural gas / LNG",
      },
      {
        model: "WNS-7.0MW-LN",
        capacity: "7.0 MW",
        pressure: "�?,
        efficiency: "�?9%",
        fuel: "Natural gas / LNG",
      },
      {
        model: "WNS-10.5MW-LN",
        capacity: "10.5 MW",
        pressure: "�?,
        efficiency: "�?9%",
        fuel: "Natural gas / LNG",
      },
      {
        model: "WNS-14MW-LN",
        capacity: "14 MW",
        pressure: "�?,
        efficiency: "�?9%",
        fuel: "Natural gas / LNG",
      },
    ],
  },
  {
    id: "wns-hot-water-boiler",
    name: {
      en: "WNS Series Oil/Gas Fired Hot Water Boiler",
      zh: "WNS 卧式燃油/燃气承压热水锅炉"
    },
    description: {
      en: "Horizontal internal-combustion three-pass pressurized hot water boiler for gas and oil with high efficiency and wide application range.",
      zh: "全自动燃�?燃气卧式内燃三回程承压热水锅炉，热效率高，适用于采暖及生活热水等多种应用场景�?
    },
    fullDescription: {
      en: "The WNS series pressurized hot water boiler is a fully-automatic horizontal internal-combustion three-pass fire tube boiler. It adopts a corrugated furnace and wet-back structure to absorb thermal expansion and enhance heat transfer. The large water volume and sufficient heating surface ensure stable output and high efficiency. It is widely used for heating and domestic hot water in hotels, hospitals, office buildings, resorts, residential communities, and industrial processes in cold and plateau regions.",
      zh: "WNS 卧式燃油/燃气承压热水锅炉为全自动卧式内燃三回程火管锅炉，采用下置波纹炉胆和湿背结构，本体所有管子与锅筒及管板均为焊接连接。前烟箱为快开结构，后部设有集防爆与检查于一体的防爆门。锅壳直径大、水容量大，受热面积充足，排烟温度低、热损失小，保证出力足、效率高，对负荷变化适应能力强，广泛应用于高原及严寒地区的企业、宾馆、医院、写字楼、游泳馆、汤泉、住宅、酒店、洗浴中心、学校、商场等采暖及生活热水系统�?
    },
    image: "/images/products/wns-boiler.png",
    icon: "Flame",
    features: [
      {
        en: "Horizontal three-pass wet-back pressurized hot water boiler",
        zh: "卧式三回程湿背结构承压热水锅�?
      },
      {
        en: "Corrugated furnace and threaded tubes to reduce thermal stress and enhance heat transfer",
        zh: "波纹炉胆 + 螺纹烟管设计，强化传热并吸收热胀冷缩"
      },
      {
        en: "Stainless steel outer casing with improved corrosion resistance",
        zh: "不锈钢外包装，抗腐蚀性能更佳"
      },
      {
        en: "Multiple protections: leakage, low water level, over‑pressure and safety interlocks",
        zh: "漏电保护、缺水保护、防爆门等多重安全联锁保�?
      },
      {
        en: "Large water volume and strong load adaptability, suitable for district heating",
        zh: "水容量大、适应负荷变化能力强，适合集中供暖系统"
      }
    ],
    specs: [
      {
        model: "WNS0.7-0.7/95/70-Y/Q",
        capacity: "0.7 MW",
        pressure: "0.7 MPa",
        efficiency: "�?0.6%",
        fuel: "Gas/Oil"
      },
      {
        model: "WNS1.4-0.7/95/70-Y/Q",
        capacity: "1.4 MW",
        pressure: "0.7 MPa",
        efficiency: "�?0.4%",
        fuel: "Gas/Oil"
      },
      {
        model: "WNS2.8-1.0/95/70-Y/Q",
        capacity: "2.8 MW",
        pressure: "1.0 MPa",
        efficiency: "�?0.6%",
        fuel: "Gas/Oil"
      },
      {
        model: "WNS4.2-1.0/95/70-Y/Q",
        capacity: "4.2 MW",
        pressure: "1.0 MPa",
        efficiency: "�?0.8%",
        fuel: "Gas/Oil"
      },
      {
        model: "WNS7.0-1.0/95/70-Y/Q",
        capacity: "7.0 MW",
        pressure: "1.0 MPa",
        efficiency: "�?4.2%",
        fuel: "Gas/Oil"
      },
      {
        model: "WNS10.5-1.25/115/70-Y/Q",
        capacity: "10.5 MW",
        pressure: "1.25 MPa",
        efficiency: "�?3.5%",
        fuel: "Gas/Oil"
      },
      {
        model: "WNS14-1.25/115/70-Y/Q",
        capacity: "14 MW",
        pressure: "1.25 MPa",
        efficiency: "�?3.1%",
        fuel: "Gas/Oil"
      }
    ]
  },
  {
    id: "wns-oil-gas-boiler",
    name: {
      en: "WNS Series Oil/Gas Fired Steam Boiler",
      zh: "WNS 系列燃油/燃气卧式蒸汽锅炉"
    },
    description: {
      en: "Horizontal internal combustion three-pass wet-back boiler. High efficiency and eco-friendly.",
      zh: "卧式内燃三回程湿背式锅炉。高效节能，绿色环保，国家环保部门推荐产品�?
    },
    fullDescription: {
      en: "The WNS series is a package boiler with a horizontal internal combustion three-pass wet-back structure. It utilizes advanced corrugated furnace and threaded smoke tube technology to enhance heat transfer. Equipped with a high-performance burner and fully automated PLC control, it ensures safe, reliable, and efficient operation (>98% thermal efficiency). Ideal for textile, food, chemical, and heating industries.",
      zh: "WNS系列燃油燃气锅炉采用卧式内燃三回程湿背式结构。应用先进的波纹炉胆和螺纹烟管技术，强化传热效果。配置高性能燃烧器和全自动PLC控制系统，确保运行安全、可靠、高效（热效�?98%）。广泛应用于纺织、食品、化工、供暖等行业�?
    },
    image: "/images/products/wns-boiler.png",
    icon: "Flame",
    features: [
      { en: "Thermal Efficiency �?98% with Condenser", zh: "配置冷凝器，热效�?�?98%" },
      { en: "Corrugated Furnace reduces thermal stress", zh: "波纹炉胆设计，有效减缓热应力" },
      { en: "Three-pass wet-back structure", zh: "三回程湿背结构，安全可靠" },
      { en: "Low NOx Emission (<30mg/m³)", zh: "低氮排放 (<30mg/m³)，符合环保标�? },
      { en: "Fully Automated PLC Control", zh: "全自�?PLC 智能控制系统" }
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
      zh: "SZL 系列生物�?燃煤组装水管锅炉"
    },
    description: {
      en: "Double drum longitudinal chain grate water tube boiler. Efficient combustion for biomass and coal.",
      zh: "双锅筒纵置式链条炉排水管锅炉。燃烧效率高，适用于生物质颗粒及煤炭�?
    },
    fullDescription: {
      en: "SZL series shop-assembled water tube boiler adopts a double drum longitudinal arrangement. The chain grate combustion system is designed for broad fuel adaptability (biomass pellets, wood chips, coal). Featuring a cyclone burnout chamber and membrane water wall structure, it ensures high thermal efficiency and low dust emission. Easy layout and high automation make it a preferred choice for factories.",
      zh: "SZL系列组装水管锅炉采用双锅筒纵置式布置。链条炉排燃烧系统设计具有广泛的燃料适应性（生物质颗粒、木屑、烟煤）。设有旋风燃尽室和膜式水冷壁结构，确保热效率高、粉尘排放低。布置方便，自动化程度高，是工厂企业的优选产品�?
    },
    image: "/images/products/szl-boiler.png",
    icon: "Leaf",
    features: [
      { en: "Membrane Water Wall Structure", zh: "膜式水冷壁结构，密封性好" },
      { en: "Cyclone Burnout Chamber", zh: "旋风燃尽室，降低初始排尘浓度" },
      { en: "Broad Fuel Adaptability", zh: "燃料适应性广（生物质/煤）" },
      { en: "High Automation Level", zh: "自动化程度高，运行稳�? },
      { en: "Double Drum Safety Design", zh: "双锅筒设计，安全系数�? }
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
      zh: "DZL 系列快装链条炉排燃煤/生物质锅�?
    },
    description: {
      en: "Single drum vertical chain grate boiler. Compact, quick installation, and stable output.",
      zh: "单锅筒纵置式链条炉排锅炉。结构紧凑，安装快捷，出力稳定�?
    },
    fullDescription: {
      en: "DZL series is a single-drum vertical chain grate package boiler. It features a compact structure, small footprint, and quick installation. The boiler uses threaded smoke tubes and wing-shaped flues to enhance heat transfer. It operates stably with high overload capacity, making it an economical choice for steam and heating needs.",
      zh: "DZL系列是单锅筒纵置式链条炉排快装锅炉。具有结构紧凑、占地面积小、安装快捷等特点。锅炉采用螺纹烟管和翼型烟道强化传热。运行稳定，超负荷能力强，是蒸汽和供暖需求的经济之选�?
    },
    image: "/images/products/dzl-boiler.png",
    icon: "Factory",
    features: [
      { en: "Quick Installation (Package)", zh: "整体快装出厂，安装周期短" },
      { en: "Wing-shaped Flue Design", zh: "翼型烟道设计，降低烟�? },
      { en: "Threaded Smoke Tubes", zh: "螺纹烟管，高效传�? },
      { en: "Stable Water Circulation", zh: "水循环稳定，防止爆管" },
      { en: "Economical & Durable", zh: "经济耐用，维护简�? }
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
      zh: "立式水管贯流锅炉�?-5分钟快速出汽，无需年检（部分型号）�?
    },
    fullDescription: {
      en: "LSS series is a vertical once-through steam boiler. Without a large water drum, it produces steam within 3-5 minutes of starting. It requires minimal floor space and offers high safety due to low water volume. The fully automatic control and high efficiency make it perfect for urgent steam requirements in food processing, concrete curing, and washing industries.",
      zh: "LSS系列是立式贯流蒸汽锅炉。无大水包设计，启动�?-5分钟即可产汽。占地面积小，水容量低，安全性高。全自动控制和高效率使其成为食品加工、混凝土养护和洗涤行业紧急蒸汽需求的理想选择�?
    },
    image: "/images/products/lss-boiler.png",
    icon: "Zap",
    features: [
      { en: "Rapid Steam (3-5 min)", zh: "快速出�?(3-5分钟)" },
      { en: "Compact Vertical Design", zh: "立式结构，占地小" },
      { en: "Low Water Volume (High Safety)", zh: "水容量低，安全性高" },
      { en: "No Annual Inspection Required", zh: "部分型号无需年检" },
      { en: "Fully Automatic Control", zh: "全自动智能控�? }
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
      zh: "卧式导热油炉。低压高温（320°C），控温精准，热效率高�?
    },
    fullDescription: {
      en: "YY(Q)W series thermal oil heater adopts a three-pass coil structure. It provides stable high-temperature heat (up to 320°C) at very low operating pressure (<1.0MPa), avoiding the safety risks of high-pressure steam. Widely used in chemical, textile dyeing, plastic, and rubber industries requiring precise temperature control.",
      zh: "YY(Q)W系列导热油炉采用三回程盘管结构。能在极低的工作压力下（<1.0MPa）提供稳定的高温热能（最�?20°C），避免了高压蒸汽的安全隐患。广泛应用于化工、纺织印染、塑料、橡胶等需要精准控温的行业�?
    },
    image: "/images/products/yyw-thermal-oil.png",
    icon: "Thermometer",
    features: [
      { en: "High Temp Low Pressure", zh: "高温低压 (320°C @ <1.0MPa)" },
      { en: "Three-pass Coil Design", zh: "三回程圆盘管设计" },
      { en: "Precise Temp Control (±1°C)", zh: "控温精度�?(±1°C)" },
      { en: "Safety Interlocks", zh: "完善的安全联锁保�? },
      { en: "Long Service Life", zh: "油膜温度低，使用寿命�? }
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
      zh: "LSH 系列立式生物质蒸汽锅�?
    },
    description: {
      en: "Vertical water tube boiler for biomass pellets. Compact, eco-friendly, and cost-effective.",
      zh: "立式水管生物质锅炉。结构紧凑，燃烧充分，节能环保�?
    },
    fullDescription: {
      en: "LSH series vertical biomass boiler is designed for small steam requirements. It uses biomass pellets/wood chips as fuel, reducing operating costs compared to oil/gas/electric boilers. The unique furnace design ensures complete combustion and low emissions. It is an ideal replacement for small coal-fired boilers.",
      zh: "LSH系列立式生物质锅炉专为小型蒸汽需求设计。使用生物质颗粒/木屑作为燃料，运行成本远低于燃油、燃气或电锅炉。独特的炉膛设计确保燃烧充分、排放低。是替代小型燃煤锅炉的理想选择�?
    },
    image: "/images/products/szl-boiler.png",
    icon: "Leaf",
    features: [
      { en: "Low Operating Cost", zh: "运行成本低（生物质燃料）" },
      { en: "Compact Vertical Design", zh: "立式结构，节省空�? },
      { en: "Fast Steam Generation", zh: "升温升压�? },
      { en: "Easy Operation", zh: "操作维护简�? },
      { en: "Eco-friendly", zh: "符合环保要求" }
    ],
    specs: [
      { model: "LSH0.5-0.7-T", capacity: "0.5 t/h", pressure: "0.7 MPa", efficiency: "86%", fuel: "Biomass" },
      { model: "LSH1.0-0.7-T", capacity: "1.0 t/h", pressure: "0.7 MPa", efficiency: "86%", fuel: "Biomass" }
    ]
  },
  {
    id: "commercial-low-nox-mold-temp",
    name: {
      en: "Commercial Low-NOx Oil/Gas Mold Temperature Controller",
      zh: "商用低氮燃油/气模温机"
    },
    description: {
      en: "New type boiler product with air preheater, reducing flue gas temperature to around 120°C. Thermal efficiency up to 95%+.",
      zh: "新型锅炉产品，利用空气预热器将排烟温度降�?20°C左右、助燃风温度预热�?00°C以上，热效率可高�?5%以上�?
    },
    fullDescription: {
      en: "Oil/gas mold temperature controller is a new type boiler product designed to address the high flue gas temperature issue of small gas thermal oil furnaces. It uses an air preheater to reduce flue gas temperature to around 120°C and preheat combustion air to above 100°C, achieving thermal efficiency of 95%+. Thermal oil replaces steam for heating, with low heat loss, precise temperature control, and high system thermal utilization. It is a safe, efficient, and energy-saving heating equipment.",
      zh: "燃油/气模温机是新型锅炉产品，该产品针对小型燃气导热油炉排烟温度过高的缺点，利用空气预热器将排烟温度降�?20°C左右、助燃风温度预热�?00°C以上，热效率可高�?5%以上。导热油替代蒸汽供热，热损失小，供热温度可精确控制，并且能对介质运行进行高精密控制工作，系统热利用率高，运行维修方便，是一种安全、高效、节能的供热设备�?
    },
    image: "/images/products/commercial-low-nox-mold-temp.jpg",
    icon: "Thermometer",
    features: [
      {
        en: "Quick Installation: Skid-mounted design, complete assembly of furnace body, air preheater, gas burner, PLC control system, circulation pump, expansion tank, filter, oil-gas separator, etc.",
        zh: "安装�?撬装式出厂，将炉本体、空气预热器、燃气燃烧器、PLC控制系统、循环泵、膨胀罐、过滤器、油气分离器等整体组装，现场接气、电、导热油进出口即�?"
      },
      {
        en: "Labor Saving: PLC control, one-button operation, unattended operation, no need for specialized boiler operator",
        zh: "人工�?PLC控制，一键操作，可无人值守，可不需要专门司炉工;"
      },
      {
        en: "Space Saving: Highly integrated, skid-mounted assembly, low heat loss and pipe resistance, saves space",
        zh: "占地�?高度集成，撬装装配，热损和管阻小，节省场�?"
      },
      {
        en: "Dual Coil Furnace Body: Fast flow rate, sufficient output, low resistance",
        zh: "双盘管炉�?流速快、出力足、阻力小;"
      },
      {
        en: "Original Imported Gas Components: High efficiency, excellent quality, few failures, long service life",
        zh: "原装进口燃气组件:效率高、质量优、故障少、寿命长;"
      }
    ],
    specs: [
      { model: "YY(Q)W-60Y(Q)", capacity: "60 kW", pressure: "1.2 MPa", efficiency: "93%", fuel: "Gas/Oil" },
      { model: "YY(Q)W-100Y(Q)", capacity: "100 kW", pressure: "1.2 MPa", efficiency: "93%", fuel: "Gas/Oil" },
      { model: "YY(Q)W-240Y(Q)", capacity: "240 kW", pressure: "1.2 MPa", efficiency: "93%", fuel: "Gas/Oil" },
      { model: "YY(Q)W-350Y(Q)", capacity: "350 kW", pressure: "1.2 MPa", efficiency: "93%", fuel: "Gas/Oil" },
      { model: "YY(Q)W-500Y(Q)", capacity: "500 kW", pressure: "1.2 MPa", efficiency: "93%", fuel: "Gas/Oil" },
      { model: "YY(Q)W-700Y(Q)", capacity: "700 kW", pressure: "1.2 MPa", efficiency: "93%", fuel: "Gas/Oil" }
    ]
  },
  {
    id: "cwdr-electric-hot-water",
    name: {
      en: "CWDR Series Horizontal Electric Hot Water Boiler",
      zh: "CWDR 卧式电加热热水锅�?
    },
    description: {
      en: "Fully automatic electric hot water boiler with PLC control. Novel design, compact structure, efficient energy conversion.",
      zh: "全自动电加热热水锅炉采用PLC控制，设计新颖，结构紧凑，通过全新的电热元件排列组合加热方式，实现了能量的高效转换�?
    },
    fullDescription: {
      en: "CWDR series fully automatic electric hot water boiler adopts PLC (Programmable Logic Controller) control with novel design and compact structure. Through a new arrangement of electric heating elements, it achieves efficient energy conversion and provides high-quality hot water. The boiler body and electrical control cabinet are separated to avoid aging of electrical components due to heat, extending service life. Electric heating tubes are selected from high-quality domestic and imported products with normal service life of about 20,000 hours and thermal efficiency of nearly 99%. Operation is quiet and clean, meeting environmental requirements.",
      zh: "CWDR系列全自动电加热热水锅炉采用PLC(可编程逻辑控制�?控制，设计新颖，结构紧凑，通过全新的电热元件排列组合加热方式，实现了能量的高效转换，提供优质的热水。采用炉体电控制柜分离方式，避免了电器元件受热老化而影响使用寿命。电热管选用国内外优质产品、正常使用寿命约20000小时，热效率�?9%，运行安静、清洁，符合环保的要求，是真正的绿色环保节能型产品，不会向大气排放NOx(氮氧化合�?�?
    },
    image: "/images/products/cwdr-electric-hot-water.jpg",
    icon: "Zap",
    features: [
      {
        en: "Horizontal package electric hot water boiler with electric heating tubes arranged at both ends, advanced and reasonable structure",
        zh: "卧式快装电加热热水锅炉，电热管左右两端布置，结构先进合理。且满水运行，保证电热管所产生的热量能及时传导，使之得到充分的冷却，从而延长其寿命，并提高锅炉的热效率;亦能有效地减少热水带气，提高出口热水的品质�?
      },
      {
        en: "Multiple automatic alarms and interlock protection functions: high/low water level, water shortage, overcurrent, short circuit, phase loss, leakage, etc., safe and reliable operation",
        zh: "具有高低水位、缺水、过流、短路、缺相、漏电等自动报警及多重联锁保护功能，运行安全可靠�?
      },
      {
        en: "High-quality electric heating elements with low surface load, good heat transfer effect, long service life",
        zh: "采用优质电加热元件，表面负荷低，换热效果好，使用寿命长�?
      },
      {
        en: "Electric heating elements automatically add or subtract according to set load parameters, achieving balanced operation",
        zh: "电热元件按设置的负荷参数，依据大小自动加减，实现均衡工作�?
      },
      {
        en: "PLC fully automatic control: automatic pressure regulation, automatic water supply, timed automatic start/stop, manual emergency operation available",
        zh: "PLC全自动控制：可实现自动调压，自动补水，定时自动启停，又可手动应急操作，使用方便可靠�?
      }
    ],
    specs: [
      { model: "CWDR0.21", capacity: "0.21 MW", pressure: "�?, efficiency: "98%", fuel: "Electric" },
      { model: "CWDR0.5", capacity: "0.5 MW", pressure: "�?, efficiency: "98%", fuel: "Electric" },
      { model: "CWDR0.7", capacity: "0.7 MW", pressure: "�?, efficiency: "98%", fuel: "Electric" },
      { model: "CWDR1", capacity: "1 MW", pressure: "�?, efficiency: "98%", fuel: "Electric" },
      { model: "CWDR2.1", capacity: "2.1 MW", pressure: "�?, efficiency: "98%", fuel: "Electric" },
      { model: "CWDR2.8", capacity: "2.8 MW", pressure: "�?, efficiency: "98%", fuel: "Electric" }
    ]
  },
  {
    id: "wdr-electric-steam",
    name: {
      en: "WDR Series Horizontal Electric Steam Boiler",
      zh: "WDR 型卧式电加热蒸汽锅炉"
    },
    description: {
      en: "Horizontal electric steam boiler with PLC control. Efficient energy conversion, provides high-quality saturated steam.",
      zh: "卧式电加热蒸汽锅炉采用PLC控制，通过全新的电热元件排列组合加热方式，实现能量的高效转换，提供优质饱和蒸汽�?
    },
    fullDescription: {
      en: "WDR series horizontal electric steam boiler adopts PLC (Programmable Logic Controller) control. Through a new arrangement of electric heating elements, it achieves efficient energy conversion and provides high-quality saturated steam. The boiler body and electrical control cabinet are separated to avoid aging of electrical components due to heat. Each group of electric heating elements adopts centralized bundle-type flange connection, independently set, with simple structure, high mechanical strength, safety and reliability, convenient replacement, and long service life.",
      zh: "WDR型卧式电加热蒸汽锅炉采用PLC(可编程逻辑控制�?控制，通过全新的电热元件排列组合加热方式，实现能量的高效转换，提供优质饱和蒸汽。采用炉体电控制柜分离方式，避免了电器元件受热老化而影响使用寿命。该锅炉的每组电热元件采用集中束型法兰连接，独立设置，具有结构简单，机械强度高，安全可靠，更换方便，使用寿命长�?
    },
    image: "/images/products/wdr-electric-steam.jpg",
    icon: "Zap",
    features: [
      {
        en: "Horizontal package design with electric heating tubes arranged at front and rear ends, advanced and reasonable structure. Large steam and water space ensures timely heat conduction, full cooling, extended life, and improved thermal efficiency",
        zh: "卧式快装，电热管前后两端布置，结构先进合理。且汽、水空间大，保证电热管所产生的热量能及时传导，使之得到充分的冷却，从而延长其寿命，并提高锅炉的热效率;亦能有效地减少饱和蒸汽的带水，提高蒸汽的品质�?
      },
      {
        en: "Multiple automatic alarms and interlock protection: overpressure, high/low water level, water shortage, overcurrent, short circuit, phase loss, leakage, etc., safe and reliable operation",
        zh: "具有超压、高低水位、缺水、过流、短路、缺相、漏电等自动报警及多重联锁保护功能，运行安全可靠�?
      },
      {
        en: "High-quality electric heating elements with low surface load, good heat transfer effect, long service life",
        zh: "采用优质电加热元件，表面负荷低，换热效果好，使用寿命长�?
      },
      {
        en: "Electric heating elements automatically add or subtract according to set load parameters, achieving balanced operation",
        zh: "电热元件按设置的负荷参数，依据大小自动加减，实现均衡工作�?
      },
      {
        en: "PLC fully automatic control: automatic pressure regulation, automatic water supply, timed automatic start/stop, manual emergency operation available",
        zh: "PLC全自动控制：可实现自动调压，自动补水，定时自动启停，又可手动应急操作，使用方便可靠�?
      }
    ],
    specs: [
      { model: "Custom", capacity: "�?, pressure: "�?, efficiency: "�?, fuel: "Electric" }
    ]
  },
  {
    id: "commercial-low-nox-condensing-hot-water",
    name: {
      en: "Commercial Low-NOx Condensing Hot Water Boiler",
      zh: "商用低氮冷凝热水锅炉"
    },
    description: {
      en: "Commercial low-NOx condensing hot water boiler with silicon-aluminum main heat exchanger. Integrated combustion chamber, flue, and water channel.",
      zh: "商用低氮冷凝热水锅炉其核心部件主热交换器的材质为硅铝，集燃烧室、烟道、水道于一体�?
    },
    fullDescription: {
      en: "Commercial low-NOx condensing hot water boiler's core component is the main heat exchanger made of silicon-aluminum, integrating combustion chamber, flue, and water channel. The cast aluminum heat exchanger has good corrosion resistance. Within a limited volume, the columnar heat absorption columns have a large heat exchange area. The combustion chamber and outlet are located above the main heat exchanger, with water inlet at the bottom. Water flows from bottom to top with gradually increasing temperature, while flue gas flows from top to bottom with gradually decreasing temperature, ensuring counter-flow heat exchange at every point.",
      zh: "商用低氮冷凝热水锅炉其核心部件主热交换器的材质为硅铝，集燃烧室、烟道、水道于一体。铸铝热交换器具有良好的抗腐蚀性能，在有限的体积内，柱态的吸热柱具有较大的换热面积。燃烧室及出口位于主热交换器上方，进水口位于底部，水流自下而上温度逐渐逐渐增加，烟气自上而下温度逐渐递减，逆向流动以保证换热器中的每个点都能进行充分换热，吸收烟气中显热和大部分水蒸汽潜热，有限的降低排烟温度，使烟气中的水蒸气饱和析出，达到真正高效、节能、环保的目的�?
    },
    image: "/images/products/commercial-low-nox-condensing-hot-water.jpg",
    icon: "Leaf",
    features: [],
    specs: [
      { model: "Custom", capacity: "�?, pressure: "�?, efficiency: "�?, fuel: "Gas/Oil" }
    ]
  },
  {
    id: "dzh-biomass-chain-grate",
    name: {
      en: "DZH Single Drum Vertical Quick-load Moving Grate Boiler",
      zh: "DZH 单锅筒纵置式快装活动炉排锅炉"
    },
    description: {
      en: "Horizontal three-pass water-fire tube boiler. Uses biomass fuel made from agricultural and forestry waste.",
      zh: "卧式三回程水火管式锅炉。燃料是农林废物作为原材料，经过粉碎、混合、挤压、烘干等工艺制成的生物质燃料�?
    },
    fullDescription: {
      en: "DZH single drum vertical moving grate boiler is a horizontal three-pass water-fire tube boiler. The fuel is biomass fuel made from agricultural and forestry waste as raw materials, processed through crushing, mixing, extrusion, and drying to form various shapes (such as blocks, pellets, etc.) that can be directly burned. It does not require uniform feeding and can choose manual or mechanical feeding according to fuel characteristics.",
      zh: "DZH单锅筒纵置式活动炉排锅炉是一种卧式三回程水火管式锅炉。锅炉的燃料是农林废物作为原材料，经过粉碎、混合、挤压、烘干等工艺，制成各种成�?如块状、颗粒状�?的，可直接燃烧的一种新型清洁燃料生物质燃料。不要求均匀给料，可根据燃料特效可选择人工给料和机械给料的方式�?
    },
    image: "/images/products/dzh-biomass-chain-grate.jpg",
    icon: "Leaf",
    features: [
      {
        en: "According to fuel characteristics, manual or mechanical feeding can be selected",
        zh: "根据燃料特性，采用人工给料或机械给料方式�?
      },
      {
        en: "By adjusting the controlled secondary air volume, the combustion ignition speed can be controlled",
        zh: "通过调整控速二次风量，可控制燃烧引燃速度�?
      },
      {
        en: "Long wood strips (L�?M) can be burned without crushing",
        zh: "长木�?L�?M)无需破碎即可燃烧�?
      },
      {
        en: "Uniform feeding is not required",
        zh: "不要求给料均匀�?
      }
    ],
    specs: [
      { model: "Custom", capacity: "�?, pressure: "�?, efficiency: "�?, fuel: "Biomass" }
    ]
  },
  {
    id: "yglw-organic-heat-carrier",
    name: {
      en: "YG(L)W Organic Heat Carrier Furnace (Thermal Oil Heater)",
      zh: "YG（L）W有机热载体炉（导热油炉）"
    },
    description: {
      en: "Industrial heating equipment using biomass/coal as fuel and thermal oil as heat carrier. High temperature (340°C) at low pressure.",
      zh: "工业生产使用的供热设备，以生物质/煤为燃料及烟道气为热源，以导热油为热载体，供热温度可高达340°C�?
    },
    fullDescription: {
      en: "YG(L)W organic heat carrier furnace (thermal oil heater) is industrial heating equipment using biomass/coal as fuel and thermal oil as heat carrier. Through forced liquid-phase circulation by circulation oil pump, heat is delivered to heat-using equipment and then returned to the heating furnace for reheating. It is a high-temperature, low-pressure, energy-saving equipment with heating temperature up to 340°C, generally operating at pressure below 1.0MPa, safe and reliable due to working in liquid phase state.",
      zh: "YG（L）W有机热载体炉（简称YG（L）W导热油炉）是工业生产使用的供热设备，以生物质/煤为燃料及烟道气为热源，以导热油为热载体通过循环油泵强制热载体液相循环，将热量输送给用热设备后，再返回加热炉重新加热的高温、低压、节能设备，供热温度可高�?40℃，而一般在工作压力1.0MPa以下，因为工作在液相状态，安全可靠�?
    },
    image: "/images/products/yglw-organic-heat-carrier.jpg",
    icon: "Thermometer",
    features: [],
    specs: [
      { model: "Custom", capacity: "�?, pressure: "�?, efficiency: "�?, fuel: "Biomass/Coal" }
    ]
  }
];
