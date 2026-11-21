import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F8EEFC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wedgramdesigns.vercel.app"),
  title: {
    default: "Wedgram Designs | Premium Wedding Invitation Videos & Digital Invites",
    template: "%s | Wedgram Designs",
  },
  description:
    "Wedgram Designs is an exquisite Indian wedding invitation studio in Surat, Gujarat crafting bespoke video invitations, animated save-the-dates, and luxury digital wedding stationery.",
  keywords: [
    "Wedding Invitation Video Design",
    "Digital Wedding Invitations",
    "Animated Save the Date Videos",
    "Custom Wedding Invitations India",
    "Wedding Invitation Designers Surat",
    "Luxury Digital Wedding Stationery",
    "Indian Wedding Card Videos",
  ],
  authors: [{ name: "Wedgram Designs", url: "https://wedgramdesigns.vercel.app" }],
  creator: "Wedgram Designs",
  publisher: "Wedgram Designs",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wedgramdesigns.vercel.app",
    siteName: "Wedgram Designs",
    title: "Wedgram Designs | Premium Wedding Invitation Studio",
    description:
      "Beautiful invitations for your forever story. Thoughtfully crafted wedding invitation videos, animated save-the-dates, and bespoke digital suites.",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Wedgram Designs Brand Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedgram Designs | Wedding Invitation Studio",
    description:
      "Bespoke wedding invitation videos, animated save-the-dates, and luxury digital stationery.",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wedgramdesigns.vercel.app/#organization",
        name: "Wedgram Designs",
        url: "https://wedgramdesigns.vercel.app",
        logo: "https://wedgramdesigns.vercel.app/images/logo.jpeg",
        description:
          "Wedgram Designs crafts exquisite wedding invitation videos uniquely tailored to reflect your love story.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        sameAs: ["https://www.instagram.com/wedgramdesigns/"],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://wedgramdesigns.vercel.app/#localbusiness",
        name: "Wedgram Designs",
        image: "https://wedgramdesigns.vercel.app/images/logo.jpeg",
        url: "https://wedgramdesigns.vercel.app",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "21.1702",
          longitude: "72.8311",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://wedgramdesigns.vercel.app/#website",
        url: "https://wedgramdesigns.vercel.app",
        name: "Wedgram Designs",
        publisher: {
          "@id": "https://wedgramdesigns.vercel.app/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${plusJakarta.variable} font-sans antialiased bg-lavender-100 text-plum-deep selection:bg-floral-soft selection:text-plum-dark flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
