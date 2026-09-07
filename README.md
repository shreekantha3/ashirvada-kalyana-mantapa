# Ashirvada Kalyana Mantapa

Premium responsive website demo for Ashirvada Kalyana Mantapa — a wedding and function venue in Sindagi, Karnataka, India.

## Features

- 🎉 **Hero Section**: Full-width venue imagery with primary CTA
- 🏛️ **About**: Venue introduction and atmosphere
- 📸 **Gallery**: Responsive image grid with lightbox
- 🏢 **Venue/Facilities**: Visual cards for venue features
- 🎊 **Events**: Suitable event categories
- 📍 **Location**: Google Maps integration with directions CTA
- 📞 **Contact**: Enquiry form with phone/WhatsApp/email fallbacks
- 🌐 **SEO**: Full metadata, Open Graph, Twitter Cards
- ♿ **Accessible**: WCAG 2.2 AA compliant
- 📱 **Responsive**: Mobile-first design (320px–1920px)
- 🌓 **Theme**: Light/dark mode support

## Technology

- **Next.js 16.3.4** — App Router with TypeScript
- **React 19.2.8** — Latest React with concurrent features
- **Tailwind CSS v4** — Utility-first CSS with CSS variables
- **shadcn/ui** — Component library with @base-ui/react
- **Framer Motion** — Scroll-triggered animations
- **Lucide React** — Icon library
- **next-themes** — Theme provider
- **TypeScript** — Strict mode

## Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd Ashirvada

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Development

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Production build
npm run build

# Start production server
npm start
```

## Testing

```bash
# Run E2E tests (requires Playwright)
npx playwright install
npx playwright test

# Run unit tests (requires Vitest — recommended)
npx vitest run
```

## Production Build

```bash
npm run build
npm start
```

## Deployment

Primary deployment target: **Vercel**

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

See [docs/deployment.md](docs/deployment.md) for details.

## Project Documentation

- [Project Brief](docs/project-brief.md) — Objectives and success criteria
- [Requirements](docs/requirements.md) — Functional and non-functional requirements
- [Architecture](docs/architecture.md) — Component architecture and tech stack
- [Design System](docs/design-system.md) — Colors, typography, spacing, animations
- [Research](docs/research.md) — Websites reviewed and patterns adopted
- [Assets](docs/assets.md) — Image inventory and replacement instructions
- [Assumptions](docs/assumptions.md) — All documented assumptions
- [Decisions](docs/decisions.md) — Architectural decisions (ADRs)
- [Changelog](docs/changelog.md) — Project changes over time
- [Testing](docs/testing.md) — Test results and QA report
- [Handover](docs/handover.md) — Ownership transfer instructions
- [Todo](docs/todo.md) — Future improvements

## Content Management

### Business Details
- **Name**: Update in `src/app/layout.tsx` metadata
- **Address**: Update in Location component
- **Phone/WhatsApp/Email**: Update in components and layout.tsx

### Images
- Replace placeholder images in `public/images/`
- Update references in gallery, hero, and about components
- See `docs/assets.md` for image inventory

### Gallery
- Replace images in `src/components/gallery/`
- Add captions as needed
- Maintain responsive aspect ratios

## Client Handover

See [docs/handover.md](docs/handover.md) for complete ownership transfer instructions.

## Future Improvements

- Real venue photos (client-provided)
- Contact form backend implementation
- Google Maps API embed
- Analytics integration
- Custom domain and SSL
- Privacy policy and legal pages
- Schema.org structured data

## License

[MIT](LICENSE)

## Disclaimer

This is a **demo/sales proposal website**. Business information is limited to what is publicly available from Google Maps. Placeholder images are clearly marked. No business information has been fabricated.

All venue-specific data must be verified and replaced by the client before production deployment.
