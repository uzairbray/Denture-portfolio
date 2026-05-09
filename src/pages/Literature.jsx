import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import SecLabel from '../components/SecLabel'
import Byline from '../components/Byline'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function Literature() {
  return (
    <>
      <PageHeader eyebrow="Section 04">
        Literature <em className="italic text-sand">Review</em>
      </PageHeader>
      <PageBody>
        <P>
          Complete edentulism remains a significant prosthodontic challenge, particularly in
          patients with complex systemic backgrounds. The construction of complete dentures requires
          the clinician to balance technical precision with an understanding of the patient's
          physiological, psychological, and social context. This literature review examines two
          aspects directly relevant to Mrs Watkins' case: the management of the resorbed mandibular
          ridge, and the influence of autoimmune mucosal disease — specifically pemphigus vulgaris
          — on complete denture therapy.
        </P>

        <SecLabel>The Resorbed Mandibular Ridge</SecLabel>
        <P>
          Mandibular ridge resorption is one of the most challenging complications in complete
          denture construction. Following tooth extraction, alveolar bone undergoes continuous
          remodelling, with the mandible resorbing at a rate approximately four times greater than
          the maxilla. Atwood (1971) described this process as a "major oral disease entity,"
          highlighting that severe resorption significantly compromises denture stability, retention,
          and patient comfort. The resulting flat or knife-edged ridges provide minimal mechanical
          resistance to denture displacement during function.
        </P>
        <P>
          In Mrs Watkins' case, the mandibular ridge presented as thin, rigid, and atrophic, with
          flabby tissue present anteriorly — a presentation consistent with longstanding denture
          wear and poor load distribution. The flabby ridge, or hypermobile fibrous tissue, results
          from chronic pressure resorption of the underlying bone, leaving a mobile fibrous pad.
          This tissue displaces under impression pressure, leading to inaccurate impressions and
          subsequently unstable prostheses if not managed correctly. Watt and MacGregor (1986)
          emphasised the importance of using a window or selective pressure impression technique in
          such cases to avoid distorting the flabby tissue, thereby capturing a more accurate
          functional impression.
        </P>
        <P>
          The lower prognosis assigned to Mrs Watkins' mandibular denture — rated as fair to
          moderate — reflects this clinical reality. Patient counselling regarding the inherent
          limitations of lower complete denture retention is an essential component of treatment in
          such cases, as unrealistic expectations are a primary source of dissatisfaction.
        </P>

        <SecLabel>Pemphigus Vulgaris and Complete Denture Therapy</SecLabel>
        <P>
          Pemphigus vulgaris (PV) is a potentially life-threatening autoimmune blistering disorder
          characterised by acantholysis of the epithelium, resulting in painful intraepithelial
          blisters affecting the skin and mucous membranes. Oral involvement is present in over 90%
          of cases and is frequently the initial manifestation of the disease. The oral mucosa
          presents with fragile, easily ruptured bullae that heal slowly and may become secondarily
          infected.
        </P>
        <P>
          From a prosthodontic perspective, PV presents several management challenges. The
          denture-bearing mucosa is inherently fragile, and the mechanical trauma of denture
          insertion, border moulding, and impression-taking carries a heightened risk of inducing
          new lesions. Scully and Challacombe (2002) noted that patients with active PV require
          careful management during impression procedures, with particular attention to avoiding
          repeated trauma, and that dental appliances should be designed to minimise pressure on
          affected sites. In Mrs Watkins' case, recurring ulcers were observed at multiple
          appointments, and the application of topical anaesthetic prior to lower tray fitting
          was necessary to manage active mucosal inflammation throughout treatment. Chlorhexidine
          0.2% was prescribed at the initial visit to address an existing lingual ulcer.
        </P>
        <P>
          Furthermore, Mrs Watkins' long-term use of systemic corticosteroids (Prednisone) for PV
          management introduces additional considerations. Corticosteroid-induced immunosuppression
          impairs mucosal healing and increases susceptibility to opportunistic oral infections such
          as candidiasis, a risk compounded by denture wearing. Antifungal prophylaxis and thorough
          denture hygiene education are therefore critical components of post-delivery management in
          such patients.
        </P>

        <SecLabel>Conclusion</SecLabel>
        <P>
          Mrs Watkins' case illustrates the complexity that systemic disease introduces into routine
          prosthodontic treatment. The atrophic mandibular ridge demanded careful impression
          technique and realistic prognosis setting, while the presence of pemphigus vulgaris
          required ongoing mucosal monitoring and a modified clinical approach at every appointment.
          These combined challenges reinforced the importance of a thorough medical history,
          interdisciplinary awareness, and patient-centred communication in the successful
          management of complete denture patients.
        </P>

        <Byline />
      </PageBody>
    </>
  )
}
