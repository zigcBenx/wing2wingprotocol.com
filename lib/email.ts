import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string) {
  try {
    console.log('Attempting to send email to:', email)
    console.log('Resend API Key exists:', !!process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
        from: 'Žiga <ziga@benxlabs.com>',
        to: [email],
        subject: '🕊️ Your message is in transit via pigeon...',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <h1 style="color: #222; border-bottom: 2px dashed #aaa; padding-bottom: 10px;">Welcome to Wing2Wing Protocol 🕊️</h1>

            <p style="font-size: 16px;">Hey there!</p>

            <p style="font-size: 16px;">
              Your signup has been <strong>attached to a highly-trained message pigeon</strong> and is currently en route to our servers.
              Estimated delivery time: <em>somewhere between 3 seconds and 3 months</em>, depending on wind conditions and snack breaks.
            </p>

            <p style="font-size: 16px;">
              While we’re waiting for the pigeon to arrive, know this: you’re now officially on the waitlist for the most unreliable and charming communication protocol ever invented.
            </p>

            <p style="font-size: 16px;">
              We’ll keep you updated with major (and minor) developments. Expect more nonsense. And maybe even a demo. 🛠️
            </p>

            <p style="font-size: 16px;">Welcome aboard,<br><strong>Žiga & The Wing2Wing Team</strong></p>

            <p style="font-size: 14px; color: #666; border-top: 1px solid #eee; margin-top: 20px; padding-top: 10px;">
              P.S. No pigeons were harmed in the making of this protocol. Yet.
            </p>
          </div>
        `
      })

    console.log('Resend response data:', data)

    if (error) {
      console.error('Detailed Resend Email Error:', JSON.stringify(error, null, 2))
      return false
    }

    return true
  } catch (err) {
    console.error('Comprehensive Email Error:', err)
    return false
  }
}