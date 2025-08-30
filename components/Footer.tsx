// components/Footer.tsx
import Link from 'next/link';
import TwitterIcon from './twitter.svg';
import InstagramIcon from './instagram.svg';
import TikTokIcon from './tiktok.svg';
import LinkedInIcon from './linkedin.svg';

const Footer = () => {
  const navigation = {
    product: [
      { name: 'Download App', href: '#' },
      { name: 'How It Works', href: '#' },
      { name: 'Safety', href: '/safety-tips' },
      { name: 'Community Guidelines', href: '/community-guidelines' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'Help Center', href: '/help-center' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Licenses', href: '/license' },
    ],
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            {/* Logo - now correctly pointing to public/logo.svg */}
            <img 
              src="/logo.svg" 
              alt="Balloon'd Logo" 
              className="h-8 w-auto mb-6" 
            />
            <p className="text-stone-300 mb-6">
              A playful way to meet real matches. Voice pops, video intros, and smart matching for genuine connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <TikTokIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:col-span-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-stone-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-stone-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-stone-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-stone-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-stone-800">
          <p className="text-stone-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Balloon'd Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;