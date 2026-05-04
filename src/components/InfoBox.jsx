export default function InfoBox({ title, children }) {
  return (
    <div className="bg-warm border border-sand/35 rounded-xl px-[30px] py-[26px] my-5">
      {title && (
        <h4 className="text-[9.5px] tracking-[0.2em] uppercase text-rust font-semibold mb-[14px]">
          {title}
        </h4>
      )}
      {children}
    </div>
  )
}

export function InfoList({ items }) {
  return (
    <ul className="list-none">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-[13.5px] text-[#3d3530] py-1.5 border-b border-sand/25 last:border-b-0 flex gap-2.5 items-baseline font-light leading-[1.65]"
        >
          <span className="text-sand flex-shrink-0 text-[11px]">—</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  )
}

export function InfoText({ children }) {
  return (
    <p className="text-[13.5px] text-[#3d3530] leading-[1.75] font-light">{children}</p>
  )
}
