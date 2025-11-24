import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  setView: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-stone-900/95 text-stone-50 shadow-lg py-4' : 'bg-transparent text-stone-900 py-6'
  }`;

  const linkClass = (view: string) => `cursor-pointer hover:text-gold-400 transition-colors ${currentView === view ? 'text-gold-400 font-bold border-b border-gold-400' : ''}`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-3xl font-serif font-bold tracking-widest cursor-pointer"
          onClick={() => setView('home')}
        >
          MARANDA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 font-sans tracking-wide text-sm uppercase">
          <span className={linkClass('home')} onClick={() => setView('home')}>Koleksiyon</span>
          <span className={linkClass('custom')} onClick={() => setView('custom')}>Özel Sipariş</span>
          <span className={linkClass('consultant')} onClick={() => setView('consultant')}>Tasarım Asistanı</span>
          <span className={linkClass('contact')} onClick={() => setView('contact')}>İletişim</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-900 text-stone-50 flex flex-col items-center py-8 space-y-6 shadow-xl">
          <span className="text-lg uppercase tracking-widest" onClick={() => { setView('home'); setIsMobileMenuOpen(false); }}>Koleksiyon</span>
          <span className="text-lg uppercase tracking-widest" onClick={() => { setView('custom'); setIsMobileMenuOpen(false); }}>Özel Sipariş</span>
          <span className="text-lg uppercase tracking-widest" onClick={() => { setView('consultant'); setIsMobileMenuOpen(false); }}>Tasarım Asistanı</span>
          <span className="text-lg uppercase tracking-widest" onClick={() => { setView('contact'); setIsMobileMenuOpen(false); }}>İletişim</span>
        </div>
      )}
    </nav>
  );
};