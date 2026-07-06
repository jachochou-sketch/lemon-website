import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Rough reading time estimate
  const readingTime = Math.max(1, Math.ceil(post.content.split(' ').length / 200));

  return (
    <Card hover padding="none" className="flex flex-col overflow-hidden">
      {/* Cover Image */}
      <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <svg className="w-16 h-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="primary">{post.category}</Badge>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readingTime} min read
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-100">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(post.publishedAt)}
          </span>
        </div>
      </div>
    </Card>
  );
}
