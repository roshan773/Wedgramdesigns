import HomeEditorialHero from "@/components/heroes/HomeEditorialHero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";

export default function HomePage() {
  const workflowSteps = [
    { number: "01", title: "Explore Designs", desc: "Browse our signature video and digital wedding invitation collections." },
    { number: "02", title: "Select Style", desc: "Choose traditional royal, floral botanical, or modern minimalist aesthetics." },
    { number: "03", title: "Submit Details", desc: "Share your ceremonial dates, venue, music preference, and story." },
    { number: "04", title: "Design Crafting", desc: "Our Surat design studio creates your custom motion visuals." },
    { number: "05", title: "Review & Refine", desc: "Preview your draft video and request personalized adjustments." },
    { number: "06", title: "Final Delivery", desc: "Receive your Ultra HD video invite ready to share with loved ones." },
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. EDITORIAL SPLIT HERO WITH 3D INTERACTIVE CARD */}
      <HomeEditorialHero />

      {/* 2. BRAND INTRODUCTION & PHILOSOPHY */}
      <About />

      {/* 3. CURATED INVITATION SERVICES */}
      <Services />

      {/* 4. CAPTIVATING CREATIONS GALLERY */}
      <Gallery />

      {/* 5. WHY COUPLES CHOOSE WEDGRAM DESIGNS */}
      <WhyChooseUs />

      {/* 6. SIX-STEP STORYTELLING WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            The Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-plum-deep mt-2">
            How It Works
          </h2>
          <div className="w-16 h-[1.5px] bg-champagne mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-2xl bg-ivory border border-champagne/70 shadow-subtle hover:shadow-luxury transition-all duration-300 relative"
            >
              <span className="text-3xl font-serif font-bold text-plum-royal/20 block mb-2">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-medium text-plum-deep mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-mutedText font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WEDDING INVITATION FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-luxury text-plum-royal font-semibold">
            Start Your Invitation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-plum-deep mt-2">
            Wedding Invitation Enquiry
          </h2>
          <div className="w-16 h-[1.5px] bg-champagne mx-auto mt-4 mb-4" />
          <p className="text-sm text-mutedText font-light max-w-xl mx-auto">
            Fill in your wedding details below to receive a custom design consultation and quote from
            our studio.
          </p>
        </div>

        <EnquiryForm />
      </section>
    </div>
  );
}
