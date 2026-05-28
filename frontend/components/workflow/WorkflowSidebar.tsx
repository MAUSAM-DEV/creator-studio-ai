"use client";

export default function WorkflowSidebar() {
  return (
    <div className="w-[260px] border-r border-zinc-800 bg-black p-4">
      <h2 className="text-white text-xl font-bold mb-4">
        Workflow Nodes
      </h2>

      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white">
          Prompt Node
        </div>

        <div className="p-4 rounded-xl bg-zinc-900 border border-cyan-500/40 text-white">
          Image Node
        </div>

        <div className="p-4 rounded-xl bg-zinc-900 border border-purple-500/40 text-white">
          Video Node
        </div>

        <div className="p-4 rounded-xl bg-zinc-900 border border-orange-500/40 text-white">
          Voice Node
        </div>
      </div>
    </div>
  );
}