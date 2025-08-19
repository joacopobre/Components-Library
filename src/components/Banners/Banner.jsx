import createMessage from '../../utils/buildBannerMessage'

export default function Banner({ type = 'neutral', children }) {
  const className = `banner ${type}`
  const title = createMessage({ type })

  return (
    <section className={className} role="status" aria-live="polite">
      <h1>{title}</h1>
      {children ? <p>{children}</p> : null}
    </section>
  )
}
