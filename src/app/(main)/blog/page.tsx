import { Suspense } from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import BlogListing from '@/components/blog/BlogListing';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Water purification insights, filtration guides, certification considerations, and practical ODM/OEM resources from Lemon Environmental Technology.',
};

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="page-hero">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Technical notes</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#102725] md:text-6xl">
              Water treatment knowledge for product teams
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Practical insights on water purification, filtration technology,
              product development, quality control, and international market preparation.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Listing */}
      <section className="section-padding bg-[#f7f8f4]">
        <Container>
          <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
            <BlogListing />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
