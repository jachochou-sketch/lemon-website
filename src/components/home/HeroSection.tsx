import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
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
        <div className="relative z-10 grid items-center gap-10 py-14 lg:min-h-[640px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16">
          <div className="flex flex-col justify-center lg:py-10">
            <p className="eyebrow enter-up">Zhongshan, China · Water purification manufacturing</p>
            <h1 className="enter-up delay-1 mt-7 max-w-3xl text-[2.75rem] font-semibold leading-[1.02] text-[#102725] sm:text-[3.5rem] lg:text-[3.35rem] xl:text-[3.65rem]">
              <span className="block">Built for your market.</span>
              <span className="mt-2 block">Manufactured to your specification.</span>
            </h1>
            <p className="enter-up delay-2 mt-7 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Lemon develops and manufactures RO and UF systems for residential,
              commercial, and private-label programs in international markets.
            </p>

            <div className="enter-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="secondary" size="lg">
                View product range
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Discuss OEM / ODM
              </Button>
            </div>

            <div className="enter-up delay-4 mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-900/10 pt-6 text-sm text-slate-600">
              {['RO & UF systems', 'Private label', 'Product development'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent-dark" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="enter-fade delay-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-slate-900/10 bg-[#e4f1f3] shadow-[0_24px_70px_rgba(31,91,86,0.10)]">
              <Image
                src="/images/cases/business-water-installations.jpg"
                alt="Business and commercial water purification systems installed at customer sites"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 border-r border-t border-slate-900/10 bg-white/95 px-5 py-4 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-dark">Real installations</p>
              <p className="mt-1 text-sm font-medium text-[#102725]">Residential · commercial · project applications</p>
            </div>
          </div>
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
