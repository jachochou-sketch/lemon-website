'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import {
  contactFormSchema,
  type ContactFormSchema,
} from '@/lib/validators';

const countryOptions = [
  { value: '', label: 'Select your country' },
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'BE', label: 'Belgium' },
  { value: 'CA', label: 'Canada' },
  { value: 'AU', label: 'Australia' },
  { value: 'JP', label: 'Japan' },
  { value: 'KR', label: 'South Korea' },
  { value: 'SG', label: 'Singapore' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'BR', label: 'Brazil' },
  { value: 'MX', label: 'Mexico' },
  { value: 'OTHER', label: 'Other' },
];

const productOptions = [
  { value: '', label: 'Select product interest (optional)' },
  { value: 'RO Water Purifiers', label: 'RO Water Purifiers' },
  { value: 'UF Water Purifiers', label: 'UF Water Purifiers' },
  { value: 'UV Sterilization Systems', label: 'UV Sterilization Systems' },
  { value: 'Water Softener Systems', label: 'Water Softener Systems' },
  { value: 'RO Membrane Elements', label: 'RO Membrane Elements' },
  { value: 'Replacement Filters', label: 'Replacement Filters' },
  { value: 'Custom ODM / OEM', label: 'Custom ODM / OEM' },
];

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const defaultProduct = searchParams.get('product') || '';

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fallbackEmail, setFallbackEmail] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      productInterest: defaultProduct,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setSubmitStatus('submitting');
    setErrorMessage('');
    setFallbackEmail('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.fallbackEmail) {
          setFallbackEmail(result.fallbackEmail);
        }
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'An unexpected error occurred.'
      );
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Thank You for Your Inquiry!
        </h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          We have received your message and our team will contact you within
          one business day. For urgent inquiries, please call us at +86 132 5049 6024.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitStatus('idle')}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {submitStatus === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-800">
              Submission Failed
            </p>
            <p className="text-sm text-red-600 mt-0.5">{errorMessage}</p>
            {fallbackEmail && (
              <a
                href={`mailto:${fallbackEmail}`}
                className="inline-block text-sm font-semibold text-red-700 underline mt-2"
              >
                Email {fallbackEmail} directly
              </a>
            )}
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Input
          label="First Name"
          {...register('firstName')}
          error={errors.firstName?.message}
          required
          placeholder="John"
        />
        <Input
          label="Last Name"
          {...register('lastName')}
          error={errors.lastName?.message}
          required
          placeholder="Smith"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Input
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          required
          placeholder="john@company.com"
        />
        <Input
          label="Phone"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div className="mb-4">
        <Input
          label="Company"
          {...register('company')}
          error={errors.company?.message}
          required
          placeholder="Your Company Ltd."
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Select
          label="Country"
          options={countryOptions}
          {...register('country')}
          error={errors.country?.message}
          required
        />
        <Select
          label="Product Interest"
          options={productOptions}
          {...register('productInterest')}
          error={errors.productInterest?.message}
        />
      </div>

      <div className="mb-6">
        <Textarea
          label="Message"
          {...register('message')}
          error={errors.message?.message}
          required
          placeholder="Please describe your requirements, including quantities, materials, and any specific technical needs..."
          rows={6}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={submitStatus === 'submitting'}
        className="w-full sm:w-auto"
      >
        {submitStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  );
}
