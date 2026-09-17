import { Suspense } from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import ProductListing from '@/components/products/ProductListing';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore Lemon water purification products, including RO systems, filter cartridges, membrane elements, softeners, and custom ODM/OEM solutions.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="page-hero">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Product catalogue</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#102725] md:text-6xl">
              Water purification platforms and components
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Production-ready RO and UF systems, replacement filters, and custom
              development programs for private-label customers.
            </p>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="section-aqua section-padding">
        <Container>
          <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
            <ProductListing />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
