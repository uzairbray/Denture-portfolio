export default function ImageSlot({ label = 'Image', icon = '🖼️', hint, minHeight = '200px' }) {
  return (
    <div
      className="w-full rounded-[10px] border-[1.5px] border-dashed border-sand/45 bg-warm flex flex-col items-center justify-center gap-2 my-[22px] text-center p-8"
      style={{ minHeight }}
    >
      <span className="text-[26px] opacity-45">{icon}</span>
      {hint && (
        <span className="text-rust/[0.42] italic text-[13.5px] font-light">{hint}</span>
      )}
      <span className="text-[10px] tracking-[0.14em] uppercase text-rust opacity-65 mt-1">{label}</span>
    </div>
  )
}
