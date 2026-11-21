import Image from "next/image";
import { Heart, Compass, Video } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Wedgram Designs"
      className="py-24 bg-ivory-50 border-t border-b border-champagne-300/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-luxury text-gold-dark font-semibold mb-3">
            About Our Studio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal leading-tight">
            Crafting Exquisite Wedding Invitation Videos <br className="hidden sm:inline" />
            <span className="italic font-light">Tailored to Your Love Story</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6 mb-8" />
          <p className="text-base sm:text-lg text-charcoal-100 font-light leading-relaxed">
            Wedgram designs crafts exquisite wedding invitation videos uniquely
            tailored to reflect your love story. Our expert designers in India
            blend creativity with cutting-edge technology to deliver captivating
            visuals that set the perfect tone for your special day. Trust us to
            turn your invitations into unforgettable moments of art and
            elegance.
          </p>
        </div>

        {/* Cinematic Imagery Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-luxury border border-champagne-300 mb-16 group">
          <div className="aspect-[16/8] sm:aspect-[21/9] relative">
            <Image
              src="https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?q=80&w=2070&auto=format&fit=crop"
              alt="Indian Wedding Celebration and Rituals by Wedgram Designs"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 max-w-xl text-ivory-100">
              <span className="text-xs uppercase tracking-luxury text-champagne-300 font-medium">
                Our Passion & Vision
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light mt-1">
                Where Tradition Meets Modern Cinematic Elegance
              </h3>
            </div>
          </div>
        </div>

        {/* Three Core Brand Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-ivory-100 border border-champagne-300/60 shadow-subtle hover:shadow-luxury transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-champagne-200/80 flex items-center justify-center mb-6 text-gold-deep">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-2xl font-normal text-charcoal mb-3">
              Uniquely Personalised
            </h4>
            <p className="text-sm text-charcoal-50 font-light leading-relaxed">
              Every couple has a unique journey. We personalize every graphic,
              font, transition, and color palette to celebrate your individuality.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-ivory-100 border border-champagne-300/60 shadow-subtle hover:shadow-luxury transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-champagne-200/80 flex items-center justify-center mb-6 text-gold-deep">
              <Video className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-2xl font-normal text-charcoal mb-3">
              Motion & Cinematic Art
            </h4>
            <p className="text-sm text-charcoal-50 font-light leading-relaxed">
              From animated save-the-dates to multi-function video suites, our
              motion designs evoke excitement and joy among your guests.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-ivory-100 border border-champagne-300/60 shadow-subtle hover:shadow-luxury transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-champagne-200/80 flex items-center justify-center mb-6 text-gold-deep">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-2xl font-normal text-charcoal mb-3">
              Based in Surat, India
            </h4>
            <p className="text-sm text-charcoal-50 font-light leading-relaxed">
              Rooted in rich wedding heritage with modern digital reach,
              providing flawless online delivery across India and worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
