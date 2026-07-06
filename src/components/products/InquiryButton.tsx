'use client';

import { Send } from 'lucide-react';
import Button from '@/components/ui/Button';

interface InquiryButtonProps {
  productName: string;
}

export default function InquiryButton({ productName }: InquiryButtonProps) {
  const handleClick = () => {
    window.location.href = `/contact?product=${encodeURIComponent(productName)}`;
  };

  return (
    <Button onClick={handleClick} variant="primary" size="lg">
      <Send className="w-4 h-4" />
      Inquire About This Product
    </Button>
  );
}
