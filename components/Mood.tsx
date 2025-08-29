import Image from 'next/image';

const Mood: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-ruby/90 to-ruby-dark/90 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-shadow-lg">
            Real People, Real Vibes
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-white/90">
            Balloon&apos;d is built for genuine connections. No more endless swiping through filtered photos. 
            Pop the balloon to discover authentic personalities and find someone who truly matches your energy.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-lg font-semibold">🎯 Personality First</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-lg font-semibold">💬 Real Conversations</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-lg font-semibold">❤️ Deeper Connections</span>
            </div>
          </div>
          
          <button className="btn-gold text-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mood;
