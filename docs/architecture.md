# Architecture

## Framework
- **Next.js 16.3.4** with App Router and Server Components
- **React 19.2.8** — Latest stable React with concurrent features
- **TypeScript** — Strict mode for type safety

## Component Architecture
```
src/
  app/                    # Next.js App Router pages and layouts
    layout.tsx            # Root layout with providers
    page.tsx              # Home page
    globals.css           # Global styles and design tokens
    sitemap.ts            # SEO sitemap generation
    robots.ts             # Robots.txt generation
    not-found.tsx         # 404 page
  components/
    ui/                   # shadcn/ui components
    navigation/           # Header, MobileMenu, NavLink
    hero/                 # Hero section
    about/                # About section
    trust/                # Trust/Social proof section
    venue/                # Venue/Facilities section
    gallery/              # Gallery section
    events/               # Events/Use cases section
    location/             # Location section
    contact/              # Contact/Enquiry section
    footer/               # Footer
    theme-provider.tsx    # Theme provider wrapper
  lib/
    utils.ts              # cn() utility
  docs/                   # Project documentation
public/                   # Static assets
  images/                 # Image assets
```

## Rendering Strategy
- **Server Components** by default (Next.js 16 App Router)
- **Client Components** only where interactivity is needed (animations, forms, mobile menu, theme toggle)
- **Static generation** for most pages (ISR if needed)
- **Image optimization** via Next.js Image component

## Asset Strategy
- **Images**: Next.js `<Image>` component with lazy loading
- **Hero**: Priority-loaded, optimized format
- **Gallery**: Responsive srcSet, lazy loading
- **Fonts**: Next.js font optimization with `display: swap`
- **Icons**: Lucide React (tree-shakeable)

## Deployment Architecture
- **GitHub** → **Vercel** CI/CD pipeline
- Preview deployments for PRs
- Production deployment on main branch
- Environment variables for configuration
- CDN caching for images and assets

## State Management
- **React Context** via next-themes for theme
- **Client state** for form inputs, mobile menu, modal state
- **No global state library** needed (simple application)

## Design System
- **Colors**: CSS custom properties in Tailwind config
- **Typography**: Playfair Display (headings), DM Sans (body)
- **Spacing**: Tailwind spacing scale (4px base)
- **Radius**: Consistent border-radius tokens
- **Shadows**: Subtle, consistent elevation
- **Animations**: Framer Motion for entrance/scroll effects
