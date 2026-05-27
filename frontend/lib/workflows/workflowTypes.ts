export interface WorkflowNodeData {
  label?: string;

  executionStatus?:
    | "idle"
    | "queued"
    | "running"
    | "success"
    | "error";
}