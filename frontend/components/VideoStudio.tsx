"use client";

import { useEffect, useState } from "react";

import {
  getProjects,
} from "@/lib/core/projectManager";

const videoModels = [
  {
    label: "Kling",
    value: "kling",
  },
  {
    label: "Seedance",
    value: "seedance",
  },
  {
    label: "Google Veo",
    value: "veo",
  },
  {
    label: "Higgsfield",
    value: "higgsfield",
  },
  {
    label: "Runway",
    value: "runway",
  },
  {
    label: "Luma",
    value: "luma",
  },
  {
    label: "PixVerse",
    value: "pixverse",
  },
  {
    label: "Hailuo",
    value: "hailuo",
  },
];

export default function VideoStudio() {
  const [prompt, setPrompt] =
    useState("");

  const [videos, setVideos] =
    useState<string[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [provider, setProvider] =
    useState("kling");

  const [count, setCount] =
    useState(1);

  const [duration, setDuration] =
    useState(5);

  const [aspectRatio, setAspectRatio] =
    useState("16:9");

  const [projects, setProjects] =
    useState<any[]>([]);

  const [selectedProject, setSelectedProject] =
    useState("");

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const estimatedCost =
    count *
    (duration === 10
      ? 0.7
      : 0.35);

  const generateVideo =
    async () => {
      try {
        setLoading(true);

        setVideos([]);

        const response =
          await fetch(
            "/api/generate-video",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                prompt,
                provider,
                count,
                duration,
                aspectRatio,
                projectId:
                  selectedProject,
              }),
            }
          );

        const data =
          await response.json();

        if (data.videos) {
          setVideos(
            data.videos
          );
        } else {
          alert(
            data.error ||
              "Video generation failed"
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
    };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-6">
          Create Cinematic AI Videos
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Generate cinematic AI
          videos, advertisements,
          reels, shorts, films and
          futuristic content.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6">

            <label className="block text-sm mb-3 text-gray-400">
              Prompt
            </label>

            <textarea
              value={prompt}
              onChange={(e) =>
                setPrompt(
                  e.target.value
                )
              }
              placeholder="Describe your AI video..."
              className="w-full h-40 bg-black/30 border border-white/10 rounded-2xl p-4 outline-none"
            />

            <div className="mt-4">

              <label className="block text-sm mb-2 text-gray-400">
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
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
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

            <div className="mt-4">

              <label className="block text-sm mb-2 text-gray-400">
                Video Model
              </label>

              <select
                value={provider}
                onChange={(e) =>
                  setProvider(
                    e.target.value
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
              >
                {videoModels.map(
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

            <div className="mt-4">

              <label className="block text-sm mb-2 text-gray-400">
                Duration
              </label>

              <select
                value={duration}
                onChange={(e) =>
                  setDuration(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
              >
                <option value={5}>
                  5 Seconds
                </option>

                <option value={10}>
                  10 Seconds
                </option>
              </select>

            </div>

            <div className="mt-4">

              <label className="block text-sm mb-2 text-gray-400">
                Aspect Ratio
              </label>

              <select
                value={
                  aspectRatio
                }
                onChange={(e) =>
                  setAspectRatio(
                    e.target.value
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
              >
                <option value="16:9">
                  YouTube
                  (16:9)
                </option>

                <option value="9:16">
                  Shorts/Reels
                  (9:16)
                </option>

                <option value="1:1">
                  Square
                  (1:1)
                </option>
              </select>

            </div>

            <div className="mt-4">

              <label className="block text-sm mb-2 text-gray-400">
                Number Of Videos
              </label>

              <select
                value={count}
                onChange={(e) =>
                  setCount(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
              >
                <option value={1}>
                  1
                </option>

                <option value={2}>
                  2
                </option>

                <option value={3}>
                  3
                </option>

                <option value={4}>
                  4
                </option>
              </select>

            </div>

            <div className="mt-6 text-yellow-400 text-sm">
              Estimated Cost:
              {" "}
              $
              {estimatedCost.toFixed(
                2
              )}
            </div>

            <button
              onClick={
                generateVideo
              }
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl py-4 text-lg font-semibold"
            >
              {loading
                ? "Generating..."
                : "Generate Video"}
            </button>

          </div>

          <div className="lg:col-span-2">

            {videos.length >
            0 ? (

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {videos.map(
                  (
                    video,
                    index
                  ) => (
                    <div
                      key={
                        index
                      }
                      className="bg-[#0b1120] border border-white/10 rounded-3xl overflow-hidden"
                    >
                      <video
                        src={
                          video
                        }
                        controls
                        className="w-full"
                      />

                      <div className="p-4">

                        <a
                          href={
                            video
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center bg-cyan-600 hover:bg-cyan-500 rounded-xl py-3"
                        >
                          Download
                          Video{" "}
                          {index +
                            1}
                        </a>

                      </div>
                    </div>
                  )
                )}

              </div>

            ) : (

              <div className="aspect-video rounded-3xl border border-white/10 bg-black/20 flex items-center justify-center">

                <div className="text-gray-500">
                  Generated
                  video
                  preview
                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}