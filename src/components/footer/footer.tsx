"use client";

import { Globe, Radio, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold">A</span>
              </div>
              <span className="font-heading text-xl font-semibold">Ashirvada</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              A premier wedding and function venue in Sindagi, Karnataka. Creating beautiful memories for celebrations that matter.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground" aria-label="Website">
                <Globe className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground" aria-label="Social">
                <Radio className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#about", label: "About" },
                { href: "#venue", label: "Venue" },
                { href: "#gallery", label: "Gallery" },
                { href: "#events", label: "Events" },
                { href: "#location", label: "Location" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-primary-foreground transition-colors">+91-XXXXXXXXXX</a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:contact@ashirvada.example.com" className="hover:text-primary-foreground transition-colors">contact@ashirvada.example.com</a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Sindagi, Karnataka</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Plan Your Event</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Ready to celebrate? Get in touch with us.
            </p>
            <Button className="w-full" asChild>
              <a href="#contact">Enquire Now</a>
            </Button>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Ashirvada Kalyana Mantapa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 text-sm hover:text-primary-foreground/70 transition-colors">Privacy</a>
            <a href="#" className="text-primary-foreground/50 text-sm hover:text-primary-foreground/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
