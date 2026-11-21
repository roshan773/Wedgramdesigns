"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

// Dynamic import for Three.js Card with static fallback
const ThreeInvitationCard = dynamic(
  () => import("@/components/3d/ThreeInvitationCard"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center relative">
        <div className="relative aspect-[3/4] w-64 rounded-2xl overflow-hidden border-2 border-champagne shadow-luxury bg-ivory">
          <Image
            src="/images/Dark Orange and Gold Bordered Wedding Invitation.png"
            alt="Wedding Invitation Preview"
            fill
            sizes="260px"
            className="object-cover"
          />
        </div>
      </div>
    ),
  }
);

export default function HomeEditorialHero() {
  return (
    <section className="relative pt-6 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-gradient-to-b from-lavender-200/50 via-lavender-100 to-ivory">
      {/* Decorative floral background aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-floral-soft/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography with Framer Motion Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium tracking-editorial uppercase shadow-subtle"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne-deep" />
              <span>Bespoke Wedding Invitation Studio • Surat, Gujarat</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.08] text-plum-deep tracking-tight"
            >
              Beautiful Invitations for <br />
              <span className="italic font-light plum-gradient-text">
                Your Forever Story
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-mutedText font-light leading-relaxed max-w-2xl"
            >
              Thoughtfully designed wedding invitations that bring your special moments to life.
              Craft unforgettable wedding video invitations with our bespoke creations, offering
              unrivaled elegance and personalized digital marriage invites that make a lasting impression.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <Link
                href="/gallery"
                className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-plum-royal hover:bg-plum-dark text-ivory text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle hover:shadow-luxury transition-all duration-300 group border border-champagne/60"
              >
                <span>Explore Our Designs</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-champagne" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-ivory hover:bg-lavender-50 text-plum-royal border border-champagne text-xs uppercase tracking-luxury font-semibold rounded-sm transition-all duration-300 shadow-subtle"
              >
                Create Your Invitation
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-champagne/50 w-full max-w-lg"
            >
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-plum-royal">
                  100%
                </span>
                <span className="text-xs uppercase tracking-wider text-mutedText">
                  Personalized
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-plum-royal">
                  Ultra HD
                </span>
                <span className="text-xs uppercase tracking-wider text-mutedText">
                  Video Quality
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-plum-royal">
                  Global
                </span>
                <span className="text-xs uppercase tracking-wider text-mutedText">
                  Digital Delivery
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Card with Floating Artwork Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-champagne/60 -rotate-2 pointer-events-none" />

              {/* Three.js Interactive 3D Canvas */}
              <div className="relative rounded-2xl overflow-hidden shadow-floating bg-ivory border-2 border-champagne/80 p-2 sm:p-4">
                <div className="text-center py-1">
                  <span className="text-[10px] uppercase tracking-luxury text-plum-royal font-semibold">
                    Interactive 3D Preview • Drag or Hover to Tilt
                  </span>
                </div>
                <ThreeInvitationCard textureUrl="/images/Dark Orange and Gold Bordered Wedding Invitation.png" />
              </div>

              {/* Floating Wedding Couple Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="hidden sm:flex absolute -bottom-6 -left-6 bg-ivory p-3.5 rounded-2xl border-2 border-champagne shadow-luxury max-w-xs items-center gap-3 z-20"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-champagne flex-shrink-0">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Wedgram Designs Crest"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-plum-deep font-serif">
                    Wedgram Designs
                  </p>
                  <p className="text-[11px] text-mutedText">
                    Surat, Gujarat • India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
