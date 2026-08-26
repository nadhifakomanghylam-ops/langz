import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  id: string;
  title: string;
  game: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
}

export default function ProductCard({ item }: { item: ProductProps }) {
  const discount = item.originalPrice ? item.originalPrice - item.price : 0;

  return (
    <Link href={`/products/${item.id}`} className="block">
      <div className="bg-cardBg border border-white/10 rounded-2xl overflow-hidden hover:border-neonPink/50 transition-all duration-300 hover:shadow-glowPink group">
        <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.badge && (
            <span className="absolute top-2 left-2 bg-neonPink text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md shadow-md">
              {item.badge}
            </span>
          )}
        </div>
        <div className="p-3">
          <p className="text-[10px] text-neonPurple font-semibold uppercase tracking-wider">{item.game}</p>
          <h3 className="text-sm font-bold text-white truncate">{item.title}</h3>
          
          <div className="mt-2 flex flex-col">
            {item.originalPrice && item.originalPrice > item.price && (
              <span className="text-[11px] text-gray-500 line-through">
                Rp {item.originalPrice.toLocaleString('id-ID')}
              </span>
            )}
            <span className="text-base font-extrabold text-neonPink">
              Rp {item.price.toLocaleString('id-ID')}
            </span>
            {discount > 0 && (
              <span className="text-[9px] text-green-400 font-medium">
                Hemat Rp {discount.toLocaleString('id-ID')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
