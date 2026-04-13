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
    question: 'What is CyodaLight?',
    answer:
      'CyodaLight is an open-source entity database management system (EDBMS) and workflow runtime. You define your entity types, the valid states each entity can be in, and the transition rules between states. CyodaLight enforces those rules, records every state change, and lets you query the history of any entity at any point in time. It runs as a single binary with no distributed cluster required.',
  },
  {
    question: 'What is an EDBMS?',
    answer:
      'An entity database management system (EDBMS) is a runtime that manages the full lifecycle of typed, stateful business objects — entities. Where a standard database stores rows, an EDBMS tracks state transitions, enforces lifecycle rules, and maintains a temporal audit trail. CyodaLight adds a workflow engine to this model: transition rules are explicit, invalid transitions are rejected at the API boundary, and the complete state history is queryable.',
  },
  {
    question: 'Is it free and open source?',
    answer:
      'Yes. CyodaLight is released under the Apache 2.0 License. There are no usage limits, no telemetry, and no account required to run it.',
  },
  {
    question: 'What is the difference between in-memory and PostgreSQL mode?',
    answer:
      'In-memory mode stores entity state in process memory. It has zero external dependencies and resets when the process stops — useful for development and fast test cycles. PostgreSQL mode stores entity state durably in a PostgreSQL database, persisting across restarts. Use PostgreSQL mode for integration testing or when you need state to survive a process restart.',
  },
  {
    question: 'Who is CyodaLight for?',
    answer:
      'Backend developers building stateful, event-driven, or workflow-driven systems who need a local runtime that enforces business rules and tracks state history. Teams replacing hand-rolled state machines and audit log tables. Developers who want a clean EDBMS API with no cloud dependency for local development and testing.',
  },
  {
    question: 'What languages are supported?',
    answer:
      'Java, Python, Go, and Kotlin via gRPC client libraries. Any language with a gRPC implementation can connect to the CyodaLight API directly.',
  },
  {
    question: 'Can I deploy to production with the same code?',
    answer:
      'Yes. CyodaLight exposes the same gRPC API as Cyoda Cloud — the managed, distributed production option built by the Cyoda team. Applications developed against CyodaLight run against Cyoda Cloud without API changes. Point the client at a different host; nothing else changes.',
  },
  {
    question: 'Where is the documentation?',
    answer:
      'Full documentation is at docs.cyoda.net. The CyodaLight quickstart guide covers installation, entity definition, and your first workflow in under ten minutes.',
  },
];
