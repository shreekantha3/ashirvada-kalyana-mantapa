"use client";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig } from "@/lib/site";

const prefilled = encodeURIComponent(
  `Hello ${siteConfig.shortName}! I'd like to enquire about booking the venue. Please share availability and pricing. (Demo enquiry from the website)`
);

export function WhatsAppFloat() {
  return (
    <a
      href={`${siteConfig.whatsappHref}?text=${prefilled}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-[#25D366]" />
      </span>
    </a>
  );
}
