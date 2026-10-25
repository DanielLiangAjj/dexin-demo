# Dexin — Website Redesign Demo

A modern, bilingual (English / 中文) marketing site for **Suzhou Dexin Advanced Ceramics Co., Ltd.**
Built as static HTML/CSS/JS — no build step, hosts anywhere.

Design direction (Oct 2026 redesign): **Production rail**. The home page opens on one film-strip rail of square frames that plays the whole making of a filter, from raw materials and the coating line through the 1,600 °C shuttle kilns, the lab and the cartons to shipment and the customer's pour, using Dexin's own photos and factory video. The visitor can also drag it or step through it. The square filter tile is the one motif (frames, photo masks, buttons, bullets, the block-built footer wordmark). Theme: navy + white with blue only on actions, square corners, one typeface (Archivo, condensed for headings).

## Run it locally

```bash
cd dexin-demo
python3 -m http.server 8137
# open http://localhost:8137
```

## Pages

| Page | File | Notes |
|------|------|-------|
| Home | `index.html` | **Production rail** (auto-playing, draggable, keyboard and button controls), the three product lines as a photo-bullet catalogue, a "which filter for your metal?" picker, industries, certificate board, case studies, inline quote form |
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

## Swap in a higher-resolution factory video

The hero uses `assets/video/factory.mp4` (the clip supplied by the client, 640×368). To upgrade, replace that file (keep it short, muted, ideally ≥1080p) — no code change needed. The poster is `assets/img/site/factory_building.jpg`.

## Inquiry / RFQ form

Connected to **Web3Forms** (key in `assets/js/data.js` → `forms.web3forms_key`, delivers to dexintc@163.com), with a plain form-POST fallback when fetch is blocked. The WhatsApp buttons deep-link to `wa.me/8613776067838`.

## SEO / AI-discoverability (GEO)

On-page: bilingual titles/descriptions/keywords per page, canonical URLs on **szdexintc.com** (CNAME), Open Graph cards, JSON-LD (Organization + WebSite + FAQ on the home page, per-product Product schema on detail pages), `sitemap.xml` with all product URLs, `robots.txt`, `llms.txt` for AI crawlers, Baidu-friendly metas, CSP security headers, Baidu Tongji + GoatCounter analytics.

**Off-page — the part that actually gets the company recommended by AI assistants / search engines** (no code involved):
1. Point the real DNS at this site (CNAME file is set to `szdexintc.com`) and verify + submit the sitemap in **Baidu 站长平台**, **Bing Webmaster** and **Google Search Console**.
2. Build third-party authority: refresh listings on Alibaba International / Made-in-China / 1688, and ask the Jiangsu Foundry Association to link the site from its member directory. AI assistants answer "best X in China" questions from these authoritative third-party sources — not from a company's own site — so this step matters more than any on-page tag.
3. Expect months, not days: AI models cite what the established web says about the company.

## Performance in mainland China

- **No Google Fonts / zero third-party render-blocking requests** — Archivo (variable width/weight) is self-hosted woff2 (`assets/fonts/`), Chinese text uses system fonts (PingFang SC / Microsoft YaHei), the standard on Chinese sites.
- All photography recompressed (progressive JPEG, ≤1600 px, ~100–320 KB per image).
- Remaining lever is hosting: GitHub Pages is slow/unreliable from mainland China. When DNS for szdexintc.com moves to a China-hosted server (with ICP filing), copy these same files to its web root — no code changes needed.

## Editing content

All text / products / specs / certs / contact details live in **`assets/js/data.js`** (`window.DX`). Each string is bilingual (`en` / `zh`). Edit there to update the whole site — no HTML changes needed.

## Structure

```
index.html, products.html, product.html, industries.html, about.html, contact.html
assets/css/style.css        ← design system (navy / white, blue for actions, square corners)
assets/js/data.js           ← all content (bilingual)
assets/js/i18n.js           ← Spanish + Arabic dictionaries (keyed on the exact English strings)
assets/js/components.js      ← header, footer, i18n, quote modal, catalogue rows, cert board, production rail, entrances
assets/img/process           ← production-line, packing and after-the-pour photos from Dexin's brochures (used by the rail)
assets/img/products          ← real product photos + designed spec cards
assets/img/site              ← factory photos, banners, /certs (certificate scans), logo emblem
assets/video/factory.mp4     ← hero factory video
```
