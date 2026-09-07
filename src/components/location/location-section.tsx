"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            Location
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Find Us in
            <br />
            <span className="text-primary">Sindagi, Karnataka</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in the heart of Sindagi, Karnataka. Easy to reach with ample parking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden border border-border"
          >
            <iframe
              title="Map — Ashirvada Kalyana Mantapa, Sindagi"
              src="https://www.google.com/maps?q=16.9196207,76.2185894&output=embed"
              className="w-full aspect-video border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Address & Directions */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      Ashirvada Kalyana Mantapa
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Sindagi, Karnataka, India
                    </p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      Coordinates: 16.9196207, 76.2185894
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" asChild>
                <a href="https://www.google.com/maps?q=16.9196207,76.2185894" target="_blank" rel="noopener noreferrer">
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="tel:+91XXXXXXXXXX">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Located near the center of Sindagi with easy access from major roads.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
