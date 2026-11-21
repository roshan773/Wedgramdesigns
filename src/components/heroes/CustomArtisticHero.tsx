"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";

export default function CustomArtisticHero() {
  return (
    <section className="relative pt-6 pb-20 overflow-hidden bg-gradient-to-b from-lavender-200/50 via-lavender-100 to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium uppercase tracking-editorial mb-4"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Bespoke Indian Couture Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep leading-tight"
          >
            Custom Wedding <br />
            <span className="italic font-light plum-gradient-text">
              Invitation Suites
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-base text-mutedText font-light leading-relaxed max-w-xl mx-auto"
          >
            Handcrafted for couples who desire an original masterpiece. Hand-painted floral motifs,
            ceremony caricatures, and palette coordination with your wedding couture.
          </motion.p>
        </div>

        {/* Layered Floating Gallery Spread */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-champagne shadow-luxury bg-ivory"
          >
            <Image
              src="https://marketplace.canva.com/EAGHPJH9kNE/1/0/1135w/canva-light-pink-royal-elegant-floral-indian-wedding-invitation-RYr8wyzxvto.jpg"
              alt="Royal Indian Wedding Invitation"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-champagne shadow-luxury bg-ivory sm:-mt-6"
          >
            <Image
              src="/images/Photo2.jpeg"
              alt="Custom Portrait Design"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-champagne shadow-luxury bg-ivory"
          >
            <Image
              src="/images/Dark Orange and Gold Bordered Wedding Invitation.png"
              alt="Bordered Heritage Card"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
