import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import InfoBox, { InfoList } from '../components/InfoBox'
import Byline from '../components/Byline'

const refs = [
  'Atwood DA. Reduction of residual ridges: a major oral disease entity. <em>J Prosthet Dent.</em> 1971;26(3):266–79.',
  'Watt DM, MacGregor AR. <em>Designing Complete Dentures.</em> 2nd ed. Philadelphia: Saunders; 1986.',
  'Scully C, Challacombe SJ. Pemphigus vulgaris: update on etiopathogenesis, oral manifestations, and management. <em>Crit Rev Oral Biol Med.</em> 2002;13(5):397–408.',
  'Felton DA. Edentulism and comorbid factors. <em>J Prosthodont.</em> 2009;18(2):88–96.',
  'Zarb GA, Hobkirk JA, Eckert SE, Jacob RF. <em>Prosthodontic Treatment for Edentulous Patients.</em> 13th ed. St. Louis: Mosby Elsevier; 2013.',
  'Basker RM, Davenport JC, Thomason JM. <em>Prosthetic Treatment of the Edentulous Patient.</em> 5th ed. Oxford: Wiley-Blackwell; 2011.',
  'Laskaris G. <em>Pocket Atlas of Oral Diseases.</em> 2nd ed. Stuttgart: Thieme; 2006.',
  "Awad MA, Feine JS. Measuring patient satisfaction with mandibular prostheses. <em>Community Dent Oral Epidemiol.</em> 1998;26(6):400–5.",
]

export default function References() {
  return (
    <>
      <PageHeader eyebrow="Section 06">
        <em className="italic text-sand">References</em>
      </PageHeader>
      <PageBody>
        <InfoBox title="Reference List">
          <InfoList items={refs} />
        </InfoBox>
        <Byline />
      </PageBody>
    </>
  )
}
