import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import ImageSlot from '../components/ImageSlot'
import Byline from '../components/Byline'

export default function History() {
  return (
    <>
      <PageHeader eyebrow="Section 02">
        Patient <em className="italic text-sand">History</em>
      </PageHeader>
      <PageBody>
        <ImageSlot label="Patient History Banner" hint="Add a section banner image here" minHeight="280px" />
        <Byline />
      </PageBody>
    </>
  )
}
