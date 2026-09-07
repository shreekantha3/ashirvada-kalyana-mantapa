# Decisions

## ADR-001: Tech Stack Selection
**Decision**: Use Next.js 16 with TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion
**Context**: Needed a modern, performant framework with excellent SEO and accessibility. The client needs a demo that showcases technical competence.
**Options Considered**:
- Next.js (selected) vs React-only with Vite
- Tailwind CSS v4 vs CSS Modules
- shadcn/ui vs MUI/Chakra UI
**Reason**: Next.js offers SSR, SEO, and image optimization. Tailwind v4 with CSS variables enables theming. shadcn/ui provides clean, accessible components without bloat.
**Consequences**: Faster development, better SEO out-of-the-box, but requires familiarity with App Router patterns.

## ADR-002: Font Selection
**Decision**: Playfair Display for headings, DM Sans for body
**Context**: Luxury wedding venue needs elegant serif typography for headings and clean sans-serif for readability.
**Options Considered**:
- Playfair Display (selected) vs Cormorant Garamond
- DM Sans (selected) vs Inter, Manrope, Outfit
**Reason**: Playfair Display has elegant letterforms and high contrast. DM Sans is highly readable and modern. Both have excellent web font performance.
**Consequences**: Classic luxury aesthetic that resonates with Indian wedding venues.

## ADR-003: Image Strategy
**Decision**: Use placeholder images with clear documentation, not Google Maps photos
**Context**: Google Maps photos cannot be programmatically downloaded/reused. The venue owner needs to provide their own images.
**Options Considered**:
- Use Google Maps photos (not legally safe)
- Use placeholder images with clear labeling (selected)
- Use placeholder images from Unsplash (misleading)
**Reason**: Using placeholders with clear documentation is honest and allows easy replacement.
**Consequences**: Website looks professional but images need client replacement before production.

## ADR-004: Contact Form Approach
**Decision**: UI-only form with phone/WhatsApp/email fallbacks, no fake backend
**Context**: No verified email, phone, or backend service exists for this venue.
**Options Considered**:
- Form with fake API call (deceptive)
- Form that shows phone/WhatsApp options (selected)
- Static contact info only
**Reason**: Showing practical alternatives is honest and useful. The form demonstrates UI capability without pretending to work.
**Consequences**: Visitors get actionable contact methods; form shows the UI design for when the backend is built.

## ADR-005: No Reviews Displayed
**Decision**: Do not display reviews or ratings without verified data
**Context**: Could not verify any reviews for "Ashirvada Kalyana Mantapa" specifically.
**Options Considered**:
- Display Google Maps rating (not verified for this specific venue)
- Display neutral trust signals only (selected)
- Fabricate testimonials (violates project rules)
**Reason**: Project rules mandate no fabrication. Neutral copy is honest and professional.
**Consequences**: Trust section uses Google Maps location data and years of operation (if verifiable) only.

## ADR-006: Component Library
**Decision**: shadcn/ui with @base-ui/react instead of Radix UI or MUI
**Context**: shadcn is the modern standard for building component libraries with Tailwind CSS.
**Options Considered**:
- shadcn/ui with @base-ui/react (selected)
- Radix UI primitives directly
- MUI / Chakra UI
**Reason**: shadcn provides the best DX with Tailwind, is well-maintained, and the @base-ui/react is the recommended successor to Radix in the shadcn ecosystem.
**Consequences**: Clean, consistent components with full customization via Tailwind classes.
