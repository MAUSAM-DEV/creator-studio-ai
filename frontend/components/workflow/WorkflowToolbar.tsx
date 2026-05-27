"use client";

interface WorkflowToolbarProps {
  onSave: () => void;
  onClear: () => void;
  onRun: () => void;
}

export default function WorkflowToolbar({
  onSave,
  onClear,
  onRun,
}: WorkflowToolbarProps) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-3">
      <div>
        <h1 className="text-lg font-semibold">
          Workflow Studio
        </h1>

        <p className="text-xs text-zinc-500">
          Build AI generation workflows visually
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onSave}
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm"
        >
          Save
        </button>

        <button
          onClick={onClear}
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm"
        >
          Clear
        </button>

        <button
          onClick={onRun}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
        >
          Run
        </button>
      </div>
    </div>
  );
}