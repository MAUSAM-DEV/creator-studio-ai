import { fal } from "@fal-ai/client";

export async function generateKlingVideo({
  prompt,
  duration = "5",
  aspectRatio = "16:9",
}: {
  prompt: string;
  duration?: "5" | "10";
  aspectRatio?: "16:9" | "9:16" | "1:1";
}) {
  const result = await fal.subscribe(
    "fal-ai/kling-video/v2/master/text-to-video",
    {
      input: {
        prompt,
        duration,
        aspect_ratio: aspectRatio,
      },
    }
  );

  return result.data.video.url;
}