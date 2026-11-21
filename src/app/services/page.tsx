import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Video, FileText, Calendar, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Wedding Invitation Design Services | Wedgram Designs",
  description:
    "Explore our complete range of bespoke wedding invitation design services including video invitations, digital cards, animated save-the-dates, and custom wedding suites in Surat, India.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Wedding Invitation Videos",
      slug: "/services/wedding-invitation-videos",
      icon: Video,
      description:
        "Cinematic and personalized motion videos featuring your couple portraits, ceremonial itinerary, custom music, and romantic narrative.",
      image: "/images/WhatsApp Video 2025-04-23 at 7.56.48 PM.mp4",
      isVideo: true,
      features: [
        "Full HD & Ultra HD video formats",
        "Personalized romantic background music",
        "Multiple ceremonial slides (Haldi, Mehendi, Sangeet, Wedding)",
        "Optimized for WhatsApp status, chats & Instagram",
      ],
    },
    {
      title: "Digital Wedding Invitations",
      slug: "/services/digital-wedding-invitations",
      icon: FileText,
      description:
        "Modern, elegant digital marriage cards crafted with regal typography, botanical artwork, and delicate borders for modern couples.",
      image: "/images/Dark Orange and Gold Bordered Wedding Invitation.png",
      isVideo: false,
      features: [
        "High-resolution digital stationery",
        "Clean mobile-first portrait layouts",
        "Custom wedding typography & couple monograms",
        "Instant delivery via digital channels",
      ],
    },
    {
      title: "Animated Save-the-Date",
      slug: "/services/save-the-date",
      icon: Calendar,
      description:
        "Short, high-energy animated video teasers designed to announce your wedding dates early and build excitement among loved ones.",
      image: "/images/save-the-date.jpg",
      isVideo: false,
      features: [
        "15–30 second engaging motion teaser",
        "Custom calendar reveal & date highlighting",
        "Couple photo integration with animated transitions",
        "Perfect teaser before releasing full wedding suites",
      ],
    },
    {
      title: "Custom Wedding Invitations",
      slug: "/services/custom-wedding-invitations",
      icon: Sparkles,
      description:
        "End-to-end bespoke invitation design tailored to your specific cultural rituals, luxury wedding themes, and personalized styling.",
      image: "/images/Photo2.jpeg",
      isVideo: false,
      features: [
        "100% custom illustration & layout design",
        "Traditional royal Indian motifs & palette matching",
        "Venue map integration & RSVP information",
        "Dedicated designer collaboration",
      ],
    },
  ];

  return (
    <div className="space-y-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto pt-6">
        <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
          Design Offerings
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep mt-3 mb-6">
          Curated Wedding Invitation <br />
          <span className="italic font-light plum-gradient-text">Design Services</span>
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-6" />
        <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
          From cinematic motion videos to luxury digital stationery and animated save-the-dates,
          discover our bespoke offerings designed to set the perfect tone for your special day.
        </p>
      </section>

      {/* Services List */}
      <section className="space-y-16">
        {services.map((service, index) => {
          const IconComp = service.icon;
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.slug}
              className={`bg-ivory rounded-3xl p-8 sm:p-12 border border-champagne shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-lavender-50 border border-champagne flex items-center justify-center text-plum-royal shadow-sm">
                  <IconComp className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-3xl font-medium text-plum-deep">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-mutedText font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold block">
                    Key Features:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-plum-deep">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="text-plum-royal mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={service.slug}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-plum-royal hover:bg-plum-dark text-ivory text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle transition-colors border border-champagne/60"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-champagne" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-ivory hover:bg-lavender-50 text-plum-royal text-xs uppercase tracking-luxury font-semibold rounded-sm border border-champagne transition-colors"
                  >
                    <span>Enquire Now</span>
                  </Link>
                </div>
              </div>

              <div
                className={`lg:col-span-6 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-champagne shadow-subtle bg-lavender-50">
                  {service.isVideo ? (
                    <video
                      src={service.image}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
