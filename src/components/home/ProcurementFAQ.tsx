import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'What is the difference between OEM and ODM?',
    answer:
      'OEM applies your brand, packaging, and selected options to an existing Lemon platform. ODM is a joint development where the product architecture, housing, and component set are defined together against your brief before mass production.',
  },
  {
    question: 'What details do you need to start a project?',
    answer:
      'A shortlist of target models or applications, intended markets, expected annual volumes, brand and packaging assets, and any special filtration or voltage requirements. The clearer the brief, the faster the first response.',
  },
  {
    question: 'How do we validate before placing an order?',
    answer:
      'Samples of the agreed configuration are available for evaluation. We suggest checking flow rate, fit, finish, documentation, and packaging against your market expectations before confirming the specification.',
  },
  {
    question: 'Can you provide product documentation for our market?',
    answer:
      'Documentation needs are reviewed case by case, since requirements differ across markets. Share your destination-country requirements during inquiry and we will confirm what can be supplied or supported.',
  },
  {
    question: 'How are MOQ and lead time decided?',
    answer:
      'MOQ and lead time are confirmed per agreed configuration — model, branding depth, packaging, and quantity all affect them. We provide both figures with the quotation for the exact specification you approve.',
  },
];

export default function ProcurementFAQ() {
  return (
    <section className="section-aqua section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionTitle
              title="Procurement questions, answered plainly"
              subtitle="The basics OEM and ODM buyers ask before the first technical call."
              align="left"
            />
            <div className="mt-8">
              <Button href="/contact" variant="secondary" size="md">
                Ask your question
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-900/15">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-slate-900/15 py-1 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded px-4 py-5 text-base font-semibold text-[#123f3c] transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123f3c]">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-lg leading-none text-[#7fa33c] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-4 pb-6 pr-10 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
