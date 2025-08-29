import type { NextPage } from 'next';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

const Privacy: NextPage = () => {
  return (
    <>
      <Meta 
        title="Privacy Policy - Balloon'd | Your Data, Your Rights"
        description="Learn how Balloon'd protects your privacy and handles your personal data in compliance with GDPR, CCPA, and international privacy laws."
      />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-cream to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              
              <div className="bg-ruby/10 border border-ruby/20 rounded-2xl p-6 mb-8">
                <p className="text-ruby font-semibold mb-2">Last Updated: December 15, 2024</p>
                <p className="text-gray-700">
                  This Privacy Policy explains how Balloon'd Technologies Ltd. collects, uses, processes, 
                  and protects your personal information in compliance with GDPR, CCPA, and international privacy laws.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              {/* Quick Links */}
              <div className="bg-gray-50 p-6 rounded-2xl mb-12">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Quick Navigation</h2>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <a href="#data-collection" className="text-ruby hover:underline">• Data We Collect</a>
                  <a href="#data-usage" className="text-ruby hover:underline">• How We Use Your Data</a>
                  <a href="#data-sharing" className="text-ruby hover:underline">• Data Sharing & Disclosure</a>
                  <a href="#data-security" className="text-ruby hover:underline">• Data Security</a>
                  <a href="#your-rights" className="text-ruby hover:underline">• Your Rights & Choices</a>
                  <a href="#contact" className="text-ruby hover:underline">• Contact Us</a>
                </div>
              </div>

              <div className="space-y-12 text-gray-700">
                
                {/* Data Collection */}
                <section id="data-collection">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Account Information:</strong> Name, email, phone, date of birth, gender, sexual orientation</li>
                    <li><strong>Profile Information:</strong> Photos, voice recordings, video introductions, bio, interests</li>
                    <li><strong>Communication Data:</strong> Messages, voice pops, video pops sent through our platform</li>
                    <li><strong>Payment Information:</strong> Billing details when purchasing premium features</li>
                    <li><strong>Feedback & Support:</strong> Information you provide through surveys, reviews, or customer support</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Collected Automatically</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                    <li><strong>Usage Data:</strong> Pages visited, features used, time spent, app interactions</li>
                    <li><strong>Location Data:</strong> Approximate location based on IP address (optional precise location for location-based features)</li>
                    <li><strong>Technical Data:</strong> Crash reports, performance data, bandwidth speed</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Information from Third Parties</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Social Media:</strong> When connecting through Facebook, Instagram, or other platforms</li>
                    <li><strong>Verification Services:</strong> For identity verification and background checks</li>
                    <li><strong>Analytics Partners:</strong> Aggregated data for improving our services</li>
                  </ul>
                </section>

                {/* Data Usage */}
                <section id="data-usage">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Create & Maintain Your Account:</strong> Enable profile creation, matching, and communication</li>
                    <li><strong>Facilitate Connections:</strong> Match you with compatible users based on preferences and behavior</li>
                    <li><strong>Improve Safety:</strong> Detect and prevent fraud, spam, harassment, and other violations</li>
                    <li><strong>Personalize Experience:</strong> Customize content, recommendations, and features</li>
                    <li><strong>Communicate With You:</strong> Send notifications, updates, and respond to support requests</li>
                    <li><strong>Provide Customer Support:</strong> Address technical issues and account inquiries</li>
                    <li><strong>Ensure Legal Compliance:</strong> Meet regulatory requirements and enforce our Terms of Service</li>
                    <li><strong>Conduct Analytics:</strong> Understand usage patterns and improve our platform</li>
                    <li><strong>Marketing & Research:</strong> With your consent, send promotional materials and conduct surveys</li>
                  </ul>
                </section>

                {/* Data Sharing */}
                <section id="data-sharing">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Data Sharing & Disclosure</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">With Your Consent</h3>
                  <p className="mb-6">We may share your information when you explicitly give permission, such as connecting with social media accounts.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">With Service Providers</h3>
                  <p className="mb-6">We work with trusted partners for payment processing, cloud hosting, analytics, marketing, and security services.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Legal Reasons</h3>
                  <p className="mb-6">We may disclose information to comply with legal obligations, protect rights, or prevent harm.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Transfers</h3>
                  <p className="mb-6">In the event of a merger, acquisition, or asset sale, your information may be transferred to the new owner.</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Aggregated Information</h3>
                  <p>We may share anonymized, aggregated data for research, marketing, or business purposes.</p>
                </section>

                {/* Data Security */}
                <section id="data-security">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                  
                  <p className="mb-4">We implement industry-standard security measures to protect your information:</p>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li><strong>Encryption:</strong> All data transmission is encrypted using TLS/SSL technology</li>
                    <li><strong>Access Controls:</strong> Limited employee access based on job requirements</li>
                    <li><strong>Regular Audits:</strong> Security assessments and penetration testing</li>
                    <li><strong>Incident Response:</strong> Procedures to detect, report, and respond to data breaches</li>
                  </ul>
                  
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="font-bold text-red-800 mb-2">Security Notice</h3>
                    <p className="text-red-700">
                      While we take extensive precautions to protect your data, no method of transmission over the internet 
                      or electronic storage is 100% secure. We cannot guarantee absolute security.
                    </p>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="your-rights">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Rights & Choices</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Access & Portability</h3>
                      <p className="mb-4">Request a copy of your personal data in a structured, machine-readable format.</p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Correction</h3>
                      <p className="mb-4">Update or correct inaccurate information in your account.</p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Deletion</h3>
                      <p className="mb-4">Request deletion of your account and personal data (subject to legal requirements).</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Restriction</h3>
                      <p className="mb-4">Limit how we process your personal information in certain circumstances.</p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Objection</h3>
                      <p className="mb-4">Opt-out of marketing communications and certain data processing activities.</p>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Withdrawal</h3>
                      <p>Revoke consent for data processing where consent was previously given.</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-bold text-blue-800 mb-2">How to Exercise Your Rights</h3>
                    <p className="text-blue-700 mb-4">
                      Contact our Data Protection Officer at <a href="mailto:privacy@balloond.com" className="underline">privacy@balloond.com</a> 
                      with your request. We typically respond within 30 days.
                    </p>
                    <p className="text-blue-700">
                      For GDPR requests, you may also contact your local data protection authority.
                    </p>
                  </div>
                </section>

                {/* International Transfer */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">6. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place for such transfers, including Standard 
                    Contractual Clauses approved by the European Commission.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Children's Privacy</h2>
                  <p>
                    Our service is not intended for users under 18. We do not knowingly collect personal 
                    information from children. If we discover such collection, we will promptly delete 
                    the information.
                  </p>
                </section>

                {/* Changes to Policy */}
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    material changes by posting the new policy and updating the "Last Updated" date. 
                    Your continued use of our service after changes constitutes acceptance.
                  </p>
                </section>

                {/* Contact */}
                <section id="contact">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact Us</h2>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-4">Data Protection Officer</h3>
                        <p className="mb-2">Email: <a href="mailto:privacy@balloond.com" className="text-ruby hover:underline">privacy@balloond.com</a></p>
                        <p className="mb-4">Response time: Within 24 hours</p>
                        
                        <h3 className="font-bold text-gray-900 mb-4">Mailing Address</h3>
                        <p className="mb-2">Balloon'd Technologies Ltd.</p>
                        <p className="mb-2">Privacy Department</p>
                        <p className="mb-2">123 Tech Street</p>
                        <p>London, UK EC1A 1AA</p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-gray-900 mb-4">EU Representative</h3>
                        <p className="mb-2">For EU residents under GDPR</p>
                        <p className="mb-2">GDPR Representative Ltd.</p>
                        <p className="mb-2">Attn: Balloon'd Privacy</p>
                        <p className="mb-4">Dublin, Ireland</p>
                        
                        <h3 className="font-bold text-gray-900 mb-4">California Residents</h3>
                        <p>
                          For CCPA rights, contact our Data Protection Officer at the email above. 
                          California residents may also designate an authorized agent to make requests.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;