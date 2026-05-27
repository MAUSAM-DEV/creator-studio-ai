export interface PromptNodeData {
  prompt: string;
  style?: string;
}

export interface ImageNodeData {
  provider?: string;
  model?: string;
  width?: number;
  height?: number;
}

export interface VideoNodeData {
  provider?: string;
  duration?: number;
  fps?: number;
}