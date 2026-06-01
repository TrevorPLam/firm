import { sql } from '../../lib/neon';
import { Resend } from 'resend';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Store in Neon database
    await sql`
      INSERT INTO contact_submissions (name, email, subject, message, created_at)
      VALUES (${name}, ${email}, ${subject}, ${message}, NOW())
    `;

    // Send email using Resend
    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    const emailResult = await resend.emails.send({
      from: import.meta.env.EMAIL_FROM || 'noreply@your-domain.com',
      to: import.meta.env.EMAIL_TO || 'contact@your-domain.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (emailResult.error) {
      console.error('Email send error:', emailResult.error);
      // Return success even if email fails (data is stored in database)
      // but log the error for monitoring
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
