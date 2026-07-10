import { primitives } from '../data/primitives'
import { MajorRule, Note, SectionHeader } from './ui'

export function PrimitivesSection() {
  return (
    <section id="primitives">
      <SectionHeader
        eyebrow="Part 1 · The grammar"
        title="1.1 — Primitives"
        lede="Eight dimensions. Read a situation's value on each and you have its coordinates — enough to route it without having seen it before."
      />
      <p>
        None of these is invented for the document; each is something I can literally read from a Rossum
        system Kiki named, or infer in the first two minutes of a call. The point of naming them is
        consistency: the same eight questions, every time, so triage stops being mood and becomes a read.
      </p>

      <div className="prim-grid">
        {primitives.map((p) => (
          <div className="prim" key={p.index}>
            <div className="k">
              {p.key} <span className="ix">{p.index}</span>
            </div>
            <div className="vals">{p.values}</div>
            <div className="src">
              <b>Read from:</b> {p.source}
            </div>
          </div>
        ))}
      </div>

      <Note tag="The one that breaks novices">
        <p>
          P4 (severity) and P8 (temperature) are independent axes. The predecessor's failure was treating
          every hot call as a high-severity one — sounding every alarm for a 40k account's Sev-3. The whole
          grammar exists to keep those two reads separate.
        </p>
      </Note>
    </section>
  )
}

export function SpineSection() {
  return (
    <section id="spine">
      <SectionHeader
        eyebrow="Part 1 · The grammar"
        title="1.2 — Decision spine"
        lede="Coordinates in, one of four triage verdicts out, then one of four plays. Everything in Parts 2 and 3 hangs off this."
      />

      <div className="spine">
        <div className="row">
          <span className="lbl">Read</span>
          <span className="box">P1–P8 coordinates</span>
          <span className="arrow">→</span>
        </div>
        <div className="row">
          <span className="lbl">Triage</span>
          <span className="verdict v-engage">Engage</span>
          <span className="verdict v-monitor">Monitor</span>
          <span className="verdict v-route">Route</span>
          <span className="verdict v-ignore">Ignore</span>
        </div>
        <div className="row">
          <span className="lbl">Then play</span>
          <span className="box amber">Renewal</span>
          <span className="box amber">Expansion</span>
          <span className="box amber">No-fix escalation</span>
          <span className="box amber">Fifth-AM cold open</span>
        </div>
      </div>

      <h4>The four verdicts</h4>
      <ul>
        <li>
          <span className="verdict v-engage">Engage</span> — I take it personally and now. Triggered by
          high P2 (value/headroom) <em>or</em> near P7 (renewal) <em>or</em> a genuine P4 Sev-1, regardless
          of noise.
        </li>
        <li>
          <span className="verdict v-monitor">Monitor</span> — healthy, no renewal pressure, no real issue.
          A quick email, a Cockpit watch-flag, time reclaimed for the 50 that move money.
        </li>
        <li>
          <span className="verdict v-route">Route</span> — real but not mine. Hand to support/TSA/AITS with
          a warm handoff and a follow-up checkpoint — not abandonment, delegation.
        </li>
        <li>
          <span className="verdict v-ignore">Ignore</span> — the hardest verdict and the one the role is
          really testing. Low P2, Sev-3, already with support: I acknowledge, set expectation, and
          consciously decline to spend the hour. "Sometimes you just have to click the ignore button" — Kiki
          said it; the grammar makes it defensible instead of guilty.
        </li>
      </ul>

      <h4>The four plays</h4>
      <p>Each is detailed in Part 2 and worked in Part 3. In one line each:</p>
      <ul>
        <li>
          <span className="play-tag">Renewal</span> protect the 89% gate — sequence the motion from T-180
          flag to T-30 close.
        </li>
        <li>
          <span className="play-tag">Expansion</span> the 35% muscle — feature/volume/tier/use-case, or the
          cross-entity referral (Walt→DoorDash).
        </li>
        <li>
          <span className="play-tag">No-fix escalation</span> when P5 = no fix exists: power through the
          help, then manage expectation honestly, then convert the moment.
        </li>
        <li>
          <span className="play-tag">Fifth-AM cold open</span> when P6 = inherited-cold: absorb the
          "you're the fifth AM" without defending, re-earn the seat.
        </li>
      </ul>
    </section>
  )
}

export function UnknownSection() {
  return (
    <section id="unknown">
      <SectionHeader
        eyebrow="Part 1 · The grammar"
        title="1.3 — Decompose the unknown"
        lede="The method for a situation I've never seen. This is what makes the manual complete without being a phrasebook."
      />
      <p>
        When something lands that isn't in the knot library — and most things won't be — I don't reach for a
        missing script. I run the situation through the grammar:
      </p>
      <ol>
        <li>
          <strong>Read the eight coordinates.</strong> What's the trigger, the value, the tier, the severity,
          my control, the relationship, the renewal distance, the temperature? Two minutes, often mid-call.
        </li>
        <li>
          <strong>Find the dominant axis.</strong> Usually one coordinate sets the verdict: a Sev-1 dominates;
          an imminent renewal dominates; a top-quartile account dominates. Name it.
        </li>
        <li>
          <strong>Take the triage verdict</strong> the dominant axis implies — engage / monitor / route /
          ignore.
        </li>
        <li>
          <strong>Route into the play</strong> whose trigger matches. If two plays apply (a hot escalation{' '}
          <em>on</em> a renewal account), renewal proximity wins — protect the gate first, manage the issue
          inside that frame.
        </li>
        <li>
          <strong>Log what the grammar didn't cleanly handle.</strong> Edge cases are how v0.2 becomes v0.3.
          The library grows from the seat, not from a desk.
        </li>
      </ol>
      <Note tag="Why this beats a bigger script">
        <p>
          A phrasebook fails the moment reality steps outside it. A grammar degrades gracefully — an
          unfamiliar case still has coordinates, still has a dominant axis, still routes. Coverage comes from
          the method, not the page count.
        </p>
      </Note>
    </section>
  )
}

export { MajorRule }
