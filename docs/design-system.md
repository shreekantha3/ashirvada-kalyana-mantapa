# Design System

## Colors

### Primary
- **Champagne Gold**: `oklch(0.46 0.12 45)` — Primary accent for CTAs, headings, highlights
- **Muted Gold**: `oklch(0.96 0.02 45)` — Light gold background for accents

### Neutral
- **Warm Ivory**: `oklch(0.996 0 0)` — Background
- **Cream**: `oklch(0.97 0 0)` — Card backgrounds, secondary sections
- **Deep Charcoal**: `oklch(0.145 0 0)` — Primary text
- **Medium Gray**: `oklch(0.556 0 0)` — Muted text, secondary content
- **Border**: `oklch(0.922 0 0)` — Subtle borders

### Dark Mode
- **Dark Background**: `oklch(0.145 0 0)`
- **Dark Foreground**: `oklch(0.985 0 0)`
- **Dark Gold**: `oklch(0.72 0.14 45)` — Inverted primary for dark mode

## Typography

### Fonts
- **Headings**: "Playfair Display" — Elegant serif for luxury feel
- **Body**: "DM Sans" — Clean, modern sans-serif for readability

### Sizes (Mobile → Desktop)
- H1: text-4xl → text-6xl
- H2: text-3xl → text-5xl
- H3: text-2xl → text-3xl
- Body: text-base → text-lg
- Small: text-sm → text-base

### Line Heights
- Heading: tight (leading-tight)
- Body: relaxed (leading-relaxed)

## Spacing
- Base unit: 4px (Tailwind spacing scale)
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Component gaps: gap-4 md:gap-6 lg:gap-8

## Buttons
- **Primary**: Gold background, white text, rounded-lg, hover:opacity-90
- **Secondary**: Outlined, border, transparent background, hover:bg-muted
- **Ghost**: No background, underline on hover
- **Sizes**: sm (h-7), default (h-8), lg (h-9), icon (size-8)
- **Border radius**: rounded-lg (0.5rem)

## Cards
- **Style**: White/cream background, subtle shadow, rounded-xl
- **Padding**: p-6 md:p-8
- **Hover**: Subtle shadow increase, slight scale

## Border Radius
- Sm: 0.375rem
- Default: 0.625rem
- Md: 0.5rem
- Lg: 0.75rem
- Xl: 1rem (cards, images)
- Full: 9999px (pill shapes, badges)

## Shadows
- **Subtle**: shadow-sm (0 1px 2px rgba(0,0,0,0.05))
- **Default**: shadow (0 1px 3px rgba(0,0,0,0.1))
- **Medium**: shadow-md (0 4px 6px rgba(0,0,0,0.1))
- **Card**: shadow-lg for elevated cards

## Animations
- **Entrance**: fade-in-up (opacity + translateY)
- **Scroll**: fade-in on viewport entry
- **Hover**: subtle scale/brightness change
- **Duration**: 300-500ms
- **Easing**: ease-out for entrance, ease-in-out for transitions
- **Reduced motion**: All animations disabled per prefers-reduced-motion

## Responsive Breakpoints
- **320px**: Small mobile
- **375px**: iPhone SE/standard mobile
- **414px**: iPhone Plus/Max
- **768px**: Tablet
- **1024px**: Small laptop
- **1280px**: Standard desktop
- **1440px**: Large desktop
- **1920px**: Widescreen

## Navigation
- **Desktop**: Horizontal nav, logo left, links center, CTA right
- **Mobile**: Hamburger menu, slide-in sheet, sticky bottom CTA bar
- **Height**: h-16 (4rem) on desktop

## Gallery
- **Layout**: Responsive masonry/CSS columns
- **Columns**: 1 mobile, 2 tablet, 3 desktop, 4 large desktop
- **Lightbox**: Full-screen overlay, keyboard navigation, close on ESC/click
- **Image ratio**: 4:3 and 16:9 mixed
