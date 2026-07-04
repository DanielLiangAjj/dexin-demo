# Dexin — Website Redesign Demo

A modern, bilingual (English / 中文) marketing site for **Suzhou Dexin Advanced Ceramics Co., Ltd.**
Built as static HTML/CSS/JS — no build step, hosts anywhere.

Design direction: **Premium Hybrid** — cinematic factory-video hero → clean light body → dark "inside our factory" band. Theme: navy + blue + white, matching the company logo.

## Run it locally

```bash
cd dexin-demo
python3 -m http.server 8137
# open http://localhost:8137
```

## Pages

| Page | File | Notes |
|------|------|-------|
| Home | `index.html` | Factory **video hero**, stat band, 3 product lines, factory band, featured products, why-Dexin, industries, real certificates, case studies, CTA |
| Products | `products.html` | Filter by product line (Foam Filters / Insulation / Casting Auxiliaries); browse by industry |
| Product detail | `product.html?id=44` | Full **spec table** (real values), applications, Request Quote / Sample, related products |
| Industries | `industries.html` | Products mapped to iron, steel, non-ferrous and furnace/kiln segments |
| About | `about.html` | Company-written profile, values, capabilities, stats, real certificate gallery |
| Contact | `contact.html` | Company-photo hero, address, phone, **WhatsApp**, WeChat, inquiry form, map placeholder |

> The **News** and **Resources (技术资料)** pages were removed per client request. Technical specifications now live as detail tables on each product page.

## Product model (3 focused lines)

1. **泡沫陶瓷过滤器 / Ceramic Foam Filters** — SiC (gray), Alumina (white), Zirconia (gold), Mullite straight-hole. Real spec tables from the company's spec sheets.
2. **陶瓷防火隔热材料 / Ceramic Fireproof & Insulation Materials** — graded Regular (1000 °C) / High-Alumina (1300 °C) / Alumina (1500 °C) boards.
3. **铸造辅材 / Casting Auxiliaries** — filter-riser feeder, core support (chaplet), foundry coating, sand-core repair paste.

All product names, photos, spec tables, the company profile and the certificate scans are taken from Dexin's own brochure, spreadsheets and photography.

## Real assets vs. still-needed

**Real:** company name/address/phone/WhatsApp/fax/web, factory video, factory & production-line photos, all foam-filter photos + spec tables, insulation grade tables, real certificates (ISO 9001, Jiangsu Foundry Association director member, China Foundry "Gold Tripod" Award, AAA credit), logo emblem (favicon).

**Still needed from the client:**
- Real product photos for **铸造涂料 (foundry coating)** and **砂芯修补补膏 (sand-core repair paste)** — currently clean branded placeholders — plus their spec tables.
- A photo for **铸造芯撑 (core support)** — currently a close stand-in from the company's own product photography.
- Confirmation of the RoHS certificate scan (badge shown, no scan on file yet).

## Swap in a higher-resolution factory video

The hero uses `assets/video/factory.mp4` (the clip supplied by the client, 640×368). To upgrade, replace that file (keep it short, muted, ideally ≥1080p) — no code change needed. The poster is `assets/img/site/factory_building.jpg`.

## Connect the inquiry / RFQ form

The form (modal + contact page) validates and shows a success state but is **not connected**. To receive submissions with no server, point it at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com). The WhatsApp buttons already deep-link to `wa.me/8613776067838`.

## Editing content

All text / products / specs / certs / contact details live in **`assets/js/data.js`** (`window.DX`). Each string is bilingual (`en` / `zh`). Edit there to update the whole site — no HTML changes needed.

## Structure

```
index.html, products.html, product.html, industries.html, about.html, contact.html
assets/css/style.css        ← design system (navy / blue / white)
assets/js/data.js           ← all content (bilingual)
assets/js/components.js      ← header, footer, mega-menu, i18n, RFQ modal, cert cards, animations
assets/img/products          ← real product photos + designed spec cards
assets/img/site              ← factory photos, banners, /certs (certificate scans), logo emblem
assets/video/factory.mp4     ← hero factory video
```
