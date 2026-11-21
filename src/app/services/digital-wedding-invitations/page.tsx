import type { Metadata } from "next";
import Image from "next/image";
import { FileText, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

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
      <section className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium uppercase tracking-editorial mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>Luxury Digital Stationery</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep mb-6">
          Digital Wedding Invitations
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-6" />
        <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
          Contemporary, sustainable, and undeniably elegant. Our digital wedding cards combine timeless
          calligraphy with bespoke illustrations to deliver an unforgettable announcement to your guests.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-champagne shadow-subtle max-w-md mx-auto w-full">
          <Image
            src="/images/Dark Orange and Gold Bordered Wedding Invitation.png"
            alt="Digital Wedding Invitation Card by Wedgram Designs"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

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
      </section>

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
