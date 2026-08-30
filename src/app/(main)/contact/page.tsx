import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2 } from 'lucide-react';
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
      <section className="bg-gradient-primary py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Ready to discuss your project? Fill out the form below and our team
              will review your requirements and reply within one business day.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-slate-50">
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
                const Component = isLink ? 'a' : 'div';
                return (
                <Card key={method.label} padding="md" hover>
                  <Component
                    {...(isLink ? { href: method.href } : {})}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        {method.label}
                      </h3>
                      <p className="text-slate-600 text-sm mt-0.5 break-all">
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
    </>
  );
}
