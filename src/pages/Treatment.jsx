import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import ImageSlot from '../components/ImageSlot'
import Byline from '../components/Byline'

export default function Treatment() {
  return (
    <>
      <PageHeader eyebrow="Section 03">
        Treatment <em className="italic text-sand">Plan</em>
      </PageHeader>
      <PageBody>
        <ImageSlot label="Treatment Plan Banner" hint="Add a section banner image here" minHeight="280px" />
        <Byline />
      </PageBody>
    </>
  )
}
