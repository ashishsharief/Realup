import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-red to-brand-red-hover text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full">
              <Rocket className="w-10 h-10" />
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Be Part of Mysore's Startup Revolution
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join a community of ambitious entrepreneurs, innovative students, and experienced 
              mentors who are building the future of Mysore's startup ecosystem.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 py-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <div className="text-lg font-semibold">Network & Collaborate</div>
              <div className="text-white/80">Connect with like-minded innovators</div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold">Learn & Grow</div>
              <div className="text-white/80">Access mentorship and resources</div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold">Build & Launch</div>
              <div className="text-white/80">Turn your ideas into reality</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={scrollToContact}
              size="xl"
              className="bg-white text-brand-red hover:bg-white/90 hover:text-brand-red-hover transform hover:scale-105 transition-all duration-200 group"
            >
              Join the Community
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-white/80 mt-4 text-sm">
              Free to join • Growing community • Exclusive events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;