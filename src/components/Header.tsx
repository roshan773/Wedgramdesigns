"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-ivory-100/90 backdrop-blur-md border-b border-champagne-300/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-champagne-300 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpeg"
                alt="Wedgram Designs Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-wide text-charcoal group-hover:text-gold-dark transition-colors">
                Wedgram Designs
              </span>
              <span className="text-[10px] tracking-luxury uppercase text-charcoal-50 -mt-1">
                Bespoke Invitations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-editorial text-charcoal-100 hover:text-gold-dark transition-colors duration-200 font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-dark hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-luxury font-semibold text-ivory-100 bg-charcoal hover:bg-gold-dark transition-all duration-300 rounded-sm shadow-subtle hover:shadow-luxury group"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-gold-dark focus:outline-none focus:ring-2 focus:ring-gold"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory-50 border-b border-champagne-300/60 px-6 py-6 transition-all duration-300 shadow-luxury">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-editorial text-charcoal hover:text-gold-dark font-medium py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-champagne-300/40">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 py-3 text-xs uppercase tracking-luxury font-semibold text-ivory-100 bg-charcoal hover:bg-gold-dark transition-colors rounded-sm shadow-subtle"
              >
                Order Invitation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
