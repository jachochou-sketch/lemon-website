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

      {/* Selection guidance */}
      <section className="border-b border-slate-900/10 bg-white section-padding">
        <Container>
          <p className="eyebrow">Choosing a starting point</p>
          <a href="/commercial-kitchen" className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-primary underline underline-offset-4">New: explore the commercial kitchen series <span aria-hidden="true">↗</span></a>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="border border-slate-900/10 bg-[#f7f8f4] p-6">
              <h2 className="text-base font-semibold text-[#102725]">RO systems</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Point-of-use drinking water with a membrane stage — common for
                kitchens, offices, and bottled-water alternatives.
              </p>
              <a href="/products?category=RO+Systems" className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                Browse RO systems
              </a>
            </div>
            <div className="border border-slate-900/10 bg-[#f7f8f4] p-6">
              <h2 className="text-base font-semibold text-[#102725]">UF systems</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                High-flow ultrafiltration for whole-house or utility use where
                treated water feeds taps and appliances.
              </p>
              <a href="/products?category=UF+Systems" className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                Browse UF systems
              </a>
            </div>
            <div className="border border-slate-900/10 bg-[#f7f8f4] p-6">
              <h2 className="text-base font-semibold text-[#102725]">OEM / ODM</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Private-label production on an existing platform or co-developed
                product programs. Configuration and branding agreed per project.
              </p>
              <a href="/oem-odm" className="mt-4 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                See OEM / ODM programs
              </a>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Replacement filters and components are listed under{' '}
            <a href="/products?category=Components" className="font-semibold text-primary underline-offset-4 hover:underline">
              Components &amp; Filters
            </a>
            . Not sure which fits your site? Review{' '}
            <a href="/applications" className="font-semibold text-primary underline-offset-4 hover:underline">
              installation examples
            </a>{' '}
            first.
          </p>
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
