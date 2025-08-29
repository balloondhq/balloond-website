// pages/cookies.tsx
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cookies: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Cookie Policy - Balloon'd"
        description="Learn how Balloon'd uses cookies to enhance your experience and protect your privacy."
        canonical="https://balloond.com/cookies"
      />
      
      <Header />
      
      <main className="pt-20 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-stone-900 mb-8">Cookie Policy</h1>
        <p className="text-stone-600 mb-6">Last updated: December 20, 2024</p>
        
        <div className="prose prose-stone max-w-none">
          <p className="text-stone-700 mb-6">
            This Cookie Policy explains how Balloon'd ("we", "us", or "our") uses cookies and similar tracking technologies when you use our website and mobile application.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">What Are Cookies?</h2>
          <p className="text-stone-700 mb-6">
            Cookies are small text files that are stored on your device when you visit a website. They help us recognize your device, remember your preferences, and improve your experience.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Types of Cookies We Use</h2>
          
          <div className="space-y-6 mb-6">
            <div>
              <h3 className="text-lg font-medium text-stone-900">Essential Cookies</h3>
              <p className="text-stone-600">These are necessary for the website to function properly. They enable core features like page navigation and access to secure areas.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-stone-900">Performance Cookies</h3>
              <p className="text-stone-600">We use these to analyze how our site is used, so we can improve performance and user experience. These are anonymized and do not identify individual users.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-stone-900">Functionality Cookies</h3>
              <p className="text-stone-600">These allow us to remember choices you make (like language or region) and provide enhanced, personalized features.</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-stone-900">Advertising Cookies</h3>
              <p className="text-stone-600">We may use third-party advertising partners who use cookies to deliver ads relevant to your interests. You can opt out through your device settings or ad networks.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">How to Control Cookies</h2>
          <p className="text-stone-700 mb-6">
            Most web browsers allow you to manage cookies through their settings. You can choose to block or delete cookies, but doing so may affect the functionality of our site.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-stone-700 mb-6">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-stone-700">
            If you have any questions about our Cookie Policy, please{' '}
            <a href="/contact" className="text-rose-600 hover:underline">
              contact us
            </a>.
          </p>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Cookies;