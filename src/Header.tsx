import React, { useState } from 'react';
import logoUrl from './assets/logoho.svg'; 
import seloEletro from './assets/seloeletrolux.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-lg relative z-50">
      
      {/* CAMADA SUPERIOR (Branca) - Busca e Contato */}
      <div className="bg-white border-b-[4px] border-brand-orange py-4 md:py-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10 gap-5 md:gap-0">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="transition-transform hover:scale-105">
              <img src={logoUrl} alt="JF Soluções em Refrigeração" className="h-12 md:h-16 w-auto object-contain" />
            </a>
          </div>

          {/* Área de Busca (Agora com Borda Azul Sólida - Impossível de não ver) */}
          <div className="relative flex items-center w-full md:w-auto md:min-w-[450px]">
            <input 
              type="text" 
              placeholder="O que você está procurando?" 
              className="bg-white text-brand-blue w-full px-6 py-3.5 rounded-full text-[15px] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange border-2 border-brand-blue shadow-sm transition-all"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-brand-blue hover:bg-blue-900 transition-colors rounded-r-full flex items-center justify-center px-7 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </div>

          {/* Canto Direito - Contato Azul, Insta e Selo */}
          <div className="flex items-center gap-6 text-sm">
            
            {/* Botão de Contato Azul Padrão */}
            <a href="#" className="hidden lg:flex font-bold bg-brand-blue text-white hover:bg-blue-900 transition-colors px-6 py-2.5 rounded-full shadow-md text-base">
              Contato
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-blue-900 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            
            {/* Selo Electrolux */}
            <div className="flex items-center overflow-hidden">
                <img src={seloEletro} alt="Selo Electrolux Autorizada" className="h-12 md:h-16 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* CAMADA INFERIOR (Azul) - Navegação */}
      <div className="bg-brand-blue text-white">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Menu Mobile Toggle */}
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
              
              {/* Produtos */}
              <li className="relative group w-full md:w-auto text-center md:text-left">
                <button className="w-full md:w-auto flex justify-center md:justify-start items-center gap-1.5 hover:text-brand-orange transition-colors py-2 md:py-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  Produtos <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <ul className="md:absolute static left-0 top-full mt-1 bg-white text-brand-blue w-full md:w-64 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 border-brand-orange z-50 h-0 md:h-auto overflow-hidden group-hover:h-auto">
                  <li><a href="#" className="block px-6 py-3.5 hover:bg-gray-50 hover:text-brand-orange transition-colors text-base font-semibold">Geladeiras</a></li>
                  <li><a href="#" className="block px-6 py-3.5 hover:bg-gray-50 hover:text-brand-orange transition-colors text-base font-semibold">Freezers</a></li>
                 </ul>
              </li>

              {/* Serviços */}
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
              <li className="w-full md:w-auto text-center md:text-left"><a href="#" className="block w-full md:inline hover:text-brand-orange transition-colors py-2 md:py-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:bottom-0 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Quem Somos</a></li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;