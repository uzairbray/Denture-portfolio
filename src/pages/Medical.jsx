import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import InfoBox, { InfoList } from '../components/InfoBox'
import Byline from '../components/Byline'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function Medical() {
  return (
    <>
      <PageHeader eyebrow="Patient History">
        Medical <em className="italic text-sand">History</em>
      </PageHeader>
      <PageBody>
        <SecLabel>Present Medical Conditions</SecLabel>
        <InfoBox title="Diagnosed Conditions">
          <InfoList
            items={[
              'Pemphigus Vulgaris — autoimmune blistering condition',
              'Hypertension',
              'High cholesterol',
              'Asthma',
              'Glaucoma',
              'Rheumatoid disease',
              'Possible anaemia',
              'Compromised renal function — history of previous procedure',
            ]}
          />
        </InfoBox>

        <SecLabel>Current Medications</SecLabel>
        <InfoBox title="Medications">
          <InfoList
            items={[
              'Biocort topical ointment — for pemphigus vulgaris lesions',
              'Prednisone — systemic corticosteroid (immunosuppressant)',
              'Radar — antihypertensive',
              'Ashtavent pump — bronchodilator for asthma',
              'Combigan — eye drops for glaucoma',
            ]}
          />
        </InfoBox>

        <SecLabel>Clinical Relevance</SecLabel>
        <P>
          Pemphigus vulgaris combined with long-term Prednisone use predisposes Mrs Watkins to
          delayed mucosal healing and recurring oral ulcerations, both observed throughout
          treatment. Chlorhexidine 0.2% was prescribed at the initial visit for management of a
          lingual ulcer. Topical anaesthetic was applied prior to lower denture fitting to manage
          discomfort. Blood tests are conducted
          every 3 months to monitor renal function.
        </P>

        <Byline />
      </PageBody>
    </>
  )
}
