import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import InfoBox, { InfoList } from '../components/InfoBox'
import Byline from '../components/Byline'

const Hr = () => <hr className="border-none border-t border-sand/30 my-9" />

export default function Diagnosis() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        <em className="italic text-sand">Diagnosis</em>
      </PageHeader>
      <PageBody>
        <SecLabel>Extra-oral Examination</SecLabel>
        <InfoBox title="Findings">
          <InfoList
            items={[
              'Lymphadenopathy: facial nodes clear',
              'Slight swelling at right ankle',
              'TMJ: slight deviation to the right; possible localised involvement',
              'Skin: pemphigus vulgaris rash visible on arms',
            ]}
          />
        </InfoBox>

        <SecLabel>Intra-oral Examination</SecLabel>
        <InfoBox title="Findings">
          <InfoList
            items={[
              'Tongue: slight white coating; white spots posteriorly with erythematous areas',
              'Floor of mouth: good salivary flow and vascularity; red spots; ulcer present',
              'Lips and vestibular area: no lesions or scarring',
              'Cheeks/buccal mucosa: coral pink',
              'Palate: well-defined rugae, U-shaped arch',
              'Lower ridge: thin, rigid, slight atrophy; flabby tissue present',
              'Radiographic: right condyle slightly flattened; irregular resorption on mandible',
            ]}
          />
        </InfoBox>

        <SecLabel>Denture Assessment</SecLabel>
        <InfoBox title="Existing Denture Findings">
          <InfoList
            items={[
              'Fitting surfaces: voids bilaterally; yellow staining; plaque and calculus',
              'Palate surface: yellow staining',
              'Teeth: abraded; plaque and calculus present',
              'RFH: 60 mm &nbsp;|&nbsp; OVD: 56 mm &nbsp;|&nbsp; Free-way Space: 4 mm &nbsp;|&nbsp; IAD: 34 mm',
            ]}
          />
        </InfoBox>

        <Hr />

        <SecLabel>Formal Diagnosis</SecLabel>
        <InfoBox title="Diagnosis">
          <InfoList
            items={[
              'Complete edentulism — maxillary and mandibular',
              'Compromised mastication',
              'Impaired speech and aesthetics',
              'Loss of occlusal vertical dimension',
            ]}
          />
        </InfoBox>

        <Hr />

        <SecLabel>Comprehensive Treatment Plan</SecLabel>
        <InfoBox title="Plan">
          <InfoList
            items={[
              'Construct complete upper and lower denture with correctly extended bases',
              'Prescribe chlorhexidine 0.2% for halitosis and lingual ulcer management',
              'Ulcer treatment and monitoring',
              'Regular recall and maintenance',
              'Restore function, aesthetics, and speech',
            ]}
          />
        </InfoBox>

        <SecLabel>Prognosis</SecLabel>
        <InfoBox title="Expected Outcomes">
          <InfoList
            items={[
              '<strong>Upper:</strong> Good — ridge is rigid and well preserved',
              '<strong>Lower:</strong> Fair to moderate — atrophic and flabby; patient adjustment expected to be challenging',
            ]}
          />
        </InfoBox>

        <Byline />
      </PageBody>
    </>
  )
}
