"use client";

import { Handle, Position } from "reactflow";

interface PromptNodeProps {
  data?: {
    executionStatus?:
      | "idle"
      | "queued"
      | "running"
      | "success"
      | "error";
  };
}

export default function PromptNode({
  data,
}: PromptNodeProps) {
  const status =
    data?.executionStatus || "idle";

  const borderColor =
    status === "running"
      ? "border-blue-500"
      : status === "success"
      ? "border-green-500"
      : status === "error"
      ? "border-red-500"
      : "border-zinc-700";

  const glow =
    status === "running"
      ? "shadow-[0_0_25px_rgba(59,130,246,0.45)]"
      : status === "success"
      ? "shadow-[0_0_25px_rgba(34,197,94,0.45)]"
      : status === "error"
      ? "shadow-[0_0_25px_rgba(239,68,68,0.45)]"
      : "shadow-lg";

  return (
    <div
      className={`
        min-w-[240px]
        rounded-2xl
        border
        bg-zinc-900
        p-5
        transition-all
        duration-300
        ${borderColor}
        ${glow}
      `}
    >
      <div className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
        Input
      </div>

      <div className="text-lg font-semibold text-white">
        Prompt Node
      </div>

      <div className="mt-3 text-sm text-zinc-400">
        Workflow starting point
      </div>

      <div className="mt-4 text-xs text-zinc-500">
        Status: {status}
      </div>

      <Handle
        id="prompt-output"
        type="source"
        position={Position.Right}
      />
    </div>
  );
}