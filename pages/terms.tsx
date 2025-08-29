import type { NextPage } from 'next';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

const Terms: NextPage = () => {
  return (
    <>
      <Meta 
        title="Terms of Service - Balloon'd"
        description="Read Balloon'd's Terms of Service to understand your rights and responsibilities when using our dating platform."
      />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cream to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Terms of Service</span>
              </h1>
              
              <div className="bg-ruby/10 border border-ruby/20 rounded-2xl p-6 mb-8">
                <p className="text-ruby font-semibold mb-2">Last Updated: December 15, 2024</p>
                <p className="text-gray-700">
                  These Terms of Service govern your use of Balloon'd's website, mobile applications, and related services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-stone max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-6">
                  By accessing or using Balloon'd (the "Service"), you agree to be bound by these Terms of Service ("Terms"). 
                  If you disagree with any part of the terms, you may not access the Service.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="mb-6">
                  Balloon'd is a dating platform that connects users through voice-based interactions. 
                  Our service includes profile creation, voice messaging, matching algorithms, and communication tools.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
                <p className="mb-6">
                  You must be at least 18 years old to use the Service. By using the Service, you represent and warrant 
                  that you are at least 18 years old and have the right, authority, and capacity to enter into these Terms.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration</h2>
                <p className="mb-6">
                  To access certain features of the Service, you may be required to register for an account. 
                  You agree to provide accurate, current, and complete information during registration and to update such 
                  information to keep it accurate, current, and complete.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct</h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-8 mb-6 space-y-2">
                  <li>Use the Service for any illegal purpose or in violation of any laws</li>
                  <li>Harass, abuse, or harm another person</li>
                  <li>Impersonate any person or entity</li>
                  <li>Post or transmit any content that is harmful, offensive, or objectionable</li>
                  <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                  <li>Attempt to gain unauthorized access to the Service</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Content Ownership</h2>
                <p className="mb-6">
                  You retain all ownership rights in your profile information, voice messages, and other content you submit 
                  to the Service. By submitting content, you grant Balloon'd a worldwide, non-exclusive, royalty-free license 
                  to use, reproduce, adapt, publish, translate, and distribute your content in connection with the Service.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="mb-6">
                  The Service and its original content, features, and functionality are owned by Balloon'd Technologies Ltd. 
                  and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property or proprietary rights laws.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <p className="mb-6">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason 
                  whatsoever, including without limitation if you breach the Terms.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="mb-6">
                  In no event shall Balloon'd, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential or punitive damages, including without 
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access 
                  to or use of or inability to access or use the Service.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  We will provide notice of any significant changes by updating the "Last Updated" date at the top of these Terms.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="mb-6">
                  These Terms shall be governed and construed in accordance with the laws of the United Kingdom, 
                  without regard to its conflict of law provisions.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@balloond.com" className="text-ruby hover:underline">legal@balloond.com</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;