import React from 'react';

const categories = [
  { 
    title: "Geladeiras", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="20" x="7" y="2" rx="2"/><path d="M7 10h10"/><path d="M10 6h.01"/><path d="M10 14h.01"/></svg> 
  },
  { 
    title: "Ar Condicionado", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="10" rx="2"/><path d="M7 10h10"/><path d="M8 16v2"/><path d="M16 16v2"/><path d="M12 16v4"/><path d="M10 22h4"/></svg> 
  },
  { 
    title: "Lavadoras", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6h.01"/><path d="M10 6h.01"/></svg> 
  },
  { 
    title: "Freezers", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/><path d="M10 5v5"/><path d="M14 5v5"/></svg> 
  },
  { 
    title: "Micro-ondas", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M18 5v14"/><path d="M6 10h6"/><path d="M6 14h6"/><path d="M15 9h.01"/><path d="M15 12h.01"/><path d="M15 15h.01"/></svg> 
  },
  { 
    title: "Peças", 
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> 
  },
];

const Categories: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">Nossos Produtos</h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((cat, index) => (
            <a 
              key={index} 
              href="#" 
              className="flex flex-col items-center justify-center w-[150px] md:w-[170px] p-6 bg-white rounded-2xl shadow-sm border-2 border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:border-brand-orange transition-all duration-300 group"
            >
              <div className="text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <span className="text-base font-bold text-brand-blue group-hover:text-brand-orange transition-colors text-center">
                {cat.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;