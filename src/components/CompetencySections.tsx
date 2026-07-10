import { competencies } from '../data/competencies'
import { ExternalLink, SectionHeader } from './ui'

export function CompetenciesIntro() {
  return (
    <section id="competencies">
      <SectionHeader
        eyebrow="Part 2 · The depth"
        title="The competency layers"
        lede="Seven competencies, one template each: what it demands · how Rossum runs it (from the transcripts) · the external method that sharpens it · the one resource worth reading."
      />
      <p>
        The "how Rossum runs it" layer is grounded in what Anna and Kiki actually said — the 89% gate, the
        no-CSM reality, the TSA-as-best-friend, the loud-low-payer problem. The "best practice" layer is
        where I bring a method from outside that Rossum's own description points toward. The resource is
        one source, named, with the specific thing to take from it — not a reading list.
      </p>
    </section>
  )
}

export function CompetencyCards() {
  return (
    <>
      {competencies.map((comp) => (
        <div className="comp" id={comp.id} key={comp.id}>
          <div className="comp-head">
            <span className="num">{comp.number}</span>
            <h3>{comp.title}</h3>
          </div>
          <div className="comp-body">
            {comp.layers.map((layer) => (
              <div className="layer" key={layer.name}>
                <div className="lname">{layer.name}</div>
                {layer.resource ? (
                  <div className="res">
                    <b>{layer.resource.title}</b> &nbsp;—&nbsp;{' '}
                    <span className="meth">{layer.resource.method}</span>
                  </div>
                ) : (
                  <p>
                    {comp.id === 'c-expansion' && layer.name === 'Best practice + method' ? (
                      <>
                        Separate observed signals from constructed thesis. Usage data tells you who's near a
                        volume ceiling or running a new document type (observed); the expansion thesis is
                        built from Rossum's actual levers mapped onto that account's business (constructed).
                        Lead expansion conversations from realised value in the QBR, never as a cold upsell —
                        and guard against oversell, which manufactures the next renewal's escalation. The{' '}
                        <ExternalLink href="https://rossum.ai/ap-automation-maturity-quiz/">
                          AP Automation Maturity Quiz
                        </ExternalLink>{' '}
                        Rossum publishes is a legitimate, low-friction way to open that conversation:
                        benchmark the account against peers, let the gap make the case.
                      </>
                    ) : comp.id === 'c-reviews' && layer.name === 'Best practice + method' ? (
                      <>
                        Make the review a value-realisation instrument, not a status update. Lead with the
                        customer's own metrics — touchless/straight-through-processing rate, exception rate,
                        document turnaround time, GL/tax-coding accuracy, and (where relevant) early payment
                        discounts captured — against where they were at onboarding. The{' '}
                        <ExternalLink href="https://rossum.ai/ap-automation-maturity-quiz/">
                          AP Automation Maturity Quiz
                        </ExternalLink>{' '}
                        is a ready-made benchmark to frame the conversation against peers rather than just
                        their own history. The review is where you bank renewal confidence and open expansion
                        in the same hour, because both are framed by demonstrated ROI.
                      </>
                    ) : (
                      layer.content
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
