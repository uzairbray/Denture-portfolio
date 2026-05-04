import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import InfoBox, { InfoList } from '../components/InfoBox'
import { ClinicalImg, ImgPair } from '../components/ClinicalImg'
import Byline from '../components/Byline'
import articulatorFrontal from '../assets/articulator-frontal.jpeg'
import articulatorOcclusion from '../assets/articulator-occlusion.jpeg'
import articulatorLateral from '../assets/articulator-lateral.jpeg'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function TryIn() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        <em className="italic text-sand">Try-In</em>
      </PageHeader>
      <PageBody>
        <P>
          The try-in appointment was conducted on <strong>9 April 2026</strong>. A cross-bite was
          identified and corrected, the flange was re-adapted, and lower flanges were reduced at
          Mrs Watkins' request. Good retention was achieved following adjustments. Mrs Watkins was
          satisfied with the revised tooth setup.
        </P>

        <SecLabel>Adjustments Made</SecLabel>
        <InfoBox title="Try-In Adjustments">
          <InfoList
            items={[
              'Cross-bite identified and corrected — teeth reset',
              'Flange re-adapted',
              'Flanges reduced (lower) per patient request',
              'Upper looseness corrected — postdam re-adapted',
              'Good retention achieved after adjustments',
              'Patient satisfied with revised tooth setup',
            ]}
          />
        </InfoBox>

        <SecLabel>Tooth Setup on Articulator</SecLabel>
        <ClinicalImg
          src={articulatorFrontal}
          alt="Articulator showing anterior tooth setup — frontal view"
          caption="Frontal view of the tooth setup on the articulator prior to try-in"
        />
        <ImgPair
          images={[
            { src: articulatorOcclusion, alt: 'Articulator held — frontal view of occlusion' },
            { src: articulatorLateral, alt: 'Articulator — lateral view showing occlusal relationship' },
          ]}
          caption="Left: Frontal occlusal view. Right: Lateral view showing occlusal relationship of upper and lower wax dentures"
        />

        <Byline />
      </PageBody>
    </>
  )
}
