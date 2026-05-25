'use client'

import { useState } from 'react'
import { sendContact, type ContactData } from '@/actions/sendContact'

const inputClass =
  'w-full bg-surface border border-white/10 text-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors'

export default function ContactForm() {
  const [form, setForm] = useState<ContactData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const result = await sendContact(form)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error ?? 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <p className="text-accent text-4xl mb-4">✓</p>
        <p className="text-foreground/55">Message sent. BenFX will be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">Name *</label>
        <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">Email *</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} />
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && <p className="text-red-400 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full border border-accent text-accent py-4 text-sm tracking-widest uppercase hover:bg-accent hover:text-background transition-all duration-300 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
