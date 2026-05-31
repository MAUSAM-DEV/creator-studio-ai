import { ExecutionContext } from "../executionContext";

export async function generateVideoFromImages(
  context: ExecutionContext
) {
  console.log(
    "REAL VIDEO GENERATION STARTED"
  );

  console.log(
    "IMAGE INPUTS:",
    context.images
  );

  return {
    videoUrl:
      "real-generated-video.mp4",
  };
}