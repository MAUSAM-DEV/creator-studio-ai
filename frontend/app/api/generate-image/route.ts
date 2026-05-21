import { NextResponse } from "next/server";

import {
  generateImage,
} from "@/lib/services/imageGenerationService";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const {
      prompt,
      provider = "openai",
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
      await generateImage({
        prompt,
        provider,
        count,
        projectId,
      });

    return NextResponse.json(
      result
    );

  } catch (error: any) {

    console.error(
      "IMAGE GENERATION ERROR:"
    );

    console.error(error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Image generation failed",
      },
      {
        status: 500,
      }
    );
  }
}