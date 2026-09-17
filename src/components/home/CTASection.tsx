import { ArrowRight, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      <div className="water-lines !opacity-20" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">Start a conversation</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Bring us the product brief. We will help define the manufacturing route.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              Share your target market, filtration requirements, expected quantity,
              and launch timing. Our team replies within one business day.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/contact" variant="primary" size="lg">
              Send project details
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              href="mailto:jacho@lemonenviro.com"
              variant="outline"
              size="lg"
              className="!border-white/35 !text-white hover:!bg-white hover:!text-primary"
            >
              <Mail className="h-4 w-4" />
              jacho@lemonenviro.com
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
