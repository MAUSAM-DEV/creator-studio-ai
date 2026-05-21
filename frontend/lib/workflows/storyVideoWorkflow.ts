export interface StoryVideoWorkflowInput {
  storyTopic: string;
}

export async function runStoryVideoWorkflow(
  input: StoryVideoWorkflowInput
) {
  return {
    story:
      `A fascinating story about ${input.storyTopic}`,

    imagePrompt:
      `Story illustration about ${input.storyTopic}, cinematic artwork`,

    videoPrompt:
      `Story scene about ${input.storyTopic}, emotional cinematic video`,

    voiceScript:
      `Let me tell you a story about ${input.storyTopic}.`,
  };
}