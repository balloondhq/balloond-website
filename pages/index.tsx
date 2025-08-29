import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Balloon'd - Pop into Something Real"
        description="A playful way to meet real matches. Voice pops, video intros, and smart matching for genuine connections."
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
        twitter={{
          handle: '@balloond',
          site: '@balloond',
          cardType: 'summary_large_image',
        }}
      />
      
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-stone-900">
                Pop into <span className="text-rose-500">Something Real</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto">
                A playful way to meet real matches. Voice pops, video intros, and smart matching for genuine connections.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
                  Download the App
                </button>
                <button className="border-2 border-stone-300 hover:border-stone-400 text-stone-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                  How It Works
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">1M+</div>
                  <div className="text-stone-600">Matches Made</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">4.9</div>
                  <div className="text-stone-600">App Store Rating</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">86%</div>
                  <div className="text-stone-600">Real Conversations</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">24</div>
                  <div className="text-stone-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-stone-900">How Balloon'd Works</h2>
              <p className="text-xl text-stone-600">
                We're designed to be deleted. Meet someone special and delete the app because you no longer need it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎤</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Voice Pops</h3>
                <p className="text-stone-600">
                  Hear someone's voice before seeing their photos. Personality comes first.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📹</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Video Intros</h3>
                <p className="text-stone-600">
                  Short videos that show who you really are. No filters, just authenticity.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Smart Matching</h3>
                <p className="text-stone-600">
                  Our algorithm prioritizes compatibility over superficial swiping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6 text-stone-900">
                  Designed to <span className="text-rose-500">Delete</span>
                </h2>
                <p className="text-lg text-stone-600 mb-6">
                  Unlike other dating apps that want you to stay forever, we're built with one goal in mind: 
                  helping you find someone special so you can delete the app.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-3 mt-1">✓</span>
                    <span className="text-stone-700">No endless swiping - just meaningful connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-3 mt-1">✓</span>
                    <span className="text-stone-700">Voice-first approach reduces superficial judgments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-3 mt-1">✓</span>
                    <span className="text-stone-700">Video intros showcase your authentic self</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-3 mt-1">✓</span>
                    <span className="text-stone-700">Smart matching based on compatibility, not looks</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-rose-400 to-orange-400 rounded-3xl rotate-6"></div>
                  <div className="absolute top-0 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-rose-500 to-orange-500 rounded-3xl -rotate-6 shadow-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">🎈</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-stone-900">Real Stories, Real Connections</h2>
              <p className="text-xl text-stone-600">
                Hear from people who found love through Balloon'd
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-rose-500 text-4xl mb-4">❝</div>
                <p className="text-stone-700 text-lg mb-6">
                  I matched with Sarah through her voice pop and we've been inseparable for 8 months! 
                  The voice-first approach really helped us connect on a deeper level from the start.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-stone-300 mr-4"></div>
                  <div>
                    <div className="font-bold text-stone-900">Michael T.</div>
                    <div className="text-stone-600">Matched 8 months ago</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-rose-500 text-4xl mb-4">❝</div>
                <p className="text-stone-700 text-lg mb-6">
                  After years of disappointing dating app experiences, Balloon'd helped me find 
                  someone who truly gets me. We connected over our shared love of hiking and travel.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-stone-300 mr-4"></div>
                  <div>
                    <div className="font-bold text-stone-900">Jessica L.</div>
                    <div className="text-stone-600">Matched 1 year ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Pop into Something Real?
              </h2>
              <p className="text-xl text-rose-100 mb-10">
                Join thousands of people finding meaningful connections every day.
              </p>
              <button className="bg-white text-rose-600 hover:bg-stone-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
                Download Balloon'd Free
              </button>
              <div className="mt-6 text-rose-100">
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

export default Home;