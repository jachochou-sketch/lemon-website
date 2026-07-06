import { Product } from '@/types';
import ProductCard from '@/components/products/ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  emptyCTALabel?: string;
  emptyCTAHref?: string;
}

export default function ProductGrid({
  products,
  emptyMessage = 'No products found in this category.',
  emptyCTALabel = 'View All Products',
  emptyCTAHref = '/products',
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{emptyMessage}</h3>
        <p className="text-slate-500 mb-6">
          Contact us for custom orders — we manufacture to your specifications.
        </p>
        <a
          href={emptyCTAHref}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-colors"
        >
          {emptyCTALabel}
        </a>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
