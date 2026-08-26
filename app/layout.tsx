import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BottomNav from '@/components/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Langz Store - Marketplace Gaming Premium',
  description: 'Jual, Beli & Rental Akun Game Premium',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.className} bg-darkBg text-white antialiased pb-20 md:pb-0`}>
        <main className="min-h-screen">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
