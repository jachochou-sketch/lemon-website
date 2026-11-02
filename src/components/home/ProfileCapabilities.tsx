import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { companyEvidence } from '@/data/company';

export function MembraneExpertise() {
  return <section className="bg-[#e0eff0] py-16 md:py-24"><Container>
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div><p className="eyebrow">The technology behind the range</p><h2 className="mt-4 text-3xl md:text-5xl">From PVDF membrane<br />to the complete system.</h2><p className="mt-6 max-w-lg text-base leading-8 text-slate-600">Our ultrafiltration work connects membrane development, serviceable filter elements, and stainless-steel system design. It is a foundation for household and commercial product programs.</p><Link href="/products?category=UF+Systems" className="commercial-text-link mt-7">Explore UF platforms <ArrowRight className="h-4 w-4" /></Link></div>
      <div className="divide-y divide-primary/15 border-y border-primary/15">{[
        ['01','PVDF external-pressure membranes','Membrane technology used across the ultrafiltration range, with configurations selected for the application.'],
        ['02','Designed for cleaning and servicing','Selected UF filter elements can be disassembled and cleaned. The maintenance procedure depends on the model and feed-water conditions.'],
        ['03','Modular filtration options','Stainless-steel UF platforms and carbon-filter configurations support different system layouts and installation requirements.'],
      ].map(([n,title,text])=><div key={n} className="grid grid-cols-[28px_1fr] gap-4 py-6"><span className="pt-1 text-xs text-primary/60">{n}</span><div><h3 className="text-xl">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></div></div>)}</div>
    </div>
  </Container></section>;
}

export function ManufacturingNetwork() {
  return <section className="bg-[#103d39] py-14 text-white md:py-20"><Container><p className="text-xs uppercase tracking-[0.18em] text-[#c3e889]">Development & manufacturing network</p><div className="mt-7 grid gap-8 md:grid-cols-3">{companyEvidence.locations.map(place=><article key={place.name} className="border-t border-white/25 pt-6"><p className="text-3xl font-light text-[#c3e889]">{place.area}</p><h3 className="mt-4 text-xl text-white">{place.name}</h3><p className="mt-2 text-sm font-medium text-white">{place.role}</p><p className="mt-3 text-sm leading-7 text-white/70">{place.detail}</p></article>)}</div><Link href="/about" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white underline-offset-4 hover:underline">Explore our company <ArrowRight className="h-4 w-4" /></Link></Container></section>;
}
