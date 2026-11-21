import Image from "next/image";
import { Sparkles, Palette, Clock, ShieldCheck, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: Palette,
      title: "Artistic Personalisation",
      description:
        "Every element, from color palettes to typography and animations, is curated specifically around your unique style and wedding aesthetic.",
    },
    {
      icon: Sparkles,
      title: "Creative Storytelling",
      description:
        "We turn your romance into an engaging visual narrative that moves and excites your guests before they even arrive.",
    },
    {
      icon: ShieldCheck,
      title: "Flawless Quality & Polish",
      description:
        "High-definition video rendering, pristine audio mastering, and typography precision tailored for modern smartphone screens.",
    },
    {
      icon: Clock,
      title: "Seamless Turnaround",
      description:
        "Prompt, structured, and reliable revisions so your invitations are ready for distribution right on schedule.",
    },
  ];

  return (
    <section
      id="why-us"
      aria-label="Why Choose Wedgram Designs"
      className="py-24 bg-champagne-100/40 border-t border-b border-champagne-300/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Visual Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-floating border border-champagne-300">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=2070&auto=format&fit=crop"
                  alt="Precious Wedding Moment by Wedgram Designs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-ivory-100">
                  <div className="inline-flex items-center gap-1.5 text-champagne-300 text-xs uppercase tracking-luxury font-medium mb-2">
                    <HeartHandshake className="w-4 h-4" />
                    <span>Our Commitment</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light">
                    Exclusive Designs for Every Precious Moment
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ivory-100/90 font-light leading-relaxed">
                    Bring your wedding vision to life with personalized video
                    invitations that captivate and delight. Let us help you set
                    the tone for your big day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Differentiators */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div>
              <p className="text-xs uppercase tracking-luxury text-gold-dark font-semibold mb-3">
                Why Couples Choose Us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal leading-tight">
                Crafted with Passion, <br className="hidden sm:inline" />
                <span className="italic font-light">Refined to Perfection</span>
              </h2>
              <div className="w-16 h-[1px] bg-gold mt-6" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-xl bg-ivory-100 border border-champagne-300/80 shadow-subtle hover:shadow-luxury transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-champagne-200/80 flex items-center justify-center mb-4 text-gold-deep">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal-50 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Banner Call to Action */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal hover:bg-gold-dark text-ivory-100 text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle hover:shadow-luxury transition-all duration-300"
              >
                <span>Contact Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
