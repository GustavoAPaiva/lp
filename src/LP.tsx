import React from 'react';
import Header from './Header';
import HeroCarousel from './HeroCarousel';
import Categories from './Categories';
import Services from './Services';
import Footer from './Footer';
import FeedbackCarousel from './FeedbackCaroulsel';
const LandingPage: React.FC = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <HeroCarousel />
        <Categories />
        <Services />
      </main>
      <FeedbackCarousel/>
      <Footer />
    </div>
  );
};

export default LandingPage;