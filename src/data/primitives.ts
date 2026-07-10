import type { Primitive } from '../types'

export const primitives: Primitive[] = [
  {
    key: 'Trigger type',
    index: 'P1',
    values: 'renewal-due · usage-drop · escalation · silence · expansion-signal · compliance-mandate · handover',
    source: 'Cockpit triage feed — renewal T-flag, Tableau usage curve, Jira/support ticket, Gong activity gap, e-invoicing mandate calendar.',
  },
  {
    key: 'Value + headroom',
    index: 'P2',
    values: 'ARR band × expansion ceiling (low / mid / top-quartile)',
    source: 'Salesforce ARR + Cockpit Potential score. The "where the money sits" 50 accounts vs. the long tail.',
  },
  {
    key: 'Support tier',
    index: 'P3',
    values: 'premier (has TSA) · mid (premier success plan) · none (reactive support only)',
    source: 'account record. This single field decides whether I have a fix path or have to broker one.',
  },
  {
    key: 'Severity',
    index: 'P4',
    values: "P1 (can't log in / engine down) · Sev-2 · Sev-3 (slow / wrong value despite training)",
    source: 'Rossum\'s own severity definitions. Note: "engine picks the wrong value" is not a Sev-1, however loud the client.',
  },
  {
    key: 'My control over the fix',
    index: 'P5',
    values: 'I can fix · TSA can fix · research-queue (months / maybe never) · no fix exists',
    source: "issue type + tier — and the platform's own confidence signal. A field the AI flags as below-threshold (grey, unchecked) is a tunable setting; a field already human-validated and still wrong is a model question for AITS/research, a different conversation entirely.",
  },
  {
    key: 'Relationship state',
    index: 'P6',
    values: 'warm · neutral · strained · inherited-cold ("you\'re the fifth AM")',
    source: 'Gong history, prior-AM notes, handover context. Sets the opening posture.',
  },
  {
    key: 'Renewal proximity',
    index: 'P7',
    values: 'T-180+ · T-180 (flag) · T-90 (motion) · T-30 (close) · post-renewal',
    source: 'Cockpit renewal flag. Proximity changes the cost of every other coordinate — a strained account at T-30 is a different animal than at T-180.',
  },
  {
    key: 'Emotional temperature',
    index: 'P8',
    values: 'calm · frustrated · hot (end-of-month, finance deadline, overtime)',
    source: 'the call itself. Hot ≠ high-severity. A Sev-3 from a finance team at month-end close feels like a P1 to them, and that gap is the thing to manage.',
  },
]
