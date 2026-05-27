import { WorkflowState } from "./workflowState";

export interface ExecutionStep {
  step: number;
  nodeId: string;
  nodeType: string;
}

export function buildExecutionPlan(
  workflow: WorkflowState
): ExecutionStep[] {
  const plan: ExecutionStep[] = [];

  workflow.nodes.forEach((node, index) => {
    plan.push({
      step: index + 1,
      nodeId: node.id,
      nodeType: node.type,
    });
  });

  return plan;
}