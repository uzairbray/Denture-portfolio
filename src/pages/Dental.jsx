import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import InfoBox, { InfoList } from '../components/InfoBox'
import Byline from '../components/Byline'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function Dental() {
  return (
    <>
      <PageHeader eyebrow="Patient History">
        Dental <em className="italic text-sand">History</em>
      </PageHeader>
      <PageBody>
        <P>
          Mrs Watkins has worn dentures since the age of 18. Her previous prostheses were
          fabricated by a dental technician without proper clinical input, creating strong
          expectations that conflicted with standard clinical practice — most notably her request
          for a flangeless upper denture.
        </P>
        <InfoBox title="Summary">
          <InfoList
            items={[
              'Non-smoker',
              'Dietary habits: 1 sugar in black tea; occasional chocolate and crisps',
              'History of halitosis — managed with chlorhexidine 0.2%',
              'Denture stomatitis noted at first appointment',
              'Recurring intraoral ulcers consistent with pemphigus vulgaris',
              'Current denture set is unmatched — upper is fractured',
            ]}
          />
        </InfoBox>
        <Byline />
      </PageBody>
    </>
  )
}
