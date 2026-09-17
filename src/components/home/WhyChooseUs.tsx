import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

const stages = [
  {
    number: '01',
    title: 'Define the brief',
    description: 'Target market, water conditions, certification route, volume, and commercial goals.',
  },
  {
    number: '02',
    title: 'Engineer the system',
    description: 'Filtration configuration, housing, controls, interfaces, branding, and packaging.',
  },
  {
    number: '03',
    title: 'Validate the product',
    description: 'Samples and agreed checks for filtration, pressure, leakage, assembly, and finish.',
  },
  {
    number: '04',
    title: 'Move into production',
    description: 'Material control, manufacturing milestones, inspection records, packing, and shipment.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding section-rule bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow">How we work</p>
            <SectionTitle
              title="A practical route from brief to shipment"
              subtitle="Clear decisions, documented checkpoints, and one project contact throughout development and production."
              align="left"
              className="mt-5"
            />
          </div>

          <div className="border-t border-slate-900/15">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="grid gap-3 border-b border-slate-900/15 py-7 sm:grid-cols-[72px_0.75fr_1.25fr] sm:items-start"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-accent-dark">{stage.number}</span>
                <h3 className="text-xl font-semibold text-[#102725]">{stage.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
