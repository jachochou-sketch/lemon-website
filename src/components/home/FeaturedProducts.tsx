import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="featured-products" className="section-padding bg-slate-50">
      <Container>
        <SectionTitle
          title="Our Core Products"
          subtitle="Precision-engineered components trusted by leading companies across automotive, aerospace, construction, and industrial sectors."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/products" variant="outline" size="lg">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
