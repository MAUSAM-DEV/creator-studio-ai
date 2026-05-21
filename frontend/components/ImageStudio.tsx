"use client";

import { useEffect, useState } from "react";

import {
  getProjects,
} from "@/lib/core/projectManager";

const imageModels = [
  {
    label: "GPT Image 1",
    value: "openai",
  },
  {
    label: "FLUX",
    value: "flux",
  },
  {
    label: "Ideogram",
    value: "ideogram",
  },
  {
    label: "Recraft",
    value: "recraft",
  },
];

export default function ImageStudio() {
  const [prompt, setPrompt] =
    useState("");

  const [provider, setProvider] =
    useState("openai");

  const [imageCount, setImageCount] =
    useState(1);

  const [images, setImages] =
    useState<string[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [projects, setProjects] =
    useState<any[]>([]);

  const [selectedProject, setSelectedProject] =
    useState("");

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  async function generateImage() {

    if (!prompt) return;

    setLoading(true);

    try {

      const response =
        await fetch(
          "/api/generate-image",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              prompt,
              provider,
              count:
                imageCount,
              projectId:
                selectedProject,
            }),
          }
        );

      const data =
        await response.json();

      if (data.images) {
        setImages(
          data.images
        );
      } else {
        alert(
          data.error ||
            "Image generation failed"
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
          Create Cinematic AI Art
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Generate ultra realistic
          AI visuals, concept art,
          cinematic shots,
          thumbnails and futuristic
          imagery.
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
              placeholder="Describe your cinematic AI image..."
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
                Model
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
                {imageModels.map(
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

            <div className="mt-6">

              <label className="block text-sm mb-3 text-gray-400">
                Number Of Images
              </label>

              <select
                value={
                  imageCount
                }
                onChange={(e) =>
                  setImageCount(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4"
              >
                <option value={1}>
                  1 Image
                </option>

                <option value={2}>
                  2 Images
                </option>

                <option value={3}>
                  3 Images
                </option>

                <option value={4}>
                  4 Images
                </option>
              </select>

            </div>

            <button
              onClick={
                generateImage
              }
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl py-4 text-lg font-semibold"
            >
              {loading
                ? "Generating..."
                : "Generate Images"}
            </button>

          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-6">

            {images.length >
            0 ? (

              images.map(
                (
                  image,
                  index
                ) => (
                  <img
                    key={
                      index
                    }
                    src={
                      image
                    }
                    alt="AI Generated"
                    className="rounded-3xl border border-white/10 object-cover w-full aspect-square"
                  />
                )
              )

            ) : (

              [1, 2, 3, 4].map(
                (item) => (
                  <div
                    key={item}
                    className="aspect-square rounded-3xl border border-white/10 bg-black/20 flex items-center justify-center text-gray-500"
                  >
                    Generated
                    image
                    preview
                  </div>
                )
              )

            )}

          </div>

        </div>

      </div>

    </div>
  );
}