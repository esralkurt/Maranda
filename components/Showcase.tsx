import React from 'react';

const products = [
  { id: 1060, title: "Modern Mutfak", category: "Mutfak" },
  { id: 1062, title: "Ahşap Konsol", category: "Salon" },
  { id: 1069, title: "Minimal Kitaplık", category: "Çalışma Odası" },
  { id: 1070, title: "Lake Gardırop", category: "Yatak Odası" },
  { id: 1078, title: "TV Ünitesi", category: "Salon" },
  { id: 1082, title: "Banyo Dolabı", category: "Banyo" },
];

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-2 block">Koleksiyonlarımız</span>
          <h2 className="text-4xl font-serif text-stone-800">Seçkin Tasarımlar</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                <img 
                  src={`https://picsum.photos/id/${item.id}/600/800`} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-300 flex items-center justify-center">
                 <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-white font-serif text-2xl">{item.title}</p>
                    <p className="text-stone-200 text-sm uppercase tracking-wider mt-2">{item.category}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <p className="text-stone-500 italic">Tüm ürünlerimiz %100 el işçiliği ile Üsküdar atölyemizde üretilmektedir.</p>
        </div>
      </div>
    </section>
  );
};