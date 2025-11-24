import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  setView: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/433/1920/1080" 
          alt="Luxury Furniture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-stone-50">
        <h2 className="text-sm md:text-lg uppercase tracking-[0.3em] mb-4 text-stone-200">
          Üsküdar İstanbul
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight">
          Eviniz İçin <span className="italic text-gold-400">Zamanın Ötesinde</span> Tasarımlar
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-stone-200">
          Maranda Home, hayallerinizdeki yaşam alanını oluşturmanız için özel ölçü mobilya üretimi ve iç mimari desteği sunar.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => setView('custom')}
            className="group bg-stone-50 text-stone-900 px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-gold-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            Ölçülerinizi Girin
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
             onClick={() => setView('consultant')}
             className="border border-stone-50 text-stone-50 px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-stone-900/50 transition-all duration-300"
          >
            AI Asistan ile Konuşun
          </button>
        </div>
      </div>
    </section>
  );
};