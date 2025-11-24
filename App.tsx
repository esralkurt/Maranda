import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Showcase } from './components/Showcase';
import { CustomOrder } from './components/CustomOrder';
import { AIConsultant } from './components/AIConsultant';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Simple state-based routing for this SPA
  const [view, setView] = useState('home');

  const renderView = () => {
    switch(view) {
      case 'home':
        return (
          <>
            <Hero setView={setView} />
            <Showcase />
            {/* Simple About Section */}
            <section className="py-24 bg-stone-100 flex items-center justify-center">
              <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl font-serif mb-6 text-stone-800">Üsküdar'da Bir Zanaat Geleneği</h2>
                <p className="text-lg text-stone-600 leading-relaxed font-light">
                  Maranda, ahşabın sıcaklığını modern çizgilerle buluşturuyor. 
                  Üsküdar'ın tarihi atmosferinde, her bir parçayı size özel olarak tasarlıyor ve üretiyoruz.
                  Standart ölçülere sıkışıp kalmayın, yaşam alanınızı özgürleştirin.
                </p>
              </div>
            </section>
          </>
        );
      case 'custom':
        return <CustomOrder />;
      case 'consultant':
        return <AIConsultant />;
      case 'contact':
        return (
            <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
               <h2 className="text-4xl font-serif text-center mb-12">Bize Ulaşın</h2>
               <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto space-y-8">
                 <div className="text-center space-y-2">
                    <p className="text-xl font-serif text-stone-800">Maranda Home</p>
                    <p className="text-stone-600">Küplüce Mahallesi Mehmet Akif Ersoy Caddesi,<br/>Özbek Sokağı No:2/A, 34676 Üsküdar/İstanbul</p>
                    <p className="text-stone-500 text-sm mt-4">Atölyemizi ziyaret edebilir veya bir kahvemizi içebilirsiniz.</p>
                 </div>
                 
                 <div className="w-full h-[400px] bg-stone-100 relative">
                   <iframe 
                      src="https://maps.google.com/maps?width=100%25&height=600&hl=tr&q=K%C3%BCpl%C3%BCce%20Mahallesi%20Mehmet%20Akif%20Ersoy%20Caddesi%2C%20%C3%96zbek%20Soka%C4%9F%C4%B1%20No%3A2%2FA%2C%2034676%20%C3%9Csk%C3%BCdar+(Maranda%20Home)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen 
                      loading="lazy"
                      title="Maranda Home Konum"
                   ></iframe>
                 </div>
               </div>
            </div>
        );
      default:
        return <Hero setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
      <Navigation currentView={view} setView={setView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;