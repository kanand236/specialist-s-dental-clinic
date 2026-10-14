import { faqs } from '../data/faqs'
import { PlusIcon } from './Icons'
import './Faq.css'

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro">
          <h2>Questions patients ask us</h2>
          <p>
            Can&rsquo;t find your answer? Call or message us and we will help.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((item) => (
            <details key={item.q} className="faq__item">
              <summary>
                <span>{item.q}</span>
                <PlusIcon className="faq__icon" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
