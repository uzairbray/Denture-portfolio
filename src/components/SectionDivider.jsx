import { MolarOcclusal } from './BannerDecorations'

export default function SectionDivider({ label = '' }) {
  return (
    <div className="my-16 relative overflow-hidden max-[820px]:my-12">
      {/* Background accent bar */}
      <div className="absolute inset-0 h-full bg-gradient-to-r from-sand/[0.08] via-sand/[0.04] to-transparent" />

      {/* Left decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.06] w-32 h-32 max-[820px]:hidden">
        <MolarOcclusal className="text-sand w-full h-full" />
      </div>

      {/* Right decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.05] w-28 h-28 max-[820px]:hidden">
        <MolarOcclusal className="text-sand w-full h-full" />
      </div>

      {/* Center content */}
      <div className="relative px-[72px] py-8 flex items-center justify-center gap-4 max-[820px]:px-6 max-[820px]:py-6">
        {/* Left accent line */}
        <div className="h-px bg-gradient-to-r from-transparent to-sand/40 flex-1 max-w-[80px]" />

        {/* Optional label */}
        {label && (
          <span className="text-[8.5px] tracking-[0.25em] uppercase text-sand/60 font-medium px-4 whitespace-nowrap">
            {label}
          </span>
        )}

        {/* Right accent line */}
        <div className="h-px bg-gradient-to-l from-transparent to-sand/40 flex-1 max-w-[80px]" />
      </div>
    </div>
  )
}
