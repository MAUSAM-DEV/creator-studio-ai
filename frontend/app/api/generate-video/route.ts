import { NextResponse } from "next/server";

import {
  generateVideo,
} from "@/lib/services/videoGenerationService";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const {
      prompt,
      provider = "kling",
      duration = 5,
      aspectRatio = "16:9",
      count = 1,
      projectId,
    } = body;

    if (!prompt) {
      return NextResponse.json(
        {
          error:
            "Prompt is required",
        },
        {
          status: 400,
        }
      );
    }

    const result =
      await generateVideo({
        prompt,
        provider,
        duration,
        aspectRatio,
        count,
        projectId,
      });

    return NextResponse.json(
      result
    );

  } catch (error: any) {

    console.error(
      "VIDEO GENERATION ERROR:"
    );

    console.error(error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Video generation failed",
      },
      {
        status: 500,
      }
    );
  }
}