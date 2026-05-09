import PageHeader from '../components/PageHeader'
import PageBody from '../components/PageBody'
import Byline from '../components/Byline'

const P = ({ children }) => (
  <p className="text-[14px] leading-[1.85] text-[#3d3530] mb-[18px] font-light">{children}</p>
)

export default function Reflection() {
  return (
    <>
      <PageHeader eyebrow="Section 05">
        <em className="italic text-sand">Reflection</em>
      </PageHeader>
      <PageBody>
        <P>
          Treating Mrs Watkins was, without question, the most demanding clinical experience we
          have encountered in our three years at UWC. What began as a routine complete denture case
          quickly revealed itself to be a masterclass in patience, adaptability, and the often
          underestimated art of managing a patient's expectations.
        </P>
        <P>
          From the very first appointment, it became clear that Mrs Watkins would require more than
          technical skill. She arrived with a decade's worth of frustration about her existing
          dentures, strong preconceived ideas about what she wanted — a flangeless upper, reduced
          flanges on the lower — and a complex medical background that affected every stage of
          treatment. Learning to navigate those conversations, to hold firm on clinically sound
          decisions while remaining empathetic and respectful, was something no textbook had fully
          prepared us for. Explaining, more than once, why we could not fabricate a flangeless
          denture at this facility — and doing so without diminishing her concerns — was a genuine
          test of our communication skills.
        </P>
        <P>
          Clinically, the secondary impression appointments were among the most challenging. The
          lower special tray broke before use on the first attempt, multiple materials were tried
          and failed for the lower impression, and Mrs Watkins' discomfort with border moulding
          made each attempt stressful for both patient and clinician. What we took from that
          experience was the importance of preparation, of anticipating complications before they
          arise, and of remaining calm and methodical when they inevitably do. We also learned that
          the number of attempts is less important than the accuracy of the final result — and that
          perseverance is a clinical skill in itself.
        </P>
        <P>
          The jaw registration appointment brought its own set of lessons. Working with wax record
          blocks on an atrophic ridge, trying to establish an occlusal vertical dimension on a
          patient who was uncomfortable and opinionated, required us to slow down and be precise.
          Seeing the measurements translate into a mounted articulator — and then into a tooth setup
          — made the theory we had studied feel real for the first time.
        </P>
        <P>
          The try-in revealed a cross-bite we had not anticipated, and we had to reset the teeth
          and re-adapt the flange on the day. It was a reminder that the clinical process is rarely
          linear, and that the ability to problem-solve under pressure is as important as getting it
          right the first time. When Mrs Watkins finally expressed satisfaction with the revised
          setup, it was one of the most rewarding moments of our clinical training so far.
        </P>
        <P>
          Reflecting on the case as a whole, we believe the greatest growth was not technical but
          personal. We became more confident in our clinical decisions, more resilient when things
          went wrong, and more aware of the human being sitting in the chair — not just the
          prosthesis we were trying to construct. Mrs Watkins challenged us, frustrated us, and
          ultimately taught us more than a straightforward case ever could. We are better clinicians
          for it.
        </P>
        <Byline />
      </PageBody>
    </>
  )
}
