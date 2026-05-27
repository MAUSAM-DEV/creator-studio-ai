export type WorkflowExecutionStatus =
  | "idle"
  | "queued"
  | "running"
  | "success"
  | "error";

export interface WorkflowNodeExecutionState {
  nodeId: string;

  status: WorkflowExecutionStatus;

  startedAt?: number;

  completedAt?: number;

  error?: string;
}