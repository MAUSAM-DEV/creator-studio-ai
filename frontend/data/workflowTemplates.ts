export const workflowTemplates = [
  {
    id: "short-form-content",
    name: "Short Form Content",
    promptStyle: "short-form",
    description:
      "Create engaging short-form content for any vertical video platform.",
    contentLength: "short",

    config: {
      aspectRatio: "9:16",
      duration: 60,
      imageCount: 6,
      videoCount: 6,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "long-form-content",
    name: "Long Form Content",
    promptStyle: "long-form",
    description:
      "Create structured long-form videos with chapters and extended narration.",
    contentLength: "long",

    config: {
      aspectRatio: "16:9",
      duration: 600,
      imageCount: 20,
      videoCount: 20,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "storytelling",
    name: "Storytelling",
    promptStyle: "story",
    description:
      "Narrative-driven content for stories, fiction, and storytelling.",
    contentLength: "medium",

    config: {
      aspectRatio: "16:9",
      duration: 180,
      imageCount: 10,
      videoCount: 10,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "educational-content",
    name: "Educational Content",
    promptStyle: "educational",
    description:
      "Tutorials, lessons, explainers, and learning-focused content.",
    contentLength: "long",

    config: {
      aspectRatio: "16:9",
      duration: 480,
      imageCount: 16,
      videoCount: 16,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "news-updates",
    name: "News & Updates",
    promptStyle: "news",
    description:
      "Current events, industry updates, and informational reporting.",
    contentLength: "medium",

    config: {
      aspectRatio: "16:9",
      duration: 180,
      imageCount: 8,
      videoCount: 8,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "motivational-content",
    name: "Motivational Content",
    promptStyle: "motivational",
    description:
      "Inspirational and mindset-focused content with narration.",
    contentLength: "medium",

    config: {
      aspectRatio: "9:16",
      duration: 90,
      imageCount: 8,
      videoCount: 8,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "product-showcase",
    name: "Product Showcase",
    promptStyle: "marketing",
    description:
      "Promotional content for products, services, and businesses.",
    contentLength: "short",

    config: {
      aspectRatio: "9:16",
      duration: 60,
      imageCount: 6,
      videoCount: 6,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "podcast-content",
    name: "Podcast Content",
    promptStyle: "podcast",
    description:
      "Visual podcast content with narration and supporting visuals.",
    contentLength: "long",

    config: {
      aspectRatio: "16:9",
      duration: 900,
      imageCount: 15,
      videoCount: 15,
      generateImage: true,
      generateVoice: true,
      generateVideo: true,
    },
  },

  {
    id: "music-visualizer",
    name: "Music Visualizer",
    promptStyle: "music",
    description:
      "Music-focused visual content and animated visualizers.",
    contentLength: "medium",

    config: {
      aspectRatio: "16:9",
      duration: 180,
      imageCount: 10,
      videoCount: 10,
      generateImage: true,
      generateVoice: false,
      generateVideo: true,
    },
  },
];