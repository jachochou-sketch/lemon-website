import Link from 'next/link';
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
    value: 'ISO 9001, CE, SGS',
  },
  {
    icon: Globe,
    label: 'Markets',
    value: `${companyInfo.markets.length}+ Countries`,
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/images/about/factory.jpg"
                alt="Lemon Water Technology - 10,000 m² Manufacturing Facility in Zhongshan"
                fill
                className="object-contain bg-slate-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-bold leading-tight">
                {new Date().getFullYear() - companyInfo.founded}
              </div>
              <div className="text-sm font-medium text-white/80">Years in Business</div>
            </div>
          </div>

          {/* Text Column */}
          <div>
            <SectionTitle
              title="Water Purification Excellence Since 2012"
              subtitle="From a small workshop to a 10,000 m² ISO-certified facility in Zhongshan, we've been delivering custom water purification solutions to brands across 10+ countries for over 14 years."
              align="left"
            />

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">{item.value}</div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed mt-6">
              {companyInfo.description.slice(0, 200)}...
            </p>

            <div className="mt-6">
              <Button href="/about" variant="outline">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
