import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import Byline from '../components/Byline'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function About() {
  return (
    <>
      <PageHeader eyebrow="Introduction">
        About <em className="italic text-sand">Me</em>
      </PageHeader>
      <PageBody>
        <div className="w-[190px] h-[230px] rounded-[10px] border-[1.5px] border-dashed border-sand/45 bg-warm float-right ml-9 mb-6 flex flex-col items-center justify-center gap-2 text-sand text-center p-[14px] max-[820px]:float-none max-[820px]:w-full max-[820px]:h-[160px] max-[820px]:ml-0 max-[820px]:mb-[22px]">
          <span className="text-[22px] opacity-45">🖼️</span>
          <span className="text-rust/[0.42] italic text-[11px] font-light">Your photo here</span>
        </div>
        <P>
          We are Uzair Bray and Carmen Bonsma, third-year Bachelor of Dental Surgery students at
          the University of the Western Cape. This portfolio was compiled jointly as part of our
          PRO 300 clinical module, documenting our shared experience of constructing a complete
          denture set for a real patient under the supervision of the UWC Dental Faculty.
        </P>
        <P>
          Entering third year, prosthodontics represented one of the most anticipated and daunting
          milestones of our training. The prospect of working with a fully edentulous patient —
          managing impressions, jaw registrations, and the complex interpersonal dynamics that come
          with patient care — pushed us far beyond the preclinical work we had grown comfortable
          with. This case in particular tested our patience, clinical judgement, and ability to work
          as a team under pressure.
        </P>
        <P>
          Through this portfolio, we hope to demonstrate not only our technical competence, but our
          growth as clinicians who understand that dentistry is as much about people as it is about
          teeth.
        </P>
        <div className="clear-both" />
        <Byline />
      </PageBody>
    </>
  )
}
