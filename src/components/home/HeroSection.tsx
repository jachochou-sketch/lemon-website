import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const proofPoints = [
  ['2012', 'Founded'],
  ['10,000 m²', 'Manufacturing facility'],
  ['100+', 'Production team'],
  ['10+', 'Export markets'],
];

export default function HeroSection() {
  return (
    <section className="water-surface border-b border-slate-900/10">
      <div className="water-lines" aria-hidden="true" />
      <Container>
        <div className="relative z-10 grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:py-14 xl:gap-16">
          <div className="min-w-0 lg:py-6">
            <p className="eyebrow enter-up leading-5">Lemon Environmental · Since 2012</p>
            <h1 className="enter-up delay-1 mt-6 max-w-xl text-[2.5rem] font-semibold leading-[1.08] text-[#102725] sm:text-[3.25rem] lg:text-[2.8rem] xl:text-[3.15rem]">
              <span className="block">Built for your market.</span>
              <span className="mt-3 block text-primary-light">Made to your specification.</span>
            </h1>
            <p className="enter-up delay-2 mt-7 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Lemon develops and manufactures RO and UF systems for residential,
              commercial, and private-label programs in international markets.
            </p>

            <div className="enter-up delay-3 mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href="/products" variant="secondary" size="md">
                View product range
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Discuss OEM / ODM
              </Button>
            </div>

            <div className="enter-up delay-4 mt-8 border-t border-slate-900/10 pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">From development to production</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">RO &amp; UF systems · Private label · OEM / ODM</p>
            </div>
          </div>

          <figure className="enter-fade delay-2 min-w-0 border border-slate-900/10 bg-white">
            <a
              href="/images/about/enterprise-qualifications.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View enterprise qualifications image at full size (opens in a new tab)"
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <Image
                src="/images/about/enterprise-qualifications.png"
                alt="Lemon enterprise qualifications and a collection of water purification patent certificates"
                width={1192}
                height={1072}
                priority
                sizes="(min-width: 1280px) 662px, (min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
            </a>
            <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-900/10 px-4 py-4 sm:px-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">Enterprise qualifications</p>
                <p className="mt-1 text-sm text-slate-600">Water purification design &amp; innovation</p>
              </div>
              <a href="/images/about/enterprise-qualifications.png" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" aria-label="View full image (opens in a new tab)">
                View full image <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        </div>

        <div className="relative z-10 grid grid-cols-2 border-t border-slate-900/10 sm:grid-cols-4">
          {proofPoints.map(([value, label], index) => (
            <div
              key={label}
              className={`py-6 text-center sm:text-left sm:pl-6 ${index % 2 === 1 ? 'border-l border-slate-900/10' : ''} ${index >= 2 ? 'border-t border-slate-900/10 sm:border-t-0' : ''} ${index > 0 ? 'sm:border-l sm:border-slate-900/10' : ''}`}
            >
              <div className="text-xl font-semibold text-[#102725]">{value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
