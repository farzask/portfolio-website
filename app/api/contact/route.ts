import { NextRequest, NextResponse } from 'next/server'

// This is a simple email handler. To make it work, integrate with:
// - Resend (https://resend.com) - recommended
// - SendGrid
// - Mailgun
// - EmailJS
// Or connect to your own backend service

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service here
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: 'your@email.com',
    //   subject: `New message from ${name}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // })

    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
