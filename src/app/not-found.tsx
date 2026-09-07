"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-screen">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-6xl font-bold text-foreground mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground mb-8"
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
