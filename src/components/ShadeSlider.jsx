import { useState } from 'react'
import { TOOTH_PATH } from './Icons'
import './ShadeSlider.css'

// Dentists match tooth colour against a shade guide (A1, B1, ...).
// This slider lets visitors move along a few steps of that guide.
const shades = [
  { code: 'A4', color: '#D3BF8E' },
  { code: 'A3.5', color: '#DCCB9F' },
  { code: 'A3', color: '#E4D6B2' },
  { code: 'A2', color: '#ECE3C9' },
  { code: 'A1', color: '#F3EEDD' },
  { code: 'B1', color: '#FAF8F1' },
]

export default function ShadeSlider({ onBook }) {
  const [index, setIndex] = useState(2)
  const shade = shades[index]

  return (
    <figure className="shade">
      <div className="shade__stage">
        <svg className="shade__tooth" viewBox="0 0 200 240" role="img" aria-label={`Tooth shown in shade ${shade.code}`}>
          <path className="shade__fill" d={TOOTH_PATH} fill={shade.color} stroke="#0B3C3E" strokeOpacity="0.25" strokeWidth="3" strokeLinejoin="round" />
          <path d="M46 40C42 56 46 74 54 88" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="7" strokeLinecap="round" />
        </svg>
      </div>

      <figcaption className="shade__panel">
        <div className="shade__head">
          <label className="shade__label" htmlFor="shade-range">
            Tooth shade guide
          </label>
          <span className="shade__code" aria-hidden="true">
            {shade.code}
          </span>
        </div>

        <input
          id="shade-range"
          className="shade__range"
          type="range"
          min={0}
          max={shades.length - 1}
          step={1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          aria-valuetext={`Shade ${shade.code}`}
        />

        <div className="shade__ticks" role="group" aria-label="Shade choices">
          {shades.map((item, i) => (
            <button
              key={item.code}
              type="button"
              className="shade__tick"
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              {item.code}
            </button>
          ))}
        </div>

        <p className="shade__note">
          Dentists compare your tooth colour with a guide like this to plan and track whitening.
        </p>
        <button type="button" className="btn btn--ghost" onClick={() => onBook?.('Teeth whitening')}>
          Ask about whitening
        </button>
      </figcaption>
    </figure>
  )
}
