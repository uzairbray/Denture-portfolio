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
          Mrs Watkins returned for her recall appointment one week following denture delivery.
          She presented dissatisfied with both prostheses, expressing that she could not adapt
          to the flanged design and that the dentures felt foreign compared to the gumless style
          she had worn for many years. She remained insistent on a flangeless upper denture,
          a request that had been discussed and declined on clinical grounds at multiple points
          throughout treatment.
        </P>
        <P>
          The case was reviewed with the supervising clinicians, who confirmed that no further
          modifications could be made within the scope of our undergraduate training and that
          the prostheses had been constructed to the appropriate clinical standard. In light of
          Mrs Watkins' longstanding expectations, her complex medical background, and her
          difficulty adapting to conventional complete dentures, the decision was made to refer
          her to the postgraduate prosthodontics department for specialist review and ongoing
          management.
        </P>
        <P>
          While the outcome was not what we had hoped for, this case reinforced an important
          clinical lesson: that patient satisfaction in complete denture therapy is shaped as
          much by expectation management and prior prosthetic experience as by technical
          execution. Mrs Watkins' case is documented further in our reflection.
        </P>

        <SecLabel>Clinical Observations</SecLabel>
        <InfoBox title="Recall Findings">
          <InfoList
            items={[
              'Recall: one week post-delivery',
              'Patient dissatisfied — unable to adapt to flanged denture design',
              'Preference for gumless style based on long-term prior wear',
              'Request for flangeless upper declined — not clinically indicated at this facility',
              'Prostheses assessed as clinically acceptable by supervising clinicians',
              'No further modifications possible within undergraduate scope',
              'Referred to postgraduate prosthodontics for specialist review',
            ]}
          />
        </InfoBox>

        <Byline />
      </PageBody>
    </>
  )
}
