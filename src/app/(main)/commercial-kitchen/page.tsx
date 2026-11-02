import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import ProductCard from '@/components/products/ProductCard';
import { getKitchenProducts } from '@/data/commercial-kitchen';

export const metadata: Metadata = { title: 'Commercial Kitchen Water Filtration', description: 'Commercial kitchen UF and RO systems for restaurants, canteens, tea shops and coffee outlets. Explore stainless-steel, automatic-flush, Obsidian and beverage RO configurations.' };

export default function CommercialKitchenPage() {
  return <>
    <section className="page-hero"><Container><div className="max-w-3xl"><p className="eyebrow">Commercial kitchen series</p><h1 className="mt-5 text-4xl md:text-6xl">Filtration for food service and beverage preparation.</h1><p className="mt-6 text-lg leading-8 text-slate-600">UF and media filtration for pretreatment, with dedicated RO formats for tea and coffee outlets. Compare the structure, flow and maintenance access of each configuration.</p><div className="mt-7 flex flex-wrap gap-4"><a href="#uf" className="commercial-button bg-primary text-white">UF &amp; pretreatment</a><a href="#ro" className="commercial-button border border-primary text-primary">RO systems</a></div></div></Container></section>
    <section className="bg-white py-10"><Container><div className="grid gap-6 md:grid-cols-3">{[['Feed water','Municipal tap water. Confirm source quality and inlet pressure before specifying the system.'],['Application','Restaurants, canteens, tea shops and coffee outlets, with peak demand assessed per site.'],['Selection','Check the series and physical configuration as well as the model code when requesting a quotation.']].map(([title,text])=><div key={title} className="border-l border-primary/20 pl-5"><h2 className="text-lg">{title}</h2><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></Container></section>
    {(['UF','RO'] as const).map(type=><section key={type} id={type.toLowerCase()} className="section-aqua scroll-mt-24 py-14 md:py-20"><Container><p className="eyebrow">{type === 'UF' ? 'Pretreatment & media configurations' : 'Reverse-osmosis configurations'}</p><h2 className="mt-4 text-3xl md:text-4xl">{type === 'UF' ? 'Serviceable filtration for busy kitchens.' : 'RO systems for your beverage program.'}</h2><div className="mt-9 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">{getKitchenProducts(type).map(p=><ProductCard key={p.slug} product={p} />)}</div></Container></section>)}
    <section className="water-cta py-16"><Container><h2 className="max-w-2xl text-3xl text-white md:text-4xl">Tell us what your kitchen needs.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-white/75">Share the application, water conditions, daily and peak demand, installation space and preferred configuration. We will review the specification and commercial terms with you.</p><Link href="/contact" className="commercial-button mt-7 bg-[#c3e889] text-primary hover:bg-white">Request a kitchen system recommendation</Link></Container></section>
  </>;
}
