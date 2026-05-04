const heroMeta = [
  { label: 'Student 1', value: 'Uzair Bray · 4475962' },
  { label: 'Student 2', value: 'Carmen Bonsma · 4469911' },
  { label: 'Programme', value: 'BDS 3 · UWC' },
  { label: 'Course', value: 'PRO 300' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-ink flex flex-col justify-end relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(139,69,19,0.22) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 20% 80%, rgba(90,110,90,0.15) 0%, transparent 55%), linear-gradient(155deg, #1c1917 0%, #2a1f18 60%, #1a1f1a 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-10 right-12 font-serif text-[11px] tracking-[0.1em] uppercase text-white/[0.12] [writing-mode:vertical-rl] max-[820px]:hidden">
        Complete Denture · PRO 300
      </div>
      <div className="relative z-[2] px-[72px] pt-20 pb-[72px] max-[820px]:px-6 max-[820px]:pt-[60px] max-[820px]:pb-[52px]">
        <div className="text-[10px] tracking-[0.25em] uppercase text-sand mb-[22px] font-medium">
          University of the Western Cape · Dental Faculty
        </div>
        <h1 className="font-serif text-[clamp(52px,7vw,88px)] font-light text-white leading-[0.95] mb-[30px]">
          Complete<br />
          <em className="italic text-sand">Denture</em><br />
          Portfolio
        </h1>
        <div className="w-12 h-px bg-sand mb-7" />
        <div className="flex gap-9 flex-wrap">
          {heroMeta.map(item => (
            <div key={item.label} className="flex flex-col gap-[3px]">
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/[0.28]">
                {item.label}
              </span>
              <span className="text-[13px] text-white/[0.72] font-light italic">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
