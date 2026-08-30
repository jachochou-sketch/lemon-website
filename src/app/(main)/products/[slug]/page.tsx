import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Check,
  Box,
  Package,
  Clock,
  ShoppingCart,
  Shield,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import InquiryButton from '@/components/products/InquiryButton';
import ProductGrid from '@/components/products/ProductGrid';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';

interface ProductDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: `${product.name} | Lemon Environmental Technology`,
      description: product.summary,
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(params.slug);

  return (
    <>
      {/* Breadcrumb + Header */}
      <section className="bg-gradient-primary pt-8 pb-16">
        <Container>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Image Gallery */}
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <Box className="w-24 h-24 text-white/20" />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.images.map((_, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center"
                    >
                      <Box className="w-8 h-8 text-white/20" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="accent" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-white/70 leading-relaxed mb-6">
                {product.summary}
              </p>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <ShoppingCart className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50">Min Order</div>
                    <div className="text-sm font-semibold text-white">{product.minOrder}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Package className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50">Supply Ability</div>
                    <div className="text-sm font-semibold text-white">{product.supplyAbility}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50">Delivery Time</div>
                    <div className="text-sm font-semibold text-white">{product.deliveryTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <div className="text-xs text-white/50">Certifications</div>
                    <div className="text-sm font-semibold text-white">
                      {product.certifications.join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              <InquiryButton productName={product.name} />
            </div>
          </div>
        </Container>
      </section>

      {/* Specifications + Description */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Product Description
              </h2>
              <div className="prose-custom">
                {product.description.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={i} className="text-xl font-bold text-slate-900 mt-8 mb-4">
                        {line.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (line.startsWith('### ')) {
                    return (
                      <h3 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-3">
                        {line.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (line.startsWith('- **')) {
                    const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                    if (match) {
                      return (
                        <div key={i} className="flex items-start gap-2 ml-4 mb-1 text-slate-600">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>{match[1]}</strong>: {match[2]}
                          </span>
                        </div>
                      );
                    }
                  }
                  if (line.trim() === '') return <div key={i} className="h-3" />;
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed mb-2">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Specifications Sidebar */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Technical Specifications
                </h3>
                <dl className="divide-y divide-slate-200">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-3 gap-4">
                      <dt className="text-sm text-slate-500">{spec.label}</dt>
                      <dd className="text-sm font-semibold text-slate-900 text-right">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-slate-50">
          <Container>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Related Products
              </h2>
              <p className="text-slate-600">
                More products in the {product.category} category
              </p>
            </div>
            <ProductGrid products={relatedProducts} />
          </Container>
        </section>
      )}
    </>
  );
}
