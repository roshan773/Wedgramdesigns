"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function GalleryPortfolioHero() {
  return (
    <section className="relative pt-6 pb-12 overflow-hidden bg-gradient-to-b from-lavender-200/50 to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-champagne text-plum-royal text-xs uppercase tracking-editorial font-medium mb-4 shadow-subtle"
        >
          <Sparkles className="w-3.5 h-3.5 text-champagne-deep" />
          <span>Curated Video & Card Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep leading-tight"
        >
          Captivating Creations & <br />
          <span className="italic font-light plum-gradient-text">
            Wedding Design Gallery
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-4 text-base text-mutedText font-light leading-relaxed max-w-xl mx-auto"
        >
          Explore authentic video invitations, animated save-the-dates, and digital cards created for
          weddings across Surat, India, and abroad.
        </motion.p>
      </div>
    </section>
  );
}
