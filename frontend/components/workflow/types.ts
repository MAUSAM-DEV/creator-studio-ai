export interface WorkflowNodeData {
  label: string;
  description?: string;
}

export interface WorkflowNode {
  id: string;
  type: string;

  position: {
    x: number;
    y: number;
  };

  data: WorkflowNodeData;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
}

export interface WorkflowDefinition {
  id: string;
  name: string;

  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}