import { ExecutionContext } from "../executionContext";

export async function generateVoiceFromPrompt(
  context: ExecutionContext
) {
  console.log(
    "REAL VOICE GENERATION STARTED"
  );

  console.log(
    "PROMPT:",
    context.prompt
  );

  return {
    audioUrl:
      "real-generated-voice.mp3",
  };
}