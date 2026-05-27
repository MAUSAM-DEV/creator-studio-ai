import {
  setNodeExecutionState,
} from "./workflowExecutionStore";

function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export async function runWorkflow(
  nodes: any[],
  setNodes: any
) {
  for (const node of nodes) {
    setNodeExecutionState(node.id, {
      nodeId: node.id,
      status: "running",
      startedAt: Date.now(),
    });

    setNodes((currentNodes: any[]) =>
      currentNodes.map((currentNode) =>
        currentNode.id === node.id
          ? {
              ...currentNode,
              data: {
                ...currentNode.data,
                executionStatus: "running",
              },
            }
          : currentNode
      )
    );

    await sleep(2000);

    setNodeExecutionState(node.id, {
      nodeId: node.id,
      status: "success",
      completedAt: Date.now(),
    });

    setNodes((currentNodes: any[]) =>
      currentNodes.map((currentNode) =>
        currentNode.id === node.id
          ? {
              ...currentNode,
              data: {
                ...currentNode.data,
                executionStatus: "success",
              },
            }
          : currentNode
      )
    );
  }
}