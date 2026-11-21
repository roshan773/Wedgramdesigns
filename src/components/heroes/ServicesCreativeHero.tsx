"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesCreativeHero() {
  return (
    <section className="relative pt-6 pb-20 overflow-hidden bg-gradient-to-b from-lavender-200/50 via-lavender-100 to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Services Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium uppercase tracking-editorial">
              <Sparkles className="w-3.5 h-3.5 text-champagne-deep" />
              <span>Bespoke Design Suites</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep leading-tight">
              Curated Wedding <br />
              <span className="italic font-light plum-gradient-text">
                Invitation Services
              </span>
            </h1>

            <p className="text-base text-mutedText font-light leading-relaxed max-w-lg">
              Explore four distinct wedding invitation experiences: from cinematic Ultra HD motion
              videos to delicate royal digital cards, animated save-the-dates, and bespoke couture suites.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-plum-royal hover:bg-plum-dark text-ivory text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle transition-all border border-champagne/60"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-champagne" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Asymmetric Mosaic of Floating Previews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-champagne shadow-luxury bg-ivory group">
                <Image
                  src="/images/Dark Orange and Gold Bordered Wedding Invitation.png"
                  alt="Digital Wedding Invitation Preview"
                  fill
                  sizes="260px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-ivory text-xs font-serif opacity-0 group-hover:opacity-100 transition-opacity">
                  Digital Stationery Card
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-champagne shadow-luxury bg-ivory group">
                <Image
                  src="/images/Photo2.jpeg"
                  alt="Ceremonial Wedding Invitation Visual"
                  fill
                  sizes="260px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-ivory text-xs font-serif opacity-0 group-hover:opacity-100 transition-opacity">
                  Custom Illustrated Suite
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
