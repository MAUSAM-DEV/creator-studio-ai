import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    openai: !!process.env.OPENAI_API_KEY,
    fal: !!process.env.FAL_KEY,
  });
}