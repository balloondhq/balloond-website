// components/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Check if we're on the home page
  const isHomePage = router.pathname === '/';

  // Handle scroll effect (only on home page)
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true); // Always show solid background on non-home pages
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-stone-50 border-b border-stone-200 backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Left side - Navigation links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  router.pathname === item.href 
                    ? (isScrolled ? 'text-rose-600' : 'text-white') 
                    : (isScrolled ? 'text-stone-700 hover:text-rose-600' : 'text-white hover:text-rose-200')
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Center - Logo (hidden on mobile, shown on desktop) */}
          <Link href="/" className="hidden lg:flex flex-shrink-0 items-center absolute left-1/2 transform -translate-x-1/2">
            <img 
              src="/logo.svg" 
              alt="Balloon'd Logo" 
              className={`h-8 lg:h-10 w-auto transform scale-[3.5] lg:scale-[4.25] origin-center transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              style={{ 
                transform: 'scale(4.25)', 
                transformOrigin: 'center' 
              }}
            />
          </Link>

          {/* Right side - Help Center, Contact links and Download button */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {rightNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  router.pathname === item.href 
                    ? (isScrolled ? 'text-rose-600' : 'text-white') 
                    : (isScrolled ? 'text-stone-700 hover:text-rose-600' : 'text-white hover:text-rose-200')
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Download button */}
            <button 
              className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-rose-500 hover:bg-rose-600 text-white' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              Download App
            </button>
          </div>

          {/* Mobile and Tablet layout */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Mobile logo - left aligned on mobile, centered on tablet */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img 
                  src="/logo.svg" 
                  alt="Balloon'd Logo" 
                  className={`h-8 sm:h-10 w-auto transform scale-[3.5] sm:scale-[4.25] origin-left sm:origin-center transition-all duration-300 ${
                    isScrolled ? '' : 'brightness-0 invert'
                  }`}
                  style={{ 
                    transform: 'scale(3.5)', 
                    transformOrigin: 'left' 
                  }}
                />
              </Link>
            </div>
            
            {/* Mobile menu button on the right */}
            <button
              className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 z-50 ${
                isScrolled 
                  ? 'text-stone-700 hover:text-stone-900 hover:bg-stone-100' 
                  : 'text-white hover:text-rose-200 hover:bg-white/10'
              }`}
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
          <div 
            className={`lg:hidden py-4 sm:py-6 transition-all duration-300 ${
              isScrolled 
                ? 'border-t border-stone-200 bg-stone-50' 
                : 'bg-black/20 backdrop-blur-sm border-t border-white/20'
            }`}
          >
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base sm:text-lg font-medium transition-all duration-300 px-2 py-1 ${
                    router.pathname === item.href 
                      ? (isScrolled ? 'text-rose-600' : 'text-white') 
                      : (isScrolled ? 'text-stone-700 hover:text-rose-600' : 'text-white hover:text-rose-200')
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className={`my-2 ${
                isScrolled ? 'border-stone-200' : 'border-white/20'
              }`} />
              {rightNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base sm:text-lg font-medium transition-all duration-300 px-2 py-1 ${
                    router.pathname === item.href 
                      ? (isScrolled ? 'text-rose-600' : 'text-white') 
                      : (isScrolled ? 'text-stone-700 hover:text-rose-600' : 'text-white hover:text-rose-200')
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <button 
                  className={`w-full sm:w-auto px-6 py-3 text-center rounded-full font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-rose-500 hover:bg-rose-600 text-white' 
                      : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
                  }`}
                >
                  Download App
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;