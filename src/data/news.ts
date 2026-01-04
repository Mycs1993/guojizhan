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
      zh: "宸ヤ笟閿呯倝缁存姢缁煎悎鎸囧崡锛氭瘡鏃ャ€佹瘡鍛ㄥ拰姣忔湀妫€鏌ユ竻鍗?
    },
    date: "2024-03-20",
    summary: {
      en: "A complete maintenance schedule to ensure your boiler operates at peak efficiency. Learn what to inspect daily, weekly, and annually to prevent costly breakdowns.",
      zh: "涓€浠藉畬鏁寸殑缁存姢璁″垝锛岀‘淇濇偍鐨勯攨鐐変互鏈€浣虫晥鐜囪繍琛屻€備簡瑙ｆ瘡鏃ャ€佹瘡鍛ㄥ拰姣忓勾搴旀鏌ョ殑鍐呭锛屼互闃叉浠ｄ环楂樻槀鐨勬晠闅溿€?
    },
    category: {
      en: "Maintenance Guide",
      zh: "缁存姢鎸囧崡"
    },
    image: "/images/facilities/quality-control.jpg",
    content: {
      en: [
        "Regular maintenance is the lifeline of any industrial boiler system. A well-maintained boiler not only operates more efficiently鈥攕aving fuel costs鈥攂ut also ensures the safety of your facility and personnel.",
        "**Daily Maintenance Checklist:**",
        "1. **Check Water Level:** Ensure the water level gauge glass is clear and the level is stable at the normal operating line.",
        "2. **Blowdown:** Perform bottom blowdown to remove sludge and sediment. This is crucial for preventing scale buildup.",
        "3. **Inspect Burner Flame:** Look through the sight glass. The flame should be stable and not impinging on the furnace walls.",
        "4. **Feedwater Temperature:** Verify that the feedwater temperature is within the design range (usually above 104掳F/40掳C) to prevent thermal shock.",
        "**Weekly & Monthly Maintenance:**",
        "Weekly checks should include testing the low-water cutoff device and inspecting all valve linkages for tightness. Monthly, you should check the combustion air intake for blockages and inspect the water treatment system's salt levels and pump operation.",
        "By strictly following these schedules, you can extend the lifespan of your boiler by 5-10 years."
      ],
      zh: [
        "瀹氭湡缁存姢鏄换浣曞伐涓氶攨鐐夌郴缁熺殑鐢熷懡绾裤€傜淮鎶よ壇濂界殑閿呯倝涓嶄粎杩愯鏁堢巼鏇撮珮鈥斺€旇妭鐪佺噧鏂欐垚鏈€斺€旇繕鑳界‘淇濆伐鍘傚拰浜哄憳鐨勫畨鍏ㄣ€?,
        "**姣忔棩缁存姢娓呭崟锛?*",
        "1. **妫€鏌ユ按浣嶏細** 纭繚姘翠綅璁＄幓鐠冩竻鏅帮紝姘翠綅绋冲畾鍦ㄦ甯歌繍琛岀嚎涓娿€?,
        "2. **鎺掓薄鎿嶄綔锛?* 杩涜搴曢儴鎺掓薄浠ユ竻闄ゆ薄娉ュ拰娌夌Н鐗┿€傝繖瀵归槻姝㈡按鍨㈠爢绉嚦鍏抽噸瑕併€?,
        "3. **妫€鏌ョ噧鐑у櫒鐏劙锛?* 閫氳繃瑙傜伀瀛旇瀵熴€傜伀鐒板簲绋冲畾锛屼笖涓嶅簲鐩存帴鍐插嚮鐐夎啗澹併€?,
        "4. **缁欐按娓╁害锛?* 纭缁欐按娓╁害鍦ㄨ璁¤寖鍥村唴锛堥€氬父楂樹簬40掳C锛夛紝浠ラ槻姝㈢儹鍐插嚮銆?,
        "**姣忓懆鍜屾瘡鏈堢淮鎶わ細**",
        "姣忓懆妫€鏌ュ簲鍖呮嫭娴嬭瘯浣庢按浣嶅垏鏂缃紝骞舵鏌ユ墍鏈夐榾闂ㄨ繛鏉嗙殑绱у瘑鎬с€傛瘡鏈堝簲妫€鏌ョ噧鐑х┖姘旇繘姘斿彛鏄惁鏈夊牭濉烇紝骞舵鏌ユ按澶勭悊绯荤粺鐨勭洂浣嶅拰娉佃繍琛屾儏鍐点€?,
        "涓ユ牸閬靛畧杩欎簺鏃堕棿琛紝鎮ㄥ彲浠ュ皢閿呯倝鐨勪娇鐢ㄥ鍛藉欢闀?-10骞淬€?
      ]
    }
  },
  {
    id: 2,
    title: {
      en: "5 Common Boiler Problems and How to Troubleshoot Them",
      zh: "5涓父瑙侀攨鐐夐棶棰樺強鍏舵帓闄ゆ柟娉?
    },
    date: "2024-03-15",
    summary: {
      en: "From ignition failures to strange noises, we analyze the top 5 issues operators face and provide step-by-step solutions for quick recovery.",
      zh: "浠庣偣鐏け璐ュ埌寮傚父鍣煶锛屾垜浠垎鏋愪簡鎿嶄綔鍛橀潰涓寸殑鍓?澶ч棶棰橈紝骞舵彁渚涘垎姝ヨВ鍐虫柟妗堜互蹇€熸仮澶嶃€?
    },
    category: {
      en: "Troubleshooting",
      zh: "鏁呴殰鎺掗櫎"
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
        "鍗充娇鏄渶濂界殑閿呯倝涔熶細閬囧埌闂銆備互涓嬫槸5涓渶甯歌鐨勯棶棰樺強鍏惰В鍐虫柟娉曪細",
        "**1. 閿呯倝鏃犳硶鍚姩锛堢偣鐏け璐ワ級锛?* 棣栧厛妫€鏌ョ噧姘斾緵搴斿帇鍔涖€傜劧鍚庯紝妫€鏌ョ偣鐏數鏋佹槸鍚︽湁绉⒊锛屽苟纭繚鐏劙浼犳劅鍣紙鍏夌數绠★級娓呮磥銆傛渶鍚庯紝纭鐕冪儳鏈虹數鏈烘槸鍚﹀湪杩愯銆?,
        "**2. 浣庢按浣嶆姤璀︼細** 杩欓€氬父浼氳Е鍙戝畨鍏ㄥ仠鏈恒€傛鏌ョ粰姘存车鏄惁鍦ㄨ繍琛屻€傚鏋滄车鍦ㄨ繍琛屼絾姘存湭杩涘叆锛屾鏌ユ槸鍚︽湁闃€闂ㄥ叧闂垨杩囨护鍣ㄥ牭濉炪€?,
        "**3. 鎾炲嚮澹版垨鍙綋澹帮細** 杩欓€氬父鏄痋"姘撮敜\"鐜拌薄銆傚綋钂告苯閬囧埌杈冨喎鐨勬按鎴栧喎鍑濇按琚洶鏃朵細鍙戠敓銆傛鏌ユ偍鐨勭枏姘撮榾锛屽苟纭繚鍐峰嚌姘寸閬撳潯搴︽纭€?,
        "**4. 鐑熷洷鍐掗粦鐑燂細** 杩欒〃鏄庣噧鐑т笉瀹屽叏銆傜┖鐕冩瘮涓嶆纭€傚鍔犵┖姘斾緵搴旀垨妫€鏌ョ噧鐑у櫒鍠峰槾鏄惁鍫靛銆?,
        "**5. 鍘嬪姏杩囦綆锛?* 濡傛灉閿呯倝鏃犳硶缁存寔鍘嬪姏锛屾鏌ヨ礋鑽锋槸鍚﹁秴杩囧閲忋€傛澶栵紝妫€鏌ュ垎閰嶇閬撲腑鏄惁鏈夎捀姹芥硠婕忋€?,
        "**娉ㄦ剰锛?* 瀵逛簬澶嶆潅鐨勭數姘旀垨鍘嬪姏瀹瑰櫒缁翠慨锛岃鍔″繀鍜ㄨ涓撲笟鎶€鏈汉鍛樸€?
      ]
    }
  },
  {
    id: 3,
    title: {
      en: "The Critical Importance of Boiler Water Treatment",
      zh: "閿呯倝姘村鐞嗙殑鍏抽敭閲嶈鎬?
    },
    date: "2024-03-08",
    summary: {
      en: "Why do boilers scale? How does pH affect corrosion? Understanding water chemistry is the key to preventing catastrophic failures.",
      zh: "涓轰粈涔堥攨鐐変細缁撳灑锛焢H鍊煎浣曞奖鍝嶈厫铓€锛熶簡瑙ｆ按鍖栧鏄槻姝㈢伨闅炬€ф晠闅滅殑鍏抽敭銆?
    },
    category: {
      en: "Technical Knowledge",
      zh: "鎶€鏈煡璇?
    },
    image: "/images/news/domestic/domestic-3.jpg",
    content: {
      en: [
        "Water is the working medium of a boiler, and its quality directly determines the boiler's lifespan. Poor water treatment causes two main enemies: **Scale** and **Corrosion**.",
        "**Understanding Scale:** Scale is formed by calcium and magnesium ions (hardness) precipitating on hot surfaces. Even a thin layer of scale (1mm) can reduce heat transfer efficiency by 5-10% and cause overheating of the metal, leading to tube bursts.",
        "**The Role of Softeners:** A water softener removes hardness ions. You must check the brine tank regularly and test the output water hardness daily.",
        "**Controlling pH and Oxygen:** Dissolved oxygen in water causes pitting corrosion. We use a deaerator or chemical oxygen scavengers (like sulfite) to remove it. The pH should typically be maintained between 10.5 and 11.5 to create a protective film on the metal surface.",
        "Invest in a good water treatment system鈥攊t is much cheaper than replacing a boiler."
      ],
      zh: [
        "姘存槸閿呯倝鐨勫伐浣滀粙璐紝鍏惰川閲忕洿鎺ュ喅瀹氫簡閿呯倝鐨勫鍛姐€傜碂绯曠殑姘村鐞嗕細瀵艰嚧涓や釜涓昏鏁屼汉锛?*缁撳灑**鍜?*鑵愯殌**銆?,
        "**浜嗚В缁撳灑锛?* 鍨㈡槸鐢遍挋闀佺瀛愶紙纭害锛夊湪鐑〃闈㈡矇娣€褰㈡垚鐨勩€傚嵆浣挎槸涓€灞傝杽钖勭殑鍨紙1姣背锛夛紝涔熶細浣夸紶鐑晥鐜囬檷浣?-10%锛屽苟瀵艰嚧閲戝睘杩囩儹锛屽紩鐖嗙銆?,
        "**杞寲姘磋澶囩殑浣滅敤锛?* 杞按鍣ㄧ敤浜庡幓闄ょ‖搴︾瀛愩€傛偍蹇呴』瀹氭湡妫€鏌ョ洂绠憋紝骞舵瘡澶╂祴璇曞嚭姘寸‖搴︺€?,
        "**鎺у埗pH鍊煎拰姘ф皵锛?* 姘翠腑鐨勬憾瑙ｆ哀浼氬鑷寸偣铓€銆傛垜浠娇鐢ㄩ櫎姘у櫒鎴栧寲瀛﹂櫎姘у墏锛堝浜氱～閰哥洂锛夋潵鍘婚櫎瀹冦€俻H鍊奸€氬父搴斾繚鎸佸湪10.5鍒?1.5涔嬮棿锛屼互渚垮湪閲戝睘琛ㄩ潰褰㈡垚淇濇姢鑶溿€?,
        "鎶曡祫涓€濂楀ソ鐨勬按澶勭悊绯荤粺鈥斺€旇繖姣旀洿鎹竴鍙伴攨鐐夎渚垮疁寰楀銆?
      ]
    }
  },
  {
    id: 4,
    title: {
      en: "Gas Burner Troubleshooting: Why Your Boiler Won't Ignite",
      zh: "鐕冩皵鐕冪儳鍣ㄦ晠闅滄帓闄わ細涓轰粈涔堟偍鐨勯攨鐐夋棤娉曠偣鐏?
    },
    date: "2024-02-25",
    summary: {
      en: "A deep dive into burner malfunctions. Analyzing the program controller sequence, air pressure switches, and gas valve issues.",
      zh: "娣卞叆鎺㈣鐕冪儳鍣ㄦ晠闅溿€傚垎鏋愮▼搴忔帶鍒跺櫒搴忓垪銆侀鍘嬪紑鍏冲拰鐕冩皵闃€闂銆?
    },
    category: {
      en: "Troubleshooting",
      zh: "鏁呴殰鎺掗櫎"
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
        "鐕冪儳鍣ㄦ槸鐕冩皵閿呯倝鐨勫績鑴忋€傚綋瀹冨彂鐢熸晠闅滄椂锛岀敓浜у氨浼氬仠姝€備互涓嬫槸甯歌鐐圭伀鏁呴殰鐨勬妧鏈垎鏋愶細",
        "**1. 鍓嶅惞鎵晠闅滐細** 濡傛灉椋庢満涓嶅惎鍔紝妫€鏌ョ數鏈烘帴瑙﹀櫒銆傚鏋滈鏈鸿繍琛屼絾绋嬪簭鍋滄锛屾鏌?*椋庡帇寮€鍏?*銆傚畠纭鏈夎冻澶熺殑绌烘皵杩涜鐕冪儳銆傚鏋滅儫閬撳牭濉炴垨椋庢満鑴忔薄锛屾寮€鍏冲皢涓嶄細闂悎銆?,
        "**2. 鏈夌偣鐏伀鑺变絾鏃犵伀鐒帮細** 鍚埌鐏姳澹颁絾娌℃湁鐏€傛鏌ョ噧姘旂數纾侀榾銆傚畠浠墦寮€浜嗗悧锛熸湁鐕冩皵鍘嬪姏鍚楋紵濡傛灉鏈夛紝鍙兘鏄偣鐏彉鍘嬪櫒寰急锛屾垨鐢垫瀬闂撮殭涓嶆纭紙閫氬父涓?-5姣背锛夈€?,
        "**3. 鐏劙鍚姩鍚庣珛鍗崇唲鐏細** 杩欓€氬父鏄伀鐒版娴嬮棶棰樸€?*绱绾夸紶鎰熷櫒鎴栫數绂绘**鍙兘鑴忔薄鎴栦綅缃笉姝ｇ‘銆傚畠蹇呴』鍦ㄥ畨鍏ㄦ椂闂村唴锛堥€氬父2-3绉掞級\"鐪嬪埌\"鐏劙銆?,
        "**涓撳鎻愮ず锛?* 鍗冧竾涓嶈鍦ㄦ湭璋冩煡鍘熷洜鐨勬儏鍐典笅鍙嶅鎸夊浣嶆寜閽紝鍥犱负杩欏彲鑳戒細鍦ㄧ倝鑶涘唴绉仛鏈噧鐑х殑鐕冩皵銆?
      ]
    }
  },
  {
    id: 5,
    title: {
      en: "Winter Boiler Maintenance: Preventing Freeze Damage",
      zh: "鍐閿呯倝缁存姢锛氶槻姝㈠喕缁撴崯鍧?
    },
    date: "2024-01-10",
    summary: {
      en: "Winter poses unique challenges for industrial boilers. Learn how to protect your system from freezing temperatures and seasonal load spikes.",
      zh: "鍐缁欏伐涓氶攨鐐夊甫鏉ョ嫭鐗规寫鎴樸€備簡瑙ｅ浣曚繚鎶ゆ偍鐨勭郴缁熷厤鍙楀啺鍐绘俯搴﹀拰瀛ｈ妭鎬ц礋鑽烽珮宄扮殑褰卞搷銆?
    },
    category: {
      en: "Maintenance Guide",
      zh: "缁存姢鎸囧崡"
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
        "瀵逛簬瀹夎鍦ㄦ棤渚涙殩閿呯倝鎴挎垨瀹ゅ鐜鐨勯攨鐐夛紝鍐鏄竴涓嵄闄╂椂鏈熴€傚喕缁撶殑绠￠亾鍙兘浼氱牬瑁傦紝閫犳垚骞挎硾鐨勬崯鍧忋€?,
        "**鍐闃叉姢鍏抽敭姝ラ锛?*",
        "1. **淇濇俯锛?* 妫€鏌ヨ捀姹藉拰鍐峰嚌姘寸閬撲笂鐨勬墍鏈変繚娓╁眰銆傜珛鍗充慨澶嶄换浣曠牬鎹燂紝浠ラ槻姝㈢儹閲忔崯澶便€?,
        "2. **浼寸儹锛?* 纭繚瀹ゅ姘寸绾夸笂鐨勭數浼寸儹鍔熻兘姝ｅ父銆傛鏌ユ帶鍒舵亽娓╁櫒銆?,
        "3. **澶囩敤閿呯倝锛?* 濡傛灉鎮ㄦ湁鏈繍琛岀殑澶囩敤閿呯倝锛屽繀椤讳繚鎸佹俯鏆栵紙浣跨敤鍔犵儹鐩樼鎴栧畾鏈熺偣鐏級锛屾垨瀹屽叏鎺掔┖浠ラ槻姝㈠喕缁撱€?,
        "4. **鎺掓按锛?* 濡傛灉鍋囨湡鍋滄満锛岃瀹屽叏鎺掔┖閿呯倝銆傛墦寮€鎵€鏈夋帓姘斿彛鍜屾帓姘村彛锛岀‘淇濈鍐呮棤娈嬬暀姘淬€?,
        "5. **鐕冩枡妫€鏌ワ細** 瀵逛簬鐕冩补閿呯倝锛岀‘淇濇偍鐨勭噧娌瑰叿鏈変綆鍑濈偣锛屾垨娌圭鍔犵儹鍣ㄥ伐浣滄甯革紝浠ュ厤娌瑰湪鍐风绾夸腑缁撹湣銆?
      ]
    }
  },
  {
    id: 6,
    title: {
      en: "Safety First: Industrial Boiler Operation Safety Protocols",
      zh: "瀹夊叏绗竴锛氬伐涓氶攨鐐夋搷浣滃畨鍏ㄨ绋?
    },
    date: "2023-12-05",
    summary: {
      en: "Safety is non-negotiable. This article outlines the essential safety protocols every boiler operator must follow to prevent accidents.",
      zh: "瀹夊叏鏄笉鍙Ε鍗忕殑銆傛湰鏂囨杩颁簡姣忎釜閿呯倝鎿嶄綔鍛樺繀椤婚伒瀹堢殑鍩烘湰瀹夊叏瑙勭▼锛屼互闃叉浜嬫晠鍙戠敓銆?
    },
    category: {
      en: "Safety",
      zh: "瀹夊叏"
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
        "閿呯倝浜嬫晠鍙兘鏄伨闅炬€х殑銆傚畨鍏ㄨ绋嬩笉浠呬粎鏄鍒欙紝瀹冧滑鏄敓瀛樻墍蹇呴渶鐨勩€傛瘡涓伐鍘傞兘搴旀湁鏄庣‘鐨勫畨鍏ㄧ鐞嗕綋绯汇€?,
        "**鍏抽敭瀹夊叏瑙勫垯锛?*",
        "1. **缁濅笉缁曡繃瀹夊叏鑱旈攣锛?* 缁濅笉瑕佺煭鎺ヤ綆姘翠綅鍒囨柇鎴栧帇鍔涘紑鍏虫潵缁存寔閿呯倝杩愯銆傝繖鏄鑷寸垎鐐哥殑涓昏鍘熷洜銆?,
        "2. **瀹氭湡瀹夊叏闃€娴嬭瘯锛?* 瀹夊叏娉勬斁闃€鏄渶鍚庝竴閬撻槻绾裤€傛瘡鏈堣繘琛屼竴娆℃墜鍔ㄥ紑鍚祴璇曪紙濡傛灉鍘嬪姏鍏佽锛夛紝姣忓勾杩涜涓€娆′笓涓氭牎鍑嗐€?,
        "3. **鍩硅锛?* 鍙湁鎸佽瘉浜哄憳鎵嶈兘鎿嶄綔閿呯倝銆傚繀椤诲畾鏈熻繘琛岀揣鎬ュ仠鏈虹▼搴忓煿璁€?,
        "4. **淇濇寔閿呯倝鎴挎竻娲侊細** 涓嶈鍦ㄩ攨鐐夋埧鍐呭瓨鏀炬槗鐕冩潗鏂欙紙娌规紗銆佸寲瀛﹀搧銆佺焊鏉匡級銆備繚鎸佸嚭鍙ｇ晠閫氥€?,
        "5. **杩愯鏃ュ織锛?* 缁存姢姣忔棩杩愯鍙傛暟鏃ュ織銆傜儫姘旀俯搴︽垨鍘嬮檷鐨勭獊鐒跺彉鍖栭€氬父棰勭ず鐫€鍗冲皢鍙戠敓鐨勯棶棰樸€?,
        "瀹夊叏鏄瘡涓汉鐨勮矗浠汇€?
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

