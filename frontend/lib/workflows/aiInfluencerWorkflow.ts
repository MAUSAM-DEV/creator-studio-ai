export interface AIInfluencerWorkflowInput {
  niche: string;
}

export async function runAIInfluencerWorkflow(
  input: AIInfluencerWorkflowInput
) {
  return {
    imagePrompt:
      `Beautiful social media influencer in ${input.niche} niche, realistic photography, studio lighting`,

    videoPrompt:
      `Influencer talking about ${input.niche}, natural movement, cinematic quality`,

    voiceScript:
      `Welcome back everyone. Today I want to talk about ${input.niche}.`,
  };
}