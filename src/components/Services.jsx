import { useRef, useState } from 'react'
import { services } from '../data/services'
import { CheckIcon } from './Icons'
import './Services.css'

export default function Services({ onBook }) {
  const [activeId, setActiveId] = useState(services[0].id)
  const tabRefs = useRef({})
  const current = services.find((item) => item.id === activeId)

  // Arrow keys, Home and End move between treatments, as expected for tabs.
  const handleKeyDown = (event, index) => {
    let next = null
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % services.length
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + services.length) % services.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = services.length - 1
    if (next === null) return
    event.preventDefault()
    const target = services[next]
    setActiveId(target.id)
    tabRefs.current[target.id]?.focus()
  }

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <h2>Treatments for the whole family</h2>
          <p>Choose a treatment to see who it helps and what happens during the visit.</p>
        </div>

        <div className="services__layout">
          <div className="services__tabs" role="tablist" aria-label="Dental treatments" aria-orientation="vertical">
            {services.map((item, index) => (
              <button
                key={item.id}
                ref={(node) => {
                  tabRefs.current[item.id] = node
                }}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                className="services__tab"
                aria-selected={item.id === activeId}
                aria-controls={`panel-${item.id}`}
                tabIndex={item.id === activeId ? 0 : -1}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div
            className="services__panel"
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            tabIndex={0}
          >
            <h3>{current.name}</h3>
            <p className="services__summary">{current.summary}</p>

            <div className="services__cols">
              <div>
                <h4 className="services__sub">Good for</h4>
                <ul className="services__list">
                  {current.goodFor.map((point) => (
                    <li key={point}>
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="services__sub">What to expect</h4>
                <p>{current.expect}</p>
              </div>
            </div>

            <button type="button" className="btn btn--primary services__book" onClick={() => onBook(current.name)}>
              Book {current.name.toLowerCase()}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
