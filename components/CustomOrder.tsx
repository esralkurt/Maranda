import React, { useState } from 'react';
import { Ruler, CheckCircle, Info } from 'lucide-react';

export const CustomOrder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: 'wardrobe', // wardrobe, bookshelf, tv_unit
    width: '',
    height: '',
    depth: '',
    material: 'mdf_lake',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateEstimate = () => {
    // Dummy calculation logic
    const w = Number(formData.width) || 0;
    const h = Number(formData.height) || 0;
    const area = (w * h) / 10000; // cm to m2
    const basePrice = 8500; // TL per m2 roughly
    return (area * basePrice).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="pt-24 pb-20 bg-stone-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-stone-800 mb-4">Özel Ölçü Sipariş</h2>
          <p className="text-stone-600">Mekanınıza tam uyum sağlayan mobilyalar için ölçülerinizi girin.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-stone-900 text-white' : 'bg-stone-300 text-stone-500'}`}>1</div>
            <div className={`w-16 h-1 bg-stone-300 ${step >= 2 ? 'bg-stone-900' : ''}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-stone-900 text-white' : 'bg-stone-300 text-stone-500'}`}>2</div>
            <div className={`w-16 h-1 bg-stone-300 ${step >= 3 ? 'bg-stone-900' : ''}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-stone-900 text-white' : 'bg-stone-300 text-stone-500'}`}><CheckCircle size={20}/></div>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-2xl font-serif text-stone-800 border-b pb-4">Mobilya Türü & Ölçüler</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-stone-600 text-sm font-bold uppercase mb-2">Mobilya Türü</label>
                  <select 
                    name="type" 
                    value={formData.type} 
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-stone-500"
                  >
                    <option value="wardrobe">Gardırop / Dolap</option>
                    <option value="bookshelf">Kitaplık</option>
                    <option value="tv_unit">TV Ünitesi</option>
                    <option value="kitchen">Mutfak Dolabı</option>
                    <option value="bathroom">Banyo Dolabı</option>
                  </select>
                </div>
                
                <div className="bg-stone-50 p-6 rounded border border-stone-100 flex items-start space-x-3">
                   <Info className="text-stone-400 shrink-0 mt-1" size={20} />
                   <p className="text-sm text-stone-500">
                     Lütfen ölçüleri santimetre (cm) cinsinden giriniz. Süpürgelik payı için Asistan'a danışabilirsiniz.
                   </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div>
                    <label className="block text-stone-600 text-sm font-bold uppercase mb-2">Genişlik (cm)</label>
                    <div className="relative">
                      <input 
                        type="number" name="width" value={formData.width} onChange={handleChange} placeholder="Örn: 240"
                        className="w-full border-b-2 border-stone-200 py-3 text-xl focus:outline-none focus:border-stone-800 bg-transparent transition-colors"
                      />
                      <Ruler className="absolute right-0 top-3 text-stone-400" size={20}/>
                    </div>
                 </div>
                 <div>
                    <label className="block text-stone-600 text-sm font-bold uppercase mb-2">Yükseklik (cm)</label>
                    <div className="relative">
                      <input 
                        type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Örn: 250"
                        className="w-full border-b-2 border-stone-200 py-3 text-xl focus:outline-none focus:border-stone-800 bg-transparent transition-colors"
                      />
                       <Ruler className="absolute right-0 top-3 text-stone-400" size={20}/>
                    </div>
                 </div>
                 <div>
                    <label className="block text-stone-600 text-sm font-bold uppercase mb-2">Derinlik (cm)</label>
                    <div className="relative">
                      <input 
                        type="number" name="depth" value={formData.depth} onChange={handleChange} placeholder="Örn: 60"
                        className="w-full border-b-2 border-stone-200 py-3 text-xl focus:outline-none focus:border-stone-800 bg-transparent transition-colors"
                      />
                       <Ruler className="absolute right-0 top-3 text-stone-400" size={20}/>
                    </div>
                 </div>
              </div>

              <div className="flex justify-end pt-6">
                <button 
                  onClick={() => setStep(2)}
                  className="bg-stone-900 text-white px-10 py-3 uppercase tracking-wider text-sm font-bold hover:bg-stone-700 transition-colors"
                >
                  Devam Et
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
             <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
                <h3 className="text-2xl font-serif text-stone-800 border-b pb-4">Malzeme & Detaylar</h3>
                
                <div>
                  <label className="block text-stone-600 text-sm font-bold uppercase mb-2">Malzeme Tercihi</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      {id: 'mdf_lake', label: 'MDF Lake'},
                      {id: 'masif', label: 'Doğal Masif'},
                      {id: 'kaplama', label: 'Ahşap Kaplama'},
                      {id: 'lam', label: 'High Gloss'},
                    ].map((opt) => (
                      <div 
                        key={opt.id}
                        onClick={() => setFormData({...formData, material: opt.id})}
                        className={`cursor-pointer border p-4 text-center transition-all ${formData.material === opt.id ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-400'}`}
                      >
                        <span className="text-sm font-medium text-stone-700">{opt.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                   <label className="block text-stone-600 text-sm font-bold uppercase mb-2">Ek Notlar</label>
                   <textarea 
                     name="notes" value={formData.notes} onChange={handleChange}
                     rows={4}
                     className="w-full bg-stone-50 border border-stone-200 p-4 focus:outline-none focus:border-stone-500"
                     placeholder="Renk tercihi, kapak modeli veya özel istekleriniz..."
                   ></textarea>
                </div>

                {/* Estimate Box */}
                <div className="bg-stone-900 text-stone-50 p-6 flex flex-col md:flex-row justify-between items-center rounded-sm">
                   <div>
                     <p className="text-sm text-stone-400 uppercase tracking-widest mb-1">Tahmini Başlangıç Fiyatı</p>
                     <p className="text-3xl font-serif">{calculateEstimate()}</p>
                   </div>
                   <div className="mt-4 md:mt-0 text-right">
                     <p className="text-xs text-stone-500 max-w-xs">*Bu fiyat sadece malzeme ve ölçü bazlı bir tahmindir. Kesin fiyat için ekibimiz sizinle iletişime geçecektir.</p>
                   </div>
                </div>

                <div className="flex justify-between pt-6">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-stone-500 px-6 py-3 uppercase tracking-wider text-sm font-bold hover:text-stone-800 transition-colors"
                  >
                    Geri Dön
                  </button>
                  <button 
                    type="submit"
                    className="bg-gold-500 text-white px-10 py-3 uppercase tracking-wider text-sm font-bold hover:bg-gold-600 transition-colors shadow-lg"
                  >
                    Teklif İste
                  </button>
                </div>
             </form>
          )}

          {step === 3 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-serif text-stone-800 mb-4">Talebiniz Alındı</h3>
              <p className="text-lg text-stone-600 max-w-lg mx-auto mb-8">
                Teşekkür ederiz. Girdiğiniz ölçüler ve tercihler tasarım ekibimize iletildi. En geç 24 saat içinde size özel bir teklif ve çizim taslağı ile dönüş yapacağız.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="border border-stone-300 text-stone-600 px-8 py-3 uppercase tracking-wider text-sm font-bold hover:bg-stone-50 transition-colors"
              >
                Ana Sayfaya Dön
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};