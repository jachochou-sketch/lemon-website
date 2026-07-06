import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductFilter from '@/components/products/ProductFilter';
import ProductGrid from '@/components/products/ProductGrid';
import { products, productCategories, getProductsByCategory } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our full range of precision-manufactured industrial components: CNC machined parts, aluminum extrusions, stainless steel castings, injection molding, and more.',
};

interface ProductsPageProps {
  searchParams: { category?: string };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const activeCategory = searchParams.category || 'All Products';
  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-primary py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              We are an <strong className="text-white">R&D-driven ODM manufacturer</strong>,
              specializing in customized water purification solutions — from concept
              design to finished product, tailored to your brand and market needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="section-padding bg-slate-50">
        <Container>
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
        </Container>
      </section>
    </>
  );
}
