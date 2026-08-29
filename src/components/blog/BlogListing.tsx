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
    </>
  );
}
