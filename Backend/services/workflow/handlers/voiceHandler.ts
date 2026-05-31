import { ExecutionContext } from "../executionContext";

import {
  generateVoiceFromPrompt,
} from "./voiceGenerationHandler";

export async function executeVoiceNode(
  node: any,
  context: ExecutionContext
) {
  console.log(
    "VOICE NODE EXECUTED"
  );

  const result =
    await generateVoiceFromPrompt(
      context
    );

  context.metadata.voice =
    result.audioUrl;

  console.log(
    "VOICE GENERATED:",
    result.audioUrl
  );
}