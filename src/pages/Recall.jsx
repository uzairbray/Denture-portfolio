import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import ImageSlot from '../components/ImageSlot'
import Byline from '../components/Byline'

export default function Recall() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        <em className="italic text-sand">Recall</em>
      </PageHeader>
      <PageBody>
        <SecLabel>Recall Appointment</SecLabel>
        <p className="text-[14px] leading-[1.85] mb-[18px] font-light italic text-rust/[0.42]">
          [Document the recall visit — when it took place, patient experience since delivery, any
          adjustments made, mucosal observations, and overall outcome.]
        </p>
        <ImageSlot label="Recall Photo" icon="📷" hint="Add clinical photograph here" />
        <Byline />
      </PageBody>
    </>
  )
}
