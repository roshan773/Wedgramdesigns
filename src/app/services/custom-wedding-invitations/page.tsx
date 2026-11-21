import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

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
      <section className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium uppercase tracking-editorial mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Couture</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep mb-6">
          Custom Wedding Invitations
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-6" />
        <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
          For couples envisioning a design uniquely their own. We work one-on-one with you to handcraft
          custom illustrations, bespoke color schemes, and ceremonial sequences.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-champagne shadow-subtle max-w-md mx-auto w-full">
          <Image
            src="https://marketplace.canva.com/EAGHPJH9kNE/1/0/1135w/canva-light-pink-royal-elegant-floral-indian-wedding-invitation-RYr8wyzxvto.jpg"
            alt="Royal Floral Indian Wedding Invitation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-medium text-plum-deep">
            A True Reflection of Your Heritage & Love
          </h2>
          <p className="text-sm text-mutedText font-light leading-relaxed">
            Whether you want royal Rajasthani palace motifs, delicate pastel floral watercolors, or
            sleek modern typography, our Surat studio brings your imagination to life.
          </p>
          <ul className="space-y-3 text-sm text-plum-deep">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>Full consultation on themes, colors, and ceremonial structure</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>Custom caricature and illustrated couple portrait options</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>Dedicated revisions until your invitation is flawless</span>
            </li>
          </ul>
        </div>
      </section>

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
