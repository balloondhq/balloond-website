import Image from 'next/image';

const Premium: React.FC = () => {
  const premiumFeatures = [
    "Unlimited Pops per day",
    "See who liked you first",
    "Advanced filters & preferences",
    "Super Pops to stand out",
    "Rewind your last decision",
    "Boost your profile visibility",
    "Read receipts on messages",
    "Priority customer support"
  ];

  return (
    <section id="premium" className="py-20 bg-gradient-to-br from-bone to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-gold-gradient text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
              PREMIUM EXPERIENCE
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gold-gradient-text">Unlock More Matches</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Premium Pops give you more reveals, boosts, and Super Pops. 
              Take your dating experience to the next level with exclusive features.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gold">
                Join Premium
              </button>
              <button className="btn-secondary">
                Try Free Trial
              </button>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-ruby">$9.99</p>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-ruby">$89.99</p>
                <p className="text-sm text-gray-600">per year (save 25%)</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gold via-amber-400 to-gold-dark rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Golden Balloons Illustration */}
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square bg-gradient-to-br from-yellow-300 to-gold rounded-full shadow-lg ${
                      i % 2 === 0 ? 'animate-float' : 'animate-float-delay'
                    }`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                      ✨
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <h3 className="text-2xl font-bold gold-gradient-text mb-2">Premium Member</h3>
                  <p className="text-gray-600">Exclusive Access</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold rounded-full shadow-xl animate-bounce-slow flex items-center justify-center">
              <span className="text-white text-2xl">👑</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-ruby rounded-full shadow-xl animate-float flex items-center justify-center">
              <span className="text-white text-xl">💎</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
