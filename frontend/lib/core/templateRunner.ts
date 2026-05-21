import { runWorkflow } from "./workflowEngine";
import { WORKFLOW_TEMPLATES } from "./workflowTemplates";

export async function runTemplate(
  templateId: string
) {
  const template =
    WORKFLOW_TEMPLATES.find(
      (item) =>
        item.id === templateId
    );

  if (!template) {
    throw new Error(
      `Template not found: ${templateId}`
    );
  }

  return await runWorkflow(
    template
  );
}