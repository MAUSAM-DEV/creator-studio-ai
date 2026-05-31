"use client";

import ResultsGallery from "../../components/workflow/ResultsGallery";
import HeroSection from "../../components/workflow/HeroSection";
import ProductionModeSelector from "@/components/workflow/ProductionModeSelector";
import PlatformSelector from "@/components/workflow/PlatformSelector";
import ProviderSelector from "@/components/workflow/ProviderSelector";
import PipelinePreview from "@/components/workflow/PipelinePreview";
import CreatorReadyCard from "@/components/workflow/CreatorReadyCard";
import ComingSoonCard from "@/components/workflow/ComingSoonCard";
import GenerationControls from "@/components/workflow/GenerationControls";
import WorkflowTemplates from "../../components/workflow/WorkflowTemplates";
import WorkflowStudio from "@/components/workflow/WorkflowStudio";
import {
  productionModes,
  platforms,
  llmProviders,
  imageProviders,
  videoProviders,
  voiceProviders,
} from "@/data/workflowOptions";




import { useEffect, useState } from "react";

import {
  addHistoryItem,
} from "@/lib/core/historyManager";

import {
  addAsset,
} from "@/lib/core/libraryManager";

export default function WorkflowRunner() {
  
const [viewMode, setViewMode] = useState<
  "standard" | "visual"
>("standard");

useEffect(() => {
  const savedView = localStorage.getItem(
    "workflow-view"
  ) as "standard" | "visual" | null;

  if (savedView) {
    setViewMode(savedView);
  }
}, []);

  const [
  productionMode,
  setProductionMode,
] = useState("Standard");

const [
  platform,
  setPlatform,
] = useState("Multi Platform");

const [
  llmProvider,
  setLlmProvider,
] = useState("GPT");

const [
  imageProvider,
  setImageProvider,
] = useState("openai");

const [
  videoProvider,
  setVideoProvider,
] = useState("kling");

const [
  voiceProvider,
  setVoiceProvider,
] = useState("openai");

  const [topic, setTopic] =
    useState("");

    const [activeTemplate, setActiveTemplate] = useState<string>("");

  const [loading, setLoading] =
    useState(false);
    
    const [workflowStage, setWorkflowStage] =
  useState("idle");

  const [
  workflowCompleted,
  setWorkflowCompleted,
] = useState(false);

  const [promptStyle, setPromptStyle] = useState("default");

    function applyTemplate(template: any) {
      setActiveTemplate(template.id);

      if (template.promptStyle) {
  setPromptStyle(template.promptStyle);
}

  const config = template.config;

  
  if (config.imageCount) {
    setImageCount(config.imageCount);
  }

  if (config.videoCount) {
    setVideoCount(config.videoCount);
  }

  if (typeof config.generateImage === "boolean") {
    setGenerateImage(config.generateImage);
  }

  if (typeof config.generateVoice === "boolean") {
    setGenerateVoice(config.generateVoice);
  }

  if (typeof config.generateVideo === "boolean") {
    setGenerateVideo(config.generateVideo);
  }

  console.log(
    "Applied template:",
    template.name
  );
}

  const [result, setResult] =
    useState<any>(null);

  const [
    generateImage,
    setGenerateImage,
  ] = useState(true);

  const [
    generateVoice,
    setGenerateVoice,
  ] = useState(true);

  const [
    generateVideo,
    setGenerateVideo,
  ] = useState(false);

  const [imageCount, setImageCount] =
  useState(1);

const [videoCount, setVideoCount] =
  useState(1);

const [duration, setDuration] =
  useState(5);

const [aspectRatio, setAspectRatio] =
  useState("9:16");

  async function runWorkflow() {

    if (!topic) return;

    if (
      !generateImage &&
      !generateVoice &&
      !generateVideo
    ) {

      alert(
        "Select at least one generation option."
      );

      return;
    }

    setLoading(true);

    setWorkflowCompleted(false);

    setWorkflowStage("topic");

    await new Promise(
  (resolve) => setTimeout(resolve, 500)
);

setWorkflowStage("image");

    try {

      const response =
        await fetch(
          "/api/workflows/youtube-short",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
  topic,

  promptStyle,

  productionMode,
  platform,
  llmProvider,

  imageProvider,
  videoProvider,
  voiceProvider,

  generateImage,
  generateVoice,
  generateVideo,
}),
          }
        );

      const data =
        await response.json();

        setWorkflowStage("voice");

      console.log(data);

      setWorkflowStage("video");

      if (data.success) {

        addHistoryItem({
          id:
            crypto.randomUUID(),

          type:
            "workflow",

          title:
            `YouTube Short: ${topic}`,

          createdAt:
            new Date().toISOString(),

          metadata: {
            topic,

            generateImage,

            generateVoice,

            generateVideo,
          },
        });

        if (
          data.imageResult?.images?.[0]
        ) {

          addAsset({
            id:
              crypto.randomUUID(),

            type:
              "image",

            name:
              `Image: ${topic}`,

            url: undefined,

            createdAt:
              new Date().toISOString(),
          });

        }

        if (
          data.voiceResult?.audioUrl
        ) {

          addAsset({
            id:
              crypto.randomUUID(),

            type:
              "voice",

            name:
              `Voice: ${topic}`,

           url: undefined,

            createdAt:
              new Date().toISOString(),
          });

        }

        if (
          data.videoResult?.videos?.[0]
        ) {

          addAsset({
            id:
              crypto.randomUUID(),

            type:
              "video",

            name:
              `Video: ${topic}`,

            url: undefined,

            createdAt:
              new Date().toISOString(),
          });

        }

        console.log(
          "WORKFLOW HISTORY + LIBRARY SAVED"
        );
      }

setWorkflowStage("export");

setResult(data);

setWorkflowCompleted(true);

    } catch (error) {

      console.error(error);

      setWorkflowStage("failed");

      alert(
        "Workflow execution failed"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6">
     
     {viewMode !== "visual" && (
  <>
     <HeroSection
  topic={topic}
  setTopic={setTopic}
  onGenerate={runWorkflow}
  loading={loading}
/>

<WorkflowTemplates
  onSelect={applyTemplate}
  activeTemplate={activeTemplate}
/>

</>
)}
<div className="flex gap-2 mb-6">
  <button
   onClick={() => {
  setViewMode("standard");
  localStorage.setItem(
    "workflow-view",
    "standard"
  );
}}
    className={`px-4 py-2 rounded-lg border ${
      viewMode === "standard"
        ? "bg-cyan-500 text-black border-cyan-500"
        : "border-zinc-700"
    }`}
  >
    Standard Workflow
  </button>

  <button
    onClick={() => {
      setViewMode("visual");
      localStorage.setItem(
        "workflow-view",
        "visual"
      );
    }}
    className={`px-4 py-2 rounded-lg border ${
      viewMode === "visual"
        ? "bg-cyan-500 text-black border-cyan-500"
        : "border-zinc-700"
    }`}
  >
    Visual Workflow
  </button>
</div>

{viewMode !== "visual" && (

      <div className="mb-8">

  <h2 className="text-4xl font-bold">
    Production Workspace
  </h2>

  <p className="text-gray-400 mt-2">
    AI Powered Content Production Pipeline
  </p>

</div>

)}

{viewMode === "visual" && (
  <WorkflowStudio />
)}

{viewMode === "visual" ? null : (
  <>
<div className="mb-8 text-red-500 text-5xl">
  TEMPLATE BLOCK TEST
</div>

      <GenerationControls
  imageCount={imageCount}
  setImageCount={setImageCount}
  videoCount={videoCount}
  setVideoCount={setVideoCount}
  duration={duration}
  setDuration={setDuration}
  aspectRatio={aspectRatio}
  setAspectRatio={setAspectRatio}
/>
      <div className="mt-8">
  <ProductionModeSelector
    value={productionMode}
    onChange={setProductionMode}
  />
</div>

<div className="mt-8">
  <PlatformSelector
    value={platform}
    onChange={setPlatform}
  />
</div>
<div className="mt-8 space-y-8">

  <ProviderSelector
    title="LLM Engine"
    options={llmProviders}
    value={llmProvider}
    onChange={setLlmProvider}
  />

  <ProviderSelector
    title="Image Provider"
    options={imageProviders}
    value={imageProvider}
    onChange={setImageProvider}
  />

  <ProviderSelector
    title="Video Provider"
    options={videoProviders}
    value={videoProvider}
    onChange={setVideoProvider}
  />

  <ProviderSelector
    title="Voice Provider"
    options={voiceProviders}
    value={voiceProvider}
    onChange={setVoiceProvider}
  />

</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        <label className="flex items-center gap-3 bg-black/20 p-4 rounded-xl">

          <input
            type="checkbox"
            checked={
              generateImage
            }
            onChange={() =>
              setGenerateImage(
                !generateImage
              )
            }
          />

          Generate Image

        </label>

        <label className="flex items-center gap-3 bg-black/20 p-4 rounded-xl">

          <input
            type="checkbox"
            checked={
              generateVoice
            }
            onChange={() =>
              setGenerateVoice(
                !generateVoice
              )
            }
          />

          Generate Voice

        </label>

        <label className="flex items-center gap-3 bg-black/20 p-4 rounded-xl">

          <input
            type="checkbox"
            checked={
              generateVideo
            }
            onChange={() =>
              setGenerateVideo(
                !generateVideo
              )
            }
          />

          Generate Video
          <span className="text-xs text-yellow-400">
            (Credits)
          </span>

        </label>

      </div>

<div className="mt-8">
  
  <PipelinePreview
  workflowStage={workflowStage}
  workflowCompleted={
    workflowCompleted
  }
/>
</div>

<div className="mt-8 space-y-4">

  <ComingSoonCard
    title="Avatar Studio"
    description="Create AI avatars for automated video production."
  />

  <ComingSoonCard
    title="Music Studio"
    description="Generate royalty-free music and soundtracks."
  />

</div>

<button
  onClick={runWorkflow}
  disabled={loading}
  className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl py-4 text-lg font-semibold"
>
  {loading
    ? "Running..."
    : "Execute Workflow"}
</button>

      {/* {result && (

        <div className="mt-8 space-y-4">

          <div className="bg-black/20 rounded-xl p-4">

            <h3 className="font-semibold mb-2">
              Image Prompt
            </h3>

            <p>
              {result.imagePrompt}
            </p>

          </div>

          <div className="bg-black/20 rounded-xl p-4">

            <h3 className="font-semibold mb-2">
              Video Prompt
            </h3>

            <p>
              {result.videoPrompt}
            </p>

          </div>

          <div className="bg-black/20 rounded-xl p-4">

            <h3 className="font-semibold mb-2">
              Voice Script
            </h3>

            <p>
              {result.voiceScript}
            </p>

          </div>

          {result.imageResult?.images?.[0] && (

            <div className="bg-black/20 rounded-xl p-4">

              <h3 className="font-semibold mb-4">
                Generated Image
              </h3>

              <img
                src={
                  result.imageResult.images[0]
                }
                alt="Generated"
                className="rounded-xl max-w-md mx-auto"
              />

            </div>

          )}

          {result.voiceResult?.audioUrl && (

            <div className="bg-black/20 rounded-xl p-4">

              <h3 className="font-semibold mb-4">
                Generated Voice
              </h3>

              <audio
  controls
  className="max-w-md mx-auto w-full"
/>

            </div>

          )}

          {result.videoResult?.videos?.[0] && (

            <div className="bg-black/20 rounded-xl p-4">

              <h3 className="font-semibold mb-4">
                Generated Video
              </h3>

              <video
                src={
                  result.videoResult.videos[0]
                }
                controls
                className="w-full max-w-md mx-auto rounded-xl"
              />

            </div>

          )}

        </div>

      )} */}
      <ResultsGallery result={result} />
    </>
)}
    </div>

  );
}