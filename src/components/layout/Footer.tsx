import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/data/company';
import { footerLinks } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <Container>
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-flex mb-4" aria-label="Lemon Environmental Technology home">
              <div className="w-16 h-16 rounded-xl bg-white p-1.5 shadow-sm">
                <Image
                  src="/images/brand/lemon-logo-concept-v2-transparent.png"
                  alt="Lemon Environmental Technology"
                  width={1309}
                  height={1201}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              {companyInfo.tagline}
            </p>
            <p className="text-xs leading-relaxed text-slate-500">
              ODM &amp; OEM water purification solutions for international brands and distributors.
            </p>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-accent transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-slate-400 hover:text-accent transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                {companyInfo.contact.address}
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="flex gap-3 text-sm text-slate-400 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex gap-3 text-sm text-slate-400 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                {companyInfo.contact.workingHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
