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
      'CyodaLight is a free, open source Go implementation of the Cyoda platform. It runs the Cyoda entity workflow engine and gRPC API locally, as a single binary, with no distributed cluster required. It supports in-memory mode for development and PostgreSQL mode for durable local testing.',
  },
  {
    question: 'Is it free and open source?',
    answer:
      'Yes. CyodaLight is released under the Apache 2.0 License. There are no usage limits, no telemetry, and no account required to run it.',
  },
  {
    question: 'What is the difference between in-memory and PostgreSQL mode?',
    answer:
      'In-memory mode stores entity state in process memory. It has zero external dependencies and resets when the process stops. PostgreSQL mode stores entity state durably in a PostgreSQL database. Use in-memory for development and fast test cycles; use PostgreSQL when you need persistence across restarts.',
  },
  {
    question: 'Who is CyodaLight for?',
    answer:
      'Backend developers building stateful, workflow-driven applications. Technical evaluators assessing Cyoda before a commercial deployment. Teams wanting to test their application logic locally before moving to Cyoda Cloud.',
  },
  {
    question: 'Can I build locally and deploy to Cyoda later?',
    answer:
      'Yes. CyodaLight exposes the same gRPC API as Cyoda Cloud. Applications built against CyodaLight run against Cyoda Cloud without API changes. Change the target host; nothing else changes.',
  },
  {
    question: 'What languages are supported?',
    answer:
      'Java, Python, Go, and Kotlin via gRPC client libraries. Any language with a gRPC implementation can connect to the API.',
  },
  {
    question: 'How does CyodaLight relate to Cyoda Cloud?',
    answer:
      'CyodaLight is the local development version of the Cyoda platform. Cyoda Cloud is the fully distributed, managed version with horizontal scalability, multi-node replication, and Cassandra-backed storage. CyodaLight is designed to be API-compatible so that local work transfers to the cloud platform directly.',
  },
  {
    question: 'Where is the documentation?',
    answer:
      'Full documentation is at docs.cyoda.net. The CyodaLight quick start guide is the recommended first stop.',
  },
];
