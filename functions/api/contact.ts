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

type ContactEnv = {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

type ResendResponse = {
  id?: string;
};

const fallbackEmail = 'jachochou@gmail.com';

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

function escapeHtml(value: string | undefined) {
  return (value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function display(value: string | undefined) {
  return value?.trim() || 'Not provided';
}

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: ContactEnv;
}) => {
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

    if (!env.RESEND_API_KEY) {
      console.warn('Contact email delivery is not configured.');
      return json(
        {
          error:
            'Online form delivery is temporarily unavailable. Please email us directly.',
          fallbackEmail,
        },
        503
      );
    }

    const toEmail = env.CONTACT_TO_EMAIL || fallbackEmail;
    const fromEmail =
      env.CONTACT_FROM_EMAIL || 'Lemon Website <onboarding@resend.dev>';
    const subjectContext = display(data.productInterest || data.company).slice(0, 80);
    const fullName = `${data.firstName!.trim()} ${data.lastName!.trim()}`;

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email!.trim(),
        subject: `Website inquiry: ${subjectContext}`,
        text: [
          `Name: ${fullName}`,
          `Email: ${data.email!.trim()}`,
          `Company: ${data.company!.trim()}`,
          `Phone: ${display(data.phone)}`,
          `Country: ${data.country!.trim()}`,
          `Product interest: ${display(data.productInterest)}`,
          '',
          'Message:',
          data.message!.trim(),
        ].join('\n'),
        html: `
          <h2>New website inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(display(data.phone))}</p>
          <p><strong>Country:</strong> ${escapeHtml(data.country)}</p>
          <p><strong>Product interest:</strong> ${escapeHtml(display(data.productInterest))}</p>
          <h3>Message</h3>
          <p>${escapeHtml(data.message).replaceAll('\n', '<br />')}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      console.error('Contact email delivery failed', {
        status: emailResponse.status,
        receivedAt: new Date().toISOString(),
      });
      return json(
        {
          error:
            'We could not deliver your inquiry. Please email us directly instead.',
          fallbackEmail,
        },
        502
      );
    }

    const delivery = (await emailResponse.json()) as ResendResponse;
    console.log('Contact email delivered', {
      deliveryId: delivery.id,
      receivedAt: new Date().toISOString(),
    });

    return json({
      success: true,
      delivered: true,
      message: 'Thank you for your inquiry. We will reply within one business day.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return json(
      { error: 'An unexpected error occurred. Please try again later.' },
      500
    );
  }
};
