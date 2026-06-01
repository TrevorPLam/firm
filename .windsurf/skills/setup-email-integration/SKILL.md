---
name: setup-email-integration
description: Guide for integrating email service (Resend/SendGrid) with Astro for contact forms and notifications
---

## Steps

1. **Choose email service provider**
   - Resend: Recommended for simplicity and developer experience
   - SendGrid: Enterprise-grade with advanced features
   - Mailgun: Alternative with good API
   - Consider pricing and features

2. **Install email SDK**
   - For Resend: `npm install resend`
   - For SendGrid: `npm install @sendgrid/mail`
   - Install chosen package

3. **Get API key**
   - Create account with email service
   - Generate API key in dashboard
   - Add API key to environment variables
   - Never commit API key to repository

4. **Add environment variables**
   - Add to `.env` file
   - Add API key: `RESEND_API_KEY=your_key`
   - Add from/to emails: `EMAIL_FROM=noreply@domain.com`, `EMAIL_TO=contact@domain.com`
   - Add to `.env.example` as template

5. **Add TypeScript types**
   - Update `src/env.d.ts`
   - Add API key and email addresses to ImportMetaEnv
   - This provides type safety

6. **Create email utility**
   - Create `src/lib/email.ts`
   - Import email SDK
   - Create reusable email function
   - Configure default from/to addresses

7. **Integrate with contact form**
   - Import email utility in API route
   - Send email after form submission
   - Include form data in email body
   - Handle errors gracefully

8. **Test email sending**
   - Test with real email address
   - Verify email arrives
   - Check spam folder
   - Test error handling

## Example Email Utility (Resend)

```typescript
// src/lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const data = await resend.emails.send({
      from: import.meta.env.EMAIL_FROM,
      to,
      subject,
      html,
    });
    return { success: true, data };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}
```

## Example API Route Integration

```typescript
// src/pages/api/contact.ts
import { sendEmail } from '../../lib/email';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  // Store in database first...

  // Send email
  const result = await sendEmail({
    to: import.meta.env.EMAIL_TO,
    subject: `Contact Form: ${data.get('subject')}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  if (!result.success) {
    return new Response('Email failed', { status: 500 });
  }

  return new Response('Success', { status: 200 });
};
```

## Example Environment Variables

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=contact@yourdomain.com
```

## Best Practices

- Use environment variables for API keys
- Never hardcode credentials
- Handle errors gracefully
- Test email delivery
- Use HTML templates for better formatting
- Consider email verification for sender
- Monitor email deliverability
- Use DKIM/SPF records for domain authentication
