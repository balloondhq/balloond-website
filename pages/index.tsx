// pages/index.tsx
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Balloon'd - Pop into Something Real"
        description="Break through the noise of modern dating. Pop the balloon of small talk and endless swiping with authentic, fun connections."
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
      
      <main className="overflow-hidden">
        {/* Hero Section - Enhanced with more dynamic design */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-rose-50 via-white to-orange-50">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-orange-200/40 rounded-full blur-lg"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-200/50 rounded-full blur-md"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-200 mb-8">
                <span className="text-rose-500 font-medium">🎈 Ready to pop the awkward dating bubble?</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-stone-900 leading-tight">
                Pop the <span className="relative">
                  <span className="text-rose-500">Balloon</span>
                  <div className="absolute -inset-2 bg-rose-100 rounded-lg -z-10 rotate-1"></div>
                </span>
                <br />of Awkward Dating
              </h1>
              
              <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Break through small talk and endless swiping. Spark <em>real connections</em> with fun challenges that reveal who you truly are.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <button className="group bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-3">
                    Download Free
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
                <button className="border-2 border-stone-300 hover:border-rose-400 hover:bg-rose-50 text-stone-700 hover:text-rose-600 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300">
                  See How It Works
                </button>
              </div>
              
              <div className="text-stone-500 text-sm">
                Free to download • Free to connect • Available on iOS & Android
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section - More dynamic stats */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-stone-600 font-medium">Trusted by people ready for real connections</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group cursor-pointer">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    500K+
                  </div>
                  <div className="text-stone-600 font-medium">Real Conversations Started</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    4.9⭐
                  </div>
                  <div className="text-stone-600 font-medium">App Store Rating</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    78%
                  </div>
                  <div className="text-stone-600 font-medium">Skip Small Talk</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    18+
                  </div>
                  <div className="text-stone-600 font-medium">Countries & Growing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - More engaging with better visual hierarchy */}
        <section className="py-24 bg-gradient-to-b from-stone-50 to-rose-50/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-flex items-center bg-rose-100 px-4 py-2 rounded-full mb-6">
                <span className="text-rose-600 font-semibold text-sm">🎯 OUR MISSION</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-stone-900 leading-tight">
                Pop the awkward balloon,<br />
                <span className="text-rose-500">spark real connections</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                We're breaking through the noise of modern dating by helping people "pop the balloon" of small talk, uncertainty, and endless swiping. Create authentic, fun, and meaningful connections where you can quickly discover if sparks truly fly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-rose-200">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-stone-900">Make Dating Fun Again</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Turn the awkwardness of dating into an exciting, light-hearted experience with our unique balloon-popping challenges and authentic icebreakers.
                </p>
              </div>
              
              <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-rose-200">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-stone-900">Cut Through the Games</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Our tools encourage direct, transparent, and genuine interactions so you can focus on real connections without the dating app drama.
                </p>
              </div>
              
              <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-rose-200">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-stone-900">Prioritize Authenticity</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  We focus on profile quality, vibe, and personality rather than endless swipes to help you find genuine matches that matter.
                </p>
              </div>
              
              <div className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-rose-200">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-stone-900">Safe & Inclusive Space</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  We ensure users feel comfortable, respected, and supported in exploring connections with our safety-first, community-focused approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Enhanced with better storytelling */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-flex items-center bg-orange-100 px-4 py-2 rounded-full mb-6">
                <span className="text-orange-600 font-semibold text-sm">HOW IT WORKS</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-stone-900 leading-tight">
                Three steps to <span className="text-rose-500">meaningful connections</span>
              </h2>
              
              <p className="text-xl text-stone-600 leading-relaxed">
                Our unique approach helps you break the ice and form real connections quickly—no more small talk, no more ghosting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-4xl">🎈</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-stone-900">Pop Challenges</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Start conversations with fun, unique balloon-popping icebreakers that reveal personality and chemistry beyond photos and bios.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-4xl">🎤</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-stone-900">Voice First</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Hear someone's voice before seeing photos to connect on a deeper level from the start—because chemistry is more than looks.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-4xl">❤️</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-stone-900">Smart Matching</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Our algorithm prioritizes compatibility and authentic connection over superficial swiping for truly meaningful matches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Enhanced design */}
        <section className="py-24 bg-gradient-to-br from-rose-50 to-orange-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-flex items-center bg-rose-100 px-4 py-2 rounded-full mb-6">
                <span className="text-rose-600 font-semibold text-sm">SUCCESS STORIES</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-stone-900 leading-tight">
                Real Stories, <span className="text-rose-500">Real Connections</span>
              </h2>
              
              <p className="text-xl text-stone-600 leading-relaxed">
                Hear from people who popped through to love with Balloon'd
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-stone-100 relative">
                <div className="absolute -top-4 left-10">
                  <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">❝</span>
                  </div>
                </div>
                
                <p className="text-stone-700 text-lg mb-8 leading-relaxed pt-4">
                  "The pop challenges were so fun! They immediately broke the ice and helped me connect with Sarah on a deeper level. We matched 6 months ago and just moved in together. 🏠"
                </p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MT</span>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-lg">Michael T.</div>
                    <div className="text-stone-500">Found love 6 months ago</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-10 rounded-3xl shadow-lg border border-stone-100 relative">
                <div className="absolute -top-4 left-10">
                  <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">❝</span>
                  </div>
                </div>
                
                <p className="text-stone-700 text-lg mb-8 leading-relaxed pt-4">
                  "After years of disappointing dating app experiences, Balloon'd helped me find someone who truly gets me. The voice-first approach made all the difference in forming a real connection. ✨"
                </p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-teal-400 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JL</span>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-lg">Jessica L.</div>
                    <div className="text-stone-500">Together for 1+ year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - More dynamic and engaging */}
        <section className="py-24 bg-gradient-to-r from-rose-500 via-orange-500 to-rose-600 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Ready to Pop the Balloon?
              </h2>
              
              <p className="text-xl md:text-2xl text-rose-100 mb-12 leading-relaxed">
                Join thousands of people finding meaningful connections every day.<br />
                <strong>No games. No ghosting. Just real connections.</strong>
              </p>
              
              <button className="group bg-white text-rose-600 hover:bg-stone-50 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 mb-8">
                <span className="flex items-center justify-center gap-3">
                  Download Balloon'd Free
                  <span className="group-hover:translate-x-2 transition-transform">🎈</span>
                </span>
              </button>
              
              <div className="grid md:grid-cols-3 gap-4 text-rose-100 text-sm max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span> Free to download
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span> Free to connect
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span> iOS & Android
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Home;