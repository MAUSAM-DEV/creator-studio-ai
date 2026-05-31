import {
  createExecutionContext,
} from "./executionContext";

import {
  buildExecutionPlan,
} from "./workflowExecutor";

import {
  executePromptNode,
} from "./handlers/promptHandler";

import {
  executeImageNode,
} from "./handlers/imageHandler";

import {
  executeVideoNode,
} from "./handlers/videoHandler";

import {
  executeVoiceNode,
} from "./handlers/voiceHandler";

export class WorkflowService {
  async executeWorkflow(workflow: any) {
    console.log("WORKFLOW SERVICE EXECUTING");

    const context = createExecutionContext();
    const executionPlan = buildExecutionPlan(workflow);

    for (const step of executionPlan) {
      const node = workflow.nodes.find(
        (n: any) => n.id === step.nodeId
      );

      if (!node) continue;

      const executionNode = context.execution.nodes.find(
        (n) => n.nodeId === node.id
      );

      try {
        if (!executionNode) {
          context.execution.nodes.push({
            nodeId: node.id,
            status: "running",
            startedAt: Date.now(),
          });
        } else {
          executionNode.status = "running";
          executionNode.startedAt = Date.now();
        }

        switch (node.type) {
          case "prompt":
            await executePromptNode(node, context);
            break;

          case "imageNode":
            await executeImageNode(node, context);
            break;

          case "videoNode":
            await executeVideoNode(node, context);
            break;

          case "voiceNode":
            await executeVoiceNode(node, context);
            break;

          default:
            console.warn("No handler registered:", node.type);
        }

        const completedNode = context.execution.nodes.find(
          (n) => n.nodeId === node.id
        );

        if (completedNode) {
          completedNode.status = "completed";
          completedNode.completedAt = Date.now();
        }
      } catch (error: any) {
        const failedNode = context.execution.nodes.find(
          (n) => n.nodeId === node.id
        );

        if (failedNode) {
          failedNode.status = "failed";
          failedNode.error = error?.message || "Unknown error";
          failedNode.completedAt = Date.now();
        }

        context.execution.status = "failed";
        context.execution.completedAt = Date.now();
        throw error;
      }
    }

    context.execution.status = "completed";
    context.execution.completedAt = Date.now();

    console.log("WORKFLOW EXECUTION COMPLETE");
    console.log(context);

    return context;
  }
}