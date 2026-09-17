import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';

const caseImages: Record<string, { src: string; alt: string }> = {
  'lm-r3500-500g-ro-water-purifier': {
    src: '/images/cases/kitchen-water-installations.jpg',
    alt: 'Kitchen reverse osmosis water purifier installations in customer homes',
  },
  'lm-uf6530-whole-house-ultrafiltration-purifier': {
    src: '/images/cases/whole-house-installations.jpg',
    alt: 'Whole-house ultrafiltration systems installed in residential properties',
  },
  'odm-custom-water-purifier': {
    src: '/images/cases/petrochina-installation.jpg',
    alt: 'Commercial water dispenser installation project for PetroChina in Jiangmen',
  },
};

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section id="featured-products" className="section-aqua section-padding">
      <Container>
        <SectionTitle
          title="Systems proven in real installations"
          subtitle="Selected residential, whole-house, and commercial projects show how our product platforms perform in the environments they were built for."
          align="left"
        />

        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProducts.map((product) => {
            const caseImage = caseImages[product.slug];

            return (
              <ProductCard
                key={product.slug}
                product={product}
                imageSrc={caseImage?.src}
                imageAlt={caseImage?.alt}
              />
            );
          })}
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
