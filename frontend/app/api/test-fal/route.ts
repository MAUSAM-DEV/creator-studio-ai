import { fal } from "@fal-ai/client";
import { NextResponse } from "next/server";

fal.config({
  credentials: process.env.FAL_KEY,
});

export async function GET() {
  try {
    const result = await fal.subscribe(
      "fal-ai/flux/dev",
      {
        input: {
          prompt:
            "Ultra realistic red Ferrari parked in Tokyo at night, cinematic lighting",
        },
      }
    );

    return NextResponse.json({
      success: true,
      message: "Fal API connected successfully",
      result,
    });
  } catch (error: any) {
    console.error("FAL TEST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Fal connection failed",
      },
      {
        status: 500,
      }
    );
  }
}