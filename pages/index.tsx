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
          <div className="flex justify-center items-center min-h-screen">
            {/* Center Content - Enhanced Typography */}
            <div className="max-w-4xl mx-auto text-center">
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
              <div className="flex justify-center mb-8 lg:mb-16">
                <button className="group bg-white/90 backdrop-blur-sm text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Get Started Today
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Features Section - Minimal Luxe Style */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-5 tracking-tight">
              Designed for real connections
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Every feature is thoughtfully crafted to help you find meaningful relationships, 
              not just matches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start px-2">
                <div className="text-2xl sm:text-3xl mb-5 text-gray-900">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories - Hinge-Inspired Minimal Carousel */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-5 tracking-tight">
              Real stories, real connections
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
              Join thousands of people who found love through Balloon'd
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Minimalist Testimonial Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 sm:p-12 text-left mx-4 sm:mx-0 transition-opacity duration-500">
              <div className="flex flex-col space-y-6">
                <div className="text-3xl sm:text-4xl">{testimonials[currentSlide].image}</div>
                <blockquote className="text-base sm:text-lg text-gray-800 font-light leading-relaxed">
                  {testimonials[currentSlide].text}
                </blockquote>
                <div className="pt-4 border-t border-gray-200">
                  <cite className="text-sm sm:text-base text-gray-900 font-medium not-italic">
                    {testimonials[currentSlide].name}
                  </cite>
                </div>
              </div>
            </div>
            
            {/* Carousel Navigation - Hinge Style */}
            <div className="flex justify-between mt-10">
              <div className="flex items-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide 
                      ? 'bg-rose-500 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentSlide((currentSlide + 1) % testimonials.length)}
                  className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Minimal Luxury Style */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-5 sm:mb-6 tracking-tight">
            Ready to find something real?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto font-light tracking-wide">
            Join Balloon'd today and start connecting with people who matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-light hover:bg-white/20 transition-colors text-sm sm:text-base">
              Download for iPhone
            </button>
            <button className="bg-white text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-light hover:bg-gray-100 transition-colors text-sm sm:text-base">
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
