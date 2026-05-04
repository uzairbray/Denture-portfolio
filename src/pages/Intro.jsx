import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import Byline from '../components/Byline'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function Intro() {
  return (
    <>
      <PageHeader eyebrow="Section 01">
        <em className="italic text-sand">Introduction</em>
      </PageHeader>
      <PageBody>
        <P>
          This portfolio documents the complete clinical journey of constructing a full set of
          complete dentures for a patient at the UWC Oral Health Centre. It was compiled as part
          of the PRO 300 module in our third year of the Bachelor of Dental Surgery programme at
          the University of the Western Cape.
        </P>
        <P>
          The portfolio covers every stage of the prosthodontic process — from the initial patient
          assessment and history taking, through primary and secondary impressions, jaw
          registration, try-in, and final denture delivery. It reflects both the technical demands
          of complete denture construction and the importance of patient communication, clinical
          reasoning, and adaptability when faced with complex cases.
        </P>
        <P>
          Each section is supported by clinical photographs, detailed notes from each appointment,
          and a literature review connecting theory to practice. This portfolio represents not only
          a clinical record, but a reflection of our growth as dental students navigating the
          realities of patient care for the first time.
        </P>
        <Byline />
      </PageBody>
    </>
  )
}
