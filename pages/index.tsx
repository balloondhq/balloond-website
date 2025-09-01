// pages/index.tsx
import type { NextPage, GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { prisma } from '../lib/prisma';

interface SiteContent {
  id: string;
  content: string;
}

interface HomeProps {
  siteContent: SiteContent[];
}

const Home: NextPage<HomeProps> = ({ siteContent }) => {
  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const testimonials = [
    {
      quote: "The pop challenges were so fun! They immediately broke the ice and helped me connect with Sarah on a deeper level. We matched 6 months ago and just moved in together.",
      author: "Michael T."
    },
    {
      quote: "After years of disappointing dating app experiences, Balloon'd helped me find someone who truly gets me. The voice-first approach really made a difference in forming a real connection.",
      author: "Jessica L."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentTestimonial(current => (current + 1) % testimonials.length);
          return 0;
        }
        return prev + 1;
      });
    }, 100); // Update every 100ms for smooth progress

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get content with fallbacks
  const getContentById = (id: string) => {
    const content = siteContent.find(item => item.id === id);
    return content?.content || '';
  };

  const heroHeadline = getContentById('hero-headline') || 'One pop away from what you\'ve been waiting for';
  const heroSubtitle = getContentById('hero-subtitle') || 'Break through the noise of modern dating. Pop the balloon of small talk and endless swiping with authentic, fun connections.';
  const missionStatement = getContentById('about-mission') || 'Balloon\'d is built on the belief that anyone looking for love should be able to find it. We break through the noise of modern dating by helping people "pop the balloon" of small talk, uncertainty, and endless swiping, creating authentic, fun, and meaningful connections where people can quickly discover if sparks truly fly.';

  const QuoteIcon = () => (
    <svg viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
      <path d="M25 11.749C25.4348 6.96234 29.0217 3.91631 35 2.93723V0C24.4565 0.761503 18.6957 7.17991 18.6957 15.8828C18.6957 21.7573 21.7391 26 26.9565 26C31.3043 26 34.6739 23.0628 34.6739 18.6025C34.6739 14.6862 32.1739 12.4017 29.0217 11.749H25ZM6.19565 11.749C6.73913 6.96234 10.2174 3.91631 16.3043 2.93723V0C5.76087 0.761503 0 7.17991 0 15.8828C0 21.7573 3.04348 26 8.26087 26C12.5 26 15.9783 23.0628 15.9783 18.6025C15.9783 14.6862 13.4783 12.4017 10.3261 11.749H6.19565Z" fill="currentColor"/>
    </svg>
  );

  return (
    <>
      <NextSeo
        title="Balloon'd - Pop into Something Real"
        description={heroSubtitle}
        canonical="https://balloond.com/"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://balloond.com/',
          siteName: "Balloon'd",
          images: [
            {
              url: 'https://balloond.com/og-image.png',
              width: 1200,
              height: 630,
              alt: "Balloon'd Dating App",
            },
          ],
        }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-black to-orange-900/20"></div>
          
          {/* Lottie Animations */}
          <div className="absolute inset-0 pointer-events-none">
            {/* First balloon animation - top left area */}
            <div className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-48 md:h-48 opacity-70">
              <DotLottieReact
                src="https://lottie.host/ff0edf7f-b569-47c8-afad-4375cb158d77/UrB5B0VwbT.lottie"
                loop
                autoplay
              />
            </div>
            
            {/* Second balloon animation - bottom right area */}
            <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-40 h-40 md:w-56 md:h-56 opacity-60">
              <DotLottieReact
                src="https://lottie.host/fd4b8bf2-dc11-47f5-b041-5b20a4f13816/rKEAnri6dL.lottie"
                loop
                autoplay
              />
            </div>
            
            {/* Additional smaller balloon for mobile - center right */}
            <div className="hidden sm:block absolute top-1/3 right-1/4 w-24 h-24 md:w-32 md:h-32 opacity-40 animate-pulse">
              <DotLottieReact
                src="https://lottie.host/ff0edf7f-b569-47c8-afad-4375cb158d77/UrB5B0VwbT.lottie"
                loop
                autoplay
              />
            </div>
            
            {/* Additional balloon for desktop - top right */}
            <div className="hidden lg:block absolute top-1/4 right-1/3 w-20 h-20 opacity-50 animate-bounce">
              <DotLottieReact
                src="https://lottie.host/fd4b8bf2-dc11-47f5-b041-5b20a4f13816/rKEAnri6dL.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
                  <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    {heroHeadline}
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
                  {heroSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-white text-black hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-transparent hover:border-gray-200">
                    Download the app
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-black px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                <div className="relative">
                  <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-orange-100 px-4 py-2 rounded-full mb-8">
                    <span className="text-rose-600 font-medium text-sm">✨ OUR APPROACH</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
                    <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                      Pop the balloon
                    </span> of
                    <br />
                    awkward dating.
                  </h2>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-rose-200 to-orange-200 rounded-full opacity-60 animate-pulse"></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative z-10">
                    <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                      {missionStatement}
                    </p>
                    <button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full font-medium transition-all duration-300 group">
                      <span className="flex items-center gap-2">
                        How we do it
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Fun features grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-300 to-orange-300 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                        🎯
                      </div>
                      <h3 className="text-2xl font-semibold text-black">Make dating fun again</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Say goodbye to boring "hey" messages! Our balloon-pop icebreakers and playful challenges 
                      turn every conversation starter into an adventure. ✨
                    </p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-blue-300 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                        💬
                      </div>
                      <h3 className="text-2xl font-semibold text-black">Cut through the games</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      No more guessing games or mixed signals! Our tools encourage honest, direct conversations 
                      so you can focus on building real connections that matter. 🎪
                    </p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                        ✨
                      </div>
                      <h3 className="text-2xl font-semibold text-black">Prioritize authenticity</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Your personality shines brighter than your filtered photos! We celebrate genuine vibes, 
                      quirky interests, and real moments that make you uniquely you. 🌟
                    </p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-300 to-teal-300 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                        🛡️
                      </div>
                      <h3 className="text-2xl font-semibold text-black">Safe & inclusive space</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Everyone deserves to feel respected and valued! Our community prioritizes kindness, 
                      safety, and creating a welcoming environment for all love stories. 💖
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-light mb-8 text-black leading-tight">
                How <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">Balloon'd works</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
                Our unique approach helps you break the ice and form real connections quickly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl">🎈</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Pop challenges</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  Start conversations with fun, unique icebreakers that reveal 
                  personality beyond photos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl">🎤</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Voice first</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  Hear someone's voice before seeing photos to connect on a 
                  deeper level from the start.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Smart matching</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  Our algorithm prioritizes compatibility over superficial swiping 
                  for meaningful connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-900 text-white py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                Real stories, <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">real connections</span>
              </h2>
              <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed">
                Hear from people who found love through Balloon'd
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative" style={{height: '400px'}}>
                {/* Testimonial Content */}
                <div className="flex flex-col justify-center h-full">
                  <div className="text-center">
                    <div className="text-rose-400 mb-6 flex justify-center">
                      <QuoteIcon />
                    </div>
                    <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed opacity-90 max-w-4xl mx-auto transition-all duration-500">
                      {testimonials[currentTestimonial].quote}
                    </p>
                    <div className="flex items-center justify-center">
                      <div>
                        <div className="font-light text-white">{testimonials[currentTestimonial].author}</div>
                        <div className="text-gray-400 text-sm font-light">
                          {currentTestimonial === 0 ? 'Matched 6 months ago' : 'Matched 1 year ago'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress indicators */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center">
                  <div className="flex max-w-xs w-full">
                    {testimonials.map((_, index) => (
                      <button 
                        key={index}
                        className={`flex-1 px-2 py-4 cursor-pointer appearance-none bg-transparent border-0 text-white ${index > 0 ? 'ml-2' : ''}`}
                        role="tab"
                        aria-label={`Testimonial ${index + 1}`}
                        onClick={() => {
                          setCurrentTestimonial(index);
                          setProgress(0);
                        }}
                      >
                        <span className="relative block h-0.5 overflow-hidden rounded-full bg-gray-600">
                          <span 
                            className="absolute left-0 top-0 h-0.5 rounded bg-white transition-all duration-100"
                            style={{
                              width: index === currentTestimonial ? `${progress}%` : index < currentTestimonial ? '100%' : '0%'
                            }}
                          ></span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-black text-white py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                Ready to <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">pop the balloon?</span>
              </h2>
              <p className="text-xl md:text-2xl font-light mb-12 opacity-80 leading-relaxed">
                Join thousands of people finding meaningful connections every day.
              </p>
              <button className="bg-white text-black hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Download Balloon'd free
              </button>
              <div className="mt-8 text-gray-400 font-light">
                <p>Free to download. Free to sign up. Free to connect.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const siteContent = await prisma.siteContent.findMany({
      where: { published: true },
      select: {
        id: true,
        content: true,
      },
    });

    return {
      props: {
        siteContent,
      },
    };
  } catch (error) {
    console.error('Error fetching site content:', error);
    return {
      props: {
        siteContent: [],
      },
    };
  }
};

export default Home;
