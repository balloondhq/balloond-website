import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dynamically import Lottie player to avoid SSR issues
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

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
      
      {/* Hero Section - With Custom Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{
        backgroundImage: 'url(https://rbaukrv6mnhedbdj.public.blob.vercel-storage.com/assets/couple-9788568.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Balloon Pop Animations Overlay - Sequential with slower speed */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Multiple Lottie balloon animations positioned across the screen with delays */}
          <div className="absolute top-4 sm:top-20 left-4 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 opacity-0 animate-balloon-appear-1">
            <Lottie
              loop
              animationData={require('../components/redBallon.json')}
              play
              speed={0.5}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute top-20 sm:top-40 right-4 sm:right-32 w-28 h-28 sm:w-40 sm:h-40 opacity-0 animate-balloon-appear-2">
            <Lottie
              loop
              animationData={require('../components/redBallon.json')}
              play
              speed={0.4}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute bottom-40 sm:bottom-32 left-1/4 w-24 h-24 sm:w-36 sm:h-36 opacity-0 animate-balloon-appear-3">
            <Lottie
              loop
              animationData={require('../components/redBallon.json')}
              play
              speed={0.6}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute top-1/2 right-4 sm:right-20 w-20 h-20 sm:w-28 sm:h-28 opacity-0 animate-balloon-appear-4">
            <Lottie
              loop
              animationData={require('../components/redBallon.json')}
              play
              speed={0.7}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-16 w-24 h-24 sm:w-32 sm:h-32 opacity-0 animate-balloon-appear-5">
            <Lottie
              loop
              animationData={require('../components/redBallon.json')}
              play
              speed={0.3}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-16 lg:pt-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Left Content - Enhanced Typography */}
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
              {/* Badge/Tag - Lowered Position */}
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-rose-700 font-medium text-xs sm:text-sm mb-6 sm:mb-8 lg:mb-12 border border-rose-200">
                <span className="mr-2">🎈</span>
                New way to connect authentically
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-6 lg:mb-8">
                <span className="block text-white drop-shadow-lg mb-2">Designed</span>
                <span className="block text-white drop-shadow-lg">
                  for Chemistry
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white drop-shadow-md mb-8 lg:mb-12 leading-relaxed font-medium px-4 lg:px-0">
                From finding your person. Authentic connections through voice, 
                video, and our unique balloon reveal experience.
              </p>
              
              {/* Enhanced CTA Button */}
              <div className="flex justify-center lg:justify-start mb-8 lg:mb-16">
                <button className="group bg-white/90 backdrop-blur-sm text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Get Started Today
                </button>
              </div>
            </div>
            
            {/* Right Content - Enhanced Phone with Multiple Screens */}
            <div className="flex justify-center relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                {/* Main Phone Frame */}
                <div className="relative w-72 sm:w-80 h-[580px] sm:h-[650px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="h-14 bg-gradient-to-r from-rose-50 to-orange-50 flex items-center justify-between px-6">
                      <span className="text-sm font-bold text-gray-800">9:41</span>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full"></div>
                          <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="px-6 py-4 bg-white border-b border-rose-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Balloon'd</h3>
                        <div className="text-2xl animate-pulse">🎈</div>
                      </div>
                    </div>
                    
                    {/* App Content - Discovery */}
                    <div className="flex-1 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-6">
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full text-rose-700 text-sm font-medium mb-4">
                          <span className="mr-1">🎯</span>
                          Perfect Match
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Emma, 26</h3>
                        <p className="text-rose-600 font-medium">1.2 miles away • Online now</p>
                      </div>
                      
                      {/* Profile Card with Balloon Reveal */}
                      <div className="relative w-full h-80 bg-gradient-to-br from-rose-200 via-pink-200 to-orange-200 rounded-3xl mx-auto mb-6 overflow-hidden shadow-lg">
                        {/* Balloon Overlay Effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-8xl animate-bounce-slow opacity-80">🎈</div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3">
                            <p className="text-sm font-medium text-gray-800">"Love hiking and Sunday brunches! 🥞"</p>
                            <div className="flex items-center mt-2 space-x-2">
                              <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full">Adventurous</span>
                              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Foodie</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex justify-center space-x-6">
                        <button className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-2xl hover:bg-gray-50 hover:border-gray-300 transition-all transform hover:scale-110 shadow-lg">
                          ✕
                        </button>
                        <button className="w-20 h-20 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-3xl text-white hover:from-rose-600 hover:to-orange-600 transition-all transform hover:scale-110 shadow-2xl">
                          🎈
                        </button>
                        <button className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-2xl hover:bg-gray-50 hover:border-gray-300 transition-all transform hover:scale-110 shadow-lg">
                          💝
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full"></div>
                </div>
                
                {/* Floating Success Notification - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-8 -left-12 bg-white rounded-2xl p-4 shadow-2xl border border-rose-100 transform -rotate-12 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center text-white">
                      🎈
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">It's a match!</p>
                      <p className="text-gray-600 text-xs">Someone popped for you</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Voice Message - Hidden on mobile */}
                <div className="hidden sm:block absolute -bottom-8 -right-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl p-4 shadow-2xl transform rotate-12 animate-float-delay">
                  <div className="flex items-center space-x-2 text-white">
                    <span className="text-xl animate-pulse">🎙️</span>
                    <div>
                      <p className="font-bold text-sm">Voice message</p>
                      <div className="flex space-x-1 mt-1">
                        <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
                        <div className="w-1 h-4 bg-white rounded-full animate-pulse delay-100"></div>
                        <div className="w-1 h-2 bg-white rounded-full animate-pulse delay-200"></div>
                        <div className="w-1 h-5 bg-white rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Clean Cards */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">
              Designed for real connections
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Every feature is thoughtfully crafted to help you find meaningful relationships, 
              not just matches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow mx-4 sm:mx-0">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories - Testimonial Carousel */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">
              Real stories, real connections
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Join thousands of people who found love through Balloon'd
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-6 sm:p-8 lg:p-12 text-center mx-4 sm:mx-0">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">{testimonials[currentSlide].image}</div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-4 sm:mb-6 leading-relaxed px-2">
                "{testimonials[currentSlide].text}"
              </blockquote>
              <cite className="text-base sm:text-lg text-gray-600 font-medium">
                {testimonials[currentSlide].name}
              </cite>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-rose-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to find something real?
          </h2>
          <p className="text-lg sm:text-xl text-rose-100 mb-8 sm:mb-10 px-4">
            Join Balloon'd today and start connecting with people who matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base">
              Download for iPhone
            </button>
            <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base">
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
        
        @keyframes balloonAppear {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
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
        
        .animate-balloon-appear-1 {
          animation: balloonAppear 1s ease-out 0.5s forwards;
        }
        
        .animate-balloon-appear-2 {
          animation: balloonAppear 1s ease-out 1.2s forwards;
        }
        
        .animate-balloon-appear-3 {
          animation: balloonAppear 1s ease-out 1.8s forwards;
        }
        
        .animate-balloon-appear-4 {
          animation: balloonAppear 1s ease-out 2.5s forwards;
        }
        
        .animate-balloon-appear-5 {
          animation: balloonAppear 1s ease-out 3.2s forwards;
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
