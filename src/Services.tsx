import React from 'react';

const services = [
  {
    title: "Linha Branca",
    description: "Manutenção completa em geladeiras, freezers, frigobares e máquinas de lavar de todas as marcas.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M5 8h14"/><path d="M12 15h.01"/></svg>
  },
  {
    title: "Ar Condicionado",
    description: "Instalação, limpeza, higienização e conserto de ar condicionado Split e Janela.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><rect x="3" y="6" width="18" height="10" rx="2"/><path d="M7 10h10"/><path d="M8 16v2"/><path d="M16 16v2"/><path d="M12 16v4"/><path d="M10 22h4"/></svg>
  },
  {
    title: "Manutenção Preventiva",
    description: "Evite dores de cabeça futuras com nossa revisão periódica em seus equipamentos comerciais e residenciais.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-brand-blue scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        
        {/* Título com cores invertidas (Branco) */}
        <div data-reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Cards estilo "Glass/Dark Mode" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index} 
              data-reveal
              data-reveal-delay={String(90 + index * 120)}
              className="bg-white/5 p-10 rounded-2xl shadow-lg border border-white/10 hover:bg-white/10 hover:border-brand-orange/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Círculo do Ícone */}
              <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Textos Claros */}
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
