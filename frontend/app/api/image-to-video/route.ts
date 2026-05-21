import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: false,
    message:
      "Image-to-Video provider not connected yet.",
  });
}