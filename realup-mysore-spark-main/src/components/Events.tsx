import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You'll be notified about our upcoming events.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium">
              <Calendar className="w-4 h-4" />
              Upcoming Events
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Experiences That
              <span className="block text-gradient">Shape Futures</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From intimate founder meetups to large-scale investor events, we're creating 
              meaningful connections that drive Mysore's startup ecosystem forward.
            </p>
          </div>

          {/* Enhanced Events Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl interactive-lift group animate-slide-in-left">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-brand-red">
                    <div className="p-2 bg-brand-red/10 rounded-lg">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">Launching Soon</span>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Free Event
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-brand-red transition-colors duration-300">
                    Founder Meetup #1
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join us for our inaugural meetup where local entrepreneurs will share their 
                    journeys, challenges, and insights. Network with like-minded founders and 
                    be part of history in the making.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-brand-red" />
                    <span>Mysore</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-brand-red" />
                    <span>50+ Expected</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Get notified when we announce</span>
                    <div className="w-8 h-1 bg-brand-red rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl interactive-lift group animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-brand-red">
                    <div className="p-2 bg-brand-red/10 rounded-lg">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">In Planning</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    Invite Only
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-brand-red transition-colors duration-300">
                    Investor Connect
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    An exclusive networking event bringing together promising startups and 
                    potential investors from across Karnataka. Pitch your ideas and secure 
                    the funding you need.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-brand-red" />
                    <span>Mysore</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-brand-red" />
                    <span>TBD</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Curated for serious founders</span>
                    <div className="w-8 h-1 bg-brand-red rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Email Signup */}
          <div className="glass-card p-10 rounded-2xl animate-fade-in-up relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-red/3 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Never Miss a Moment</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Be the first to know about our events, announcements, and exclusive opportunities. 
                  Join our inner circle of innovators and changemakers.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 pl-4 pr-4 border-2 border-border/50 focus:border-brand-red bg-background/80 backdrop-blur-sm rounded-xl transition-all duration-300"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="brand-primary" 
                    size="lg"
                    className="h-12 px-8 whitespace-nowrap"
                  >
                    Join Waitlist
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, just valuable updates. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;