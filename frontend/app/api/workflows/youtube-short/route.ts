import { NextResponse } from "next/server";

import {
  executeYouTubeShort,
} from "@/lib/workflows/executors/youtubeShortExecutor";

export async function POST(
  req: Request
) {
  try {

    const body =
      await req.json();

    const {
      topic,
      projectId,

      generateImage,
      generateVoice,
      generateVideo,

      imageProvider,
      voiceProvider,
      videoProvider,
      imageCount,
videoCount,

duration,
aspectRatio,
    } = body;

    if (!topic) {

      return NextResponse.json(
        {
          error:
            "Topic is required",
        },
        {
          status: 400,
        }
      );

    }

    const result =
      await executeYouTubeShort({
        topic,

        projectId,

        generateImage,
        generateVoice,
        generateVideo,

        imageProvider,
        voiceProvider,
        videoProvider,
        imageCount,
        videoCount,
        duration,
        aspectRatio,
      });

    return NextResponse.json(
      result
    );

  } catch (error: any) {

    console.error(
      "YOUTUBE WORKFLOW ERROR:"
    );

    console.error(error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Workflow failed",
      },
      {
        status: 500,
      }
    );

  }
}