/**
 * FAQ items — spec section 15.
 * Used by both FAQAccordion component and JSON-LD FAQPage schema.
 * Single source of truth — edit here, both outputs update automatically.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'What is Cyoda?',
    answer:
      'Cyoda is an open-source entity database management system (EDBMS) and workflow runtime. You define your entity types — the fields they carry, the states they can be in, and the valid transitions between states. Cyoda enforces those rules at the API boundary, records every state change immutably, and lets you query the history of any entity at any point in time. It runs as a single binary with no distributed cluster required.',
  },
  {
    question: 'What is an EDBMS?',
    answer:
      'An entity database management system (EDBMS) is a runtime that manages the full lifecycle of typed, stateful business objects — entities. Where a standard database stores rows, an EDBMS tracks state transitions, enforces lifecycle rules, and maintains a temporal audit trail. Cyoda adds a workflow engine to this model: transition rules are explicit, invalid transitions are rejected at the API boundary, and the complete state history is queryable.',
  },
  {
    question: 'Why use stateful entities?',
    answer:
      'Most backend systems need to track the state of business objects over time — orders, users, requests, approvals, jobs. Without a structured model, state logic ends up scattered across application code and database columns with no enforcement and no history. Cyoda gives each entity a defined lifecycle with enforced rules. Your application code drives transitions; Cyoda ensures they are valid and records them.',
  },
  {
    question: 'What kinds of systems fit Cyoda?',
    answer:
      'Systems where entities change state over time and where the history of those changes matters: workflow automation, order management, approval pipelines, event-driven backends, audit-sensitive applications, and anywhere you would otherwise build a hand-rolled state machine with an audit log.',
  },
  {
    question: 'What does it mean to have workflow, state, events, and transactions in one model?',
    answer:
      'Most backend systems require separate tools for each: a workflow engine, a state machine library, an event bus, and a transaction manager, connected by integration code. Each connection point is a source of inconsistency, hidden state, and operational complexity. Cyoda runs these capabilities as one runtime. Entity state, lifecycle transitions, event-driven processing, and transactional consistency all operate within the same model — with no integration layer between them.',
  },
  {
    question: 'How does Cyoda improve AI-assisted development?',
    answer:
      'AI tools generate better code when the system model is explicit and structured. Because Cyoda defines entity types, valid states, and transition rules as queryable schema rather than implicit application logic, AI tools can reason about system behavior from the model rather than inferring it from scattered code. The result is more accurate code generation, more precise debugging assistance, and a lower risk of incorrect state handling in generated output.',
  },
  {
    question: 'What is the difference between in-memory and PostgreSQL mode?',
    answer:
      'In-memory mode stores entity state in process memory. It has zero external dependencies and resets when the process stops — useful for development and fast test cycles. PostgreSQL mode stores entity state durably in a PostgreSQL database, persisting across restarts. Use PostgreSQL mode for integration testing or when you need state to survive a process restart.',
  },
  {
    question: 'What is the difference between Run it yourself, Cyoda Cloud, and Enterprise Cyoda?',
    answer:
      'Run it yourself: download the open-source binary and run Cyoda on your own machine or infrastructure. Free, Apache 2.0, no account required. Cyoda Cloud: the hosted SaaS option at ai.cyoda.net — managed infrastructure, no installation required. Enterprise Cyoda: larger-scale deployment with enterprise support, SLA, and dedicated engagement for organisations with advanced operational requirements. All three options share the same core API and entity model.',
  },
  {
    question: 'What languages are supported?',
    answer:
      'Java, Python, Go, and Kotlin via gRPC client libraries. Any language with a gRPC implementation can connect to the Cyoda API directly.',
  },
  {
    question: 'Where is the GitHub repo?',
    answer:
      'The source code is at github.com/Cyoda-platform/cyoda-light-go. Issues, releases, and contributions are managed there.',
  },
  {
    question: 'Where is the documentation?',
    answer:
      'Full documentation is at docs.cyoda.net. The Cyoda quickstart guide covers installation, entity definition, and your first workflow in under ten minutes.',
  },
];
