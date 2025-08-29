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
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-stone-900">
                Pop the <span className="text-rose-500">Balloon</span> of Awkward Dating
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto">
                Break through small talk and endless swiping. Make real connections with fun, authentic dating.
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
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">500K+</div>
                  <div className="text-stone-600">Connections Made</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">4.9</div>
                  <div className="text-stone-600">App Store Rating</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">78%</div>
                  <div className="text-stone-600">Real Conversations</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">18</div>
                  <div className="text-stone-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-stone-900">Our Mission</h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto">
                Balloon'd's mission is to break through the noise of modern dating by helping people "pop the balloon" of small talk, uncertainty, and endless swiping. We create authentic, fun, and meaningful connections where people can quickly discover if sparks truly fly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Make Dating Fun Again</h3>
                <p className="text-stone-600">
                  Turn the awkwardness of dating into an exciting, light-hearted experience with our unique icebreakers and challenges.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Cut Through the Games</h3>
                <p className="text-stone-600">
                  Our tools encourage direct, transparent, and genuine interactions so you can focus on real connections.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Prioritise Authenticity</h3>
                <p className="text-stone-600">
                  We focus on profile quality, vibe, and personality rather than endless swipes to help you find genuine matches.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Safe & Inclusive Space</h3>
                <p className="text-stone-600">
                  We ensure users feel comfortable, respected, and supported in exploring connections with our safety-first approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-stone-900">How Balloon'd Works</h2>
              <p className="text-xl text-stone-600">
                Our unique approach helps you break the ice and form real connections quickly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎈</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Pop Challenges</h3>
                <p className="text-stone-600">
                  Start conversations with fun, unique icebreakers that reveal personality beyond photos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎤</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Voice First</h3>
                <p className="text-stone-600">
                  Hear someone's voice before seeing photos to connect on a deeper level from the start.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Smart Matching</h3>
                <p className="text-stone-600">
                  Our algorithm prioritizes compatibility over superficial swiping for meaningful connections.
                </p>
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
                  The pop challenges were so fun! They immediately broke the ice and helped me connect with Sarah on a deeper level. We matched 6 months ago and just moved in together.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-stone-300 mr-4"></div>
                  <div>
                    <div className="font-bold text-stone-900">Michael T.</div>
                    <div className="text-stone-600">Matched 6 months ago</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-rose-500 text-4xl mb-4">❝</div>
                <p className="text-stone-700 text-lg mb-6">
                  After years of disappointing dating app experiences, Balloon'd helped me find someone who truly gets me. The voice-first approach really made a difference in forming a real connection.
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
                Ready to Pop the Balloon?
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