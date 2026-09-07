import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const QUICK_LINKS = [
  { href: "#about", label: "About" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200 dark:bg-black dark:border-t dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center" aria-hidden="true">
                <span className="text-primary-foreground font-heading font-bold">A</span>
              </div>
              <span className="font-heading text-xl font-semibold text-white">{siteConfig.shortName}</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              A premier wedding and function venue in Sindagi, Karnataka. Creating beautiful memories for celebrations that matter.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3" aria-label="Footer">
              {QUICK_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-neutral-400 text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={siteConfig.phoneHref} className="hover:text-white transition-colors">{siteConfig.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-white">Plan Your Event</h4>
            <p className="text-neutral-400 text-sm mb-4">
              Ready to celebrate? Get in touch with us.
            </p>
            <Button className="w-full" asChild>
              <a href="#contact">Enquire Now</a>
            </Button>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm">
            Demo website — business details to be verified by the owner.
          </p>
        </div>
      </div>
    </footer>
  );
}
