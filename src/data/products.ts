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
    image: "/images/products/wns-steam-boiler.jpg",
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
    image: "/images/products/szs-steam-boiler.jpg",
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
    image: "/images/products/dzl-biomass-boiler.jpg",
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
    image: "/images/products/yglw-organic-heat-carrier.jpg",
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
  }
];
