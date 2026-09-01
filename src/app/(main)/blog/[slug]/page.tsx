import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Clock, Tag, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { blogPosts, getBlogPostBySlug, getRecentPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.coverImage, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(params.slug);
  const readingTime = Math.max(1, Math.ceil(post.content.split(' ').length / 200));

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-primary pt-8 pb-16">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="accent">{post.category}</Badge>
              <span className="text-white/60 text-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {readingTime} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </span>
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                {post.tags.join(', ')}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Cover */}
      <section className="relative z-10 -mt-8">
        <Container>
          <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-900/20">
            <Image
              src={post.coverImage}
              alt={`${post.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose-custom">
                {post.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={i} id={line.replace('## ', '').toLowerCase().replace(/\s+/g, '-')}>
                        {line.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (line.startsWith('### ')) {
                    return (
                      <h3 key={i}>{line.replace('### ', '')}</h3>
                    );
                  }
                  if (line.startsWith('- [ ]') || line.startsWith('- [x]') || line.startsWith('- [')) {
                    const checked = line.startsWith('- [x]');
                    const text = line.replace(/- \[[ x]\] /, '');
                    return (
                      <div key={i} className="flex items-start gap-2 ml-2">
                        <span className={`mt-0.5 text-sm ${checked ? 'text-emerald-500' : 'text-slate-300'}`}>
                          {checked ? '☑' : '☐'}
                        </span>
                        <span className={checked ? 'text-slate-600' : 'text-slate-600'}>{text}</span>
                      </div>
                    );
                  }
                  if (line.startsWith('| ')) {
                    // Simple table rendering
                    const cells = line.split('|').filter(c => c.trim());
                    const isHeader = cells.some(c => c.trim().match(/^-+$/));
                    if (isHeader) return <hr key={i} className="my-0 border-0" />;
                    return (
                      <div key={i} className="flex gap-4 py-1 border-b border-slate-100">
                        {cells.map((cell, j) => (
                          <span key={j} className="flex-1 text-sm text-slate-600">
                            {cell.trim().replace(/\*\*/g, '')}
                          </span>
                        ))}
                      </div>
                    );
                  }
                  if (line.trim() === '') return <div key={i} className="h-3" />;
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed mb-2">
                      {line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                         .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
                         .split(/(<strong>.*?<\/strong>|<a.*?<\/a>)/)
                         .map((part, j) => {
                           if (part.startsWith('<strong>')) {
                             return <strong key={j} className="text-slate-900">{part.replace(/<\/?strong>/g, '')}</strong>;
                           }
                           if (part.startsWith('<a ')) {
                             const match = part.match(/href="([^"]+)"/);
                             const text = part.replace(/<[^>]+>/g, '');
                             return <a key={j} href={match?.[1]} className="text-primary hover:underline font-medium">{text}</a>;
                           }
                           return part;
                         })}
                    </p>
                  );
                })}
              </article>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-200">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Posts */}
              <Card padding="md">
                <h3 className="font-bold text-slate-900 mb-4">Recent Posts</h3>
                <div className="space-y-3">
                  {recentPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
                      <div>
                        <p className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors line-clamp-2">
                          {rp.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {formatDate(rp.publishedAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Categories */}
              <Card padding="md">
                <h3 className="font-bold text-slate-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Industry News', 'Case Studies'].map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog?category=${encodeURIComponent(cat)}`}
                      className="flex items-center justify-between text-sm text-slate-600 hover:text-primary transition-colors py-1"
                    >
                      {cat}
                      <span className="text-slate-400 text-xs">
                        ({blogPosts.filter(p => p.category === cat).length})
                      </span>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
