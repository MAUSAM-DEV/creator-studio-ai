import PromptNode from "@/components/workflow/nodes/PromptNode";
import ImageNode from "@/components/workflow/nodes/ImageNode";
import VideoNode from "@/components/workflow/nodes/VideoNode";
import VoiceNode from "@/components/workflow/nodes/VoiceNode";

export const reactFlowNodeTypes = {
  prompt: PromptNode,
  imageNode: ImageNode,
  videoNode: VideoNode,
  voiceNode: VoiceNode,
};