import { useMemo, useState } from 'react';
import { parseImportPayload } from '@cyoda/workflow-core';
import type { WorkflowEditorDocument } from '@cyoda/workflow-core';
import { WorkflowEditor } from '@cyoda/workflow-react';
import workflowJson from '../data/helloworld-workflow.json?raw';

type JsonObject = Record<string, unknown>;

export default function HelloWorldWorkflowViewer() {
  const editorWorkflowJson = useMemo(() => normalizeForEditor(workflowJson), []);
  const parsed = useMemo(() => parseImportPayload(editorWorkflowJson), [editorWorkflowJson]);
  const [document, setDocument] = useState<WorkflowEditorDocument | null>(
    () => parsed.document ?? null,
  );

  if (!document) {
    return (
      <div className="workflow-artifact__error" role="status">
        <strong>Workflow could not be rendered.</strong>
        <span>{parsed.issues?.[0]?.message ?? 'The supplied workflow JSON did not parse.'}</span>
      </div>
    );
  }

  return (
    <WorkflowEditor
      document={document}
      mode="playground"
      layoutOptions={{
        preset: 'configuratorReadable',
        orientation: 'vertical',
        nodeSize: { width: 172, height: 86 },
      }}
      onChange={setDocument}
    />
  );
}

function normalizeForEditor(raw: string): string {
  const payload = JSON.parse(raw) as JsonObject;
  const workflows = Array.isArray(payload.workflows) ? payload.workflows : [];

  for (const workflow of workflows) {
    if (!isObject(workflow) || !isObject(workflow.states)) continue;

    for (const state of Object.values(workflow.states)) {
      if (!isObject(state) || !Array.isArray(state.transitions)) continue;

      for (const transition of state.transitions) {
        if (!isObject(transition)) continue;

        transition.disabled ??= false;

        if (Array.isArray(transition.processors)) {
          for (const processor of transition.processors) {
            if (isObject(processor)) {
              processor.type ??= 'externalized';
            }
          }
        }
      }
    }
  }

  return JSON.stringify(payload);
}

function isObject(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
