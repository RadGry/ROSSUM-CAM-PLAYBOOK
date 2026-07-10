import { heroChips } from './data/navigation'
import { CompetencyCards, CompetenciesIntro } from './components/CompetencySections'
import {
  MajorRule,
  PrimitivesSection,
  SpineSection,
  UnknownSection,
} from './components/GrammarSections'
import { KnotsSection } from './components/KnotsSection'
import { ResourcesSection } from './components/ResourcesSection'
import { Sidebar } from './components/Sidebar'
import { ExternalLink, Note, SectionHeader } from './components/ui'

function Hero() {
  return (
    <header className="hero">
      <div className="eyebrow">Day-one operating manual</div>
      <h1>
        How I'd actually run <em>a hundred accounts</em> — by system, not by stamina.
      </h1>
      <div className="sub">
        A working reference for the Commercial AM seat at Rossum. Built to keep open in-seat, not to recite.
        It's complete by <em>grammar</em>: every situation decomposes into a fixed set of coordinates and
        routes into one of four plays — so the manual covers cases it never lists.
      </div>
      <div className="meta-row">
        {heroChips.map((chip) => (
          <span className="chip" key={chip.label}>
            <b>{chip.label}:</b> {chip.value}
          </span>
        ))}
      </div>
    </header>
  )
}

function HowToUse() {
  return (
    <section id="use">
      <SectionHeader
        eyebrow="00 · Start here"
        title="How to use this"
        lede='This is the judgment layer. The Cockpit tells me which accounts to engage; this tells me what to do once it says "engage." It is deliberately not a script.'
      />

      <p>
        A 100-account book has more distinct situations than anyone can list, and a playbook that tries to
        enumerate them all signals the exact failure mode this role is hiring against — script-dependence
        instead of judgment. So this manual is built the other way round. <strong>Part 1</strong> is a
        small grammar: eight coordinates any situation decomposes into, and a spine that routes any point in
        that space into one of four plays. <strong>Part 2</strong> goes deep on each competency — how Rossum
        actually runs it, the external method that sharpens it, and the one resource worth reading.{' '}
        <strong>Part 3</strong> is ~21 worked tangles, shown as routings through the grammar — illustrations
        of the system, explicitly not the universe. <strong>Part 4</strong> is the reference shelf.
      </p>

      <Note tag="What this is not">
        <p>
          Not a finished rulebook. It's a v0.2 skeleton I'd refine in the first 90 days <em>with</em> the
          team — pressure-testing the triage thresholds against real book economics, swapping my assumed
          numbers for Salesforce/Tableau truth, and folding in the knots the team already knows that I
          don't yet. The grammar is the part I'm confident in; the calibration is the part we'd do together.
        </p>
      </Note>

      <p>
        It complements three things already built — the <strong>AM Cockpit</strong> (the Health × Potential
        prioritisation tool), the <strong>approach &amp; vision site</strong>, and the{' '}
        <strong>role-play console</strong> (talk tracks). Where those overlap this, I cross-reference rather
        than repeat: the Cockpit owns scoring, this owns the reasoning that scoring feeds.
      </p>

      <Note tag="Product grounding">
        <p>
          Vocabulary and product mechanics throughout this manual — Queues, Extraction Schema, confidence
          thresholds, the Generic Engine, Extensions, Rossum Aurora, AI Agents for Paperwork, e-invoicing —
          are pulled directly from{' '}
          <ExternalLink href="https://rossum.ai">rossum.ai</ExternalLink> and the{' '}
          <ExternalLink href="https://knowledge-base.rossum.ai">Rossum Knowledge Base</ExternalLink> as of
          June 2026, not assumed from the transcripts alone. Where the public surface and what Anna/Kiki
          described differ, I've flagged it rather than silently picking one.
        </p>
      </Note>
    </section>
  )
}

function Footer() {
  return (
    <div className="foot">
      <p>
        CAM Operating Playbook · v0.2 · A day-one operating manual for the Commercial Account Manager seat
        at Rossum. Grounded in the Anna and Kiki screens, the role JD, and the current Rossum product
        surface (rossum.ai, knowledge-base.rossum.ai, June 2026); complements the AM Cockpit, the approach
        &amp; vision site, and the role-play console. Built to be used, not recited — and refined in the first
        90 days with the team.
      </p>
    </div>
  )
}

export default function App() {
  return (
    <div className="wrap">
      <Sidebar />
      <main>
        <Hero />
        <div className="col">
          <HowToUse />
          <MajorRule />
          <PrimitivesSection />
          <MajorRule />
          <SpineSection />
          <MajorRule />
          <UnknownSection />
          <MajorRule />
          <CompetenciesIntro />
        </div>
        <div className="col">
          <CompetencyCards />
          <MajorRule />
        </div>
        <div className="col">
          <KnotsSection />
          <MajorRule />
        </div>
        <div className="col">
          <ResourcesSection />
        </div>
        <Footer />
      </main>
    </div>
  )
}
