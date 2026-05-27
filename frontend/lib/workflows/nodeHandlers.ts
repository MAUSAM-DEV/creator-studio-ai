import { WorkflowExecutionContext } from "./executionContext";

export interface WorkflowNodeHandler {
  execute(
    node: any,
    context: WorkflowExecutionContext
  ): Promise<void>;
}

export const nodeHandlers: Record<
  string,
  WorkflowNodeHandler
> = {};