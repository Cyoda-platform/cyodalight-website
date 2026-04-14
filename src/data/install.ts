/**
 * Install commands — spec sections 9 and 16.
 *
 * Commands shown are based on the GitHub repository at:
 *   https://github.com/Cyoda-platform/cyoda-light-go
 *
 * Verify exact binary name and Docker image before launch.
 * Latest releases: https://github.com/Cyoda-platform/cyoda-light-go/releases
 */

export interface InstallTab {
  label: string;
  code: string;
  language: string;
}

export const installTabs: InstallTab[] = [
  {
    label: 'In-Memory',
    language: 'bash',
    code: `# Download from GitHub Releases:
# github.com/Cyoda-platform/cyoda-light-go/releases

cyoda start --mode=memory

# HTTP API:  http://localhost:8080
# gRPC:      localhost:9090`,
  },
  {
    label: 'PostgreSQL',
    language: 'bash',
    code: `cyoda start --mode=postgres \\
  --postgres-url=postgres://localhost:5432/cyoda`,
  },
  {
    label: 'Docker',
    language: 'bash',
    code: `docker run -p 8080:8080 -p 9090:9090 \\
  ghcr.io/cyoda-platform/cyoda:latest \\
  --mode=memory`,
  },
];

// Shortest single command for the Final CTA section
export const shortestInstallCommand = `cyoda start --mode=memory`;
