import {
  Shirt, Medal, Timer, Coffee, HeartPulse, Droplets, Ban, Clock, MapPin, ShieldCheck, TrainFront, Bus,
  SquareParking, Info, FileText, CheckCircle2, Leaf, AlertTriangle, Zap, Briefcase, IdCard, Circle,
} from 'lucide-react'

// Content files reference icons by name; add new ones here when you use them.
const ICONS = {
  Shirt, Medal, Timer, Coffee, HeartPulse, Droplets, Ban, Clock, MapPin, ShieldCheck, TrainFront, Bus,
  SquareParking, Info, FileText, CheckCircle2, Leaf, AlertTriangle, Zap, Briefcase, IdCard,
}

export default function Icon({ name, size = 20, ...rest }) {
  const Cmp = ICONS[name] || Circle
  return <Cmp size={size} strokeWidth={2} aria-hidden="true" {...rest} />
}
