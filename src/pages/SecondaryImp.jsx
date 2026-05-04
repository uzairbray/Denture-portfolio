import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import InfoBox, { InfoList } from '../components/InfoBox'
import { ClinicalImg, ImgPair } from '../components/ClinicalImg'
import Byline from '../components/Byline'
import lowerModelTrimmed from '../assets/lower-model-trimmed.jpeg'
import lowerModelBoxing from '../assets/lower-model-boxing.jpeg'
import lowerModelImpression from '../assets/lower-model-impression.jpeg'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function SecondaryImp() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        Secondary <em className="italic text-sand">Impressions</em>
      </PageHeader>
      <PageBody>
        <P>
          Secondary impressions were taken on <strong>19 March 2026</strong>. The lower special
          tray broke prior to use and was repaired with superglue before proceeding. Mrs Watkins
          experienced significant discomfort throughout, reporting burning and pain during border
          moulding.
        </P>

        <SecLabel>Upper Secondary Impression</SecLabel>
        <InfoBox title="Materials &amp; Attempts">
          <InfoList items={['Alginate wash × 1', 'Cavex × 3', 'Blueprint × 2 + × 2']} />
        </InfoBox>

        <SecLabel>Lower Secondary Impression</SecLabel>
        <InfoBox title="Materials &amp; Attempts">
          <InfoList
            items={[
              'Alginate wash × 1',
              'Cavex × 1',
              'Kelly paste × 2 — failed',
              'Cavex redone — successful',
            ]}
          />
        </InfoBox>

        <SecLabel>Models</SecLabel>
        <ImgPair
          images={[
            { src: lowerModelTrimmed, alt: 'Trimmed lower stone model' },
            { src: lowerModelBoxing, alt: 'Lower model being boxed and poured' },
          ]}
          caption="Left: Trimmed lower stone model. Right: Lower model during boxing and pouring"
        />
        <ClinicalImg
          src={lowerModelImpression}
          alt="Lower model with impression material"
          caption="Secondary impression with retained impression material on lower model"
        />

        <Byline />
      </PageBody>
    </>
  )
}
