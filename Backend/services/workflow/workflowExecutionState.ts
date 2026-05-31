export type WorkflowNodeStatus =
  | "idle"
  | "running"
  | "completed"
  | "failed";

export interface WorkflowExecutionNodeState {
  nodeId: string;

  status: WorkflowNodeStatus;

  startedAt?: number;

  completedAt?: number;

  error?: string;
}

export interface WorkflowExecutionState {
  workflowId?: string;

  startedAt: number;

  completedAt?: number;

  status:
    | "running"
    | "completed"
    | "failed";

  nodes: WorkflowExecutionNodeState[];
}

export function createWorkflowExecutionState() {
  return {
    startedAt: Date.now(),

    status: "running",

    nodes: [],
  } as WorkflowExecutionState;
}