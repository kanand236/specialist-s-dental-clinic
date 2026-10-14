import { clinic } from '../data/clinic'
import './About.css'

export default function About() {
  const { doctor } = clinic

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <aside className="about__card">
          <div className="about__monogram" aria-hidden="true">
            {doctor.initials}
          </div>
          <p className="about__name">{doctor.name}</p>
          <p className="about__title">{doctor.title}</p>
          <p className="about__bio">{doctor.bio}</p>
        </aside>

        <div className="about__text">
          <h2>A clinic built around clear answers</h2>
          <p>
            {clinic.name} is a family dental practice. Every visit starts with listening: what
            hurts, what worries you, and what you want your smile to do.
          </p>
          <p>
            Then we examine, show you what we see in the mirror or on the X-ray, and explain your
            options in plain language, including how many visits to expect and what each one costs.
          </p>
          <a className="btn btn--ghost" href="#book">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  )
}
