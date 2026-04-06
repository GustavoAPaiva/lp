import React from 'react';
import Header from './Header';
import Hero from './HeroCarousel';
import Footer from './Footer';
import Contact from './Contact';
import Categories from './Categories';
import History from './History';
import FeedbackCarousel from './FeedbackCaroulsel';
const LandingPage: React.FC = () => {
  return (
<div className="font-sans min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <History /> 
        <Categories />
        <FeedbackCarousel/>
        <Contact />
        
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;