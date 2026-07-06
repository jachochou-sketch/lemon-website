import Link from 'next/link';
import { ArrowRight, Box } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card hover padding="none" className="flex flex-col overflow-hidden">
      {/* Image */}
      <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <Box className="w-16 h-16 text-slate-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="primary">{product.category}</Badge>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

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
