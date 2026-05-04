import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import InfoBox, { InfoList } from '../components/InfoBox'
import { ClinicalImg } from '../components/ClinicalImg'
import Byline from '../components/Byline'
import completedDentures from '../assets/completed-dentures.jpeg'

export default function Delivery() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        Denture <em className="italic text-sand">Delivery</em>
      </PageHeader>
      <PageBody>
        <p className="text-[14px] leading-[1.85] mb-[18px] font-light italic text-rust/[0.42]">
          [Document the delivery appointment — date, adjustments made at insertion, occlusal
          checks, pressure spot identification and relief, and final outcome.]
        </p>

        <SecLabel>Completed Dentures</SecLabel>
        <ClinicalImg
          src={completedDentures}
          alt="Completed upper and lower dentures"
          caption="Completed upper and lower complete dentures prior to delivery — Shade A2"
        />

        <SecLabel>Patient Instructions Given</SecLabel>
        <InfoBox title="Post-Insertion Instructions">
          <InfoList
            items={[
              'Remove and brush dentures after meals',
              'Remove at night — store in cold water',
              'Soft diet initially; progress gradually',
              'Return to clinic if persistent sore spots develop',
              'Continue chlorhexidine 0.2% as prescribed',
              'Recall appointment scheduled',
            ]}
          />
        </InfoBox>

        <Byline />
      </PageBody>
    </>
  )
}
