import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Wedgram Designs",
  description:
    "Find answers to common questions about our wedding invitation videos, digital wedding cards, customization, pricing inquiries, and delivery times.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/faqs",
  },
};

export default function FaqsPage() {
  const faqs = [
    {
      q: "What are digital wedding invitations?",
      a: "Digital wedding invitations are high-resolution motion videos or elegantly formatted digital graphic cards designed for seamless sharing via WhatsApp, Instagram, email, and wedding websites. They provide a modern, eco-friendly, and interactive alternative to traditional paper invites.",
    },
    {
      q: "Can I customize my wedding invitation?",
      a: "Yes, completely! Every invitation can be personalized with your names, wedding functions (Haldi, Mehendi, Sangeet, Wedding, Reception), venue details, family member credits, and your preferred background songs.",
    },
    {
      q: "Can I request a specific design theme?",
      a: "Absolutely. We offer traditional Indian royal themes, botanical floral watercolor suites, modern minimalist layouts, and custom cultural designs. If you have specific wedding attire or venue mood boards, we can align the invitation colors accordingly.",
    },
    {
      q: "What information is required to get started?",
      a: "To begin, we need the bride and groom's names, wedding ceremony dates, venue details, your preferred theme, and any special music or message requests. You can submit all of this via our online enquiry form.",
    },
    {
      q: "How do I submit my wedding details?",
      a: "You can submit your details directly through our Wedding Invitation Form on our Contact page or Homepage. Once received, our design team will contact you to confirm details.",
    },
    {
      q: "How can I enquire about pricing?",
      a: "Because each wedding invitation video and custom suite varies based on the number of ceremonial slides, animation complexity, and customizations, we provide quotes upon reviewing your form submission.",
    },
    {
      q: "Can I request a personalized invitation video with our couple photos?",
      a: "Yes! High-resolution photos from your pre-wedding photoshoot or candid memories can be seamlessly integrated into your invitation video with elegant motion transitions.",
    },
    {
      q: "How can I contact Wedgram Designs?",
      a: "You can reach us through the enquiry form on our Contact page, or visit our official Instagram page @wedgramdesigns to view our latest portfolio work.",
    },
  ];

  return (
    <div className="space-y-16 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto pt-6">
        <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
          Help & Answers
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-plum-deep mt-3 mb-6">
          Frequently Asked Questions
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-6" />
        <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
          Have questions about creating your wedding invitations? Find helpful answers to the most
          frequently asked questions below.
        </p>
      </section>

      {/* FAQ Accordion / Cards List */}
      <section className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={faq.q}
            className="p-6 sm:p-8 rounded-2xl bg-ivory border border-champagne/70 shadow-subtle hover:shadow-luxury transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <span className="font-serif text-lg font-bold text-plum-royal/40 flex-shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <div>
                <h2 className="font-serif text-lg sm:text-xl font-medium text-plum-deep mb-2">
                  {faq.q}
                </h2>
                <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Still Have Questions CTA */}
      <section className="text-center bg-ivory rounded-3xl p-10 border border-champagne shadow-luxury">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-plum-deep mb-3">
          Have a Question Not Listed Here?
        </h2>
        <p className="text-sm text-mutedText mb-6 font-light">
          We are here to help make your wedding planning journey seamless and joyful.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-plum-royal hover:bg-plum-dark text-ivory text-xs uppercase tracking-luxury font-semibold rounded-sm shadow-subtle transition-colors border border-champagne/60"
        >
          <span>Get in Touch With Us</span>
          <ArrowRight className="w-4 h-4 text-champagne" />
        </Link>
      </section>
    </div>
  );
}
