import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import CustomArtisticHero from "@/components/heroes/CustomArtisticHero";

export const metadata: Metadata = {
  title: "Custom Wedding Invitations | Wedgram Designs",
  description:
    "Bespoke Indian wedding invitations tailored to your cultural traditions, royal aesthetics, venue sketches, and personal story in Surat, India.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/services/custom-wedding-invitations",
  },
};

export default function CustomWeddingInvitationsPage() {
  return (
    <div className="space-y-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. UNIQUE ARTISTIC COUTURE HERO */}
      <CustomArtisticHero />

      {/* 2. Bespoke Details */}
      <section className="bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-serif text-3xl font-medium text-plum-deep">
            A True Reflection of Your Heritage & Love
          </h2>
          <p className="text-sm text-mutedText font-light leading-relaxed">
            Whether you want royal Rajasthani palace motifs, delicate pastel floral watercolors, or
            sleek modern typography, our Surat studio brings your imagination to life.
          </p>
        </div>
      </section>

      {/* 3. Enquiry Form */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            Bespoke Commission
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-plum-deep mt-2">
            Enquire for Custom Designs
          </h2>
        </div>
        <EnquiryForm />
      </section>
    </div>
  );
}
