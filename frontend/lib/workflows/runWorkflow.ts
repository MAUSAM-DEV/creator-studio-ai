import {
  WorkflowService,
} from "@/../Backend/services/workflow/WorkflowService";

export async function runWorkflow(
  workflow: any,
  setNodes?: any
) {
  console.log(
    "FRONTEND WORKFLOW EXECUTION"
  );

  if (setNodes) {
    setNodes((nds: any[]) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          status: "idle",
        },
      }))
    );
  }

  const workflowService =
    new WorkflowService();

  for (const node of workflow.nodes) {
    if (setNodes) {
      setNodes((nds: any[]) =>
        nds.map((n) =>
          n.id === node.id
            ? {
                ...n,
                data: {
                  ...n.data,
                  status: "running",
                },
              }
            : n
        )
      );
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    if (setNodes) {
      setNodes((nds: any[]) =>
        nds.map((n) =>
          n.id === node.id
            ? {
                ...n,
                data: {
                  ...n.data,
                  status: "completed",
                },
              }
            : n
        )
      );
    }
  }

  const result =
    await workflowService.executeWorkflow(
      workflow
    );

  console.log(
    "WORKFLOW RESULT:",
    result
  );

  return result;
}