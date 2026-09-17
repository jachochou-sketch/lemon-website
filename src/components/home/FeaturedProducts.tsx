import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="featured-products" className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Product platforms ready for your market"
          subtitle="Start with a proven RO or UF platform, or work with our engineering team on a product developed around your specification."
          align="left"
        />

        <div className="mt-12 grid gap-px border border-slate-900/10 bg-slate-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/products" variant="outline" size="lg">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
