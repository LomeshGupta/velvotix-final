# Velvotix — Complete Website

React 18 · React Router 6 · Framer Motion · Tailwind CSS (utilities) · Pure CSS design system

## Quick Start

```bash
npm install
npm start          # dev server → http://localhost:3000
npm run build      # production build → /build
serve -s build     # serve production build locally
```

## Deploy

**Netlify / Vercel** — drag & drop the `/build` folder, or connect repo.
**Nginx** — serve `/build` as static root, add `try_files $uri /index.html;`.

## Structure

```
src/
├── App.js                    # Router + providers
├── index.js                  # Entry point
├── styles/index.css          # Full design system (CSS vars, grids, buttons, animations)
├── data/index.js             # All site content
├── lib/
│   ├── ThemeContext.js       # Dark/light toggle (persists via localStorage)
│   └── useCounter.js         # Animated counter (IntersectionObserver)
├── components/
│   ├── ui/
│   │   ├── Logo.js           # VELVOTIX wordmark (single word, blue+orange split)
│   │   ├── Cursor.js         # Magnetic cursor (auto-disabled on touch)
│   │   ├── Particles.js      # Animated canvas background
│   │   └── ERPOrbit.js       # SVG animated ERP universe diagram
│   ├── layout/
│   │   ├── Navbar.js         # Responsive nav (desktop links + mobile drawer)
│   │   ├── Footer.js         # Responsive footer (collapses on mobile)
│   │   └── Layout.js         # Page wrapper
│   └── sections/
│       ├── Hero.js            # Full-screen hero with ERP orbit
│       ├── TrustedBy.js       # Infinite marquee + global region pills
│       ├── Services.js        # 6 service cards (auto-reflow grid)
│       ├── Metrics.js         # Animated stat counters
│       ├── Products.js        # Tab switcher + product mockup
│       ├── CaseStudies.js     # Project cards with results
│       ├── Process.js         # 5-step interactive process
│       ├── Testimonials.js    # Client quote cards
│       └── CTASection.js      # Conversion section
└── pages/
    ├── HomePage.js
    ├── SolutionsPage.js
    ├── ProductsPage.js
    ├── ServicesPage.js
    ├── CaseStudiesPage.js
    ├── AboutPage.js
    └── ContactPage.js
```

## Device Compatibility

- **Phone (320–767px):** Single-column layout, mobile drawer nav, no ERP orbit (prevents overflow)
- **Tablet (768–1023px):** 2-column grids, desktop nav links visible
- **Desktop (1024px+):** Full layout, CTA in navbar, side-by-side product showcase
- All grids use `repeat(auto-fit, minmax(min(100%, Xpx), 1fr))` — reflow automatically
- Navbar & Footer: responsive via `<style>` tags with real `@media` queries (no Tailwind class conflicts)
- Touch targets ≥ 40×40px everywhere
- Custom cursor disabled on touch devices (`@media (hover:none)`)
- Font sizes use `clamp()` — smooth scaling from 320px to 4K
- iOS input zoom prevented (font-size ≥ 14px on all inputs)
