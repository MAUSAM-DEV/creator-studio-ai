import { generateContent } from "./generate";

export interface RouterRequest {
  type:
    | "image"
    | "video"
    | "image-to-video"
    | "voice"
    | "music";

  model: string;

  prompt: string;

  duration?: number;

  aspectRatio?: string;

  count?: number;
}

export async function aiRouter(
  request: RouterRequest
) {
  const { type } = request;

  switch (type) {

    case "video":
      return await generateContent({
        prompt: request.prompt,
        model: request.model,
        duration: request.duration,
        aspectRatio:
          request.aspectRatio,
        count: request.count,
      });

    case "image":
      throw new Error(
        "Image engine not connected yet"
      );

    case "image-to-video":
      throw new Error(
        "Image-to-video engine not connected yet"
      );

    case "voice":
      throw new Error(
        "Voice engine not connected yet"
      );

    case "music":
      throw new Error(
        "Music engine not connected yet"
      );

    default:
      throw new Error(
        "Unknown AI request type"
      );
  }
}