import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import { MetricGrid, MetricCard } from '../components/MetricGrid'
import { ClinicalImg, ImgPair } from '../components/ClinicalImg'
import Byline from '../components/Byline'
import waxBlockTools from '../assets/wax-block-tools.jpeg'
import waxBlockCarving from '../assets/wax-block-carving.jpeg'
import recordBlockTop from '../assets/record-block-top.jpeg'
import recordBlockSide from '../assets/record-block-side.jpeg'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)
const Hr = () => <hr className="border-none border-t border-sand/30 my-9" />

export default function JawReg() {
  return (
    <>
      <PageHeader eyebrow="Treatment Plan">
        Jaw <em className="italic text-sand">Registration</em>
      </PageHeader>
      <PageBody>
        <P>
          Jaw registration was completed on <strong>26 March 2026</strong>. Record blocks were
          evaluated and adjusted — the upper required labial surface reduction and the lower
          required reduction in the retromolar pad region. Shade selection (A2, smaller mould) was
          completed at this visit.
        </P>

        <SecLabel>Measurements Recorded</SecLabel>
        <MetricGrid>
          <MetricCard label="Resting Facial Height" value="60" unit="mm" />
          <MetricCard label="Occlusal Vertical Dimension" value="56" unit="mm" />
          <MetricCard label="Free-way Space" value="4" unit="mm" />
          <MetricCard label="Inter-alveolar Distance" value="34" unit="mm" />
        </MetricGrid>

        <P>
          Record blocks were submitted with all required scribed reference lines (centre line,
          smile line, corners of mouth, and reference line), secured in occlusion with Aluwax.
          Chlorhexidine was prescribed again for mandibular ulcers; topical anaesthetic was applied
          to manage discomfort during fitting of the lower block.
        </P>

        <Hr />

        <SecLabel>Wax Record Block Preparation</SecLabel>
        <ClinicalImg
          src={waxBlockTools}
          alt="Wax record block preparation tools"
          caption="Wax record block with carving tools, torch, and spatula used in preparation"
        />
        <ClinicalImg
          src={waxBlockCarving}
          alt="Pink wax block being carved and shaped"
          caption="Pink wax record block being trimmed and shaped on the stone model"
        />

        <SecLabel>Record Blocks</SecLabel>
        <ImgPair
          images={[
            { src: recordBlockTop, alt: 'Red wax record block — top view' },
            { src: recordBlockSide, alt: 'Red wax record block — side view' },
          ]}
          caption="Upper wax record block — occlusal (top) and buccal (side) views"
        />

        <Byline />
      </PageBody>
    </>
  )
}
