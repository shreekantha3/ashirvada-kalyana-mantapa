# Requirements

## Functional Requirements
1. **Navigation**: Sticky header with logo, nav links, and "Enquire Now" CTA
2. **Hero**: Full-width section with venue image, headline, subheadline, primary/secondary CTAs
3. **Trust**: Google rating display with verified data only
4. **About**: Brief venue introduction highlighting atmosphere and suitability
5. **Venue/Facilities**: Visual cards for venue features
6. **Gallery**: Responsive image grid with lightbox and keyboard navigation
7. **Events**: Cards explaining suitable event types
8. **Location**: Address, Google Maps link, directions CTA
9. **Contact**: Enquiry form with phone/WhatsApp/email fallbacks
10. **Footer**: Links, contact info, social media, copyright

## Non-Functional Requirements
1. **Performance**: Lighthouse Performance 90+
2. **Accessibility**: WCAG 2.2 AA compliance
3. **SEO**: Lighthouse SEO 95+
4. **Best Practices**: Lighthouse Best Practices 95+
5. **Responsive**: Works on 320px to 1920px viewports
6. **Security**: No secrets in code, safe dependencies, proper headers
7. **Maintainability**: Clean TypeScript, well-documented code

## UX Requirements
1. **Mobile-first**: Primary experience is mobile
2. **Touch targets**: Minimum 44x44px interactive elements
3. **Navigation**: Hamburger menu on mobile, full nav on desktop
4. **Sticky CTA**: Persistent enquiry button on mobile
5. **Loading**: Fast initial load with prioritized hero image
6. **Animations**: Subtle, respecting prefers-reduced-motion

## SEO Requirements
1. Title tag with venue name and location
2. Meta description with keywords
3. Open Graph and Twitter Card metadata
4. Structured data (LocalBusiness)
5. Sitemap.xml and robots.txt
6. Semantic HTML with proper heading hierarchy
7. Canonical URL
8. Alt text on all images

## Accessibility Requirements
1. Semantic HTML structure
2. Proper heading hierarchy (h1 > h2 > h3)
3. Alt text on all meaningful images
4. Keyboard navigation support
5. Visible focus states
6. ARIA labels where necessary
7. Sufficient color contrast (WCAG AA)
8. Reduced motion support
9. Accessible dialogs and navigation
10. Screen-reader friendly controls

## Security Requirements
1. No API keys or secrets in source code
2. No unsafe eval or innerHTML
3. XSS prevention for form inputs
4. Content-Security-Policy headers
5. Safe dependency versions
6. No external scripts without justification
