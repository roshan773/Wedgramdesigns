import Image from "next/image";
import { MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="bg-charcoal text-ivory-100 pt-16 pb-12 border-t border-champagne-300/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-charcoal-50/30">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-champagne-300">
                <Image
                  src="/images/logo.jpeg"
                  alt="Wedgram Designs Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-ivory-100">
                Wedgram Designs
              </span>
            </div>
            <p className="text-sm text-champagne-100/70 max-w-sm font-light leading-relaxed">
              Crafting beautiful wedding invitation experiences with love and
              creativity. Bespoke video invites and luxury digital stationery
              for your once-in-a-lifetime celebration.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-medium text-champagne-300 mb-4 tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-champagne-100/70 font-light">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Surat, Gujarat, India</span>
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  className="text-xs uppercase tracking-luxury text-gold hover:text-champagne-300 transition-colors"
                >
                  Direct Studio Enquiry &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Social Connections */}
          <div>
            <h4 className="font-serif text-lg font-medium text-champagne-300 mb-4 tracking-wide">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/wedgramdesigns/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-50/50 flex items-center justify-center text-champagne-300 hover:text-ivory-100 hover:bg-gold-dark hover:border-gold-dark transition-all duration-300 group"
                aria-label="Follow Wedgram Designs on Instagram"
              >
                {/* Clean SVG for Instagram */}
                <svg
                  className="w-5 h-5 fill-current transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-champagne-100/50 font-light mt-4">
              Explore our latest Instagram reels, client reveals, and motion
              stories.
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-champagne-100/60 font-light">
          <p>© {currentYear} Wedgram Designs. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 hover:text-champagne-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
