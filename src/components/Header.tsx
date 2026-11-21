"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const serviceLinks = [
    {
      title: "Wedding Invitation Videos",
      href: "/services/wedding-invitation-videos",
      desc: "Cinematic, HD motion stories for weddings",
    },
    {
      title: "Digital Wedding Invitations",
      href: "/services/digital-wedding-invitations",
      desc: "Modern digital cards & interactive suites",
    },
    {
      title: "Animated Save-the-Date",
      href: "/services/save-the-date",
      desc: "Captivating motion announcements",
    },
    {
      title: "Custom Wedding Invitations",
      href: "/services/custom-wedding-invitations",
      desc: "Fully bespoke royal Indian designs",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Gallery", href: "/gallery" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-lavender-100/95 backdrop-blur-md border-b border-champagne/40 transition-all duration-300">
      {/* Top delicate announcement line */}
      <div className="bg-plum-royal text-ivory text-center py-1 text-[11px] font-medium tracking-editorial uppercase px-4 hidden sm:block">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-champagne" />
          Exquisite Wedding Invitation Videos & Digital Suites | Based in Surat, Gujarat
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-champagne/70 shadow-subtle transition-transform duration-300 group-hover:scale-105 bg-ivory">
              <Image
                src="/images/logo.jpeg"
                alt="Wedgram Designs Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-tight text-plum-royal group-hover:text-plum-dark transition-colors">
                Wedgram Designs
              </span>
              <span className="text-[10px] tracking-luxury uppercase text-mutedText -mt-1 font-sans">
                Wedding Invitation Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`text-xs uppercase tracking-editorial font-medium flex items-center gap-1 py-2 transition-colors ${
                        isActive
                          ? "text-plum-royal font-semibold"
                          : "text-plum-deep hover:text-plum-royal"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-ivory rounded-xl border border-champagne/80 shadow-luxury p-3 py-2 mt-0 transition-all duration-200">
                        <div className="text-[10px] uppercase tracking-luxury text-plum-royal font-semibold px-3 py-1.5 border-b border-champagne/30 mb-1">
                          Our Signature Services
                        </div>
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-3 py-2 rounded-lg hover:bg-lavender-50 transition-colors group"
                          >
                            <div className="text-xs font-serif font-medium text-plum-deep group-hover:text-plum-royal">
                              {service.title}
                            </div>
                            <div className="text-[11px] text-mutedText font-light">
                              {service.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-editorial font-medium py-1 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-plum-royal after:transition-all after:duration-300 ${
                    isActive
                      ? "text-plum-royal font-semibold after:w-full"
                      : "text-plum-deep hover:text-plum-royal after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-luxury font-semibold text-ivory bg-plum-royal hover:bg-plum-dark transition-all duration-300 rounded-sm shadow-subtle hover:shadow-luxury group border border-champagne/50"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-plum-royal hover:text-plum-dark focus:outline-none"
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
        <div className="lg:hidden bg-ivory border-b border-champagne/60 px-6 py-6 transition-all duration-300 shadow-luxury max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="py-1">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between text-sm uppercase tracking-editorial text-plum-deep hover:text-plum-royal font-medium py-1"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 mt-2 space-y-2 border-l border-champagne/50">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-medium text-plum-royal py-1"
                        >
                          All Services Overview &rarr;
                        </Link>
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs text-mutedText hover:text-plum-royal py-1"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-editorial text-plum-deep hover:text-plum-royal font-medium py-1"
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-champagne/40">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 py-3 text-xs uppercase tracking-luxury font-semibold text-ivory bg-plum-royal hover:bg-plum-dark transition-colors rounded-sm shadow-subtle border border-champagne/50"
              >
                Order Invitation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
