import React from 'react';

const WHA_LINK = "https://wa.me/558421367575?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20assist%C3%AAncia%20t%C3%A9cnica.";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-brand-blue">
      {/* Imagem de Fundo com Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920&auto=format&fit=crop" 
          alt="Técnico realizando manutenção" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Conteúdo Central */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl mb-6 drop-shadow-lg leading-tight">
          Assistência Técnica Especializada em <span className="text-brand-orange">Refrigeração</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-10 drop-shadow-md">
          Conserto, manutenção e instalação com peças originais e garantia no serviço. Atendimento rápido em Natal e região.
        </p>
        
        <a 
          href={WHA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-brand-orange hover:bg-[#E69200] text-brand-blue font-extrabold text-lg md:text-xl py-4 px-10 rounded-full shadow-xl transition-all hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Solicitar Orçamento Agora
        </a>
      </div>
    </section>
  );
};

export default Hero;