/**
 * Install commands — spec sections 9 and 16.
 *
 * TODO: All commands below are PLACEHOLDER.
 * Resolve before launch — see spec section 26 Pre-Build Checklist:
 *   - Go install command confirmed
 *   - Docker image name and registry confirmed
 *
 * These values must NOT appear as literals in the rendered HTML.
 * Replace [INSTALL_COMMAND] and [DOCKER_IMAGE] with confirmed values.
 */

export interface InstallTab {
  label: string;
  code: string;
  language: string;
}

// TODO: Replace [INSTALL_COMMAND] with confirmed install command
// Example candidate: go install github.com/cyoda-io/cyodalight@latest
const INSTALL_COMMAND = '[INSTALL_COMMAND]'; // TODO: confirm

// TODO: Replace [DOCKER_IMAGE] with confirmed Docker image name and registry
const DOCKER_IMAGE = '[DOCKER_IMAGE]'; // TODO: confirm

export const installTabs: InstallTab[] = [
  {
    label: 'In-Memory',
    language: 'bash',
    code: `${INSTALL_COMMAND} start --mode=memory

# Starts at http://localhost:8080
# gRPC available at localhost:9090`,
  },
  {
    label: 'PostgreSQL',
    language: 'bash',
    code: `${INSTALL_COMMAND} start --mode=postgres \\
  --postgres-url=postgres://localhost:5432/cyoda`,
  },
  {
    label: 'Docker',
    language: 'bash',
    code: `docker run -p 8080:8080 \\
  ${DOCKER_IMAGE}:latest --mode=memory`,
  },
];

// Shortest single command for the Final CTA section
// TODO: Replace with confirmed shortest install + start command
export const shortestInstallCommand = `${INSTALL_COMMAND} start --mode=memory`;
