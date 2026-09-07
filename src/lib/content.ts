// ─── Owner-editable content ──────────────────────────────────────────────
// Change photos, captions, and reviews here — no JSX edits needed.
// All entries below are SAMPLE/DUMMY data for the demo. Replace with real
// venue photos and genuine customer reviews before production launch.

export interface GalleryImage {
  id: number;
  label: string;
  src: string;
  width: number;
  height: number;
}

// Sample stock photos (Unsplash, free to use) — replace with real venue photos.
export const galleryImages: GalleryImage[] = [
  { id: 1, label: "Grand Banquet Hall", src: "/images/banquet-hall.jpg", width: 1200, height: 775 },
  { id: 2, label: "Decorated Hall", src: "/images/decorated-hall.jpg", width: 1200, height: 801 },
  { id: 3, label: "Wedding Arch", src: "/images/wedding-arch.jpg", width: 1200, height: 801 },
  { id: 4, label: "Outdoor Ceremony", src: "/images/outdoor-ceremony.jpg", width: 1200, height: 800 },
  { id: 5, label: "Garden Mandap Setup", src: "/images/garden-mandap.jpg", width: 1200, height: 801 },
  { id: 6, label: "Festive Dining", src: "/images/festive-dining.jpg", width: 1200, height: 800 },
  { id: 7, label: "Bridal Bouquet", src: "/images/bridal-bouquet.jpg", width: 1200, height: 800 },
  { id: 8, label: "Wedding Details", src: "/images/wedding-details.jpg", width: 1200, height: 800 },
  { id: 9, label: "Holding Hands", src: "/images/holding-hands.jpg", width: 1200, height: 800 },
  { id: 10, label: "Happy Couple", src: "/images/happy-couple.jpg", width: 1200, height: 800 },
  { id: 11, label: "Sunset Shoot", src: "/images/sunset-shoot.jpg", width: 1200, height: 800 },
  { id: 12, label: "Balloon Send-off", src: "/images/balloon-sendoff.jpg", width: 1200, height: 800 },
  { id: 13, label: "Festive Decor", src: "/images/festive-decor.jpg", width: 1200, height: 800 },
];

export interface Testimonial {
  id: number;
  name: string;
  event: string;
  quote: string;
  rating: number;
}

// SAMPLE reviews for demo purposes only — replace with genuine customer
// reviews (ideally synced with your Google Business Profile).
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Arjun",
    event: "Wedding · Sample review",
    quote:
      "The hall looked beautiful and the team helped us plan every ritual on time. Our guests are still talking about the food and the decoration.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lakshmi S.",
    event: "Naming Ceremony · Sample review",
    quote:
      "Spacious, clean, and easy for elders to move around. Parking was smooth even with 300 guests. Highly recommended for family functions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ravi Kulkarni",
    event: "Reception · Sample review",
    quote:
      "Good sound and lighting setup, flexible stage, and the location in Sindagi is convenient for everyone coming from nearby towns.",
    rating: 4,
  },
];
