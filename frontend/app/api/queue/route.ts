import { NextResponse } from "next/server";

import {
  getJobs,
} from "@/lib/core/queueManager";

export async function GET() {
  try {

    const jobs =
      getJobs();

    return NextResponse.json({
      success: true,
      jobs,
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          "Failed to load queue",
      },
      {
        status: 500,
      }
    );

  }
}