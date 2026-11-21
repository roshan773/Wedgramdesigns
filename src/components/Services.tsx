import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Modern Minimalist Invitation",
      description:
        "Design sleek and chic video invitations for a contemporary wedding feel. Clean typography, soft palettes, and understated elegance.",
      image:
        "https://cdn.dribbble.com/userupload/10765076/file/original-09a418ca45d11087bc734ee969901dc9.jpg",
      tag: "Minimalist Aesthetic",
    },
    {
      title: "Animated Save-the-Dates",
      description:
        "Create engaging animated save-the-dates to build excitement for your wedding. Perfect for sharing via WhatsApp, Instagram, and email.",
      image:
        "https://media.craftyartapp.com/uploadedFiles/thumb_file/c5b5d4b4c1b18280f66e55f7e8f22bad5b52c3191680688878.jpg",
      tag: "Motion Teaser",
    },
    {
      title: "Modern Wedding Invitation Video",
      description:
        "Design sleek and chic video invitations for a contemporary wedding feel, weaving ceremonial timelines with music and couple stories.",
      image: "/images/save-the-date.jpg",
      tag: "Complete Celebration Suite",
    },
    {
      title: "Customised Wedding Invitation Designs",
      description:
        "Bespoke invitations crafted to match your exact theme, cultural traditions, venue aesthetics, and personalized ceremonial sequences.",
      image: "/images/Dark Orange and Gold Bordered Wedding Invitation.png",
      tag: "Bespoke Royal Design",
    },
  ];

  return (
    <section
      id="services"
      aria-label="Our Wedding Design Services"
      className="py-24 bg-champagne-100/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-luxury text-gold-dark font-semibold mb-3">
              Design Offerings
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal">
              Curated Invitation Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-charcoal-50 text-sm max-w-md font-light">
            Every celebration deserves an announcement as extraordinary as the
            day itself. Explore our signature design suites below.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-ivory-50 rounded-2xl overflow-hidden border border-champagne-300/80 shadow-subtle hover:shadow-luxury transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-champagne-200/40">
                <Image
                  src={service.image}
                  alt={`${service.title} - Wedgram Designs`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-ivory-100/90 backdrop-blur-sm px-3 py-1 rounded-full border border-champagne-300 text-[11px] font-semibold tracking-luxury uppercase text-charcoal">
                  {service.tag}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-charcoal mb-3 group-hover:text-gold-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal-50 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-champagne-300/40 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury font-semibold text-charcoal group-hover:text-gold-dark transition-colors"
                  >
                    <span>Request This Style</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="text-xs text-charcoal-50/70 font-mono">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
