import { clinic } from '../data/clinic'
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from './Icons'
import './ContactInfo.css'

export default function ContactInfo() {
  return (
    <div className="contact">
      <h3>Visit or call us</h3>

      <ul className="contact__list">
        <li>
          <PinIcon />
          <address>
            {clinic.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </li>
        <li>
          <PhoneIcon />
          <a href={clinic.phoneHref}>{clinic.phone}</a>
        </li>
        <li>
          <MailIcon />
          <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
        </li>
        <li>
          <ClockIcon />
          <dl className="contact__hours">
            {clinic.hours.map((slot) => (
              <div key={slot.days}>
                <dt>{slot.days}</dt>
                <dd>{slot.time}</dd>
              </div>
            ))}
          </dl>
        </li>
      </ul>

      <a className="btn btn--ghost" href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer">
        Open in Google Maps
      </a>
    </div>
  )
}
