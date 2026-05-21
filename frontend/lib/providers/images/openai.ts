import OpenAI from "openai";

const openai =
  new OpenAI({
    apiKey:
      process.env.OPENAI_API_KEY,
  });

interface GenerateOpenAIImagesOptions {
  prompt: string;

  count?: number;
}

export async function generateOpenAIImages(
  options: GenerateOpenAIImagesOptions
) {
  const {
    prompt,
    count = 1,
  } = options;

  const response =
    await openai.images.generate({
      model: "gpt-image-1",

      prompt,

      size: "1024x1024",

      n: count,
    });

  const images =
    response.data?.map(
      (img) =>
        `data:image/png;base64,${img.b64_json}`
    ) || [];

  return images;
}