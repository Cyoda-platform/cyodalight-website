/**
 * Current local developer quickstart.
 *
 * Mirrors the canonical docs on docs.cyoda.net without duplicating the full
 * explanation, schema reference, or deployment guidance.
 */

export interface InstallTab {
  label: string;
  code: string;
  language: string;
}

export const installTabs: InstallTab[] = [
  {
    label: 'Install',
    language: 'bash',
    code: `# macOS / Linux via Homebrew
brew install cyoda-platform/cyoda-go/cyoda

# If your installer did not initialise local storage:
cyoda init`,
  },
  {
    label: 'Run',
    language: 'bash',
    code: `cyoda

# HTTP API: http://localhost:8080
# Local default auth is mock auth; no bearer token required.`,
  },
  {
    label: 'First entity',
    language: 'bash',
    code: `# Import the entity workflow for the orders model.
curl -X POST http://localhost:8080/api/model/orders/1/workflow/import \\
  -H 'Content-Type: application/json' \\
  -d @orders-entity-workflow.json

ENTITY_ID=$(curl -s -X POST http://localhost:8080/api/entity/JSON/orders/1 \\
  -H 'Content-Type: application/json' \\
  -d '{ "orderId": "ORD-1", "amount": 42.00, "currency": "EUR" }' \\
  | jq -r '.[0].entityIds[0]')

curl -X PUT http://localhost:8080/api/entity/JSON/$ENTITY_ID/submit
curl http://localhost:8080/api/entity/$ENTITY_ID`,
  },
];

export const localRunCommand = `brew install cyoda-platform/cyoda-go/cyoda
cyoda`;

export const firstEntityCommands = `# Import the entity workflow for the orders model.
curl -X POST http://localhost:8080/api/model/orders/1/workflow/import \\
  -H 'Content-Type: application/json' \\
  -d @orders-entity-workflow.json

ENTITY_ID=$(curl -s -X POST http://localhost:8080/api/entity/JSON/orders/1 \\
  -H 'Content-Type: application/json' \\
  -d '{ "orderId": "ORD-1", "amount": 42.00, "currency": "EUR" }' \\
  | jq -r '.[0].entityIds[0]')

curl -X PUT http://localhost:8080/api/entity/JSON/$ENTITY_ID/submit
curl http://localhost:8080/api/entity/$ENTITY_ID`;
