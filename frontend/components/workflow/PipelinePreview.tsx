import {
  FileText,
  ImageIcon,
  Mic,
  Film,
  Package,
  ArrowRight,
  CheckCircle,
  Loader2,
  XCircle,
} from "lucide-react";

interface PipelinePreviewProps {
  workflowStage: string;
  workflowCompleted: boolean;
}
const pipelineSteps = [
  {
    id: "topic",
    label: "Topic",
    icon: FileText,
  },
  {
    id: "image",
    label: "Image",
    icon: ImageIcon,
  },
  {
    id: "voice",
    label: "Voice",
    icon: Mic,
  },
  {
    id: "video",
    label: "Video",
    icon: Film,
  },
  {
    id: "export",
    label: "Export",
    icon: Package,
  },
];

export default function PipelinePreview({
  workflowStage,
  workflowCompleted,
}: PipelinePreviewProps) {

const currentIndex =
  pipelineSteps.findIndex(
    (step) => step.id === workflowStage
  );

  return (
    <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-6">
        Pipeline Preview
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {pipelineSteps.map((step, index) => {
          const Icon = step.icon;

          const isCompleted =
  workflowCompleted ||
  currentIndex > index;

const isCurrent =
  !workflowCompleted &&
  step.id === workflowStage;

          return (
            <div
              key={step.label}
              className="flex items-center gap-3"
            >
              <div
                className={`
                  flex items-center gap-3 rounded-xl px-4 py-3 border transition-all

                  ${
                    isCompleted
                      ? "border-green-500 bg-green-500/10"
                      : isCurrent
                      ? "border-cyan-500 bg-cyan-500/10"
                      : "border-white/10 bg-black/20"
                  }
                `}
              >
                <Icon
                  size={18}
                  className={
                    isCompleted
                      ? "text-green-400"
                      : isCurrent
                      ? "text-cyan-400"
                      : "text-gray-400"
                  }
                />

                <span className="font-medium">
                  {step.label}
                </span>

                {isCompleted && (
                  <CheckCircle
                    size={16}
                    className="text-green-400"
                  />
                )}

                {isCurrent && (
                  <Loader2
                    size={16}
                    className="text-cyan-400 animate-spin"
                  />
                )}

                {workflowStage === "failed" && (
                  <XCircle
                    size={16}
                    className="text-red-400"
                  />
                )}
              </div>

              {index < pipelineSteps.length - 1 && (
                <ArrowRight
                  size={18}
                  className="text-gray-500"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}