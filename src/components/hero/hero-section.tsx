"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url(/images/hero-placeholder.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-r-background/80 md:bg-gradient-to-r-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Premium Wedding & Function Venue
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6"
          >
            Celebrate Your Most Beautiful
            <br />
            <span className="text-primary">Moments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            Ashirvada Kalyana Mantapa is a beautifully designed venue in Sindagi, Karnataka —
            crafted for weddings, receptions, and life&rsquo;s most cherished celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <a href="#contact">
                Enquire Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
              <a href="#location">
                <MapPin className="mr-2 h-4 w-4" />
                Location
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex items-center gap-2 text-muted-foreground justify-center md:justify-start"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Sindagi, Karnataka, India</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
