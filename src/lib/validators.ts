import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name is too long'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name is too long'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[\d\s()-]{7,20}$/.test(val),
      'Please enter a valid phone number'
    ),
  country: z
    .string()
    .min(1, 'Please select your country'),
  productInterest: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long (max 2000 characters)'),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
