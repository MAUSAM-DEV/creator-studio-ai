import { NextResponse } from "next/server";

import {
  generateMusic,
} from "@/lib/services/musicGenerationService";

export async function POST(
  req: Request
) {
  try {

    const body =
      await req.json();

    const {
      prompt,
      provider = "openai",
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
      await generateMusic({
        prompt,
        provider,
        projectId,
      });

    return NextResponse.json(
      result
    );

  } catch (error: any) {

    console.error(
      "MUSIC GENERATION ERROR:"
    );

    console.error(error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Music generation failed",
      },
      {
        status: 500,
      }
    );

  }
}