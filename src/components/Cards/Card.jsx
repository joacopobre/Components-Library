import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getCardMeta from '../../utils/getCardMeta'

export default function Card({ type = 'download', children }) {
  const { icon, message } = getCardMeta(type)

  return (
    <article className="card">
      {icon ? (
        <div className={`icon ${type}`} aria-hidden="true">
          <FontAwesomeIcon icon={icon} />
        </div>
      ) : null}

      <h1>{message}</h1>
      <p>{children}</p>
    </article>
  )
}
