import { ExecutionContext } from "../executionContext";

import {
  generateVideoFromImages,
} from "./videoGenerationHandler";

export async function executeVideoNode(
  node: any,
  context: ExecutionContext
) {
  console.log(
    "VIDEO NODE EXECUTED"
  );

  const result =
    await generateVideoFromImages(
      context
    );

  context.videos?.push(
    result.videoUrl
  );

  console.log(
    "VIDEO GENERATED:",
    result.videoUrl
  );
}