'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const scrollToProducts = () => {
    const el = document.getElementById('featured-products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              ISO 9001:2015 Certified Manufacturer
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Your Trusted Partner in{' '}
            <span className="text-accent">
              Water Purifier ODM
            </span>{' '}
            &amp; OEM Manufacturing
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl animate-fade-in-up">
            With 14+ years of experience, 100+ skilled professionals, and a
            10,000 m&sup2; ISO-certified facility, we deliver custom water purification
            solutions to brands across 10+ countries worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Button
              href="/products"
              variant="primary"
              size="lg"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white hover:!text-primary"
            >
              Request a Quote
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-sm font-bold">14+</span>
              </div>
              <span className="text-white/60 text-sm">Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-sm font-bold">10+</span>
              </div>
              <span className="text-white/60 text-sm">Countries Served</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-sm font-bold">100+</span>
              </div>
              <span className="text-white/60 text-sm">Employees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-sm font-bold">10k</span>
              </div>
              <span className="text-white/60 text-sm">m&sup2; Facility</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll to explore"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Explore</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
