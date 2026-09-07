# Handover Document

## Project Overview
**What was built**: A premium, responsive website demo for Ashirvada Kalyana Mantapa, a wedding and function hall in Sindagi, Karnataka, India. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Technology
- **Framework**: Next.js 16.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui with @base-ui/react
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings), DM Sans (body)
- **Theme**: next-themes (light/dark)
- **Testing**: Playwright (E2E), Vitest (unit - recommended)
- **Linting**: ESLint
- **Build**: Next.js built-in

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npx tsc --noEmit
```

## Deployment
**Primary Target**: Vercel

### Steps
1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables Needed
- `NEXT_PUBLIC_SITE_URL` — Production URL
- `NEXT_PUBLIC_PHONE` — Venue phone number
- `NEXT_PUBLIC_WHATSAPP` — WhatsApp number
- `NEXT_PUBLIC_EMAIL` — Contact email

### Rollback
- Vercel provides instant rollback to previous deployments
- Keep previous deployment until client approves

## Content Management

### How to Update Business Details
- **Business name**: Update in `src/app/layout.tsx` metadata
- **Address**: Update in `src/app/layout.tsx` and Location component
- **Phone/WhatsApp/Email**: Add to constants in components and make clickable links
- **Images**: Replace files in `public/images/`

### How to Update Gallery
1. Replace placeholder images in `public/images/`
2. Update image references in `src/components/gallery/`
3. Add captions as needed

### How to Update Facilities
1. Edit facility cards in `src/components/venue/`
2. Update descriptions and icons
3. Add/remove facility cards as needed

## Future Production Work
1. **Images**: Replace all placeholder images with real venue photos
2. **Contact Form**: Implement backend (email/webhook)
3. **Google Maps**: Add embed with actual API key
4. **Analytics**: Add Google Analytics 4
5. **Legal**: Add privacy policy, terms of service
6. **SEO**: Add structured data, canonical URLs, sitemap with real data
7. **Domain**: Purchase and configure custom domain
8. **SSL**: Ensure HTTPS is configured

## Ownership Transfer

### GitHub Repository
1. Transfer ownership from this developer's account to client
2. Add client as collaborator with admin access
3. Enable branch protection rules

### Vercel Project
1. Transfer project ownership in Vercel dashboard
2. Add team members
3. Configure team billing

### Domain
1. Transfer domain registration to client
2. Update DNS records to point to Vercel
3. Configure SSL certificate

### Other Services
- Analytics: Transfer Google Analytics property ownership
- Email: Set up client's email service
- Phone: Transfer to client's business phone

## Code Quality Notes
- All components use TypeScript with strict types
- ESLint and Prettier configured
- No TODOs in production code
- Semantic HTML throughout
- Accessibility-first approach
- Server Components used where appropriate
