const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Modern Section Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-600 text-sm font-medium">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              About RealUp
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Pioneering Mysore's
              <span className="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent pt-2">
                Startup Revolution
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The first community dedicated to nurturing entrepreneurship, innovation, and growth in the Royal City
            </p>
          </div>

          {/* Enhanced Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 md:mb-20">
            <div className="flex">
              <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-red-100 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-red-600 rounded-lg"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  RealUp exists to transform Mysore into a thriving startup ecosystem. We connect ambitious minds, 
                  accelerate innovative ideas, and provide the platform where dreams evolve into successful ventures.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-red-100 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-red-600 rounded-lg"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  To establish Mysore as a recognized startup hub in South India, fostering innovation, 
                  creating opportunities, and building a sustainable ecosystem for entrepreneurs to thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Modern Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-red-100 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="text-center space-y-5">
                <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    01
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl md:text-2xl font-bold text-gray-800">First of Its Kind</div>
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Mysore's pioneering startup community initiative
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-red-100 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="text-center space-y-5">
                <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    02
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl md:text-2xl font-bold text-gray-800">Unlimited Potential</div>
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Connecting founders, students & investors
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-red-100 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="text-center space-y-5">
                <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-500">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                    03
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl md:text-2xl font-bold text-gray-800">Growing Together</div>
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Building the future, one connection at a time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;