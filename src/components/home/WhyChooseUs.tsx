import {
  Cog,
  ShieldCheck,
  Truck,
  MessageSquareText,
  Microscope,
  BadgeCheck,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

const reasons = [
  {
    icon: Cog,
    title: 'Advanced Manufacturing',
    description:
      '5-axis CNC machines, automated production lines, and robotic welding cells ensure precision and repeatability at scale.',
  },
  {
    icon: ShieldCheck,
    title: 'Rigorous Quality Control',
    description:
      'ISO 9001:2015 certified with CMM inspection, material testing lab, and 100% dimensional inspection on critical parts.',
  },
  {
    icon: Microscope,
    title: 'Engineering Expertise',
    description:
      'Our 30+ engineers provide DFM feedback, material recommendations, and process optimization to reduce your costs.',
  },
  {
    icon: Truck,
    title: 'Reliable Global Logistics',
    description:
      'FOB and DDP shipping options. Strategic partnerships with major freight carriers ensure on-time delivery worldwide.',
  },
  {
    icon: MessageSquareText,
    title: 'English-Speaking Support',
    description:
      'Dedicated account managers who communicate clearly in English, German, and Mandarin — no misunderstandings, no delays.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified & Compliant',
    description:
      'ISO 9001, CE, RoHS, FDA, and PED certifications. Full material traceability and inspection reports with every order.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Why Choose East Manufacturing?"
          subtitle="We combine technical expertise, quality systems, and global logistics to be more than just a supplier — we're your manufacturing partner."
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
