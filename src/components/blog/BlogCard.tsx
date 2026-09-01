import Link from 'next/link';
import Image from 'next/image';
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
    <Card hover padding="none" className="group flex flex-col overflow-hidden">
      {/* Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={post.coverImage}
          alt={`${post.title} cover`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
