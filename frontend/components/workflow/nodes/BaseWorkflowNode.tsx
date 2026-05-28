"use client";

import { Handle, Position } from "reactflow";

interface BaseWorkflowNodeProps {
  data: {
    label: string;
    description: string;
    status?: string;
    color?: string;
    onDelete?: () => void;
  };
}

export default function BaseWorkflowNode({
  data,
}: BaseWorkflowNodeProps) {
  return (
    <div
      className="
        relative
        w-[170px]
        rounded-2xl
        border
        border-zinc-700
        bg-[#111111]
        p-4
        shadow-xl
      "
      style={{
        boxShadow: `0 0 20px ${data.color || "#06b6d4"}40`,
      }}
    >
      {/* INPUT HANDLE */}
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-cyan-400"
      />

      {/* DELETE BUTTON */}
      <button
        onClick={data.onDelete}
        className="
          absolute
          top-2
          right-2
          flex
          items-center
          justify-center
          w-5
          h-5
          rounded-full
          bg-red-500
          text-white
          text-xs
          hover:bg-red-400
        "
      >
        ×
      </button>

      {/* HEADER */}
      <div
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{
          color: data.color || "#06b6d4",
        }}
      >
        AI WORKFLOW
      </div>

      {/* TITLE */}
      <div className="mt-2 text-sm font-bold text-white">
        {data.label}
      </div>

      {/* DESCRIPTION */}
      <div className="mt-1 text-xs text-zinc-400">
        {data.description}
      </div>

      {/* STATUS */}
      <div className="mt-4">
        <div className="text-[10px] text-zinc-500">
          Status: {data.status || "idle"}
        </div>

        <div className="mt-1 h-1 rounded-full bg-zinc-800 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width:
                data.status === "completed"
                  ? "100%"
                  : data.status === "running"
                  ? "60%"
                  : "20%",
              backgroundColor: data.color || "#06b6d4",
            }}
          />
        </div>
      </div>

      {/* OUTPUT HANDLE */}
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-cyan-400"
      />
    </div>
  );
}