import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Community from '../components/Community';
import Premium from '../components/Premium';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Balloon'd - Pop into Something Real"
        description="A playful way to meet real matches. Voice notes, video intros, and smart matching for genuine connections."
        canonical="https://balloond.com/"
        openGraph={{
          url: 'https://balloond.com',
          title: "Balloon'd - Pop into Something Real",
          description: 'A playful way to meet real matches. Voice notes, video intros, and smart matching for genuine connections.',
          images: [
            {
              url: '/hero.svg',
              width: 1200,
              height: 630,
              alt: "Balloon'd App Preview",
            },
          ],
          site_name: "Balloon'd",
        }}
        twitter={{
          handle: '@balloond',
          site: '@balloond',
          cardType: 'summary_large_image',
        }}
      />
      
      <div className="bg-gradient-to-br from-rose-500 via-orange-400 to-rose-600">
        <Header />
        <Hero />
      </div>
      
      <Features />
      <Community />
      <Premium />
      <Footer />
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f43f5e, #fb7185);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
};

export default Home;
