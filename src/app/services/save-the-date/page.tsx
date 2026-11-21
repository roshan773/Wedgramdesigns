import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import SaveTheDateRomanticHero from "@/components/heroes/SaveTheDateRomanticHero";

export const metadata: Metadata = {
  title: "Animated Save-the-Date Invitations | Wedgram Designs",
  description:
    "Creative animated save-the-date video invitations to announce your wedding date. Dynamic calendar reveals, couple portraits, and romantic music.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/services/save-the-date",
  },
};

export default function SaveTheDatePage() {
  return (
    <div className="space-y-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. UNIQUE ROMANTIC CALENDAR & MOTION HERO */}
      <SaveTheDateRomanticHero />

      {/* 2. Highlights */}
      <section className="bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-serif text-3xl font-medium text-plum-deep">
            Announce Your Special Date in Style
          </h2>
          <p className="text-sm text-mutedText font-light leading-relaxed">
            Our animated save-the-dates range from 15 to 30 seconds of high-energy romance. They feature
            dynamic countdown elements, calendar highlights, and couple portraits set to upbeat tracks.
          </p>
        </div>
      </section>

      {/* 3. Enquiry Form */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            Reserve Your Dates
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-plum-deep mt-2">
            Enquire for Animated Save-the-Date
          </h2>
        </div>
        <EnquiryForm />
      </section>
    </div>
  );
}
