"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Ashirvada Kalyana Mantapa — home">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center" aria-hidden="true">
              <span className="text-primary-foreground font-heading font-bold text-sm">A</span>
            </div>
            <span className="font-heading text-lg font-semibold hidden sm:inline">
              Ashirvada
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+91XXXXXXXXXX"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </a>
            <Button variant="default" className="hidden sm:flex" asChild>
              <a href="#contact">Enquire Now</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
