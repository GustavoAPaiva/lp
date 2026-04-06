import React from 'react';
import logoVerticalUrl from './assets/logover.svg'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021333] text-gray-300 border-t-[6px] border-brand-orange relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo Vertical e Sobre */}
          <div className="flex flex-col items-center md:items-start">
            {/* Altura aumentada (h-28) para compensar o formato vertical */}
            <img 
              src={logoVerticalUrl} 
              alt="PJ Soluções" 
              className="h-24 md:h-28 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-sm text-center md:text-left leading-relaxed">
              Assistência Técnica Especializada em Refrigeração. Atendimento rápido, peças originais e garantia no serviço para sua total tranquilidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="hover:text-brand-orange transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-brand-orange transition-colors">Nossos Serviços</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contatos */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-lg mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-sm text-center md:text-left">
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