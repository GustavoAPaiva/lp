import React, { useEffect } from 'react';
import Header from './Header';
import HeroCarousel from './HeroCarousel';
import Categories from './Categories';
import Services from './Services';
import Differentials from './Differentials';
import Footer from './Footer';
import FeedbackCarousel from './FeedbackCaroulsel';
import History from './History';
const LandingPage: React.FC = () => {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (revealElements.length === 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const delay = Number(element.dataset.revealDelay ?? '0');
          element.style.transitionDelay = `${delay}ms`;
          element.classList.add('revealed');
          observer.unobserve(element);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
  <div className="font-sans min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <HeroCarousel />
        <Differentials />
        <History /> 
        <Categories />
        <Services />
        <FeedbackCarousel />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
