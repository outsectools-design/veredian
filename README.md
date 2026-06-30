# Veredian.AI — Corporate Website

**Sovereign Edge AI Vision Silicon**

## Overview

Production-ready corporate website for Veredian — a sovereign edge AI vision silicon company building the EDGE-VISION™ 1000 SoC.

## Tech Stack

- **HTML5** — Semantic markup, WCAG 2.1 AA accessible
- **CSS3** — Custom properties, 12-column grid, responsive design
- **Vanilla JavaScript** — No frameworks, no dependencies

## Pages

| Page | File | URL |
|------|------|-----|
| Home | `index.html` | `/` |
| Product | `product.html` | `/product` |
| Technology | `technology.html` | `/technology` |
| Markets | `markets.html` | `/markets` |
| Company | `company.html` | `/company` |
| Investors | `investors.html` | `/investors` |
| News | `news.html` | `/news` |
| Careers | `careers.html` | `/careers` |
| Contact | `contact.html` | `/contact` |
| Deck Request | `deck-request.html` | `/deck-request` |
| 404 | `404.html` | `/404` |

## File Structure

```
/
├── index.html ... 404.html      (11 HTML pages)
├── css/
│   ├── style.css                (Design system + components)
│   └── responsive.css           (Breakpoint overrides)
├── js/
│   ├── main.js                  (Navigation, forms, language toggle)
│   └── animations.js            (Fade-in, count-up, circuit background)
├── images/                      (Placeholder directory)
├── favicon/                     (Generated .ico files)
├── robots.txt
├── sitemap.xml
├── manifest.json
└── *.svg                        (13 official logo/brand assets)
```

## Design Tokens

- **Primary Navy:** `#0A1628`
- **Sovereign Teal:** `#00A89D`
- **Teal Hover:** `#00C4B8`
- **Fonts:** Barlow Condensed, Inter, JetBrains Mono (Google Fonts)
- **Grid:** 1280px max-width, 12-column, 8px base unit
- **Breakpoints:** sm 640px, md 768px, lg 1024px, xl 1280px

## Getting Started

1. Open `index.html` in a browser
2. All pages work as static HTML — no build step required
3. Forms are client-side validated; connect to backend (HubSpot/Airtable webhook) for production

## Brand Assets

Logo SVGs are in the project root. See `Veredian_Logo_Guidelines_v2.md` for usage rules. Never recreate, retype, recolour, stretch, rotate, or animate the logo.

## Accessibility

- WCAG 2.1 Level AA
- Semantic HTML5, proper heading hierarchy
- Full keyboard navigation with visible focus rings
- ARIA labels on interactive elements
- `prefers-reduced-motion` support

## SEO

- Unique meta title/description per page
- Open Graph + Twitter Card meta
- JSON-LD structured data (Organization, Product, BreadcrumbList)
- XML sitemap, robots.txt, canonical tags

---

**Veredian · veredian.ai · June 2026**
