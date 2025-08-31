import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueProposition from "@/components/ValueProposition";
import Events from "@/components/Events";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ValueProposition />
      <Events />
      <Vision />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
