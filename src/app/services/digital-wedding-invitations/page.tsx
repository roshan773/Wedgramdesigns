import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import DigitalInteractiveHero from "@/components/heroes/DigitalInteractiveHero";

export const metadata: Metadata = {
  title: "Digital Wedding Invitations | Wedgram Designs",
  description:
    "Luxury digital wedding invitations crafted with regal Indian typography, botanical artwork, and custom couple monograms for modern weddings.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/services/digital-wedding-invitations",
  },
};

export default function DigitalWeddingInvitationsPage() {
  return (
    <div className="space-y-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. UNIQUE 3D INTERACTIVE DIGITAL CARD HERO */}
      <DigitalInteractiveHero />

      {/* 2. Key Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-medium text-plum-deep">
            The Perfect Blend of Tradition and Convenience
          </h2>
          <p className="text-sm text-mutedText font-light leading-relaxed">
            Designed for couples seeking elegance without the constraints of paper printing. Each card
            is formatted for instant digital distribution, allowing your family to send personalized
            invites across the globe in seconds.
          </p>
          <ul className="space-y-3 text-sm text-plum-deep">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>Tailored color palettes to complement your wedding theme</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>Multi-language script support (English, Hindi, Gujarati, etc.)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>High-resolution PDF & JPEG ready for print or instant messaging</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-lavender-50/70 border border-champagne/70 text-center">
          <h3 className="font-serif text-2xl font-normal text-plum-deep mb-3">
            Instant Digital Delivery
          </h3>
          <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed mb-4">
            Receive your invitation files directly on WhatsApp and email, ready to share with your
            entire guest list effortlessly.
          </p>
        </div>
      </section>

      {/* 3. Enquiry Form */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            Order This Service
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-plum-deep mt-2">
            Enquire for Digital Invitations
          </h2>
        </div>
        <EnquiryForm />
      </section>
    </div>
  );
}
