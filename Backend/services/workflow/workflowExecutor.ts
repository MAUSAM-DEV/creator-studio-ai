export interface ExecutionStep {
  nodeId: string;
}

export function buildExecutionPlan(
  workflow: any
): ExecutionStep[] {
  return workflow.nodes.map((node: any) => ({
    nodeId: node.id,
  }));
}