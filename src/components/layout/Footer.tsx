import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/data/company';
import { footerLinks } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0c2927] text-white">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1.2fr] lg:gap-10 lg:py-20">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Lemon Environmental Technology home">
              <div className="h-14 w-14 bg-white p-1.5">
                <Image
                  src="/images/brand/lemon-logo-concept-v2-transparent.png"
                  alt="Lemon Environmental Technology"
                  width={1309}
                  height={1201}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-base font-semibold">Lemon Environmental</span>
            </Link>
            <p className="mt-6 text-sm leading-6 text-white/60">
              Water purification systems developed and manufactured for brands,
              distributors, and project partners worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Products</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Company</h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">Contact</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3 text-sm leading-6 text-white/60">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                {companyInfo.contact.address}
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="flex gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                  aria-label="Jacho Chou on LinkedIn (opens in a new tab)"
                >
                  <Linkedin className="h-4 w-4 flex-shrink-0 text-accent" />
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
