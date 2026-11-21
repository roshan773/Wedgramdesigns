import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Wedgram Designs",
  description:
    "Privacy Policy for Wedgram Designs detailing how we handle client enquiry data, contact information, and privacy rights.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
      <div className="text-center pt-6">
        <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
          Legal & Privacy
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-plum-deep mt-3 mb-4">
          Privacy Policy
        </h1>
        <div className="w-16 h-[1.5px] bg-champagne mx-auto mb-4" />
        <p className="text-xs text-mutedText">Last Updated: November 2026</p>
      </div>

      <div className="bg-ivory rounded-3xl p-8 sm:p-12 border border-champagne shadow-luxury space-y-8 text-sm sm:text-base text-mutedText font-light leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            1. Information We Collect
          </h2>
          <p>
            When you submit a wedding enquiry on Wedgram Designs, we collect personal information you
            voluntarily provide, including:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm text-plum-deep">
            <li>Bride and groom names</li>
            <li>Contact email address</li>
            <li>Wedding dates and ceremony timelines</li>
            <li>Wedding venue location</li>
            <li>Design preferences and special requests</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            2. How We Use Your Information
          </h2>
          <p>
            The information you submit is used solely for the purpose of:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-sm text-plum-deep">
            <li>Preparing your custom wedding invitation design and video preview</li>
            <li>Communicating design drafts, revisions, and project quotations</li>
            <li>Providing customer support regarding your order</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to any third-party marketing companies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            3. Data Processing & Security
          </h2>
          <p>
            Your enquiries are transmitted securely through SSL/TLS encryption and processed via
            server-side API proxies. All server keys and API credentials are kept private and isolated
            from website visitors and search engines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            4. Third-Party Services
          </h2>
          <p>
            We utilize secure third-party email routing infrastructure (such as Web3Forms) strictly to
            deliver your enquiry to our studio in Surat. These providers process data in compliance with
            standard data protection regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            5. Your Privacy Rights
          </h2>
          <p>
            You have the right to request a copy of the personal information we hold about you, or ask
            that your contact information and submitted couple photos be removed from our records once
            your design is completed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-medium text-plum-deep">
            6. Contact Our Privacy Team
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact Wedgram Designs via our{" "}
            <Link href="/contact" className="text-plum-royal hover:underline font-medium">
              Contact Page
            </Link>{" "}
            or message us on our official Instagram channel @wedgramdesigns.
          </p>
        </section>
      </div>
    </div>
  );
}
