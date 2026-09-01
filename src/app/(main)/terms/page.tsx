import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of the Lemon Environmental Technology website.',
};

const sections = [
  {
    title: 'Website information',
    text: 'This website provides general information about our company, capabilities, and products. Content may be updated without notice and is not a binding offer, technical specification, certification statement, or professional advice.',
  },
  {
    title: 'Quotations and orders',
    text: 'Product availability, specifications, pricing, minimum order quantities, tooling, samples, lead times, payment terms, shipping, warranties, and compliance responsibilities are determined only by a written quotation, contract, purchase order acceptance, or other agreement signed or confirmed by authorized representatives.',
  },
  {
    title: 'Product and market requirements',
    text: 'Customers are responsible for identifying the laws, standards, labeling, registration, testing, and certification requirements applicable to their products and target markets. We will provide available documentation and agreed support, but website content does not guarantee approval by any authority or certification body.',
  },
  {
    title: 'Intellectual property',
    text: 'Unless otherwise stated, the website design, text, graphics, and other content are owned by or licensed to Lemon Environmental Technology Co., Ltd. You may view and print reasonable extracts for internal business evaluation, but may not reproduce or commercially exploit the website without permission.',
  },
  {
    title: 'Acceptable use',
    text: 'You may not misuse the website, attempt unauthorized access, interfere with its operation, submit unlawful or malicious content, or use automated systems in a manner that places an unreasonable load on the service.',
  },
  {
    title: 'Third-party services and links',
    text: 'The website may rely on or link to third-party services. We are not responsible for third-party content, availability, security, or privacy practices. Your use of those services may be governed by separate terms.',
  },
  {
    title: 'Disclaimer and limitation',
    text: 'The website is provided on an “as available” basis. To the extent permitted by applicable law, we disclaim implied warranties relating to the website and are not liable for indirect, incidental, special, or consequential loss arising solely from its use or unavailability.',
  },
  {
    title: 'Changes to these terms',
    text: 'We may update these terms as the website or our practices change. The revised version will be posted here with a new update date. Continued use of the website after an update means you accept the revised terms.',
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-primary py-16 md:py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70">Last updated: August 30, 2026</p>
        </Container>
      </section>

      <section className="section-padding bg-slate-50">
        <Container>
          <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
            <p className="text-slate-600 leading-relaxed mb-8">
              These terms govern your use of lemonenviro.com. By using this website,
              you agree to these terms. If you do not agree, please stop using the site.
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">{section.text}</p>
                </section>
              ))}

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  Contact
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Questions about these terms may be sent to{' '}
                  <a
                    href="mailto:jacho@lemonenviro.com"
                    className="text-primary font-medium hover:underline"
                  >
                    jacho@lemonenviro.com
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
