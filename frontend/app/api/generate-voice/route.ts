import { NextResponse } from "next/server";

import {
  generateVoice,
} from "@/lib/services/voiceGenerationService";

export async function POST(
  req: Request
) {
  try {

    const body =
      await req.json();

    const {
      text,
      provider = "openai",
      projectId,
    } = body;

    if (!text) {

      return NextResponse.json(
        {
          error:
            "Text is required",
        },
        {
          status: 400,
        }
      );

    }

    const result =
      await generateVoice({
        text,
        provider,
        projectId,
      });

    return NextResponse.json(
      result
    );

  } catch (error: any) {

    console.error(
      "VOICE GENERATION ERROR:"
    );

    console.error(error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Voice generation failed",
      },
      {
        status: 500,
      }
    );

  }
}