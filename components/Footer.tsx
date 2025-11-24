import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-white tracking-widest">MARANDA</h2>
            <p className="text-stone-400 font-light leading-relaxed max-w-xs">
              Üsküdar'ın tarihi dokusundan ilham alarak, modern yaşam alanlarınız için zamansız mobilyalar tasarlıyoruz.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
             <h4 className="text-white uppercase tracking-widest text-sm font-bold">İletişim</h4>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <MapPin className="text-gold-500 shrink-0" size={20} />
                 <span>Küplüce Mah. Mehmet Akif Ersoy Cad.<br/>Özbek Sok. No:2/A, 34676<br/>Üsküdar / İstanbul</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="text-gold-500 shrink-0" size={20} />
                 <span>+90 (216) 557 69 61</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="text-gold-500 shrink-0" size={20} />
                 <span>info@marandahome.com</span>
               </li>
             </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-white uppercase tracking-widest text-sm font-bold">Çalışma Saatleri</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <span>Pazartesi - Cuma</span>
              <span className="text-white">09:00 - 19:00</span>
              <span>Cumartesi</span>
              <span className="text-white">10:00 - 18:00</span>
              <span>Pazar</span>
              <span className="text-gold-500">Kapalı</span>
            </div>
            <div className="pt-4">
              <button className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span>@marandahome</span>
              </button>
            </div>
          </div>

        </div>
        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Maranda Mobilya. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};