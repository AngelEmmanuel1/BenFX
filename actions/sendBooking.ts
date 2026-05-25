'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface BookingData {
  name: string
  email: string
  phone?: string
  shootType: string
  preferredDate: string
  message: string
}

export interface ActionResult {
  success: boolean
  error?: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendBooking(data: BookingData): Promise<ActionResult> {
  if (!data.name || !data.email || !data.shootType || !data.preferredDate) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  const name = escapeHtml(data.name)
  const email = escapeHtml(data.email)
  const phone = escapeHtml(data.phone ?? '')
  const shootType = escapeHtml(data.shootType)
  const preferredDate = escapeHtml(data.preferredDate)
  const message = escapeHtml(data.message)

  try {
    await resend.emails.send({
      from: 'bookings@benfxphoto.com',
      to: 'benfx@youremail.com',
      subject: `New Booking — ${shootType} from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Shoot Type:</strong> ${shootType}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send. Please try again or email directly.' }
  }
}
