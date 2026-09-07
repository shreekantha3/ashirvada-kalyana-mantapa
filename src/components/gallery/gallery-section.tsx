"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { galleryImages } from "@/lib/content";
import { withBasePath } from "@/lib/site";

export function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = galleryImages.find((image) => image.id === selectedId) ?? null;

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
            Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Moments Captured at
            <br />
            <span className="text-primary">Ashirvada</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse of the beautiful spaces and celebrations hosted at Ashirvada Kalyana Mantapa.
            Sample photos shown — real venue photos coming soon.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: Math.min(i * 0.08, 0.4), duration: 0.6 }}
              className="break-inside-avoid"
            >
              <Dialog
                open={selectedId === image.id}
                onOpenChange={(open) => setSelectedId(open ? image.id : null)}
              >
                <DialogTrigger
                  render={
                    <button
                      type="button"
                      className="relative block w-full overflow-hidden rounded-xl bg-muted cursor-pointer group text-left"
                      aria-label={`View larger photo: ${image.label}`}
                    >
                      {/* Plain <img> (not next/image): with `images.unoptimized`
                          next/image drops the basePath prefix, breaking images
                          on the GitHub Pages subpath. withBasePath() handles it. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={withBasePath(image.src)}
                        alt={image.label}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center" aria-hidden="true">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="secondary" className="rounded-full" tabIndex={-1}>
                            <Plus className="h-5 w-5" aria-hidden="true" />
                          </Button>
                        </span>
                      </span>
                      <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4" aria-hidden="true">
                        <span className="text-white text-sm font-medium">{image.label}</span>
                      </span>
                    </button>
                  }
                />
                <DialogContent className="max-w-4xl">
                  <DialogTitle>{image.label}</DialogTitle>
                  <DialogDescription className="sr-only">
                    Larger view of {image.label} at Ashirvada Kalyana Mantapa.
                  </DialogDescription>
                  <div className="flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBasePath(image.src)}
                      alt={image.label}
                      width={image.width}
                      height={image.height}
                      className="w-full max-h-[70vh] object-contain rounded-lg bg-muted"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            {selected ? `Currently viewing: ${selected.label}` : "More images available on request"}
          </p>
          <Button variant="outline" asChild>
            <a href="#contact">View Full Gallery</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
