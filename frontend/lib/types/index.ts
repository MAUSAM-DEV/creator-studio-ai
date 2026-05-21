export interface GenerationRequest {
  prompt: string;
  model?: string;
  provider?: string;
  aspectRatio?: string;
  duration?: number;
  count?: number;
}

export interface GenerationResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface AIProvider {
  id: string;
  name: string;
}

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  category: string;
}

export interface WorkflowStep {
  id: string;
  name: string;
  type: string;
}

export interface Workflow {
  id: string;
  name: string;
  steps: WorkflowStep[];
}