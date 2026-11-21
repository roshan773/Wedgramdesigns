import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Wedgram Designs",
  description:
    "Terms and Conditions governing the use of Wedgram Designs website, custom wedding invitation video services, and design commissions.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
      <div className="text-center pt-6">
        <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
          Legal Agreement
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-plum-deep mt-3 mb-4">
          Terms & Conditions
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-4" />
        <p className="text-xs text-mutedText">Last Updated: November 2026</p>
      </div>

      <div className="bg-ivory rounded-3xl p-8 sm:p-12 border border-champagne shadow-luxury space-y-8 text-sm sm:text-base text-mutedText font-light leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or using the Wedgram Designs website, you agree to be bound by these Terms and
            Conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            2. Enquiry Submissions & Custom Orders
          </h2>
          <p>
            Submitting an enquiry via our wedding form initiates a design consultation. A project
            order is only confirmed once project scope, timeline, and mutual agreements are established
            between the client and Wedgram Designs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            3. Client Responsibilities
          </h2>
          <p>
            Clients are responsible for ensuring all names, wedding dates, venue details, and ceremonial
            times submitted are accurate. Wedgram Designs will provide draft proofs for review prior to
            final delivery.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            4. Intellectual Property
          </h2>
          <p>
            All original video motion designs, animations, graphic templates, logos, and website assets
            are the intellectual property of Wedgram Designs. Delivered digital invitations are licensed
            for personal wedding distribution only and cannot be resold or used commercially.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            5. Design Revisions & Final Delivery
          </h2>
          <p>
            We strive for perfection on every invitation. Standard commissions include agreed revision
            rounds to adjust text, music alignment, or transitions before final Ultra HD export.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            6. Contact Information
          </h2>
          <p>
            For any inquiries regarding our Terms and Conditions, please reach out through our{" "}
            <Link href="/contact" className="text-plum-royal hover:underline font-medium">
              Contact Page
            </Link>{" "}
            or via our Instagram page @wedgramdesigns.
          </p>
        </section>
      </div>
    </div>
  );
}
