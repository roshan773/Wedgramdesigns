"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";

export default function VideoCinematicHero() {
  return (
    <section className="relative pt-6 pb-20 overflow-hidden bg-gradient-to-b from-plum-dark via-plum-deep to-plum-royal text-ivory rounded-3xl mx-4 sm:mx-8 my-4 border-2 border-champagne/60 shadow-floating">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/10 backdrop-blur-md border border-champagne/40 text-champagne text-xs uppercase tracking-luxury mb-4"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Cinematic Motion Picture Invitations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight"
          >
            Wedding Invitation Videos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm sm:text-base text-ivory/80 font-light leading-relaxed max-w-xl mx-auto"
          >
            Immerse your guests in your love story with Ultra HD video animations, personalized
            soundtracks, and ceremonial sequences crafted in Surat, India.
          </motion.p>
        </div>

        {/* Featured Large Video Player Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-sm sm:max-w-md mx-auto aspect-[9/15] rounded-3xl overflow-hidden border-2 border-champagne shadow-luxury bg-black"
        >
          <video
            src="/images/WhatsApp Video 2025-04-23 at 7.56.48 PM.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
