import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Testimonial({ imageSrc = null, name, job, children }) {
  const hasImage = Boolean(imageSrc)

  return hasImage ? (
    <section className="testimonial with-icon">
      <img className="profile" src={imageSrc} alt="" />
      <div className="text-content">
        <div className="quote-mark">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
        <div className="content">
          <p>{children}</p>
        </div>
        <div className="footer">
          <p className="name">{name}</p>
          <p className="role">{job}</p>
        </div>
      </div>
    </section>
  ) : (
    <section className="testimonial no-icon">
      <div className="content">
        <h1>
          Work <span className="cation">cation</span>
        </h1>
        <p>{children}</p>
        <div className="footer">
          <p className="name">{name}</p>
          <p className="role">{job}</p>
        </div>
      </div>
    </section>
  )
}
