export interface WorkflowNodeState {
  id: string;
  type: string;
  data: Record<string, any>;
}

export interface WorkflowState {
  nodes: WorkflowNodeState[];
  edges: {
    source: string;
    target: string;
  }[];
}