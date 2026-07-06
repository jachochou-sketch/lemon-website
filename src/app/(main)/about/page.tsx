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
import Badge from '@/components/ui/Badge';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about East Manufacturing — 20+ years of precision manufacturing excellence. ISO 9001 certified, 500+ employees, serving 30+ countries worldwide.',
};

const stats = [
  { icon: Factory, label: 'Factory Size', value: companyInfo.factorySize },
  { icon: Users, label: 'Employees', value: companyInfo.employees },
  { icon: Globe, label: 'Markets', value: `${companyInfo.markets.length}+ Countries` },
  { icon: Award, label: 'Founded', value: String(companyInfo.founded) },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'We hold tolerances other manufacturers consider impossible — because our clients depend on it.',
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
    description: 'On-time delivery rate of 98.5%. When we commit to a date, we deliver.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-primary py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4">About Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {companyInfo.tagline}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Founded in {companyInfo.founded}, we have grown from a small workshop into
              a global manufacturing partner trusted by companies across{' '}
              {companyInfo.markets.length}+ countries.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 pb-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} padding="lg" className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
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

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <Container>
          <SectionTitle
            title="Company Milestones"
            subtitle="Key moments in our journey from a small workshop to a global manufacturing partner."
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
            subtitle="The principles that guide every decision we make and every part we produce."
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
      <section id="certifications" className="section-padding bg-slate-50">
        <Container>
          <SectionTitle
            title="Certifications & Compliance"
            subtitle="We meet the most stringent international standards for quality, safety, and environmental compliance."
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

      {/* Team */}
      <section id="team" className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Leadership Team"
            subtitle="Meet the experienced team behind East Manufacturing's global success."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {companyInfo.teamMembers.map((member) => (
              <Card key={member.name} padding="none" className="overflow-hidden text-center">
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <Users className="w-16 h-16 text-slate-400" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                </div>
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
            subtitle="Our products reach customers across six continents. No matter where you are, we deliver."
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
