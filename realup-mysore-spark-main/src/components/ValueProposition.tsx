import { Users, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValueProposition = () => {
  const values = [
    {
      icon: Users,
      title: "Founders & Entrepreneurs",
      description: "Turn your vision into reality with the right connections",
      detail: "Access co-founders, mentors, and resources. Get feedback, find your team, and accelerate your startup journey in a supportive ecosystem.",
      features: ["Co-founder matching", "Mentor network", "Pitch opportunities", "Resource sharing"],
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: GraduationCap,
      title: "Students & Learners",
      description: "Bridge the gap between education and entrepreneurship",
      detail: "Gain real-world experience, explore career paths, and develop entrepreneurial skills through hands-on learning and industry exposure.",
      features: ["Internship opportunities", "Skill workshops", "Industry exposure", "Career guidance"],
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: TrendingUp,
      title: "Investors & Mentors",
      description: "Shape the future by empowering the next generation",
      detail: "Scout emerging talent, share expertise, and be part of building a thriving startup ecosystem from the ground up.",
      features: ["Deal flow access", "Portfolio opportunities", "Thought leadership", "Community impact"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium">
              <div className="w-2 h-2 bg-brand-red rounded-full"></div>
              Our Community
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Built for
              <span className="block text-gradient">Every Dreamer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're building, learning, or investing, RealUp provides the perfect 
              environment for growth, collaboration, and success.
            </p>
          </div>

          {/* Enhanced Value Cards */}
          <div className="grid lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden animate-fade-in-up interactive-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Card Content */}
                <div className="relative glass-card p-10 rounded-3xl h-full border-2 border-transparent group-hover:border-brand-red/20 transition-all duration-500 bg-background/80 backdrop-blur-xl">
                  <div className="space-y-6">
                    {/* Enhanced Icon */}
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-red/10 rounded-3xl group-hover:bg-brand-red/20 group-hover:scale-110 transition-all duration-500">
                        <value.icon className="w-10 h-10 text-brand-red group-hover:text-brand-red-hover transition-colors duration-300" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-red/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="space-y-5">
                      <h3 className="text-3xl font-bold group-hover:text-brand-red transition-colors duration-300">{value.title}</h3>
                      <p className="text-xl font-semibold text-brand-red/80">{value.description}</p>
                      <p className="text-muted-foreground leading-relaxed text-lg">{value.detail}</p>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-4">
                      {value.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                          <span className="text-base text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Element */}
                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Button variant="ghost" size="sm" className="text-brand-red hover:text-brand-red-hover p-0 h-auto font-medium">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-brand-red-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl text-muted-foreground mb-8">Ready to be part of something bigger?</p>
            <Button 
              variant="brand-primary" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              Join Our Community
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;