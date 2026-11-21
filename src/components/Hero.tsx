import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-champagne-100/40 via-ivory-100 to-ivory-100"
    >
      {/* Decorative luxury background pattern accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#292622 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-200/60 border border-champagne-300 text-gold-deep text-xs font-medium tracking-editorial uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Bespoke Wedding Invitation Studio</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1] text-charcoal tracking-tight">
              Elegant Wedding <br />
              <span className="italic font-light gold-gradient-text">
                Video Invitations
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-charcoal-100 font-light leading-relaxed max-w-2xl">
              Craft unforgettable wedding invitations with our bespoke video
              creations, offering amazing online design for wedding invite
              videos. Add elegance and creativity to your special day with our
              customized wedding video services. Experience top-quality,
              affordable wedding video invites and personalized digital marriage
              invites that make a lasting impression.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-charcoal hover:bg-gold-dark text-ivory-100 text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle hover:shadow-luxury transition-all duration-300 group"
              >
                <span>Create Your Video</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#gallery"
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent hover:bg-champagne-200/50 text-charcoal border border-charcoal/30 hover:border-charcoal text-xs uppercase tracking-luxury font-semibold rounded-sm transition-all duration-300"
              >
                Explore Designs
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-champagne-300/60 w-full max-w-lg">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                  100%
                </span>
                <span className="text-xs uppercase tracking-wider text-charcoal-50">
                  Customized
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                  Ultra HD
                </span>
                <span className="text-xs uppercase tracking-wider text-charcoal-50">
                  Video Quality
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                  Surat & Global
                </span>
                <span className="text-xs uppercase tracking-wider text-charcoal-50">
                  Digital Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative golden outline */}
              <div className="absolute -inset-4 rounded-2xl border border-champagne-300/70 -rotate-2 pointer-events-none" />

              {/* Main invitation visual card */}
              <div className="relative rounded-2xl overflow-hidden shadow-floating bg-ivory-50 border border-champagne-300">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://marketplace.canva.com/EAGHPJH9kNE/1/0/1135w/canva-light-pink-royal-elegant-floral-indian-wedding-invitation-RYr8wyzxvto.jpg"
                    alt="Royal Elegant Floral Wedding Invitation by Wedgram Designs"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-ivory-100">
                    <p className="text-[11px] uppercase tracking-luxury text-champagne-300 font-medium mb-1">
                      Featured Collection
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-light">
                      Royal Floral Heritage Suite
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-ivory-50 p-4 rounded-xl border border-champagne-300 shadow-luxury max-w-xs items-center gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1601482985114-e509737ba2ed?w=500&auto=format&fit=crop&q=60"
                    alt="Indian Wedding Couple Celebration"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal">
                    Tailored Love Stories
                  </p>
                  <p className="text-[11px] text-charcoal-50">
                    Animations, music, and ceremonies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
