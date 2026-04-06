import React, { useState } from 'react';
import logoUrl from './assets/logoho.svg'; 

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-lg relative z-50">
      
      {/* CAMADA SUPERIOR (Branca) - Busca e Zap Gigante */}
      <div className="bg-white border-b-[4px] border-brand-orange py-4 md:py-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10 gap-5 md:gap-0">
          
          {/* Logo Original */}
          <div className="flex items-center">
            <a href="/" className="transition-transform hover:scale-105">
              <img 
                src={logoUrl} 
                alt="PJ Soluções em Refrigeração" 
                className="h-10 md:h-14 w-auto object-contain" 
              />
            </a>
          </div>

         

          {/* Canto Direito - Botão do WhatsApp Gigante */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://wa.me/558421367575" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 font-extrabold bg-[#25D366] text-white hover:bg-green-600 transition-all px-8 py-3.5 rounded-full shadow-lg text-lg hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Fazer Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* CAMADA INFERIOR (Azul) - Navegação */}
      <div className="bg-brand-blue text-white">
        <div className="max-w-[1440px] mx-auto">
          
          <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-blue-800">
            <span className="font-bold text-sm tracking-widest uppercase">Menu de Navegação</span>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-brand-orange focus:outline-none">
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>

          <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center py-2 md:py-3 text-[16px] md:text-[17px] font-bold`}>
            <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-8 lg:gap-12 w-full md:w-auto px-4 md:px-0 py-4 md:py-0">
              
              <li className="relative group w-full md:w-auto text-center md:text-left">
                <button className="w-full md:w-auto flex justify-center md:justify-start items-center gap-1.5 hover:text-brand-orange transition-colors py-2 md:py-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  Produtos <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <ul className="md:absolute static left-0 top-full mt-1 bg-white text-brand-blue w-full md:w-64 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-brand-orange z-50 h-0 md:h-auto overflow-hidden group-hover:h-auto">
                  <li><a href="#" className="block px-6 py-3.5 hover:bg-gray-50 hover:text-brand-orange transition-colors text-base font-semibold">Geladeiras</a></li>
                  <li><a href="#" className="block px-6 py-3.5 hover:bg-gray-50 hover:text-brand-orange transition-colors text-base font-semibold">Freezers</a></li>
                  <li><a href="#" className="block px-6 py-3.5 hover:bg-gray-50 hover:text-brand-orange transition-colors text-base font-semibold">Máquinas de Lavar</a></li>
                </ul>
              </li>

              <li className="relative group w-full md:w-auto text-center md:text-left">
                <button className="w-full md:w-auto flex justify-center md:justify-start items-center gap-1.5 hover:text-brand-orange transition-colors py-2 md:py-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  Serviços <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <ul className="md:absolute static left-0 top-full mt-1 bg-white text-brand-blue w-full md:w-64 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-brand-orange z-50 h-0 md:h-auto overflow-hidden group-hover:h-auto">
                  <li><a href="#" className="block px-6 py-3.5 hover:bg-gray-50 hover:text-brand-orange transition-colors text-base font-semibold">Manutenção Preventiva</a></li>
                  <li><a href="#" className="block px-6 py-3.5 hover:bg-gray-50 hover:text-brand-orange transition-colors text-base font-semibold">Instalação</a></li>
                </ul>
              </li>

              <li className="w-full md:w-auto text-center md:text-left"><a href="#" className="block w-full md:inline hover:text-brand-orange transition-colors py-2 md:py-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Peças e Acessórios</a></li>
              <li className="w-full md:w-auto text-center md:text-left"><a href="#" className="block w-full md:inline hover:text-brand-orange transition-colors py-2 md:py-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Garantia Estendida</a></li>
              <li className="w-full md:w-auto text-center md:text-left">
                <a 
                  href="#quem-somos" 
                  className="block w-full md:inline hover:text-brand-orange transition-colors py-2 md:py-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Quem Somos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;