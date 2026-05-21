import { WorkflowDefinition } from "./workflowEngine";

export const WORKFLOW_TEMPLATES: WorkflowDefinition[] = [

  {
    id: "youtube-video",
    name: "YouTube Video",

    nodes: [
      {
        id: "image-1",
        type: "image",
      },

      {
        id: "video-1",
        type: "video",
      },

      {
        id: "voice-1",
        type: "voice",
      },

      {
        id: "music-1",
        type: "music",
      },

      {
        id: "caption-1",
        type: "caption",
      },

      {
        id: "export-1",
        type: "export",
      },
    ],
  },

  {
    id: "ai-influencer",
    name: "AI Influencer Reel",

    nodes: [
      {
        id: "image-1",
        type: "image",
      },

      {
        id: "video-1",
        type: "video",
      },

      {
        id: "voice-1",
        type: "voice",
      },

      {
        id: "caption-1",
        type: "caption",
      },

      {
        id: "export-1",
        type: "export",
      },
    ],
  },

  {
    id: "faceless-channel",
    name: "Faceless Channel",

    nodes: [
      {
        id: "image-1",
        type: "image",
      },

      {
        id: "video-1",
        type: "video",
      },

      {
        id: "voice-1",
        type: "voice",
      },

      {
        id: "music-1",
        type: "music",
      },

      {
        id: "caption-1",
        type: "caption",
      },

      {
        id: "export-1",
        type: "export",
      },
    ],
  },

  {
    id: "podcast",
    name: "Podcast Workflow",

    nodes: [
      {
        id: "voice-1",
        type: "voice",
      },

      {
        id: "music-1",
        type: "music",
      },

      {
        id: "caption-1",
        type: "caption",
      },

      {
        id: "export-1",
        type: "export",
      },
    ],
  },

];