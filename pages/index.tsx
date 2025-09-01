import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      title: "Voice-First Dating",
      description: "Hear their personality before you see their face. Send voice messages that reveal the real you.",
      icon: "🎙️",
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Video Intros",
      description: "Share authentic moments with video profiles. No filters, just genuine connections.",
      icon: "📹",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Smart Matching",
      description: "Our algorithm learns what matters to you, connecting hearts that beat in harmony.",
      icon: "💝",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Balloon Reveals",
      description: "Pop balloons to discover matches. Each pop brings you closer to someone special.",
      icon: "🎈",
      color: "from-red-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      text: "I found my person through Balloon'd. The voice messages helped me connect on a deeper level.",
      name: "Sarah & Mike",
      image: "💕"
    },
    {
      text: "Finally, a dating app that feels genuine. The balloon concept is so fun and addictive!",
      name: "Jessica & David",
      image: "🎈"
    },
    {
      text: "Met my best friend and partner here. The video intros made all the difference.",
      name: "Alex & Jordan",
      image: "💖"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <>
      <NextSeo
        title="Balloon'd - Pop into Something Real"
        description="The dating app designed for meaningful connections. Voice messages, video intros, and authentic matching."
        canonical="https://balloond.com/"
        openGraph={{
          url: 'https://balloond.com',
          title: "Balloon'd - Pop into Something Real",
          description: 'The dating app designed for meaningful connections. Voice messages, video intros, and authentic matching.',
          images: [
            {
              url: '/hero.svg',
              width: 1200,
              height: 630,
              alt: "Balloon'd App Preview",
            },
          ],
          site_name: "Balloon'd",
        }}
        twitter={{
          handle: '@balloond',
          site: '@balloond',
          cardType: 'summary_large_image',
        }}
      />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section - Hinge Style */}
      <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-3 h-3 bg-rose-200 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-orange-200 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-pink-200 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-rose-200 rounded-full animate-pulse delay-3000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Pop into
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
                  Something Real
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                The dating app designed for meaningful connections. Hear their voice, 
                see their authentic self, and discover matches that matter.
              </p>
              
              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-3">
                  <span className="text-2xl">🤖</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-rose-600">500K+</div>
                  <div className="text-gray-600">People matched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">4.8★</div>
                  <div className="text-gray-600">App Store rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">2M+</div>
                  <div className="text-gray-600">Messages sent</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Frame - More Realistic */}
                <div className="relative w-80 h-[600px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="h-12 bg-gray-50 flex items-center justify-between px-6">
                      <span className="text-sm font-medium">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="flex-1 bg-gradient-to-br from-rose-50 to-orange-50 p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah, 28</h3>
                        <p className="text-gray-600">2 miles away</p>
                      </div>
                      
                      {/* Profile Image Placeholder */}
                      <div className="w-48 h-64 bg-gradient-to-br from-rose-200 to-orange-200 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                        <div className="text-6xl animate-bounce-slow">🎈</div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex justify-center space-x-4">
                        <button className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors">
                          ✕
                        </button>
                        <button className="w-16 h-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-2xl text-white hover:shadow-lg transition-shadow">
                          💝
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center animate-bounce text-white text-xl shadow-lg">
                  🎈
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center animate-pulse text-white text-2xl shadow-lg">
                  💕
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Clean Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Designed for real connections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is thoughtfully crafted to help you find meaningful relationships, 
              not just matches.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories - Testimonial Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real stories, real connections
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of people who found love through Balloon'd
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-12 text-center">
              <div className="text-6xl mb-6">{testimonials[currentSlide].image}</div>
              <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                "{testimonials[currentSlide].text}"
              </blockquote>
              <cite className="text-lg text-gray-600 font-medium">
                {testimonials[currentSlide].name}
              </cite>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-rose-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to find something real?
          </h2>
          <p className="text-xl text-rose-100 mb-10">
            Join Balloon'd today and start connecting with people who matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors">
              Download for iPhone
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors">
              Download for Android
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f43f5e, #fb7185);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
};

export default Home;
