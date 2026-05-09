import { ArchQuarterSVG } from './BannerDecorations'

export default function PageHeader({ eyebrow, children }) {
  return (
    <div className="bg-ink px-[72px] pt-14 pb-[46px] relative overflow-hidden max-[820px]:px-6 max-[820px]:pt-12 max-[820px]:pb-[38px]">
      {/* Warm radial glow — right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 82% 50%, rgba(139,69,19,0.16) 0%, transparent 60%)',
        }}
      />
      {/* Cool ambient — left, balances the warm tone */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 45% 70% at 5% 65%, rgba(70,95,88,0.11) 0%, transparent 55%)',
        }}
      />

      {/* Dot grid — dental chart paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,185,154,0.09) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Arch quarter watermark — right side, fades in from the left */}
      <div
        className="absolute right-0 top-0 bottom-0 h-full pointer-events-none max-[820px]:opacity-40"
        style={{ opacity: 0.072 }}
      >
        <ArchQuarterSVG className="text-sand h-full w-auto" />
      </div>

      {/* Left vertical accent line — echoes the sidebar's active indicator */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2.5px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(201,185,154,0.55) 20%, rgba(201,185,154,0.55) 80%, transparent 100%)',
        }}
      />

      {/* Enhanced bottom border — longer gradient + diamond end-marker */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, #c9b99a 0%, rgba(201,185,154,0.3) 72%, transparent 100%)' }}
      />
      {/* Diamond marker sits on the left end of the bottom border */}
      <svg
        aria-hidden="true"
        viewBox="0 0 10 10"
        fill="none"
        className="absolute bottom-[-4px] left-[67px] max-[820px]:left-[19px] pointer-events-none"
        style={{ width: 10, height: 10 }}
      >
        <path d="M 5 0 L 10 5 L 5 10 L 0 5 Z" fill="#c9b99a" opacity="0.65" />
      </svg>

      {/* Text content */}
      <div className="relative space-y-1.5">
        {/* Eyebrow — wider tracking, trailing gradient rule */}
        <div className="text-[9.5px] tracking-[0.28em] uppercase text-sand mb-3.5 font-medium inline-flex items-center gap-3">
          <span>{eyebrow}</span>
          <span className="inline-block w-8 h-px bg-gradient-to-r from-sand to-transparent opacity-60" />
        </div>

        <h1
          className="relative font-serif text-[clamp(34px,5vw,56px)] font-light text-white leading-[1.05]"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
        >
          {children}
        </h1>
      </div>
    </div>
  )
}
