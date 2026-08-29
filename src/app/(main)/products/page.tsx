import { Suspense } from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import ProductListing from '@/components/products/ProductListing';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our full range of precision-manufactured industrial components: CNC machined parts, aluminum extrusions, stainless steel castings, injection molding, and more.',
};

export default function ProductsPage() {
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
          <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
            <ProductListing />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
