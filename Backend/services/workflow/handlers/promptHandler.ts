import { ExecutionContext } from "../executionContext";

export async function executePromptNode(
  node: any,
  context: ExecutionContext
) {
  console.log(
    "PROMPT NODE EXECUTED:",
    node?.data?.prompt
  );

  context.prompt =
    node?.data?.prompt || "";
}