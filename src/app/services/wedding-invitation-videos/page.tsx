import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import VideoCinematicHero from "@/components/heroes/VideoCinematicHero";

export const metadata: Metadata = {
  title: "Wedding Invitation Videos | Wedgram Designs",
  description:
    "Custom cinematic wedding invitation videos for Indian and global weddings. Personalized music, couple photography, and ceremonial timelines in Ultra HD.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/services/wedding-invitation-videos",
  },
};

export default function WeddingInvitationVideosPage() {
  const features = [
    {
      title: "Ultra HD Cinematic Rendering",
      desc: "Vibrant high-resolution video tailored to look crisp and breathtaking on modern mobile screens.",
    },
    {
      title: "Multi-Ceremony Visual Sequences",
      desc: "Distinct thematic animated slides for Haldi, Mehendi, Sangeet, Wedding Ceremony, and Reception.",
    },
    {
      title: "Custom Romantic Soundtrack",
      desc: "Expertly synced romantic Bollywood, regional, or acoustic songs that reflect your story.",
    },
    {
      title: "Effortless Digital Sharing",
      desc: "Optimized file sizes engineered for direct sharing via WhatsApp chats, status, and Instagram.",
    },
  ];

  return (
    <div className="space-y-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. UNIQUE CINEMATIC HERO WITH DIRECT VIDEO FEATURE */}
      <VideoCinematicHero />

      {/* 2. Features Grid */}
      <section className="bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury">
        <h2 className="font-serif text-3xl font-medium text-plum-deep text-center mb-10">
          Why Couples Love Our Video Invitations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item) => (
            <div key={item.title} className="flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-plum-royal flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg font-medium text-plum-deep mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Order Form */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            Order This Service
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-plum-deep mt-2">
            Enquire for Wedding Video Invitations
          </h2>
        </div>
        <EnquiryForm />
      </section>
    </div>
  );
}
