import React, { useState } from 'react';
import logoUrl from './assets/logoho.svg'; 

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para fechar o menu mobile ao clicar num link
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 border-b-[4px] border-brand-orange">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center py-4">
          
          {/* Esquerda: Logo */}
          <div className="flex items-center">
            <a href="/" className="transition-transform hover:scale-105">
              <img 
                src={logoUrl} 
                alt="PJ Soluções em Refrigeração" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </a>
          </div>

          {/* Botão do Menu Mobile (Escondido no Desktop) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-brand-blue hover:text-brand-orange focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>

          {/* Centro e Direita: Navegação e Botão WhatsApp */}
          <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-white md:static md:w-auto md:flex flex-col md:flex-row items-center gap-6 md:gap-10 py-6 md:py-0 px-4 md:px-0 shadow-lg md:shadow-none border-b-4 md:border-none border-brand-orange transition-all`}>
            
            {/* Links Centrais */}
            <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-[16px] font-extrabold text-brand-blue w-full md:w-auto text-center">
              <li className="w-full md:w-auto">
                <a href="#produtos" onClick={closeMenu} className="block w-full md:inline hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:-bottom-1 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Produtos
                </a>
              </li>
              <li className="w-full md:w-auto">
                <a href="#quem-somos" onClick={closeMenu} className="block w-full md:inline hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:-bottom-1 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Quem Somos
                </a>
              </li>
              <li className="w-full md:w-auto">
                <a href="#contato" onClick={closeMenu} className="block w-full md:inline hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[3px] after:-bottom-1 after:left-0 after:bg-brand-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Contato
                </a>
              </li>
            </ul>

            {/* Direita: Botão Zap */}
            <div className="w-full md:w-auto mt-2 md:mt-0 flex justify-center">
              <a 
                href="https://wa.me/558421367575" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 font-extrabold bg-[#25D366] text-white hover:bg-green-600 transition-all px-6 py-3 rounded-full shadow-md text-[15px] hover:scale-105 w-full md:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Orçamento
              </a>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;