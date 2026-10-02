import { useEffect, useState } from 'react'

const pad = (n, l = 2) => String(n).padStart(l, '0')

// Always target the next upcoming race day (Feb 14, 5 AM IST) so the clock never freezes.
export function nextRaceDate(from = new Date()) {
  const year = from.getFullYear()
  let target = new Date(`${year}-02-14T05:00:00+05:30`)
  if (target - from <= 0) target = new Date(`${year + 1}-02-14T05:00:00+05:30`)
  return target
}

export default function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, new Date(target) - new Date())
    return {
      days: pad(Math.floor(diff / 86400000), 3),
      hours: pad(Math.floor((diff % 86400000) / 3600000)),
      mins: pad(Math.floor((diff % 3600000) / 60000)),
      secs: pad(Math.floor((diff % 60000) / 1000)),
    }
  }
  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])
  return t
}
