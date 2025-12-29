export interface LocalizedNewsItem {
  id: number;
  title: {
    en: string;
    zh: string;
  };
  date: string;
  summary: {
    en: string;
    zh: string;
  };
  category: {
    en: string;
    zh: string;
  };
  image: string;
  content: {
    en: string[];
    zh: string[];
  };
}

export const NEWS_ITEMS_LOCALIZED: LocalizedNewsItem[] = [
  {
    id: 1,
    title: {
      en: "Comprehensive Guide to Industrial Boiler Maintenance: Daily, Weekly, and Monthly Checklists",
      zh: "工业锅炉维护综合指南：每日、每周和每月检查清�?
    },
    date: "2024-03-20",
    summary: {
      en: "A complete maintenance schedule to ensure your boiler operates at peak efficiency. Learn what to inspect daily, weekly, and annually to prevent costly breakdowns.",
      zh: "一份完整的维护计划，确保您的锅炉以最佳效率运行。了解每日、每周和每年应检查的内容，以防止代价高昂的故障�?
    },
    category: {
      en: "Maintenance Guide",
      zh: "维护指南"
    },
    image: "/images/facilities/quality-control.jpg",
    content: {
      en: [
        "Regular maintenance is the lifeline of any industrial boiler system. A well-maintained boiler not only operates more efficiently—saving fuel costs—but also ensures the safety of your facility and personnel.",
        "**Daily Maintenance Checklist:**",
        "1. **Check Water Level:** Ensure the water level gauge glass is clear and the level is stable at the normal operating line.",
        "2. **Blowdown:** Perform bottom blowdown to remove sludge and sediment. This is crucial for preventing scale buildup.",
        "3. **Inspect Burner Flame:** Look through the sight glass. The flame should be stable and not impinging on the furnace walls.",
        "4. **Feedwater Temperature:** Verify that the feedwater temperature is within the design range (usually above 104°F/40°C) to prevent thermal shock.",
        "**Weekly & Monthly Maintenance:**",
        "Weekly checks should include testing the low-water cutoff device and inspecting all valve linkages for tightness. Monthly, you should check the combustion air intake for blockages and inspect the water treatment system's salt levels and pump operation.",
        "By strictly following these schedules, you can extend the lifespan of your boiler by 5-10 years."
      ],
      zh: [
        "定期维护是任何工业锅炉系统的生命线。维护良好的锅炉不仅运行效率更高——节省燃料成本——还能确保工厂和人员的安全�?,
        "**每日维护清单�?*",
        "1. **检查水位：** 确保水位计玻璃清晰，水位稳定在正常运行线上�?,
        "2. **排污操作�?* 进行底部排污以清除污泥和沉积物。这对防止水垢堆积至关重要�?,
        "3. **检查燃烧器火焰�?* 通过观火孔观察。火焰应稳定，且不应直接冲击炉膛壁�?,
        "4. **给水温度�?* 确认给水温度在设计范围内（通常高于40°C），以防止热冲击�?,
        "**每周和每月维护：**",
        "每周检查应包括测试低水位切断装置，并检查所有阀门连杆的紧密性。每月应检查燃烧空气进气口是否有堵塞，并检查水处理系统的盐位和泵运行情况�?,
        "严格遵守这些时间表，您可以将锅炉的使用寿命延�?-10年�?
      ]
    }
  },
  {
    id: 2,
    title: {
      en: "5 Common Boiler Problems and How to Troubleshoot Them",
      zh: "5个常见锅炉问题及其排除方�?
    },
    date: "2024-03-15",
    summary: {
      en: "From ignition failures to strange noises, we analyze the top 5 issues operators face and provide step-by-step solutions for quick recovery.",
      zh: "从点火失败到异常噪音，我们分析了操作员面临的�?大问题，并提供分步解决方案以快速恢复�?
    },
    category: {
      en: "Troubleshooting",
      zh: "故障排除"
    },
    image: "/images/products/wns-boiler-real.jpg",
    content: {
      en: [
        "Even the best boilers encounter issues. Here are the 5 most common problems and how to address them:",
        "**1. Boiler fails to start (Ignition Failure):** Check the gas supply pressure first. Then, inspect the ignition electrode for carbon buildup and ensure the flame sensor (photocell) is clean. Finally, verify that the burner motor is running.",
        "**2. Low Water Level Alarm:** This often triggers a safety shutdown. Check if the feedwater pump is running. If the pump is running but water isn't entering, check for a closed valve or a blocked strainer.",
        "**3. Banging or Clanging Noises:** This is often 'water hammer.' It happens when steam meets cooler water or condensate is trapped. Check your steam traps and ensure condensate lines are pitched correctly.",
        "**4. Black Smoke from Stack:** This indicates incomplete combustion. The air-to-fuel ratio is incorrect. Increase the air supply or check the burner nozzle for clogging.",
        "**5. Pressure Too Low:** If the boiler can't maintain pressure, check if the load exceeds capacity. Also, inspect for steam leaks in the distribution piping.",
        "**Note:** Always consult a professional technician for complex electrical or pressure vessel repairs."
      ],
      zh: [
        "即使是最好的锅炉也会遇到问题。以下是5个最常见的问题及其解决方法：",
        "**1. 锅炉无法启动（点火失败）�?* 首先检查燃气供应压力。然后，检查点火电极是否有积碳，并确保火焰传感器（光电管）清洁。最后，确认燃烧机电机是否在运行�?,
        "**2. 低水位报警：** 这通常会触发安全停机。检查给水泵是否在运行。如果泵在运行但水未进入，检查是否有阀门关闭或过滤器堵塞�?,
        "**3. 撞击声或叮当声：** 这通常是\"水锤\"现象。当蒸汽遇到较冷的水或冷凝水被困时会发生。检查您的疏水阀，并确保冷凝水管道坡度正确�?,
        "**4. 烟囱冒黑烟：** 这表明燃烧不完全。空燃比不正确。增加空气供应或检查燃烧器喷嘴是否堵塞�?,
        "**5. 压力过低�?* 如果锅炉无法维持压力，检查负荷是否超过容量。此外，检查分配管道中是否有蒸汽泄漏�?,
        "**注意�?* 对于复杂的电气或压力容器维修，请务必咨询专业技术人员�?
      ]
    }
  },
  {
    id: 3,
    title: {
      en: "The Critical Importance of Boiler Water Treatment",
      zh: "锅炉水处理的关键重要�?
    },
    date: "2024-03-08",
    summary: {
      en: "Why do boilers scale? How does pH affect corrosion? Understanding water chemistry is the key to preventing catastrophic failures.",
      zh: "为什么锅炉会结垢？pH值如何影响腐蚀？了解水化学是防止灾难性故障的关键�?
    },
    category: {
      en: "Technical Knowledge",
      zh: "技术知�?
    },
    image: "/images/news/domestic/domestic-3.jpg",
    content: {
      en: [
        "Water is the working medium of a boiler, and its quality directly determines the boiler's lifespan. Poor water treatment causes two main enemies: **Scale** and **Corrosion**.",
        "**Understanding Scale:** Scale is formed by calcium and magnesium ions (hardness) precipitating on hot surfaces. Even a thin layer of scale (1mm) can reduce heat transfer efficiency by 5-10% and cause overheating of the metal, leading to tube bursts.",
        "**The Role of Softeners:** A water softener removes hardness ions. You must check the brine tank regularly and test the output water hardness daily.",
        "**Controlling pH and Oxygen:** Dissolved oxygen in water causes pitting corrosion. We use a deaerator or chemical oxygen scavengers (like sulfite) to remove it. The pH should typically be maintained between 10.5 and 11.5 to create a protective film on the metal surface.",
        "Invest in a good water treatment system—it is much cheaper than replacing a boiler."
      ],
      zh: [
        "水是锅炉的工作介质，其质量直接决定了锅炉的寿命。糟糕的水处理会导致两个主要敌人�?*结垢**�?*腐蚀**�?,
        "**了解结垢�?* 垢是由钙镁离子（硬度）在热表面沉淀形成的。即使是一层薄薄的垢（1毫米），也会使传热效率降�?-10%，并导致金属过热，引爆管�?,
        "**软化水设备的作用�?* 软水器用于去除硬度离子。您必须定期检查盐箱，并每天测试出水硬度�?,
        "**控制pH值和氧气�?* 水中的溶解氧会导致点蚀。我们使用除氧器或化学除氧剂（如亚硫酸盐）来去除它。pH值通常应保持在10.5�?1.5之间，以便在金属表面形成保护膜�?,
        "投资一套好的水处理系统——这比更换一台锅炉要便宜得多�?
      ]
    }
  },
  {
    id: 4,
    title: {
      en: "Gas Burner Troubleshooting: Why Your Boiler Won't Ignite",
      zh: "燃气燃烧器故障排除：为什么您的锅炉无法点�?
    },
    date: "2024-02-25",
    summary: {
      en: "A deep dive into burner malfunctions. Analyzing the program controller sequence, air pressure switches, and gas valve issues.",
      zh: "深入探讨燃烧器故障。分析程序控制器序列、风压开关和燃气阀问题�?
    },
    category: {
      en: "Troubleshooting",
      zh: "故障排除"
    },
    image: "/images/products/lss-boiler-real.jpg",
    content: {
      en: [
        "The burner is the heart of gas-fired boilers. When it fails, production stops. Here is a technical breakdown of common ignition failures:",
        "**1. Pre-purge Failure:** If the fan doesn't start, check the motor contactor. If the fan runs but the sequence stops, check the **Air Pressure Switch**. It confirms that there is enough air for combustion. If the flue is blocked or the fan is dirty, this switch won't close.",
        "**2. Ignition Spark but No Flame:** You hear the spark, but no fire. Check the gas solenoid valves. Are they opening? Is there gas pressure? If yes, the ignition transformer might be weak, or the electrode gap is incorrect (usually 3-5mm).",
        "**3. Flame Starts then Trips Immediately:** This is usually a flame detection issue. The **UV sensor or Ionization rod** might be dirty or positioned incorrectly. It must 'see' the flame within safety time (usually 2-3 seconds).",
        "**Professional Tip:** Never repeatedly press the reset button without investigating the cause, as this can accumulate unburned gas in the furnace."
      ],
      zh: [
        "燃烧器是燃气锅炉的心脏。当它发生故障时，生产就会停止。以下是常见点火故障的技术分析：",
        "**1. 前吹扫故障：** 如果风机不启动，检查电机接触器。如果风机运行但程序停止，检�?*风压开�?*。它确认有足够的空气进行燃烧。如果烟道堵塞或风机脏污，此开关将不会闭合�?,
        "**2. 有点火火花但无火焰：** 听到火花声但没有火。检查燃气电磁阀。它们打开了吗？有燃气压力吗？如果有，可能是点火变压器微弱，或电极间隙不正确（通常�?-5毫米）�?,
        "**3. 火焰启动后立即熄灭：** 这通常是火焰检测问题�?*紫外线传感器或电离棒**可能脏污或位置不正确。它必须在安全时间内（通常2-3秒）\"看到\"火焰�?,
        "**专家提示�?* 千万不要在未调查原因的情况下反复按复位按钮，因为这可能会在炉膛内积聚未燃烧的燃气�?
      ]
    }
  },
  {
    id: 5,
    title: {
      en: "Winter Boiler Maintenance: Preventing Freeze Damage",
      zh: "冬季锅炉维护：防止冻结损�?
    },
    date: "2024-01-10",
    summary: {
      en: "Winter poses unique challenges for industrial boilers. Learn how to protect your system from freezing temperatures and seasonal load spikes.",
      zh: "冬季给工业锅炉带来独特挑战。了解如何保护您的系统免受冰冻温度和季节性负荷高峰的影响�?
    },
    category: {
      en: "Maintenance Guide",
      zh: "维护指南"
    },
    image: "/images/news/domestic/domestic-4.jpg",
    content: {
      en: [
        "For boilers installed in unheated boiler rooms or outdoor settings, winter is a dangerous time. Frozen pipes can burst, causing extensive damage.",
        "**Key Winter Protection Steps:**",
        "1. **Insulation:** Inspect all lagging and insulation on steam and condensate pipes. Repair any tears immediately to prevent heat loss.",
        "2. **Heat Tracing:** Ensure electric heat tracing on outdoor water lines is functioning. Check the control thermostat.",
        "3. **Standby Boilers:** If you have a backup boiler that is not running, it must be either kept warm (using a heating coil or periodic firing) or completely drained to prevent freezing.",
        "4. **Drainage:** If shutting down for the holidays, drain the boiler completely. Open all vents and drains to ensure no water remains in the tubes.",
        "5. **Fuel Check:** For oil-fired boilers, ensure your fuel oil has a low pour point or that the tank heater is working, so the oil doesn't wax up in cold lines."
      ],
      zh: [
        "对于安装在无供暖锅炉房或室外环境的锅炉，冬季是一个危险时期。冻结的管道可能会破裂，造成广泛的损坏�?,
        "**冬季防护关键步骤�?*",
        "1. **保温�?* 检查蒸汽和冷凝水管道上的所有保温层。立即修复任何破损，以防止热量损失�?,
        "2. **伴热�?* 确保室外水管线上的电伴热功能正常。检查控制恒温器�?,
        "3. **备用锅炉�?* 如果您有未运行的备用锅炉，必须保持温暖（使用加热盘管或定期点火），或完全排空以防止冻结�?,
        "4. **排水�?* 如果假期停机，请完全排空锅炉。打开所有排气口和排水口，确保管内无残留水�?,
        "5. **燃料检查：** 对于燃油锅炉，确保您的燃油具有低凝点，或油箱加热器工作正常，以免油在冷管线中结蜡�?
      ]
    }
  },
  {
    id: 6,
    title: {
      en: "Safety First: Industrial Boiler Operation Safety Protocols",
      zh: "安全第一：工业锅炉操作安全规�?
    },
    date: "2023-12-05",
    summary: {
      en: "Safety is non-negotiable. This article outlines the essential safety protocols every boiler operator must follow to prevent accidents.",
      zh: "安全是不可妥协的。本文概述了每个锅炉操作员必须遵守的基本安全规程，以防止事故发生�?
    },
    category: {
      en: "Safety",
      zh: "安全"
    },
    image: "/images/news/domestic/domestic-5.jpg",
    content: {
      en: [
        "Boiler accidents can be catastrophic. Safety protocols are not just rules; they are essential for survival. Every facility should have a clear safety management system.",
        "**Critical Safety Rules:**",
        "1. **Never bypass safety interlocks:** Never bridge out a low water cutoff or pressure switch to keep a boiler running. This is the leading cause of explosions.",
        "2. **Regular Safety Valve Testing:** The safety relief valve is the last line of defense. Perform a manual lift test monthly (if pressure permits) and a professional calibration annually.",
        "3. **Training:** Only certified personnel should operate the boiler. Regular training on emergency shutdown procedures is mandatory.",
        "4. **Keep the Boiler Room Clear:** Do not store flammable materials (paint, chemicals, cardboard) in the boiler room. Keep exits clear.",
        "5. **Logbook:** Maintain a daily logbook of operating parameters. A sudden change in flue gas temperature or pressure drop often signals an impending problem.",
        "Safety is everyone's responsibility."
      ],
      zh: [
        "锅炉事故可能是灾难性的。安全规程不仅仅是规则，它们是生存所必需的。每个工厂都应有明确的安全管理体系�?,
        "**关键安全规则�?*",
        "1. **绝不绕过安全联锁�?* 绝不要短接低水位切断或压力开关来维持锅炉运行。这是导致爆炸的主要原因�?,
        "2. **定期安全阀测试�?* 安全泄放阀是最后一道防线。每月进行一次手动开启测试（如果压力允许），每年进行一次专业校准�?,
        "3. **培训�?* 只有持证人员才能操作锅炉。必须定期进行紧急停机程序培训�?,
        "4. **保持锅炉房清洁：** 不要在锅炉房内存放易燃材料（油漆、化学品、纸板）。保持出口畅通�?,
        "5. **运行日志�?* 维护每日运行参数日志。烟气温度或压降的突然变化通常预示着即将发生的问题�?,
        "安全是每个人的责任�?
      ]
    }
  }
];

// Legacy export for backward compatibility
export const NEWS_ITEMS = NEWS_ITEMS_LOCALIZED.map(item => ({
  id: item.id,
  title: item.title.en,
  date: item.date,
  summary: item.summary.en,
  category: item.category.en,
  image: item.image,
  content: item.content
}));
