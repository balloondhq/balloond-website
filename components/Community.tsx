import React from 'react';

const Community: React.FC = () => {
  const stories = [
    {
      name: "Sarah & Michael",
      location: "London",
      story: "We both sent voice pops on the same day talking about our love for hiking. The authenticity in each other's voices made us feel connected instantly.",
      emoji: "🏔️",
      months: "3"
    },
    {
      name: "Emma & David",
      location: "New York",
      story: "His video pop showed him cooking pasta and singing badly. I knew he was the one when I couldn't stop laughing!",
      emoji: "🍝",
      months: "8"
    },
    {
      name: "Alex & Jamie",
      location: "Sydney",
      story: "We matched over a shared obsession with obscure indie films. Our first date was a 6-hour movie marathon.",
      emoji: "🎬",
      months: "12"
    }
  ];

  const stats = [
    { number: "500K+", label: "Love Stories Started", icon: "💕" },
    { number: "2.1M", label: "Voice Pops Sent", icon: "🎤" },
    { number: "150+", label: "Countries Connected", icon: "🌍" },
    { number: "85%", label: "Feel More Connected", icon: "✨" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream via-white to-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-ruby/10 text-ruby text-sm font-bold px-4 py-2 rounded-full mb-6">
            REAL CONNECTIONS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Stories Worth Sharing</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every day, thousands of meaningful connections begin with a simple pop. 
            Here are some of our favorite love stories from the Balloon'd community.
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-center">
                {story.emoji}
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                <p className="text-gray-500 text-sm">{story.location} • {story.months} months together</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{story.story}"
              </p>
              
              <div className="text-center">
                <span className="inline-block bg-ruby/5 text-ruby text-xs font-semibold px-3 py-1 rounded-full">
                  Success Story
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-ruby via-ruby-dark to-ruby rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-white/80 text-lg">Real people, real connections, real relationships</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines Preview */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Safe & Respectful</span>
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our community thrives on authentic connections built with respect and kindness. 
                We've created guidelines to ensure everyone feels safe to be their true selves.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-ruby rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Zero tolerance for harassment</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-ruby rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Photo verification required</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-ruby rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 community support</span>
                </div>
              </div>
              
              <a 
                href="/community-guidelines" 
                className="inline-flex items-center text-ruby font-semibold hover:text-ruby-dark transition-colors"
              >
                Read Full Guidelines
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cream to-bone rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {["😊", "🤗", "❤️", "✨", "🌟", "💫"].map((emoji, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">Positive Vibes Only</h4>
                  <p className="text-gray-600 text-sm">Building connections through kindness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
