'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactData {
  name: string
  email: string
  message: string
}

export interface ActionResult {
  success: boolean
  error?: string
}

export async function sendContact(data: ContactData): Promise<ActionResult> {
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: 'Please fill in all fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  try {
    await resend.emails.send({
      from: 'contact@benfxphoto.com',
      to: 'benfx@youremail.com',
      subject: `New Message from ${data.name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send. Please email directly.' }
  }
}
