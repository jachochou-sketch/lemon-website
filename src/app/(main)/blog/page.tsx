import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import BlogGrid from '@/components/blog/BlogGrid';
import { blogPosts, blogCategories, getBlogPostsByCategory } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Industry insights, manufacturing guides, case studies, and sourcing tips from East Manufacturing\'s engineering and quality teams.',
};

interface BlogPageProps {
  searchParams: { category?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const activeCategory = searchParams.category || 'All Posts';
  const filteredPosts = getBlogPostsByCategory(activeCategory);

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
              Expert insights on manufacturing, quality control, material selection,
              and sourcing strategies — written by our engineers and industry specialists.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Listing */}
      <section className="section-padding bg-slate-50">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((category) => (
              <a
                key={category}
                href={
                  category === 'All Posts'
                    ? '/blog'
                    : `/blog?category=${encodeURIComponent(category)}`
                }
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  category === activeCategory
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {category}
              </a>
            ))}
          </div>

          <BlogGrid
            posts={filteredPosts}
            emptyMessage={`No articles in "${activeCategory}" yet.`}
          />

          {filteredPosts.length > 0 && (
            <p className="text-center text-sm text-slate-500 mt-8">
              Showing {filteredPosts.length} of {blogPosts.length} articles
              {activeCategory !== 'All Posts' && ` in ${activeCategory}`}
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
