import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AccessibilityPage = () => {
  return (
    <>
      <Head>
        <title>Accessibility - Balloon'd</title>
        <meta name="description" content="Learn about Balloon'd's commitment to digital accessibility and inclusive design." />
      </Head>
      
      <Header />
      
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Accessibility</h1>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-6">
                At Balloon'd, we believe love is for everyone. We're committed to making our platform accessible to all users, 
                regardless of ability. We continuously work to improve the accessibility and usability of our app for everyone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Standards</h2>
              <p className="text-gray-700 mb-6">
                We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our team regularly 
                reviews and updates our platform to ensure compliance with these guidelines.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Current Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Screen reader compatibility for iOS and Android</li>
                <li>High contrast mode options</li>
                <li>Adjustable text sizes</li>
                <li>Clear navigation structure</li>
                <li>Alternative text for all images</li>
                <li>Keyboard navigation support</li>
                <li>Captions for video content</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mobile App Accessibility</h2>
              <p className="text-gray-700 mb-6">
                Our mobile apps are designed with accessibility in mind:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Full VoiceOver support on iOS</li>
                <li>TalkBack compatibility on Android</li>
                <li>Dynamic Type support for custom text sizes</li>
                <li>Reduced motion options</li>
                <li>Voice control capabilities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Improvements</h2>
              <p className="text-gray-700 mb-6">
                We're continuously working to enhance accessibility:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Regular accessibility audits</li>
                <li>User testing with people with disabilities</li>
                <li>Staff training on accessibility best practices</li>
                <li>Partnership with accessibility consultants</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback</h2>
              <p className="text-gray-700 mb-6">
                We welcome your feedback on the accessibility of Balloon'd. If you encounter any barriers or have suggestions 
                for improvement, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> accessibility@balloond.com<br />
                  <strong>Phone:</strong> 1-800-BALLOON (1-800-225-5666)<br />
                  <strong>Response time:</strong> We aim to respond within 2 business days
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Content</h2>
              <p className="text-gray-700">
                While we strive to ensure all content on our platform is accessible, some user-generated content may not 
                fully meet accessibility standards. We provide tools and guidelines to help our users create accessible content.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AccessibilityPage;
