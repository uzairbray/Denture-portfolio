import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import ImageSlot from '../components/ImageSlot'
import Byline from '../components/Byline'

export default function Consent() {
  return (
    <>
      <PageHeader eyebrow="Home">
        Patient Consent <em className="italic text-sand">Form</em>
      </PageHeader>
      <PageBody>
        <ImageSlot label="Consent Document" icon="📄" hint="Upload signed consent form here" minHeight="300px" />
        <Byline />
      </PageBody>
    </>
  )
}
