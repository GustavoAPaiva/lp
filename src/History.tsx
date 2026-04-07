import React from 'react';

const History: React.FC = () => {
  return (
    /* O ID AQUI TEM DE SER IGUAL AO HREF DO HEADER */
    <section id="quem-somos" className="py-24 bg-white overflow-hidden scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Lado do Texto */}
          <div data-reveal className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-6 leading-tight">
              A nossa missão é <span className="text-brand-orange">resolver o seu problema.</span>
            </h2>
            <div className="w-24 h-2 bg-brand-orange rounded-full mb-8"></div>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              A PJ Soluções em Refrigeração nasceu com um propósito muito claro: levar tranquilidade e conforto para as famílias e empresas de Natal e região.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              Ao longo dos anos, construímos a nossa reputação baseada na satisfação de cada cliente atendido. Hoje, somos referência em manutenção e climatização.
            </p>
          </div>

          {/* Lado da Imagem */}
          <div data-reveal data-reveal-delay="120" className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" 
                 alt="Equipa a trabalhar" 
                 className="w-full h-auto object-cover md:h-[500px]" 
               />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-orange rounded-3xl z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default History;
