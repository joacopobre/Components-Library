export default function Badge({ variant = '', color = 'gray', children }) {
  const className = ['badge', variant, color].filter(Boolean).join(' ')
  return <span className={className}>{children}</span>
}
