import Link from 'next/link';
import { BlogPost } from '@/types';
import BlogCard from '@/components/blog/BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  emptyMessage?: string;
}

export default function BlogGrid({
  posts,
  emptyMessage = 'No articles found in this category.',
}: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{emptyMessage}</h3>
        <p className="text-slate-500 mb-6">Check back soon for new content.</p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-colors"
        >
          View All Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
