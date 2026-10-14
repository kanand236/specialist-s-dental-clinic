import { useState } from 'react'
import { clinic } from '../data/clinic'
import { ToothMark, MenuIcon, CloseIcon } from './Icons'
import './Navbar.css'

const links = [
  { href: '#services', label: 'Treatments' },
  { href: '#about', label: 'About' },
  { href: '#visit', label: 'Your visit' },
  { href: '#faq', label: 'Questions' },
  { href: '#book', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={close}>
          <ToothMark />
          <span>{clinic.name}</span>
        </a>

        <nav
          id="primary-nav"
          className={`nav__links${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {links.map((link) => (
            <a key={link.href} className="nav__link" href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--primary nav__cta" href="#book" onClick={close}>
            Book appointment
          </a>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}
