// pages/careers.tsx
import type { NextPage, GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { prisma } from '../lib/prisma';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  datePosted: string;
}

interface CareersProps {
  careers: JobPosition[];
}

const Careers: NextPage<CareersProps> = ({ careers }) => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <>
      <NextSeo
        title="Careers - Balloon'd"
        description="Join the team at Balloon'd and help us build the future of authentic connections. Explore our open positions."
        canonical="https://balloond.com/careers"
      />

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-stone-900 mb-6">
              Work With Us
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Join our passionate team and help people build meaningful connections.
              We're looking for talented individuals who want to make a difference.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Mission-Driven</h3>
                <p className="text-stone-600 text-sm">Help build authentic connections in the digital age</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Fast-Growing</h3>
                <p className="text-stone-600 text-sm">Join a rapidly expanding team with huge potential</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">💝</div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">People-First</h3>
                <p className="text-stone-600 text-sm">We prioritize our team's growth and well-being</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-stone-900 mb-12">
              Open Positions
            </h2>
            {careers.length > 0 ? (
              <div className="space-y-6">
                {careers.map((job) => (
                  <div key={job.id} className="bg-stone-50 border border-stone-200 rounded-lg overflow-hidden">
                    {/* Job Header */}
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-stone-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-stone-600 mb-4 sm:mb-2">
                            <span className="inline-flex items-center">
                              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {job.department}
                            </span>
                            <span className="inline-flex items-center">
                              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="inline-flex items-center">
                              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {job.type}
                            </span>
                            <span className="text-stone-500 text-sm">
                              Posted {new Date(job.datePosted).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-stone-600 mb-4">{job.description}</p>
                        </div>
                        <div className="flex items-center space-x-3 mt-4 sm:mt-0 sm:ml-6">
                          <button
                            onClick={() => toggleJobExpansion(job.id)}
                            className="inline-flex items-center px-4 py-2 text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
                          >
                            <span className="mr-2">{expandedJob === job.id ? 'Less Details' : 'View Details'}</span>
                            <svg
                              className={`w-4 h-4 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Job Details */}
                    {expandedJob === job.id && (
                      <div className="border-t border-stone-300 bg-white">
                        <div className="p-6">
                          <div className="grid md:grid-cols-2 gap-8">
                            {/* Requirements */}
                            {job.requirements && job.requirements.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-stone-900 mb-4 flex items-center">
                                  <svg className="w-5 h-5 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  What We're Looking For
                                </h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start">
                                      <span className="inline-block w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      <span className="text-stone-600">{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Responsibilities */}
                            {job.responsibilities && job.responsibilities.length > 0 && (
                              <div>
                                <h4 className="text-lg font-semibold text-stone-900 mb-4 flex items-center">
                                  <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.294a6.999 6.999 0 010 1.412v6.294a2 2 0 01-2 2H8a2 2 0 01-2-2v-6.294a6.999 6.999 0 010-1.412V8a2 2 0 012-2z" />
                                  </svg>
                                  You'll Be Responsible For
                                </h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start">
                                      <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      <span className="text-stone-600">{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Apply Section */}
                          <div className="mt-8 pt-6 border-t border-stone-200">
                            <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg p-6">
                              <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div>
                                  <h4 className="text-lg font-semibold text-stone-900 mb-2">Ready to Join Our Team?</h4>
                                  <p className="text-stone-600 text-sm">We'd love to hear from you and learn about your passion for building connections.</p>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-6">
                                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Apply for This Role
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎈</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">No Open Positions</h3>
                <p className="text-stone-600 mb-6">
                  We're not currently hiring, but check back soon! We're always looking for talented people.
                </p>
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Join Our Talent Network
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-gradient-to-br from-rose-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Life at Balloon'd</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                We believe great products come from great teams. Here's what makes working at Balloon'd special.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Remote-First</h3>
                <p className="text-stone-600 text-sm">Work from anywhere with flexible hours and async collaboration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Growth Focus</h3>
                <p className="text-stone-600 text-sm">Professional development budget and mentorship programs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Work-Life Balance</h3>
                <p className="text-stone-600 text-sm">Unlimited PTO and mental health support resources</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Innovation</h3>
                <p className="text-stone-600 text-sm">20% time for passion projects and creative experimentation</p>
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
    const careers = await prisma.career.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        department: true,
        location: true,
        type: true,
        description: true,
        requirements: true,
        responsibilities: true,
        datePosted: true,
      },
      orderBy: { datePosted: 'desc' },
    });

    return {
      props: {
        careers: careers.map(career => ({
          ...career,
          datePosted: career.datePosted.toISOString(),
        })),
      },
    };
  } catch (error) {
    console.error('Error fetching careers:', error);
    return {
      props: {
        careers: [],
      },
    };
  }
};

export default Careers;
