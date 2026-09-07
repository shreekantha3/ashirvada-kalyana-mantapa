# Assumptions

## Documented Assumptions

### Business Information
1. **Business Name**: "Ashirvada Kalyana Mantapa" — extracted from the Google Maps redirect URL slug
2. **Location**: Sindagi, Karnataka, India — extracted from Google Maps URL coordinates (16.9196207, 76.2185894)
3. **Business Category**: Wedding / Function Hall (Kalyana Mantapa)
4. **No verified phone, website, rating, or email** — could not be confirmed via web searches for this specific venue name

### Design Decisions
5. **Color Palette**: Warm ivory, cream, champagne gold, deep charcoal — derived from typical premium South Indian wedding venue aesthetics
6. **Typography**: Playfair Display (serif) for headings, DM Sans (sans-serif) for body — classic elegant pairing
7. **Images**: Google Maps photos could not be programmatically downloaded. Placeholder images are used with clear documentation for replacement
8. **No fake reviews or ratings** — all social proof sections use neutral copy

### Technical Decisions
9. **Next.js 16 App Router** — latest stable version with TypeScript and Server Components
10. **Tailwind CSS v4** — latest version with `@tailwindcss/postcss`
11. **shadcn/ui** with @base-ui/react — modern component library
12. **Framer Motion** — for subtle scroll-triggered animations
13. **No backend** — contact form is UI-only; real implementation requires a backend service

### Content Placeholders
14. All facility descriptions are demo placeholders clearly labeled
15. Gallery images are placeholder thumbnails to be replaced with real venue photos
16. Pricing, capacity, and event packages are not included (not verified)
