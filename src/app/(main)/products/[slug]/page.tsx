import type { Metadata } from 'next';
import Image from 'next/image';
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
      <section className="border-b border-slate-900/10 bg-[#eef2ea] pb-16 pt-8">
        <Container>
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-[4/3] overflow-hidden border border-slate-900/10 bg-white">
                {product.imageAvailable && product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={`${product.name}${product.model ? ` (${product.model})` : ''}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Box className="w-24 h-24 text-primary/20" />
                  </div>
                )}
              </div>
              {product.imageAvailable && product.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.images.map((image, i) => (
                    <div
                      key={i}
                      className="relative w-20 h-20 rounded-lg bg-white overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${i + 1}`}
                        fill
                        sizes="80px"
                        className="object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="primary" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="mb-4 text-3xl font-semibold text-[#102725] md:text-5xl">
                {product.name}
              </h1>
              {product.model && (
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Model {product.model}
                </p>
              )}
              <p className="mb-7 leading-7 text-slate-600">
                {product.summary}
              </p>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 border border-slate-900/10 bg-white px-4 py-3">
                  <ShoppingCart className="w-5 h-5 text-accent-dark flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Min Order</div>
                    <div className="text-sm font-semibold text-[#102725]">{product.minOrder}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-slate-900/10 bg-white px-4 py-3">
                  <Package className="w-5 h-5 text-accent-dark flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Supply Ability</div>
                    <div className="text-sm font-semibold text-[#102725]">{product.supplyAbility}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-slate-900/10 bg-white px-4 py-3">
                  <Clock className="w-5 h-5 text-accent-dark flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Delivery Time</div>
                    <div className="text-sm font-semibold text-[#102725]">{product.deliveryTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-slate-900/10 bg-white px-4 py-3">
                  <Shield className="w-5 h-5 text-accent-dark flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Certifications</div>
                    <div className="text-sm font-semibold text-[#102725]">
                      {product.certifications.length > 0
                        ? product.certifications.join(', ')
                        : 'Target-market support available'}
                    </div>
                  </div>
                </div>
              </div>

              <InquiryButton
                productName={product.name}
                productModel={product.model}
                serviceOptions={product.serviceOptions ?? ['OEM', 'ODM']}
              />
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
              <div className="sticky top-24 border border-slate-900/10 bg-[#f0f2ec] p-6">
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
        <section className="section-padding bg-[#f0f2ec]">
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
