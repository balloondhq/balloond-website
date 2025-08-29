// pages/safety-tips.tsx
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SafetyTips: NextPage = () => {
  const safetyTips = [
    {
      category: 'Profile Safety',
      icon: '🛡️',
      tips: [
        'Don\'t include your full name, address, or workplace in your profile',
        'Use recent photos that accurately represent you',
        'Avoid sharing personal information like your phone number or social media handles',
        'Be cautious about revealing identifying information in your voice pops'
      ]
    },
    {
      category: 'Messaging Safely',
      icon: '💬',
      tips: [
        'Keep conversations on the Balloon\'d platform initially',
        'Trust your instincts - if something feels off, it probably is',
        'Don\'t send money or personal financial information',
        'Be wary of people who ask for personal details too quickly',
        'Report inappropriate messages or behavior immediately'
      ]
    },
    {
      category: 'Meeting in Person',
      icon: '🤝',
      tips: [
        'Meet in a public place for your first few dates',
        'Tell a friend or family member where you\'re going and who you\'re meeting',
        'Drive yourself or use your own transportation',
        'Video chat before meeting to verify their identity',
        'Trust your gut - leave if you feel uncomfortable'
      ]
    },
    {
      category: 'Protecting Your Privacy',
      icon: '🔒',
      tips: [
        'Use Balloon\'d\'s built-in calling feature instead of sharing your phone number',
        'Don\'t share your home or work address',
        'Be cautious about connecting on social media too early',
        'Use our photo verification features',
        'Keep your location services settings private'
      ]
    }
  ];

  const warningSigns = [
    {
      title: 'Too Good to Be True',
      description: 'Professional photos, immediate declarations of love, or perfect responses that seem scripted.',
      action: 'Take time to get to know them through multiple conversations before meeting.'
    },
    {
      title: 'Refuses Video Calls',
      description: 'Won\'t video chat or always has excuses for why they can\'t show their face.',
      action: 'Insist on video verification before meeting in person.'
    },
    {
      title: 'Asks for Money',
      description: 'Requests financial help, gift cards, or money transfers for any reason.',
      action: 'Never send money to someone you\'ve met online. Report immediately.'
    },
    {
      title: 'Pressures for Personal Info',
      description: 'Pushes for your address, workplace, or financial information early on.',
      action: 'Keep personal information private until you\'ve built genuine trust.'
    },
    {
      title: 'Inconsistent Stories',
      description: 'Details about their life don\'t add up or change between conversations.',
      action: 'Ask follow-up questions and trust your instincts if something feels off.'
    },
    {
      title: 'Wants to Move Off-Platform',
      description: 'Immediately wants to communicate only through text, email, or other apps.',
      action: 'Keep conversations on Balloon\'d until you\'ve established trust.'
    }
  ];

  return (
    <>
      <NextSeo
        title="Safety Tips - Balloon'd"
        description="Stay safe while dating online. Essential safety tips for authentic connections on Balloon'd."
        canonical="https://balloond.com/safety-tips"
      />
      
      <Header />
      
      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-stone-900 mb-6">Your Safety Comes First</h1>
            <p className="text-xl text-stone-600 mb-8">
              We're committed to helping you build meaningful, authentic, and safe connections.
            </p>
            <div className="inline-flex items-center space-x-2 text-rose-600 font-medium">
              <span>🛡️</span>
              <span>Verified profiles and safety features built-in</span>
            </div>
          </div>
        </section>

        {/* Safety Tips Sections */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Essential Safety Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {safetyTips.map((section, index) => (
                <div key={index} className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{section.icon}</span>
                    <h3 className="text-2xl font-semibold text-stone-900">{section.category}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <span className="text-rose-500 mr-2 mt-1">•</span>
                        <span className="text-stone-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Red Flags to Watch For</h2>
            <p className="text-lg text-stone-600 text-center mb-12 max-w-3xl mx-auto">
              Stay alert and protect yourself by recognizing these common warning signs of potential scams or unsafe behavior.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warningSigns.map((warning, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{warning.title}</h3>
                  <p className="text-stone-600 mb-4">{warning.description}</p>
                  <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded">
                    <p className="text-rose-800 font-medium">Recommended Action:</p>
                    <p className="text-rose-700">{warning.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Resources */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Need Immediate Help?</h2>
            <p className="text-lg text-stone-600 mb-8">
              If you or someone else is in danger, please contact local emergency services right away.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 inline-block">
              <p className="font-semibold text-red-800 text-lg">Emergency Services:</p>
              <p className="text-red-700">Dial 911 (US) or your local emergency number.</p>
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Report Suspicious Activity</h2>
            <p className="text-xl text-rose-100 mb-8">
              Our team reviews all reports promptly and takes appropriate action to keep our community safe.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-stone-900 mb-4">How to Report</h3>
              <ol className="text-stone-700 text-left space-y-2">
                <li>1. Tap the three dots (⋯) on any profile or message</li>
                <li>2. Select "Report"</li>
                <li>3. Choose the reason for reporting</li>
                <li>4. Submit your report</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SafetyTips;