"use client";

import { motion } from "framer-motion";
import { Heart, Baby, Cake, Music, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  { icon: Heart, title: "Wedding", desc: "Exchange vows in beautiful, timeless surroundings." },
  { icon: Cake, title: "Reception", desc: "Celebrate with family and friends in our elegant halls." },
  { icon: Baby, title: "Naming Ceremony", desc: "Bless your little one in a sacred, memorable setting." },
  { icon: Music, title: "Cultural Events", desc: "Host performances and cultural programs in our versatile spaces." },
  { icon: Calendar, title: "Family Functions", desc: "From birthdays to anniversaries, every celebration matters." },
];

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            Events
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Perfect for Every
            <br />
            <span className="text-primary">Occasion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it&rsquo;s a grand wedding or an intimate family gathering, Ashirvada provides the ideal setting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 h-full text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <event.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.desc}
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
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Planning an event not listed here? We&rsquo;re happy to discuss your needs.
          </p>
          <Button asChild>
            <a href="#contact">Talk to Our Team</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
