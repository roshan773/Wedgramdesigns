import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUp, Instagram, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="bg-plum-dark text-ivory pt-16 pb-12 border-t-2 border-champagne/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-floral-lavender/20">
          {/* Brand Info & Identity */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-champagne bg-ivory">
                <Image
                  src="/images/logo.jpeg"
                  alt="Wedgram Designs Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-wide text-ivory">
                  Wedgram Designs
                </span>
                <span className="text-[10px] tracking-luxury uppercase text-floral-soft font-sans">
                  Wedding Invitation Studio
                </span>
              </div>
            </Link>
            <p className="text-sm text-ivory/80 max-w-sm font-light leading-relaxed">
              Crafting exquisite wedding invitation videos, animated
              save-the-dates, and bespoke digital stationery tailored to your
              love story. Rooted in Surat, Gujarat with worldwide digital delivery.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-champagne font-light">
                <Heart className="w-3.5 h-3.5 fill-champagne text-champagne" />
                Crafted with love for Indian & Global Weddings
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-champagne mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-editorial font-medium text-ivory/80">
              <li>
                <Link href="/" className="hover:text-champagne transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-champagne transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-champagne transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-champagne transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-champagne transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-champagne transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-champagne transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Social */}
          <div>
            <h4 className="font-serif text-lg font-medium text-champagne mb-4 tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-ivory/80 font-light">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-champagne flex-shrink-0" />
                <span>Surat, Gujarat, India</span>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-luxury text-champagne hover:underline inline-block font-medium"
                >
                  Order Custom Invitation &rarr;
                </Link>
              </li>
            </ul>

            <h4 className="font-serif text-base font-medium text-champagne mt-6 mb-3 tracking-wide">
              Follow Our Work
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/wedgramdesigns/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-plum-royal/60 border border-champagne/40 flex items-center justify-center text-champagne hover:text-ivory hover:bg-plum-royal hover:border-champagne transition-all duration-300"
                aria-label="Follow Wedgram Designs on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60 font-light">
          <p>© {currentYear} Wedgram Designs. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-champagne transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-champagne transition-colors"
            >
              Terms & Conditions
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 hover:text-champagne transition-colors"
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
