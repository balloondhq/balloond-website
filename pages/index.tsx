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
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-black to-orange-900/20"></div>
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
                  Pop the balloon of
                  <br />
                  <span className="font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                    awkward dating
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
                  The dating app that breaks through small talk and endless swiping 
                  with authentic connections and meaningful conversations.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-semibold transition-all duration-300 border border-transparent hover:border-gray-200">
                    Download the app
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-black px-12 py-4 text-lg font-semibold transition-all duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-4 text-black">500K+</div>
                  <div className="text-gray-600 font-light">Real connections made</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-4 text-black">4.9</div>
                  <div className="text-gray-600 font-light">App Store rating</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-4 text-black">78%</div>
                  <div className="text-gray-600 font-light">Skip the small talk</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-4 text-black">18</div>
                  <div className="text-gray-600 font-light">Countries and growing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-50 py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-light mb-8 text-black leading-tight">
                Our mission
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
                Break through the noise of modern dating by helping people "pop the balloon" 
                of small talk, uncertainty, and endless swiping. We create authentic, fun, 
                and meaningful connections where people can quickly discover if sparks truly fly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Make dating fun again</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  Turn the awkwardness of dating into an exciting, light-hearted experience 
                  with our unique icebreakers and challenges.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Cut through the games</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  Our tools encourage direct, transparent, and genuine interactions 
                  so you can focus on real connections.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Prioritize authenticity</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  We focus on profile quality, vibe, and personality rather than 
                  endless swipes to help you find genuine matches.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-black">Safe & inclusive space</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  We ensure users feel comfortable, respected, and supported in 
                  exploring connections with our safety-first approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-light mb-8 text-black leading-tight">
                How Balloon'd works
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
                Real stories, real connections
              </h2>
              <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed">
                Hear from people who found love through Balloon'd
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-gray-800 p-10 rounded-lg">
                <div className="text-rose-400 text-4xl mb-6">❝</div>
                <p className="text-lg font-light mb-8 leading-relaxed opacity-90">
                  The pop challenges were so fun! They immediately broke the ice and helped me 
                  connect with Sarah on a deeper level. We matched 6 months ago and just moved in together.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <div className="font-light text-white">Michael T.</div>
                    <div className="text-gray-400 text-sm font-light">Matched 6 months ago</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-10 rounded-lg">
                <div className="text-rose-400 text-4xl mb-6">❝</div>
                <p className="text-lg font-light mb-8 leading-relaxed opacity-90">
                  After years of disappointing dating app experiences, Balloon'd helped me find someone 
                  who truly gets me. The voice-first approach really made a difference in forming a real connection.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <div className="font-light text-white">Jessica L.</div>
                    <div className="text-gray-400 text-sm font-light">Matched 1 year ago</div>
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
                Ready to pop the balloon?
              </h2>
              <p className="text-xl md:text-2xl font-light mb-12 opacity-80 leading-relaxed">
                Join thousands of people finding meaningful connections every day.
              </p>
              <button className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-semibold transition-all duration-300">
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

export default Home;