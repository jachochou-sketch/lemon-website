import {
  Droplets,
  ShieldCheck,
  Truck,
  MessageSquareText,
  Wrench,
  BadgeCheck,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

const reasons = [
  {
    icon: Droplets,
    title: 'Water-Treatment Focus',
    description:
      'Dedicated assembly, filter production, and water-quality testing capabilities support residential and commercial purifier programs.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality at Every Stage',
    description:
      'Incoming materials, filtration performance, pressure, leakage, and finished-product checks are built into the production process.',
  },
  {
    icon: Wrench,
    title: 'Flexible ODM & OEM',
    description:
      'Choose an existing platform or develop a tailored solution covering filtration, housing, controls, branding, and packaging.',
  },
  {
    icon: Truck,
    title: 'Export Project Support',
    description:
      'We coordinate production documentation, packaging, and international shipping requirements for your target market.',
  },
  {
    icon: MessageSquareText,
    title: 'Responsive Communication',
    description:
      'A dedicated project contact keeps specifications, samples, revisions, and production milestones clear from inquiry to delivery.',
  },
  {
    icon: BadgeCheck,
    title: 'Market-Ready Documentation',
    description:
      'Available quality records and product documentation help customers prepare for applicable testing and certification requirements.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Why Choose Lemon?"
          subtitle="A focused water-purification partner for product development, manufacturing, quality control, and export coordination."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((reason) => (
            <Card key={reason.title} hover padding="lg">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
