import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section className="commercial-hero relative isolate overflow-hidden">
      <Container className="relative py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="enter-up flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100"><span className="h-px w-8 bg-lime-300" />Lemon Environmental · Since 2012</p>
            <h1 className="enter-up delay-1 mt-7 text-[3.5rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-[5rem] lg:text-[5.6rem]">Pure water.<br /><span className="text-[#c3e889]">Your brand.</span></h1>
            <p className="enter-up delay-2 mt-7 max-w-lg text-lg leading-8 text-slate-200">Water purification systems, developed and manufactured for the market you serve.</p>
            <p className="enter-up delay-2 mt-4 max-w-lg text-sm leading-7 text-slate-300">RO drinking-water systems. PVDF ultrafiltration expertise. Residential and commercial product development, supported by our manufacturing network in China.</p>
            <div className="enter-up delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/products" className="commercial-button bg-[#c3e889] text-[#103c38] hover:bg-white">Explore the range <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="commercial-button border border-white/40 text-white hover:bg-white/10">Discuss your project <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-cyan-100/80"><span>RO &amp; UF systems</span><span>OEM / ODM</span><span>International supply</span></div>
          </div>
          <div className="enter-fade delay-2 relative lg:pb-8">
            <div className="relative aspect-[5/4] overflow-hidden bg-[#18534e]">
              <Image src="/images/about/final-assembly.jpg" alt="Water purifier assembly workshop at Lemon Environmental" fill priority sizes="(min-width: 1280px) 550px, (min-width: 1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062d2a]/90 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-white"><div><p className="text-[10px] uppercase tracking-[0.18em] text-[#c3e889]">Inside Lemon</p><p className="mt-2 text-xl font-medium">From the production floor<br />to your product range.</p></div><span className="text-3xl font-light text-white/50" aria-hidden="true">01</span></div>
            </div>
            <Link href="/about" className="relative mt-4 flex items-center justify-between gap-4 border border-white/20 bg-white/5 px-6 py-5 text-sm text-white backdrop-blur lg:absolute lg:-bottom-2 lg:-left-8 lg:right-8 lg:mt-0"><span>Meet your manufacturing partner</span><ArrowRight className="h-4 w-4 shrink-0" /></Link>
          </div>
        </div>
        <a href="#featured-products" className="mt-12 inline-flex items-center gap-3 text-xs text-white/70 hover:text-white"><ArrowDown className="h-4 w-4" /> Find a platform for your next project</a>
      </Container>
    </section>
  );
}
