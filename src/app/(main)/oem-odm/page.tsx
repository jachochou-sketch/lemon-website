import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'OEM / ODM Programs',
  description:
    'Compare OEM production on existing platforms with ODM product development by Lemon Environmental. Learn how configuration, exterior, logo, packaging, and documentation are agreed per project.',
};

const comparisonRows = [
  {
    aspect: 'Starting point',
    oem: 'An existing Lemon platform with proven hardware and tooling.',
    odm: 'A new product definition built around your market brief.',
  },
  {
    aspect: 'Your role',
    oem: 'Define brand, finish, packaging, and target specification.',
    odm: 'Define the problem, market, and performance goals; we co-develop the solution.',
  },
  {
    aspect: 'Our role',
    oem: 'Build to your brand on a validated platform.',
    odm: 'Develop the product: selection, layout, styling, and documentation support.',
  },
  {
    aspect: 'Typical timeline',
    oem: 'Shorter — the platform is already qualified and in production.',
    odm: 'Longer — development, samples, and agreement come before production.',
  },
  {
    aspect: 'Best suited for',
    oem: 'Brands and distributors private-labelling a known format quickly.',
    odm: 'Partners entering a new segment or needing a differentiated product.',
  },
];

const customizationItems = [
  {
    title: 'Configuration',
    body: 'Filtration stages, membrane type, capacity, fittings, and electrical options are selected against your water conditions and target format.',
  },
  {
    title: 'Exterior',
    body: 'Housing colour, panel finish, and cosmetic details can be agreed per project within existing or new tooling constraints.',
  },
  {
    title: 'Logo & branding',
    body: 'Logo application on the unit and interface elements is prepared from your artwork files and approved before production.',
  },
  {
    title: 'Packaging',
    body: 'Retail or neutral cartons, inserts, and labelling artwork are coordinated with your team and confirmed on samples.',
  },
  {
    title: 'Documentation',
    body: 'Manuals, labels, and packing lists can be adapted to your language and market needs as agreed in the project scope.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Brief',
    body: 'You share the market, water conditions, desired capacity or format, order volume, branding, and launch needs. A complete brief makes every later estimate more accurate.',
  },
  {
    step: '02',
    title: 'Feasibility & configuration',
    body: 'We review what is feasible on existing platforms or what ODM development would require, then propose a configuration, customization scope, and commercial terms for agreement.',
  },
  {
    step: '03',
    title: 'Samples & checks',
    body: 'Samples are produced for your evaluation — appearance, fit of branding and packaging, documentation, and function. Findings are resolved before production is confirmed.',
  },
  {
    step: '04',
    title: 'Agreed production & inspection',
    body: 'Production runs to the agreed configuration, sample standard, quantity, and inspection plan. MOQ and lead time depend on the agreed design and volume.',
  },
];

const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'MOQ depends on the agreed design and volume. Standard configurations on existing platforms generally allow lower quantities than projects needing new tooling or custom packaging. We confirm the MOQ with you during the feasibility stage.',
  },
  {
    q: 'How long does an OEM or ODM project take?',
    a: 'Lead time follows from the agreed design, customization scope, and order volume. Simpler branding projects on existing platforms move faster than full ODM development with new parts and packaging.',
  },
  {
    q: 'Which certifications apply to our product?',
    a: 'Certifications must be reviewed for the specific product and destination market — we do not make blanket claims. Tell us the target market early so requirements can be checked against the proposed configuration.',
  },
  {
    q: 'Can we change housing colour, logo, and carton artwork together?',
    a: 'Yes, exterior styling, logo application, packaging, and documentation can all be part of one agreed project scope. Each element is confirmed on samples before production.',
  },
  {
    q: 'When are samples evaluated?',
    a: 'Samples are built and evaluated before production approval. Your sign-off on the sample and the agreed checklist is what releases the production run.',
  },
];

export default function OemOdmPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Private-label programs</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#102725] md:text-6xl">
              OEM production or ODM development, agreed per project
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              OEM builds your brand on an existing Lemon platform. ODM develops a
              product around your market brief. Both follow the same disciplined
              path: brief, feasibility, samples, then agreed production.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?service=OEM" size="lg">
                Start an OEM inquiry
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact?service=ODM" variant="outline" size="lg">
                Start an ODM inquiry
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* OEM vs ODM comparison */}
      <section className="section-padding">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Which path fits</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#102725] md:text-4xl">
              OEM and ODM, side by side
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The difference is the starting point. If a suitable platform already
              exists, OEM is usually the faster route. If no existing product
              matches your market, ODM development closes the gap.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border border-slate-900/10 bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Comparison of OEM and ODM programs
              </caption>
              <thead>
                <tr className="border-b border-slate-900/10 bg-[#eef6f7]">
                  <th scope="col" className="px-5 py-4 font-semibold text-[#102725]">
                    Aspect
                  </th>
                  <th
                    scope="col"
                    id="oem"
                    className="scroll-mt-28 px-5 py-4 font-semibold text-[#102725]"
                  >
                    OEM — on an existing platform
                  </th>
                  <th
                    scope="col"
                    id="odm"
                    className="scroll-mt-28 px-5 py-4 font-semibold text-[#102725]"
                  >
                    ODM — product development
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.aspect} className="border-b border-slate-900/10 last:border-b-0">
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-[#102725]"
                    >
                      {row.aspect}
                    </th>
                    <td className="px-5 py-4 leading-6 text-slate-600">{row.oem}</td>
                    <td className="px-5 py-4 leading-6 text-slate-600">{row.odm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact?service=OEM" variant="secondary">
              Inquire about OEM
            </Button>
            <Button href="/contact?service=ODM" variant="secondary">
              Inquire about ODM
            </Button>
          </div>
        </Container>
      </section>

      {/* Platform example image */}
      <section className="section-aqua section-padding">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">A shared foundation</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#102725] md:text-4xl">
                Define the details of your product
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Many Lemon programs start from an established bill of materials
                like the one pictured. From there, configuration, exterior, logo,
                packaging, and documentation changes are listed, priced, and
                agreed individually — what is feasible depends on the platform
                and volume you choose.
              </p>
              <ul className="mt-6 space-y-3">
                {customizationItems.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <span className="font-semibold text-[#102725]">{item.title}:</span>{' '}
                      <span className="text-sm leading-6 text-slate-600">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="border border-slate-900/10 bg-white p-4 md:p-6">
              <Image
                src="/images/products/odm-water-purifier-bom.jpg"
                alt="Bill of materials drawing for an OEM water purifier platform"
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
              <figcaption className="mt-4 text-xs leading-5 text-slate-500">
                Water purifier assembly drawing: a starting point for discussing
                components, housing, and configuration during development.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section-padding">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">How a project runs</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#102725] md:text-4xl">
              Four stages, from brief to agreed production
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Every OEM and ODM engagement follows the same sequence. Samples are
              evaluated before production, and quantities or timelines are
              confirmed against the agreed design — never guessed up front.
            </p>
          </div>

          <ol className="mt-12 space-y-0">
            {processSteps.map((step, index) => (
              <li key={step.step} className="relative flex gap-6 pb-10 last:pb-0 md:gap-8">
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute left-[23px] top-14 bottom-0 w-px bg-primary/20 md:left-[27px]"
                    aria-hidden="true"
                  />
                )}
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-primary/30 bg-[#eef6f7] text-sm font-semibold text-primary md:h-14 md:w-14">
                  {step.step}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-[#102725]">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Procurement brief checklist */}
      <section className="section-aqua section-padding">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow">Prepare your brief</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#102725] md:text-4xl">
                What to include in a procurement brief
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The more context you share at the start, the sooner we can tell
                you what is feasible. A useful brief covers:
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { t: 'Your market', d: 'Country or region, sales channel, and target customer.' },
                { t: 'Water conditions', d: 'Feed water quality data or description where available.' },
                { t: 'Desired capacity / format', d: 'Throughput, form factor, and installation setting.' },
                { t: 'Order volume', d: 'Initial order and expected annual range.' },
                { t: 'Branding', d: 'Logo, colour, packaging, and documentation needs.' },
                { t: 'Launch needs', d: 'Target market requirements and any certification checks for the product and destination.' },
              ].map((item) => (
                <li key={item.t} className="border border-slate-900/10 bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#102725]">{item.t}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#102725] md:text-4xl">
              Before you inquire
            </h2>
          </div>
          <div className="mt-10 max-w-3xl divide-y divide-slate-900/10 border-y border-slate-900/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#102725] focus-visible:ring-2 focus-visible:ring-accent/50 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    className="text-primary transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
            Certification requirements vary by product and destination market. We
            review them together with you during feasibility — please ask about
            the specific model and country rather than relying on general claims.
          </p>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="water-cta py-16 md:py-24">
        <Container>
          <div className="max-w-2xl text-white">
            <p className="eyebrow text-white/60">Next step</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Send your brief for OEM or ODM
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Tell us about your market, water conditions, format, volume, and
              branding. We will come back with a feasibility view and the next
              concrete step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?service=OEM" size="lg">
                Inquire about OEM
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact?service=ODM" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-[#102725]">
                Inquire about ODM
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/60">
              Prefer to browse first? See{' '}
              <Link href="/products" className="font-semibold text-white underline underline-offset-4 hover:text-white">
                all products
              </Link>{' '}
              or view{' '}
              <Link href="/applications" className="font-semibold text-white underline underline-offset-4 hover:text-white">
                real installation examples
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
