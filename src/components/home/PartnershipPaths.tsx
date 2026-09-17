import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const paths = [
  {
    number: '01',
    title: 'Select a product platform',
    description: 'Start with a production-ready RO or UF system and configure the model for your market.',
    href: '/products',
    link: 'Explore systems',
  },
  {
    number: '02',
    title: 'Build your private label range',
    description: 'Apply your brand, packaging, filtration configuration, and commercial requirements to a proven platform.',
    href: '/contact',
    link: 'Discuss OEM',
  },
  {
    number: '03',
    title: 'Develop a custom solution',
    description: 'Work with our engineering team on product architecture, housing, components, validation, and production.',
    href: '/contact',
    link: 'Discuss ODM',
  },
];

export default function PartnershipPaths() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">Choose your starting point</p>
            <h2 className="mt-5 max-w-md text-3xl font-semibold text-[#102725] md:text-5xl">
              Three routes to a market-ready product
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              Whether you need an existing system, a private-label range, or a new product,
              the path starts with a clear commercial and technical brief.
            </p>
          </div>

          <div className="border-t border-slate-900/15">
            {paths.map((path) => (
              <article
                key={path.number}
                className="group grid gap-4 border-b border-slate-900/15 py-7 transition-colors duration-300 hover:bg-[#f3f8f8] sm:grid-cols-[64px_1fr_auto] sm:items-center sm:px-4"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-accent-dark">{path.number}</span>
                <div>
                  <h3 className="text-xl font-semibold text-[#102725]">{path.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{path.description}</p>
                </div>
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary transition-colors hover:text-primary-light"
                >
                  {path.link}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
