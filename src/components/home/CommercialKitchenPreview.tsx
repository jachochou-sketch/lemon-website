import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function CommercialKitchenPreview() {
  return <section className="bg-[#e3eff0] py-12 md:py-16"><Container><div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]"><div><p className="eyebrow">New collection · Commercial kitchen</p><h2 className="mt-4 text-3xl md:text-5xl">Water filtration for<br />the working kitchen.</h2><p className="mt-5 max-w-xl text-base leading-8 text-slate-600">Explore UF pretreatment and RO systems for restaurants, canteens, tea shops and coffee outlets. Select a format around your feed water, peak demand and service access.</p><Link href="/commercial-kitchen" className="commercial-button mt-7 bg-primary text-white hover:bg-primary-light">Explore commercial kitchen <ArrowRight className="h-4 w-4" /></Link></div><div className="relative aspect-[4/3] overflow-hidden bg-white"><Image src="/images/commercial-kitchen/grey-box.webp" alt="108 Grey Box stainless-steel commercial kitchen RO system" fill sizes="(min-width:768px) 45vw,100vw" className="object-contain" /></div></div></Container></section>;
}
