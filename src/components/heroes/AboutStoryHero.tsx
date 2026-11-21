"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function AboutStoryHero() {
  return (
    <section className="relative pt-6 pb-20 overflow-hidden bg-gradient-to-b from-lavender-200/40 via-lavender-100 to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Cinematic Image with Overlapping Typography */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-champagne/80 shadow-luxury bg-plum-dark">
          <div className="aspect-[16/9] sm:aspect-[21/9] relative">
            <Image
              src="https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?q=80&w=2070&auto=format&fit=crop"
              alt="Indian Wedding Celebration Story by Wedgram Designs"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover brightness-90"
              priority
            />
            {/* Soft Plum Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-plum-dark via-plum-dark/40 to-transparent" />

            {/* Overlapping Editorial Narrative */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 max-w-2xl text-ivory">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory/20 backdrop-blur-md border border-champagne/60 text-champagne text-xs uppercase tracking-luxury mb-4"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Our Heritage & Vision • Surat, India</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight"
              >
                Where Wedding Heritage Meets{" "}
                <span className="italic font-light text-champagne">
                  Cinematic Elegance
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-4 text-xs sm:text-sm md:text-base text-ivory/80 font-light leading-relaxed max-w-xl"
              >
                Rooted in the timeless richness of Indian wedding ceremonies, we craft bespoke
                video invitations and digital stationery tailored uniquely to your love story.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
