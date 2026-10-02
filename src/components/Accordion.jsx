import { useState } from 'react'
import { Plus } from 'lucide-react'

// items = [{ q, a }]
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="acc">
      {items.map((it, i) => (
        <div className={`acc-item${open === i ? ' open' : ''}`} key={i}>
          <button className="acc-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            <span className="acc-n">{String(i + 1).padStart(2, '0')}</span>
            <span className="acc-text">{it.q}</span>
            <span className="acc-plus"><Plus size={18} /></span>
          </button>
          <div className="acc-a"><div><p>{it.a}</p></div></div>
        </div>
      ))}
    </div>
  )
}
