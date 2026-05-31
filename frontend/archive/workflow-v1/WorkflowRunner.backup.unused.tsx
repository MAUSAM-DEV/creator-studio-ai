"use client";

import { useState } from "react";

import {
  addHistoryItem,
} from "@/lib/core/historyManager";

import {
  addAsset,
} from "@/lib/core/libraryManager";

export default function WorkflowRunner() {
  const [topic, setTopic] =
    useState("");

  const [loading, setLoading] =
    useState(false);

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

              generateImage,

              generateVoice,

              generateVideo,
            }),
          }
        );

      const data =
        await response.json();

      console.log(data);

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

      setResult(data);

    } catch (error) {

      console.error(error);

      alert(
        "Workflow execution failed"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6">

      <h2 className="text-3xl font-bold mb-6">
        One Click YouTube Shorts
      </h2>

      <textarea
        value={topic}
        onChange={(e) =>
          setTopic(
            e.target.value
          )
        }
        placeholder="Enter topic..."
        className="w-full h-32 bg-black/30 border border-white/10 rounded-2xl p-4"
      />

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

      <button
        onClick={runWorkflow}
        disabled={loading}
        className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl py-4 text-lg font-semibold"
      >
        {loading
          ? "Running..."
          : "Execute Workflow"}
      </button>

      {result && (

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
                className="rounded-xl"
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
                src={
                  result.voiceResult.audioUrl
                }
                className="w-full"
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
                className="w-full rounded-xl"
              />

            </div>

          )}

        </div>

      )}

    </div>
  );
}