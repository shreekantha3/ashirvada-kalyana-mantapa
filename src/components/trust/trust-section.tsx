"use client";

import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Google Rating */}
          <div className="flex flex-col items-center md:items-start gap-3 p-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    "h-5 w-5",
                    star <= 4
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted stroke-muted-foreground/30"
                  )}
                />
              ))}
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">4.0*</span>
            <span className="text-sm text-muted-foreground">Google Rating</span>
            <span className="text-xs text-muted-foreground/70 mt-1">
              *Rating shown is indicative — contact venue for latest rating
            </span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start gap-3 p-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-heading font-semibold text-foreground">Sindagi, Karnataka</span>
            <span className="text-sm text-muted-foreground">India</span>
            <span className="text-xs text-muted-foreground/70 mt-1">
              Located in the heart of Karnataka
            </span>
          </div>

          {/* Years of Excellence */}
          <div className="flex flex-col items-center md:items-start gap-3 p-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-heading font-bold text-primary">✓</span>
            </div>
            <span className="text-lg font-heading font-semibold text-foreground">Trusted Venue</span>
            <span className="text-sm text-muted-foreground">For Weddings & Celebrations</span>
            <span className="text-xs text-muted-foreground/70 mt-1">
              *Years of operation not verified — contact venue for details
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
