import {
  runYouTubeShortWorkflow,
} from "../youtubeShortWorkflow";

import {
  generateImage,
} from "@/lib/services/imageGenerationService";

import {
  generateVoice,
} from "@/lib/services/voiceGenerationService";

import {
  generateVideo,
} from "@/lib/services/videoGenerationService";

export interface ExecuteYouTubeShortOptions {
  topic: string;

  projectId?: string;

  generateImage?: boolean;

  generateVoice?: boolean;

  generateVideo?: boolean;

  imageProvider?: string;

  voiceProvider?: string;

  videoProvider?: string;

  imageCount?: number;

  videoCount?: number;

  duration?: number;

  aspectRatio?: string;
}

export interface ExecuteYouTubeShortResult {
  success: boolean;

  workflow: any;

  imagePrompt: string;

  videoPrompt: string;

  voiceScript: string;

  imageResult: any | null;

  voiceResult: any | null;

  videoResult: any | null;
}

export async function executeYouTubeShort(
  options: ExecuteYouTubeShortOptions
): Promise<ExecuteYouTubeShortResult> {

  const {
  topic,
  projectId,

  generateImage: shouldGenerateImage = true,

  generateVoice: shouldGenerateVoice = true,

  generateVideo: shouldGenerateVideo = false,

  imageProvider = "openai",

  voiceProvider = "openai",

  videoProvider = "kling",

  imageCount = 1,

  videoCount = 1,

  duration = 5,

  aspectRatio = "9:16",
} = options;

  const workflow =
    await runYouTubeShortWorkflow({
      topic,
    });

  let imageResult = null;

  let voiceResult = null;

  let videoResult = null;

  if (shouldGenerateImage) {

    imageResult =
      await generateImage({
        prompt:
          workflow.imagePrompt,

        provider:
          imageProvider,

        count: imageCount,

        projectId,
      });
  }

  if (shouldGenerateVoice) {

    voiceResult =
      await generateVoice({
        text:
          workflow.voiceScript,

        provider:
          voiceProvider,

        projectId,
      });
  }

  const ENABLE_VIDEO_WORKFLOW =
    process.env
      .NEXT_PUBLIC_ENABLE_VIDEO_WORKFLOW ===
    "true";

  if (
    shouldGenerateVideo &&
    ENABLE_VIDEO_WORKFLOW
  ) {

    videoResult =
      await generateVideo({
        prompt:
          workflow.videoPrompt,

        provider:
          videoProvider,

        duration,

aspectRatio,

count: videoCount,

        projectId,
      });
  }

  return {
    success: true,

    workflow,

    imagePrompt:
      workflow.imagePrompt,

    videoPrompt:
      workflow.videoPrompt,

    voiceScript:
      workflow.voiceScript,

    imageResult,

    voiceResult,

    videoResult,
  };
}