import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

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
      <section className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium uppercase tracking-editorial mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>Motion Teasers</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep mb-6">
          Animated Save-the-Date
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-6" />
        <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
          Create buzz and ensure your loved ones reserve the date for your once-in-a-lifetime
          celebration with our animated save-the-date video invites.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-champagne shadow-subtle">
          <Image
            src="/images/save-the-date.jpg"
            alt="Save the Date Video Invitation Preview"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-medium text-plum-deep">
            Announce Your Special Date in Style
          </h2>
          <p className="text-sm text-mutedText font-light leading-relaxed">
            Our animated save-the-dates range from 15 to 30 seconds of high-energy romance. They feature
            dynamic countdown elements, calendar highlights, and couple portraits set to upbeat tracks.
          </p>
          <ul className="space-y-3 text-sm text-plum-deep">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>Animated calendar mark with custom wedding dates</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>Couple pre-wedding photoshoot integration</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-plum-royal flex-shrink-0" />
              <span>Tailored for WhatsApp Status & Instagram Story formats</span>
            </li>
          </ul>
        </div>
      </section>

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
