import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/use-toast";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shreekantha3.github.io/ashirvada-kalyana-mantapa";

export const metadata: Metadata = {
  title: { default: "Ashirvada Kalyana Mantapa — Wedding Hall, Sindagi, Karnataka", template: "%s | Ashirvada Kalyana Mantapa" },
  description: "Premier wedding and function venue in Sindagi, Karnataka. Beautifully designed spaces for your most memorable celebrations.",
  keywords: ["Kalyan Mantapa Sindagi", "Wedding Hall Sindagi Karnataka", "Function Hall Sindagi", "Marriage Hall near Sindagi", "Wedding Venue Karnataka"],
  authors: [{ name: "Ashirvada Kalyana Mantapa" }],
  metadataBase: new URL(siteUrl),
  openGraph: { type: "website", locale: "en_IN", url: siteUrl, title: "Ashirvada Kalyana Mantapa", description: "Premier wedding and function venue in Sindagi, Karnataka.", siteName: "Ashirvada Kalyana Mantapa", images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: "Ashirvada Kalyana Mantapa — Wedding Hall, Sindagi" }] },
  twitter: { card: "summary_large_image", title: "Ashirvada Kalyana Mantapa", description: "Premier wedding and function venue in Sindagi, Karnataka.", images: [`${siteUrl}/images/og-image.jpg`] },
  robots: { index: true, follow: true },
};

// Structured data for search engines. NOTE: no aggregateRating/review is
// included on purpose — review markup must reflect genuine reviews only.
const venueJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Ashirvada Kalyana Mantapa",
  description: "Premier wedding and function venue in Sindagi, Karnataka.",
  url: siteUrl,
  image: `${siteUrl}/images/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sindagi",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 16.9196207, longitude: 76.2185894 },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(venueJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
