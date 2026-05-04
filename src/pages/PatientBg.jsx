import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import Byline from '../components/Byline'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function PatientBg() {
  return (
    <>
      <PageHeader eyebrow="Introduction">
        Patient <em className="italic text-sand">Background</em>
      </PageHeader>
      <PageBody>
        <P>
          Mrs Sylvia Salome Watkins is a 65-year-old divorced woman residing in Athlone, Cape Town.
          She is a pensioner who drives herself to all clinical appointments at the UWC Oral Health
          Centre.
        </P>
        <P>
          Mrs Watkins has been edentulous for a significant period and has worn dentures since the
          age of 18. She presents with a longstanding desire for a new complete denture set, having
          sought replacement for approximately ten years. Her previous prostheses were not
          constructed to clinical standards, which shaped strong expectations that required careful
          patient management throughout treatment.
        </P>
        <Byline />
      </PageBody>
    </>
  )
}
