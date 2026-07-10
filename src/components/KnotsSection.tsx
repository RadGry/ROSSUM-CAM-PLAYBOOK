import { useMemo, useState } from 'react'
import { knots } from '../data/knots'
import type { VerdictKind } from '../types'
import { PlayTag, SectionHeader, Verdict } from './ui'

const verdictFilters: { label: string; value: VerdictKind | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Engage', value: 'engage' },
  { label: 'Monitor', value: 'monitor' },
  { label: 'Route', value: 'route' },
  { label: 'Ignore', value: 'ignore' },
]

export function KnotsSection() {
  const [query, setQuery] = useState('')
  const [verdict, setVerdict] = useState<VerdictKind | 'all'>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return knots.filter((k) => {
      const matchesVerdict = verdict === 'all' || k.verdictKind === verdict
      const matchesQuery =
        !q ||
        k.id.toLowerCase().includes(q) ||
        k.title.toLowerCase().includes(q) ||
        k.play.toLowerCase().includes(q) ||
        k.coordinates.some((c) => c.value.toLowerCase().includes(q))
      return matchesVerdict && matchesQuery
    })
  }, [query, verdict])

  return (
    <>
      <section id="knots">
        <SectionHeader
          eyebrow="Part 3 · Worked examples"
          title="The recurring-knot library"
          lede="Twenty-one common tangles, each shown as a routing through the grammar: coordinates read → triage verdict → play → a talk-track skeleton."
        />
        <p>
          These are illustrations of the system, <strong>not the universe</strong>. The value isn't the
          twenty cases — it's that you can see the same eight-coordinate read and the same spine producing
          all of them, which is what tells you the twenty-first case has a home too. The coordinate strip at
          the top of each card is the literal readout; the talk track is a skeleton to adapt, never a line to
          recite.
        </p>

        <div className="knot-toolbar">
          <input
            type="search"
            className="knot-search"
            placeholder="Search knots by title, play, or coordinate…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search knots"
          />
          <div className="knot-filters" role="group" aria-label="Filter by verdict">
            {verdictFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`filter-btn ${verdict === f.value ? 'active' : ''}`}
                onClick={() => setVerdict(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <p className="knot-count">
          Showing {filtered.length} of {knots.length} knots
        </p>
      </section>

      {filtered.map((knot) => (
        <article className="knot" id={knot.id.toLowerCase()} key={knot.id}>
          <div className="knot-head">
            <div className="kid">{knot.id}</div>
            <div className="ktitle">{knot.title}</div>
          </div>
          <div className="readout">
            {knot.coordinates.map((c) => (
              <span className="pair" key={c.key}>
                <span className="pk">{c.key}</span>{' '}
                <span className="pv">{c.value}</span>
              </span>
            ))}
          </div>
          <div className="knot-body">
            <div className="knot-verdict-row">
              <Verdict kind={knot.verdictKind}>{knot.verdict}</Verdict>
              <PlayTag>{knot.play}</PlayTag>
            </div>
            {knot.steps.map((step) => (
              <div className="step" key={step.label}>
                <span className="sl">{step.label}</span>
                {step.text}
              </div>
            ))}
            <div className="tt">{knot.talkTrack}</div>
          </div>
        </article>
      ))}
    </>
  )
}
