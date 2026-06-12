'use client'

import { useState } from 'react'
import { sendBooking, type BookingData } from '@/actions/sendBooking'
import DateTimeBooking from './DateTimeBooking'

const shootTypes = ['Street Session', 'Event Coverage', 'College Package', 'Other']
const bookingAreas = ['Orlando', 'Daytona Beach', 'Tampa', 'Winter Park', 'Kissimmee', 'Sanford', 'Deltona', 'Lakeland', 'Melbourne', 'Cocoa Beach', 'Clearwater', 'Saint Petersburg', 'Other City']

const inputClass =
  'w-full bg-surface border border-white/10 text-foreground px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/20'

export default function BookingForm() {
  const [form, setForm] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    shootType: '',
    bookingArea: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  const [customCity, setCustomCity] = useState('')
  const [customShootType, setCustomShootType] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // If "Other City" is selected, use the custom city name
    const finalForm = {
      ...form,
      bookingArea: form.bookingArea === 'Other City' ? customCity : form.bookingArea,
      shootType: form.shootType === 'Other' ? customShootType : form.shootType,
    }
    const result = await sendBooking(finalForm)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error ?? 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <p className="text-accent text-5xl mb-4">✓</p>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Request Received</h3>
        <p className="text-foreground/55">BenFX will be in touch within 48 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">
            Name *
          </label>
          <input name="name" value={form.name} onChange={handleChange} required className={inputClass} />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">
            Email *
          </label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">
            Phone (optional)
          </label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">
            Shoot Type *
          </label>
          <select name="shootType" value={form.shootType} onChange={handleChange} required className={inputClass}>
            <option value="">Select a type</option>
            {shootTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        {form.shootType === 'Other' && (
          <div>
            <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">
              Enter Shoot Type *
            </label>
            <input
              type="text"
              value={customShootType}
              onChange={(e) => setCustomShootType(e.target.value)}
              placeholder="e.g., Branding Session, Music Promo"
              required={form.shootType === 'Other'}
              className={inputClass}
            />
          </div>
        )}
        <div>
          <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">
            Booking Area *
          </label>
          <select name="bookingArea" value={form.bookingArea} onChange={handleChange} required className={inputClass}>
            <option value="">Select a location</option>
            {bookingAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Custom City Input */}
      {form.bookingArea === 'Other City' && (
        <div>
          <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">
            Enter City Name *
          </label>
          <input
            type="text"
            value={customCity}
            onChange={(e) => setCustomCity(e.target.value)}
            placeholder="e.g., Jacksonville, Gainesville"
            required={form.bookingArea === 'Other City'}
            className={inputClass}
          />
        </div>
      )}

      {/* Calendar and Time Picker */}
      <DateTimeBooking
        selectedDate={form.preferredDate}
        selectedTime={form.preferredTime}
        onDateTimeSelect={(date, time) =>
          setForm((prev) => ({ ...prev, preferredDate: date, preferredTime: time }))
        }
      />

      <div>
        <label className="block text-xs tracking-widest uppercase text-foreground/40 mb-2">
          Message / Details
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && <p className="text-red-400 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-accent text-background py-4 text-sm tracking-widest uppercase hover:bg-accent/90 transition-all duration-300 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Booking Request'}
      </button>
    </form>
  )
}
