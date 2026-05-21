"use client";

import { useState } from "react";

const videoModels = [
  "Kling",
  "Seedance",
  "Google Veo",
  "Higgsfield",
  "Luma Ray",
  "PixVerse",
  "Hailuo",
  "Runway",
  "Pika",
];

export default function ImageToVideoStudio() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("Kling");
  const [duration, setDuration] = useState(5);
  const [aspectRatio, setAspectRatio] =
    useState("16:9");

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-6">
          Image To Video Studio
        </h1>

        <p className="text-gray-400 text-xl mb-10">
          Convert images into cinematic AI videos.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6">

            <label className="block text-sm mb-3 text-gray-400">
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />

            <div className="mt-6">

              <label className="block text-sm mb-2 text-gray-400">
                Prompt
              </label>

              <textarea
                value={prompt}
                onChange={(e) =>
                  setPrompt(e.target.value)
                }
                placeholder="Describe motion..."
                className="w-full h-32 bg-black/30 border border-white/10 rounded-xl p-4"
              />

            </div>

            <div className="mt-4">

              <label className="block text-sm mb-2 text-gray-400">
                Model
              </label>

              <select
                value={model}
                onChange={(e) =>
                  setModel(e.target.value)
                }
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
              >
                {videoModels.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
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
                    Number(e.target.value)
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
                value={aspectRatio}
                onChange={(e) =>
                  setAspectRatio(
                    e.target.value
                  )
                }
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
              >
                <option value="16:9">
                  YouTube
                </option>

                <option value="9:16">
                  Shorts/Reels
                </option>

                <option value="1:1">
                  Square
                </option>
              </select>

            </div>

            <button
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl py-4 text-lg font-semibold"
            >
              Generate Video
            </button>

          </div>

          <div className="lg:col-span-2">

            <div className="aspect-video rounded-3xl border border-white/10 bg-black/20 flex items-center justify-center overflow-hidden">

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-500">
                  Image Preview
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}