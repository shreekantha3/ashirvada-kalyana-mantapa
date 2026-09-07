"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink } from "./nav-link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
            <Menu className="h-6 w-6" />
          </Button>
        }
      />
      <SheetContent side="right" className="w-[280px]">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <nav className="flex flex-col gap-6 mt-8" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              {link.label}
            </NavLink>
          ))}
          <Button className="mt-4" asChild onClick={() => setOpen(false)}>
            <a href="#contact">Enquire Now</a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
