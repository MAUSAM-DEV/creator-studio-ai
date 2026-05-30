import { generateOpenAIImages } from "./openai";

export async function generateFluxImages(options: {
  prompt: string;
  count?: number;
}) {
  return generateOpenAIImages(options);
}