import React, { useState } from 'react';
import logoUrl from './assets/logoho.svg'; 

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#quem-somos', label: 'Missão e História' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato', cta: true },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-brand-blue text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-4 md:py-5">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="transition-transform hover:scale-105">
            <img
              src={logoUrl}
              alt="PJ Soluções em Refrigeração"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-brand-orange focus:outline-none"
            aria-label="Alternar menu de navegação"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-3 lg:gap-4">
              {navLinks.map((link) => {
                const isCta = Boolean(link.cta);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={
                        isCta
                          ? 'contact-pulse inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-sm font-extrabold shadow-xl hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300'
                          : 'inline-flex items-center px-3.5 py-2 rounded-full text-white hover:text-brand-orange hover:bg-white/10 transition-all duration-300 text-sm font-semibold'
                      }
                    >
                      {isCta && <span className="w-2 h-2 rounded-full bg-white/90"></span>}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden mt-4`}>
          <ul className="flex flex-col w-full gap-2 border-t border-white/20 pt-4">
            {navLinks.map((link) => {
              const isCta = Boolean(link.cta);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      isCta
                        ? 'contact-pulse block w-full text-center px-4 py-3 rounded-xl bg-brand-orange text-white font-extrabold shadow-lg'
                        : 'block w-full text-center px-4 py-2.5 rounded-xl text-white hover:text-brand-orange hover:bg-white/10 transition-colors text-sm font-semibold'
                    }
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
