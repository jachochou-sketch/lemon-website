'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu } from 'lucide-react';
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
          'fixed top-0 left-0 right-0 z-30 border-b transition-colors duration-200',
          isScrolled
            ? 'bg-[#f7f8f4]/95 backdrop-blur-md border-slate-900/10'
            : 'bg-[#f7f8f4] border-slate-900/10'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-[72px] lg:h-[84px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label="Lemon Environmental Technology home">
              <Image
                src="/images/brand/lemon-logo-concept-v2-transparent.png"
                alt="Lemon Environmental Technology"
                width={1309}
                height={1201}
                priority
                className="w-11 h-11 lg:w-12 lg:h-12 object-contain"
              />
              <span className="hidden sm:block leading-none">
                <span className="block text-[15px] font-semibold tracking-[-0.02em] text-[#102725]">Lemon Environmental</span>
                <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-slate-500">Water purification manufacturing</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-primary after:transition-transform',
                    pathname === link.href
                      ? 'text-primary after:scale-x-100'
                      : 'text-slate-600 hover:text-primary after:scale-x-0'
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
                Discuss a Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="border border-slate-900/15 p-2.5 transition-colors hover:border-primary lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[72px] lg:h-[84px]" />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
