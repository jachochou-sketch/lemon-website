'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLink } from '@/types';
import Button from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-[#102725]/45 z-40 transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[86%] max-w-sm bg-[#f7f8f4] z-50 border-l border-slate-900/10 transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-900/10">
          <Link href="/" className="flex items-center gap-3" aria-label="Lemon Environmental Technology home">
            <Image
              src="/images/brand/lemon-logo-concept-v2-transparent.png"
              alt="Lemon Environmental Technology"
              width={1309}
              height={1201}
              className="w-11 h-11 object-contain"
            />
            <span className="text-sm font-semibold text-[#102725]">Lemon Environmental</span>
          </Link>
          <button
            onClick={onClose}
            className="border border-slate-900/15 p-2 transition-colors hover:border-primary"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <nav className="flex flex-col px-5 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'border-b border-slate-900/10 px-1 py-4 text-lg font-medium transition-colors',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-slate-700 hover:text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-slate-900/10">
          <Button href="/contact" variant="primary" className="w-full">
            Discuss a Project
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
