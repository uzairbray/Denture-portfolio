export function MetricGrid({ children }) {
  return (
    <div className="grid grid-cols-2 gap-[14px] my-[22px]">{children}</div>
  )
}

export function MetricCard({ label, value, unit }) {
  return (
    <div className="bg-ink rounded-[10px] px-[22px] py-5">
      <div className="text-[9px] tracking-[0.18em] uppercase text-sand mb-1.5">{label}</div>
      <div className="font-serif text-[28px] font-light text-white">
        {value}
        {unit && <span className="text-[12px] text-white/40 ml-0.5">{unit}</span>}
      </div>
    </div>
  )
}
