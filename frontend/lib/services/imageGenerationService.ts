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
  getImageGenerator,
} from "@/lib/providers/images/router";

interface GenerateImageOptions {
  prompt: string;

  provider: string;

  count?: number;

  projectId?: string;
}

export async function generateImage(
  options: GenerateImageOptions
) {
  const {
    prompt,
    provider,
    count = 1,
    projectId,
  } = options;

  const jobId =
    crypto.randomUUID();

  addJob({
    id: jobId,

    type: "image",

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
      await getImageGenerator(
        provider
      );

    const images =
      await generator({
        prompt,
        count,
      });

    updateJobStatus(
      jobId,
      "completed"
    );

    addHistoryItem({
      id:
        crypto.randomUUID(),

      type: "image",

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
      },
    });

    for (const imageUrl of images) {

      const asset = {
        id:
          crypto.randomUUID(),

        type:
          "image" as const,

        name:
          prompt.length > 50
            ? prompt.slice(
                0,
                50
              ) + "..."
            : prompt,

        url: imageUrl,

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

      images,

      count:
        images.length,
    };

  } catch (error: any) {

    updateJobStatus(
      jobId,
      "failed"
    );

    throw error;
  }
}