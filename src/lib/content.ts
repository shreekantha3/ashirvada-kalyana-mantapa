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

export const galleryImages: GalleryImage[] = [
  { id: 1, label: "Venue Exterior", src: "/images/venue-exterior.jpg", width: 800, height: 600 },
  { id: 2, label: "Main Hall", src: "/images/main-hall.jpg", width: 800, height: 600 },
  { id: 3, label: "Wedding Stage", src: "/images/stage.jpg", width: 800, height: 600 },
  { id: 4, label: "Dining Area", src: "/images/dining.jpg", width: 800, height: 600 },
  { id: 5, label: "Garden/Courtyard", src: "/images/garden.jpg", width: 800, height: 600 },
  { id: 6, label: "Reception Hall", src: "/images/reception.jpg", width: 800, height: 600 },
  { id: 7, label: "Prayer Hall", src: "/images/prayer.jpg", width: 800, height: 600 },
  { id: 8, label: "Cocktail Area", src: "/images/cocktail.jpg", width: 800, height: 600 },
  { id: 9, label: "Guest Lounge", src: "/images/lounge.jpg", width: 800, height: 600 },
  // Sample stock photos (Unsplash, free to use) — replace with real venue photos.
  { id: 10, label: "Grand Banquet Hall", src: "/images/banquet-hall.jpg", width: 1200, height: 775 },
  { id: 11, label: "Festive Dining", src: "/images/festive-dining.jpg", width: 1200, height: 800 },
  { id: 12, label: "Outdoor Ceremony", src: "/images/outdoor-ceremony.jpg", width: 1200, height: 800 },
  { id: 13, label: "Wedding Details", src: "/images/wedding-details.jpg", width: 1200, height: 800 },
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
