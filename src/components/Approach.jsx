import './Approach.css'

const items = [
  {
    title: 'Listen first',
    text: 'Every visit starts with your questions, not our schedule.',
  },
  {
    title: 'Show, then explain',
    text: 'We show you what we see in the mirror or on the X-ray before we recommend anything.',
  },
  {
    title: 'Clear cost upfront',
    text: 'You know the plan, the number of visits and the cost before treatment begins.',
  },
  {
    title: 'Gentle with nervous patients',
    text: 'Tell us if you are anxious. We go slowly, explain each step and stop when you ask.',
  },
]

export default function Approach() {
  return (
    <section className="section section--dark approach">
      <div className="container approach__grid">
        <h2>How we look after you</h2>
        <dl className="approach__list">
          {items.map((item) => (
            <div key={item.title} className="approach__item">
              <dt>{item.title}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
