import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, Heart, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import AboutStoryHero from "@/components/heroes/AboutStoryHero";

export const metadata: Metadata = {
  title: "About Us | Wedgram Designs",
  description:
    "Learn about Wedgram Designs, our love for bespoke wedding invitations, creative philosophy, and commitment to crafting unforgettable wedding videos in Surat, India.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. UNIQUE FULL-WIDTH CINEMATIC HERO */}
      <AboutStoryHero />

      {/* 2. Vision, Mission & Design Philosophy */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-ivory border border-champagne/70 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-full bg-lavender-50 border border-champagne flex items-center justify-center text-plum-royal mb-6 shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-plum-deep mb-3">Our Vision</h3>
            <p className="text-sm text-mutedText font-light leading-relaxed">
              To be the most trusted and cherished digital wedding invitation studio for couples
              worldwide, transforming ceremonial announcements into timeless works of digital art.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-ivory border border-champagne/70 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-full bg-lavender-50 border border-champagne flex items-center justify-center text-plum-royal mb-6 shadow-sm">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-plum-deep mb-3">Our Mission</h3>
            <p className="text-sm text-mutedText font-light leading-relaxed">
              To celebrate every couple&apos;s unique romance by delivering bespoke, high-definition video
              invitations that evoke anticipation, joy, and emotional connection across family and friends.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-ivory border border-champagne/70 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-full bg-lavender-50 border border-champagne flex items-center justify-center text-plum-royal mb-6 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-plum-deep mb-3">
              Design Philosophy
            </h3>
            <p className="text-sm text-mutedText font-light leading-relaxed">
              We combine delicate floral aesthetics, balanced editorial typography, and seamless
              motion design to craft invitations that feel regal, romantic, and effortlessly modern.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Personalisation Approach */}
      <section className="bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
              Bespoke Craftsmanship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-plum-deep leading-tight">
              Our Approach to Personalisation
            </h2>
            <div className="w-16 h-[1.5px] bg-champagne" />
            <p className="text-sm sm:text-base text-mutedText font-light leading-relaxed">
              At Wedgram Designs, no two love stories are identical, and no two invitations should be.
              We take the time to understand your preferred music, aesthetic traditions, ceremonial
              events, and romantic memories, translating them into motion graphics and tailored stationery.
            </p>
            <ul className="space-y-3 pt-2 text-sm text-plum-deep">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
                <span>Custom ceremonial sequencing (Haldi, Mehendi, Sangeet, Wedding, Reception)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
                <span>Personalized music curation and audio sync</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
                <span>Bespoke color palettes matching your wedding attire & venue decor</span>
              </li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-champagne shadow-subtle">
            <Image
              src="/images/Photo2.jpeg"
              alt="Bridal floral elegance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="text-center py-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-plum-deep mb-4">
          Ready to Begin Your Invitation Journey?
        </h2>
        <p className="text-sm text-mutedText max-w-md mx-auto mb-8 font-light">
          Connect with our design studio in Surat to discuss your vision and create an invitation suite
          your guests will treasure.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-plum-royal hover:bg-plum-dark text-ivory text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle transition-all border border-champagne/60"
        >
          <span>Enquire With Our Designers</span>
          <ArrowRight className="w-4 h-4 text-champagne" />
        </Link>
      </section>
    </div>
  );
}
