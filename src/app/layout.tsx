import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/use-toast";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Ashirvada Kalyana Mantapa — Wedding Hall, Sindagi, Karnataka", template: "%s | Ashirvada Kalyana Mantapa" },
  description: "Premier wedding and function venue in Sindagi, Karnataka. Beautifully designed spaces for your most memorable celebrations.",
  keywords: ["Kalyan Mantapa Sindagi", "Wedding Hall Sindagi Karnataka", "Function Hall Sindagi", "Marriage Hall near Sindagi", "Wedding Venue Karnataka"],
  authors: [{ name: "Ashirvada Kalyana Mantapa" }],
  metadataBase: new URL("https://ashirvada.example.com"),
  openGraph: { type: "website", locale: "en_IN", title: "Ashirvada Kalyana Mantapa", description: "Premier wedding and function venue in Sindagi, Karnataka.", siteName: "Ashirvada Kalyana Mantapa" },
  twitter: { card: "summary_large_image", title: "Ashirvada Kalyana Mantapa", description: "Premier wedding and function venue in Sindagi, Karnataka." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <ToastProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
