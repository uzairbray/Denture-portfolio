import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import InfoBox, { InfoList } from '../components/InfoBox'
import { ClinicalImg } from '../components/ClinicalImg'
import Byline from '../components/Byline'
import completedDentures from '../assets/completed-dentures.jpeg'
import articulatorOcclusion from '../assets/articulator-occlusion.jpeg'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function Delivery() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        Denture <em className="italic text-sand">Delivery</em>
      </PageHeader>
      <PageBody>
        <P>
          Denture delivery was completed on <strong>23 April 2026</strong>. The upper and lower
          complete dentures were inserted and occlusal contacts verified using articulating paper.
          A pressure spot was identified in the right buccal vestibule of the lower denture and
          relieved with an acrylic bur. Retention and stability were satisfactory on insertion.
          Mrs Watkins expressed satisfaction with both the aesthetics and comfort of the new
          prostheses.
        </P>
        <P>
          Post-insertion instructions were issued verbally and in writing. Mrs Watkins was advised
          to attend a recall appointment within six weeks to review fit, occlusion, and mucosal
          response. A prescription for chlorhexidine 0.2% was continued given the ongoing
          pemphigus vulgaris management.
        </P>

        <SecLabel>Completed Dentures</SecLabel>
        <ClinicalImg
          src={completedDentures}
          alt="Completed upper and lower dentures"
          caption="Completed upper and lower complete dentures prior to delivery — Shade A2"
        />
        <ClinicalImg
          src={articulatorOcclusion}
          alt="Occlusal view of tooth setup on articulator"
          caption="Occlusal view of the final tooth setup on the articulator prior to processing"
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
