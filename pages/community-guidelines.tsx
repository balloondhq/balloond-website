import type { NextPage } from 'next';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

const CommunityGuidelines: NextPage = () => {
  return (
    <>
      <Meta 
        title="Community Guidelines - Balloon'd | Building a Safe & Respectful Community"
        description="Learn about Balloon'd's community guidelines and how we create a safe, respectful environment for authentic dating connections."
      />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cream to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Community Guidelines</span>
              </h1>
              
              <div className="text-6xl mb-8">🤝</div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our community is built on respect, authenticity, and kindness. These guidelines 
                help create a safe space where everyone can be themselves and form genuine connections.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="gradient-text">Our Core Principles</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: "❤️",
                    title: "Be Authentic",
                    description: "Show your true self. Use recent photos, be honest about your interests, and let your personality shine through your voice pops and videos."
                  },
                  {
                    icon: "🛡️",
                    title: "Stay Safe",
                    description: "Protect yourself and others. Don't share personal information too quickly, meet in public places, and trust your instincts."
                  },
                  {
                    icon: "🤗",
                    title: "Be Respectful",
                    description: "Treat everyone with kindness and respect. Accept rejection gracefully, and remember that everyone deserves to feel safe and valued."
                  }
                ].map((principle, index) => (
                  <div key={index} className="bg-gradient-to-br from-cream to-bone rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl mb-6">{principle.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Support */}
        <section className="py-20 bg-gradient-to-r from-ruby to-ruby-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Community Support</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're here to help you have the best experience possible. Our support team 
                is available 24/7 to assist with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-ruby px-8 py-3 rounded-full font-semibold hover:bg-cream transition-colors">
                  Contact Support
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                  Report an Issue
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Guidelines */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="gradient-text">Detailed Guidelines</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  {
                    title: "Profile Standards",
                    items: [
                      "Use real, recent photos that accurately represent you",
                      "Don't impersonate others or misrepresent yourself",
                      "Avoid explicit or inappropriate content",
                      "Keep your information up to date"
                    ]
                  },
                  {
                    title: "Communication Rules",
                    items: [
                      "Be respectful and kind in all interactions",
                      "No harassment, hate speech, or threats",
                      "Don't spam or send unsolicited messages",
                      "Respect others' boundaries and decisions"
                    ]
                  },
                  {
                    title: "Safety Practices",
                    items: [
                      "Report suspicious or inappropriate behavior",
                      "Don't share personal information too quickly",
                      "Meet in public places for first dates",
                      "Trust your instincts and leave uncomfortable situations"
                    ]
                  },
                  {
                    title: "Prohibited Content",
                    items: [
                      "No nudity or sexually explicit material",
                      "No illegal activities or substances",
                      "No violence or threats of violence",
                      "No scams or fraudulent schemes"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-stone-900 mb-6">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-ruby mr-3 mt-1">•</span>
                          <span className="text-stone-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Reporting Issues</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                If you encounter behavior that violates our guidelines, please report it immediately. 
                Our team reviews all reports and takes appropriate action.
              </p>
              
              <div className="bg-gradient-to-br from-ruby/5 to-ruby/10 rounded-3xl p-8 border border-ruby/20">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-stone-900 mb-6">How to Report</h3>
                  <div className="text-left space-y-4">
                    <div className="flex items-start">
                      <div className="bg-ruby text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">1</div>
                      <p className="text-stone-700">Tap the three dots on any profile or message</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-ruby text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">2</div>
                      <p className="text-stone-700">Select "Report" from the menu</p>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-ruby text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">3</div>
                      <p className="text-stone-700">Choose the reason for reporting and submit</p>
                    </div>
                  </div>
                  <p className="mt-6 text-stone-600">
                    For urgent matters, contact our support team directly at <a href="mailto:safety@balloond.com" className="text-ruby hover:underline">safety@balloond.com</a>
                  </p>
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

export default CommunityGuidelines;