"use client";

import { useState } from "react";

import {
  runYouTubeShortWorkflow,
} from "@/lib/workflows/youtubeShortWorkflow";

import {
  runAIInfluencerWorkflow,
} from "@/lib/workflows/aiInfluencerWorkflow";

import {
  runStoryVideoWorkflow,
} from "@/lib/workflows/storyVideoWorkflow";

export default function WorkflowStudio() {
  const [workflow, setWorkflow] =
    useState("youtube");

  const [topic, setTopic] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

  async function runWorkflow() {

    if (!topic) return;

    try {

      if (workflow === "youtube") {

        const output =
          await runYouTubeShortWorkflow({
            topic,
          });

        setResult(output);

      }

      if (
        workflow === "influencer"
      ) {

        const output =
          await runAIInfluencerWorkflow({
            niche: topic,
          });

        setResult(output);

      }

      if (workflow === "story") {

        const output =
          await runStoryVideoWorkflow({
            storyTopic:
              topic,
          });

        setResult(output);

      }

    } catch (error) {

      console.error(error);

    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-6">
          Workflow Studio
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Run complete AI content
          creation workflows from
          one place.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6">

            <label className="block text-sm mb-3 text-gray-400">
              Workflow
            </label>

            <select
              value={workflow}
              onChange={(e) =>
                setWorkflow(
                  e.target.value
                )
              }
              className="w-full bg-black/30 border border-white/10 rounded-2xl p-4"
            >
              <option value="youtube">
                YouTube Shorts
              </option>

              <option value="influencer">
                AI Influencer
              </option>

              <option value="story">
                Story Video
              </option>
            </select>

            <div className="mt-6">

              <label className="block text-sm mb-3 text-gray-400">
                Topic
              </label>

              <textarea
                value={topic}
                onChange={(e) =>
                  setTopic(
                    e.target.value
                  )
                }
                placeholder="Enter topic..."
                className="w-full h-40 bg-black/30 border border-white/10 rounded-2xl p-4"
              />

            </div>

            <button
              onClick={
                runWorkflow
              }
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl py-4 text-lg font-semibold"
            >
              Run Workflow
            </button>

          </div>

          <div className="lg:col-span-2">

            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-8 min-h-[600px]">

              {result ? (

                <div className="space-y-6">

                  {Object.entries(
                    result
                  ).map(
                    (
                      [key, value]
                    ) => (
                      <div
                        key={key}
                      >
                        <h3 className="text-xl font-semibold mb-2 capitalize">
                          {key}
                        </h3>

                        <div className="bg-black/20 rounded-xl p-4 text-gray-300 whitespace-pre-wrap">
                          {
                            String(
                              value
                            )
                          }
                        </div>

                      </div>
                    )
                  )}

                </div>

              ) : (

                <div className="h-full flex items-center justify-center text-gray-500">

                  Workflow output
                  will appear here

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}