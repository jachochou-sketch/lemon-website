import { ArrowRight, Send } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <Container className="relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
            <Send className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10">
            Send us your drawings or specifications and our engineering team will
            provide a detailed quote within 24 hours. From prototype to production,
            we are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="mailto:info@eastmfg.com"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white hover:!text-primary"
            >
              Email Us Directly
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
