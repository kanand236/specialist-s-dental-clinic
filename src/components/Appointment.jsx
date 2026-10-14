import { useState } from 'react'
import { clinic } from '../data/clinic'
import { services } from '../data/services'
import ContactInfo from './ContactInfo'
import './Appointment.css'

const timeSlots = ['Morning', 'Afternoon', 'Evening']

// Accepts "98765 43210", "+91 98765 43210" and similar. Returns 10 digits or null.
function normalizePhone(raw) {
  let digits = raw.replace(/\D/g, '')
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2)
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1)
  return /^[6-9]\d{9}$/.test(digits) ? digits : null
}

function todayLocal() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export default function Appointment({ service, onServiceChange }) {
  const [values, setValues] = useState({ name: '', phone: '', date: '', time: '', note: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const today = todayLocal()

  const setField = (key) => (event) => {
    const { value } = event.target
    setValues((current) => ({ ...current, [key]: value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
    if (sent) setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const found = {}
    if (values.name.trim().length < 2) found.name = 'Enter your full name.'
    const phone = normalizePhone(values.phone)
    if (!phone) found.phone = 'Enter a 10-digit mobile number, for example 98765 43210.'
    if (values.date && values.date < today) found.date = 'Choose today or a later date.'

    setErrors(found)
    const firstError = Object.keys(found)[0]
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus()
      return
    }

    const lines = [
      `Hello ${clinic.name}, I would like to book an appointment.`,
      '',
      `Name: ${values.name.trim()}`,
      `Phone: ${phone}`,
      `Treatment: ${service || 'Not sure yet'}`,
    ]
    if (values.date) lines.push(`Preferred date: ${values.date}`)
    if (values.time) lines.push(`Preferred time: ${values.time}`)
    if (values.note.trim()) lines.push(`Note: ${values.note.trim()}`)

    const url = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section className="section book" id="book">
      <div className="container">
        <div className="section-head">
          <h2>Book your appointment</h2>
          <p>
            Fill in the form and we will open WhatsApp with your request ready to send. You can
            also call us directly.
          </p>
        </div>

        <div className="book__grid">
          <form className="book__form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="field-name">Full name</label>
              <input
                id="field-name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={setField('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'error-name' : undefined}
              />
              {errors.name && (
                <p className="field__error" id="error-name">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="field-phone">Mobile number</label>
              <input
                id="field-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={setField('phone')}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'error-phone' : undefined}
              />
              {errors.phone && (
                <p className="field__error" id="error-phone">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="field field--wide">
              <label htmlFor="field-service">Treatment</label>
              <select
                id="field-service"
                value={service}
                onChange={(event) => onServiceChange(event.target.value)}
              >
                <option value="">Not sure yet</option>
                {services.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="field-date">Preferred date</label>
              <input
                id="field-date"
                type="date"
                min={today}
                value={values.date}
                onChange={setField('date')}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? 'error-date' : undefined}
              />
              {errors.date && (
                <p className="field__error" id="error-date">
                  {errors.date}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="field-time">Preferred time</label>
              <select id="field-time" value={values.time} onChange={setField('time')}>
                <option value="">Any time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="field field--wide">
              <label htmlFor="field-note">Anything we should know? (optional)</label>
              <textarea id="field-note" rows={3} value={values.note} onChange={setField('note')} />
            </div>

            <div className="book__submit">
              <button type="submit" className="btn btn--primary btn--lg">
                Send request on WhatsApp
              </button>
              {sent && (
                <p className="book__status" role="status">
                  WhatsApp should have opened with your request filled in. Press send there to
                  confirm. If nothing opened, call us on{' '}
                  <a href={clinic.phoneHref}>{clinic.phone}</a>.
                </p>
              )}
            </div>
          </form>

          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
