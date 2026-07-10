import type { Knot } from '../types'

export const knots: Knot[] = [
  {
    id: 'K01',
    title: 'The loud low-payer',
    coordinates: [
      { key: 'trig', value: 'escalation' },
      { key: 'val', value: 'low / no headroom' },
      { key: 'tier', value: 'none' },
      { key: 'sev', value: 'Sev-3' },
      { key: 'fix', value: 'research-queue' },
      { key: 'rel', value: 'strained' },
      { key: 'renew', value: 'T-180+' },
      { key: 'temp', value: 'hot' },
    ],
    verdict: 'Ignore (acknowledge + route)',
    verdictKind: 'ignore',
    play: 'No-fix escalation',
    steps: [
      {
        label: 'read',
        text: 'Loudest voice, smallest cheque, no package, non-critical bug. Dominant axis: P2 floor + P3 none.',
      },
      {
        label: 'verdict',
        text: "Acknowledge the impact, route to support, decline the hour. The textbook 'click ignore' case.",
      },
      {
        label: 'convert',
        text: 'Plant the package seed for later — not now, while hot.',
      },
    ],
    talkTrack:
      "I hear you — this is landing on your close and that's painful. Support owns the fix here and they're fastest on it; I'll make sure it's flagged and I'll check the thread Friday.",
  },
  {
    id: 'K02',
    title: 'No-TSA P1 on a top-quartile account',
    coordinates: [
      { key: 'trig', value: 'escalation' },
      { key: 'val', value: 'top-quartile' },
      { key: 'tier', value: 'none' },
      { key: 'sev', value: 'P1' },
      { key: 'fix', value: 'TSA can fix' },
      { key: 'rel', value: 'neutral' },
      { key: 'renew', value: 'T-90' },
      { key: 'temp', value: 'hot' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'No-fix escalation → broker',
    steps: [
      {
        label: 'read',
        text: 'Genuine Sev-1, big account, near renewal, but no package = no fix path through me. Two dominant axes collide: P4 P1 and P2 top-quartile.',
      },
      {
        label: 'verdict',
        text: 'Engage personally. Broker the one-off TSA favour internally — this is exactly when to spend that capital.',
      },
      {
        label: 'convert',
        text: 'The rescue becomes the package proof-point at T-90 renewal.',
      },
    ],
    talkTrack:
      "I'm getting our top technical person on this with you today as an exception — because this matters and the timing matters. Once we're through it, let's talk about making that level of help standing, not a favour.",
  },
  {
    id: 'K03',
    title: "Renewal where the engine bug won't be fixed before the date",
    coordinates: [
      { key: 'trig', value: 'renewal-due' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: 'Sev-2' },
      { key: 'fix', value: 'no fix exists' },
      { key: 'rel', value: 'neutral' },
      { key: 'renew', value: 'T-90' },
      { key: 'temp', value: 'frustrated' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Renewal + no-fix honesty',
    steps: [
      {
        label: 'read',
        text: 'Open issue with no ship date, renewal approaching. P7 renewal dominates; P5 no-fix shapes the play.',
      },
      {
        label: 'verdict',
        text: 'Get the no-fix on the table at T-90, not T-30. Reframe renewal on total value realised, with the limitation named honestly.',
      },
      {
        label: 'convert',
        text: 'Honesty now prevents the surprise that loses the renewal at signing.',
      },
    ],
    talkTrack:
      "Straight with you: this specific behaviour isn't on the near-term roadmap, and I won't pretend otherwise. Here's what the platform is delivering against your numbers — and here's how we work around the gap. Let's renew on what's real.",
  },
  {
    id: 'K04',
    title: 'The Walt → DoorDash referral',
    coordinates: [
      { key: 'trig', value: 'expansion-signal' },
      { key: 'val', value: 'top-quartile' },
      { key: 'tier', value: 'premier' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: '—' },
      { key: 'rel', value: 'warm' },
      { key: 'renew', value: 'post-renewal' },
      { key: 'temp', value: 'calm' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Expansion (cross-entity)',
    steps: [
      {
        label: 'read',
        text: 'Warm flagship account inside a larger parent group. Dominant axis: P2 headroom via the corporate door.',
      },
      {
        label: 'verdict',
        text: 'Work the relationship into the parent. Ask for the warm intro, not the cold pitch.',
      },
      {
        label: 'convert',
        text: 'One referral can outweigh a quarter of feature upsells.',
      },
    ],
    talkTrack:
      "You've seen what this does for your team here. Your group has the same problem ten times over — who's the right person on the parent side for me to show this to? Happy to make you look good for the intro.",
  },
  {
    id: 'K05',
    title: 'End-of-month outage on a finance team',
    coordinates: [
      { key: 'trig', value: 'escalation' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: 'P1' },
      { key: 'fix', value: 'TSA can fix' },
      { key: 'rel', value: 'warm' },
      { key: 'renew', value: 'T-180+' },
      { key: 'temp', value: 'hot' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'No-fix escalation (real P1)',
    steps: [
      {
        label: 'read',
        text: 'Real Sev-1 at the worst possible moment for a finance team mid-close. P4 + P8 both max.',
      },
      {
        label: 'verdict',
        text: 'All-in. This is the legitimate alarm — the opposite of K01.',
      },
      {
        label: 'convert',
        text: 'Showing up in their worst hour banks renewal trust no QBR can buy.',
      },
    ],
    talkTrack:
      "I know exactly what end-of-close means for your team — let's get you processing again first, debrief after. I'm on this with you until it's moving.",
  },
  {
    id: 'K06',
    title: "'You're the fifth AM I've spoken to'",
    coordinates: [
      { key: 'trig', value: 'handover' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: '—' },
      { key: 'rel', value: 'inherited-cold' },
      { key: 'renew', value: 'T-180+' },
      { key: 'temp', value: 'frustrated' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Fifth-AM cold open',
    steps: [
      {
        label: 'read',
        text: "Inherited churn-of-AMs resentment. P6 dominates; nothing else matters until it's absorbed.",
      },
      {
        label: 'verdict',
        text: "Don't defend the history. Acknowledge it, then differentiate by doing, not promising.",
      },
      {
        label: 'convert',
        text: 'Re-earn the seat with one concrete follow-through before asking for anything.',
      },
    ],
    talkTrack:
      "You're right, and I won't insult you by promising I'm different — I'll just show you. One thing you've been waiting on: tell me what it is and I'll own it through to done.",
  },
  {
    id: 'K07',
    title: 'Silent healthy account, renewal approaching',
    coordinates: [
      { key: 'trig', value: 'silence' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: '—' },
      { key: 'rel', value: 'neutral' },
      { key: 'renew', value: 'T-90' },
      { key: 'temp', value: 'calm' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Renewal (pre-empt)',
    steps: [
      {
        label: 'read',
        text: 'No noise, but silence near renewal is its own signal. P7 turns a Monitor into an Engage.',
      },
      {
        label: 'verdict',
        text: 'Proactive value check-in before they start shopping. Quiet ≠ safe at T-90.',
      },
      {
        label: 'convert',
        text: "First contact should carry value evidence, not 'just checking in.'",
      },
    ],
    talkTrack:
      "You've been running smoothly, which is the point — here's the impact in your numbers over the last two quarters. Before renewal I'd like 20 minutes to make sure the next term is set up around where you're heading.",
  },
  {
    id: 'K08',
    title: 'Usage drop on a mid-tier account',
    coordinates: [
      { key: 'trig', value: 'usage-drop' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: '—' },
      { key: 'rel', value: 'neutral' },
      { key: 'renew', value: 'T-180' },
      { key: 'temp', value: 'calm' },
    ],
    verdict: 'Engage (diagnose)',
    verdictKind: 'engage',
    play: 'Renewal risk / expansion',
    steps: [
      {
        label: 'read',
        text: 'Tableau shows declining volume. Could be churn-risk or a process change. P1 usage-drop needs a read before a verdict.',
      },
      {
        label: 'verdict',
        text: 'Engage to diagnose — is this adoption failure (renewal risk) or a use-case shift (expansion door)?',
      },
      {
        label: 'convert',
        text: 'The same signal routes to either play depending on the cause.',
      },
    ],
    talkTrack:
      "I noticed your volume's shifted — wanted to understand what changed on your side before I assume anything. Is this a process change, or is something getting in the way?",
  },
  {
    id: 'K09',
    title: "Wrong-value complaint, client insists it's Sev-1",
    coordinates: [
      { key: 'trig', value: 'escalation' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: 'Sev-3' },
      { key: 'fix', value: 'research-queue' },
      { key: 'rel', value: 'neutral' },
      { key: 'renew', value: 'T-180+' },
      { key: 'temp', value: 'hot' },
    ],
    verdict: 'Route (with framing)',
    verdictKind: 'route',
    play: 'No-fix escalation',
    steps: [
      {
        label: 'read',
        text: "Engine picks wrong value despite training. Loud, but by Rossum's own definition not a Sev-1. P4/P8 gap is the whole problem.",
      },
      {
        label: 'verdict',
        text: 'Route to support/AITS, but reset the severity framing honestly so expectations are real.',
      },
      {
        label: 'convert',
        text: 'Managing the expectation now prevents the renewal-time grievance.',
      },
    ],
    talkTrack:
      "This is genuinely annoying and I want it improved — and I want to be honest about how it's classified so you know what to expect on timing. Here's the path, and here's what I'll personally chase.",
  },
  {
    id: 'K10',
    title: 'Top account wants a feature on the roadmap-but-not-shipped',
    coordinates: [
      { key: 'trig', value: 'expansion-signal' },
      { key: 'val', value: 'top-quartile' },
      { key: 'tier', value: 'premier' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: 'research-queue' },
      { key: 'rel', value: 'warm' },
      { key: 'renew', value: 'T-90' },
      { key: 'temp', value: 'calm' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Expansion + advocacy',
    steps: [
      {
        label: 'read',
        text: 'Big warm account, real demand, feature pending. P2 + advocacy leverage.',
      },
      {
        label: 'verdict',
        text: 'Engage; carry this to Product as an ARR-weighted theme, not a single ask.',
      },
      {
        label: 'convert',
        text: "Their demand plus others' becomes the case to prioritise the release — and a renewal sweetener.",
      },
    ],
    talkTrack:
      "This is on the roadmap and you're not the only one asking — which is exactly what helps me push it up the queue. Let me take your case to Product with the others and come back with a real read on timing.",
  },
  {
    id: 'K11',
    title: "Non-payer you must chase but can't alienate",
    coordinates: [
      { key: 'trig', value: 'escalation' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: 'I can fix' },
      { key: 'rel', value: 'strained' },
      { key: 'renew', value: 'T-90' },
      { key: 'temp', value: 'frustrated' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Renewal + stakeholder',
    steps: [
      {
        label: 'read',
        text: 'Finance flagged non-payment; renewal near; relationship already tender. P6 + P7 interact.',
      },
      {
        label: 'verdict',
        text: 'Separate the commercial chase from the relationship — bring finance in as process, keep myself as advocate.',
      },
      {
        label: 'convert',
        text: 'Resolve cleanly and the renewal conversation stays intact.',
      },
    ],
    talkTrack:
      "Quick admin one so it doesn't snag your renewal — there's an open invoice our finance team flagged. Can I connect you to the right person your side to clear it? Keeps us focused on the value conversation, not the paperwork.",
  },
  {
    id: 'K12',
    title: "Release silently broke a customer's setup",
    coordinates: [
      { key: 'trig', value: 'escalation' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: 'Sev-2' },
      { key: 'fix', value: 'TSA can fix' },
      { key: 'rel', value: 'warm' },
      { key: 'renew', value: 'T-180+' },
      { key: 'temp', value: 'hot' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'No-fix escalation + advocacy',
    steps: [
      {
        label: 'read',
        text: "A product release nobody flagged broke an automation. Not the customer's fault, not mine. P5 fixable but needs internal coordination.",
      },
      {
        label: 'verdict',
        text: "Own the coordination across AITS/research even though I didn't cause it; advocate the regression internally.",
      },
      {
        label: 'convert',
        text: 'Clean recovery from a self-inflicted product issue is a trust multiplier.',
      },
    ],
    talkTrack:
      "This one's on our side — a release changed something it shouldn't have touched on your setup. I'm pulling the right people now and I'll own getting it back. You shouldn't have had to find this.",
  },
  {
    id: 'K13',
    title: 'Mid-account with order-management headroom (new use case)',
    coordinates: [
      { key: 'trig', value: 'expansion-signal' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: '—' },
      { key: 'rel', value: 'warm' },
      { key: 'renew', value: 'post-renewal' },
      { key: 'temp', value: 'calm' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Expansion (new use case)',
    steps: [
      {
        label: 'read',
        text: 'Doing well on AP; AR / order-management team is untouched. P2 headroom via adjacent team.',
      },
      {
        label: 'verdict',
        text: 'Engage post-renewal from a position of demonstrated AP value; map the new buyer.',
      },
      {
        label: 'convert',
        text: 'Same logo, new department — the cleanest expansion there is.',
      },
    ],
    talkTrack:
      "Your AP numbers are strong enough that I want to ask — who runs order management your side? The same engine handles POs and receivables, and I'd rather show them what's already working than pitch cold.",
  },
  {
    id: 'K14',
    title: 'Account goes dark after a bad support experience',
    coordinates: [
      { key: 'trig', value: 'silence' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'none' },
      { key: 'sev', value: 'Sev-3' },
      { key: 'fix', value: 'research-queue' },
      { key: 'rel', value: 'strained' },
      { key: 'renew', value: 'T-90' },
      { key: 'temp', value: 'frustrated' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Fifth-AM-style re-entry + renewal',
    steps: [
      {
        label: 'read',
        text: 'Silence following a poor support touch, renewal looming, no package. P6 + P7 — silence here is a churn flag.',
      },
      {
        label: 'verdict',
        text: 'Engage to re-open; lead with ownership of the prior gap, not a renewal ask.',
      },
      {
        label: 'convert',
        text: "Reopen trust first; the renewal conversation can't happen over a closed door.",
      },
    ],
    talkTrack:
      "I know your last support round didn't land well, and I don't want that to be the last thing you heard from us. I'm not here to renew today — I'm here to fix the taste in your mouth first.",
  },
  {
    id: 'K15',
    title: 'Premier account, TSA on it, expansion ready',
    coordinates: [
      { key: 'trig', value: 'expansion-signal' },
      { key: 'val', value: 'top-quartile' },
      { key: 'tier', value: 'premier' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: 'TSA can fix' },
      { key: 'rel', value: 'warm' },
      { key: 'renew', value: 'T-90' },
      { key: 'temp', value: 'calm' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Expansion (volume/tier)',
    steps: [
      {
        label: 'read',
        text: 'Everything green, TSA in place, near a volume ceiling. The ideal-state expansion. P2 max, no friction.',
      },
      {
        label: 'verdict',
        text: 'Engage with the TSA jointly; build the expansion thesis on observed usage data.',
      },
      {
        label: 'convert',
        text: 'Over-the-10k threshold deal — per-deal bonus territory, done from value not pressure.',
      },
    ],
    talkTrack:
      "You're close to your volume tier ceiling and the TSA and I have mapped what the next tier unlocks for your throughput. Want to walk it at the review? It pays for itself at your current growth.",
  },
  {
    id: 'K16',
    title: 'Client misunderstood what was sold pre-sales',
    coordinates: [
      { key: 'trig', value: 'escalation' },
      { key: 'val', value: 'mid' },
      { key: 'tier', value: 'mid' },
      { key: 'sev', value: 'Sev-2' },
      { key: 'fix', value: 'no fix exists' },
      { key: 'rel', value: 'strained' },
      { key: 'renew', value: 'T-90' },
      { key: 'temp', value: 'hot' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'No-fix escalation (expectation reset)',
    steps: [
      {
        label: 'read',
        text: 'Gap between sold expectation and reality — a classic Rossum escalation root cause. P5 no-fix, but the real issue is expectation not product.',
      },
      {
        label: 'verdict',
        text: 'Engage; re-manage the expectation honestly without throwing sales under the bus.',
      },
      {
        label: 'convert',
        text: 'Reset cleanly and you keep a renewable account that felt mis-sold.',
      },
    ],
    talkTrack:
      "Let me make sure we're working from the same picture of what the platform does and doesn't do — because I think there's a gap between what you expected and what's real, and I'd rather close that than let it fester into renewal.",
  },
  {
    id: 'K17',
    title: 'Long-tail account, genuine quick question',
    coordinates: [
      { key: 'trig', value: 'escalation' },
      { key: 'val', value: 'low' },
      { key: 'tier', value: 'none' },
      { key: 'sev', value: 'Sev-3' },
      { key: 'fix', value: 'I can fix' },
      { key: 'rel', value: 'neutral' },
      { key: 'renew', value: 'T-180+' },
      { key: 'temp', value: 'calm' },
    ],
    verdict: 'Route (or 2-min self-fix)',
    verdictKind: 'route',
    play: 'no play — triage only',
    steps: [
      {
        label: 'read',
        text: 'Small account, trivial fixable question, calm. Low everything.',
      },
      {
        label: 'verdict',
        text: "If it's a literal two-minute answer I know, just answer — cheaper than routing. Otherwise route to support and move on.",
      },
      {
        label: 'convert',
        text: "Don't over-invest; don't advertise technical depth or they'll bring everything.",
      },
    ],
    talkTrack:
      "Quick answer: [does the thing]. For anything deeper here, support's your fastest route — they own this end to end.",
  },
  {
    id: 'K18',
    title: 'Strained top account, renewal at T-30',
    coordinates: [
      { key: 'trig', value: 'renewal-due' },
      { key: 'val', value: 'top-quartile' },
      { key: 'tier', value: 'premier' },
      { key: 'sev', value: 'Sev-2' },
      { key: 'fix', value: 'TSA can fix' },
      { key: 'rel', value: 'strained' },
      { key: 'renew', value: 'T-30' },
      { key: 'temp', value: 'frustrated' },
    ],
    verdict: 'Engage — top priority',
    verdictKind: 'engage',
    play: 'Renewal (recover late)',
    steps: [
      {
        label: 'read',
        text: 'Worst-quadrant renewal: big, strained, hot, 30 days out. Every axis says engage; this is the one that keeps you up.',
      },
      {
        label: 'verdict',
        text: 'All resources, TSA included. Recover the relationship and close in the same motion.',
      },
      {
        label: 'convert',
        text: 'Losing this one alone can miss the 89% gate — it gets disproportionate hours by design.',
      },
    ],
    talkTrack:
      "I know this term hasn't been smooth, and I'm not going to gloss it. Here's what I'm putting in place before we renew, starting this week — and I want your honest read on whether it's enough.",
  },
  {
    id: 'K19',
    title: 'Healthy account, no headroom, no issue',
    coordinates: [
      { key: 'trig', value: '—' },
      { key: 'val', value: 'low' },
      { key: 'tier', value: 'none' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: '—' },
      { key: 'rel', value: 'warm' },
      { key: 'renew', value: 'T-180+' },
      { key: 'temp', value: 'calm' },
    ],
    verdict: 'Monitor',
    verdictKind: 'monitor',
    play: 'no play — triage only',
    steps: [
      {
        label: 'read',
        text: 'Genuinely fine, small, nothing to do. The account the tail is made of.',
      },
      {
        label: 'verdict',
        text: 'Light async value note, Cockpit watch-flag, reclaim the time. Monitoring is a decision, not neglect.',
      },
      {
        label: 'convert',
        text: 'The discipline here funds the hours K18 needs.',
      },
    ],
    talkTrack:
      "Quick note — here's your quarter in numbers, all healthy. I'm a reply away if anything shifts; otherwise I'll check in before renewal.",
  },
  {
    id: 'K20',
    title: 'Parent-company restructure threatens several accounts at once',
    coordinates: [
      { key: 'trig', value: 'handover' },
      { key: 'val', value: 'top-quartile' },
      { key: 'tier', value: 'mixed' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: '—' },
      { key: 'rel', value: 'neutral' },
      { key: 'renew', value: 'mixed' },
      { key: 'temp', value: 'frustrated' },
    ],
    verdict: 'Engage — portfolio-level',
    verdictKind: 'engage',
    play: 'Renewal + stakeholder (multi)',
    steps: [
      {
        label: 'read',
        text: 'A structural event hitting multiple accounts — beyond a single coordinate read. Decompose-the-unknown territory.',
      },
      {
        label: 'verdict',
        text: 'Treat as a portfolio event: re-rank the affected accounts, map the new decision-makers, protect the renewals nearest term first.',
      },
      {
        label: 'convert',
        text: 'Get ahead of the new org chart and you keep accounts a reactive AM would lose in the shuffle.',
      },
    ],
    talkTrack:
      "I understand your group's restructuring — I'd rather get in front of it with you than react after. Who owns this decision in the new structure, and how do we keep your team's setup uninterrupted through the change?",
  },
  {
    id: 'K21',
    title: 'E-invoicing mandate deadline on a multi-country account',
    coordinates: [
      { key: 'trig', value: 'compliance-mandate' },
      { key: 'val', value: 'mid / top-quartile' },
      { key: 'tier', value: 'mixed' },
      { key: 'sev', value: '—' },
      { key: 'fix', value: '—' },
      { key: 'rel', value: 'neutral / warm' },
      { key: 'renew', value: 'T-180+' },
      { key: 'temp', value: 'calm (yet)' },
    ],
    verdict: 'Engage now',
    verdictKind: 'engage',
    play: 'Expansion (compliance-driven)',
    steps: [
      {
        label: 'read',
        text: "Account operates in Belgium, Poland, or France — all with e-invoicing mandates landing on AP teams. No issue exists yet, which is exactly why it's easy to miss. P1 trigger here isn't noise, it's a calendar.",
      },
      {
        label: 'verdict',
        text: 'Engage proactively, well before T-180. This is a genuine forcing function, not a manufactured upsell — Rossum already processes e-invoices and PDFs side by side, so the ask is real readiness, not speculative value.',
      },
      {
        label: 'convert',
        text: 'Compliance urgency plus a real product answer is the cleanest expansion conversation there is — it sells itself if I show up early enough to matter.',
      },
    ],
    talkTrack:
      "Quick heads-up, unrelated to anything that's gone wrong — your [country] entity has an e-invoicing mandate landing in [timeframe], and I want to make sure your setup handles it cleanly rather than scrambling later. Worth 20 minutes now?",
  },
]
