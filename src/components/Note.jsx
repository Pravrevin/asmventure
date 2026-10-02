import Icon from './Icon.jsx'

// variant: info | warn | ok
export default function Note({ variant = 'info', icon = 'Info', title, children, style }) {
  return (
    <div className={`note note-${variant}`} style={style}>
      <span className="note-icon"><Icon name={icon} size={18} /></span>
      <div>
        {title && <h4>{title}</h4>}
        <p>{children}</p>
      </div>
    </div>
  )
}
