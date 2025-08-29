import type { NextPage } from 'next';
import Meta from '../components/Meta';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Mood from '../components/Mood';
import Premium from '../components/Premium';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Mood />
        <Premium />
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
