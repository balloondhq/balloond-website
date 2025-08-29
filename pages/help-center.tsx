import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpCenter: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Getting Started',
    'Profile & Photos',
    'Matching & Discovery',
    'Messaging',
    'Safety & Privacy',
    'Account & Billing',
    'Technical Issues'
  ];

  const faqItems = [
    {
      category: 'Getting Started',
      question: 'How do I create my Balloon\'d profile?',
      answer: 'Download the app, sign up with your phone number or email, add photos, record your voice pop, and answer our personality questions. Our onboarding process takes about 5 minutes!'
    },
    {
      category: 'Getting Started',
      question: 'What makes Balloon\'d different from other dating apps?',
      answer: 'Balloon\'d focuses on authentic connections through voice pops, video intros, and our unique matching algorithm that prioritizes personality compatibility over superficial metrics.'
    },
    {
      category: 'Profile & Photos',
      question: 'How many photos should I upload?',
      answer: 'We recommend 4-6 photos that show different aspects of your life. Include at least one clear face photo, a full body shot, and photos of you doing activities you enjoy.'
    },
    {
      category: 'Profile & Photos',
      question: 'What is a Voice Pop and how do I create one?',
      answer: 'A Voice Pop is a 30-second audio introduction where you can share your personality before matches see your photos. Record yourself naturally - talk about your interests, what you\'re looking for, or ask a question!'
    },
    {
      category: 'Matching & Discovery',
      question: 'How does the matching algorithm work?',
      answer: 'Our algorithm considers your preferences, personality answers, activity patterns, and compatibility factors to suggest meaningful matches. We prioritize quality over quantity.'
    },
    {
      category: 'Matching & Discovery',
      question: 'Why am I not getting matches?',
      answer: 'Try updating your photos, refining your voice pop, expanding your distance or age preferences, or completing more personality questions to improve your match potential.'
    },
    {
      category: 'Messaging',
      question: 'How do I start a conversation?',
      answer: 'After matching, you can send a message or respond to their voice pop. Try referencing something specific from their profile to start meaningful conversations.'
    },
    {
      category: 'Messaging',
      question: 'Can I send voice messages?',
      answer: 'Yes! Voice messages are a great way to add personality to your conversations. Tap the microphone icon in the chat to record and send voice messages.'
    },
    {
      category: 'Safety & Privacy',
      question: 'How do you verify profiles?',
      answer: 'We use photo verification, phone number verification, and AI detection to identify fake profiles. Users can also report suspicious accounts for review.'
    },
    {
      category: 'Safety & Privacy',
      question: 'How do I report or block someone?',
      answer: 'Tap the three dots in the top right of their profile or chat, then select "Report" or "Block." We take all reports seriously and investigate promptly.'
    },
    {
      category: 'Account & Billing',
      question: 'How do I delete my account?',
      answer: 'Go to Settings > Account > Delete Account. Note that this permanently removes your profile, matches, and messages. This action cannot be undone.'
    },
    {
      category: 'Technical Issues',
      question: 'The app keeps crashing. What should I do?',
      answer: 'Try force-closing and reopening the app, restarting your device, or updating to the latest version. If issues persist, contact our support team.'
    }
  ];

  const filteredFAQs = selectedCategory === 'All' 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems.filter(item => 
        item.category === selectedCategory &&
        (item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
         item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <>
      <NextSeo
        title="Help Center - Balloon'd"
        description="Find answers to common questions about using Balloon'd. Get help with profiles, matching, messaging, safety, and more."
        canonical="https://balloond.com/help-center"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-stone-900 mb-6">
              Help Center
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Find answers to your questions and get the most out of Balloon'd.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-stone-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Popular Topics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-stone-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎈</span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Getting Started</h3>
                <p className="text-stone-600 text-sm">Learn the basics of creating your profile and making connections.</p>
              </div>
              
              <div className="text-center p-6 border border-stone-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Safety & Privacy</h3>
                <p className="text-stone-600 text-sm">Stay safe and protect your privacy while dating online.</p>
              </div>
              
              <div className="text-center p-6 border border-stone-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Messaging Help</h3>
                <p className="text-stone-600 text-sm">Tips for great conversations and using our messaging features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-stone-50 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? 'bg-rose-500 text-white' 
                      : 'bg-white text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {filteredFAQs.map((item, index) => (
                <details key={index} className="group border border-stone-200 rounded-lg">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-stone-50 rounded-lg">
                    <div>
                      <span className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-1 rounded mb-2 inline-block">
                        {item.category}
                      </span>
                      <h3 className="font-semibold text-stone-900">{item.question}</h3>
                    </div>
                    <svg
                      className="h-5 w-5 text-stone-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-stone-600 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">No results found</h3>
                <p className="text-stone-600">Try adjusting your search or browse by category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Still Need Help?</h2>
                <p className="text-lg text-stone-600">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2">Email Support</h3>
                  <p className="text-stone-600 text-sm mb-3">Get detailed help via email</p>
                  <a href="mailto:support@balloond.com" className="text-rose-600 hover:text-rose-700 font-medium">
                    support@balloond.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2">Live Chat</h3>
                  <p className="text-stone-600 text-sm mb-3">Chat with us in real-time</p>
                  <button className="text-rose-600 hover:text-rose-700 font-medium">
                    Start Chat
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2">Report an Issue</h3>
                  <p className="text-stone-600 text-sm mb-3">Report technical problems</p>
                  <button className="text-rose-600 hover:text-rose-700 font-medium">
                    Report Issue
                  </button>
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

export default HelpCenter;
