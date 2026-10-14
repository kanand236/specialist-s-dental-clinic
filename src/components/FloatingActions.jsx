import { clinic } from '../data/clinic'
import { ChatIcon, PhoneIcon } from './Icons'
import './FloatingActions.css'

export default function FloatingActions() {
  return (
    <div className="float">
      <a className="float__btn float__btn--call" href={clinic.phoneHref} aria-label="Call the clinic">
        <PhoneIcon />
      </a>
      <a
        className="float__btn float__btn--chat"
        href={`https://wa.me/${clinic.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ChatIcon />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  )
}
