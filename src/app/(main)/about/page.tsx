import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import ManufacturingPreview from '@/components/home/ManufacturingPreview';
import { ManufacturingNetwork, MembraneExpertise } from '@/components/home/ProfileCapabilities';
import { companyInfo, companyEvidence } from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Founded in 2012, Lemon develops RO and PVDF ultrafiltration products through its Zhongshan, Chuzhou, and Shunde manufacturing and development network.',
};

export default function AboutPage() {
  return <>
    <section className="page-hero"><Container><div className="max-w-3xl"><p className="eyebrow">Lemon Environmental · limOne</p><h1 className="mt-5 text-4xl md:text-6xl">Water purification expertise, from membrane to machine.</h1><p className="mt-6 text-lg leading-8 text-slate-600">Established in 2012, we develop residential and commercial water purification products, with RO systems and PVDF ultrafiltration at the centre of our work.</p></div></Container></section>
    <section className="bg-white py-14 md:py-20"><Container><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div className="relative aspect-[5/4] overflow-hidden bg-[#e0eff0]"><Image src="/images/about/final-assembly.jpg" alt="Lemon finished-product assembly workshop" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div><p className="eyebrow">Our company</p><h2 className="mt-4 text-3xl md:text-4xl">A focused water treatment manufacturer.</h2>{companyInfo.description.split('\n\n').slice(0,2).map(p=><p key={p.slice(0,20)} className="mt-5 text-base leading-8 text-slate-600">{p}</p>)}<div className="mt-7 border-t border-primary/15 pt-5"><p className="text-3xl font-semibold text-primary">{companyEvidence.patentPortfolio}</p><p className="mt-2 text-sm text-slate-600">Invention and utility-model patents across water purification development.</p></div></div></div></Container></section>
    <ManufacturingNetwork />
    <MembraneExpertise />
    <ManufacturingPreview showCompanyLink={false} />
    <section id="milestones" className="scroll-mt-24 bg-white py-16 md:py-24"><Container><p className="eyebrow">Development history</p><h2 className="mt-4 text-3xl md:text-4xl">Building the range since 2012.</h2><div className="mt-9 grid gap-x-10 md:grid-cols-2">{companyInfo.milestones.map(m=><article key={m.year} className="grid grid-cols-[60px_1fr] gap-4 border-t border-slate-900/10 py-6"><p className="font-semibold text-[#607d2b]">{m.year}</p><div><h3 className="text-lg">{m.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{m.description}</p></div></article>)}</div></Container></section>
    <section id="certifications" className="scroll-mt-24 bg-[#eff4ef] py-16 md:py-20"><Container><div className="grid items-center gap-8 md:grid-cols-2"><div><p className="eyebrow">Qualifications & documentation</p><h2 className="mt-4 text-3xl md:text-4xl">See the background behind the product.</h2><p className="mt-5 text-base leading-8 text-slate-600">Our company profile includes quality-management documentation, patent certificates, high-tech enterprise recognition, and product qualification examples. Ask us for the current documents applicable to your selected model and destination market.</p><Link href="/contact" className="commercial-text-link mt-7">Request product documentation <span aria-hidden="true">↗</span></Link></div><a href="/images/about/enterprise-qualifications.png" target="_blank" rel="noopener noreferrer" aria-label="View enterprise qualification and patent image in a new tab"><Image src="/images/about/enterprise-qualifications.png" alt="Water purification patent and enterprise qualification collection" width={1192} height={1072} className="h-auto w-full" sizes="(min-width: 768px) 50vw, 100vw" /></a></div></Container></section>
    <section className="water-cta py-16 md:py-20"><Container><h2 className="max-w-2xl text-3xl text-white md:text-5xl">Let us connect our expertise to your next product.</h2><Link href="/contact" className="commercial-button mt-8 bg-[#c3e889] text-primary hover:bg-white">Discuss your project <span aria-hidden="true">↗</span></Link></Container></section>
  </>;
}
