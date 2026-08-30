export type NoteSection = {
  number: string;
  title: string;
  copy: string;
  points: string[];
};

export type FieldNote = {
  slug: string;
  number: string;
  area: string;
  title: string;
  summary: string;
  status: 'Featured' | 'Framework' | 'Essay' | 'Note';
  readingTime: string;
  updated: string;
  thesis: string;
  sections: NoteSection[];
  takeaway: string;
};

export const notes: FieldNote[] = [
  {
    slug: 'multi-system-go-live',
    number: '01',
    area: 'SYSTEM INTEGRATION',
    title: 'How to de-risk a multi-system go-live',
    summary:
      'Five checkpoints for aligning interfaces, ownership, testing, recovery, and operational readiness.',
    status: 'Featured',
    readingTime: '6 min',
    updated: 'August 2026',
    thesis:
      'Readiness is not a software status. It is the quality of the agreements between interfaces, teams, decisions, operations, and recovery paths.',
    sections: [
      {
        number: 'I',
        title: 'Name the owner',
        copy: 'Every critical decision, interface, and operational exception needs one accountable owner with the authority to act.',
        points: [
          'One owner for every critical interface',
          'A decision path for unresolved exceptions',
          'Explicit stop and proceed authority',
        ],
      },
      {
        number: 'II',
        title: 'Contract the interfaces',
        copy: 'Treat data, timing, permissions, errors, retries, and fallback behavior as explicit agreements between teams.',
        points: [
          'Contract tests for data and timing',
          'Named owners on both sides of every handoff',
          'Agreed behavior for incomplete or late inputs',
        ],
      },
      {
        number: 'III',
        title: 'Test the failure modes',
        copy: 'A happy-path demonstration cannot prove that the system is ready for real operations or unexpected conditions.',
        points: [
          'Failure-mode rehearsals across teams',
          'Evidence that operations can detect the issue',
          'Known thresholds for stopping or escalating',
        ],
      },
      {
        number: 'IV',
        title: 'Rehearse the operation',
        copy: 'People, procedures, permissions, monitoring, and support must work together before the launch becomes routine.',
        points: [
          'Production roles and permissions verified',
          'Support and escalation paths rehearsed',
          'Operational evidence visible to decision-makers',
        ],
      },
      {
        number: 'V',
        title: 'Design the path back',
        copy: 'Define stop conditions, rollback choices, evidence, and the coordinated path back to a stable service.',
        points: [
          'Pre-agreed stop conditions',
          'A recovery sequence with accountable roles',
          'Post-recovery reconciliation and evidence',
        ],
      },
    ],
    takeaway:
      'A go-live review should produce operating confidence, not a collection of green status boxes.',
  },
  {
    slug: 'cross-team-delivery',
    number: '02',
    area: 'PROGRAM DELIVERY',
    title: 'The operating model behind cross-team delivery',
    summary:
      'A practical rhythm for dependencies, decisions, owners, and escalation.',
    status: 'Note',
    readingTime: '5 min',
    updated: 'August 2026',
    thesis:
      'Cross-team delivery improves when coordination is treated as a designed operating system rather than a recurring meeting.',
    sections: [
      {
        number: 'I',
        title: 'Separate status from decisions',
        copy: 'Status can be read asynchronously. Shared time is more valuable when it is reserved for choices, trade-offs, dependency changes, and exceptions that need authority.',
        points: [
          'Publish concise progress before the meeting',
          'Bring decision-ready options, not open-ended updates',
          'Record the owner and consequence of each choice',
        ],
      },
      {
        number: 'II',
        title: 'Manage dependencies as promises',
        copy: 'A dependency is useful only when the expected outcome, receiving team, timing, acceptance condition, and failure response are understood by both sides.',
        points: [
          'Define the receiver and acceptance condition',
          'Expose confidence, not only due dates',
          'Escalate changes before they become surprises',
        ],
      },
      {
        number: 'III',
        title: 'Create an escalation ladder',
        copy: 'Escalation should be a normal control mechanism. Teams need to know which problems they own, which require a program decision, and which change the business commitment.',
        points: [
          'Team-level resolution window',
          'Program-level trade-off authority',
          'Leadership decisions with clear consequences',
        ],
      },
    ],
    takeaway:
      'The goal is not more coordination. It is fewer ambiguous handoffs and faster, better decisions.',
  },
  {
    slug: 'enterprise-rag-readiness',
    number: '03',
    area: 'AI ADOPTION',
    title: 'When an enterprise is actually ready for RAG',
    summary:
      'Begin with the decision, source quality, evaluation method, and a real owner—not the model.',
    status: 'Note',
    readingTime: '7 min',
    updated: 'August 2026',
    thesis:
      'A retrieval system is ready when the organization can define what a useful answer is, prove where it came from, and respond when it is wrong.',
    sections: [
      {
        number: 'I',
        title: 'Start with the decision',
        copy: '“Search our knowledge” is too broad. A useful scope begins with a real user, a recurring question, the decision that follows, and the cost of an incorrect answer.',
        points: [
          'One user group and one recurring decision',
          'A clear boundary for unsupported questions',
          'A defined human review point',
        ],
      },
      {
        number: 'II',
        title: 'Treat the corpus as a product',
        copy: 'Retrieval quality cannot exceed source quality. Ownership, freshness, access rights, conflicting documents, and deletion all need operating rules before scale.',
        points: [
          'Document owners and freshness expectations',
          'Permission-aware retrieval',
          'A process for conflicts and superseded content',
        ],
      },
      {
        number: 'III',
        title: 'Evaluate behavior, not demos',
        copy: 'A polished demonstration says little about reliability. Evaluation needs representative questions, citation checks, refusal behavior, and a feedback loop tied to real usage.',
        points: [
          'A stable set of representative questions',
          'Evidence and citation quality checks',
          'Named ownership for review and improvement',
        ],
      },
    ],
    takeaway:
      'Model selection matters, but organizational readiness usually fails first at scope, evidence, and ownership.',
  },
  {
    slug: 'data-governance-operating-model',
    number: '04',
    area: 'DATA GOVERNANCE',
    title: 'A practical data governance operating model',
    summary:
      'Connect domain ownership, standards, quality, access, and feedback into one loop.',
    status: 'Framework',
    readingTime: '6 min',
    updated: 'August 2026',
    thesis:
      'Governance becomes useful when it helps a domain make faster, safer decisions about data—not when it produces more policy documents.',
    sections: [
      {
        number: 'I',
        title: 'Put ownership close to meaning',
        copy: 'Central teams can provide standards and tooling, but the people closest to a domain are best placed to define meaning, acceptable quality, and business consequences.',
        points: [
          'Domain owners define meaning and criticality',
          'Platform teams provide common controls',
          'Decision rights are documented and discoverable',
        ],
      },
      {
        number: 'II',
        title: 'Prioritize consequential data',
        copy: 'Not every field deserves the same control. Start with data that drives customer outcomes, regulatory obligations, financial reporting, or operational decisions.',
        points: [
          'Identify critical data elements',
          'Define measurable quality expectations',
          'Link each control to a real consequence',
        ],
      },
      {
        number: 'III',
        title: 'Close the feedback loop',
        copy: 'Governance should learn from incidents, exceptions, access requests, and user feedback. A control that never changes is probably disconnected from operations.',
        points: [
          'Track recurring exceptions and root causes',
          'Review whether controls reduce decision risk',
          'Retire requirements that no longer add value',
        ],
      },
    ],
    takeaway:
      'The smallest useful governance model connects ownership, standards, evidence, exceptions, and improvement.',
  },
  {
    slug: 'dashboards-to-decisions',
    number: '05',
    area: 'DECISION SUPPORT',
    title: 'From dashboards to decisions',
    summary:
      'Design signals, thresholds, human review, and response actions as one operating system.',
    status: 'Essay',
    readingTime: '5 min',
    updated: 'August 2026',
    thesis:
      'A dashboard creates value only when a signal reaches the right person, changes a decision, and leads to a visible response.',
    sections: [
      {
        number: 'I',
        title: 'Begin with the decision',
        copy: 'Instead of asking which metrics are available, ask which recurring decision needs better evidence and what uncertainty prevents a confident choice today.',
        points: [
          'Name the decision and its owner',
          'Define the decision frequency',
          'Identify the uncertainty the signal should reduce',
        ],
      },
      {
        number: 'II',
        title: 'Make thresholds actionable',
        copy: 'A visual change is not an action. Each meaningful threshold needs an interpretation, a responsible role, a response window, and a known set of options.',
        points: [
          'Threshold linked to business meaning',
          'Owner and response time',
          'Escalation when evidence remains ambiguous',
        ],
      },
      {
        number: 'III',
        title: 'Learn from the response',
        copy: 'Record what people decided and what happened next. Without that loop, teams optimize the dashboard while remaining unable to tell whether decisions improved.',
        points: [
          'Capture the decision and rationale',
          'Compare the expected and actual outcome',
          'Adjust signals and thresholds over time',
        ],
      },
    ],
    takeaway:
      'The product is not the dashboard. The product is a repeatable path from evidence to action and learning.',
  },
  {
    slug: 'vendor-system-ownership',
    number: '06',
    area: 'VENDOR MANAGEMENT',
    title: 'Keep system ownership while working with vendors',
    summary:
      'Retain architecture authority, acceptance evidence, knowledge transfer, and recovery options.',
    status: 'Note',
    readingTime: '6 min',
    updated: 'August 2026',
    thesis:
      'External delivery capacity should extend an organization’s capability without transferring away its ability to decide, verify, operate, and recover.',
    sections: [
      {
        number: 'I',
        title: 'Retain decision authority',
        copy: 'A vendor can propose architecture and implementation choices, but the organization still needs enough internal capability to understand trade-offs and own consequential decisions.',
        points: [
          'Internal ownership of architecture principles',
          'Documented acceptance and exception authority',
          'Traceable decisions and trade-offs',
        ],
      },
      {
        number: 'II',
        title: 'Accept evidence, not activity',
        copy: 'Progress reports and demonstrations are useful, but acceptance should depend on agreed evidence: tests, operational readiness, documentation, security, and recoverability.',
        points: [
          'Outcome-based acceptance criteria',
          'Independent access to delivery evidence',
          'Operational and recovery validation',
        ],
      },
      {
        number: 'III',
        title: 'Design for continuity',
        copy: 'Knowledge transfer is not a final workshop. It should happen throughout delivery through paired decisions, shared artifacts, access to environments, and internal operational practice.',
        points: [
          'Shared working artifacts from the beginning',
          'Internal participation in critical decisions',
          'A credible transition or replacement path',
        ],
      },
    ],
    takeaway:
      'The organization should be able to explain, operate, verify, and change the system even when the delivery partner is absent.',
  },
];

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}

export function getNextNote(slug: string) {
  const index = notes.findIndex((note) => note.slug === slug);
  return notes[(index + 1) % notes.length];
}
