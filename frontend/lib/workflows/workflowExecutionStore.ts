import {
  WorkflowNodeExecutionState,
} from "./workflowExecutionTypes";

const executionState =
  new Map<string, WorkflowNodeExecutionState>();

export function setNodeExecutionState(
  nodeId: string,
  state: WorkflowNodeExecutionState
) {
  executionState.set(nodeId, state);
}

export function getNodeExecutionState(
  nodeId: string
) {
  return executionState.get(nodeId);
}

export function clearExecutionStates() {
  executionState.clear();
}