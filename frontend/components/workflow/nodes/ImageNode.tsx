"use client";

import { Handle, Position } from "reactflow";

export default function ImageNode() {
  return (
    <div className="min-w-[220px] rounded-xl border border-cyan-500/30 bg-zinc-900 p-4 shadow-lg">
      <div className="text-xs text-cyan-400 mb-1">
        IMAGE
      </div>

      <div className="font-medium">
        Image Node
      </div>

      <div className="text-sm text-zinc-500 mt-2">
        Generate AI Images
      </div>

      <Handle
        type="target"
        position={Position.Left}
      />

      <Handle
        type="source"
        position={Position.Right}
      />
    </div>
  );
}