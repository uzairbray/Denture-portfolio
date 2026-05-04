import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import Quote from '../components/Quote'
import InfoBox, { InfoList } from '../components/InfoBox'
import Byline from '../components/Byline'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)
const Hr = () => <hr className="border-none border-t border-sand/30 my-9" />

export default function Complaint() {
  return (
    <>
      <PageHeader eyebrow="Patient History">
        Main <em className="italic text-sand">Complaint</em>
      </PageHeader>
      <PageBody>
        <SecLabel>Chief Complaint</SecLabel>
        <Quote>
          "I want new dentures. My denture teeth are blunt, my lower gum is thin, and it hurts
          when I eat hard stuff."
        </Quote>

        <Hr />

        <SecLabel>History of Main Complaint</SecLabel>
        <InfoBox title="Complaint Timeline">
          <InfoList
            items={[
              'Desire for new dentures — ongoing for <strong>3–4 years</strong>',
              'Blunt/worn denture teeth — present for <strong>3–4 years</strong>',
              'Thin lower gum — noted for approximately <strong>10 years</strong>',
              'Pain on eating hard foods — present for <strong>10 years</strong>',
            ]}
          />
        </InfoBox>
        <P>
          Pain is described as throbbing, intensity 8/10, triggered by chewing hard food, lasting
          approximately 5 minutes before resolving once eating ceases. Last dental visit was 4
          years prior.
        </P>

        <Hr />

        <SecLabel>Previous Dental History</SecLabel>
        <InfoBox title="Notable History">
          <InfoList
            items={[
              'History of halitosis — reported from years ago',
              'Denture examination — 4 years ago',
              'Partial dentures worn since age 18',
              'Current denture set is not a matching pair — upper has a fracture',
            ]}
          />
        </InfoBox>

        <Hr />

        <SecLabel>Social History</SecLabel>
        <InfoBox title="Social Factors">
          <InfoList
            items={[
              'Marital status: Divorced',
              'Income: Pensioner',
              'Transport: Drives herself to appointments',
            ]}
          />
        </InfoBox>

        <Byline />
      </PageBody>
    </>
  )
}
