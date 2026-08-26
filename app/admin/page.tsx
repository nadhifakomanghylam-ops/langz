'use client';
import { DollarSign, ShoppingCart, Users, Package } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Penjualan', value: 'Rp 14.500.000', icon: DollarSign },
    { title: 'Total Order', value: '128', icon: ShoppingCart },
    { title: 'Produk Aktif', value: '45', icon: Package },
    { title: 'Total User', value: '312', icon: Users },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold border-l-4 border-neonPink pl-3">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-cardBg border border-white/10 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">{s.title}</p>
                <p className="text-lg font-bold text-neonPink mt-1">{s.value}</p>
              </div>
              <div className="p-3 bg-neonPink/10 text-neonPink rounded-xl">
                <Icon size={22} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-cardBg border border-white/10 p-5 rounded-2xl space-y-4">
        <h2 className="text-base font-bold">Kelola Data</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-neonPink text-white text-xs font-bold rounded-xl shadow-glowPink">
            + Tambah Produk
          </button>
          <button className="px-4 py-2 bg-neonPurple text-white text-xs font-bold rounded-xl shadow-glowPurple">
            + Tambah Rental
          </button>
          <button className="px-4 py-2 bg-white/10 border border-white/10 text-xs font-bold rounded-xl hover:bg-white/20">
            Pengaturan Payment
          </button>
        </div>
      </div>
    </div>
  );
}
