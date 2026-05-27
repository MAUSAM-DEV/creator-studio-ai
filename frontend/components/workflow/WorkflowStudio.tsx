"use client";

import { runWorkflow } from "@/lib/workflows/runWorkflow";
import { useEffect, useState } from "react";
import {
  Edge,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";

import WorkflowCanvas from "./WorkflowCanvas";
import WorkflowSidebar from "./WorkflowSidebar";
import WorkflowToolbar from "./WorkflowToolbar";

const initialNodes: Node[] = [];

export default function WorkflowStudio() {
  const [selectedNodeType, setSelectedNodeType] = useState<string | null>(
    null
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
useEffect(() => {
  const savedWorkflow =
    localStorage.getItem("mausam-workflow");

  if (!savedWorkflow) return;

  try {
    const workflow = JSON.parse(savedWorkflow);

    if (workflow.nodes) {
      setNodes(workflow.nodes);
    }

    if (workflow.edges) {
      setEdges(workflow.edges);
    }
  } catch (error) {
    console.error(
      "Failed to load workflow",
      error
    );
  }
}, [setNodes, setEdges]);

  useEffect(() => {
    if (!selectedNodeType) return;

    const typeMap: Record<string, string> = {
      Prompt: "promptNode",
      Image: "imageNode",
      Video: "videoNode",
    };

    const nodeType = typeMap[selectedNodeType];
    if (!nodeType) return;

    const newNode: Node = {
      id: `${Date.now()}`,
      type: nodeType,
      position: {
        x: 250 + Math.random() * 200,
        y: 150 + Math.random() * 200,
      },
      data: {},
    };

    setNodes((nds: Node[]) => [...nds, newNode]);
    setSelectedNodeType(null);
  }, [selectedNodeType, setNodes]);

  const saveWorkflow = () => {
    const workflow = { nodes, edges };
    localStorage.setItem(
      "mausam-workflow",
      JSON.stringify(workflow)
    );
    alert("Workflow saved");
  };

  const clearWorkflow = () => {
  setNodes([]);
  setEdges([]);

  localStorage.removeItem("mausam-workflow");

  alert("Workflow cleared");
};

  const runWorkflowHandler = async () => {
  await runWorkflow(
    nodes,
    setNodes
  );
};

  const hasGenerationNode = nodes.some(
    (node) =>
      node.type === "imageNode" ||
      node.type === "videoNode"
  );

  const hasConnections = edges.length > 0;

  const hasPromptNode = nodes.some(
  (node) => node.type === "prompt"
);

  if (!hasPromptNode) {
    alert("Validation Failed: Missing Prompt Node");
    return;
  }

  if (!hasGenerationNode) {
    alert(
      "Validation Failed: Missing Image or Video Node"
    );
    return;
  }

  if (!hasConnections) {
    alert("Validation Failed: No Connections Found");
    return;
  }

  alert("Workflow Valid");

  return (
    <div className="h-[calc(100vh-140px)] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <WorkflowToolbar
        onSave={saveWorkflow}
        onClear={clearWorkflow}
        onRun={runWorkflowHandler}
      />

      <div className="flex h-screen">
        <WorkflowSidebar
          setSelectedNodeType={setSelectedNodeType}
        />

        <div className="flex-1">
          <WorkflowCanvas
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            setEdges={setEdges}
          />
        </div>
      </div>
    </div>
  );
}