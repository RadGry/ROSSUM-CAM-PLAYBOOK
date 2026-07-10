import { resources } from '../data/resources'
import { Note, SectionHeader } from './ui'

export function ResourcesSection() {
  return (
    <section id="resources">
      <SectionHeader
        eyebrow="Part 4 · Reference"
        title="Resource appendix"
        lede='The shelf, consolidated. One line each: the source and the specific thing I take from it. Named because the role is data-driven and "I read the literature" should mean something checkable.'
      />

      <div className="table-wrap">
        <table className="rsrc-tbl">
          <thead>
            <tr>
              <th style={{ width: '32%' }}>Source</th>
              <th style={{ width: '24%' }}>For</th>
              <th>The specific take</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((r) => (
              <tr key={r.source}>
                <td>
                  <b>{r.source}</b>
                  {r.subtitle && (
                    <>
                      <br />
                      {r.subtitle}
                    </>
                  )}
                </td>
                <td>{r.forTopic}</td>
                <td>{r.take}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Note tag="Calibration note">
        <p>
          Every threshold in this manual — what counts as top-quartile, when an Ignore becomes an Engage, how
          the tail's cadence is set — is a v0.2 assumption to replace with real book economics in the first
          90 days. The grammar is the durable part; the numbers are for tuning together with the team.
        </p>
      </Note>
    </section>
  )
}
