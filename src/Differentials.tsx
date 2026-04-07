import React from 'react';
import seloEletrolux from './assets/seloeletrolux.png';
import seloTramontina from './assets/selotramontina.svg';

type Differential = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  symbol?: string;
  symbolAlt?: string;
};

const differentials: Differential[] = [
  {
    title: 'Garantia Estendida',
    description:
      'Cobertura adicional para os serviços executados, garantindo mais segurança e tranquilidade após o atendimento.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Autorizada Tramontina',
    description:
      'Símbolo de autorizada Tramontina aplicado para reforçar credibilidade e padrão técnico de atendimento.',
    symbol: seloTramontina,
    symbolAlt: 'Símbolo de autorizada Tramontina',
  },
  {
    title: 'Autorizada Eletrolux',
    description:
      'Símbolo de autorizada Eletrolux em destaque na LP para evidenciar confiança e assistência oficial.',
    symbol: seloEletrolux,
    symbolAlt: 'Símbolo de autorizada Eletrolux',
  },
];

const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-brand-lightGray border-b border-gray-200 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div data-reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">Nossos Diferenciais</h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              data-reveal-delay={String(90 + index * 120)}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full mb-5">
                {item.symbol ? (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 h-24 flex items-center justify-center">
                    <img src={item.symbol} alt={item.symbolAlt ?? item.title} className="max-h-16 md:max-h-20 w-auto object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
