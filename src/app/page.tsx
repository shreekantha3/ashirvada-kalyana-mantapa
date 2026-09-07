import { HeroSection } from "@/components/hero/hero-section";
import { TrustSection } from "@/components/trust/trust-section";
import { AboutSection } from "@/components/about/about-section";
import { VenueSection } from "@/components/venue/venue-section";
import { GallerySection } from "@/components/gallery/gallery-section";
import { EventsSection } from "@/components/events/events-section";
import { LocationSection } from "@/components/location/location-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/navigation/header";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <VenueSection />
        <GallerySection />
        <EventsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
