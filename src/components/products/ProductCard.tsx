import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Box } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const serviceOptions = product.serviceOptions ?? ['OEM', 'ODM'];

  return (
    <Card hover padding="none" className="group flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden">
        {product.imageAvailable && product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={`${product.name}${product.model ? ` (${product.model})` : ''}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Box className="w-16 h-16 text-slate-300" />
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="primary">{product.category}</Badge>
          {serviceOptions.map((option) => (
            <Badge key={option} variant="success">
              {option}
            </Badge>
          ))}
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {product.model && (
          <p className="text-xs font-semibold tracking-wide text-primary mb-2">
            Model: {product.model}
          </p>
        )}

        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-1">
          {product.summary}
        </p>

        {/* Quick specs */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <span className="font-semibold text-slate-700">MOQ:</span> {product.minOrder}
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="font-semibold text-slate-700">Lead:</span> {product.deliveryTime}
          </span>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors group mt-auto"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
