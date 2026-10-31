import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Applications & Installations',
  description:
    'Installation photo collections across kitchen under-sink systems, whole-house ultrafiltration, commercial sites, and a Jiangmen project collection — with planning pointers for water conditions, siting, and maintenance.',
};

const applications = [
  {
    id: 'kitchen',
    eyebrow: 'Kitchen & household',
    title: 'Under-sink drinking water installations',
    image: '/images/cases/kitchen-water-installations.jpg',
    alt: 'Collage of kitchen water purification installations under sinks and at faucets',
    paragraphs: [
      'Compact RO and filtered drinking systems installed at the point of use, typically beside the sink and fed from the cold-water line. These setups suit homes, offices, and pantry areas where treated water is drawn at a single tap.',
    ],
    pointers: [
      { label: 'Water conditions', body: 'Check feed-water hardness, turbidity, and TDS so the membrane or filter stage matches what the tap actually delivers.' },
      { label: 'Site installation', body: 'Confirm under-sink clearance, drain access for reject water, and power availability before choosing a format.' },
      { label: 'Maintenance planning', body: 'Leave room to reach cartridges and note a filter-change cadence your team or customer can keep to.' },
    ],
    links: [
      { label: 'LM-R3500 500G RO water purifier', href: '/products/lm-r3500-500g-ro-water-purifier' },
    ],
  },
  {
    id: 'whole-house',
    eyebrow: 'Whole-house',
    title: 'Whole-house ultrafiltration installations',
    image: '/images/cases/whole-house-installations.jpg',
    alt: 'Collage of whole-house water purification installations at pipe entry points and utility areas',
    paragraphs: [
      'Whole-house filtration units installed at the water entry point or in a utility area. Plan the system around household peak flow, feed-water quality, available space, and access for servicing.',
    ],
    pointers: [
      { label: 'Water conditions', body: 'Estimate household peak flow and sediment load; pre-filtration protects the main stage when supply quality varies.' },
      { label: 'Site installation', body: 'Plan orientation, unions for service removal, and frost or heat protection for wall-mounted locations.' },
      { label: 'Maintenance planning', body: 'Allow access for membrane cleaning and servicing, with isolation valves and drainage appropriate to the selected system.' },
    ],
    links: [
      { label: 'LM-UF6530 whole-house ultrafiltration purifier', href: '/products/lm-uf6530-whole-house-ultrafiltration-purifier' },
    ],
  },
  {
    id: 'business',
    eyebrow: 'Commercial use',
    title: 'Business and workplace installations',
    image: '/images/cases/business-water-installations.jpg',
    alt: 'Collage of commercial and business water purification installations',
    paragraphs: [
      'Commercial dispenser formats for workplaces and shared drinking-water areas. Discuss peak demand, available utilities, and routine maintenance when planning the configuration for your premises.',
    ],
    pointers: [
      { label: 'Water conditions', body: 'Review the feed-water source and available water-quality information before selecting filtration stages.' },
      { label: 'Site installation', body: 'Agree pipe routing, power points, and drainage with the facilities team before delivery day.' },
      { label: 'Maintenance planning', body: 'Set a consumable reorder routine so filters are replaced on schedule, not after flow drops.' },
    ],
    links: [
      { label: 'OEM / ODM custom water purifier', href: '/products/odm-custom-water-purifier' },
    ],
  },
  {
    id: 'jiangmen',
    eyebrow: 'Project collection',
    title: 'Jiangmen service-station installations',
    image: '/images/cases/petrochina-installation.jpg',
    alt: 'Drinking-water dispenser installations at PetroChina service-station premises in Jiangmen',
    paragraphs: [
      'Commercial drinking-water dispensers in customer-facing service-station settings in Jiangmen. These installations illustrate how a freestanding format can fit into shared service areas.',
    ],
    pointers: [
      { label: 'Usage planning', body: 'Review staff and customer traffic to estimate peak drinking-water demand.' },
      { label: 'Site installation', body: 'Confirm a suitable feed-water connection, electrical supply, and accessible position within the service area.' },
      { label: 'Maintenance planning', body: 'Leave access for cartridge replacement, routine cleaning, and the agreed hygiene procedures.' },
    ],
    links: [
      { label: 'OEM / ODM custom water purifier', href: '/products/odm-custom-water-purifier' },
    ],
  },
];

export default function ApplicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Where Lemon systems work</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#102725] md:text-6xl">
              Installation examples for homes and businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Four genuine photo collections showing how our RO, UF, and
              custom-built systems are installed in practice — with planning
              pointers for water conditions, siting, and maintenance.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Explore installation formats and discuss a configuration for your
              site, water conditions, and target market.
            </p>
          </div>
        </Container>
      </section>

      {/* Editorial rows */}
      {applications.map((app, index) => (
        <section
          key={app.id}
          id={app.id}
          className={`scroll-mt-28 section-padding ${index % 2 === 1 ? 'section-aqua' : ''}`}
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Image — full collage, never cropped */}
              <figure
                className={`border border-slate-900/10 bg-white p-4 md:p-6 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={app.image}
                  alt={app.alt}
                  width={710}
                  height={644}
                  className="h-auto w-full object-contain"
                />
                <figcaption className="mt-4 text-xs leading-5 text-slate-500">
                  {app.id === 'jiangmen' ? 'Jiangmen PetroChina installation collection' : `${app.eyebrow} installation collection`}
                </figcaption>
              </figure>

              {/* Copy */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="eyebrow">{app.eyebrow}</p>
                <h2 className="mt-4 text-2xl font-semibold text-[#102725] md:text-3xl">
                  {app.title}
                </h2>
                {app.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 text-base leading-7 text-slate-600">
                    {p}
                  </p>
                ))}

                <dl className="mt-6 space-y-4 border-l-2 border-primary/25 pl-5">
                  {app.pointers.map((pointer) => (
                    <div key={pointer.label}>
                      <dt className="text-sm font-semibold text-[#102725]">
                        {pointer.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-slate-600">
                        {pointer.body}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {app.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-accent/50"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 underline-offset-4 hover:text-primary hover:underline focus-visible:ring-2 focus-visible:ring-accent/50"
                  >
                    All products
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className="water-cta py-16 md:py-20">
        <Container>
          <div className="max-w-2xl text-white">
            <p className="eyebrow text-white/60">Plan your installation</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Share your site conditions and we will propose a configuration
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Send the application type, feed-water information, capacity needs,
              and order volume. We will reply with a feasible setup and next
              steps — no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/oem-odm"
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white hover:text-[#102725]"
              >
                See OEM / ODM programs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
