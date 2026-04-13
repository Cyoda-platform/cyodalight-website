/**
 * Key capabilities grid — spec section 13.
 * 8 cards, data-driven. Edit here without touching layout code.
 */

export interface Feature {
  iconId: string; // references an inline SVG symbol id
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    iconId: 'icon-memory',
    title: 'In-memory mode',
    description:
      'Zero dependencies. Starts in under 2 seconds. Resets cleanly between runs.',
  },
  {
    iconId: 'icon-postgres',
    title: 'PostgreSQL mode',
    description:
      'Durable, transactional entity storage for local integration testing.',
  },
  {
    iconId: 'icon-workflow',
    title: 'Full workflow engine',
    description:
      'Finite state machine with explicit transition rules, identical to Cyoda Cloud.',
  },
  {
    iconId: 'icon-grpc',
    title: 'gRPC API',
    description:
      'Same API surface as production Cyoda. One config change to switch targets.',
  },
  {
    iconId: 'icon-history',
    title: 'Entity lifecycle',
    description:
      'Immutable state history, auditable transitions, queryable at any point in time.',
  },
  {
    iconId: 'icon-languages',
    title: 'Language-agnostic',
    description:
      'Client libraries for Java, Python, Go, and Kotlin. Any gRPC-capable language works.',
  },
  {
    iconId: 'icon-test',
    title: 'Test harness',
    description:
      'Reset entity state between tests via a single API call. No teardown scripts needed.',
  },
  {
    iconId: 'icon-deploy',
    title: 'Path to production',
    description:
      'Applications built on CyodaLight deploy to Cyoda Cloud without API changes.',
  },
];
