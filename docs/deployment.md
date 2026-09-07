# Deployment Guide

## ✅ Live Site
**URL**: https://shreekantha3.github.io/ashirvada-kalyana-mantapa/

Status: **Online** - All 8 sections rendering correctly with static HTML.

## Deployment Architecture

This is a **static site** deployed to GitHub Pages:
- **Build**: `npm run build` generates static HTML in `out/` directory
- **Deploy**: `peaceiris/actions-gh-pages` pushes `out/` → `gh-pages` branch
- **Host**: GitHub Pages serves from `gh-pages` branch
- **Build type**: Static HTML with pre-rendered content (no JS hydration required)

## Configuration

### `next.config.ts`
```typescript
const nextConfig: NextConfig = {
  output: "export",        // Static HTML export
  trailingSlash: true,     // Required for GitHub Pages
  images: { unoptimized: true },  // No image optimization needed
};
```

### `public/sitemap.xml` & `public/robots.txt`
Static files replace dynamic `sitemap.ts` and `robots.ts` routes.

## Auto-Deployment

Every push to `main` branch triggers:
1. **Next.js build** → `out/` directory with static HTML
2. **GitHub Action** (`peaceiris/actions-gh-pages@v4`) → pushes to `gh-pages` branch
3. **GitHub Pages** automatically serves from `gh-pages`

## Build & Deploy Commands

### Local Preview
```bash
npm run build
# Open out/index.html in browser
```

### Force Redeploy
```bash
gh workflow run deploy.yml --repo shreekantha3/ashirvada-kalyana-mantapa
```

### Check Deployment Status
```bash
gh run list --repo shreekantha3/ashirvada-kalyana-mantapa
```

## Verified Site Content
- ✅ Hero section with venue imagery
- ✅ Trust section with location info
- ✅ About section (4 features)
- ✅ Venue/Facilities section (6 cards)
- ✅ Gallery section (9 images)
- ✅ Events section (5 categories)
- ✅ Location section (map + address)
- ✅ Contact section (form + phone/WhatsApp)
- ✅ Footer with social links
- ✅ All meta tags (SEO, OG, Twitter)
- ✅ Responsive viewport
- ✅ 99KB total page size

## Known Limitations
- Contact form is UI-only (no backend) — displays toast notification with phone/WhatsApp/email fallbacks
- Gallery images are CSS gradient placeholders — replace with real photos post-deployment
- Google Maps uses static placeholder — integrate with API key after deployment
- Business details (phone, email, address) are placeholder values marked with `*` in docs

## Future: Vercel Deployment (Recommended)
For SSR/faster builds, switch to Vercel:
```bash
# Remove output: 'export' from next.config.ts
# Connect repo in Vercel Dashboard
# Auto-deploys on push to main
```
