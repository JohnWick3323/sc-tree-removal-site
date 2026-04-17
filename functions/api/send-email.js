import { Resend } from 'resend';

export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const location = formData.get('location');
    const message = formData.get('message');

    // API Key from site.ts (or we could use env.RESEND_API_KEY for better security)
    // For now, using a hardcoded placeholder to match site.ts if needed, but best practice is ENV.
    const resend = new Resend('re_WQRUsjvv_51EBkRDD89PeoV2QupBzN99j');

    const { data, error } = await resend.emails.send({
      from: 'SC Tree Removal <leads@southcarolinatreeremovalexperts.com>',
      to: ['contact@southcarolinatreeremovalexperts.com'],
      subject: `New Lead: ${service} in ${location}`,
      reply_to: email,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    // Success redirect
    return Response.redirect(`${new URL(request.url).origin}/contact/?success=true`, 303);

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
