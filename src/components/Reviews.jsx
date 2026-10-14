import { reviews } from '../data/reviews'
import './Reviews.css'

// Hidden until real patient reviews are added in src/data/reviews.js
export default function Reviews() {
  if (!reviews.length) return null

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="section-head">
          <h2>What patients say</h2>
        </div>
        <div className="reviews__grid">
          {reviews.map((review) => (
            <figure key={`${review.name}-${review.text.slice(0, 12)}`} className="reviews__item">
              <blockquote>{review.text}</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                {review.treatment && <span>{review.treatment}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
