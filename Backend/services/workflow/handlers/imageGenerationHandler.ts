import { ExecutionContext } from "../executionContext";

export async function generateImageFromPrompt(
  context: ExecutionContext
) {
  console.log(
    "REAL IMAGE GENERATION STARTED"
  );

  console.log(
    "PROMPT:",
    context.prompt
  );

  return {
    imageUrl:
      "real-generated-image.png",
  };
}