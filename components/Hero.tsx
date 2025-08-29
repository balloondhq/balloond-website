import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bone via-white to-rose-50">
      {/* Animated Background Balloons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-ruby/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gold/10 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-ruby/5 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-gold/10 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Pop into</span>
              <br />
              <span className="text-gray-900">Something Real</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              A playful way to meet real matches. Voice notes, video intros, and smart matching for genuine connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#" className="inline-block transform transition-transform hover:scale-105">
                <Image
                  src="/appstore-badge.svg"
                  alt="Download on App Store"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
              <a href="#" className="inline-block transform transition-transform hover:scale-105">
                <Image
                  src="/googleplay-badge.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </div>
            
            <div className="mt-12 flex gap-8 justify-center lg:justify-start">
              <div>
                <h3 className="text-3xl font-bold text-ruby">500K+</h3>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-ruby">4.8★</h3>
                <p className="text-gray-600">App Rating</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-ruby">50K+</h3>
                <p className="text-gray-600">Daily Matches</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[640px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-ruby/20 to-gold/20 rounded-[2.5rem] flex items-center justify-center">
                  {/* Placeholder for phone screen */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-ruby rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg">Pop to reveal!</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Balloon */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-ruby rounded-full shadow-xl animate-float flex items-center justify-center">
                <span className="text-white text-3xl">🎈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
