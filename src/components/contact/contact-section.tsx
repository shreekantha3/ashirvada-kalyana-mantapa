"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Thank you!",
      description: "This is a demo form. For real enquiries, please call or WhatsApp us.",
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
              This is a demo form. For actual enquiries, please contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+91XXXXXXXXXX">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Enquire Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to celebrate at Ashirvada? Reach out to us with your event details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Get in Touch
            </h3>
            {[
              { icon: Phone, label: "Phone", value: "+91-XXXXXXXXXX" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91-XXXXXXXXXX" },
              { icon: Mail, label: "Email", value: "contact@ashirvada.example.com" },
              { icon: MapPin, label: "Location", value: "Sindagi, Karnataka, India" },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <Card>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="event">Event Type</Label>
                  <select id="event" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Wedding</option>
                    <option>Reception</option>
                    <option>Engagement</option>
                    <option>Family Function</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your event..." className="min-h-[120px]" required />
                </div>
                <Button size="lg" className="w-full" type="submit">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Enquiry
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  This is a demo form. For real enquiries, please call or WhatsApp.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
