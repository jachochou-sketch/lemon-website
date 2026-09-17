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
        <div className="relative z-10 grid min-h-[720px] items-stretch lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center border-slate-900/10 py-16 lg:border-r lg:py-24 lg:pr-10">
            <p className="eyebrow enter-up">Zhongshan, China · Water purification manufacturing</p>
            <h1 className="enter-up delay-1 mt-7 max-w-3xl text-[2.75rem] font-semibold leading-[0.98] text-[#102725] sm:text-[3.5rem] lg:text-[3.15rem] xl:text-[3.3rem]">
              <span className="block">Built for your market.</span>
              <span className="mt-2 block">Manufactured to your specification.</span>
            </h1>
            <p className="enter-up delay-2 mt-7 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Lemon develops and manufactures RO and UF water purification systems,
              replacement filters, and private-label programs for international partners.
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

          <div className="enter-fade delay-2 flex flex-col bg-[#e4f1f3]/80 lg:pl-14">
            <div className="relative min-h-[430px] flex-1 overflow-hidden lg:min-h-0">
              <Image
                src="/images/products/odm-water-purifier-bom.jpg"
                alt="Exploded view of a Lemon custom water purification system"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 border-t border-slate-900/10 bg-[#edf6f6] sm:grid-cols-4">
              {proofPoints.map(([value, label], index) => (
                <div
                  key={label}
                  className={`px-4 py-5 text-center sm:text-left ${index % 2 === 1 ? 'border-l border-slate-900/10' : ''} ${index >= 2 ? 'border-t border-slate-900/10 sm:border-t-0' : ''} ${index > 0 ? 'sm:border-l sm:border-slate-900/10' : ''}`}
                >
                  <div className="text-lg font-semibold text-[#102725]">{value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
