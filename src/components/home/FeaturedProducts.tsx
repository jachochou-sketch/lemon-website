import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="featured-products" className="section-aqua section-padding">
      <Container>
        <SectionTitle
          title="Product platforms ready for your market"
          subtitle="Start with a proven RO or UF platform, or work with our engineering team on a product developed around your specification."
          align="left"
        />

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/products" variant="outline" size="lg">
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
