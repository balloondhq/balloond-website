// components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ];

  const rightNavigation = [
    { name: 'Help Center', href: '/help-center' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50 border-b border-stone-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted padding to 1.5rem as requested */}
        <div className="flex justify-between items-center py-6">
          {/* Left side - Navigation links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                  router.pathname === item.href ? 'text-rose-600' : 'text-stone-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Center - Logo (hidden on mobile, shown on desktop) */}
          <Link href="/" className="hidden md:flex flex-shrink-0 items-center absolute left-1/2 transform -translate-x-1/2">
            <img 
              src="/logo.svg" 
              alt="Balloon'd Logo" 
              className="h-10 w-auto transform scale-[4.25] origin-center" 
              style={{ 
                transform: 'scale(4.25)', 
                transformOrigin: 'center' 
              }}
            />
          </Link>

          {/* Right side - Help Center, Contact links and Download button */}
          <div className="hidden md:flex items-center space-x-8">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                  router.pathname === item.href ? 'text-rose-600' : 'text-stone-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Download button now visible on the far right */}
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Download App
            </button>
          </div>

          {/* Mobile layout - Logo centered, burger menu on right */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Mobile logo - centered with original size */}
            <div className="flex-grow flex justify-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img 
                  src="/logo.svg" 
                  alt="Balloon'd Logo" 
                  className="h-10 w-auto transform scale-[4.25] origin-center" 
                  style={{ 
                    transform: 'scale(4.25)', 
                    transformOrigin: 'center' 
                  }}
                />
              </Link>
            </div>
            
            {/* Mobile menu button on the right */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-rose-600 ${
                    router.pathname === item.href ? 'text-rose-600' : 'text-stone-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {rightNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-rose-600 ${
                    router.pathname === item.href ? 'text-rose-600' : 'text-stone-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Download App
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;