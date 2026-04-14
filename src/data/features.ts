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
    iconId: 'icon-entity',
    title: 'Stateful entities',
    description:
      'Define entity types with typed fields, valid states, and transition rules. Cyoda enforces the model at runtime.',
  },
  {
    iconId: 'icon-workflow',
    title: 'Lifecycle enforcement',
    description:
      'Finite state machine engine. Invalid transitions are rejected at the API boundary — no defensive code required in your application.',
  },
  {
    iconId: 'icon-history',
    title: 'Temporal history',
    description:
      'Every state change is recorded. Query the exact state of any entity at any point in time.',
  },
  {
    iconId: 'icon-audit',
    title: 'Immutable audit trail',
    description:
      'Non-modifiable record of all transitions: what changed, from which state, to which state, and when.',
  },
  {
    iconId: 'icon-memory',
    title: 'In-memory mode',
    description:
      'Zero external dependencies. Starts in under 2 seconds. Resets cleanly between test runs.',
  },
  {
    iconId: 'icon-postgres',
    title: 'PostgreSQL mode',
    description:
      'Durable, transactional entity storage. State persists across restarts for local integration testing.',
  },
  {
    iconId: 'icon-grpc',
    title: 'gRPC API',
    description:
      'Language-agnostic API surface. Client libraries for Java, Python, Go, and Kotlin. Any gRPC-capable language works.',
  },
  {
    iconId: 'icon-test',
    title: 'Test harness',
    description:
      'Reset entity state between tests with a single API call. No teardown scripts, no manual cleanup.',
  },
];
