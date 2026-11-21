import type { Metadata } from "next";
import Link from "next/link";
import { Video, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

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
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium uppercase tracking-editorial mb-4">
          <Video className="w-3.5 h-3.5" />
          <span>Signature Motion Design</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep mb-6">
          Wedding Invitation Videos
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-6" />
        <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
          Celebrate your union with a bespoke motion picture invitation. We weave your photographs,
          ceremony schedules, and emotional music into a cinematic experience that captivates your guests.
        </p>
      </section>

      {/* Video Showcase Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl overflow-hidden border border-champagne shadow-subtle aspect-[9/15] bg-plum-dark">
          <video
            src="/images/WhatsApp Video 2025-04-23 at 7.56.48 PM.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden border border-champagne shadow-subtle aspect-[9/15] bg-plum-dark">
          <video
            src="/images/WhatsApp Video 2025-04-23 at 7.56.50 PM (1).mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden border border-champagne shadow-subtle aspect-[9/15] bg-plum-dark">
          <video
            src="/images/WhatsApp Video 2025-04-23 at 7.56.50 PM.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features Grid */}
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

      {/* Order Form */}
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
