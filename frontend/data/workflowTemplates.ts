export const workflowTemplates = [
  {
    id: "youtube-shorts",
    name: "YouTube Shorts",
    promptStyle: "viral-short",
    description: "Short-form AI videos",
    config: {
      aspectRatio: "9:16",
      duration: 30,
      imageCount: 5,
      videoCount: 5,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "motivational",
    name: "Motivational Video",
    description: "Inspirational content",
    config: {
      aspectRatio: "9:16",
      duration: 20,
      imageCount: 4,
      videoCount: 4,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "ai-news",
    name: "AI News",
    promptStyle: "news",
    description: "Latest AI updates",
    config: {
      aspectRatio: "16:9",
      duration: 60,
      imageCount: 6,
      videoCount: 6,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "story",
    name: "Story Narration",
    promptStyle: "story",
    description: "Narrated storytelling",
    config: {
      aspectRatio: "9:16",
      duration: 45,
      imageCount: 8,
      videoCount: 8,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },
];