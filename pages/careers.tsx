import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Careers: NextPage = () => {
  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / London',
      type: 'Full-time',
      description: 'Help us build the future of dating with cutting-edge technology.'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'London / Remote',
      type: 'Full-time',
      description: 'Create beautiful, intuitive experiences for our users.'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'London',
      type: 'Full-time',
      description: 'Drive user acquisition and brand awareness globally.'
    },
    {
      title: 'Data Scientist',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Use AI and ML to improve our matching algorithms.'
    }
  ];

  const benefits = [
    'Competitive salary and equity package',
    'Flexible working arrangements',
    'Health, dental, and vision insurance',
    'Professional development budget',
    'Mental health support',
    'Team retreats and events',
    'Latest tech equipment',
    'Unlimited PTO policy'
  ];

  return (
    <>
      <NextSeo
        title="Careers - Balloon'd"
        description="Join our team and help create meaningful connections. Explore open positions at Balloon'd."
        canonical="https://balloond.com/careers"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-stone-900 mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Help us create a world where authentic connections flourish. We're building the future of dating, one meaningful match at a time.
            </p>
            <div className="inline-flex items-center space-x-2 text-rose-600 font-medium">
              <span>🎈</span>
              <span>Now hiring across all teams</span>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Why Work With Us?</h2>
              <p className="text-lg text-stone-600">
                We're more than just a dating app – we're a movement toward authentic human connection.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">Impact</h3>
                <p className="text-stone-600">
                  Your work directly helps people find love and build meaningful relationships.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">Growth</h3>
                <p className="text-stone-600">
                  Join a fast-growing startup where your contributions shape our future.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">Culture</h3>
                <p className="text-stone-600">
                  Work with passionate, creative people who believe in our mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Benefits & Perks</h2>
              <p className="text-lg text-stone-600">
                We take care of our team so they can focus on what they do best.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-rose-500 w-2 h-2 rounded-full flex-shrink-0"></div>
                  <span className="text-stone-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Open Positions</h2>
              <p className="text-lg text-stone-600">
                Ready to make an impact? Check out our current openings.
              </p>
            </div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-stone-900 mb-2">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-stone-600 mb-2">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                      <p className="text-stone-600">{position.description}</p>
                    </div>
                    <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ml-4">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-stone-600 mb-4">
                Don't see a perfect fit? We're always interested in hearing from talented people.
              </p>
              <button className="text-rose-600 hover:text-rose-700 font-medium">
                Send us your resume →
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Let's build something amazing together.
            </p>
            <button className="bg-white text-rose-600 hover:bg-stone-50 px-8 py-3 rounded-full font-semibold transition-colors">
              View All Positions
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Careers;
