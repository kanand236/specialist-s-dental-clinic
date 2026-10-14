import './Visit.css'

const steps = [
  {
    title: 'Book',
    text: 'Call, message us on WhatsApp or use the form below. We confirm a time that suits you.',
  },
  {
    title: 'Talk and examine',
    text: 'We ask about your symptoms and history, then examine your teeth and gums. X-rays only when needed.',
  },
  {
    title: 'Plan and cost',
    text: 'You get a clear plan: what to do first, how many visits it takes and what it costs.',
  },
  {
    title: 'Treatment',
    text: 'Treatment starts only after you agree, and you can ask us to stop at any time.',
  },
  {
    title: 'Follow-up',
    text: 'We give aftercare instructions and book a review so small problems stay small.',
  },
]

export default function Visit() {
  return (
    <section className="section" id="visit">
      <div className="container">
        <div className="section-head">
          <h2>What happens when you visit</h2>
          <p>Five steps from your first call to your follow-up.</p>
        </div>

        <ol className="visit__steps">
          {steps.map((step, index) => (
            <li key={step.title} className="visit__step">
              <span className="visit__num" aria-hidden="true">
                {index + 1}
              </span>
              <div className="visit__body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
