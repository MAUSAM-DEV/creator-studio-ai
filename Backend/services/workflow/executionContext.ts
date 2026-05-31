import {
  WorkflowExecutionState,
  createWorkflowExecutionState,
} from "./workflowExecutionState";

export interface ExecutionContext {
  prompt?: string;

  metadata: Record<string, any>;

  execution:
    WorkflowExecutionState;
}

export function createExecutionContext(): ExecutionContext {
  return {
    prompt: "",

    metadata: {},

    execution:
      createWorkflowExecutionState(),
  };
}