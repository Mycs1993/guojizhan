export interface Product {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  fullDescription: {
    en: string;
    zh: string;
  };
  image: string;
  icon: string;
  features: {
    en: string;
    zh: string;
  }[];
  specs: {
    model: string;
    capacity: string;
    pressure: string;
    efficiency: string;
    fuel: string;
  }[];
}

export const PRODUCT_CATEGORIES: Product[] = [
  // 1. WNS Oil/Gas Steam Boiler (Existing)
  {
    id: "wns-oil-gas-steam-boiler",
    name: {
      en: "WNS Series Oil/Gas Fired Steam Boiler",
      zh: "WNS系列燃油/燃气蒸汽锅炉"
    },
    description: {
      en: "Horizontal three-pass internal combustion boiler with high thermal efficiency and low emissions.",
      zh: "卧式三回程内燃锅炉，热效率高，排放低。"
    },
    fullDescription: {
      en: "The WNS series horizontal internal combustion boiler is a three-pass wet-back shell boiler. It features a corrugated furnace and advanced burner technology to ensure high combustion efficiency and low nitrogen emissions. Ideal for food processing, chemical, and textile industries.",
      zh: "WNS系列卧式内燃锅炉采用三回程湿背式结构。配备波纹炉胆和先进燃烧器技术，确保燃烧效率高且氮氧化物排放低。非常适合食品加工、化工和纺织行业。"
    },
    image: "/images/products/wns-series-steam-boiler.png",
    icon: "Flame",
    features: [
      { en: "High Thermal Efficiency ≥ 98%", zh: "热效率 ≥ 98%" },
      { en: "Automatic Control System", zh: "全自动控制系统" },
      { en: "Low NOx Emissions < 30mg/m³", zh: "低氮排放 < 30mg/m³" },
      { en: "Multiple Safety Protections", zh: "多重安全保护" }
    ],
    specs: [
      {
        model: "WNS-0.35MW-LN",
        capacity: "0.35 MW",
        pressure: "0.7/1.0 MPa",
        efficiency: "≥ 99%",
        fuel: "Natural Gas / LNG"
      },
      {
        model: "WNS-10T",
        capacity: "10 Ton/h",
        pressure: "1.25 MPa",
        efficiency: "≥ 98%",
        fuel: "Diesel / Heavy Oil"
      }
    ]
  },
  // 2. SZS Water Tube Steam Boiler (Existing)
  {
    id: "szs-gas-steam-boiler",
    name: {
      en: "SZS Series Water Tube Steam Boiler",
      zh: "SZS系列水管蒸汽锅炉"
    },
    description: {
      en: "Double-drum D-type layout, suitable for large capacity requirements.",
      zh: "双锅筒D型布置，适用于大容量需求。"
    },
    fullDescription: {
      en: "The SZS series boiler features a double-drum 'D' type layout with a membrane water wall structure. It offers excellent sealing, large combustion chamber, and high steam quality. Designed for high pressure and large capacity industrial applications.",
      zh: "SZS系列锅炉采用双锅筒“D”型布置和膜式水冷壁结构。密封性好，燃烧室大，蒸汽品质高。专为高压和大容量工业应用设计。"
    },
    image: "/images/products/szs-water-tube-boiler-premium.png",
    icon: "Factory",
    features: [
      { en: "Large Capacity up to 100T/h", zh: "最大容量可达 100T/h" },
      { en: "Membrane Water Wall", zh: "膜式水冷壁结构" },
      { en: "Quick Start-up", zh: "启动速度快" }
    ],
    specs: [
      {
        model: "SZS-20T",
        capacity: "20 Ton/h",
        pressure: "1.6/2.5 MPa",
        efficiency: "≥ 98%",
        fuel: "Natural Gas"
      }
    ]
  },
  // 3. DZL Biomass/Coal Boiler (Existing)
  {
    id: "dzl-biomass-boiler",
    name: {
      en: "DZL Series Biomass/Coal Fired Boiler",
      zh: "DZL系列生物质/燃煤锅炉"
    },
    description: {
      en: "Single-drum longitudinal type chain grate boiler, widely used for heating and drying.",
      zh: "单锅筒纵置式链条炉排锅炉，广泛用于供暖和干燥。"
    },
    fullDescription: {
      en: "The DZL series is a package chain grate boiler with threaded smoke tubes. It is designed to burn biomass pellets or coal efficiently. The structure is compact, easy to install, and provides stable operation.",
      zh: "DZL系列是采用螺纹烟管的组装链条炉排锅炉。设计用于高效燃烧生物质颗粒或煤炭。结构紧凑，安装方便，运行稳定。"
    },
    image: "/images/products/dzl-biomass-boiler-premium.png",
    icon: "Leaf",
    features: [
      { en: "Fuel Flexibility (Coal/Biomass)", zh: "燃料适应性强 (煤/生物质)" },
      { en: "Threaded Smoke Tubes", zh: "螺纹烟管技术" },
      { en: "Easy Installation", zh: "安装便捷" }
    ],
    specs: [
      {
        model: "DZL-4T",
        capacity: "4 Ton/h",
        pressure: "1.25 MPa",
        efficiency: "≥ 88%",
        fuel: "Biomass / Coal"
      }
    ]
  },
  // 4. YGL(W) Organic Heat Carrier (Existing)
  {
    id: "yglw-organic-heat-carrier",
    name: {
      en: "YGL(W) Organic Heat Carrier Boiler",
      zh: "YG(L)W 有机热载体炉 (导热油炉)"
    },
    description: {
      en: "High temperature at low pressure, safe and energy-saving thermal oil heater.",
      zh: "低压高温，安全节能的导热油加热设备。"
    },
    fullDescription: {
      en: "YGL(W) Organic Heat Carrier Boiler uses biomass or coal as fuel and thermal oil as the heat carrier. It provides high operating temperatures (up to 340°C) at low pressures (<1.0MPa), making it ideal for industries requiring precise high-temperature heating.",
      zh: "YG(L)W有机热载体炉（导热油炉）以生物质/煤为燃料，导热油为热载体。可提供高达340°C的高温供热，而工作压力低（<1.0MPa），非常适合需要精确高温加热的行业。"
    },
    image: "/images/products/yglw-biomass-thermal-oil-heater-premium.png",
    icon: "Thermometer",
    features: [
      { en: "High Temp (340°C) Low Pressure", zh: "高温 (340°C) 低压" },
      { en: "Precise Temperature Control", zh: "精确温度控制" },
      { en: "No Water Treatment Needed", zh: "无需水处理" }
    ],
    specs: [
      {
        model: "YGL-1200K",
        capacity: "1200 kW (1 Million Kcal)",
        pressure: "0.8 MPa",
        efficiency: "≥ 85%",
        fuel: "Biomass / Coal"
      }
    ]
  },
  // 5. YY(Q)W Thermal Oil Heater (New)
  {
    id: "yyqw-thermal-oil-heater",
    name: {
      en: "YY(Q)W Horizontal Oil/Gas Thermal Oil Heater",
      zh: "YY(Q)W系列卧式燃油/燃气导热油炉"
    },
    description: {
      en: "Quick start, high thermal efficiency, precise temperature control.",
      zh: "快速启动，热效率高，温度控制精确。"
    },
    fullDescription: {
      en: "The YY(Q)W series uses a horizontal chamber structure with a three-pass coil design. It offers rapid heating and precise temperature control, perfect for petrochemical, textile printing, and plastic industries.",
      zh: "YY(Q)W系列采用卧式燃烧室结构和三回程盘管设计。具有加热快、控温精确的特点，非常适合石油化工、纺织印染和塑料行业。"
    },
    image: "/images/products/yyqw-thermal-oil-heater-premium.png", // Reusing thermal oil image
    icon: "Thermometer",
    features: [
      { en: "Three-pass Coil Design", zh: "三回程盘管设计" },
      { en: "Intelligent Control", zh: "智能控制" },
      { en: "Operating Temp up to 320°C", zh: "工作温度可达320°C" }
    ],
    specs: [
      {
        model: "YY(Q)W-1400Y(Q)",
        capacity: "1400 kW",
        pressure: "1.0 MPa",
        efficiency: "≥ 95%",
        fuel: "Oil / Gas"
      }
    ]
  },
  // 6. WNS Hot Water Boiler (New)
  {
    id: "wns-hot-water-boiler",
    name: {
      en: "WNS Series Pressure Hot Water Boiler",
      zh: "WNS卧式燃油/燃气承压热水锅炉"
    },
    description: {
      en: "High-efficiency hot water boiler for large-scale heating systems.",
      zh: "用于大型供暖系统的高效热水锅炉。"
    },
    fullDescription: {
      en: "WNS series pressure hot water boiler adopts a corrugated furnace and thread smoke tube structure. It provides stable hot water supply for hotels, hospitals, and residential district heating.",
      zh: "WNS系列承压热水锅炉采用波纹炉胆和螺纹烟管结构。为酒店、医院和住宅小区供暖提供稳定的热水供应。"
    },
    image: "/images/products/wns-hot-water-boiler-premium.jpg", // Reusing WNS image
    icon: "Waves",
    features: [
      { en: "Pressurized Operation", zh: "承压运行" },
      { en: "Large Water Capacity", zh: "大水容量" },
      { en: "Integrated Burner", zh: "一体化燃烧器" }
    ],
    specs: [
      {
        model: "WNS-2.8MW",
        capacity: "2.8 MW",
        pressure: "1.0 MPa",
        efficiency: "≥ 98%",
        fuel: "Natural Gas / Oil"
      }
    ]
  },
  // 7. CWNS Atmospheric Hot Water Boiler (New)
  {
    id: "cwns-atmospheric-hot-water-boiler",
    name: {
      en: "CWNS Atmospheric Pressure Hot Water Boiler",
      zh: "CWNS型燃油/燃气常压热水锅炉"
    },
    description: {
      en: "Safe, non-pressurized operation, ideal for civil heating.",
      zh: "安全无压运行，是民用供暖的理想选择。"
    },
    fullDescription: {
      en: "CWNS atmospheric hot water boiler operates at atmospheric pressure, eliminating explosion risks. It is equipped with imported burners and advanced controllers for automated operation.",
      zh: "CWNS常压热水锅炉在常压下运行，消除了爆炸风险。配备进口燃烧器和先进控制器，实现自动化运行。"
    },
    image: "/images/products/cwns-hot-water-boiler-premium.png",
    icon: "ShieldCheck",
    features: [
      { en: "No Explosion Risk", zh: "无爆炸风险" },
      { en: "Silent Operation", zh: "静音运行" },
      { en: "Computerized Control", zh: "电脑控制" }
    ],
    specs: [
      {
        model: "CWNS-0.7MW",
        capacity: "0.7 MW",
        pressure: "Atmospheric",
        efficiency: "≥ 96%",
        fuel: "Gas / Oil"
      }
    ]
  },
  // 8. CLHS Vertical Hot Water Boiler (New)
  {
    id: "clhs-vertical-hot-water-boiler",
    name: {
      en: "CLHS Vertical Hot Water Boiler",
      zh: "CLHS立式燃油/燃气常压热水锅炉"
    },
    description: {
      en: "Space-saving vertical design, fast heating.",
      zh: "节省空间的立式设计，加热迅速。"
    },
    fullDescription: {
      en: "The CLHS vertical boiler has a compact footprint and is easy to install. It uses a high-efficiency heat transfer structure to produce hot water quickly, making it suitable for swimming pools, hotels, and schools.",
      zh: "CLHS立式锅炉占地面积小，安装方便。采用高效传热结构，产热水快，适用于游泳池、酒店和学校。"
    },
    image: "/images/products/clhs-vertical-hot-water-boiler-premium.png", // Placeholder
    icon: "ArrowUp",
    features: [
      { en: "Small Footprint", zh: "占地小" },
      { en: "Fast Heating", zh: "加热快" },
      { en: "Stainless Steel Liner Option", zh: "可选不锈钢内胆" }
    ],
    specs: [
      {
        model: "CLHS-0.35MW",
        capacity: "0.35 MW",
        pressure: "Atmospheric",
        efficiency: "≥ 94%",
        fuel: "Gas / Oil"
      }
    ]
  },
  // 9. LSS Vertical Steam Boiler (New)
  {
    id: "lss-vertical-steam-boiler",
    name: {
      en: "LSS Series Vertical Steam Boiler",
      zh: "LSS型立式燃油/燃气蒸汽锅炉"
    },
    description: {
      en: "Tubular once-through boiler, steam in 3-5 minutes.",
      zh: "贯流式锅炉，3-5分钟出蒸汽。"
    },
    fullDescription: {
      en: "LSS series is a vertical once-through boiler. It requires no large water volume and can generate steam within minutes of startup. Its compact design is perfect for limited spaces.",
      zh: "LSS系列是一种立式贯流锅炉。它不需要大水容量，启动后几分钟内即可产生蒸汽。其紧凑的设计非常适合有限的空间。"
    },
    image: "/images/products/lss-vertical-steam-boiler-premium.jpg",
    icon: "Zap",
    features: [
      { en: "Quick Steam Generation", zh: "快速出汽" },
      { en: "Compact Design", zh: "紧凑设计" },
      { en: "Top-mounted Burner", zh: "顶置燃烧器" }
    ],
    specs: [
      {
        model: "LSS-0.5T",
        capacity: "0.5 Ton/h",
        pressure: "0.7 MPa",
        efficiency: "≥ 95%",
        fuel: "Gas / LNG"
      }
    ]
  },
  // 10. Low Nitrogen Vacuum Boiler (New)
  {
    id: "low-nitrogen-vacuum-boiler",
    name: {
      en: "Low Nitrogen Vacuum Hot Water Boiler",
      zh: "低氮真空热水锅炉"
    },
    description: {
      en: "Ultra-low NOx emissions, negative pressure operation.",
      zh: "超低氮排放，负压运行。"
    },
    fullDescription: {
      en: "This boiler operates under negative pressure, ensuring absolute safety. The built-in heat exchanger provides clean hot water. Advanced combustion technology achieves ultra-low NOx emissions.",
      zh: "该锅炉在负压下运行，确保绝对安全。内置换热器提供清洁热水。先进的燃烧技术实现了超低氮氧化物排放。"
    },
    image: "/images/products/low-nitrogen-vacuum-boiler-premium-red.png",
    icon: "Leaf",
    features: [
      { en: "Absolute Safety (Vacuum)", zh: "绝对安全 (真空)" },
      { en: "Ultra-low NOx", zh: "超低氮" },
      { en: "Long Lifespan", zh: "长寿命" }
    ],
    specs: [
      {
        model: "ZKW-2.8MW",
        capacity: "2.8 MW",
        pressure: "Negative",
        efficiency: "≥ 99%",
        fuel: "Natural Gas"
      }
    ]
  },
  // 11. CWDR Electric Hot Water Boiler (New)
  {
    id: "cwdr-electric-hot-water-boiler",
    name: {
      en: "CWDR Horizontal Electric Hot Water Boiler",
      zh: "CWDR卧式电加热热水锅炉"
    },
    description: {
      en: "Zero emissions, 100% efficient electric heating.",
      zh: "零排放，100%高效电加热。"
    },
    fullDescription: {
      en: "Using high-quality electric heating elements, the CWDR boiler provides silent and pollution-free heating. It features PID temperature control for precise energy management.",
      zh: "CWDR锅炉采用优质电加热元件，提供静音、无污染的供暖。具有PID温度控制功能，可进行精确的能源管理。"
    },
    image: "/images/products/wns-series-steam-boiler.png",
    icon: "Zap",
    features: [
      { en: "Zero Pollution", zh: "零污染" },
      { en: "99% Thermal Efficiency", zh: "99%热效率" },
      { en: "Separated Control Cabinet", zh: "机电分离" }
    ],
    specs: [
      {
        model: "CWDR-0.35MW",
        capacity: "0.35 MW",
        pressure: "Atmospheric",
        efficiency: "99%",
        fuel: "Electricity"
      }
    ]
  },
  // 12. LDR Vertical Electric Steam Boiler (New)
  {
    id: "ldr-electric-steam-boiler",
    name: {
      en: "LDR Vertical Electric Steam Boiler",
      zh: "LDR型立式电加热蒸汽锅炉"
    },
    description: {
      en: "Compact electric steam boiler, plug and play.",
      zh: "紧凑型电蒸汽锅炉，即插即用。"
    },
    fullDescription: {
      en: "LDR electric steam boiler is designed for small steam requirements. It is easy to operate, clean, and reliable. Ideal for laboratories, garment ironing, and food steaming.",
      zh: "LDR电蒸汽锅炉专为小蒸汽需求而设计。操作简单，清洁可靠。非常适合实验室、服装熨烫和食品蒸煮。"
    },
    image: "/images/products/ldr-electric-steam-boiler-premium.png",
    icon: "Zap",
    features: [
      { en: "One-button Operation", zh: "一键操作" },
      { en: "Stainless Steel Heating Tube", zh: "不锈钢加热管" },
      { en: "Compact Size", zh: "体积小巧" }
    ],
    specs: [
      {
        model: "LDR-0.1T",
        capacity: "100 kg/h",
        pressure: "0.7 MPa",
        efficiency: "99%",
        fuel: "Electricity"
      }
    ]
  },
  // 13. WDR Horizontal Electric Steam Boiler (New)
  {
    id: "wdr-electric-steam-boiler",
    name: {
      en: "WDR Horizontal Electric Steam Boiler",
      zh: "WDR型卧式电加热蒸汽锅炉"
    },
    description: {
      en: "Large capacity electric steam generation.",
      zh: "大容量电蒸汽发生设备。"
    },
    fullDescription: {
      en: "WDR series offers larger steam capacity using electric power. It separates the heating elements from the boiler connection for easier maintenance and safety.",
      zh: "WDR系列利用电力提供更大的蒸汽容量。它将加热元件与锅炉连接分离，便于维护和安全。"
    },
    image: "/images/products/wdr-electric-steam-boiler-premium.png",
    icon: "Zap",
    features: [
      { en: "Large Power Handling", zh: "大功率处理" },
      { en: "Step-loading Control", zh: "分级加载控制" },
      { en: "Touch Screen Panel", zh: "触摸屏面板" }
    ],
    specs: [
      {
        model: "WDR-2T",
        capacity: "2 Ton/h",
        pressure: "1.0 MPa",
        efficiency: "99%",
        fuel: "Electricity"
      }
    ]
  },
  // 14. Biomass Steam Generator (New)
  {
    id: "horizontal-biomass-steam-generator",
    name: {
      en: "Horizontal Biomass Steam Generator",
      zh: "卧式生物质蒸汽发生器"
    },
    description: {
      en: "Inspection-free design, cost-effective steam solution.",
      zh: "免检设计，高性价比蒸汽方案。"
    },
    fullDescription: {
      en: "This steam generator uses biomass pellets as fuel. With a water capacity of less than 30L, it is often exempt from strict annual boiler inspections. It is efficient and easy to manage.",
      zh: "该蒸汽发生器使用生物质颗粒作为燃料。水容量小于30L，通常免除严格的年度锅炉检查。高效且易于管理。"
    },
    image: "/images/products/dzl-biomass-boiler.jpg",
    icon: "Leaf",
    features: [
      { en: "Inspection Exemption", zh: "免报检" },
      { en: "Automatic Feeding", zh: "自动进料" },
      { en: "Low Operating Cost", zh: "运行成本低" }
    ],
    specs: [
      {
        model: "LHS-0.5T-S",
        capacity: "500 kg/h",
        pressure: "0.7 MPa",
        efficiency: "≥ 90%",
        fuel: "Biomass Pellet"
      }
    ]
  },
  // 15. Gas Steam Generator (New)
  {
    id: "gas-steam-generator",
    name: {
      en: "Gas Fired Steam Generator",
      zh: "燃气蒸汽发生器"
    },
    description: {
      en: "Instant steam, modular installation.",
      zh: "即时出汽，模块化安装。"
    },
    fullDescription: {
      en: "The gas steam generator produces steam in seconds. Its modular design allows for multiple units to work together to meet fluctuating steam demands efficiently.",
      zh: "燃气蒸汽发生器在几秒钟内产生蒸汽。其模块化设计允许多台设备协同工作，高效满足波动的蒸汽需求。"
    },
    image: "/images/products/wns-series-steam-boiler.png",
    icon: "Flame",
    features: [
      { en: "5 Seconds to Steam", zh: "5秒出汽" },
      { en: "Modular Cascade System", zh: "模块化级联系统" },
      { en: "Low Nitrogen", zh: "低氮" }
    ],
    specs: [
      {
        model: "LHS-1T-Q",
        capacity: "1 Ton/h",
        pressure: "1.0 MPa",
        efficiency: "≥ 96%",
        fuel: "Natural Gas"
      }
    ]
  },
  // 16. SZL Chain Grate Boiler (New)
  {
    id: "szl-chain-grate-boiler",
    name: {
      en: "SZL Series Double Drum Chain Grate Boiler",
      zh: "SZL双锅筒纵置式链条炉排锅炉"
    },
    description: {
      en: "Classic water tube design for biomass and coal.",
      zh: "经典的生物质和煤水管设计。"
    },
    fullDescription: {
      en: "SZL boiler features double drums and a water tube assembly chain grate. It offers high efficiency, overload protection, and suitability for various solid fuels.",
      zh: "SZL锅炉采用双锅筒和水管组装链条炉排。具有效率高、过载保护强、适用多种固体燃料的特点。"
    },
    image: "/images/products/dzl-biomass-boiler.jpg",
    icon: "Factory",
    features: [
      { en: "Cyclone Burnout Chamber", zh: "旋风燃尽室" },
      { en: "Automated Grate Travel", zh: "自动炉排运行" },
      { en: "Wide Fuel Adaptability", zh: "燃料适应性广" }
    ],
    specs: [
      {
        model: "SZL-10T",
        capacity: "10 Ton/h",
        pressure: "1.25 MPa",
        efficiency: "≥ 88%",
        fuel: "Biomass / Coal"
      }
    ]
  },
  // 17. Biomass Hot Air Stove (New)
  {
    id: "biomass-hot-air-stove",
    name: {
      en: "Biomass Hot Air Stove",
      zh: "生物质热风炉"
    },
    description: {
      en: "Direct clean hot air for drying processes.",
      zh: "用于干燥过程的直接洁净热风。"
    },
    fullDescription: {
      en: "Designed for grain drying, wood drying, and workshop heating. It burns biomass to produce pure hot air directly without water or steam as a medium.",
      zh: "专为谷物干燥、木材干燥和车间供暖设计。燃烧生物质直接产生纯净热风，无需水或蒸汽作为介质。"
    },
    image: "/images/products/dzl-biomass-boiler.jpg",
    icon: "Wind",
    features: [
      { en: "High Thermal Efficiency", zh: "热效率高" },
      { en: "Easy Operation", zh: "操作简便" },
      { en: "Clean Hot Air", zh: "热风洁净" }
    ],
    specs: [
      {
        model: "DRF-60",
        capacity: "600,000 Kcal/h",
        pressure: "Atmospheric",
        efficiency: "≥ 85%",
        fuel: "Biomass"
      }
    ]
  },
  // 18. DZH Moving Grate Boiler (New)
  {
    id: "dzh-moving-grate-boiler",
    name: {
      en: "DZH Series Moving Grate Boiler",
      zh: "DZH单锅筒纵置式快装活动炉排锅炉"
    },
    description: {
      en: "Manual/Moving grate boiler for wood logs and irregular biomass.",
      zh: "用于木柴和不规则生物质的手动/活动炉排锅炉。"
    },
    fullDescription: {
      en: "The DZH series is suitable for burning rough biomass like wood logs and waste. The moving grate prevents slagging and ensures full combustion.",
      zh: "DZH系列适合燃烧原木和废料等粗生物质。活动炉排可防止结渣并确保充分燃烧。"
    },
    image: "/images/products/dzl-biomass-boiler.jpg",
    icon: "Hammer", // Manual work
    features: [
      { en: "Suitable for Wood Logs", zh: "适合烧原木" },
      { en: "Moving Grate prevention", zh: "活动炉排防结渣" },
      { en: "Simple Maintenance", zh: "维护简单" }
    ],
    specs: [
      {
        model: "DZH-2T",
        capacity: "2 Ton/h",
        pressure: "1.0 MPa",
        efficiency: "≥ 84%",
        fuel: "Wood / Biomass"
      }
    ]
  },
  // 19. Low Nitrogen Gas Steam Generator (New)
  {
    id: "low-nitrogen-gas-steam-generator",
    name: {
      en: "Low Nitrogen Gas Steam Generator",
      zh: "低氮燃气蒸汽发生器"
    },
    description: {
      en: "Eco-friendly steam generator with NOx < 30mg.",
      zh: "氮氧化物低于30mg的环保蒸汽发生器。"
    },
    fullDescription: {
      en: "Meeting strict environmental regulations, this generator produces steam with extremely low NOx emissions. It is quiet, efficient, and requires no special boiler room.",
      zh: "满足严格的环保法规，产生极低氮氧化物排放的蒸汽。安静、高效，无需专用锅炉房。"
    },
    image: "/images/products/wns-series-steam-boiler.png",
    icon: "Leaf",
    features: [
      { en: "NOx < 30mg/m³", zh: "氮氧化物 < 30mg/m³" },
      { en: "Fully Premixed Combustion", zh: "全预混燃烧" },
      { en: "Smart IoT Control", zh: "智能物联网控制" }
    ],
    specs: [
      {
        model: "LHS-0.5T-LN",
        capacity: "500 kg/h",
        pressure: "0.8 MPa",
        efficiency: "≥ 98%",
        fuel: "Natural Gas"
      }
    ]
  },
  // 20. Electric Heating Steam Generator (New)
  {
    id: "electric-heating-steam-generator",
    name: {
      en: "Electric Heating Steam Generator",
      zh: "电加热蒸汽发生器"
    },
    description: {
      en: "Small footprint, automatic electric steam supply.",
      zh: "占地小，全自动电力蒸汽供应。"
    },
    fullDescription: {
      en: "A perfect solution for point-of-use steam in hospitals, labs, and saunas. No fuel piping required, just electrical connection and water supply.",
      zh: "医院、实验室和桑拿房即用型蒸汽的完美解决方案。无需燃料管道，只需连接电源和水源。"
    },
    image: "/images/products/szs-steam-boiler.jpg",
    icon: "Zap",
    features: [
      { en: "Easy to Install", zh: "安装容易" },
      { en: "Automatic Water Refill", zh: "自动补水" },
      { en: "Overheat Protection", zh: "过热保护" }
    ],
    specs: [
      {
        model: "LDR-0.05T",
        capacity: "50 kg/h",
        pressure: "0.4 MPa",
        efficiency: "98%",
        fuel: "Electricity"
      }
    ]
  }
];
