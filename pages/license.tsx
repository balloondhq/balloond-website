// pages/license.tsx
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const License: NextPage = () => {
  return (
    <>
      <NextSeo
        title="License - Balloon'd"
        description="Software license information for Balloon'd users and developers."
        canonical="https://balloond.com/license"
      />
      
      <Header />
      
      <main className="pt-20 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-stone-900 mb-8">Software License</h1>
        <p className="text-stone-600 mb-6">Last updated: December 20, 2024</p>
        
        <div className="prose prose-stone max-w-none">
          <p className="text-stone-700 mb-6">
            The Balloon'd mobile application and website are the property of Balloon'd Inc. and are protected under copyright and intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">License Grant</h2>
          <p className="text-stone-700 mb-6">
            We grant you a limited, non-exclusive, non-transferable license to access and use the Balloon'd platform for personal, non-commercial purposes, in accordance with our Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Restrictions</h2>
          <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
            <li>You may not copy, modify, distribute, sell, or lease any part of our app or content.</li>
            <li>You may not reverse engineer, decompile, or attempt to extract source code.</li>
            <li>You may not use bots, scrapers, or automated systems to access the platform.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Third-Party Services</h2>
          <p className="text-stone-700 mb-6">
            Our app may include services from third parties (e.g., Google, Apple, social media platforms), which are subject to their own terms and licenses.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Termination</h2>
          <p className="text-stone-700 mb-6">
            This license is effective until terminated. We may revoke it at any time if you violate our Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-stone-700">
            For licensing inquiries, please{' '}
            <a href="/contact" className="text-rose-600 hover:underline">
              contact our team
            </a>.
          </p>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default License;