import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import InfoBox, { InfoList } from '../components/InfoBox'
import { ClinicalImg } from '../components/ClinicalImg'
import Byline from '../components/Byline'
import lowerModelTrimmed from '../assets/lower-model-trimmed.jpeg'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function PrimaryImp() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        Primary <em className="italic text-sand">Impressions</em>
      </PageHeader>
      <PageBody>
        <P>
          History taking, diagnosis, and primary impressions were initiated on{' '}
          <strong>5 March 2026</strong>. A thorough medical history was taken, a PAN radiograph
          obtained, and chlorhexidine 0.2% was prescribed for management of a lingual ulcer.
        </P>
        <P>
          Stock tray selection and primary impressions were completed on{' '}
          <strong>12 March 2026</strong>. Two attempts were required for the upper impression and
          three attempts for the lower, with additional alginate added to the anterior region on
          the final attempt.
        </P>

        <SecLabel>Materials Used</SecLabel>
        <InfoBox title="Materials">
          <InfoList items={['Periphery wax', 'Alginate adhesive spray', 'Alginate', 'Vaseline']} />
        </InfoBox>

        <P>
          Impressions were submitted to the laboratory requesting primary models and special trays
          for the following visit.
        </P>

        <SecLabel>Primary Model</SecLabel>
        <ClinicalImg
          src={lowerModelTrimmed}
          alt="Trimmed lower stone model"
          caption="Trimmed lower stone model from primary impression"
        />

        <Byline />
      </PageBody>
    </>
  )
}
