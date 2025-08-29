import type { NextPage } from 'next';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

const About: NextPage = () => {
  return (
    <>
      <Meta 
        title="About Us - Balloon'd | Dating Designed to be Deleted"
        description="Learn about Balloon'd's mission to create authentic connections through voice pops, video intros, and meaningful matching."
      />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cream to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">About Balloon'd</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're on a mission to bring authenticity back to online dating. 
                Founded in 2024, Balloon'd is designed to help you form genuine 
                connections that go beyond surface-level attraction.
              </p>
              
              <div className="text-6xl mb-8">🎈</div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="gradient-text">Our Mission</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  In a world of endless swiping and superficial connections, we believe 
                  there's a better way. Balloon'd was created to foster authentic 
                  relationships through voice, personality, and genuine compatibility.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Every feature we build is designed with one goal in mind: helping you 
                  find someone special and then deleting the app because you no longer need it.
                </p>
                
                <div className="bg-ruby/5 p-6 rounded-2xl">
                  <h3 className="font-bold text-ruby mb-3">"Dating Designed to be Deleted"</h3>
                  <p className="text-gray-600">
                    We measure our success not by how long you stay on our app, 
                    but by how quickly you find your person and move on to your 
                    happily ever after.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-ruby to-ruby-dark rounded-3xl p-8 text-white shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">💕</div>
                      <div className="text-2xl font-bold">500K+</div>
                      <div className="text-white/80 text-sm">Connections Made</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🚀</div>
                      <div className="text-2xl font-bold">2024</div>
                      <div className="text-white/80 text-sm">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🌍</div>
                      <div className="text-2xl font-bold">40+</div>
                      <div className="text-white/80 text-sm">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">⭐</div>
                      <div className="text-2xl font-bold">4.9/5</div>
                      <div className="text-white/80 text-sm">App Store Rating</div>
                    </div>
                  </div>
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

export default About;