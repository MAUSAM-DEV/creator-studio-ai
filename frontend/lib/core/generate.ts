import { MODEL_PROVIDER_MAP } from "../config/modelProviderMap";
import { getVideoGenerator } from "../providers/videos/router";

export interface GenerateOptions {
  prompt: string;
  model: string;
  duration?: number;
  aspectRatio?: string;
  count?: number;
}

export async function generateContent(
  options: GenerateOptions
) {
  const {
    prompt,
    model,
    duration = 5,
    aspectRatio = "16:9",
    count = 1,
  } = options;

  const provider =
    MODEL_PROVIDER_MAP[
      model as keyof typeof MODEL_PROVIDER_MAP
    ];

  if (!provider) {
    throw new Error(
      `No provider found for model: ${model}`
    );
  }

  const videos: string[] = [];

  const generator =
    await getVideoGenerator(
      model.toLowerCase()
    );

  for (
    let i = 0;
    i < count;
    i++
  ) {
    const result =
      await generator({
        prompt,
        duration:
          duration === 10
            ? "10"
            : "5",
        aspectRatio,
      });

    videos.push(result);
  }

  return {
    success: true,
    provider,
    model,
    videos,
  };
}