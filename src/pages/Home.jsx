import { DentalArchSVG, MolarOcclusal, RulerEdge } from '../components/BannerDecorations'

const heroMeta = [
  { label: 'Student 1', value: 'Uzair Bray · 4475962' },
  { label: 'Student 2', value: 'Carmen Bonsma · 4469911' },
  { label: 'Programme', value: 'BDS 3 · UWC' },
  { label: 'Course', value: 'PRO 300' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-ink flex flex-col justify-end relative overflow-hidden">
      {/* Layered gradient backdrop — slow breathe animation pulses the warm glow */}
      <div
        className="absolute inset-0 animate-breathe"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(139,69,19,0.22) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 20% 80%, rgba(90,110,90,0.15) 0%, transparent 55%), linear-gradient(155deg, #1c1917 0%, #2a1f18 60%, #1a1f1a 100%)',
        }}
      />

      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Dental arch — maxillary occlusal technical diagram, top-right, drift animation */}
      <div
        className="absolute right-0 top-0 w-[520px] h-[560px] max-[820px]:w-[260px] max-[820px]:h-[280px] pointer-events-none animate-drift"
        style={{ opacity: 0.065, willChange: 'transform' }}
      >
        <DentalArchSVG className="text-sand w-full h-full" />
      </div>

      {/* Molar occlusal — secondary decorative layer, right-centre area */}
      <div
        className="absolute right-[200px] top-[32%] w-44 h-44 pointer-events-none max-[820px]:hidden banner-decoration-shimmer"
        style={{ opacity: 0.026 }}
      >
        <MolarOcclusal className="text-sand w-full h-full" />
      </div>

      {/* Measurement ruler — left edge calibration marks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-5 pointer-events-none max-[820px]:hidden"
        style={{ opacity: 0.052 }}
      >
        <RulerEdge className="text-sand w-full h-full" />
      </div>

      {/* Vertical text label */}
      <div className="absolute top-10 right-12 font-serif text-[11px] tracking-[0.1em] uppercase text-white/[0.16] [writing-mode:vertical-rl] max-[820px]:hidden">
        Complete Denture · PRO 300
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, rgba(201,185,154,0.45) 0%, transparent 48%)' }}
      />

      {/* Content block */}
      <div className="relative z-[2] px-[72px] pt-20 pb-[72px] max-[820px]:px-6 max-[820px]:pt-[60px] max-[820px]:pb-[52px]">
        <div className="text-[10px] tracking-[0.28em] uppercase text-sand mb-[22px] font-medium">
          University of the Western Cape · Dental Faculty
        </div>

        <h1
          className="font-serif text-[clamp(52px,7vw,88px)] font-light text-white leading-[0.95] mb-[32px]"
          style={{ textShadow: '0 4px 32px rgba(0,0,0,0.55)' }}
        >
          Complete<br />
          <em className="italic text-sand">Denture</em><br />
          Portfolio
        </h1>

        {/* Gradient divider — longer and softer than a flat rule */}
        <div
          className="w-20 h-px mb-8"
          style={{ background: 'linear-gradient(90deg, #c9b99a 0%, rgba(201,185,154,0.4) 65%, transparent 100%)' }}
        />

        {/* Metadata grid — thin top rule separates it from the title block */}
        <div className="flex gap-9 flex-wrap pt-4 border-t border-sand/[0.12]">
          {heroMeta.map(item => (
            <div key={item.label} className="flex flex-col gap-[3px]">
              <span className="text-[9px] tracking-[0.22em] uppercase text-white/[0.28]">
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
