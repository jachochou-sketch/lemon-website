'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MobileMenu from '@/components/layout/MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200'
            : 'bg-white border-b border-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Lemon Environmental Technology home">
              <Image
                src="/images/brand/lemon-logo-concept-v2-transparent.png"
                alt="Lemon Environmental Technology"
                width={1309}
                height={1201}
                priority
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Get a Quote
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 lg:h-20" />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
