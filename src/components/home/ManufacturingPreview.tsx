import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const facilities = [
  {
    key: 'lab',
    src: '/images/about/quality-laboratory.jpg',
    alt: 'Lemon quality laboratory with testing benches and water analysis equipment',
    title: 'Quality laboratory',
    description: 'Incoming material checks and water performance testing.',
  },
  {
    key: 'environmental',
    src: '/images/about/environmental-testing.jpg',
    alt: 'Environmental test room running temperature and humidity trials on water purifiers',
    title: 'Environmental testing',
    description: 'Temperature and humidity chambers for operating-condition trials.',
  },
  {
    key: 'workshop',
    src: '/images/about/production-workshop.jpg',
    alt: 'Production workshop with the ultrafiltration module assembly line',
    title: 'UF production area',
    description: 'Assembly of ultrafiltration modules and housings on the line.',
  },
  {
    key: 'assembly',
    src: '/images/about/final-assembly.jpg',
    alt: 'Operators performing final assembly of water purifier units on the line',
    title: 'Final assembly',
    description: 'Unit build-up and functional checks before packing.',
  },
];

export default function ManufacturingPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="From development to the production floor"
          subtitle="A look inside the facility behind Lemon programs — lab, test rooms, and lines where your units are built."
          align="left"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {facilities.map((item) => (
            <figure key={item.key} className="min-w-0">
              <div className="overflow-hidden rounded-xl bg-[#edf6f7] ring-1 ring-slate-900/5">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={600}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3">
                <p className="text-sm font-semibold text-[#123f3c]">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/about" variant="outline" size="lg">
            More about the facility
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
