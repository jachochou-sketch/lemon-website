import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const paths = [
  {
    number: '01',
    title: 'Existing product platform',
    description:
      'Start from a production-ready RO or UF system, choose the model, and configure it for your market.',
    handoff: 'Review specs and target markets on the product pages, then send us the model list.',
    href: '/products',
    link: 'Explore systems',
  },
  {
    number: '02',
    title: 'OEM private label',
    description:
      'Apply your brand, packaging, and colourway to a proven Lemon platform with your filtration mix.',
    handoff: 'Share your brand assets and order forecast; we return labeling and packaging options.',
    href: '/oem-odm#oem',
    link: 'Discuss OEM',
  },
  {
    number: '03',
    title: 'ODM development',
    description:
      'Define a new product together — housing, internals, and validation — built to your brief.',
    handoff: 'Send a functional and budget brief; engineering replies with a development plan.',
    href: '/oem-odm#odm',
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
            <h2 className="mt-5 max-w-md text-3xl font-semibold text-[#123f3c] md:text-5xl">
              Three routes to a market-ready product
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              Whether you need an existing system, a private-label range, or a new product,
              each route has a clear technical and commercial handoff.
            </p>
          </div>

          <div className="border-t border-slate-900/15">
            {paths.map((path) => (
              <article
                key={path.number}
                className="group grid gap-4 border-b border-slate-900/15 py-8 transition-colors duration-300 hover:bg-[#edf6f7] sm:grid-cols-[56px_1fr] sm:gap-6 sm:px-4"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-[#607d2b]">
                  {path.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-[#123f3c]">{path.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                    {path.description}
                  </p>
                  <p className="mt-3 max-w-xl border-l-2 border-[#edf6f7] pl-3 text-[13px] leading-6 text-slate-500">
                    <span className="font-semibold text-[#123f3c]">Handoff:</span>{' '}
                    {path.handoff}
                  </p>
                  <Link
                    href={path.href}
                    className="mt-4 inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-[#123f3c] underline-offset-4 transition-colors hover:text-[#607d2b] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123f3c]"
                  >
                    {path.link}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
