export default function SecLabel({ children }) {
  return (
    <div className="text-[9px] tracking-[0.22em] uppercase text-rust font-semibold mb-2.5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-sand after:to-transparent after:max-w-[70px]">
      {children}
    </div>
  )
}
