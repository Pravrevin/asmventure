import { useState } from 'react'

// tabs = [{ id, label, content }]
export default function Tabs({ tabs, variant = '' }) {
  const [active, setActive] = useState(tabs[0]?.id)
  const current = tabs.find((t) => t.id === active) || tabs[0]
  return (
    <div className={`tabs ${variant}`}>
      <div className="seg" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={active === t.id ? 'on' : ''}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tab-panel" key={current.id}>{current.content}</div>
    </div>
  )
}
