"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Heart } from "lucide-react";

export default function SaveTheDateRomanticHero() {
  return (
    <section className="relative pt-6 pb-20 overflow-hidden bg-gradient-to-b from-lavender-200/50 via-lavender-100 to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border-2 border-champagne bg-ivory p-8 sm:p-14 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender-50 border border-champagne text-plum-royal text-xs uppercase tracking-editorial font-medium">
              <Calendar className="w-3.5 h-3.5 text-champagne-deep" />
              <span>The Big Day Reveal</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep leading-tight">
              Animated <br />
              <span className="italic font-light plum-gradient-text">
                Save-the-Date Videos
              </span>
            </h1>

            <p className="text-base text-mutedText font-light leading-relaxed max-w-lg">
              Spark anticipation among family and friends early. A dynamic 15–30 second motion teaser
              highlighting your wedding dates, pre-wedding couple portraits, and romantic music.
            </p>

            <div className="p-4 rounded-xl bg-lavender-50/70 border border-champagne/60 inline-flex items-center gap-3">
              <Heart className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span className="text-xs text-plum-deep font-medium">
                Perfect for WhatsApp Status, Stories & Direct Family Messaging
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 2 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-champagne shadow-floating"
          >
            <Image
              src="/images/save-the-date.jpg"
              alt="Save the Date Preview"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
