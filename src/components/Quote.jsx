export default function Quote({ children }) {
  return (
    <div className="border-l-[3px] border-sand pl-[22px] py-4 my-[22px] bg-warm rounded-r-lg">
      <p className="font-serif text-[18px] italic text-ink leading-[1.6]">{children}</p>
    </div>
  )
}
