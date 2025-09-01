import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SitemapPage = () => {
  const siteStructure = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Download App', href: '#download' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'Help Center', href: '/help-center' },
      { name: 'Safety Tips', href: '/safety-tips' },
      { name: 'Community Guidelines', href: '/community-guidelines' },
      { name: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'License', href: '/license' },
    ],
    other: [
      { name: 'Accessibility', href: '/accessibility' },
      { name: '404 Page', href: '/404' },
    ]
  };

  return (
    <>
      <Head>
        <title>Sitemap - Balloon'd</title>
        <meta name="description" content="Browse all pages and sections of the Balloon'd website." />
      </Head>
      
      <Header />
      
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sitemap</h1>
          <p className="text-lg text-gray-600 mb-12">
            Find your way around Balloon'd. All our pages are listed below for easy navigation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {/* Main Pages */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Main</h2>
              <ul className="space-y-2">
                {siteStructure.main.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-ruby hover:text-ruby-dark transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Company Pages */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Company</h2>
              <ul className="space-y-2">
                {siteStructure.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-ruby hover:text-ruby-dark transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Support Pages */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Support</h2>
              <ul className="space-y-2">
                {siteStructure.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-ruby hover:text-ruby-dark transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Legal Pages */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Legal</h2>
              <ul className="space-y-2">
                {siteStructure.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-ruby hover:text-ruby-dark transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Other Pages */}
            <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Other</h2>
              <ul className="space-y-2">
                {siteStructure.other.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-ruby hover:text-ruby-dark transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* SEO Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> This is the HTML sitemap for users. For search engines, we also provide an XML sitemap at 
              <Link href="/sitemap.xml">
                <a className="text-ruby hover:text-ruby-dark ml-1">/sitemap.xml</a>
              </Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SitemapPage;
