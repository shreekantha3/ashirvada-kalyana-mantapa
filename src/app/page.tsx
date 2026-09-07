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
    <main className="flex-1">
      <Header />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <VenueSection />
      <GallerySection />
      <EventsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
