import { getVideoGenerator } from "@/lib/providers/videos/router";

import {
  addJob,
  updateJobStatus,
} from "@/lib/core/queueManager";

import {
  addHistoryItem,
} from "@/lib/core/historyManager";

import {
  addAsset,
} from "@/lib/core/libraryManager";

import {
  addAssetToProject,
} from "@/lib/core/projectManager";

interface GenerateVideoOptions {
  prompt: string;

  provider: string;

  duration?: number;

  aspectRatio?: string;

  count?: number;

  projectId?: string;
}

export async function generateVideo(
  options: GenerateVideoOptions
) {
  const {
    prompt,
    provider,
    duration = 5,
    aspectRatio = "16:9",
    count = 1,
    projectId,
  } = options;

  const jobId =
    crypto.randomUUID();

  addJob({
    id: jobId,

    type: "video",

    name:
      prompt.length > 40
        ? prompt.slice(0, 40) + "..."
        : prompt,

    status: "queued",

    createdAt:
      new Date().toISOString(),
  });

  try {
    updateJobStatus(
      jobId,
      "running"
    );

    const generator =
      await getVideoGenerator(
        provider
      );

    const videos: string[] = [];

    for (
      let i = 0;
      i < count;
      i++
    ) {
      const videoUrl =
        await generator({
          prompt,

          duration:
            duration === 10
              ? "10"
              : "5",

          aspectRatio,
        });

      videos.push(videoUrl);
    }

    updateJobStatus(
      jobId,
      "completed"
    );

    addHistoryItem({
      id:
        crypto.randomUUID(),

      type: "video",

      title:
        prompt.length > 60
          ? prompt.slice(0, 60) +
            "..."
          : prompt,

      createdAt:
        new Date().toISOString(),

      metadata: {
        provider,
        count,
        videos,
      },
    });

    for (const videoUrl of videos) {

      const asset = {
        id:
          crypto.randomUUID(),

        type:
          "video" as const,

        name:
          prompt.length > 50
            ? prompt.slice(
                0,
                50
              ) + "..."
            : prompt,

        url: videoUrl,

        createdAt:
          new Date().toISOString(),
      };

      addAsset(asset);

      if (projectId) {
        try {
          addAssetToProject(
            projectId,
            asset
          );
        } catch (error) {
          console.error(
            "PROJECT ASSET ERROR"
          );

          console.error(error);
        }
      }
    }

    return {
      success: true,

      videos,

      count:
        videos.length,
    };

  } catch (error: any) {

    updateJobStatus(
      jobId,
      "failed"
    );

    throw error;
  }
}