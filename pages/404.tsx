// pages/404.tsx
import type { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Custom404: NextPage = () => {
  return (
    <>
      <NextSeo
        title="404 - Page Not Found | Balloon'd"
        description="Sorry, the page you're looking for doesn't exist. Let's get you back on track to finding authentic connections."
        noindex={true}
      />
      
      <Header />
      
      <main className="pt-20">
        <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-rose-50 to-orange-50">
          <div className="max-w-md mx-auto text-center px-4">
            {/* Balloon Animation */}
            <div className="mb-8 relative">
              <div className="text-8xl animate-bounce">🎈</div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl animate-pulse">💫</div>
            </div>
            
            {/* Error Message */}
            <h1 className="text-6xl font-bold text-stone-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Oops! This balloon popped
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              The page you're looking for has floated away. Don't worry though – 
              there are plenty of other amazing connections to discover.
            </p>
            
            {/* Action Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                href="/"
                className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                🏠 Go Home
              </Link>
              <Link 
                href="/blog"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                📖 Read Our Blog
              </Link>
            </div>
            
            {/* Fun Stats */}
            <div className="mt-12 pt-8 border-t border-stone-200">
              <p className="text-sm text-stone-500 mb-4">
                While you're here, did you know...
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-rose-500">💝</div>
                  <p className="text-xs text-stone-600">Every connection matters</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500">🎯</div>
                  <p className="text-xs text-stone-600">Authenticity is key</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-bounce,
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default Custom404;
