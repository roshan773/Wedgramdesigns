import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  themeColor: "#FAF7F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wedgramdesigns.vercel.app"),
  title: {
    default: "Wedgram Designs | Bespoke Wedding Invitation Videos & Digital Invites",
    template: "%s | Wedgram Designs",
  },
  description:
    "Wedgram Designs crafts exquisite, customized wedding invitation videos, animated save-the-dates, and modern digital marriage invites tailored to your love story in Surat, Gujarat & worldwide.",
  keywords: [
    "Wedding Invitation Video Design",
    "Digital Wedding Invitations",
    "Animated Wedding Invitations",
    "Save the Date Wedding Videos",
    "Wedding Invitation Designers in Surat",
    "Custom Wedding Invitation Videos in India",
    "Modern Minimalist Wedding Invitations",
    "Luxury Digital Wedding Stationery",
  ],
  authors: [{ name: "Wedgram Designs", url: "https://wedgramdesigns.vercel.app" }],
  creator: "Wedgram Designs",
  publisher: "Wedgram Designs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wedgramdesigns.vercel.app",
    siteName: "Wedgram Designs",
    title: "Wedgram Designs | Bespoke Wedding Invitation Videos & Digital Invites",
    description:
      "Crafting exquisite wedding invitation videos, animated save-the-dates, and bespoke digital invitations that turn your love story into timeless art.",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Wedgram Designs - Bespoke Wedding Invitations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedgram Designs | Bespoke Wedding Invitation Videos",
    description:
      "Exquisite wedding invitation videos and animated digital invites crafted with elegance and creativity.",
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
          "Wedgram Designs crafts bespoke wedding invitation videos uniquely tailored to reflect your love story.",
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
        telephone: "",
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
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "20:00",
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
      {
        "@type": "Service",
        "@id": "https://wedgramdesigns.vercel.app/#service",
        name: "Wedding Invitation Video Design",
        provider: {
          "@id": "https://wedgramdesigns.vercel.app/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Wedding Invitation Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Modern Minimalist Wedding Invitations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Animated Save-the-Date Invitations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Modern Wedding Invitation Videos",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Customised Wedding Invitation Designs",
              },
            },
          ],
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
        className={`${cormorant.variable} ${plusJakarta.variable} font-sans antialiased bg-ivory-100 text-charcoal selection:bg-champagne-300 selection:text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
