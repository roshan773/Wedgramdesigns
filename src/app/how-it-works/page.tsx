import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Wedgram Designs",
  description:
    "Understand the 6 simple steps to order and customize your wedding invitation videos and digital invites with Wedgram Designs.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/how-it-works",
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Explore Our Designs",
      desc: "Browse our curated gallery of wedding invitation videos, digital stationery cards, and animated save-the-dates.",
    },
    {
      num: "02",
      title: "Select Your Preferred Style",
      desc: "Choose an aesthetic that speaks to you: royal heritage, botanical florals, contemporary minimalist, or motion animations.",
    },
    {
      num: "03",
      title: "Submit Your Wedding Details",
      desc: "Fill in our online wedding enquiry form with your ceremony dates, venue details, couple names, and specific requests.",
    },
    {
      num: "04",
      title: "Discuss Customisation",
      desc: "Our design studio connects with you directly to finalize your song selection, color nuances, and ceremonial timeline.",
    },
    {
      num: "05",
      title: "Review Your Invitation",
      desc: "Receive a draft preview of your invitation video or card to review all details, names, dates, and transitions.",
    },
    {
      num: "06",
      title: "Finalise Your Design",
      desc: "Upon your approval, we deliver your pristine Ultra HD digital invitation, perfectly optimized for sharing with your guests.",
    },
  ];

  return (
    <div className="space-y-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto pt-6">
        <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
          Ordering Journey
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep mt-3 mb-6">
          How It Works
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-6" />
        <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
          From initial inspiration to final delivery, our straightforward design process makes
          creating your wedding invitations effortless and enjoyable.
        </p>
      </section>

      {/* Six Step Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-ivory rounded-3xl p-8 border border-champagne/80 shadow-subtle flex flex-col justify-between relative overflow-hidden"
          >
            <span className="font-serif text-5xl font-bold text-plum-royal/20 mb-4 block">
              {step.num}
            </span>
            <div>
              <h2 className="font-serif text-2xl font-normal text-plum-deep mb-3">
                {step.title}
              </h2>
              <p className="text-sm text-mutedText font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center bg-ivory rounded-3xl p-10 sm:p-16 border border-champagne shadow-luxury max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-plum-deep mb-4">
          Ready to Start Step 1?
        </h2>
        <p className="text-sm text-mutedText max-w-md mx-auto mb-8 font-light">
          Submit your celebration details now and let our Surat studio craft your dream invitation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-plum-royal hover:bg-plum-dark text-ivory text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle transition-all border border-champagne/60"
        >
          <span>Submit Your Wedding Details</span>
          <ArrowRight className="w-4 h-4 text-champagne" />
        </Link>
      </section>
    </div>
  );
}
