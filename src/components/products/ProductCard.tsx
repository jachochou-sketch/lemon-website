import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Box } from 'lucide-react';
import Card from '@/components/ui/Card';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProductCard({ product, imageSrc, imageAlt }: ProductCardProps) {
  const serviceOptions = product.serviceOptions ?? ['OEM', 'ODM'];
  const displayImage = imageSrc ?? product.images[0];

  return (
    <Card hover padding="none" className="group flex h-full flex-col overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden bg-[#eef2ef]">
        {(imageSrc || product.imageAvailable) && displayImage ? (
          <Image
            src={displayImage}
            alt={imageAlt ?? `${product.name}${product.model ? ` (${product.model})` : ''}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />
        ) : (
          <Box className="w-16 h-16 text-slate-300" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{product.category}</span>
          <span className="text-[10px] font-medium tracking-[0.12em] text-slate-400">{serviceOptions.join(' / ')}</span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-[#102725]">
          {product.name}
        </h3>

        {product.model && (
          <p className="mb-3 text-xs font-medium tracking-wide text-primary">
            Model: {product.model}
          </p>
        )}

        <p className="mb-5 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">
          {product.summary}
        </p>

        {/* Quick specs */}
        <div className="mb-5 grid grid-cols-2 border-y border-slate-900/10 text-[11px] text-slate-500">
          <span className="flex min-w-0 flex-col gap-1 py-3 pr-3">
            <span className="font-medium uppercase tracking-[0.1em] text-slate-400">MOQ</span>
            <span className="truncate text-slate-700" title={product.minOrder}>{product.minOrder}</span>
          </span>
          <span className="flex min-w-0 flex-col gap-1 border-l border-slate-900/10 py-3 pl-3">
            <span className="font-medium uppercase tracking-[0.1em] text-slate-400">Lead time</span>
            <span className="truncate text-slate-700" title={product.deliveryTime}>{product.deliveryTime}</span>
          </span>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </Card>
  );
}
