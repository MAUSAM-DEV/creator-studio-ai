"use client";

import { DragEvent } from "react";

const nodeTypes = [
  "Prompt",
  "Image",
  "Video",
];

interface WorkflowSidebarProps {
  setSelectedNodeType: (
    nodeType: string | null
  ) => void;
}

export default function WorkflowSidebar({
  setSelectedNodeType,
}: WorkflowSidebarProps) {
  const onDragStart = (
    event: DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData(
      "application/reactflow",
      nodeType
    );

    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-72 border-r border-zinc-800 bg-zinc-950 p-4">
      <h2 className="mb-4 text-sm font-semibold text-zinc-300">
        Workflow Nodes
      </h2>

      <div className="space-y-2">
        {nodeTypes.map((node) => (
          <div
            key={node}
            draggable
            onClick={() => setSelectedNodeType(node)}
            onDragStart={(event) =>
              onDragStart(event, node)
            }
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 cursor-grab active:cursor-grabbing"
          >
            {node} Node
          </div>
        ))}
      </div>
    </div>
  );
}