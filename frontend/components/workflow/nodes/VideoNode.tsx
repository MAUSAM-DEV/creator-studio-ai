"use client";

import { Handle, Position } from "reactflow";

export default function VideoNode() {
  return (
    <div className="min-w-[220px] rounded-xl border border-purple-500/30 bg-zinc-900 p-4 shadow-lg">
      <div className="text-xs text-purple-400 mb-1">
        VIDEO
      </div>

      <div className="font-medium">
        Video Node
      </div>

      <div className="text-sm text-zinc-500 mt-2">
        Generate AI Videos
      </div>

      <Handle
  id="video-input"
  type="target"
  position={Position.Left}
/>

      <Handle
        id="video-output"
        type="source"
        position={Position.Right}
      />
    </div>
  );
}