'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface InquiryButtonProps {
  productName: string;
  productModel?: string;
  serviceOptions: Array<'OEM' | 'ODM'>;
}

const serviceDescriptions = {
  OEM: 'Use this proven product with your logo, color and packaging.',
  ODM: 'Adapt the design, filtration, features and specifications for your market.',
};

export default function InquiryButton({
  productName,
  productModel,
  serviceOptions,
}: InquiryButtonProps) {
  const [selectedService, setSelectedService] = useState<'OEM' | 'ODM'>(
    serviceOptions[0] ?? 'OEM'
  );

  const handleClick = () => {
    const params = new URLSearchParams({
      product: productModel ? `${productName} (${productModel})` : productName,
      service: selectedService,
    });
    window.location.href = `/contact?${params.toString()}`;
  };

  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white mb-3">
        Choose your cooperation option
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3" role="group" aria-label="Cooperation option">
        {serviceOptions.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={selectedService === option}
            onClick={() => setSelectedService(option)}
            className={cn(
              'rounded-lg border px-4 py-3 text-left transition-all',
              selectedService === option
                ? 'border-accent bg-accent text-white shadow-lg shadow-accent/20'
                : 'border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10'
            )}
          >
            <span className="block text-base font-bold">{option}</span>
            <span className="mt-0.5 block text-xs opacity-80">
              {option === 'OEM' ? 'Private label' : 'Custom development'}
            </span>
          </button>
        ))}
      </div>
      <p className="text-xs leading-relaxed text-white/60 mb-4">
        {serviceDescriptions[selectedService]}
      </p>
      <Button onClick={handleClick} variant="primary" size="lg" className="w-full sm:w-auto">
        <Send className="w-4 h-4" />
        Request an {selectedService} Quote
      </Button>
    </div>
  );
}
