"use client";

import { motion } from "framer-motion";
import { Building2, Theater, Utensils, ParkingSquare, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const facilities = [
  { icon: Building2, title: "Spacious Function Hall", desc: "Elegantly designed halls accommodating hundreds of guests. Perfect for weddings and receptions." },
  { icon: Theater, title: "Wedding Stage", desc: "Professional-grade stage with lighting and sound setup for ceremonies and performances." },
  { icon: Utensils, title: "Dining Area", desc: "Well-appointed dining space for intimate gatherings and grand celebrations." },
  { icon: ParkingSquare, title: "Ample Parking", desc: "Dedicated parking facilities for guests and wedding parties." },
  { icon: Users, title: "Guest Facilities", desc: "Comfortable waiting areas and guest amenities for convenience." },
  { icon: Heart, title: "Decoration-Friendly", desc: "Versatile spaces ready for your personal décor vision and floral arrangements." },
];

export function VenueSection() {
  return (
    <section id="venue" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            Our Venue
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Facilities &amp;
            <br />
            <span className="text-primary">Spaces</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every detail is considered at Ashirvada Kalyana Mantapa to make your celebration seamless and memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {facility.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Looking for something specific? Contact us for details.
          </p>
          <Button asChild>
            <a href="#contact">Enquire Now</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
