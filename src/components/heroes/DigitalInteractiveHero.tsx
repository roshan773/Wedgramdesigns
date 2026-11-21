"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const ThreeInvitationCard = dynamic(
  () => import("@/components/3d/ThreeInvitationCard"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] flex items-center justify-center">
        <div className="relative aspect-[3/4] w-60 rounded-2xl overflow-hidden border-2 border-champagne shadow-luxury bg-ivory">
          <Image
            src="/images/Dark Orange and Gold Bordered Wedding Invitation.png"
            alt="Card Mockup"
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
      </div>
    ),
  }
);

export default function DigitalInteractiveHero() {
  return (
    <section className="relative pt-6 pb-20 overflow-hidden bg-gradient-to-b from-lavender-200/50 via-lavender-100 to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium uppercase tracking-editorial">
              <FileText className="w-3.5 h-3.5" />
              <span>Layered Digital Stationery</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep leading-tight">
              Digital Wedding <br />
              <span className="italic font-light plum-gradient-text">
                Invitation Cards
              </span>
            </h1>

            <p className="text-base text-mutedText font-light leading-relaxed max-w-lg">
              Regal paper aesthetics without printing delays. Interact with our digital card preview
              to experience the layered textures, gold borders, and delicate typography.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-6 relative bg-ivory rounded-3xl border-2 border-champagne p-4 shadow-luxury"
          >
            <div className="text-center py-1">
              <span className="text-[10px] uppercase tracking-luxury text-plum-royal font-semibold">
                3D Interactive Digital Card • Hover or Tilt
              </span>
            </div>
            <ThreeInvitationCard textureUrl="/images/Dark Orange and Gold Bordered Wedding Invitation.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
