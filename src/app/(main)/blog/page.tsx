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
      <section className="bg-gradient-primary py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog &amp; Resources
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Practical insights on water purification, filtration technology,
              product development, quality control, and international market preparation.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Listing */}
      <section className="section-padding bg-slate-50">
        <Container>
          <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
            <BlogListing />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
