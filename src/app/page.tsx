import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Video, Palette, ShieldCheck } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export default function HomePage() {
  const featuredServices = [
    {
      title: "Wedding Invitation Videos",
      href: "/services/wedding-invitation-videos",
      description: "Modern and personalized wedding invitation videos that bring your love story to life with music and emotion.",
      image: "/images/WhatsApp Video 2025-04-23 at 7.56.48 PM.mp4",
      isVideo: true,
      tag: "Signature Motion",
    },
    {
      title: "Digital Wedding Invitations",
      href: "/services/digital-wedding-invitations",
      description: "Elegant digital invitations designed for seamless WhatsApp, email, and social media sharing.",
      image: "/images/Dark Orange and Gold Bordered Wedding Invitation.png",
      isVideo: false,
      tag: "Digital Suite",
    },
    {
      title: "Animated Save-the-Date",
      href: "/services/save-the-date",
      description: "Creative animated invitations to build excitement for your upcoming wedding dates and ceremonies.",
      image: "/images/save-the-date.jpg",
      isVideo: false,
      tag: "Date Reveal",
    },
    {
      title: "Custom Wedding Invitations",
      href: "/services/custom-wedding-invitations",
      description: "Bespoke royal Indian wedding invitation designs crafted around your cultural traditions and themes.",
      image: "/images/Photo2.jpeg",
      isVideo: false,
      tag: "Bespoke Couture",
    },
  ];

  const workflowSteps = [
    { number: "01", title: "Explore Designs", desc: "Browse our signature video and digital wedding invitation collections." },
    { number: "02", title: "Select Style", desc: "Choose traditional royal, floral botanical, or modern minimalist aesthetics." },
    { number: "03", title: "Submit Details", desc: "Share your ceremonial dates, venue, music preference, and story." },
    { number: "04", title: "Design Crafting", desc: "Our Surat design studio creates your custom motion visuals." },
    { number: "05", title: "Review & Refine", desc: "Preview your draft video and request personalized adjustments." },
    { number: "06", title: "Final Delivery", desc: "Receive your Ultra HD video invite ready to share with loved ones." },
  ];

  const featuredFaqs = [
    {
      q: "What are digital wedding invitations?",
      a: "Digital wedding invitations are high-resolution, beautifully crafted animated videos or interactive digital cards formatted for instant sharing via WhatsApp, email, and social platforms.",
    },
    {
      q: "Can I customize the ceremonies, music, and colors?",
      a: "Yes! Every invitation can be personalized with your exact ceremony timeline (Haldi, Mehendi, Sangeet, Wedding, Reception), favorite romantic songs, and custom themes.",
    },
    {
      q: "How do I submit my wedding details?",
      a: "Simply fill out our wedding enquiry form on this website with your names, ceremony dates, venue, and design preferences. Our studio will review and connect with you directly.",
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* SECTION 2: HERO BANNER */}
      <section
        id="hero"
        aria-label="Hero Section"
        className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-lavender-200/40 via-lavender-100 to-ivory"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-champagne text-plum-royal text-xs font-medium tracking-editorial uppercase shadow-subtle">
                <Sparkles className="w-3.5 h-3.5 text-champagne-deep" />
                <span>Premium Wedding Invitation Studio • Surat, India</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1] text-plum-deep tracking-tight">
                Beautiful Invitations for <br />
                <span className="italic font-light plum-gradient-text">
                  Your Forever Story
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-mutedText font-light leading-relaxed max-w-2xl">
                Thoughtfully designed wedding invitations that bring your special moments to life.
                Craft unforgettable wedding video invitations with our bespoke creations, offering
                unrivaled elegance and personalized digital marriage invites that make a lasting impression.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
                <Link
                  href="/gallery"
                  className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-plum-royal hover:bg-plum-dark text-ivory text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle hover:shadow-luxury transition-all duration-300 group border border-champagne/60"
                >
                  <span>Explore Our Designs</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-champagne" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 bg-ivory hover:bg-lavender-50 text-plum-royal border border-champagne text-xs uppercase tracking-luxury font-semibold rounded-sm transition-all duration-300 shadow-subtle"
                >
                  Create Your Invitation
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-champagne/50 w-full max-w-lg">
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-semibold text-plum-royal">
                    100%
                  </span>
                  <span className="text-xs uppercase tracking-wider text-mutedText">
                    Customized
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-semibold text-plum-royal">
                    Ultra HD
                  </span>
                  <span className="text-xs uppercase tracking-wider text-mutedText">
                    Motion Video
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-2xl sm:text-3xl font-semibold text-plum-royal">
                    Global
                  </span>
                  <span className="text-xs uppercase tracking-wider text-mutedText">
                    Digital Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Floral Artwork & Logo Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-4 rounded-3xl border-2 border-champagne/60 -rotate-2 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden shadow-floating bg-ivory border-2 border-champagne/80">
                  <div className="aspect-[4/5] relative bg-lavender-50">
                    <Image
                      src="https://marketplace.canva.com/EAGHPJH9kNE/1/0/1135w/canva-light-pink-royal-elegant-floral-indian-wedding-invitation-RYr8wyzxvto.jpg"
                      alt="Floral Indian Wedding Invitation by Wedgram Designs"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-dark/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-ivory">
                      <p className="text-[11px] uppercase tracking-luxury text-champagne font-medium mb-1">
                        Featured Wedding Suite
                      </p>
                      <h3 className="font-serif text-xl sm:text-2xl font-light">
                        Royal Floral Heritage Collection
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Floating Brand Badge */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-ivory p-3.5 rounded-2xl border-2 border-champagne shadow-luxury max-w-xs items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-champagne flex-shrink-0">
                    <Image
                      src="/images/logo.jpeg"
                      alt="Wedgram Designs Brand Crest"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-plum-deep font-serif">
                      Wedgram Designs Studio
                    </p>
                    <p className="text-[11px] text-mutedText">
                      Surat, Gujarat • India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BRAND INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory rounded-3xl p-8 sm:p-14 border border-champagne shadow-luxury relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
              About Wedgram Designs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-plum-deep leading-tight">
              Crafting Unforgettable Moments of <br className="hidden sm:inline" />
              <span className="italic font-light plum-gradient-text">Art, Love & Elegance</span>
            </h2>
            <div className="w-16 h-[1.5px] bg-champagne mx-auto" />
            <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
              Wedgram designs crafts exquisite wedding invitation videos uniquely tailored to reflect
              your love story. Our expert designers in India blend creativity with cutting-edge
              technology to deliver captivating visuals that set the perfect tone for your special day.
              Trust us to turn your invitations into cherished keepsakes.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial font-semibold text-plum-royal hover:text-plum-dark"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
              Signature Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-plum-deep mt-2">
              Curated Invitation Services
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 text-xs uppercase tracking-editorial font-semibold text-plum-royal hover:underline inline-flex items-center gap-1.5"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, idx) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-ivory rounded-2xl overflow-hidden border border-champagne/70 shadow-subtle hover:shadow-luxury transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-lavender-50 overflow-hidden">
                {service.isVideo ? (
                  <video
                    src={service.image}
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute top-3 left-3 bg-ivory/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold tracking-luxury uppercase text-plum-royal border border-champagne/50">
                  {service.tag}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-medium text-plum-deep group-hover:text-plum-royal transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-mutedText font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-champagne/30 flex items-center justify-between text-xs text-plum-royal font-medium">
                  <span>Explore Style</span>
                  <span className="font-mono text-mutedText/60">0{idx + 1}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 5: FEATURED GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            Captivating Creations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-plum-deep mt-2">
            Explore Stunning Wedding Designs
          </h2>
          <div className="w-16 h-[1.5px] bg-champagne mx-auto mt-4 mb-4" />
          <p className="text-sm text-mutedText font-light">
            Discover exquisite digital invitations with unrivaled elegance, transforming your
            wedding announcements into unforgettable visual masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-champagne shadow-subtle aspect-[9/14] bg-plum-dark relative">
            <video
              src="/images/WhatsApp Video 2025-04-23 at 7.56.50 PM (1).mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-champagne shadow-subtle aspect-[9/14] bg-plum-dark relative">
            <video
              src="/images/WhatsApp Video 2025-04-23 at 7.56.50 PM.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-champagne shadow-subtle aspect-[9/14] relative bg-ivory">
            <Image
              src="/images/Dark Orange and Gold Bordered Wedding Invitation.png"
              alt="Traditional Indian Bordered Wedding Invitation"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center pt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-ivory hover:bg-lavender-50 border border-champagne rounded-sm text-xs uppercase tracking-luxury font-semibold text-plum-royal shadow-subtle transition-colors"
          >
            <span>View Full Portfolio Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US */}
      <section className="bg-ivory py-20 border-t border-b border-champagne/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
              Why Choose Wedgram Designs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-plum-deep mt-2">
              Thoughtful Artistry for Your Special Day
            </h2>
            <div className="w-16 h-[1.5px] bg-champagne mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-lavender-50/60 border border-champagne/60 text-center">
              <div className="w-12 h-12 rounded-full bg-ivory border border-champagne flex items-center justify-center mx-auto mb-5 text-plum-royal shadow-sm">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-plum-deep mb-3">
                Personalized Storytelling
              </h3>
              <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
                Every couple has a distinct journey. We tailor colors, romantic fonts, ceremony
                timelines, and music to harmonize with your wedding vision.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-lavender-50/60 border border-champagne/60 text-center">
              <div className="w-12 h-12 rounded-full bg-ivory border border-champagne flex items-center justify-center mx-auto mb-5 text-plum-royal shadow-sm">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-plum-deep mb-3">
                Cinematic Motion Art
              </h3>
              <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
                Captivating animations and high-definition video rendering engineered to look stunning
                on all modern smartphone displays and messaging apps.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-lavender-50/60 border border-champagne/60 text-center">
              <div className="w-12 h-12 rounded-full bg-ivory border border-champagne flex items-center justify-center mx-auto mb-5 text-plum-royal shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-plum-deep mb-3">
                Rooted in Surat, Gujarat
              </h3>
              <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
                Deep appreciation for Indian wedding traditions combined with modern design principles,
                serving couples across India and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
              The Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-plum-deep mt-2">
              How It Works
            </h2>
          </div>
          <Link
            href="/how-it-works"
            className="mt-4 md:mt-0 text-xs uppercase tracking-editorial font-semibold text-plum-royal hover:underline inline-flex items-center gap-1.5"
          >
            <span>Learn About the Full Process</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-ivory border border-champagne/60 shadow-subtle relative"
            >
              <span className="text-2xl font-serif font-bold text-plum-royal/30 block mb-2">
                {step.number}
              </span>
              <h3 className="font-serif text-lg font-medium text-plum-deep mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-mutedText font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FAQS PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-plum-deep mt-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[1.5px] bg-champagne mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {featuredFaqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-2xl bg-ivory border border-champagne/60 shadow-subtle"
            >
              <h3 className="font-serif text-base font-medium text-plum-deep mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial font-semibold text-plum-royal hover:underline"
          >
            <span>Explore All FAQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA & ENQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            Start Your Invitation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-plum-deep mt-2">
            Wedding Invitation Enquiry
          </h2>
          <div className="w-16 h-[1.5px] bg-champagne mx-auto mt-4 mb-4" />
          <p className="text-sm text-mutedText font-light max-w-xl mx-auto">
            Fill in your wedding details below to receive a custom design consultation and quote from
            our studio.
          </p>
        </div>

        <EnquiryForm />
      </section>
    </div>
  );
}
