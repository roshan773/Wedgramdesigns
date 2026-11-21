import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory-100 text-charcoal">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
}
