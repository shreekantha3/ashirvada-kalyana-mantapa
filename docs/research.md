# Research

## Websites Reviewed

### Premium Wedding Venue Websites
1. **[Pavilion by Gold](https://www.pavilionbygold.com/)** — Elegant venue with crystal chandeliers, marble floors. Pattern: Full-width hero with overlay text, clean CTA placement.
2. **[The Ivory Tap](https://www.theivorytap.com/wedding-venues)** — Boutique wedding curation with minimalist design. Pattern: Clean typography, generous whitespace, subtle animations.
3. **[Goldesberg Hall](https://www.goldsboroughhall.com/weddings)** — Luxury stately home venue. Pattern: Story-driven about section, elegant gallery grid.

### Design Pattern Analysis
- **Hero**: Full-width image with overlay heading + primary CTA
- **Navigation**: Sticky header with logo + links + CTA button
- **Gallery**: Masonry/multi-column grid with lightbox
- **Trust**: Google rating display with verified data
- **Location**: Embedded map + address + directions CTA
- **CTA Strategy**: Primary "Enquire Now" + secondary phone/WhatsApp

## GitHub Projects Reviewed

1. **[ajaynxt/wedding](https://github.com/ajaynxt/wedding)** — Luxury Indian wedding planner with 10 hero compositions, dark/light modes, WhatsApp integration
2. **[Soccerbeats/weddingwebsite](https://github.com/Soccerbeats/weddingwebsite)** — Next.js 16 wedding site with gallery, timeline, RSVP, admin panel
3. **[jeremylhomme/nextjs-wedding-photographer-website](https://github.com/jeremylhomme/nextjs-wedding-photographer-website)** — Next.js 14, Shadcn UI, Framer Motion, Embla Carousel
4. **[gumusonur/wedding-memories](https://github.com/gumusonur/wedding-memories)** — Next.js, Tailwind v4, shadcn/ui, Framer Motion, Radix UI, WCAG 2.1 AA

## Patterns Adopted
- Next.js 16 App Router with TypeScript
- Tailwind CSS v4 with CSS variables for theming
- shadcn/ui components for consistency
- Framer Motion for scroll-triggered entrance animations
- Mobile-first responsive design
- Semantic HTML for accessibility
- Server Components where appropriate
- Playfair Display + DM Sans font pairing

## Patterns Rejected
- Heavy parallax animations (distracting, poor performance)
- Auto-playing videos (performance, accessibility)
- Complex admin dashboards (out of scope for venue website)
- RSVP/registry features (requires backend, not relevant)
- Dark mode as primary feature (venue photography is naturally light-focused)

## Lessons Learned
- Google Maps photos cannot be programmatically downloaded for reuse
- Venue-specific business info must be verified; placeholder images should be clearly marked
- Premium wedding venues use warm, elegant color palettes (ivory, gold, cream)
- Typography plays a crucial role in communicating luxury
