import React from 'react';

const WHA_LINK = "https://wa.me/558421367575?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20assist%C3%AAncia%20t%C3%A9cnica.";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1000px] mx-auto px-4 md:px-10 text-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-6">
          Seu equipamento parou? <span className="text-brand-orange">Nós resolvemos.</span>
        </h2>
        
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Não perca seus alimentos nem passe calor. Nossa equipe está pronta para realizar o conserto no seu endereço com agilidade e transparência.
        </p>

        {/* Card Gigante de Contato */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border-[4px] border-brand-blue relative overflow-hidden">
          
          {/* Decoração de fundo no card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-brand-blue mb-8">Fale direto com um técnico especialista</h3>
            
            <a 
              href={WHA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full md:w-auto bg-[#128C7E] hover:bg-[#075E54] text-white font-extrabold text-xl py-5 px-12 rounded-full shadow-lg transition-all hover:scale-105 mb-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Chamar no WhatsApp
            </a>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-brand-orange">📞</span> +55 (84) 2136-7575
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-orange">🕒</span> Atendimento Rápido
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;