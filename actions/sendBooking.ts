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

export async function sendBooking(data: BookingData): Promise<ActionResult> {
  if (!data.name || !data.email || !data.shootType || !data.preferredDate) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  try {
    await resend.emails.send({
      from: 'bookings@benfxphoto.com',
      to: 'benfx@youremail.com',
      subject: `New Booking — ${data.shootType} from ${data.name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Shoot Type:</strong> ${data.shootType}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        <p><strong>Message:</strong> ${data.message || 'No message provided'}</p>
      `,
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send. Please try again or email directly.' }
  }
}
