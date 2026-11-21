"use client";

import { useState } from "react";
import Image from "next/image";

type CategoryType = "all" | "cards" | "videos" | "photos";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  category: CategoryType;
  aspectRatio: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const mediaItems: MediaItem[] = [
    {
      id: "vid-1",
      type: "video",
      src: "/images/WhatsApp Video 2025-04-23 at 7.56.48 PM.mp4",
      title: "Royal Animated Wedding Invite",
      category: "videos",
      aspectRatio: "aspect-[9/16]",
    },
    {
      id: "vid-2",
      type: "video",
      src: "/images/WhatsApp Video 2025-04-23 at 7.56.50 PM (1).mp4",
      title: "Traditional Heritage Motion Suite",
      category: "videos",
      aspectRatio: "aspect-[9/16]",
    },
    {
      id: "vid-3",
      type: "video",
      src: "/images/WhatsApp Video 2025-04-23 at 7.56.50 PM.mp4",
      title: "Modern Couple Save-the-Date Video",
      category: "videos",
      aspectRatio: "aspect-[9/16]",
    },
    {
      id: "img-1",
      type: "image",
      src: "/images/Dark Orange and Gold Bordered Wedding Invitation.png",
      title: "Gold & Dark Orange Imperial Card",
      category: "cards",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: "img-2",
      type: "image",
      src: "/images/Photo2.jpeg",
      title: "Floral Elegance Wedding Portrait",
      category: "photos",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: "img-3",
      type: "image",
      src: "/images/WhatsApp Image 2025-04-23 at 7.56.49 PM.jpeg",
      title: "Ceremony & Save-the-Date Showcase",
      category: "cards",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: "img-4",
      type: "image",
      src: "https://marketplace.canva.com/EAGHPJH9kNE/1/0/1135w/canva-light-pink-royal-elegant-floral-indian-wedding-invitation-RYr8wyzxvto.jpg",
      title: "Royal Floral Indian Invitation",
      category: "cards",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: "img-5",
      type: "image",
      src: "https://images.unsplash.com/photo-1601482985114-e509737ba2ed?w=600&auto=format&fit=crop&q=80",
      title: "Traditional Mehndi Ceremony Moment",
      category: "photos",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: "img-6",
      type: "image",
      src: "https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=600&auto=format&fit=crop",
      title: "Timeless Bridal Elegance",
      category: "photos",
      aspectRatio: "aspect-[3/4]",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      aria-label="Portfolio and Gallery"
      className="py-24 bg-ivory-100 border-t border-champagne-300/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-luxury text-gold-dark font-semibold mb-3">
            Captivating Creations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal leading-tight">
            Explore Stunning Wedding Designs
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6 mb-6" />
          <p className="text-base sm:text-lg text-charcoal-100 font-light leading-relaxed">
            Discover exquisite digital invitations with unrivaled elegance,
            transforming your wedding announcements into unforgettable visual
            masterpieces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {[
            { id: "all" as CategoryType, label: "All Works" },
            { id: "videos" as CategoryType, label: "Motion & Videos" },
            { id: "cards" as CategoryType, label: "Digital Cards" },
            { id: "photos" as CategoryType, label: "Ceremony Gallery" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-editorial transition-all duration-300 font-medium ${
                activeCategory === tab.id
                  ? "bg-charcoal text-ivory-100 shadow-subtle"
                  : "bg-champagne-200/50 hover:bg-champagne-200 text-charcoal-100 border border-champagne-300/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-ivory-50 rounded-2xl overflow-hidden border border-champagne-300/70 shadow-subtle hover:shadow-luxury transition-all duration-500"
            >
              {item.type === "video" ? (
                <div className="relative aspect-[9/14] sm:aspect-[9/15] bg-charcoal-900 overflow-hidden">
                  <video
                    src={item.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support HTML video playback.
                  </video>
                  <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] uppercase tracking-luxury text-ivory-100 font-mono pointer-events-none">
                    Video
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[3/4] overflow-hidden bg-champagne-200/40">
                  <Image
                    src={item.src}
                    alt={`${item.title} - Wedgram Designs`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-ivory-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-serif text-lg font-light leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              )}

              {/* Title footer for clarity */}
              <div className="p-4 bg-ivory-50 border-t border-champagne-300/40 flex items-center justify-between">
                <h3 className="font-serif text-base text-charcoal truncate pr-2">
                  {item.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-50 font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
