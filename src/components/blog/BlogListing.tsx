'use client';

import { useSearchParams } from 'next/navigation';
import BlogGrid from '@/components/blog/BlogGrid';
import { blogPosts, blogCategories, getBlogPostsByCategory } from '@/data/blog-posts';

export default function BlogListing() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All Posts';
  const filteredPosts = getBlogPostsByCategory(activeCategory);

  return (
    <>
      <div className="mb-10 flex flex-wrap border-b border-slate-900/15">
        {blogCategories.map((category) => (
          <a
            key={category}
            href={
              category === 'All Posts'
                ? '/blog'
                : `/blog?category=${encodeURIComponent(category)}`
            }
            className={`-mb-px border-b-2 px-5 py-3 text-sm font-medium transition-colors ${
              category === activeCategory
                ? 'border-primary text-primary'
                : 'border-transparent text-slate-500 hover:text-primary'
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
    </>
  );
}
