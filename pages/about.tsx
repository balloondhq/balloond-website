import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About Us - Balloon'd | Dating Designed to be Deleted"
        description="Learn about Balloon'd's mission to create authentic connections through voice pops, video intros, and meaningful matching."
        canonical="https://balloond.com/about"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://balloond.com/about',
          siteName: "Balloon'd",
          images: [
            {
              url: 'https://balloond.com/og-image.png',
              width: 1200,
              height: 630,
              alt: "About Balloon'd",
            },
          ],
        }}
      />
      
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Story Section */}
        <section className="relative pt-32 pb-48 mt-28">
          {/* Background image placeholder */}
          <div className="absolute inset-0 h-full overflow-hidden pointer-events-none">
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-rose-200 to-orange-200 rounded-r-lg overflow-hidden">
              {/* Placeholder for Dishaun's photo */}
              <div className="relative w-full h-full bg-gradient-to-br from-rose-300 to-orange-300 flex items-center justify-center">
                <div className="text-8xl opacity-50">👤</div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-8">
            <div className="flex justify-end">
              <div className="w-1/2">
                <p className="text-rose-600 font-medium text-lg mb-7 tracking-wide">
                  About us
                </p>
                
                <h1 className="text-6xl font-light leading-tight mb-7 text-black">
                  Dishaun's Story
                </h1>
                
                <p className="text-xl font-light leading-relaxed mb-7 text-gray-800">
                  I've always felt like the dating world was stuck on repeat. Endless swipes, small talk that goes nowhere, people asking the same "what do you do?" questions over and over—it all felt like surface-level chatter rather than a real connection.
                </p>
                
                <p className="text-xl font-light leading-relaxed mb-7 text-gray-800">
                  At the same time, I noticed how much people loved the new "pop the balloon" trend. There's something exciting about the anticipation, the release, and the fun of it. That gave me an idea: what if dating could feel less like an interview and more like popping a balloon—breaking the tension, cutting through the awkwardness, and sparking something real?
                </p>
                
                <blockquote className="text-3xl font-light leading-relaxed py-8 my-7 text-black">
                  That's why I created <span className="relative inline-block">
                    <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                      Balloon'd
                    </span>
                    <svg 
                      className="absolute -bottom-2 left-0 w-full h-6 text-rose-400 opacity-60" 
                      viewBox="0 0 243 80" 
                      fill="none" 
                      preserveAspectRatio="none"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        d="M48.5 17.5C87.5 -2.5 239 -4 239 40.5C239 87 13.4999 87.5 5.00001 43.5C2.87503 32.5 23.8594 18.1699 39.3594 14.6699"
                        className="animate-pulse"
                      />
                    </svg>
                  </span>. It's not about gamification, it's about creating a fresh, fun, and meaningful way to connect.
                </blockquote>
                
                <p className="text-xl font-light leading-relaxed mb-7 text-gray-800">
                  I designed Balloon'd to break through repetitive patterns in dating and give people a space where conversations flow naturally, personalities shine, and genuine sparks can fly.
                </p>
                
                <p className="text-xl font-light leading-relaxed mb-7 text-gray-800">
                  Every feature we build is guided by one simple question: <span className="text-rose-600 font-medium">Does this help people pop the awkwardness and get closer to something real?</span>
                </p>
                
                <p className="text-xl font-light leading-relaxed mb-16 text-gray-800">
                  With Balloon'd, you're always just <em>one pop away</em> from your next great connection.
                </p>
                
                {/* Signature area */}
                <div className="flex flex-col items-end pt-16">
                  <div className="w-60 mb-6">
                    {/* Signature placeholder - you can replace with actual signature image */}
                    <div className="text-rose-600 text-4xl font-light italic">
                      Dishaun
                    </div>
                  </div>
                  <cite className="font-medium text-base leading-4 tracking-wider not-italic">
                    Dishaun Thompson
                    <span className="text-rose-600 ml-2">CEO & Founder</span>
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-light mb-6 text-black leading-tight">
                  Our <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  We're building a dating app designed to be deleted—because success means you found your person.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎈</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-black">Break the Ice</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Pop the balloon of awkward small talk with conversation starters that reveal who you really are.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">💫</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-black">Spark Connection</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Move beyond endless swiping to meaningful conversations that help you discover real compatibility.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-black">Find Love</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Our success is measured by how quickly you delete the app because you found your person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-rose-500 to-orange-500 rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-light mb-12 text-center">Making Real Connections</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-2xl mb-2">🎈</div>
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-white/80 text-sm">Balloons Popped</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">💕</div>
                    <div className="text-3xl font-bold mb-2">5K+</div>
                    <div className="text-white/80 text-sm">Real Connections</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="text-3xl font-bold mb-2">2024</div>
                    <div className="text-white/80 text-sm">Founded</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">⭐</div>
                    <div className="text-3xl font-bold mb-2">4.8/5</div>
                    <div className="text-white/80 text-sm">App Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Ready to <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">pop into love?</span>
              </h2>
              <p className="text-xl font-light mb-8 opacity-80 leading-relaxed">
                Join the dating revolution and discover what's waiting just one pop away.
              </p>
              <button className="bg-white text-black hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Download Balloon'd
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;