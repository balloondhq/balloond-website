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
    { name: 'Help Center', href: '/help-center' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50 border-b border-stone-200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Updated with bigger inline SVG */}
          <Link href="/" className="flex-shrink-0">
            <svg height="48" viewBox="0 0 332 126" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-stone-900">
              <title>Balloon'd Logo</title>
              <g fill="currentColor">
                {/* Balloon shape */}
                <path d="M63 25C63 37.4264 52.4264 48 40 48C27.5736 48 17 37.4264 17 25C17 12.5736 27.5736 2 40 2C52.4264 2 63 12.5736 63 25Z" />
                {/* Balloon string */}
                <path d="M40 48L40 80" stroke="currentColor" strokeWidth="2" />
                {/* Text */}
                <text x="75" y="40" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold">Balloon'd</text>
                {/* Decorative elements */}
                <circle cx="35" cy="20" r="2" fill="white" />
                <circle cx="45" cy="30" r="1.5" fill="white" />
              </g>
            </svg>
          </Link>

          {/* Desktop Navigation */}
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
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Download App
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100"
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
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-colors text-center">
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