import React from 'react';
import logoVerticalUrl from './assets/logover.svg'; 
import seloEletro from './assets/seloeletrolux.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021333] text-gray-300 border-t-[6px] border-brand-orange relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Coluna 1: Logo, Sobre e Selo Electrolux */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoVerticalUrl} 
              alt="PJ Soluções" 
              className="h-24 md:h-28 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-sm text-center md:text-left leading-relaxed mb-8">
              Assistência Técnica Especializada em Refrigeração. Atendimento rápido, peças originais e garantia no serviço para sua total tranquilidade.
            </p>
            
            {/* Selo Electrolux (com fundo leve para destacar no azul escuro) */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <img 
                  src={seloEletro} 
                  alt="Autorizada Electrolux" 
                  className="h-10 md:h-12 w-auto object-contain" 
                />
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="hover:text-brand-orange transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-brand-orange transition-colors">Nossos Serviços</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contatos, Insta e WhatsApp */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-lg mb-6">Fale Conosco</h4>
            
            <ul className="space-y-4 text-sm text-center md:text-left mb-8">
              <li className="flex items-center gap-3">
                <span className="text-brand-orange">📞</span> 
                <span>+55 (84) 2136-7575 | 2130-7598</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-orange">✉️</span> 
                <span>contato@pjsolucoesemrefrigeracao.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-left">
                <span className="text-brand-orange mt-1">🕒</span> 
                <span>Seg - Sex: 07:30h às 17:00h<br/>Sáb: 08:00h às 12:00h</span>
              </li>
            </ul>

            {/* Redes Sociais e Botão Zap */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-3.5 rounded-full hover:bg-brand-orange hover:text-white transition-all text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>

              {/* Botão WhatsApp (Tom de verde mais escuro e elegante) */}
              <a 
                href="https://wa.me/558421367575" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 font-bold bg-[#128C7E] text-white hover:bg-[#075E54] transition-all px-6 py-3.5 rounded-full shadow-lg text-sm hover:scale-105 w-full md:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Fale com um Técnico
              </a>
              
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#010b1f] py-4 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} PJ Soluções em Refrigeração. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;