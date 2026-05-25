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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendContact(data: ContactData): Promise<ActionResult> {
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: 'Please fill in all fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  const name = escapeHtml(data.name)
  const email = escapeHtml(data.email)
  const message = escapeHtml(data.message)

  try {
    await resend.emails.send({
      from: 'contact@benfxphoto.com',
      to: 'benfx@youremail.com',
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send. Please email directly.' }
  }
}
