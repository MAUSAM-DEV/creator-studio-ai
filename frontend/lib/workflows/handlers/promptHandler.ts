import {
  WorkflowExecutionContext,
} from "../executionContext";

export async function executePromptNode(
  node: any,
  context: WorkflowExecutionContext
) {
  context.prompt =
    node?.data?.prompt || "";

  console.log(
    "Prompt Context Updated:",
    context.prompt
  );
}