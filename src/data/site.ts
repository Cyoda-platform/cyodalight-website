/**
 * Site-wide configuration.
 * TODO: Resolve all PLACEHOLDER values before launch.
 * See: docs/cyodalight-website-spec-final.md — Section 26 Pre-Build Checklist
 */

// TODO: Confirm domain — options: cyodalight.io / light.cyoda.com / cyoda.com/light
export const DOMAIN_PLACEHOLDER = 'DOMAIN_PLACEHOLDER';

// Injected at build time via CYODALIGHT_VERSION environment variable.
// Falls back to placeholder if not set.
export const version =
  import.meta.env.CYODALIGHT_VERSION ?? '[VERSION_PLACEHOLDER]';

export const site = {
  name: 'CyodaLight',
  tagline: 'Run workflow-driven backend applications locally.',
  url: `https://${DOMAIN_PLACEHOLDER}`, // TODO: update with confirmed domain
  description:
    'CyodaLight is a free, open source Go runtime for the Cyoda entity workflow platform. In-memory or PostgreSQL mode. No cluster required. Java, Python, Go, and Kotlin via gRPC.',

  // External links — all confirmed in spec
  github: 'https://github.com/Cyoda-platform/cyoda-light-go',
  githubReleases: 'https://github.com/Cyoda-platform/cyoda-light-go/releases',
  docs: 'https://docs.cyoda.net',
  docsQuickstart: 'https://docs.cyoda.net/cyodalight/quickstart',
  docsApi: 'https://docs.cyoda.net/cyodalight/api',
  docsEntities: 'https://docs.cyoda.net/cyodalight/entities',
  docsConfig: 'https://docs.cyoda.net/cyodalight/config',
  docsExamples: 'https://docs.cyoda.net/cyodalight/examples',
  cyoda: 'https://cyoda.com',

  // Open Graph
  ogImage: '/og-card.png', // TODO: produce 1200x630 PNG per spec section 22
  ogImageWidth: 1200,
  ogImageHeight: 630,

  // Meta
  title: 'CyodaLight — Run Cyoda Workflows Locally | Open Source',
  ogTitle: 'CyodaLight — Run Cyoda Workflows Locally',
  ogDescription:
    'Free, open source local runtime for the Cyoda entity workflow platform. Starts in under 2 seconds. In-memory or PostgreSQL mode.',
  twitterDescription:
    'Open source Go runtime for Cyoda entity workflows. In-memory or PostgreSQL. Java, Python, Go, Kotlin via gRPC.',

  // Legal
  // TODO: confirm copyright holder name
  copyrightHolder: 'Cyoda Ltd',
  copyrightYear: 2026,
  licenseUrl: 'https://www.apache.org/licenses/LICENSE-2.0',
} as const;
