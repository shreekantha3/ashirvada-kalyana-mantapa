"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { siteConfig } from "@/lib/site";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Phone", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.phoneDisplay, href: siteConfig.whatsappHref },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Location", value: siteConfig.address },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [enquiry, setEnquiry] = useState({ name: "", event: "Wedding", date: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setEnquiry({
      name: String(data.get("name") ?? ""),
      event: String(data.get("event") ?? "Wedding"),
      date: String(data.get("date") ?? ""),
    });
    setSubmitted(true);
    toast({
      title: "Thank you!",
      description: "This is a demo form. For real enquiries, please call or WhatsApp us.",
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${siteConfig.shortName}! I'm ${enquiry.name || "a guest"}. I'm interested in booking for a ${enquiry.event}${enquiry.date ? ` on ${enquiry.date}` : ""}. Please share availability and pricing. (Demo enquiry from the website)`
  );
  const whatsappHref = `${siteConfig.whatsappHref}?text=${whatsappMessage}`;

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
              This is a demo form. For actual enquiries, please contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={siteConfig.phoneHref}>
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="ghost" size="lg" onClick={() => setSubmitted(false)}>
                <RotateCcw className="mr-2 h-5 w-5" aria-hidden="true" />
                Send another enquiry
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
          initial={{ opacity: 0, y: 24 }}
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
            {CONTACT_ITEMS.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
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
                    <Input id="name" name="name" placeholder="Your name" autoComplete="name" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" autoComplete="tel" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" autoComplete="email" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="event">Event Type</Label>
                    <select id="event" name="event" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Wedding</option>
                      <option>Reception</option>
                      <option>Engagement</option>
                      <option>Family Function</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" name="date" type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your event — expected guests, dates, requirements…" className="min-h-[120px]" required />
                </div>
                <Button size="lg" className="w-full" type="submit">
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Send Enquiry
                </Button>
                <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 accent-primary" />
                  <span>
                    I agree to be contacted about my enquiry via phone, WhatsApp, or email.
                    This is a demo form — no details are stored or sent anywhere.
                  </span>
                </label>
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
