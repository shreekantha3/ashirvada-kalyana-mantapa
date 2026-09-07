# Deployment Guide

## Build Status
- ✅ Next.js 16.3.4 build: **Passing**
- ✅ TypeScript (tsc --noEmit): **No errors**
- ✅ ESLint: **No errors, no warnings**
- ✅ Static prerendering: **All routes generated**
- ✅ Build output: **~99MB** (`.next/` directory)
- ✅ Build ID: `jPOzV0LavHymf3bL0Rlqh`

## Prerequisites
- Node.js >= 20.9.0 (tested on v22.22.3)
- npm >= 10
- 2GB+ free disk space for build output

## Build
```bash
npm run build
```

Output:
- Static HTML pages in `.next/`
- Server-side rendering bundle
- Static assets and images

## Deploy to Vercel (Recommended)

### Quick Deploy
1. Push code to GitHub
2. Import project in Vercel Dashboard
3. Set environment variables:
   - `NEXT_PUBLIC_BASE_URL`: Your domain
4. Vercel auto-detects Next.js and deploys

### CLI Deploy
```bash
npm install -g vercel
vercel
```

### Environment Variables for Production
| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_BASE_URL` | Site origin | `https://ashirvada.example.com` |

## Local Preview
```bash
npm run build && npm run start
```
Server runs on `http://localhost:3000`

## Performance Notes
- All routes are statically prerendered
- Images are optimized by Next.js
- Font loading uses `font-display: swap`
- Total build time: ~5 seconds (Turbopack)
- Bundle includes: React 19, Next.js, Framer Motion, Tailwind CSS v4, shadcn/ui

## SEO Status
- ✅ Dynamic sitemap generated (`/sitemap.xml`)
- ✅ Robots.txt configured (`/robots.txt`)
- ✅ Open Graph meta tags on all pages
- ✅ Twitter card meta tags
- ✅ Proper heading hierarchy
- ✅ Semantic HTML structure
- ✅ Viewport meta tag for mobile
- ✅ Language attribute on HTML element

## Accessibility Status
- ✅ WCAG 2.2 AA target
- ✅ `prefers-reduced-motion` media query support
- ✅ Focus-visible ring styles
- ✅ Semantic HTML landmarks (`<main>`, `<nav>`, `<footer>`, `<section>`)
- ✅ ARIA labels on icon buttons
- ✅ Alt text on decorative images

## Known Limitations
- Contact form is UI-only (no backend) — displays toast notification with phone/WhatsApp/email fallbacks
- Gallery images are CSS gradient placeholders — replace with real photos
- Google Maps uses static placeholder — embed actual map with API key
- Business details (phone, email, address) are placeholder values marked with asterisks in docs
- No analytics or tracking implemented (add post-deployment)
