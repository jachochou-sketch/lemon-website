import Link from 'next/link';
import {
  Factory,
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
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  <path d="M8 12c0-2.5 2-4 4-4s4 1.5 4 4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white">
                  Lemon
                </span>
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
