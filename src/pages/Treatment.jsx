import { DentalArchSVG, RulerEdge, MolarOcclusal } from '../components/BannerDecorations'

const subSections = [
  { label: '3.1', title: 'Diagnosis' },
  { label: '3.2', title: 'Primary Impressions' },
  { label: '3.3', title: 'Secondary Impressions' },
  { label: '3.4', title: 'Jaw Registration' },
  { label: '3.5', title: 'Try-In' },
  { label: '3.6', title: 'Denture Delivery' },
  { label: '3.7', title: 'Recall' },
]

export default function Treatment() {
  return (
    <div className="min-h-[72vh] bg-ink flex flex-col justify-end relative overflow-hidden">
      {/* Backdrop — warmer than History, reflecting the procedural/clinical phase */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 72% 65% at 74% 35%, rgba(139,69,19,0.21) 0%, transparent 58%), radial-gradient(ellipse 45% 60% at 8% 68%, rgba(70,95,88,0.10) 0%, transparent 55%), linear-gradient(155deg, #1c1917 0%, #2a1f18 58%, #1a1f1a 100%)',
        }}
      />
      {/* Blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Dental arch decoration */}
      <div
        className="absolute right-0 top-0 w-[440px] h-[480px] pointer-events-none max-[820px]:w-[210px] max-[820px]:h-[230px]"
        style={{ opacity: 0.06 }}
      >
        <DentalArchSVG className="text-sand w-full h-full" />
      </div>

      {/* Molar occlusal — secondary layer, upper-left area */}
      <div
        className="absolute left-[120px] top-[14%] w-36 h-36 pointer-events-none max-[820px]:hidden banner-decoration-shimmer"
        style={{ opacity: 0.025 }}
      >
        <MolarOcclusal className="text-sand w-full h-full" />
      </div>

      {/* Left ruler marks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-5 pointer-events-none max-[820px]:hidden"
        style={{ opacity: 0.048 }}
      >
        <RulerEdge className="text-sand w-full h-full" />
      </div>

      {/* Left vertical accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2.5px] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(201,185,154,0.45) 18%, rgba(201,185,154,0.45) 82%, transparent 100%)',
        }}
      />

      {/* Corner section label */}
      <div className="absolute top-9 right-[72px] font-serif text-[11px] tracking-[0.1em] uppercase text-white/[0.14] max-[820px]:hidden">
        03 / 06
      </div>

      {/* Content */}
      <div className="relative z-[2] px-[72px] pt-20 pb-[60px] max-[820px]:px-6 max-[820px]:pt-16 max-[820px]:pb-10">
        <div className="text-[9px] tracking-[0.28em] uppercase text-sand mb-5 font-medium">
          Section 03
        </div>

        <h1
          className="font-serif text-[clamp(44px,6vw,76px)] font-light text-white leading-[0.93] mb-8"
          style={{ textShadow: '0 4px 32px rgba(0,0,0,0.55)' }}
        >
          Treatment<br />
          <em className="italic text-sand">Plan</em>
        </h1>

        <div
          className="w-16 h-px mb-7"
          style={{ background: 'linear-gradient(90deg, #c9b99a 0%, rgba(201,185,154,0.3) 70%, transparent 100%)' }}
        />

        <p className="text-[13px] text-white/[0.45] font-light leading-[1.82] max-w-[520px] mb-9">
          The full clinical journey from initial diagnosis through to final denture delivery —
          documenting each stage of complete denture construction for Mrs Watkins.
        </p>

        {/* Sub-section index — 7 items wrap naturally into two rows */}
        <div className="flex gap-x-8 gap-y-5 flex-wrap pt-5 border-t border-sand/[0.10]">
          {subSections.map(s => (
            <div key={s.label} className="flex flex-col gap-[5px]">
              <span className="text-[8.5px] tracking-[0.22em] uppercase text-sand/45 font-medium">
                {s.label}
              </span>
              <span className="text-[12px] text-white/50 font-light italic">
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
