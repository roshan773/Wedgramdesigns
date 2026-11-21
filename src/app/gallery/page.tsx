import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import GalleryPortfolioHero from "@/components/heroes/GalleryPortfolioHero";

export const metadata: Metadata = {
  title: "Portfolio Gallery | Wedgram Designs",
  description:
    "Explore our complete portfolio of wedding invitation videos, animated save-the-dates, and digital wedding stationery suites crafted in Surat, India.",
  alternates: {
    canonical: "https://wedgramdesigns.vercel.app/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="pb-24">
      {/* 1. PORTFOLIO-STYLE EDITORIAL HERO */}
      <GalleryPortfolioHero />

      {/* 2. MULTI-CATEGORY INTERACTIVE GALLERY */}
      <Gallery />
    </div>
  );
}
