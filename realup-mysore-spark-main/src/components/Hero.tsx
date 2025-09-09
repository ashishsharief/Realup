import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-red/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-10 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium animate-scale-in">
                <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse-soft"></div>
                Mysuru's First Startup Community
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block">Building the</span>
                <span className="block text-red-500 ">Future Together</span>
              </h1>
              
              <p className="text-xl lg:text-2xl  font-medium leading-relaxed">
                Where dreamers become doers, ideas become startups, and ambition meets opportunity.
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Join Mysore's pioneering startup ecosystem where founders, investors, and innovators 
                connect to shape the future of entrepreneurship in our city.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="group relative overflow-hidden"
                onClick={() => window.open('https://pages.razorpay.com/realupclub', '_blank')}
              >
                <span className="relative z-10">Register For The Meet-up</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red-hover to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                className="group"
                // onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                13th September 2025
                {/* <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" /> */}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground pt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Networking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-red rounded-full"></div>
                <span>Community Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Idea Pitch</span>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Illustration */}
          <div className="hidden lg:flex justify-center items-center animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-red/10 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
              <img 
                src={heroImage} 
                alt="Modern startup community illustration"
                className="relative w-full max-w-lg rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 interactive-lift"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-red/10 rounded-full animate-pulse-soft"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-red/5 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center space-y-3 text-muted-foreground group cursor-pointer"
             onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-xs font-medium uppercase tracking-wide">Explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center group-hover:border-brand-red transition-colors duration-300">
            <div className="w-1 h-3 bg-brand-red rounded-full mt-2 animate-pulse-soft"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;