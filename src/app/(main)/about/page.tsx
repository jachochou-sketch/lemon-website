import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Factory,
  Target,
  Eye,
  Heart,
  Globe,
  Users,
  Shield,
  Award,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Lemon Environmental Technology, a water purifier ODM/OEM manufacturer serving brands and distributors in more than 10 countries.',
};

const stats = [
  { icon: Factory, label: 'Factory Size', value: companyInfo.factorySize },
  { icon: Users, label: 'Employees', value: companyInfo.employees },
  { icon: Globe, label: 'Global Reach', value: '10+ Countries' },
  { icon: Award, label: 'Founded', value: String(companyInfo.founded) },
];

const values = [
  {
    icon: Target,
    title: 'Water Quality First',
    description: 'Product decisions start with filtration performance, material suitability, safety, and the user experience.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'From material sourcing to final inspection, every step is documented and shared with our clients.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We invest in long-term relationships, not one-off transactions. Your success is our success.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Documented checkpoints and clear production milestones help keep projects aligned with the agreed plan.',
  },
];

const capabilityScenes = [
  {
    image: '/images/about/quality-laboratory.jpg',
    eyebrow: '01 · Quality control',
    title: 'Physical and chemical laboratory',
    description:
      'A dedicated laboratory supports material checks and water-quality evaluation during product development.',
  },
  {
    image: '/images/about/environmental-testing.jpg',
    eyebrow: '02 · Reliability testing',
    title: 'Environmental test chamber',
    description:
      'Controlled temperature and humidity testing helps evaluate components and finished products under defined conditions.',
  },
  {
    image: '/images/about/production-workshop.jpg',
    eyebrow: '03 · Membrane production',
    title: 'Ultrafiltration workshop',
    description:
      'Dedicated production areas support ultrafiltration membrane preparation and controlled manufacturing processes.',
  },
  {
    image: '/images/about/final-assembly.jpg',
    eyebrow: '04 · Manufacturing',
    title: 'Finished product assembly',
    description:
      'Organized assembly lines and inspection checkpoints carry products through final assembly and packing.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow">About Lemon</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#102725] md:text-6xl">
              A water purification manufacturer built around product development
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Founded in {companyInfo.founded}, we have grown from a small workshop into
              a water purification manufacturing partner serving brands and distributors
              in more than 10 countries.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-900/10 bg-white py-10">
        <Container>
          <div className="grid grid-cols-2 gap-px border border-slate-900/10 bg-slate-900/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} padding="lg" className="text-center">
                <stat.icon className="mx-auto mb-3 h-6 w-6 text-primary" />
                <div className="text-2xl font-semibold text-[#102725]">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-500">{stat.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="pt-8 pb-16 md:pb-20 bg-white">
        <Container>
          {/* Image */}
          <div className="relative w-full aspect-[21/9] lg:aspect-[21/7] rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/images/about/factory.jpg"
              alt="Lemon Environmental Technology Manufacturing Facility"
              fill
              className="object-contain bg-slate-100"
              sizes="100vw"
              priority
            />
          </div>
          {/* Text */}
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Our Story"
              subtitle={companyInfo.description.slice(0, 250) + '...'}
              align="center"
            />
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              {companyInfo.description.split('\n\n').slice(1).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering and production */}
      <section className="section-padding section-rule bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Inside our operation</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold text-[#102725] md:text-5xl">
                Engineering and production, documented
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end lg:text-lg lg:leading-8">
              A look inside the laboratory, environmental testing, membrane production,
              and final assembly areas behind our manufacturing programs.
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16 lg:gap-x-12 lg:gap-y-16">
            {capabilityScenes.map((scene) => (
              <article key={scene.title}>
                <div className="relative aspect-[3/2] overflow-hidden bg-[#edf6f7]">
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {scene.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#102725] md:text-2xl">
                  {scene.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  {scene.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section id="milestones" className="section-padding bg-[#edf6f7]">
        <Container>
          <SectionTitle
            title="Company Milestones"
            subtitle="Key moments in our development as a water purification ODM and OEM partner."
          />

          <div className="relative mt-12 max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-px" />

            <div className="space-y-8">
              {companyInfo.milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-slate-50" />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <Card padding="md">
                      <div className="text-accent font-bold text-sm mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-slate-600">{milestone.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our product development, production, and customer relationships."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value) => (
              <Card key={value.title} hover padding="lg" className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding bg-[#edf6f7]">
        <Container>
          <SectionTitle
            title="Certifications & Compliance"
            subtitle="Our quality systems and product documentation support the testing and compliance needs of different target markets."
          />
          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-xl mx-auto">
            {companyInfo.certifications.map((cert) => (
              <Card key={cert.name} padding="lg" className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-slate-500">
                  Issued by {cert.issuer}, {cert.year}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Markets */}
      <section className="section-padding bg-gradient-primary">
        <Container>
          <SectionTitle
            title="Serving Clients Worldwide"
            subtitle="Our ODM and OEM programs support customers across a growing range of international markets."
            light
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {companyInfo.markets.map((market) => (
              <span
                key={market}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium"
              >
                {market}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
