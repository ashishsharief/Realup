const Vision = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium">
              <div className="w-2 h-2 bg-brand-red rounded-full"></div>
              Our Vision
            </div>
            <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold">
              Making Mysore a
              <span className="block text-gradient">Startup Hub</span>
            </h3>
          </div>

          {/* Main Vision Content */}
          <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-3xl text-muted-foreground leading-relaxed font-medium">
              We aim to make Mysore a recognized startup hub by bringing together 
              the brightest minds and most ambitious creators.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              RealUp isn't just a community; it's a movement. We're building the foundation 
              for Mysore's startup ecosystem, one connection at a time. Through collaboration, 
              knowledge sharing, and mutual support, we're creating an environment where 
              innovation thrives and dreams become reality.
            </p>
          </div>

          {/* Impact Metrics - Future Goals */}
          <div className="grid md:grid-cols-3 gap-12 pt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4 group">
              <div className="p-6 bg-brand-red/5 rounded-3xl group-hover:bg-brand-red/10 transition-colors duration-300">
                <div className="text-5xl font-bold text-brand-red mb-2">100+</div>
                <div className="text-xl font-semibold">Active Members</div>
                <div className="text-muted-foreground">Our goal for Year 1</div>
              </div>
            </div>
            <div className="space-y-4 group">
              <div className="p-6 bg-brand-red/5 rounded-3xl group-hover:bg-brand-red/10 transition-colors duration-300">
                <div className="text-5xl font-bold text-brand-red mb-2">25+</div>
                <div className="text-xl font-semibold">Startups Launched</div>
                <div className="text-muted-foreground">Through our network</div>
              </div>
            </div>
            <div className="space-y-4 group">
              <div className="p-6 bg-brand-red/5 rounded-3xl group-hover:bg-brand-red/10 transition-colors duration-300">
                <div className="text-5xl font-bold text-brand-red mb-2">10+</div>
                <div className="text-xl font-semibold">Events per Year</div>
                <div className="text-muted-foreground">Connecting the ecosystem</div>
              </div>
            </div>
          </div>

          {/* Quote or Mission Statement */}
          <div className="glass-card rounded-3xl p-12 mt-20 animate-fade-in-up border border-brand-red/10" style={{ animationDelay: '0.6s' }}>
            <blockquote className="text-3xl font-medium italic text-center leading-relaxed">
              "Every great ecosystem starts with a single community. 
              RealUp is Mysore's catalyst for innovation."
            </blockquote>
            <div className="text-brand-red font-semibold mt-6 text-lg">— RealUp Founding Team</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;