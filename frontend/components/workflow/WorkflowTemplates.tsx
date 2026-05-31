"use client";

import { workflowTemplates } from "@/data/workflowTemplates";

interface WorkflowTemplatesProps {
  onSelect: (template: any) => void;
  activeTemplate: string;
}

export default function WorkflowTemplates({
  onSelect,
  activeTemplate,
}: WorkflowTemplatesProps) {
  return (
    <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-red-500">
  WORKFLOW TEMPLATES TEST
</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {workflowTemplates.map((template) => {
          const isActive =
            activeTemplate === template.id;

          return (
            <button
              key={template.id}
              onClick={() => onSelect(template)}
              className={`
                p-4
                rounded-xl
                border
                text-left
                transition-all
                relative

                ${
                  isActive
                    ? "border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-black/20 hover:border-cyan-500/50 hover:bg-cyan-500/5"
                }
              `}
            >
              {isActive && (
                <div className="absolute top-3 right-3 text-cyan-400 font-bold">
                  ✓
                </div>
              )}

              <h3 className="font-semibold">
                {template.name}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                {template.description}
              </p>

              {isActive && (
                <div className="mt-3 inline-flex items-center rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                  Active Template
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}