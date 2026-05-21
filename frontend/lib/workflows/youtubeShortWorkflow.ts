export interface YouTubeShortWorkflowInput {
  topic: string;
}

export interface YouTubeShortWorkflowResult {
  scriptPrompt: string;

  imagePrompt: string;

  videoPrompt: string;

  voiceScript: string;
}

export async function runYouTubeShortWorkflow(
  input: YouTubeShortWorkflowInput
): Promise<YouTubeShortWorkflowResult> {

  const topic =
    input.topic;

  const scriptPrompt =
    `Create a viral YouTube Shorts script about ${topic}`;

  const imagePrompt =
    `Ultra realistic cinematic scene about ${topic}, dramatic lighting, highly detailed, professional photography`;

  const videoPrompt =
    `Cinematic video about ${topic}, dynamic camera movement, realistic motion, professional filmmaking`;

  const voiceScript =
    `Today we are talking about ${topic}. Stay until the end to discover something surprising.`;

  return {
    scriptPrompt,
    imagePrompt,
    videoPrompt,
    voiceScript,
  };
}