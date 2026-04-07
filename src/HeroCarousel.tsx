import React, { useState, useEffect, useCallback } from 'react';

// Link do WhatsApp com mensagem pré-definida e codificada
const WHA_LINK = "https://wa.me/558421367575?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20assist%C3%AAncia%20t%C3%A9cnica.";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920&auto=format&fit=crop",
    title: "Assistência Técnica Especializada",
    subtitle: "Conserto e manutenção de geladeiras, freezers e linha branca com peças originais.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1920&auto=format&fit=crop",
    title: "Instalação de Ar Condicionado",
    subtitle: "Ambiente perfeito com técnicos homologados e garantia estendida de serviço.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1920&auto=format&fit=crop",
    title: "Peças Originais e Acessórios",
    subtitle: "Maior durabilidade e segurança para os seus eletrodomésticos.",
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]);

  return (
    <section id="inicio" className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-brand-blue group scroll-mt-24 md:scroll-mt-32">
      
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="absolute inset-0 bg-black/65 z-10"></div>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-8 drop-shadow-md">
              {slide.subtitle}
            </p>
            <a 
              href={WHA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shine bg-brand-orange hover:brightness-95 text-brand-blue font-extrabold text-lg md:text-xl py-3 md:py-4 px-8 md:px-10 rounded-full shadow-xl transition-all hover:scale-105 relative overflow-hidden"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      ))}

      {/* Setas de Navegação Manual */}
      <button onClick={prevSlide} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-brand-orange text-white p-3 rounded-full opacity-70 group-hover:opacity-100 transition-all backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button onClick={nextSlide} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-brand-orange text-white p-3 rounded-full opacity-70 group-hover:opacity-100 transition-all backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-brand-orange w-8' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
