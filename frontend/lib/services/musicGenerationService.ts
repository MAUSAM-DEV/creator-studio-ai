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

import {
  getMusicGenerator,
} from "@/lib/providers/music/router";

interface GenerateMusicOptions {
  prompt: string;

  provider: string;

  projectId?: string;
}

export async function generateMusic(
  options: GenerateMusicOptions
) {
  const {
    prompt,
    provider,
    projectId,
  } = options;

  const jobId =
    crypto.randomUUID();

  addJob({
    id: jobId,

    type: "music",

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
      await getMusicGenerator(
        provider
      );

    const audioUrl =
      await generator({
        prompt,
      });

    updateJobStatus(
      jobId,
      "completed"
    );

    addHistoryItem({
      id:
        crypto.randomUUID(),

      type: "music",

      title:
        prompt.length > 60
          ? prompt.slice(0, 60) +
            "..."
          : prompt,

      createdAt:
        new Date().toISOString(),

      metadata: {
        provider,
      },
    });

    const asset = {
      id:
        crypto.randomUUID(),

      type:
        "music" as const,

      name:
        prompt.length > 50
          ? prompt.slice(
              0,
              50
            ) + "..."
          : prompt,

      url: audioUrl,

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

    return {
      success: true,

      audioUrl,
    };

  } catch (error: any) {

    updateJobStatus(
      jobId,
      "failed"
    );

    throw error;
  }
}