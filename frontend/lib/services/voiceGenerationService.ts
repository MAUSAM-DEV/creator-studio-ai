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
  getVoiceGenerator,
} from "@/lib/providers/voice/router";

interface GenerateVoiceOptions {
  text: string;

  provider: string;

  projectId?: string;
}

export async function generateVoice(
  options: GenerateVoiceOptions
) {
  const {
    text,
    provider,
    projectId,
  } = options;

  const jobId =
    crypto.randomUUID();

  addJob({
    id: jobId,

    type: "voice",

    name:
      text.length > 40
        ? text.slice(0, 40) + "..."
        : text,

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
      await getVoiceGenerator(
        provider
      );

    const audioUrl =
      await generator({
        text,
      });

    updateJobStatus(
      jobId,
      "completed"
    );

    addHistoryItem({
      id:
        crypto.randomUUID(),

      type: "voice",

      title:
        text.length > 60
          ? text.slice(0, 60) +
            "..."
          : text,

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
        "voice" as const,

      name:
        text.length > 50
          ? text.slice(
              0,
              50
            ) + "..."
          : text,

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