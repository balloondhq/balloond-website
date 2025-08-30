// pages/careers.tsx
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePublicContent } from '../lib/use-content';

const Careers: NextPage = () => {
  const { jobPositions, siteContent, getContentById, loading } = usePublicContent();
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);

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

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
            <p className="text-stone-600">Loading careers page...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const careersIntro = getContentById('careers-intro') || 'Help us create a world where authentic connections flourish. We\'re building the future of dating, one meaningful match at a time.';

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
              {careersIntro}
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
              {jobPositions.length === 0 && (
                <div className="mt-8">
                  <div className="text-4xl mb-4">💼</div>
                  <p className="text-stone-600">
                    No open positions at the moment. Check back soon or send us your resume!
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              {jobPositions.map((position) => (
                <div key={position.id} className="border border-stone-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedPosition(expandedPosition === position.id ? null : position.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-stone-900">{position.title}</h3>
                          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                            {position.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-stone-600 mb-2">
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                          <span>•</span>
                          <span>{position.type}</span>
                        </div>
                        <p className="text-stone-600">{position.description}</p>
                      </div>
                      <div className="flex items-center space-x-4 ml-4">
                        <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap">
                          Apply Now
                        </button>
                        <button className="text-stone-400 hover:text-stone-600">
                          <svg 
                            className={`w-6 h-6 transition-transform ${expandedPosition === position.id ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {expandedPosition === position.id && (
                    <div className="px-6 pb-6 border-t border-stone-100">
                      <div className="pt-6 space-y-6">
                        {position.requirements && position.requirements.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-stone-900 mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {position.requirements.map((requirement, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <span className="text-rose-500 mt-1.5">•</span>
                                  <span className="text-stone-600">{requirement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {position.responsibilities && position.responsibilities.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-stone-900 mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {position.responsibilities.map((responsibility, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <span className="text-rose-500 mt-1.5">•</span>
                                  <span className="text-stone-600">{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                          <span className="text-sm text-stone-500">Posted on {position.datePosted}</span>
                          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                            Apply for this position
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {jobPositions.length > 0 && (
              <div className="text-center mt-12">
                <p className="text-stone-600 mb-4">
                  Don't see a perfect fit? We're always interested in hearing from talented people.
                </p>
                <button className="text-rose-600 hover:text-rose-700 font-medium">
                  Send us your resume →
                </button>
              </div>
            )}
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
              {jobPositions.length > 0 ? 'View All Positions' : 'Get in Touch'}
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Careers;
