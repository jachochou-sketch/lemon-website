import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validators';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: 'Validation failed. Please check your inputs.',
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // In a production environment, integrate with an email service here
    // Examples: Resend, SendGrid, Nodemailer + SMTP, etc.
    //
    // await resend.emails.send({
    //   from: 'inquiries@eastmfg.com',
    //   to: 'info@eastmfg.com',
    //   subject: `New Inquiry from ${data.firstName} ${data.lastName} — ${data.company}`,
    //   html: `<h1>New Contact Form Inquiry</h1>
    //     <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Company:</strong> ${data.company}</p>
    //     <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
    //     <p><strong>Country:</strong> ${data.country}</p>
    //     <p><strong>Product Interest:</strong> ${data.productInterest || 'N/A'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>`,
    // });

    // For now, log the inquiry and return success
    console.log('--- New Contact Form Inquiry ---');
    console.log('Name:', data.firstName, data.lastName);
    console.log('Email:', data.email);
    console.log('Company:', data.company);
    console.log('Phone:', data.phone || 'N/A');
    console.log('Country:', data.country);
    console.log('Product Interest:', data.productInterest || 'N/A');
    console.log('Message:', data.message);
    console.log('--------------------------------');

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you for your inquiry! We will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
