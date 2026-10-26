/* =============================================================================
   Dexin — site content (bilingual EN / 中文).
   Product names, photos, spec tables, company profile and certificates are taken
   from Suzhou Dexin's own brochure, spec sheets and product photography.
   Edit values here to update the whole site — no HTML changes needed.
   ========================================================================== */
window.DX = {

  company: {
    en: "Suzhou Dexin Advanced Ceramics Co., Ltd.",
    zh: "苏州德鑫陶瓷新材料有限公司",
    short: "DEXIN",
    tagline_en: "Expert in ceramic refractory materials since 2005",
    tagline_zh: "专业陶瓷耐火材料制造商 · 始于2005",
    highland_en: "Building China's highland for industrial ceramic manufacturing",
    highland_zh: "打造中国工业陶瓷制造的高地"
  },

  contact: {
    tel: "0512-68182825",
    fax: "0512-68182835",
    hotline: "137 7606 7838",
    whatsapp: "+86 137 7606 7838",
    whatsapp_link: "https://wa.me/8613776067838",
    zip: "215011",
    email: "dexintc@163.com",
    web: "www.szdexintc.com",
    addr_en: "No. 65 Zijin Road, New District, Suzhou, Jiangsu, China",
    addr_zh: "中国江苏省苏州高新区紫金路65号",
    factory_en: "No. 60 Shende Road, Tongzhou Bay New Area, Nantong, Jiangsu, China",
    factory_zh: "江苏省南通市通州湾开发区盛德路60号"
  },

  /* ---- inquiry form: free access key from web3forms.com (create with
     dexintc@163.com, paste between the quotes). Empty = mailto fallback. ---- */
  forms: { web3forms_key: "38d59918-35c2-4adf-9893-f8d1058cb28c" },

  /* ---- headline numbers (real company figures) ---- */
  stats: [
    { v: 21,   suffix: "+",   en: "Years of manufacturing", zh: "年专注制造" },
    { v: 2,    suffix: "",    en: "Foam-ceramic production lines", zh: "条泡沫陶瓷生产线" },
    { v: 2000, suffix: " m³", en: "Annual foam-filter output", zh: "年产泡沫陶瓷过滤器" },
    { v: 1760, suffix: " °C", en: "Max. service temperature", zh: "最高使用温度" },
    { v: 40,   suffix: "+",   en: "Partner foundries & OEMs", zh: "合作铸造与制造企业" }
  ],

  /* ---- three product lines ---- */
  cats: [
    {
      slug: "filters",
      en: "Ceramic Foam Filters", zh: "泡沫陶瓷过滤器",
      tag_en: "Cleaner molten metal", tag_zh: "更洁净的金属液",
      desc_en: "Reticulated foam and straight-hole filters in silicon carbide, alumina, zirconia and mullite — trapping inclusions and slag for cleaner, higher-yield castings.",
      desc_zh: "碳化硅、氧化铝、氧化锆及莫来石网状泡沫与直孔过滤器，截留夹杂与熔渣，获得更洁净、高成品率的铸件。",
      icon: "filter"
    },
    {
      slug: "insulation",
      en: "Ceramic Fireproof & Insulation Materials", zh: "陶瓷防火隔热材料",
      tag_en: "Energy-saving heat protection", tag_zh: "节能防火隔热",
      desc_en: "Refractory ceramic fiber gaskets, vacuum-formed ceramic fiber products and machined parts for molten aluminium, rated from 1000 °C to 1450 °C.",
      desc_zh: "耐火陶瓷纤维垫片、真空成型耐火陶瓷纤维制品与铝液用机加工件，使用温度1000℃至1450℃。",
      icon: "layers"
    },
    {
      slug: "casting",
      en: "Casting Auxiliary Materials", zh: "铸造辅材",
      tag_en: "Better feeding & yield", tag_zh: "优化补缩与成品率",
      desc_en: "Insulating risers, core supports, foundry coatings and core-repair pastes that improve feeding, protect cores and raise casting yield.",
      desc_zh: "保温冒口、芯撑、铸造涂料与砂芯修补补膏，改善补缩、保护砂芯并提高铸件成品率。",
      icon: "cube"
    }
  ],

  /* ---- products ---- */
  products: [

    /* ===== Ceramic foam filters ===== */
    {
      id: 41, slug: "sic", cat: "filters",
      en: "SiC Ceramic Foam Filter", zh: "碳化硅泡沫陶瓷过滤器",
      blurb_en: "Gray silicon-carbide foam filter with excellent strength and thermal-shock resistance. Its three-dimensional reticulated structure traps oxide films and non-metallic inclusions in iron and copper melts — smoothing turbulent flow for cleaner castings and a lower reject rate.",
      blurb_zh: "灰色碳化硅泡沫过滤器，强度高、抗热震性优异。三维网状结构可截留铸铁、铜合金熔液中的氧化膜与非金属夹杂，平稳金属液流动，提高铸件洁净度、降低废品率。",
      img: "assets/img/products/sic.jpg",
      gallery: ["assets/img/products/sic.jpg", "assets/img/products/card_sic.jpg", "assets/img/products/sic_report_cover.jpg", "assets/img/products/sic_report_data.jpg", "assets/img/products/sic_report_photo.jpg"],
      specs: [
        { en: "Material", zh: "材质", v: "Silicon Carbide (SiC)" },
        { en: "Composition (tested)", zh: "化学成分（实测）", v: "SiC ≈70% · Al₂O₃ ≈15% · SiO₂ ≈14%" },
        { en: "Colour", zh: "颜色", v: "Gray / 灰" },
        { en: "Max. working temp.", zh: "最高使用温度", v: "≤ 1500 °C" },
        { en: "Porosity", zh: "气孔率", v: "80 – 90 %" },
        { en: "Pore density", zh: "孔径", v: "6 – 50 PPI" },
        { en: "Compressive strength", zh: "抗压强度", v: "≥ 1.5 MPa" },
        { en: "Volume density", zh: "体积密度", v: "≤ 0.5 g/cm³" },
        { en: "Thermal shock", zh: "抗热震", v: "1100 °C → RT, ≥ 3 cycles" },
        { en: "Dimensions", zh: "尺寸", v: "□30–500 / Ø30–500 mm · t 8–50 mm" },
        { en: "Application", zh: "适用", v: "Gray iron / ductile iron / copper alloy" }
      ],
      apps_en: ["Gray iron casting", "Ductile iron casting", "Copper & bronze", "Foundry gating systems"],
      apps_zh: ["灰铁铸造", "球墨铸铁", "铜及青铜合金", "铸造浇注系统"]
    },
    {
      id: 43, slug: "alo", cat: "filters",
      en: "Alumina Ceramic Foam Filter", zh: "氧化铝泡沫陶瓷过滤器",
      blurb_en: "White alumina foam filter engineered for the filtration and purification of aluminium and aluminium-alloy melts. Removes bulk inclusions and adsorbs fine particles to raise surface quality, microstructure and casting yield.",
      blurb_zh: "白色氧化铝泡沫过滤器，专用于铝及铝合金熔液的过滤净化。可去除大块夹杂并吸附微小颗粒，提升铸件表面质量、显微组织与成品率。",
      img: "assets/img/products/alo.jpg",
      gallery: ["assets/img/products/alo.jpg", "assets/img/products/card_alo.jpg"],
      specs: [
        { en: "Material", zh: "材质", v: "Alumina (Al₂O₃ 70–75%)" },
        { en: "Colour", zh: "颜色", v: "White / 白" },
        { en: "Max. working temp.", zh: "最高使用温度", v: "≤ 1200 °C" },
        { en: "Porosity", zh: "气孔率", v: "80 – 90 %" },
        { en: "Pore density", zh: "孔径", v: "6 – 60 PPI" },
        { en: "Compressive strength", zh: "抗压强度", v: "≥ 1.0 MPa" },
        { en: "Volume density", zh: "体积密度", v: "≤ 0.5 g/cm³" },
        { en: "Thermal shock", zh: "抗热震", v: "800 °C → RT, ≥ 3 cycles" },
        { en: "Dimensions", zh: "尺寸", v: "Ø10–500 / 50–581 mm · t 10–50 mm" },
        { en: "Application", zh: "适用", v: "Aluminium & aluminium-alloy melts" }
      ],
      apps_en: ["Aluminium alloy casting", "Permanent-mould casting", "Automotive aluminium", "Foil & extrusion stock"],
      apps_zh: ["铝合金铸造", "金属型铸造", "汽车铝部件", "铝箔与挤压坯料"]
    },
    {
      id: 44, slug: "zro", cat: "filters",
      en: "Zirconia Ceramic Foam Filter", zh: "氧化锆泡沫陶瓷过滤器",
      blurb_en: "Gold zirconia foam filter (ZrO₂ ≥ 97%) with very high strength and thermal-shock resistance to about 1760 °C. Effectively removes non-metallic particles, slag and refractory debris from steel pours, converting turbulent flow into stable laminar flow.",
      blurb_zh: "金黄色氧化锆泡沫过滤器（ZrO₂≥97%），强度极高、抗热震，可耐约1760℃。有效去除钢液中的非金属颗粒、渣及耐火碎屑，将紊流转化为稳定层流。",
      img: "assets/img/products/zro.jpg",
      gallery: ["assets/img/products/zro.jpg", "assets/img/products/card_zro.jpg"],
      specs: [
        { en: "Material", zh: "材质", v: "Zirconia (ZrO₂ ≥ 97%)" },
        { en: "Colour", zh: "颜色", v: "Gold / 黄" },
        { en: "Max. working temp.", zh: "最高使用温度", v: "≤ 1700 °C (peak ~1760 °C)" },
        { en: "Porosity", zh: "气孔率", v: "75 – 85 %" },
        { en: "Pore density", zh: "孔径", v: "6 – 50 PPI" },
        { en: "Compressive strength", zh: "抗压强度", v: "≥ 2.5 MPa" },
        { en: "Volume density", zh: "体积密度", v: "≤ 1.5 g/cm³" },
        { en: "Thermal shock", zh: "抗热震", v: "1300 °C → RT, ≥ 3 cycles" },
        { en: "Dimensions", zh: "尺寸", v: "Ø30–300 / 30–300 mm · t 15–50 mm" },
        { en: "Application", zh: "适用", v: "Stainless steel / carbon steel / superalloy" }
      ],
      apps_en: ["Carbon & stainless steel", "Nickel-based superalloys", "Investment casting", "High-value steel castings"],
      apps_zh: ["碳钢与不锈钢", "镍基高温合金", "熔模精密铸造", "高价值钢铸件"]
    },
    {
      id: 55, slug: "mullite", cat: "filters",
      en: "Mullite Straight-Hole Ceramic Filter", zh: "莫来石直孔陶瓷过滤器",
      blurb_en: "Extruded straight-hole (cellular) mullite filter with high mechanical strength and consistent flow. The straight-through channels rectify the melt into smooth laminar flow, suited to automated pouring lines and larger castings.",
      blurb_zh: "挤压成型莫来石直孔（蜂窝）过滤器，机械强度高、流量稳定。直通孔道将金属液整流为平稳层流，适合自动化浇注线与较大铸件。",
      img: "assets/img/products/mullite.jpg",
      gallery: ["assets/img/products/mullite.jpg", "assets/img/products/card_mullite.jpg"],
      specs: [
        { en: "Material", zh: "材质", v: "Mullite" },
        { en: "Colour", zh: "颜色", v: "White / 白" },
        { en: "Max. working temp.", zh: "最高使用温度", v: "≤ 1500 °C" },
        { en: "Porosity", zh: "气孔率", v: "53 – 60 %" },
        { en: "Aperture", zh: "孔径", v: "Ø1.0 – 5.0 mm" },
        { en: "Compressive strength", zh: "抗压强度", v: "≥ 18 MPa" },
        { en: "Volume density", zh: "体积密度", v: "0.6 – 0.9 g/cm³" },
        { en: "Al₂O₃ content", zh: "Al₂O₃含量", v: "≥ 55 %" },
        { en: "Dimensions", zh: "尺寸", v: "Ø30–200 / 30–200 mm · t 5–35 mm" },
        { en: "Application", zh: "适用", v: "Aluminium / copper / ferro-alloy casting" }
      ],
      apps_en: ["Large iron castings", "Automated pouring lines", "Aluminium & copper", "Ferro-alloy casting"],
      apps_zh: ["大型铸铁件", "自动化浇注线", "铝与铜合金", "铁合金铸造"]
    },

    /* ===== Ceramic fireproof & insulation materials =====
       Names, grades and figures follow Dexin's own brochure spread and the
       "Ceramic Fiber Processing Parts" / "Machined Parts for Molten Aluminum" datasheets. */
    {
      id: 91, slug: "fiber-gasket", cat: "insulation",
      en: "Refractory Ceramic Fiber Gasket", zh: "耐火陶瓷纤维垫片",
      blurb_en: "Ceramic fiber gaskets for high-temperature sealing and insulation: low thermal conductivity and heat storage, a seal that expands at temperature, high compressive strength and flexibility, strong thermal-shock resistance and low gas evolution. Easy to fit, no clean-up, RoHS compliant with no hazardous substances.",
      blurb_zh: "低导热系数、低蓄热、高温自膨胀密封、高抗压强度、高柔韧性、高耐受热冲击、低发气量、便于安装、不用清理。材质符合ROHS指令，不含有害物质。",
      img: "assets/img/products/fiber_gasket.jpg",
      gallery: ["assets/img/products/fiber_gasket.jpg"],
      temp: "1110–1430 °C",
      specs: [
        { en: "Types", zh: "产品品种", v: "HP · HA · ZA" },
        { en: "Working temp.", zh: "使用温度", v: "HP ≥ 1110 °C · HA ≥ 1350 °C · ZA ≥ 1430 °C" },
        { en: "RoHS", zh: "RoHS", v: { en: "Compliant, no hazardous substances", zh: "符合ROHS指令，不含有害物质" } },
        { en: "Shapes", zh: "形状", v: { en: "Rings, flanged gaskets and discs, cut to drawing", zh: "环形、法兰垫片、圆片，可按图纸加工" } }
      ],
      apps_en: ["High-temperature expansion seals", "Heat and vibration insulation of hot parts", "Flame-retardant electrical insulation", "Catalytic-converter sound and heat insulation", "Sealing foundry pouring cups", "Any high-temperature seal"],
      apps_zh: ["高温膨胀密封", "高温部件隔热减振", "电气材料阻燃绝缘隔热", "三元催化器消音隔热", "铸造浇注口密封", "需高温密封的场合"]
    },
    {
      id: 92, slug: "fiber-vacuum", cat: "insulation",
      en: "Vacuum-Formed Refractory Ceramic Fiber Products", zh: "真空成型耐火陶瓷纤维制品",
      blurb_en: "Ceramic fiber parts vacuum-formed to complex shapes, such as the stoppers and pouring tubes used in aluminium casting. Light, with low heat storage and good insulation, high temperature resistance and good thermal-shock resistance, at a low cost in use.",
      blurb_zh: "可制成各种复杂形状，如铸铝行业用的陶瓷纤维堵头、浇管等。重量轻、低蓄热保温性能好、耐温度高、抗热振性好，使用成本低。",
      img: "assets/img/products/fiber_vacuum.jpg",
      gallery: ["assets/img/products/fiber_vacuum.jpg", "assets/img/products/fiber_vacuum_yellow.jpg"],
      temp: "1000–1350 °C",
      specs: [
        { en: "Types", zh: "产品品种", v: "STD · JHP · JHA · JZA" },
        { en: "Working temp.", zh: "使用温度", v: "1000 – 1350 °C" },
        { en: "Bulk density", zh: "体积密度", v: "200 – 400 kg/m³ (±15%)" },
        { en: "Sizes", zh: "规格", v: { en: "Custom sizes for large orders", zh: "大批量可定制尺寸" } }
      ],
      grades: {
        title_en: "Ceramic fiber processing parts", title_zh: "陶瓷纤维制品性能",
        cols: ["STD", "JHP", "JHA", "JZA"],
        names_en: ["Regular", "High purity", "High alumina", "Zirconium-containing"],
        names_zh: ["普通型", "高纯型", "高铝型", "含锆型"],
        rows: [
          { en: "Classification temp. (°C)", zh: "分类温度（℃）", v: ["1100", "1260", "1350", "1400"] },
          { en: "Working temp. (°C)", zh: "使用温度（℃）", v: ["1000", "1100", "1200", "1350"] },
          { en: "Bulk density (kg/m³, ±15%)", zh: "体积密度（kg/m³，±15%）", v: ["200–400", "200–400", "200–400", "200–400"] },
          { en: "Heating line shrinkage, 24 h (%)", zh: "加热线收缩，24 h（%）", v: ["≤ 4 (1000 °C)", "≤ 4 (1260 °C)", "≤ 4 (1350 °C)", "≤ 4 (1400 °C)"] },
          { en: "Al₂O₃ (%)", zh: "Al₂O₃（%）", v: ["45", "≥ 55", "54", "45"] },
          { en: "SiO₂ (%)", zh: "SiO₂（%）", v: ["53", "40–45", "45", "38"] },
          { en: "ZrO₂ (%)", zh: "ZrO₂（%）", v: ["–", "–", "–", "15"] },
          { en: "Fe₂O₃ (%)", zh: "Fe₂O₃（%）", v: ["≤ 1.20", "≤ 0.30", "≤ 0.20", "≤ 0.20"] },
          { en: "K₂O + Na₂O (%)", zh: "K₂O + Na₂O（%）", v: ["≤ 0.5", "≤ 0.25", "≤ 0.20", "≤ 0.20"] }
        ]
      },
      apps_en: ["Burner parts for petrochemical cracking furnaces", "Peep-hole parts for industrial kilns", "Riser-sleeve parts for ferrous and non-ferrous metallurgy", "Insulated fittings for heat pipelines", "Stoppers, launders and immersion tubes for the aluminium industry", "Complex insulating shapes"],
      apps_zh: ["石油化工裂变炉用烧咀组件", "各种工业窑炉中的观察孔组件", "有色、黑色冶金行业用的冒口套组件", "热力管道绝热保温管件", "铝工业用的塞头、铝水槽和浸入管", "绝热保温工程用的各种复杂几何形状套件"]
    },
    {
      id: 93, slug: "fiber-machined", cat: "insulation",
      en: "Machined Parts for Molten Aluminum", zh: "铝液用陶瓷纤维机加工件",
      blurb_en: "Ceramic fiber boards and parts machined from them for molten-aluminium service, in seven grades from the regular Std type (1000 °C working temperature) to polycrystalline alumina (1450 °C). Boards up to 1200 × 1000 mm, 10–50 mm thick.",
      blurb_zh: "用于铝液工况的陶瓷纤维板及其机加工件，共七个型号，从普通型Std（使用温度1000℃）到多晶氧化铝型（1450℃）。板材最大1200×1000 mm，厚度10–50 mm。",
      img: "assets/img/products/fiber_machined.jpg",
      gallery: ["assets/img/products/fiber_machined.jpg"],
      temp: "1000–1450 °C",
      specs: [
        { en: "Types", zh: "产品品种", v: { en: "Std · Hp · Ha · St · Za-1 · Za-2 · Polycrystalline alumina", zh: "Std · Hp · Ha · St · Za-1 · Za-2 · 多晶氧化铝" } },
        { en: "Working temp.", zh: "使用温度", v: "1000 – 1450 °C" },
        { en: "Colour", zh: "颜色", v: { en: "White", zh: "白色" } },
        { en: "Board sizes", zh: "板材规格", v: "1200×1000 / 900×600 / 600×400 mm · t 10–50 mm" }
      ],
      grades: {
        title_en: "Grades", title_zh: "型号性能",
        cols: ["Std", "Hp", "Ha", "St", "Za-1", "Za-2", { en: "Polycrystalline alumina", zh: "多晶氧化铝" }],
        names_en: ["Regular", "High purity", "High alumina", "Microcrystal", "Zirconium-containing", "Mixed", "Mixed"],
        names_zh: ["普通型", "高纯型", "高铝型", "微晶型", "含锆型", "混合型", "混合型"],
        rows: [
          { en: "Classification temp. (°C)", zh: "分类温度（℃）", v: ["1100", "1260", "1350", "1400", "1400", "1400", "1800"] },
          { en: "Working temp. (°C)", zh: "使用温度（℃）", v: ["1000", "1100", "1200", "1250", "1300", "1350", "1450"] },
          { en: "Bulk density (kg/m³, ±15%)", zh: "体积密度（kg/m³，±15%）", v: ["250–350", "250–350", "300–350", "300–350", "300–350", "300–350", "300–350"] },
          { en: "Heating line shrinkage, 24 h (%)", zh: "加热线收缩，24 h（%）", v: ["≤ 4 (1150 °C)", "≤ 4 (1260 °C)", "≤ 4 (1350 °C)", "≤ 4 (1350 °C)", "≤ 4 (1350 °C)", "≤ 4 (1400 °C)", "≤ 4 (1400 °C)"] },
          { en: "Thermal conductivity (W/m·K)", zh: "导热系数（W/m·K）", v: ["0.18 (1000 °C)", "0.19 (1100 °C)", "0.20 (1200 °C)", "0.20 (1200 °C)", "0.20 (1200 °C)", "0.22 (1200 °C)", "0.15 (1300 °C)"] },
          { en: "Al₂O₃ (%)", zh: "Al₂O₃（%）", v: ["45", "47", "54", "54", "≥ 38", "≥ 40", "78–92"] },
          { en: "SiO₂ (%)", zh: "SiO₂（%）", v: ["53", "52", "45", "45", "51", "42", "7–21"] },
          { en: "ZrO₂ (%)", zh: "ZrO₂（%）", v: ["–", "–", "–", "–", "2–10", "11–18", "–"] },
          { en: "Fe₂O₃ (%)", zh: "Fe₂O₃（%）", v: ["≤ 1.20", "≤ 0.30", "≤ 0.20", "≤ 0.20", "≤ 0.20", "≤ 0.1", "Trace"] }
        ]
      },
      apps_en: ["Molten-aluminium handling", "Aluminium foundries"],
      apps_zh: ["铝液输送与处理", "铸铝行业"]
    },

    /* ===== Casting auxiliary materials ===== */
    {
      id: 71, slug: "riser", cat: "casting",
      en: "Filter-Riser Insulating Feeder", zh: "过滤浇注保温一体冒口",
      blurb_en: "An insulating riser sleeve with a built-in ceramic foam filter — it filters and feeds in one step. The insulating body keeps feed metal liquid longer while the integrated filter cleans the pour, allowing smaller risers and higher casting yield.",
      blurb_zh: "内置陶瓷泡沫过滤器的保温冒口套——过滤与补缩一体完成。保温体延长补缩金属液态时间，集成过滤器净化金属液，可使用更小冒口并提高成品率。",
      img: "assets/img/products/riser.jpg",
      gallery: ["assets/img/products/riser.jpg"],
      specs: [
        { en: "Type", zh: "类型", v: "Insulating feeder + integrated filter" },
        { en: "Material", zh: "材质", v: "Insulating refractory ceramic" },
        { en: "Size range", zh: "规格范围", v: "Ø40 – Ø250 mm" },
        { en: "Function", zh: "功能", v: "Filters & feeds the casting in one" },
        { en: "Application", zh: "应用", v: "Iron / steel / non-ferrous casting" },
        { en: "Supply", zh: "供货", v: "Standard & custom geometries" }
      ],
      apps_en: ["Feeding & risering", "Inclusion control", "Yield improvement", "Iron & steel foundries"],
      apps_zh: ["补缩冒口", "夹杂控制", "成品率提升", "钢铁铸造厂"]
    },
    {
      id: 82, slug: "core-support", cat: "casting",
      en: "Casting Core Support (Chaplet)", zh: "铸造芯撑",
      blurb_en: "Refractory core supports (chaplets) that position and hold sand cores precisely during pouring, preventing core shift and fusing cleanly with the casting for accurate wall thickness.",
      blurb_zh: "耐火芯撑，在浇注过程中精确定位并支撑砂芯，防止芯子偏移，并与铸件良好熔合，保证壁厚精度。",
      img: "assets/img/products/corestay.jpg",
      gallery: ["assets/img/products/corestay.jpg"],
      specs: [
        { en: "Type", zh: "类型", v: "Core support / chaplet" },
        { en: "Material", zh: "材质", v: "Refractory ceramic / steel" },
        { en: "Function", zh: "功能", v: "Positions & supports sand cores" },
        { en: "Sizes", zh: "规格", v: "Custom to drawing" },
        { en: "Application", zh: "应用", v: "Iron / steel casting" },
        { en: "Supply", zh: "供货", v: "Standard & custom" }
      ],
      apps_en: ["Core support", "Wall-thickness control", "Complex cored castings", "Iron & steel foundries"],
      apps_zh: ["砂芯支撑", "壁厚控制", "复杂芯件铸造", "钢铁铸造厂"]
    },
    {
      id: 84, slug: "coating", cat: "casting",
      en: "Foundry Coating", zh: "铸造涂料",
      blurb_en: "Refractory foundry coatings for sand moulds and cores. They improve as-cast surface finish and resist metal penetration and burn-on, available in water- and alcohol-based formulations tuned to your alloy.",
      blurb_zh: "用于砂型与砂芯的耐火铸造涂料，改善铸态表面光洁度、抵抗金属渗透与粘砂，提供水基与醇基配方，可按合金定制。",
      img: "assets/img/products/coating.jpg", mark: "涂料",
      gallery: ["assets/img/products/coating.jpg"],
      specs: [
        { en: "Type", zh: "类型", v: "Refractory foundry coating" },
        { en: "Base", zh: "基料", v: "Water- / alcohol-based" },
        { en: "Function", zh: "功能", v: "Surface finish · anti-penetration" },
        { en: "Application", zh: "应用", v: "Sand moulds & cores" },
        { en: "Supply", zh: "供货", v: "Custom formulations" }
      ],
      apps_en: ["Mould & core coating", "Surface finish", "Anti burn-on", "Iron / steel / non-ferrous"],
      apps_zh: ["砂型砂芯涂敷", "表面光洁", "防粘砂", "铸铁/铸钢/有色"]
    },
    {
      id: 85, slug: "core-paste", cat: "casting",
      en: "Sand-Core Repair Paste", zh: "砂芯修补补膏",
      blurb_en: "Ready-to-use refractory paste for repairing damaged sand cores and moulds. It restores broken edges and fills defects, air- or oven-drying to a firm, castable surface that reduces scrap.",
      blurb_zh: "即用型耐火补膏，用于修补破损砂芯与砂型。可修复缺边、填补缺陷，风干或烘干后形成坚固可浇注表面，降低废品。",
      img: "assets/img/products/paste.jpg", mark: "补膏",
      gallery: ["assets/img/products/paste.jpg"],
      specs: [
        { en: "Type", zh: "类型", v: "Refractory repair paste" },
        { en: "Function", zh: "功能", v: "Repairs sand cores & moulds" },
        { en: "Cure", zh: "固化", v: "Air- or oven-dry" },
        { en: "Application", zh: "应用", v: "Foundry cores & moulds" },
        { en: "Supply", zh: "供货", v: "Standard & custom" }
      ],
      apps_en: ["Core & mould repair", "Defect filling", "Scrap reduction", "All foundry types"],
      apps_zh: ["芯型修补", "缺陷填补", "降低废品", "各类铸造厂"]
    }
  ],

  /* ---- industries ---- */
  industries: [
    {
      slug: "iron", en: "Iron & Ductile-Iron Foundries", zh: "铸铁与球墨铸铁", icon: "iron",
      img: "assets/img/site/melt_skimming.jpg",
      desc_en: "SiC filtration, insulating risers and core support for grey, ductile and malleable iron casting.",
      desc_zh: "用于灰铁、球墨与可锻铸铁的碳化硅过滤、保温冒口与芯撑。",
      pids: [41, 55, 71, 82]
    },
    {
      slug: "steel", en: "Steel & Investment Casting", zh: "铸钢与精密铸造", icon: "steel",
      img: "assets/img/site/melt_furnace.jpg",
      desc_en: "High-temperature zirconia filtration, feeding and core support for carbon, stainless and alloy steel.",
      desc_zh: "用于碳钢、不锈钢及合金钢的高温氧化锆过滤、补缩与芯撑。",
      pids: [44, 71, 82]
    },
    {
      slug: "nonferrous", en: "Aluminium & Copper Casting", zh: "铝与铜合金铸造", icon: "alu",
      img: "assets/img/site/castings_machined.jpg", pos: "center 72%",
      desc_en: "Alumina and mullite filtration plus insulating feeders for aluminium, copper and bronze.",
      desc_zh: "用于铝、铜及青铜的氧化铝与莫来石过滤及保温冒口。",
      pids: [43, 55, 71]
    },
    {
      slug: "thermal", en: "Furnaces, Kilns & Heat Treatment", zh: "工业炉窑与热处理", icon: "furnace",
      img: "assets/img/site/factory_kiln.jpg",
      desc_en: "Ceramic fiber gaskets, vacuum-formed fiber parts and boards rated 1000 °C to 1450 °C for furnace and kiln insulation.",
      desc_zh: "使用温度1000℃至1450℃的陶瓷纤维垫片、真空成型纤维制品与板材，用于工业炉窑隔热保温。",
      pids: [91, 92, 93]
    }
  ],

  /* ---- real certifications & honors (with certificate scans) ---- */
  certs: [
    { code: "ISO 9001", en: "Quality Management System", zh: "质量管理体系认证", img: "assets/img/site/certs/iso9001.jpg" },
    { code: "国检报告", en: "National Ceramics & Refractories QC Center — SiC filter test report", zh: "国家陶瓷与耐火材料质检中心检验报告（碳化硅）", img: "assets/img/site/certs/sic_report_cover.jpg" },
    { code: "理事单位", en: "Jiangsu Foundry Association — Director Member", zh: "江苏省铸造协会理事单位", img: "assets/img/site/certs/jsfa.jpg" },
    { code: "金鼎奖", en: "China Foundry Material “Gold Tripod” Award", zh: "全国铸造材料金鼎奖", img: "assets/img/site/certs/goldtripod.jpg" },
    { code: "AAA", en: "AAA Credit-rated Enterprise", zh: "AAA级信用企业", img: "assets/img/site/certs/aaa.jpg" },
    { code: "RoHS", en: "RoHS compliant — SGS tested (ceramic fibre insulation)", zh: "RoHS 有害物质合规 — SGS 检测（陶瓷纤维隔热材料）", img: "assets/img/site/certs/rohs.jpg" }
  ],

  /* ---- results / case studies ---- */
  cases: [
    {
      en_t: "35% fewer inclusion rejects at an iron foundry", zh_t: "某铸铁厂夹杂废品下降35%",
      en: "After switching to SiC foam filters in the gating system, a ductile-iron foundry cut inclusion-related rejects by over a third and improved machined-surface quality.",
      zh: "在浇注系统中改用碳化硅泡沫过滤器后，一家球墨铸铁厂的夹杂类废品下降超过三分之一，并改善了机加工表面质量。",
      pid: 41, img: "assets/img/site/foundry_sparks.jpg"
    },
    {
      en_t: "Higher yield with filter-riser feeders", zh_t: "一体冒口提升成品率",
      en: "Integrated filter-riser feeders kept feed metal liquid longer while cleaning the pour, allowing smaller risers and raising casting yield by an estimated 8–12%.",
      zh: "过滤保温一体冒口在净化金属液的同时延长补缩液态时间，可使用更小冒口，铸件成品率提升约8–12%。",
      pid: 71, img: "assets/img/site/hand_pour.jpg", pos: "center 62%"
    },
    {
      en_t: "Energy savings on a heat-treatment furnace", zh_t: "热处理炉节能改造",
      en: "Re-lining a heat-treatment furnace with graded ceramic insulation boards lowered shell temperature and measurably reduced gas consumption.",
      zh: "采用分级陶瓷隔热板对热处理炉重新做衬里后，炉壳温度下降，燃气消耗明显降低。",
      pid: 93, img: "assets/img/site/factory_kiln.jpg"
    }
  ]
};
