import { clinic } from '../data/clinic'
import { ClockIcon } from './Icons'
import ShadeSlider from './ShadeSlider'
import './Hero.css'

export default function Hero({ onBook }) {
  const weekdayHours = clinic.hours[0]

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1>Dental care that explains before it treats.</h1>
          <p className="hero__lead">
            {clinic.name} offers check-ups, root canals, implants, braces, whitening and
            children&rsquo;s dentistry. You get a clear plan and cost before any treatment
            starts.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#book">
              Book an appointment
            </a>
            <a className="hero__call" href={clinic.phoneHref}>
              Call {clinic.phone}
            </a>
          </div>
          {weekdayHours && (
            <p className="hero__hours">
              <ClockIcon />
              <span>
                Open {weekdayHours.days}, {weekdayHours.time}
              </span>
            </p>
          )}
        </div>

        <ShadeSlider onBook={onBook} />
      </div>
    </section>
  )
}
