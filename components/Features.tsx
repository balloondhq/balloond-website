const Features: React.FC = () => {
  const features = [
    {
      icon: "🎤",
      title: "Voice Pops",
      description: "Hear their vibe first. Get a real sense of personality through voice notes before you match.",
      gradient: "from-ruby to-pink-600"
    },
    {
      icon: "🎬",
      title: "Video Pops",
      description: "See short 6-15s intros. Authentic glimpses into who they really are, no filters needed.",
      gradient: "from-purple-600 to-ruby"
    },
    {
      icon: "✨",
      title: "Smart Matching",
      description: "Based on prompts, interests, and activity. Our AI finds your perfect match beyond just looks.",
      gradient: "from-gold to-amber-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Dating Reimagined</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Balloon&apos;d brings authenticity back to online dating with innovative features that help you connect on a deeper level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-bone rounded-3xl p-8 card-hover group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent" 
                  style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}
                  className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent text-2xl font-bold mb-4`}>
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 flex items-center text-ruby font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-ruby to-ruby-dark rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold mb-2">85%</h4>
              <p className="text-white/80">Match Success Rate</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">3M+</h4>
              <p className="text-white/80">Pops Exchanged</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">120+</h4>
              <p className="text-white/80">Countries</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">24/7</h4>
              <p className="text-white/80">Support Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
