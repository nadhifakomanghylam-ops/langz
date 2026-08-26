'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Grid, Clock, Bell, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Beranda', href: '/', icon: Home },
    { label: 'Komunitas', href: '/community', icon: Users },
    { label: 'Produk', href: '/products', icon: Grid },
    { label: 'Rental', href: '/rental', icon: Clock },
    { label: 'Notif', href: '/notifications', icon: Bell },
    { label: 'Profil', href: '/profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-darkBg/90 backdrop-blur-md border-t border-white/10 px-2 py-2 md:hidden">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-[10px] transition-all duration-300 ${
                isActive ? 'text-neonPink font-bold' : 'text-gray-400'
              }`}
            >
              <div className={`p-1.5 rounded-xl ${isActive ? 'shadow-glowPink bg-neonPink/10' : ''}`}>
                <Icon size={20} className={isActive ? 'stroke-neonPink' : 'stroke-gray-400'} />
              </div>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
