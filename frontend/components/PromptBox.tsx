"use client";

import { useState } from "react";

export default function PromptBox() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a prompt");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      setGeneratedImage(data.image);

    } catch (error) {
      console.error(error);
      alert("Generation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#151515] border border-gray-800 rounded-2xl p-6 w-full">

      <h2 className="text-2xl font-semibold mb-4 text-white">
        AI Image Generator
      </h2>

      <textarea
        placeholder="Describe your cinematic AI image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-40 bg-[#0a0a0a] border border-gray-700 rounded-xl p-4 text-white outline-none resize-none focus:border-blue-500"
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-xl text-white font-medium disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {generatedImage && (
        <div className="mt-8">

          <h3 className="text-xl font-semibold mb-4">
            Generated Image
          </h3>

          <img
            src={generatedImage}
            alt="Generated"
            className="rounded-2xl border border-gray-700 w-full max-w-2xl"
          />

        </div>
      )}

    </div>
  );
}