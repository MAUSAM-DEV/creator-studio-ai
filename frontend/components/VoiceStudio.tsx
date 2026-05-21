"use client";

import { useEffect, useState } from "react";

import {
  getProjects,
} from "@/lib/core/projectManager";

const voiceModels = [
  {
    label: "OpenAI TTS",
    value: "openai",
  },
  {
    label: "ElevenLabs",
    value: "elevenlabs",
  },
  {
    label: "Cartesia",
    value: "cartesia",
  },
];

export default function VoiceStudio() {
  const [text, setText] =
    useState("");

  const [provider, setProvider] =
    useState("openai");

  const [projects, setProjects] =
    useState<any[]>([]);

  const [selectedProject, setSelectedProject] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [audioUrl, setAudioUrl] =
    useState("");

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  async function generateVoice() {

    if (!text) return;

    setLoading(true);

    try {

      const response =
        await fetch(
          "/api/generate-voice",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              text,
              provider,
              projectId:
                selectedProject,
            }),
          }
        );

      const data =
        await response.json();

      if (data.audioUrl) {
        setAudioUrl(
          data.audioUrl
        );
      } else {
        alert(
          data.error ||
            "Voice generation failed"
        );
      }

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-6">
          AI Voice Studio
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Generate voiceovers,
          narrations, podcasts,
          audiobooks and AI speech.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6">

            <label className="block text-sm mb-3 text-gray-400">
              Script
            </label>

            <textarea
              value={text}
              onChange={(e) =>
                setText(
                  e.target.value
                )
              }
              placeholder="Enter narration script..."
              className="w-full h-40 bg-black/30 border border-white/10 rounded-2xl p-4 outline-none"
            />

            <div className="mt-6">

              <label className="block text-sm mb-3 text-gray-400">
                Project
              </label>

              <select
                value={
                  selectedProject
                }
                onChange={(e) =>
                  setSelectedProject(
                    e.target.value
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4"
              >
                <option value="">
                  No Project
                </option>

                {projects.map(
                  (
                    project
                  ) => (
                    <option
                      key={
                        project.id
                      }
                      value={
                        project.id
                      }
                    >
                      {
                        project.name
                      }
                    </option>
                  )
                )}
              </select>

            </div>

            <div className="mt-6">

              <label className="block text-sm mb-3 text-gray-400">
                Voice Model
              </label>

              <select
                value={provider}
                onChange={(e) =>
                  setProvider(
                    e.target.value
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4"
              >
                {voiceModels.map(
                  (
                    model
                  ) => (
                    <option
                      key={
                        model.value
                      }
                      value={
                        model.value
                      }
                    >
                      {
                        model.label
                      }
                    </option>
                  )
                )}
              </select>

            </div>

            <button
              onClick={
                generateVoice
              }
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl py-4 text-lg font-semibold"
            >
              {loading
                ? "Generating..."
                : "Generate Voice"}
            </button>

          </div>

          <div className="lg:col-span-2">

            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-8">

              {audioUrl ? (

                <audio
                  controls
                  className="w-full"
                  src={audioUrl}
                />

              ) : (

                <div className="text-gray-500 text-center py-20">

                  Generated voice preview

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}