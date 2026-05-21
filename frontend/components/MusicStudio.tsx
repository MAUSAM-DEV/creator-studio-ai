"use client";

import { useEffect, useState } from "react";

import {
  getProjects,
} from "@/lib/core/projectManager";

const musicModels = [
  {
    label: "OpenAI",
    value: "openai",
  },
  {
    label: "Suno",
    value: "suno",
  },
  {
    label: "Udio",
    value: "udio",
  },
];

export default function MusicStudio() {
  const [prompt, setPrompt] =
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

  async function generateMusicTrack() {

    if (!prompt) return;

    setLoading(true);

    try {

      const response =
        await fetch(
          "/api/generate-music",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              prompt,
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
            "Music generation failed"
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
          AI Music Studio
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Generate songs,
          background music,
          cinematic scores,
          podcast music and
          soundtrack ideas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6">

            <textarea
              value={prompt}
              onChange={(e) =>
                setPrompt(
                  e.target.value
                )
              }
              placeholder="Describe your music..."
              className="w-full h-40 bg-black/30 border border-white/10 rounded-2xl p-4 outline-none"
            />

            <div className="mt-6">

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

              <select
                value={provider}
                onChange={(e) =>
                  setProvider(
                    e.target.value
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4"
              >
                {musicModels.map(
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
                generateMusicTrack
              }
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl py-4 text-lg font-semibold"
            >
              {loading
                ? "Generating..."
                : "Generate Music"}
            </button>

          </div>

          <div className="lg:col-span-2">

            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-8">

              {audioUrl ? (

                <audio
                  controls
                  src={audioUrl}
                  className="w-full"
                />

              ) : (

                <div className="text-center text-gray-500 py-20">

                  Generated music preview

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}