"use client";

import { useState } from "react";
import { Image, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const galleryImages = [
  { id: 1, label: "Venue Exterior", placeholder: true },
  { id: 2, label: "Main Hall", placeholder: true },
  { id: 3, label: "Wedding Stage", placeholder: true },
  { id: 4, label: "Dining Area", placeholder: true },
  { id: 5, label: "Garden/Courtyard", placeholder: true },
  { id: 6, label: "Reception Hall", placeholder: true },
  { id: 7, label: "Prayer Hall", placeholder: true },
  { id: 8, label: "Cocktail Area", placeholder: true },
  { id: 9, label: "Guest Lounge", placeholder: true },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="break-inside-avoid"
            >
              <Dialog open={selectedImage === image.id} onOpenChange={(open) => setSelectedImage(open ? image.id : null)}>
                <DialogTrigger>
                  <div className="relative overflow-hidden rounded-xl bg-muted cursor-pointer group">
                    <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-100 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center">
                      {/* @ts-expect-error alt prop for a11y compliance */}
                      <Image className="h-8 w-8 text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="secondary" className="rounded-full">
                          <Plus className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{image.label}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <ScrollArea className="max-h-[80vh]">
                    <div className="flex items-center justify-center">
                      <div className="w-full aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">Image placeholder — replace with real photo</p>
                      </div>
                    </div>
                    <p className="text-center text-muted-foreground mt-4">{image.label}</p>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            More images available on request
          </p>
          <Button variant="outline" asChild>
            <a href="#contact">View Full Gallery</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
