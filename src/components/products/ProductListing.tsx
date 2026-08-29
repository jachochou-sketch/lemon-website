'use client';

import { useSearchParams } from 'next/navigation';
import ProductFilter from '@/components/products/ProductFilter';
import ProductGrid from '@/components/products/ProductGrid';
import { products, productCategories, getProductsByCategory } from '@/data/products';

export default function ProductListing() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All Products';
  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <>
      <ProductFilter categories={productCategories} activeCategory={activeCategory} />

      <div className="mt-10">
        <ProductGrid
          products={filteredProducts}
          emptyMessage={`No products in "${activeCategory}" yet.`}
          emptyCTALabel="Contact Us for Custom Orders"
          emptyCTAHref="/contact"
        />
      </div>

      {filteredProducts.length > 0 && (
        <p className="text-center text-sm text-slate-500 mt-8">
          Showing {filteredProducts.length} of {products.length} products
          {activeCategory !== 'All Products' && ` in ${activeCategory}`}
        </p>
      )}
    </>
  );
}
