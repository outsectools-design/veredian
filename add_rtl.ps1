Add-Content -Path d:\vered\css\style.css -Value @"

/* ── RTL Support ────────────────────────────────────────────── */
html[dir='rtl'] body, html[dir='rtl'] h1, html[dir='rtl'] h2, html[dir='rtl'] h3, html[dir='rtl'] h4, html[dir='rtl'] p, html[dir='rtl'] a, html[dir='rtl'] span, html[dir='rtl'] div { font-family: 'IBM Plex Arabic', sans-serif !important; }
html[dir='rtl'] .nav__actions { flex-direction: row-reverse; }
html[dir='rtl'] .hero__content, html[dir='rtl'] .hero__content-inner { text-align: right; }
html[dir='rtl'] .card__title, html[dir='rtl'] .card__body { text-align: right; }
html[dir='rtl'] table { text-align: right; }
html[dir='rtl'] th, html[dir='rtl'] td { text-align: right; }
html[dir='rtl'] .footer__grid { direction: rtl; }
html[dir='rtl'] .footer__nav, html[dir='rtl'] .footer__offices { text-align: right; }
"@
