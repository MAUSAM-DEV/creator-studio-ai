export interface WorkflowExecutionContext {
  prompt?: string;

  imageUrl?: string;

  voiceUrl?: string;

  videoUrl?: string;

  musicUrl?: string;

  projectId?: string;

  metadata: Record<string, any>;

  assets: any[];
}

export function createExecutionContext(): WorkflowExecutionContext {
  return {
    metadata: {},
    assets: [],
  };
}