export default function PageHeader({ eyebrow, children }) {
  return (
    <div className="bg-ink px-[72px] pt-14 pb-[46px] relative overflow-hidden max-[820px]:px-6 max-[820px]:pt-12 max-[820px]:pb-[38px]">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(139,69,19,0.14) 0%, transparent 60%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, #c9b99a 0%, transparent 55%)' }}
      />
      <div className="relative text-[9.5px] tracking-[0.22em] uppercase text-sand mb-3 font-medium">
        {eyebrow}
      </div>
      <h1 className="relative font-serif text-[clamp(34px,5vw,56px)] font-light text-white leading-[1.05]">
        {children}
      </h1>
    </div>
  )
}
