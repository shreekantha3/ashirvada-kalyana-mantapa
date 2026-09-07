"use client";

import { motion } from "framer-motion";
import { Heart, HandHeart, Flower2, Music } from "lucide-react";

const features = [
  { icon: Heart, label: "Elegant Atmosphere", desc: "Beautifully designed spaces for your most cherished celebrations." },
  { icon: HandHeart, label: "Hospitality First", desc: "Dedicated team ensuring every detail of your event is perfect." },
  { icon: Flower2, label: "Versatile Spaces", desc: "Multiple halls and outdoor areas for every type of celebration." },
  { icon: Music, label: "Prime Location", desc: "Conveniently located in Sindagi, Karnataka with easy access." },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Designed for Memorable
            <br />
            <span className="text-primary">Celebrations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ashirvada Kalyana Mantapa is a premier wedding and function venue in Sindagi,
            Karnataka. We create beautiful spaces where your most important moments come to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
