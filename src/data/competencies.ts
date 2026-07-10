import type { Competency } from '../types'

export const competencies: Competency[] = [
  {
    id: 'c-prioritise',
    number: '2.1',
    title: 'Prioritisation at scale',
    layers: [
      {
        name: 'The competency',
        content:
          "Decide, every week, which of ~100 accounts get my hours — and defend the accounts I deliberately don't touch. The role's central skill; the predecessor was let go for lacking it.",
      },
      {
        name: 'How Rossum runs it',
        content:
          'There is no system that segments the book for you — Anna was explicit: prioritisation and time-planning sit on the AM. Expectation is to speak to ~50% of the book, because the money sits in roughly 50 accounts; the long tail gets light-touch. Tools exist (Salesforce, Tableau health, Gong) but the judgment of who-when-how is mine. "Nobody\'s gonna hold your hand."',
      },
      {
        name: 'Best practice + method',
        content:
          "Run a portfolio-segmentation cadence, not an inbox. Weekly: re-rank on Health × Potential (the Cockpit), pull the renewal-proximity flags forward, and time-box the long tail to async. The signal worth ranking on isn't just ARR — it's the platform's own health telemetry: touchless/straight-through-processing rate, exception rate, and document turnaround time per Queue, all visible in the same dashboards Kiki described. An account whose STP rate is sliding is a renewal risk before it ever opens a ticket. The move that separates operators from reactors is pre-committing capacity to the top quartile before the week's noise arrives, so escalations spend slack time, not core time.",
      },
      {
        name: 'Resource',
        content: '',
        resource: {
          title: 'Gainsight — health-score-driven CTAs (Calls to Action).',
          method:
            'Take the model of converting account signals into a ranked, time-boxed action queue rather than a flat task list. The Cockpit is my implementation of this; the discipline is working the queue top-down and letting the tail wait.',
        },
      },
    ],
  },
  {
    id: 'c-renewal',
    number: '2.2',
    title: 'Renewals',
    layers: [
      {
        name: 'The competency',
        content:
          "Protect 65% of my variable comp and the team's retention number. Lead the renewal independently, sequence it early, and never let a renewable account drift to a surprise.",
      },
      {
        name: 'How Rossum runs it',
        content:
          '65% of VC rides on individual renewal rate, gated quarterly at 89% of quarterly ARR base; 100% with no churn earns an accelerator. Contracts run years out (some to 2028–29) but the Coupa migration means everyone moves to new contracts by August — an unusual all-book renewal motion layered on top of normal cadence.',
      },
      {
        name: 'Best practice + method',
        content:
          "Work the renewal as a 90-day motion, not a 30-day scramble. T-180: flag and health-check. T-90: surface value realised and any open risk, get the no-fix issues honestly on the table early so they're not landmines at signing. T-30: close on value, not on price. The single biggest lever on GRR is starting before the customer starts thinking about leaving.",
      },
      {
        name: 'Resource',
        content: '',
        resource: {
          title: 'OpenView — the 90-day renewal motion.',
          method:
            "Use the staged T-180/T-90/T-30 cadence as the backbone of the renewal play. Adapt the timeline to the commercial book's shorter cycles, but keep the principle: renewal work is front-loaded.",
        },
      },
    ],
  },
  {
    id: 'c-expansion',
    number: '2.3',
    title: 'Expansion',
    layers: [
      {
        name: 'The competency',
        content:
          'Drive the 35% expansion line — the company-quota half of VC, plus per-deal bonuses over 10k. Find headroom in a book where most accounts are mid-market and price-sensitive.',
      },
      {
        name: 'How Rossum runs it',
        content:
          'Expansion VC is 35% and company-shared (not purely individual) because it\'s a team quota; on top, a per-deal incentive fires for any single expansion over $10k. Levers Kiki named: more features, more volume, tier upgrade, new use case (AP → order management / AR), or the cross-entity referral — Walt belongs to DoorDash, so the Walt AM works the door into DoorDash. The platform itself adds three more concrete levers since the screens: e-invoicing compliance (Belgium, Poland, and France all have mandates landing on AP teams, and Rossum processes e-invoices and PDFs side by side — a genuine forcing function, not a sales angle); adjacent solution lines beyond AP (Customs Clearance, Order Management, Quality Assurance — each a real Rossum product, not a hypothetical use case); and early payment discount capture, which Rossum calculates and prioritises automatically and which gives an expansion conversation a number CFOs actually move on.',
      },
      {
        name: 'Best practice + method',
        content:
          'Separate observed signals from constructed thesis. Usage data tells you who\'s near a volume ceiling or running a new document type (observed); the expansion thesis is built from Rossum\'s actual levers mapped onto that account\'s business (constructed). Lead expansion conversations from realised value in the QBR, never as a cold upsell — and guard against oversell, which manufactures the next renewal\'s escalation. The AP Automation Maturity Quiz Rossum publishes is a legitimate, low-friction way to open that conversation: benchmark the account against peers, let the gap make the case.',
      },
      {
        name: 'Resource',
        content: '',
        resource: {
          title: 'Bessemer — land-and-expand / NRR economics.',
          method:
            "Take the framing that expansion is engineered into the account plan from day one, not bolted on near renewal. Map each top-quartile account's expansion path up front; let the QBR surface it.",
        },
      },
    ],
  },
  {
    id: 'c-escalation',
    number: '2.4',
    title: 'Escalation & support-tier politics',
    layers: [
      {
        name: 'The competency',
        content:
          'Hold the line emotionally when a client is hot and the fix is slow or impossible — and navigate the tier reality where some accounts simply have no fix path through me.',
      },
      {
        name: 'How Rossum runs it',
        content:
          "Tiering decides everything: premier accounts have a TSA (\"the commercial AM's best friend\"); mid have a premier success plan; many have no package — reactive support only, and support never gets on a call. Underneath that, the product has its own vocabulary for what's actually wrong: a field the AI is uncertain about sits below its confidence threshold and shows unchecked (grey) until a human validates it (green); a field already human-validated and still wrong is a model-accuracy issue, not a configuration one — and that distinction is exactly what separates a real Sev-1 from a loud Sev-3 in Kiki's framing. When a no-package client escalates, I either broker an internal favour or honestly say it's a support-team matter. Kiki wants someone who won't sound every alarm for a 30–50k Sev-3, and who can tell P1 from a loud Sev-3.",
      },
      {
        name: 'Best practice + method',
        content:
          'Run a de-escalation sequence, then convert. Acknowledge the impact (not the severity-inflation), restate what\'s true, separate "I\'ll help" from "I\'ll fix" when no fix exists. Once the client is calm and helped, the support-package conversation becomes a value offer, not a deflection — the free TSA consult that demonstrates the package\'s worth.',
      },
      {
        name: 'Resource',
        content: '',
        resource: {
          title: 'SuccessCOACHING — the de-escalation sequence (acknowledge → align → act).',
          method:
            'Use the acknowledge-before-solve ordering so a hot finance-team client feels heard before I manage expectations. Then bridge to the tier conversation only once temperature has dropped.',
        },
      },
    ],
  },
  {
    id: 'c-reviews',
    number: '2.5',
    title: 'Business reviews',
    layers: [
      {
        name: 'The competency',
        content:
          'Run the QBR rhythm the JD wants established by month six — the single forum where renewal, expansion, and advocacy all get done at once.',
      },
      {
        name: 'How Rossum runs it',
        content:
          'The JD makes "quarterly review rhythm with all customers" a 6-month success criterion. With no CSM layer, the AM owns the review end to end. For the commercial book the realistic shape is tiered: true QBRs for the top quartile, lighter value check-ins for the mid, async value summaries for the tail.',
      },
      {
        name: 'Best practice + method',
        content:
          "Make the review a value-realisation instrument, not a status update. Lead with the customer's own metrics — touchless/straight-through-processing rate, exception rate, document turnaround time, GL/tax-coding accuracy, and (where relevant) early payment discounts captured — against where they were at onboarding. The AP Automation Maturity Quiz is a ready-made benchmark to frame the conversation against peers rather than just their own history. The review is where you bank renewal confidence and open expansion in the same hour, because both are framed by demonstrated ROI.",
      },
      {
        name: 'Resource',
        content: '',
        resource: {
          title: 'TSIA — outcome-based / value-realisation reviews.',
          method:
            "Structure the QBR around the customer's business outcomes and adoption metrics rather than a feature recap. Tier the cadence so the rhythm is sustainable across 100 accounts.",
        },
      },
    ],
  },
  {
    id: 'c-stakeholder',
    number: '2.6',
    title: 'Stakeholder management',
    layers: [
      {
        name: 'The competency',
        content:
          "Connect the dots across a long internal cast — support, TSA, AITS, research, finance, legal — and across the customer's own teams, with no dedicated CSM to absorb the coordination.",
      },
      {
        name: 'How Rossum runs it',
        content:
          'Kiki\'s word for the role was "connecting the dots." Internally the AM works support, the TSA, AITS (engine maintenance), the research team (bug fixes), finance (chasing non-payers), and legal (paperwork review). Kiki herself helps with internal politics — her title carries weight mine won\'t — but only when something\'s genuinely stuck. Customer-side, even commercial accounts span finance, AP, and IT.',
      },
      {
        name: 'Best practice + method',
        content:
          "Build a stakeholder map per top account and a standing internal-routing habit. Know which lever each internal team is, and spend Kiki's escalation capital sparingly — bring her a stuck dot with the context pre-assembled, not a vague problem. On the customer side, find the economic buyer early; the AP user who loves the product rarely signs the renewal — and on the IT side, the real stakeholder is whoever owns the downstream ERP (SAP, NetSuite, Workday, Microsoft Dynamics, or Coupa itself), since Rossum's value is partly measured by how cleanly it writes into that system.",
      },
      {
        name: 'Resource',
        content: '',
        resource: {
          title: 'Miller Heiman — stakeholder / buyer-role mapping.',
          method:
            'Map each account\'s economic buyer, user, and coach. Especially for renewals and expansion, make sure the relationship reaches the person who controls budget, not just the daily user.',
        },
      },
    ],
  },
  {
    id: 'c-advocacy',
    number: '2.7',
    title: 'Advocacy & product feedback',
    layers: [
      {
        name: 'The competency',
        content:
          "Close the loop the JD names at 12 months — feed real customer signal back into Product, and be the customer's advocate internally without becoming their unpaid support line.",
      },
      {
        name: 'How Rossum runs it',
        content:
          "The JD's 12-month criterion is acting as customer advocate and feeding product insight back. Rossum's reality gives this teeth: research-queue bugs that may or may not ship, releases that silently break a customer's setup. The AM is the human who sees the pattern across the book — which is exactly the signal Product can't see from a single ticket.",
      },
      {
        name: 'Best practice + method',
        content:
          'Aggregate, don\'t relay. One client\'s bug is a ticket; the same automation-blocker across six accounts is a product priority with ARR attached. Bring Product the pattern and the revenue at risk, not the anecdote. This is also how an AM earns internal credibility — and quiet leverage when a research-queue fix needs to jump the line for a renewal. Rossum\'s own architecture rewards this: Queue-level Extraction Schemas and Extensions are customer-specific configuration, not core product, so the right escalation path for a repeated request is often "let\'s configure this for you now" rather than waiting on a release. And Rossum\'s newer AI Agents explicitly improve their reasoning from operator debriefs after each run — which means structured feedback from the field is now a documented input to the model, not just a wishlist item.',
      },
      {
        name: 'Resource',
        content: '',
        resource: {
          title: 'Pendo / product-feedback-loop practice.',
          method:
            'Take the discipline of tagging recurring feedback so individual tickets roll up into a quantified, ARR-weighted theme. Bring themes, not anecdotes, to the product conversation.',
        },
      },
    ],
  },
]
