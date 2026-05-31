import { ExecutionContext } from "../executionContext";

import {
  generateImageFromPrompt,
} from "./imageGenerationHandler";

export async function executeImageNode(
  node: any,
  context: ExecutionContext
) {
  console.log(
    "IMAGE NODE EXECUTED"
  );

  const result =
    await generateImageFromPrompt(
      context
    );

  context.images?.push(
    result.imageUrl
  );

  console.log(
    "IMAGE GENERATED:",
    result.imageUrl
  );
}