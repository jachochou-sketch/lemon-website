import Image from 'next/image';
import { ArrowRight, Shield, Factory, Globe, Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import { companyInfo } from '@/data/company';

const highlights = [
  {
    icon: Factory,
    label: 'Factory Size',
    value: companyInfo.factorySize,
  },
  {
    icon: Users,
    label: 'Employees',
    value: companyInfo.employees,
  },
  {
    icon: Shield,
    label: 'Certified',
    value: 'ISO 9001, CE',
  },
  {
    icon: Globe,
    label: 'Markets',
    value: '10+ Countries',
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding section-rule bg-white">
      <Container>
        <div className="reveal-on-scroll grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden border border-slate-900/10 bg-white">
              <Image
                src="/images/about/factory.jpg"
                alt="Lemon Water Technology - 10,000 m² Manufacturing Facility in Zhongshan"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-primary px-5 py-4 text-white">
              <div className="text-2xl font-semibold leading-tight">Since {companyInfo.founded}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/60">Zhongshan manufacturing base</div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <SectionTitle
              title="One team from product brief to production"
              subtitle="Our Zhongshan facility brings product development, filter assembly, testing, packaging, and export coordination into one working process."
              align="left"
            />

            <div className="mt-9 grid grid-cols-2 border-y border-slate-900/10">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 border-b border-slate-900/10 py-4 odd:border-r"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">{item.value}</div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/about" variant="outline">
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
