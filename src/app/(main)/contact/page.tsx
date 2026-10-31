import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Linkedin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Lemon Environmental Technology for water purifier ODM/OEM quotations, product development, and partnership inquiries.',
};

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: companyInfo.contact.email,
    href: `mailto:${companyInfo.contact.email}`,
    description: 'Send us your product requirements',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: companyInfo.contact.phone,
    href: `tel:${companyInfo.contact.phone}`,
    description: 'Call us during business hours',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Jacho Chou',
    href: companyInfo.contact.linkedin,
    description: 'Connect with us on LinkedIn',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: companyInfo.contact.address,
    href: '#',
    description: 'Visit our manufacturing facility',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: companyInfo.contact.workingHours,
    href: '#',
    description: 'We reply to emails within 24 hours',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Project enquiry</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#102725] md:text-6xl">
              Tell us what you need to build
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share your market, product format, filtration requirements, and expected
              volume. Our team will review the brief and reply within one business day.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form + Info */}
      <section className="section-aqua section-padding">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card padding="lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Send Us an Inquiry
                    </h2>
                    <p className="text-sm text-slate-500">
                      All fields marked with * are required
                    </p>
                  </div>
                </div>
                <Suspense fallback={
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  </div>
                }>
                  <ContactForm />
                </Suspense>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const isLink = method.href !== '#';
                const isExternal = method.href.startsWith('http');
                const Component = isLink ? 'a' : 'div';
                return (
                <Card key={method.label} padding="md" hover>
                  <Component
                    {...(isLink ? {
                      href: method.href,
                      ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                    } : {})}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        {method.label}
                      </h3>
                      <p className="mt-0.5 break-words text-sm leading-5 text-slate-600">
                        {method.value}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {method.description}
                      </p>
                    </div>
                  </Component>
                </Card>
              )})}

              <Card padding="md">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Helpful project details
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {[
                    'Target market and required certifications',
                    'Preferred filtration technology and product format',
                    'Estimated order quantity and launch timeline',
                    'Branding, packaging, and customization needs',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* What happens next */}
      <section className="border-t border-slate-900/10 bg-white section-padding">
        <Container>
          <p className="eyebrow">What happens next</p>
          <h2 className="mt-4 text-2xl font-semibold text-[#102725] md:text-3xl">
            Three simple steps after you send an inquiry
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Brief review',
                body: 'We read your market, water conditions, format, and volume details, and come back with any questions needed to assess feasibility.',
              },
              {
                step: '2',
                title: 'Configuration discussion',
                body: 'We align on a suitable platform or development path, covering configuration, branding, packaging, and documentation scope.',
              },
              {
                step: '3',
                title: 'Sample & quotation agreement',
                body: 'Where appropriate, samples and a written quotation are agreed together before any production commitment is made.',
              },
            ].map((item) => (
              <div key={item.step} className="border border-slate-900/10 bg-[#f7f8f4] p-6">
                <span className="flex h-9 w-9 items-center justify-center border border-primary/30 bg-[#eef6f7] text-sm font-semibold text-primary">
                  {item.step}
                </span>
                <h3 className="mt-4 text-base font-semibold text-[#102725]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            We confirm timelines and commercial terms with you once the product
            configuration, quantity, and project scope are defined.
          </p>
        </Container>
      </section>
    </>
  );
}
