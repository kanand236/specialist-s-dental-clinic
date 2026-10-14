import { clinic } from '../data/clinic'
import { ToothMark } from './Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <ToothMark />
          <div>
            <p className="footer__name">{clinic.name}</p>
            <p className="footer__line">{clinic.address.join(', ')}</p>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#services">Treatments</a>
          <a href="#visit">Your visit</a>
          <a href="#faq">Questions</a>
          <a href="#book">Book appointment</a>
        </nav>
      </div>

      <div className="container footer__legal">
        <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
        <p>
          The information on this site is general. Diagnosis and treatment advice are given only
          after an examination.
        </p>
      </div>
    </footer>
  )
}
