'use client';
import { Search, ShieldCheck, Zap, MessageCircle, ShoppingBag, CreditCard } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const categories = ['Free Fire', 'Mobile Legends', 'PUBG Mobile', 'eFootball', 'Roblox', 'Game Lainnya'];

  const sampleProducts = [
    {
      id: '1',
      title: 'AKUN FF OLD S2 RARE',
      game: 'Free Fire',
      price: 1200000,
      originalPrice: 1400000,
      badge: 'HOT',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '2',
      title: 'MLBB MYTHIC GLORY FULL SKIN',
      game: 'Mobile Legends',
      price: 850000,
      originalPrice: 950000,
      badge: 'TERBARU',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      <div className="relative rounded-3xl p-6 bg-gradient-to-r from-neonPurple/30 to-neonPink/20 border border-white/10 overflow-hidden text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-wide">
          LANGZ <span className="text-neonPink">STORE</span>
        </h1>
        <p className="text-xs md:text-sm text-gray-300 mt-1">
          Jual, Beli & Rental Akun Game Premium Terpercaya
        </p>

        <div className="mt-5 relative max-w-xl">
          <input
            type="text"
            placeholder="Cari akun game, ID, atau kategori..."
            className="w-full bg-darkBg/80 border border-white/20 rounded-xl px-4 py-3 pl-11 text-sm text-white focus:outline-none focus:border-neonPink transition-all"
          />
          <Search className="absolute left-3.5 top-3.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="whitespace-nowrap px-4 py-2 bg-cardBg border border-white/10 rounded-xl text-xs font-semibold hover:border-neonPink hover:text-neonPink transition-all"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {[
          { label: 'Top Up', icon: Zap },
          { label: 'WA Group', icon: MessageCircle },
          { label: 'RekBer', icon: ShieldCheck },
          { label: 'Stok Akun', icon: ShoppingBag },
          { label: 'Jual Akun', icon: CreditCard },
          { label: 'Nomor Resmi', icon: ShieldCheck },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-cardBg border border-white/10 p-3 rounded-2xl flex flex-col items-center gap-2 hover:border-neonPink/40 cursor-pointer transition-all">
              <div className="p-2 bg-neonPink/10 text-neonPink rounded-xl">
                <Icon size={20} />
              </div>
              <span className="text-[11px] font-medium text-gray-200">{item.label}</span>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold border-l-4 border-neonPink pl-3">Produk Terlaris</h2>
          <span className="text-xs text-neonPink cursor-pointer">Lihat Semua</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sampleProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
