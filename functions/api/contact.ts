type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  country?: string;
  productInterest?: string;
  message?: string;
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export const onRequestPost = async ({ request }: { request: Request }) => {
  try {
    const data = (await request.json()) as ContactPayload;
    const requiredFields: Array<keyof ContactPayload> = [
      'firstName',
      'lastName',
      'email',
      'company',
      'country',
      'message',
    ];

    const missingFields = requiredFields.filter(
      (field) => typeof data[field] !== 'string' || !data[field]?.trim()
    );

    if (missingFields.length > 0) {
      return json(
        {
          error: 'Validation failed. Please check your inputs.',
          fieldErrors: Object.fromEntries(
            missingFields.map((field) => [field, ['This field is required.']])
          ),
        },
        400
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email!)) {
      return json(
        {
          error: 'Validation failed. Please check your inputs.',
          fieldErrors: { email: ['Please enter a valid email address.'] },
        },
        400
      );
    }

    console.log('New contact form inquiry', {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    return json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return json(
      { error: 'An unexpected error occurred. Please try again later.' },
      500
    );
  }
};
