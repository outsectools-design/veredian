**VEREDIAN.AI**

_Website Development Brief_

Sovereign Edge AI Vision Platform · June 2026

| **Client**<br><br>Veredian | **Domain**<br><br>veredian.ai | **Date**<br><br>June 2026 |
| -------------------------- | ----------------------------- | ------------------------- |

# **1\. Design System**

This section defines the complete visual language for veredian.ai. All components, pages, and states must conform to these specifications. The aesthetic target is institutional and sovereign - aligned with defence-sector annual reports and sovereign infrastructure communications, not consumer SaaS.

## **1.1 Color Palette**

| **Color Name**       | **Hex** | **Usage**                                                                                                                                     |
| -------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary Navy**     | #0A1628 | Hero, navigation bar, footer, full-bleed dark sections                                                                                        |
| **Navy Mid**         | #0E2245 | Card backgrounds on dark sections, table headers, secondary dark surfaces                                                                     |
| **Sovereign Teal**   | #00A89D | ALL interactive elements: CTAs, links, active nav states, icon strokes, stat numbers, border accents. Also: the Veredian wordmark throughout. |
| **Teal Light**       | #00C4B8 | Hover state of teal interactive elements only                                                                                                 |
| **Premium Gold**     | #D4A843 | Milestone badges, "Series A" label - max 2 uses per page                                                                                      |
| **Light Background** | #F0F4F8 | Alternating table rows, card fills on white sections                                                                                          |
| **Mid Gray**         | #C8D4DF | Borders, dividers, secondary outlines                                                                                                         |
| **Dark Gray**        | #3A4A5C | All body text on white/light backgrounds                                                                                                      |
| **Silver**           | #A8B4C0 | Captions, footnotes, metadata, body text on dark backgrounds                                                                                  |
| **White**            | #FFFFFF | Content section backgrounds, cards on dark surfaces, primary text on navy                                                                     |

## **1.2 Typography**

| **Role**                | **Typeface**     | **Weight**   | **Size**   | **Notes**                                           |
| ----------------------- | ---------------- | ------------ | ---------- | --------------------------------------------------- |
| **Display / Hero H1**   | Barlow Condensed | 700 Bold     | 72-96px    | All-caps · Letter-spacing 0.04em · Line-height 0.95 |
| **Section Headings H2** | Barlow Condensed | 600 SemiBold | 40-52px    | Normal case · Line-height 1.05                      |
| **Sub-headings H3**     | Inter            | 600 SemiBold | 24-28px    | Normal case · Line-height 1.2                       |
| **Body Text**           | Inter            | 400 Regular  | 16-18px    | Line-height 1.65 · Max line width 68ch              |
| **Stat Numbers**        | Barlow Condensed | 700 Bold     | 48-72px    | Teal #00A89D · Stat strips only                     |
| **Stat Labels**         | Inter            | 500 Medium   | 13-14px    | Uppercase · Letter-spacing 0.08em                   |
| **Technical Spec**      | JetBrains Mono   | 400 Regular  | 14-15px    | Spec tables only                                    |
| **Navigation**          | Inter            | 500 Medium   | 15px       | Normal case                                         |
| **CTA Buttons**         | Inter            | 600 SemiBold | 15-16px    | All-caps · Letter-spacing 0.06em                    |
| **Arabic RTL**          | IBM Plex Arabic  | Match weight | Match size | Applied via lang="ar" switch                        |

## **1.3 Logo Specification**

The Veredian logo is The Meridian - a globe mark with prime meridian, equator arc, and latitude lines, with a bold V chevron inside. The wordmark VEREDIAN is rendered entirely in sovereign teal (#00A89D). See the separate Logo & Brand Identity Guidelines document for the complete logo system.

| **Primary mark**      | SVG - icon mark + VEREDIAN wordmark in teal. Horizontal lockup.                          |
| --------------------- | ---------------------------------------------------------------------------------------- |
| **Compact mark**      | SVG - icon mark + VEREDIAN wordmark. Smaller proportions for nav bar use.                |
| **Full brand lockup** | SVG - compact mark + tagline "SOVEREIGN EDGE AI VISION SILICON". Deck cover, letterhead. |
| **Standalone icon**   | SVG - globe mark only. Social avatar, favicon, chip package emboss.                      |
| **Filled variants**   | SVG - solid teal fill circle + white V. Social media and printed collateral.             |
| **Monochrome**        | SVG - all white (emboss/foil) + all navy (single-color print).                           |

| **Nav bar height** | 40px mark height in a 72px nav bar                                                |
| ------------------ | --------------------------------------------------------------------------------- |
| **Minimum size**   | 24px mark height - do not render smaller                                          |
| **Clearspace**     | 1× icon height on all four sides                                                  |
| **Favicon**        | 16×16px SVG - globe lines reduce to prime meridian + V only                       |
| **Social avatar**  | 400×400px PNG - filled teal circle variant                                        |
| **OG image**       | 1200×630px PNG - full brand lockup on navy #0A1628, centered                      |
| **File formats**   | SVG (primary) + PNG at 1×, 2×, 3× + ICO for favicon                               |
| **Wordmark color** | VEREDIAN wordmark is always teal (#00A89D) - dark and light variants              |
| **Do not**         | Stretch, rotate, recolor the globe, apply drop shadows, place on teal backgrounds |

## **1.4 Spacing & Layout Grid**

| **Base unit**         | 8px - all spacing values are multiples of 8px        |
| --------------------- | ---------------------------------------------------- |
| **Max content width** | 1280px - centered, auto margins                      |
| **Section padding**   | 120px top/bottom desktop · 64px tablet · 48px mobile |
| **Content columns**   | 12-column grid · 24px gutter desktop · 16px tablet   |
| **Card padding**      | 40px desktop · 24px mobile                           |
| **Component gap**     | 24px between sibling cards · 48px between sections   |
| **Nav height**        | 72px desktop · 60px mobile                           |
| **Breakpoints**       | sm 640px · md 768px · lg 1024px · xl 1280px          |

## **1.5 Component Specifications**

### **Navigation Bar**

- Position: sticky top, z-index 100
- Default state: background #0A1628 at 100% opacity
- At page top (hero visible): transparent, transitions to solid on 80px scroll
- Logo: Veredian compact mark (03_compact_dark.svg) · left-aligned · 40px height
- Nav links: centered · Inter 500 15px · color #A8B4C0 · hover #FFFFFF · active #00A89D
- Language toggle EN | AR: far right · 13px · color #A8B4C0
- Primary CTA "Request Briefing": right-most · teal filled button
- Mobile: hamburger → full-screen overlay · navy background · links stacked 32px apart

### **Buttons**

| Primary   | #00A89D fill · #FFFFFF text · border-radius 4px · padding 14px 32px · Inter 600 15px ALL-CAPS · letter-spacing 0.06em · hover #00C4B8 · active scale(0.98) |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Secondary | transparent · #00A89D border 1.5px · #00A89D text · hover: #00A89D fill + #FFFFFF text                                                                     |
| Ghost     | transparent · #FFFFFF border 1px · #FFFFFF text · dark sections only · hover rgba(255,255,255,0.1)                                                         |
| Disabled  | opacity 0.35 · pointer-events none                                                                                                                         |

### **Cards**

| Standard card | #FFFFFF · border 1px #C8D4DF · border-radius 8px · padding 32px · no drop shadow   |
| ------------- | ---------------------------------------------------------------------------------- |
| Dark card     | #0E2245 · border 1px rgba(200,212,223,0.2) · border-radius 8px · padding 32px      |
| Stat card     | #E8F8F7 · border 1px #00A89D · border-radius 8px · teal stat number + silver label |
| Hover         | translateY(-4px) · border-color #00A89D · 200ms ease                               |

### **Animation & Motion**

| Hero background | Animated SVG circuit topology: #00A89D at 6% opacity · slow drift · GPU-composited · prefers-reduced-motion fallback |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Stat counters   | Count-up on IntersectionObserver at 80% · 1200ms · easeOutCubic · integers only                                      |
| Card hover      | translateY(-4px) + teal border · 200ms ease · no bounce                                                              |
| Page sections   | Fade-in + translateY(20px→0) on scroll · 400ms · 80ms stagger · prefers-reduced-motion: skip transform               |
| Performance     | Total animation JS < 80KB gzipped · CSS transitions preferred                                                        |

## **1.6 Imagery Guidelines**

- No stock photos of people - no faces, no hands, no office environments
- Acceptable: chip die photography, circuit board macro, satellite dish, port/terminal aerial, pipeline infrastructure, server rack, smart city aerial at night
- No country flags, maps, or geographic markers in any image
- All images: object-fit cover · lazy loaded · WebP with JPEG fallback
- Hero: 3D chip die render or Spline.design interactive SoC diagram (teal data-flow lines on navy)
- Compression: max 200KB per hero image WebP · max 80KB per card thumbnail

## **1.7 Responsive Behaviour**

| Desktop ≥1280px    | 12-col grid · full nav · hero split layout · 3-4 col card grids                  |
| ------------------ | -------------------------------------------------------------------------------- |
| Laptop 1024-1279px | 12-col · full nav · hero split · 2-3 col grids                                   |
| Tablet 768-1023px  | 8-col · condensed nav · hero stacked · 2 col grids                               |
| Mobile <768px      | hamburger nav · hero stacked · 1 col · horizontal-scroll tables · CTA full-width |

# **2\. Sitemap & Navigation**

## **2.1 Pages**

| **Page**       | **URL**       | **Content**                                                          |
| -------------- | ------------- | -------------------------------------------------------------------- |
| **Home**       | /             | Hero · Problem · Product intro · Verticals · Advantages · Team · CTA |
| **Product**    | /product      | Chip spec · Platform roadmap · Compliance model                      |
| **Technology** | /technology   | Architecture moat · Competitive fit · Prior execution                |
| **Markets**    | /markets      | 10 verticals · Why sovereign silicon · Use cases                     |
| **Company**    | /company      | Who we are · Founding team · Execution model                         |
| **Investors**  | /investors    | Investment thesis · Programme structure · Deck request CTA           |
| **News**       | /news         | Press releases · Milestones · Partnerships \[CMS-managed\]           |
| **Careers**    | /careers      | Open roles · Why join \[CMS-managed\]                                |
| **Contact**    | /contact      | Enquiry form · Office locations                                      |
| **Deck Gate**  | /deck-request | NDA capture form → manual review → briefing delivery                 |
| **404**        | /404          | Custom branded error page                                            |

## **2.2 Navigation**

**Primary CTA:** Request Briefing → /deck-request (Primary teal button)

**Secondary CTA:** Contact → /contact (Ghost button, dark sections only)

**Language toggle:** EN | AR - far right, switches entire site to RTL Arabic layout

## **2.3 Footer**

- Left: Veredian logo (compact mark 03_compact_dark.svg) + tagline "Sovereign Edge AI Vision" + © 2026 Veredian. All rights reserved.
- Centre: Quick links - same as primary nav
- Right: Two office addresses (Middle East HQ · Engineering Centre)
- Social: LinkedIn only
- Background: #0A1628 · Top border: 1px #0E2245

**Legal disclaimer - implement verbatim in footer bottom bar (Inter 12px · color #A8B4C0)**

"This website is provided for informational purposes only and does not constitute an offer or solicitation of any securities in any jurisdiction. Forward-looking statements reflect management's current views and are subject to risks and uncertainties. Qualified investors and programme partners only."

## **2.4 404 Error Page**

**Background:** Full-viewport navy #0A1628

**Headline (H1 teal):** 404

**Sub-headline (white):** Page Not Found

**Body (silver):** The page you are looking for does not exist or has moved.

**CTA:** Return to Home → /

# **3\. Page Content**

All copy below is final and ready to implement. Labels in \[brackets\] are developer notes indicating component type and styling - not visible to users.

## **3.1 Home (/)**

### **Hero \[full-viewport navy · split layout · right side chip render\]**

\[Eyebrow - teal uppercase 13px\] SOVEREIGN EDGE AI SILICON · SERIES A 2026

\[H1 - Barlow Condensed 700 · white · 80px desktop / 48px mobile\]

Purpose-Built Silicon for Sovereign Infrastructure

\[Sub-headline - Inter 400 · silver · 20px · max-width 560px\]

When national security depends on the chip, the chip must be sovereign. EDGE-VISION™ 1000 - AI inference silicon your nation owns, audits, and controls.

\[Primary CTA\] Request the Briefing → /deck-request

\[Secondary CTA - ghost\] Explore the Product → /product

\[Right panel: 3D chip die render or Spline SoC diagram · teal data-flow lines on navy\]

### **Stat Bar \[full-width dark card · 4 stat blocks · count-up animation on load\]**

| **8 TOPS**<br><br>AI Engine | **< 5W**<br><br>Active Power | **15+ Yrs**<br><br>Lifecycle | **170+**<br><br>Combined Yrs Exp. |
| --------------------------- | ---------------------------- | ---------------------------- | --------------------------------- |

### **Problem Section \[white background · 6-card grid\]**

\[Eyebrow - teal\] THE CHALLENGE

\[H2\] Why Commercial Silicon Cannot Serve Sovereign Infrastructure

\[Body\] Every government operating critical infrastructure faces the same structural problem: the chips that power national surveillance, ports, pipelines, and border security are designed and controlled by foreign commercial entities. That creates unavoidable strategic risk.

| **Problem**                        | **Why It Matters**                                                                                                                                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Export-Control Risk**            | Foreign governments can restrict or revoke access to commercial silicon at any time - mid-programme, mid-deployment, mid-crisis. No national programme can accept a supply chain with an off-switch controlled by another sovereign. |
| **No Architecture Visibility**     | Closed firmware prevents the security audits mandated for critical national infrastructure. You cannot certify what you cannot inspect. You cannot defend what you do not understand.                                                |
| **Lifecycle Mismatch**             | Consumer and automotive chips are discontinued in 3-5 years. National infrastructure is planned and budgeted in decades. The lifecycle expectations are irreconcilable.                                                              |
| **No Data Sovereignty**            | Cloud-dependent inference violates national data residency law. Video feeds from sovereign infrastructure must be processed on-device, on-shore - not routed through foreign cloud.                                                  |
| **No Sovereign Security Stack**    | No hardware root of trust, no cryptographic key provisioning, no secure boot chain in any foreign commercial SoC designed for the sovereign price point and power envelope.                                                          |
| **Foreign Supply-Chain Fragility** | Single-supplier dependency and opaque firmware create unacceptable risk in national security and critical infrastructure deployments. When the vendor discontinues, the programme fails.                                             |

### **Platform Introduction \[navy background\]**

\[Eyebrow - teal\] THE SOLUTION

\[H2 - white\] One Silicon. Ten Mission-Critical Verticals.

\[Body - silver\] EDGE-VISION™ 1000 is purpose-designed sovereign edge AI vision silicon. The same chip - with the same sovereign security stack, the same 15-year lifecycle commitment, and the same IP ownership structure - serves ten distinct verticals across national infrastructure.

**Narrow approach - surveillance only**

Addresses a single vertical - camera and security use cases only

Limited platform value - each new vertical requires new silicon

Restricted addressable market - one use case, one procurement cycle

**Platform approach - 10 verticals ✓**

Same silicon, same firmware stack, same lifecycle across all 10 verticals

Surveillance · Oil & Gas · Ports · Transport · Defence · UAVs · Industrial · Robotics · Smart Mobility · Healthcare

10× larger addressable market - each new vertical adds incremental firmware NRE revenue, no new silicon tapeout

### **10 Verticals Grid \[white background · 5×2 grid desktop · 2-col tablet · 1-col mobile\]**

\[H2\] Built for Every Mission-Critical Environment

\[Body\] The same EDGE-VISION™ 1000 chip operates across all ten verticals. No new tapeout. Same sovereign IP. Same security stack.

| **Vertical**                  | **Applications**                                                       |
| ----------------------------- | ---------------------------------------------------------------------- |
| **Sovereign Surveillance**    | Cities · Borders · Ports · Airports · Critical facilities              |
| **Oil & Gas**                 | Pipelines · Offshore platforms · Refineries · UAV inspection           |
| **Intelligent Transport**     | ANPR · Traffic AI · Incident detection · Smart tolling                 |
| **Ports & Logistics**         | Container AI · Yard automation · Vessel monitoring · Terminal security |
| **Defence & Border Security** | Perimeter intelligence · ISR payloads · Border monitoring towers       |
| **UAV / Drone Vision**        | Surveillance UAVs · Infrastructure inspection · Patrol payloads        |
| **Industrial Machine Vision** | Factory quality · Refinery monitoring · Warehouse automation           |
| **Smart Transportation**      | Smart intersections · Roadside nodes · V2X communication               |
| **Robotics Vision**           | Security robots · Inspection robots · Logistics automation             |
| **Healthcare Monitoring**     | Hospital security · Patient monitoring · Fall detection                |

### **Four Sovereign Advantages \[light background · 2×2 card grid\]**

\[H2\] What "Sovereign Silicon" Actually Means

| **Advantage**                    | **What It Means for Your Programme**                                                                                                                                                                                                   |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sovereign IP Ownership**       | Every line of RTL, architecture, and firmware IP is assigned to a nationally incorporated entity. No foreign licensor holds rights over your national programme. No foreign government can compel a licence restriction.               |
| **Sovereign Security Stack**     | Hardware root of trust. Cryptographic key provisioning. Hardware-enforced isolation between secure and normal execution environments. Secure boot chain. Purpose-designed for national critical infrastructure certification.          |
| **15-Year Lifecycle Commitment** | National infrastructure programmes plan in decades. EDGE-VISION™ 1000 carries a 15+ year industrial-grade support commitment - a contractual programme commitment backed by the team and programme structure.                          |
| **National Compliance Ready**    | Critical infrastructure operators must recertify deployed systems annually. EDGE-VISION™ 1000 is designed for this cycle - firmware update, security audit, and recertification support built in as an annual compliance subscription. |

### **Team Credibility Strip \[navy background\]**

\[H2 - white\] ~170 Years of Combined Semiconductor Experience

\[Body - silver\] The Veredian founding team has built silicon at the frontier - from multi-thousand TOPS AI SoCs on leading-edge nodes to safety-certified automotive chips for global Tier-1 manufacturers.

|        | **Name**    | **Role**                    | **Prior Companies**                   |
| ------ | ----------- | --------------------------- | ------------------------------------- |
| **RK** | Ravi Koodli | CEO & Lead Founder          | STMicro · Qualcomm · Intel · Infineon |
| **SK** | Santosh K.  | Chief Architect             | STMicro · Intel                       |
| **GS** | Gopu S.     | Head of Software            | Cavium · Menlo Logic                  |
| **MG** | Muru G.     | Head of Product Engineering | Intel · Infineon                      |
| **PK** | Prasanna K. | Micro Architect             | Intel · Maxim                         |
| **BK** | Bela Kapoor | Foundry & Technology        | Intel · Qualcomm · STMicro            |

\[CTA\] Meet the full team → /company

### **Final Home CTA \[full-width navy · centered\]**

\[H2 - white · centered\] Veredian is currently raising its Series A.

\[Body - silver · centered\] We welcome engagement from sovereign investors, national programme offices, and qualified institutional partners.

\[Primary CTA · centered · large\] Request the Investment Briefing → /deck-request

## **3.2 Product (/product)**

### **Hero \[navy\]**

\[Eyebrow - teal\] EDGE-VISION™ 1000

\[H1 - white\] The Sovereign Edge AI Vision SoC

\[Body - silver\] Purpose-designed for governments that cannot accept foreign silicon risk. One chip. Ten verticals. Fifteen years.

\[Visual: SoC block diagram - CPU zone · AI Engine zone · ISP zone · Security zone - labelled, teal accent lines\]

### **Specification \[white background\]**

\[H2\] EDGE-VISION™ 1000 - Technical Specification

| **Specification**      | **Detail**                                                                                                                                      |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Process Node**       | GlobalFoundries 22FDX FD-SOI - sovereign manufacturing alignment, body-bias power efficiency, industrial-grade process maturity                 |
| **AI Engine**          | 8 TOPS INT8 - sized for simultaneous multi-stream inference: licence plate recognition, facial recognition, crowd analytics, perimeter security |
| **Vision Processing**  | HDR + low-light ISP · 4K capable · Up to 8× 1080p concurrent video streams                                                                      |
| **Power Envelope**     | < 5W active power · FD-SOI body-bias dynamic power management · Suitable for edge-deployed and UAV-embedded applications                        |
| **Sovereign Security** | Hardware root of trust · Secure boot · Cryptographic key provisioning · Hardware-enforced execution environment isolation                       |
| **Lifecycle**          | 15+ year industrial-grade support commitment - firmware maintenance, security updates, and recertification support                              |
| **Operating Range**    | Outdoor and industrial grade · Designed for harsh sovereign field environments                                                                  |
| **Compliance**         | Designed and built for annual recertification under national critical infrastructure protection frameworks globally                             |

### **Platform Roadmap \[light background · 3-column cards\]**

\[H2\] Three Generations. One IP Foundation.

| EV-1000 · Current Programme        | GF 22FDX · 8 TOPS · Sovereign firmware generation 1 Surveillance · Critical infrastructure · Industrial vision |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| EV-1000 Platform Extension · Gen 2 | Same GF 22FDX die - no new tapeout Oil & Gas · Defence · UAV vertical firmware packages                        |
| EV-3000 · Generation 3             | Next-generation process node · Advanced NPU Post Series B · Long-range sovereign platform                      |

### **Compliance Subscription Model \[navy background · 3-card grid\]**

\[H2 - white\] Built-In Compliance. Not an Afterthought.

| **Component**                      | **What Is Delivered**                                                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Annual Recertification Support** | Annual firmware recertification audit support - documentation, tooling, and engineering to maintain national CIP certification.        |
| **Security Patch Delivery**        | Sovereign-grade security patches validated against the certified firmware baseline before distribution on an annual cycle.             |
| **Firmware Update & Monitoring**   | Managed firmware update delivery with version control and remote monitoring. Full audit trails for national certification authorities. |

## **3.3 Technology (/technology)**

### **Hero \[navy\]**

\[Eyebrow - teal\] ARCHITECTURE & MOAT

\[H1 - white\] Why Replication Takes Years, Not Months

\[Body - silver\] The barriers to building a sovereign silicon programme are not technical features. They are structural, legal, and organisational commitments that cannot be acquired by writing a cheque.

### **Four Structural Barriers \[white · 2×2 card grid\]**

| **Structural Barrier**                | **Why Competitors Cannot Replicate It**                                                                                                                                                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sovereign IP Ownership Structure**  | All programme IP is assigned to a nationally incorporated entity at company formation - a legal and organisational commitment, not a feature that can be added retroactively.                                                                   |
| **Foundry Strategic Alignment**       | EDGE-VISION™ 1000 is designed on GlobalFoundries 22FDX FD-SOI. GlobalFoundries operates fabs in Singapore, Dresden (Germany), and upstate New York - no single-country manufacturing dependency.                                                |
| **In-Country Security Certification** | Sovereign critical infrastructure requires firmware audit capability, source code escrow under national jurisdiction, and annual recertification engineering support.                                                                           |
| **15-Year Lifecycle Model**           | Publicly traded fabless companies face quarterly earnings pressure. A 15-year niche lifecycle commitment on a government programme is commercially unattractive to a public company. Veredian's structure is designed around this from day one. |

### **Sovereign Requirements Fit \[light background\]**

\[H2\] Sovereign Infrastructure Is Not a TOPS Race

| **Sovereign Requirement**                     | **EV-1000** | **High-compute AI** | **Consumer / mobile** | **Long-lifecycle industrial** |
| --------------------------------------------- | ----------- | ------------------- | --------------------- | ----------------------------- |
| **Sovereign IP ownership to national entity** | ✓ Full      | ✗ Not structured    | ✗ Not offered         | △ Partial                     |
| **15+ year lifecycle support**                | ✓ Full      | ✗ 3-5 yrs typical   | ✗ 3-5 yrs typical     | △ 10 yrs, no AI NPU           |
| **In-country firmware audit & source escrow** | ✓ Full      | ✗ Constrained       | ✗ Closed firmware     | △ Limited                     |
| **Hardware sovereign security stack**         | ✓ Full      | ✗ Not purpose-built | ✗ Consumer-derived    | △ Partial                     |
| **Export-control independent supply chain**   | ✓ Full      | ✗ US EAR exposure   | ✗ US EAR/ITAR         | △ Partial                     |
| **Annual CIP recertification programme**      | ✓ Full      | ✗ Not offered       | ✗ Not offered         | ✗ Not offered                 |

\[Note: no vendor names in column headers - category descriptions only\]

### **Prior Proven Execution \[navy background\]**

\[H2 - white\] The Team Has Done This Before

| **Execution Record**               | **Relevance to EV-1000**                                                                                                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Multi-thousand TOPS AI Silicon** | Full tapeout-to-bring-up delivery on a leading-edge node with 3D NoC and HBM. Every execution discipline required for EV-1000 was exercised here.                                  |
| **Automotive L4/L5 Safety SoC**    | Co-architected a safety-certified automotive SoC for a global Tier-1 manufacturer. Sovereign infrastructure and automotive safety share the same uncompromising delivery standard. |
| **GF 22FDX FD-SOI Hands-On**       | PDK-experienced engineers with hands-on FD-SOI body-bias optimisation. The team is not learning the node on this programme.                                                        |

**Process node experience:** TSMC N3 / N5 / N7 · Intel 3nm / 18A · GlobalFoundries 22FDX FD-SOI

## **3.4 Markets (/markets)**

### **Hero \[navy\]**

\[H1 - white\] A Global Requirement. One Platform.

\[Body - silver\] Every government that operates critical infrastructure faces the same structural challenge: foreign commercial silicon is a strategic liability. The requirement for sovereign AI vision silicon exists in every region - from the Middle East to Southeast Asia, from Europe to Latin America. EDGE-VISION™ 1000 is designed to serve any sovereign market, from day one.

### **10 Verticals - Full Detail**

| **Vertical**                  | **Market Context**                                                                                                               | **EV-1000 Fit**                                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Sovereign Surveillance**    | Government-operated camera networks for cities, borders, ports, airports, and critical national facilities.                      | EV-1000 replaces foreign commercial silicon with a chip the sovereign programme owns, audits, and controls. |
| **Oil & Gas**                 | Pipeline monitoring, offshore surveillance, refinery inspection, UAV-based asset inspection. No cloud dependency tolerated.      | Edge AI inference at the point of capture - on the pipeline, platform, and drone.                           |
| **Intelligent Transport**     | Licence plate recognition, traffic AI, incident detection, highway tolling. Long lifecycle and data residency requirements.      | A single EV-1000 deployment runs the full 15-year lifecycle without silicon refresh or vendor risk.         |
| **Ports & Logistics**         | Container AI, yard automation, vessel monitoring, terminal security at sovereign port infrastructure.                            | Sovereign AI vision at every point - gate, yard, berth, and perimeter. One chip, one certification.         |
| **Defence & Border Security** | Perimeter intelligence, ISR payloads, border monitoring towers. Highest sovereignty requirement. IP ownership is non-negotiable. | The only edge AI vision SoC designed from inception for sovereign IP ownership.                             |
| **UAV / Drone Vision**        | Sovereign surveillance drones, infrastructure inspection UAVs, patrol payloads. Export controls restrict foreign chips.          | Sovereign AI chip in the payload means the entire drone programme stays export-control independent.         |
| **Industrial Machine Vision** | Factory quality, refinery monitoring, warehouse automation. Long lifecycle and data sovereignty requirements.                    | Sovereign-grade edge AI for industrial environments needing long-lifecycle, nationally owned silicon.       |
| **Smart Transportation**      | Smart intersections, roadside nodes, V2X communication. Programmes require silicon that will not be discontinued.                | 15-year commitment matches the planning horizon of national smart mobility investment programmes.           |
| **Robotics Vision**           | Security and inspection robots, logistics automation. Growing category in sovereign national infrastructure.                     | Sovereign robots require sovereign silicon - same ownership, certification, and lifecycle.                  |
| **Healthcare Monitoring**     | Hospital security, patient monitoring, fall detection. Strict data residency and long deployment lifecycles.                     | National healthcare operates under the same data sovereignty requirements as other CIP sectors.             |

## **3.5 Company (/company)**

### **Hero \[navy\]**

\[H1 - white\] Built by the People Who Understand the Problem

### **Company Story \[white\]**

\[H2\] Why We Built Veredian

We built chips at the frontier of compute for three decades - AI SoCs, automotive safety silicon, leading-edge tapeouts at Intel, Qualcomm, STMicroelectronics, Infineon, and Cavium. We know what it takes to deliver silicon that works when failure is not an option.

We also saw the same problem from the inside: the sovereign infrastructure that governments depend on - surveillance networks, port terminals, oil platforms, border systems - runs on chips designed for commercial volume by foreign companies, on foreign supply chains, with foreign interests. That is not a technology problem. It is a strategic vulnerability.

Veredian exists to remove that vulnerability. EDGE-VISION™ 1000 is designed from first principles for sovereign programmes - the architecture, the security stack, the 15-year lifecycle commitment, and the IP ownership structure are purpose-built for governments that cannot afford to depend on someone else's silicon.

We are not building a product. We are building the sovereign silicon infrastructure that national programmes have needed for a decade.

### **Founding Team \[light background · 6 cards\]**

\[H2\] The Founding Team

\[Body\] Six semiconductor engineers. ~170 years combined silicon delivery experience. Intel, Qualcomm, STMicroelectronics, Infineon, Cavium, Maxim. Full-stack SoC capability from architecture to tapeout to bring-up.

| **Name**        | **Role**                    | **Background**                        | **Bio (hover state)**                                                                                            |
| --------------- | --------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Ravi Koodli** | CEO & Lead Founder          | STMicro · Qualcomm · Intel · Infineon | 30 years semiconductor leadership. Leads programme strategy, investor relations, customer engagement.            |
| **Santosh K.**  | Chief Architect             | STMicro · Intel                       | 25+ years SoC architecture, RTL, and tapeout on advanced nodes. Owns the EV-1000 architectural specification.    |
| **Gopu S.**     | Head of Software            | Cavium · Menlo Logic                  | 30+ years firmware, OS, and AI inference software. Leads sovereign firmware development and compliance platform. |
| **Muru G.**     | Head of Product Engineering | Intel · Infineon                      | 27 years product engineering and silicon validation. Leads EV-1000 bring-up and pilot deployments.               |
| **Prasanna K.** | Micro Architect             | Intel · Maxim                         | 30+ years CPU micro-architecture and pipeline design. EV-1000 CPU subsystem lead.                                |
| **Bela Kapoor** | Foundry & Technology        | Intel · Qualcomm · STMicro            | 25+ years PDK and foundry interface. Leads the GF 22FDX engagement and physical design programme.                |

\[NOTE: Confirm full surnames for Santosh, Gopu, Muru, and Prasanna before launch.\]

\[Below team cards: prior company wordmarks in silver - Intel · Qualcomm · STMicroelectronics · Infineon · Cavium · Maxim\]

### **Execution Model \[navy\]**

\[H2 - white\] Built Where It Counts. Engineered Where It Matters.

| **Hub**                | **Function**                                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Strategic Hub**      | Programme leadership, architecture direction, customer engagement, foundry and IP relationships, sovereign compliance alignment, investor governance.               |
| **Engineering Centre** | Full-stack SoC delivery: RTL design, functional verification, physical design, EDA infrastructure, simulation, and chip bring-up. Proven deep-cost execution model. |

## **3.6 Investors (/investors)**

### **Hero \[navy\]**

\[H1 - white\] Sovereign Infrastructure Silicon. Series A.

\[Body - silver\] Veredian is building the world's first purpose-designed sovereign edge AI vision SoC - infrastructure silicon for governments that cannot accept foreign supply-chain risk.

### **Investment Thesis \[white\]**

| **Investment Characteristic** | **What It Means**                                                                                                                                                    |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sovereign IP Structure**    | All programme IP is assigned to a nationally incorporated entity at formation. The IP cannot be acquired, restricted, or revoked by any foreign entity.              |
| **Milestone-Gated Capital**   | Capital deployed in tranches against verified technical and commercial milestones. Investors have structured visibility and natural decision points at every stage.  |
| **Non-Discretionary Revenue** | The annual compliance subscription is tied to national CIP certification law. Revenue grows automatically with the installed base - without additional sales cycles. |
| **Strategic Exit Channels**   | Purpose-built sovereign silicon creates M&A optionality with defence primes, national technology champions, and strategic infrastructure acquirers.                  |

### **Programme Structure \[light\]**

| **Round**         | **Purpose**                 | **Gates / Triggers**                                                                     |
| ----------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| **Series A**      | Architecture to EVT silicon | Architecture freeze · RTL maturity · GDS sign-off · EVT silicon + pilot deployments      |
| **Series B**      | Production ramp + scale     | Triggered by: EVT silicon validated + first programme revenue confirmed                  |
| **Profitability** | Post-production             | EBITDA-positive as chip revenue + compliance subscriptions + platform contracts compound |

### **Investor CTA \[full-width navy · centered\]**

\[H2 - white · centered\] Request the Investment Briefing

\[Body - silver · centered\] Full programme overview, technical architecture, market analysis, and financial model available to qualified sovereign investors under NDA.

\[Primary CTA · centered\] Request Briefing → /deck-request

\[Below button - silver 13px\] <investors@veredian.ai>

## **3.7 News (/news) \[CMS-managed\]**

### **Page Hero \[navy\]**

\[H1 - white\] Latest from Veredian

### **Post Listing \[white · 3-col grid · each card: 400×240px thumbnail + teal category badge + date + headline + 2-line excerpt + "Read more" teal link\]**

**PLACEHOLDER POST 1 - replace with real content at launch**

Category: Company News · Date: June 2026

Headline: Veredian Launches to Build the World's First Sovereign Edge AI Vision SoC

Excerpt: Veredian today announced the launch of the EDGE-VISION™ 1000 programme - a purpose-designed sovereign edge AI vision SoC for governments that cannot accept foreign silicon risk.

Thumbnail: \[PLACEHOLDER - chip die render or abstract circuit image\]

**PLACEHOLDER POST 2 - replace with real content at launch**

Category: Technology · Date: \[Month\] 2026

Headline: GlobalFoundries 22FDX FD-SOI: Why Sovereign Silicon Demands a Sovereign Foundry

Excerpt: The process node choice for a sovereign silicon programme is not a benchmarking decision. It is a strategic and geopolitical one.

Thumbnail: \[PLACEHOLDER - foundry / semiconductor manufacturing image\]

**PLACEHOLDER POST 3 - replace with real content at launch**

Category: Market Intelligence · Date: \[Month\] 2026

Headline: Why Export Controls Are Accelerating the Demand for Sovereign Edge AI Silicon

Excerpt: Tightening export control regimes are forcing sovereign infrastructure operators to confront a structural question: can you build a national programme on silicon that can be revoked?

Thumbnail: \[PLACEHOLDER - abstract technology / policy image\]

## **3.8 Careers (/careers) \[CMS-managed\]**

### **Page Hero \[navy\]**

\[H1 - white\] Build Sovereign Silicon

\[Body - silver\] We are assembling the team that will deliver the world's first purpose-designed sovereign edge AI vision SoC. If you have built chips at the frontier - and you want to build something that matters - we want to hear from you.

### **Why Join Veredian \[white · 3-card grid\]**

| A Programme That Matters | EDGE-VISION™ 1000 will be deployed in the critical infrastructure that governments depend on. Every line of RTL you write has sovereign consequence.              |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontier Engineering     | Full-stack SoC delivery on GlobalFoundries 22FDX FD-SOI. Architecture, RTL, verification, physical design, bring-up. The full stack from day one.                 |
| Founding Team Equity     | Early-stage equity structured for long-term sovereign value. Vesting aligned with programme milestones. A founding team stake, not an employee option pool entry. |

### **Open Roles \[light · role cards · Apply button → <careers@veredian.ai>\]**

**SoC Architect - \[Middle East / Remote\]**

Design and own the top-level architecture of EDGE-VISION™ 1000 - CPU subsystem, AI engine integration, ISP pipeline, security subsystem, memory architecture.

Experience: 15+ years SoC architecture · ARM Cortex-A family · NPU integration · prior tapeout ownership on 16nm or below.

Prior companies: Intel, Qualcomm, Arm, NVIDIA, Marvell, MediaTek, or equivalent.

\[Apply → <careers@veredian.ai>\]

**RTL Design Engineer (Senior / Staff) - \[Engineering Centre\]**

Own the RTL implementation of one or more EV-1000 functional blocks - AI engine datapath, ISP pipeline, or security subsystem.

Experience: 10+ years RTL · SystemVerilog · formal verification · GF or TSMC advanced node tapeout.

Prior companies: Intel, Qualcomm, STMicro, Infineon, Samsung, or equivalent.

\[Apply → <careers@veredian.ai>\]

**Firmware & Security Engineer - \[Engineering Centre / Remote\]**

Develop the sovereign firmware stack - secure boot, TrustZone integration, HSM firmware, and annual compliance certification tooling.

Experience: 10+ years embedded firmware · ARM TrustZone · HSM · CIP or government security certification preferred.

Prior companies: Qualcomm, Arm, NXP, STMicro, Thales, or equivalent.

\[Apply → <careers@veredian.ai>\]

**Physical Design Engineer - \[Engineering Centre\]**

Lead physical design, place-and-route, timing closure, and DRC/LVS for EDGE-VISION™ 1000 on GF 22FDX FD-SOI.

Experience: 10+ years physical design · Cadence Innovus · FD-SOI body-bias experience strongly preferred.

Prior companies: Intel, Qualcomm, Samsung, TSMC design services, or equivalent.

\[Apply → <careers@veredian.ai>\]

### **General Applications \[navy · centered\]**

\[H2 - white · centered\] Don't See Your Role?

\[CTA\] Send a General Application → <careers@veredian.ai>

## **3.9 Deck Request Form (/deck-request)**

### **Page \[navy hero + white form card · max-width 560px\]**

\[H1 - white\] Request the Veredian Investment Briefing

\[Body - silver\] Available to qualified sovereign investors and institutional partners. Complete the form below. Our team will respond within one business day.

| **Field**               | **Input Type**            | **Notes**                                                                             |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| **Full Name**           | text                      | required                                                                              |
| **Title / Role**        | text                      | required                                                                              |
| **Organisation**        | text                      | required                                                                              |
| **Email**               | email                     | required - business email                                                             |
| **Phone**               | tel                       | optional                                                                              |
| **Country**             | select                    | required - country dropdown, no pre-selection                                         |
| **Investor type**       | radio                     | Sovereign Wealth Fund · Family Office · Institutional · Strategic / Corporate · Other |
| **Note**                | textarea                  | optional · 300 char max                                                               |
| **NDA acknowledgement** | checkbox                  | required - "I confirm that materials are confidential and subject to NDA terms"       |
| **Submit**              | Primary button full-width | label: "Request Briefing"                                                             |

- On submit: lead stored in HubSpot or Airtable via webhook. Trigger internal notification to CEO. Do NOT auto-deliver the deck - all delivery manually reviewed.
- Confirmation: "Your request has been received. Our team will be in touch within one business day."
- GA4: form_start on first interaction · form_complete on successful submit
- Spam: honeypot field + rate limiting (max 5 submissions per IP per hour)

## **3.10 Contact (/contact)**

\[H1\] Get in Touch

\[Two-column: form left · office details right · stacked on mobile\]

| **Field**        | **Type**       | **Notes**                |
| ---------------- | -------------- | ------------------------ |
| **Name**         | text           | required                 |
| **Email**        | email          | required                 |
| **Organisation** | text           | optional                 |
| **Message**      | textarea       | required · 1000 char max |
| **Submit**       | "Send Message" |                          |

| **Strategic Hub**      | Middle East             |
| ---------------------- | ----------------------- |
| **Engineering Centre** | India                   |
| **General**            | <hello@veredian.ai>     |
| **Investors**          | <investors@veredian.ai> |
| **Careers**            | <careers@veredian.ai>   |

# **4\. Technical Specifications**

## **4.1 Stack**

| **Framework**      | Next.js 14+ (App Router) - SSR, image optimisation, i18n routing, edge functions                 |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| **Hosting**        | Vercel (preferred) or AWS CloudFront + S3                                                        |
| **CMS**            | Sanity.io or Contentful - headless. News and Careers fully editable by client without developer. |
| **Forms / CRM**    | API route → HubSpot or Airtable webhook. Resend.com or SendGrid for transactional email.         |
| **CDN / Security** | Cloudflare - global CDN, DDoS protection, WAF, SSL termination                                   |
| **Analytics**      | Google Analytics 4 + Google Tag Manager                                                          |
| **i18n / RTL**     | next-intl - EN/AR routing. CSS logical properties throughout for clean RTL flip.                 |
| **3D visuals**     | Spline.design embed - lazy loaded, static PNG fallback                                           |

## **4.2 Performance**

| **Lighthouse Performance - desktop** | \>= 90                               |
| ------------------------------------ | ------------------------------------ |
| **Lighthouse Performance - mobile**  | \>= 80                               |
| **First Contentful Paint (FCP)**     | < 1.5s                               |
| **Largest Contentful Paint (LCP)**   | < 2.5s                               |
| **Cumulative Layout Shift (CLS)**    | < 0.1                                |
| **Home page weight**                 | < 2MB uncompressed · < 600KB gzipped |
| **Animation JS budget**              | < 80KB gzipped total                 |

## **4.3 SEO**

- Custom meta title and description on every page - copy provided by client before build
- Structured data: Organization, Product (EDGE-VISION 1000), BreadcrumbList
- XML sitemap auto-generated on build
- robots.txt: index all public pages · disallow /deck-request and admin paths
- Open Graph + Twitter Card meta on all pages for LinkedIn share previews
- Default OG image: 1200×630px · navy #0A1628 · Veredian full brand lockup centered · provide as static PNG from 05_full_brand_dark.svg
- Canonical tags on all pages

## **4.4 Security**

- HTTPS enforced. HSTS header: max-age=31536000; includeSubDomains
- Content Security Policy (CSP) - disallow inline scripts and unauthorised origins
- Form: honeypot field + server-side rate limiting on /deck-request
- No sensitive data stored client-side
- Deck delivery links: 72h expiry · single-use · generated server-side

## **4.5 Accessibility**

- WCAG 2.1 Level AA minimum throughout
- All images: descriptive alt text
- All form fields: associated label elements - not placeholder-only
- Full keyboard navigation. Visible focus rings on all interactive elements.
- Minimum contrast: 4.5:1 body text · 3:1 large text and UI components

## **4.6 Deliverables**

- Source code repository (GitHub / GitLab) with branch protection and structured commit history
- Figma design file - all pages, all states, all breakpoints, full component library
- CMS training document - how to add news posts, update careers listings, and edit team bios without developer
- Lighthouse report for Home and Product pages
- Cross-browser test: Chrome 120+ · Safari 17+ · Firefox 120+ · Edge 120+ · iOS Safari 17+ · Android Chrome 120+
- Accessibility audit report (WCAG 2.1 AA)
- Handoff documentation: deployment process, environment variables, third-party integrations, runbook

_VEREDIAN.AI · WEBSITE DEVELOPMENT BRIEF · JUNE 2026_