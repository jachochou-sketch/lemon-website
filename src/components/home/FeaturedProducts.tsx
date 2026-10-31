import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const applications = [
  {
    key: 'kitchen',
    eyebrow: 'Kitchen · Under-sink',
    title: 'Drinking water at the kitchen tap',
    body: 'The 500G RO platform (LM-R3500) is built for under-sink kitchen installs where space is tight and drinking-flow demand is steady. The photos below show real kitchen installations of RO systems in this class.',
    image: '/images/cases/kitchen-water-installations.jpg',
    alt: 'Collage of kitchen water purifier installations under sinks and on countertops',
    href: '/products/lm-r3500-500g-ro-water-purifier',
    productLink: 'Open 500G RO product',
  },
  {
    key: 'whole-house',
    eyebrow: 'Whole house · Point of entry',
    title: 'Filtered water for the entire home',
    body: 'The UF6530 ultrafiltration purifier serves whole-house point-of-entry setups at mainlines and utility areas. The gallery shows residential whole-house installations of ultrafiltration systems in this role.',
    image: '/images/cases/whole-house-installations.jpg',
    alt: 'Collage of whole-house ultrafiltration water purifier installations at residential mainlines',
    href: '/products/lm-uf6530-whole-house-ultrafiltration-purifier',
    productLink: 'Open UF6530 product',
  },
  {
    key: 'commercial',
    eyebrow: 'Commercial · Public use',
    title: 'Drinking water for workplaces',
    body: 'Explore dispenser and purification formats for offices, staff areas, and customer-facing spaces. Capacity, configuration, and service needs are agreed for each OEM or ODM project.',
    image: '/images/cases/business-water-installations.jpg',
    alt: 'Collage of commercial water purifier and dispenser installations in business premises',
    href: '/products/odm-custom-water-purifier',
    productLink: 'Open ODM custom product',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="section-aqua section-padding">
      <Container>
        <SectionTitle
          title="Systems proven in real installations"
          subtitle="Three application previews — kitchen, whole-house, and commercial — connect our product platforms to the environments they were built for."
          align="left"
        />

        <div className="mt-12 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {applications.map((item) => (
            <article
              key={item.key}
              className="flex min-w-0 flex-col overflow-hidden rounded-xl bg-white ring-1 ring-slate-900/5"
            >
              <div className="bg-white p-4">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={710}
                  height={644}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#607d2b]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-[#123f3c]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.body}</p>
                <a
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#123f3c] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123f3c]"
                >
                  {item.productLink}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/applications" variant="outline" size="lg">
            View full installation gallery
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/products" variant="outline" size="lg">
            All products
          </Button>
        </div>
      </Container>
    </section>
  );
}
