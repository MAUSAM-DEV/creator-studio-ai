"use client";

import {
  useCallback,
} from "react";

import ReactFlow, {
  Background,
  Controls,
  addEdge,
  Connection,
  Edge,
  Node,
  OnEdgesChange,
  OnNodesChange,
  ReactFlowInstance,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";

import {
  reactFlowNodeTypes,
} from "@/lib/workflows/reactFlowNodeTypes";

interface WorkflowCanvasProps {
  nodes: Node[];

  edges: Edge[];

  onNodesChange: OnNodesChange;

  onEdgesChange: OnEdgesChange;

  setEdges: React.Dispatch<
    React.SetStateAction<Edge[]>
  >;

  setNodes?: React.Dispatch<
    React.SetStateAction<Node[]>
  >;
}

export default function WorkflowCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  setEdges,
  setNodes,
}: WorkflowCanvasProps) {
  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((eds: Edge[]) =>
        addEdge(params, eds)
      ),
    [setEdges]
  );

  const onDragOver = useCallback(
    (
      event: React.DragEvent
    ) => {
      event.preventDefault();

      event.dataTransfer.dropEffect =
        "move";
    },
    []
  );

  const onDrop = useCallback(
    (
      event: React.DragEvent
    ) => {
      event.preventDefault();

      const type =
        event.dataTransfer.getData(
          "application/reactflow"
        );

      if (!type || !setNodes) return;

      const position = {
        x: event.clientX - 250,
        y: event.clientY - 100,
      };

      const newNode: Node = {
        id: `${type}-${Date.now()}`,

        type,

        position,

        data: {},
      };

      setNodes((nds) => [
        ...nds,
        newNode,
      ]);
    },
    [setNodes]
  );

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={
          onNodesChange
        }
        onEdgesChange={
          onEdgesChange
        }
        nodeTypes={
          reactFlowNodeTypes
        }
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}