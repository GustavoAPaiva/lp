import React, { useState, useEffect } from 'react';

const feedbacks = [
  {
    id: 1,
    name: "Carlos Eduardo",
    text: "Atendimento rápido e muito profissional. Minha geladeira parou no domingo e na segunda de manhã o técnico já estava aqui. Resolveu na hora com peça original.",
    role: "Cliente Residencial"
  },
  {
    id: 2,
    name: "Mariana Silva",
    text: "Os técnicos são super educados e explicam o problema antes de consertar. Instalaram dois ar condicionados aqui no escritório e não deixaram sujeira nenhuma.",
    role: "Cliente Corporativo"
  },
  {
    id: 3,
    name: "Roberto Almeida",
    text: "Preço justo e garantia de verdade. Já tive dor de cabeça com outras assistências, mas a PJ Soluções ganhou minha confiança. Recomendo de olhos fechados.",
    role: "Cliente Residencial"
  }
];

const FeedbackCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="depoimentos" className="py-20 bg-gray-50 border-t border-b border-gray-200 relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 text-center">
        
        <div data-reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">O que nossos clientes dizem</h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full mb-12"></div>
        </div>

        <div data-reveal data-reveal-delay="140" className="relative max-w-4xl mx-auto">
          
          {/* Botão Voltar */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md hover:bg-brand-orange text-brand-blue hover:text-white p-3 rounded-full transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Container dos Cards */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-14 min-h-[300px] flex items-center justify-center relative">
            
            {feedbacks.map((item, index) => (
              <div 
                key={item.id}
                className={`transition-opacity duration-500 absolute w-full px-8 md:px-20 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 invisible'}`}
              >
                {/* Estrelas Laranjas */}
                <div className="flex justify-center gap-1 text-brand-orange mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                
                <p className="text-lg md:text-2xl text-gray-600 italic mb-8">"{item.text}"</p>
                
                <div>
                  <h4 className="font-bold text-brand-blue text-lg">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Avançar */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md hover:bg-brand-orange text-brand-blue hover:text-white p-3 rounded-full transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

        </div>

        {/* Indicadores de Bolinha */}
        <div className="flex justify-center gap-3 mt-8">
          {feedbacks.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none ${index === currentIndex ? 'bg-brand-orange w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeedbackCarousel;
