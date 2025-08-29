import type { NextPage } from 'next';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

const Contact: NextPage = () => {
  return (
    <>
      <Meta 
        title="Contact Us - Balloon'd | Get Help & Support"
        description="Contact Balloon'd support team for help, feedback, or questions about our dating app. Multiple ways to reach us with quick response times."
      />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cream to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Contact Us</span>
              </h1>
              
              <div className="text-6xl mb-8">💬</div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're here to help! Whether you have questions, need support, or want to share feedback, 
                our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                
                {/* General Support */}
                <div className="bg-gradient-to-br from-cream to-bone rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-6">🎧</div>
                  <h3 className="text-2xl font-bold mb-4">General Support</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Questions about your account, app features, or general inquiries.
                  </p>
                  <div className="space-y-3">
                    <p><strong>Email:</strong> <a href="mailto:support@balloond.com" className="text-ruby hover:underline">support@balloond.com</a></p>
                    <p><strong>Response:</strong> Within 24 hours</p>
                  </div>
                </div>

                {/* Technical Issues */}
                <div className="bg-gradient-to-br from-cream to-bone rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-6">🔧</div>
                  <h3 className="text-2xl font-bold mb-4">Technical Issues</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    App crashes, bugs, payment problems, or technical difficulties.
                  </p>
                  <div className="space-y-3">
                    <p><strong>Email:</strong> <a href="mailto:tech@balloond.com" className="text-ruby hover:underline">tech@balloond.com</a></p>
                    <p><strong>Response:</strong> Within 12 hours</p>
                  </div>
                </div>

                {/* Safety & Security */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border border-red-200">
                  <div className="text-4xl mb-6">🚨</div>
                  <h3 className="text-2xl font-bold mb-4 text-red-900">Safety & Security</h3>
                  <p className="text-red-800 mb-6 leading-relaxed">
                    Report suspicious behavior, safety concerns, or security issues.
                  </p>
                  <div className="space-y-3">
                    <p><strong>Email:</strong> <a href="mailto:safety@balloond.com" className="text-red-700 hover:underline">safety@balloond.com</a></p>
                    <p><strong>Response:</strong> Within 2 hours (urgent)</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-ruby/5 to-ruby/10 rounded-3xl p-8 md:p-12 border border-ruby/20">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-8">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ruby focus:border-ruby"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ruby focus:border-ruby"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ruby focus:border-ruby"
                      >
                        <option value="">Select a subject</option>
                        <option value="support">General Support</option>
                        <option value="technical">Technical Issue</option>
                        <option value="safety">Safety Concern</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ruby focus:border-ruby"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-ruby hover:bg-ruby-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="gradient-text">Frequently Asked Questions</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Quick answers to common questions
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "How quickly can I expect a response?",
                    answer: "General inquiries: within 24 hours. Technical issues: within 12 hours. Safety concerns: within 2 hours."
                  },
                  {
                    question: "Can I contact you through the app?",
                    answer: "Yes, you can use the in-app help center to report issues or get support directly from your profile."
                  },
                  {
                    question: "Do you have a phone number?",
                    answer: "We primarily respond to emails for better documentation and follow-up. For urgent safety issues, call emergency services first."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;