import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Container>
        <div className="text-center max-w-lg mx-auto py-20">
          {/* 404 Illustration */}
          <div className="text-8xl font-bold text-primary mb-4">404</div>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Page Not Found
          </h1>

          <p className="text-slate-600 leading-relaxed mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Let us help you find what
            you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
            <Button href="/products" variant="outline">
              <Search className="w-4 h-4" />
              Browse Products
            </Button>
            <Button href="/contact" variant="ghost">
              <ArrowLeft className="w-4 h-4" />
              Contact Us
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Popular pages</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/products/odm-custom-water-purifier" className="text-primary hover:underline">
                Custom Water Purifiers
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/products/under-sink-ro-system" className="text-primary hover:underline">
                Under-Sink RO Systems
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/about" className="text-primary hover:underline">
                About Us
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/blog" className="text-primary hover:underline">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
