import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Press: NextPage = () => {
  const pressReleases = [
    {
      date: 'December 15, 2024',
      title: 'Balloon\'d Reaches 1 Million Users Milestone',
      excerpt: 'Revolutionary dating app celebrates major growth driven by authentic connection features.',
      link: '#'
    },
    {
      date: 'November 28, 2024',
      title: 'Balloon\'d Launches Voice Pop Feature',
      excerpt: 'New audio-first matching system creates more meaningful first impressions.',
      link: '#'
    },
    {
      date: 'October 12, 2024',
      title: 'Series A Funding: $15M to Revolutionize Dating',
      excerpt: 'Leading VCs back Balloon\'d\'s mission to create authentic connections in digital dating.',
      link: '#'
    },
    {
      date: 'September 5, 2024',
      title: 'Balloon\'d Expands to European Markets',
      excerpt: 'Popular dating app launches in UK, France, and Germany after successful US rollout.',
      link: '#'
    }
  ];

  const mediaKit = [
    {
      title: 'Brand Guidelines',
      description: 'Official logos, colors, and brand usage guidelines',
      format: 'PDF',
      size: '2.5 MB'
    },
    {
      title: 'High-Resolution Logos',
      description: 'Logo variants in PNG, SVG, and EPS formats',
      format: 'ZIP',
      size: '8.1 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'Latest app interface and feature screenshots',
      format: 'ZIP',
      size: '12.3 MB'
    },
    {
      title: 'Executive Headshots',
      description: 'High-resolution photos of leadership team',
      format: 'ZIP',
      size: '15.7 MB'
    }
  ];

  const awards = [
    {
      year: '2024',
      award: 'Best Dating App Innovation',
      organization: 'TechCrunch Disrupt'
    },
    {
      year: '2024',
      award: 'People\'s Choice Award',
      organization: 'Product Hunt'
    },
    {
      year: '2024',
      award: 'Best Mobile App Design',
      organization: 'Design Awards'
    },
    {
      year: '2024',
      award: 'Rising Star Startup',
      organization: 'UK Tech Awards'
    }
  ];

  return (
    <>
      <NextSeo
        title="Press - Balloon'd"
        description="Latest news, press releases, and media resources for Balloon'd dating app."
        canonical="https://balloond.com/press"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-stone-900 mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Get the latest news, press releases, and media resources about Balloon'd. 
              We're revolutionizing how people connect through authentic, playful dating.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Download Media Kit
              </button>
              <button className="border border-stone-300 hover:border-stone-400 text-stone-700 px-6 py-3 rounded-full font-medium transition-colors">
                Contact Press Team
              </button>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Latest Press Releases</h2>
            
            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <article key={index} className="border-b border-stone-200 pb-8 last:border-b-0">
                  <time className="text-sm text-stone-500 block mb-2">{release.date}</time>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3 hover:text-rose-600 transition-colors">
                    <a href={release.link}>{release.title}</a>
                  </h3>
                  <p className="text-stone-600 mb-4">{release.excerpt}</p>
                  <a 
                    href={release.link} 
                    className="text-rose-600 hover:text-rose-700 font-medium inline-flex items-center"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Media Kit</h2>
              <p className="text-lg text-stone-600">
                Download our official media assets, brand guidelines, and press materials.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                      <p className="text-stone-600 mb-3">{item.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-stone-500">
                        <span>{item.format}</span>
                        <span>•</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Awards & Recognition</h2>
              <p className="text-lg text-stone-600">
                We're honored to be recognized by leading industry organizations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center p-6 border border-stone-200 rounded-lg">
                  <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-rose-600 font-semibold">{award.year}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">{award.award}</h3>
                    <p className="text-stone-600">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Press Contact</h2>
                <p className="text-lg text-stone-600">
                  For media inquiries, interviews, or additional information.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">Media Relations</h3>
                  <p className="text-stone-600 mb-4">
                    For general press inquiries and media relations.
                  </p>
                  <div className="space-y-2">
                    <a href="mailto:press@balloond.com" className="text-rose-600 hover:text-rose-700 block">
                      press@balloond.com
                    </a>
                    <p className="text-stone-500 text-sm">Response within 24 hours</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">Executive Interviews</h3>
                  <p className="text-stone-600 mb-4">
                    For CEO and leadership team interview requests.
                  </p>
                  <div className="space-y-2">
                    <a href="mailto:executive@balloond.com" className="text-rose-600 hover:text-rose-700 block">
                      executive@balloond.com
                    </a>
                    <p className="text-stone-500 text-sm">Response within 48 hours</p>
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

export default Press;
