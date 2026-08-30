import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Lemon Environmental Technology collects, uses, and protects information submitted through lemonenviro.com.',
};

const sections = [
  {
    title: 'Information we collect',
    content: (
      <>
        <p>
          When you contact us, we may collect your name, business email address,
          telephone number, company, country, product interests, and the information
          you include in your message.
        </p>
        <p>
          Our hosting and security providers may also process limited technical
          information, such as IP address, browser type, requested pages, and security
          events, to deliver and protect this website.
        </p>
      </>
    ),
  },
  {
    title: 'How we use information',
    content: (
      <p>
        We use submitted information to answer inquiries, prepare quotations,
        evaluate ODM/OEM projects, provide requested support, maintain business
        records, prevent abuse, and comply with applicable legal obligations.
      </p>
    ),
  },
  {
    title: 'Service providers and international processing',
    content: (
      <p>
        We use service providers for website hosting, security, and inquiry delivery.
        These providers process information on our behalf and may operate in countries
        other than your own. We do not sell personal information.
      </p>
    ),
  },
  {
    title: 'Retention and security',
    content: (
      <p>
        We retain inquiry information only for as long as reasonably necessary for
        the business purpose described above or as required by law. We use reasonable
        administrative and technical safeguards, but no Internet transmission or
        storage system can be guaranteed completely secure.
      </p>
    ),
  },
  {
    title: 'Your choices',
    content: (
      <p>
        Depending on your location, you may have rights to request access, correction,
        deletion, restriction, or a copy of your personal information. You may also
        object to certain processing. We may need to verify your identity before
        completing a request.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-primary py-16 md:py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70">Last updated: August 30, 2026</p>
        </Container>
      </section>

      <section className="section-padding bg-slate-50">
        <Container>
          <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
            <p className="text-slate-600 leading-relaxed mb-8">
              Lemon Environmental Technology Co., Ltd. respects your privacy. This
              policy explains how information is handled when you visit
              lemonenviro.com or contact us through the website.
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-slate-600 leading-relaxed">
                    {section.content}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  Contact us
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  For privacy questions or requests, email{' '}
                  <a
                    href="mailto:jachochou@gmail.com"
                    className="text-primary font-medium hover:underline"
                  >
                    jachochou@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
