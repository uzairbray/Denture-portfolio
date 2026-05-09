import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import InfoBox, { InfoList } from '../components/InfoBox'
import { ClinicalImg } from '../components/ClinicalImg'
import Byline from '../components/Byline'
import recallVisit from '../assets/recall-visit.jpeg'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function Recall() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        <em className="italic text-sand">Recall</em>
      </PageHeader>
      <PageBody>
        <ClinicalImg
          src={recallVisit}
          alt="Uzair Bray and Carmen Bonsma with Mrs Watkins at the recall appointment"
          caption="Recall visit — Mrs Watkins with Uzair Bray and Carmen Bonsma at the UWC Oral Health Centre"
        />

        <SecLabel>Recall Appointment</SecLabel>
        <P>
          Mrs Watkins attended her recall appointment approximately six weeks following denture
          delivery. She reported general satisfaction with both prostheses and noted a significant
          improvement in comfort and aesthetics compared to her previous dentures. No sore spots
          were reported in the upper arch. A minor area of discomfort was noted in the lower right
          buccal region, which was relieved chairside.
        </P>
        <P>
          Mucosal assessment revealed no active ulceration attributable to the new dentures.
          Denture hygiene was assessed and found to be satisfactory; Mrs Watkins confirmed
          compliance with the post-insertion instructions. Chlorhexidine use was continued in
          keeping with her ongoing pemphigus vulgaris management.
        </P>

        <SecLabel>Clinical Observations</SecLabel>
        <InfoBox title="Recall Findings">
          <InfoList
            items={[
              'Retention and stability: satisfactory on both arches',
              'Occlusal contacts: even; no adjustments required',
              'Lower right buccal pressure spot: identified and relieved',
              'Mucosa: healthy; no denture-related ulceration observed',
              'Patient-reported outcome: satisfied with aesthetics and function',
              'Denture hygiene: good compliance with cleaning instructions',
            ]}
          />
        </InfoBox>

        <Byline />
      </PageBody>
    </>
  )
}
