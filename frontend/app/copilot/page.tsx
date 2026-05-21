"use client";

import { useState } from "react";

import {
  Bot,
  Send,
  Sparkles,
} from "lucide-react";

const presets = [
  "YouTube Script",
  "Thumbnail Prompt",
  "Video Idea",
  "SEO Pack",
];

export default function CopilotPage() {
  const [provider, setProvider] =
    useState("openai");

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="mb-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 mb-6">

            <Sparkles size={16} />

            Creator Copilot

          </div>

          <h1 className="text-6xl font-bold mb-4">
            Mausam AI Assistant
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl">
            AI-powered creator assistant for scripts,
            prompts, workflows, research, SEO and
            content production.
          </p>

        </div>

        {/* TOP BAR */}

        <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-6 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <h2 className="text-2xl font-bold">
                AI Provider
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Choose which model powers the assistant.
              </p>

            </div>

            <select
              value={provider}
              onChange={(e) =>
                setProvider(
                  e.target.value
                )
              }
              className="bg-black/20 border border-white/10 rounded-2xl px-5 py-3"
            >
              <option value="openai">
                OpenAI
              </option>

              <option value="gemini">
                Gemini
              </option>

            </select>

          </div>

        </div>

        {/* PRESETS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          {presets.map((preset) => (

            <button
              key={preset}
              className="bg-[#0b1120] border border-white/10 hover:border-cyan-500/30 rounded-2xl p-5 transition-all text-left"
            >

              <div className="font-semibold">
                {preset}
              </div>

            </button>

          ))}

        </div>

        {/* CHAT */}

        <div className="bg-[#0b1120] border border-white/10 rounded-3xl overflow-hidden">

          <div className="border-b border-white/10 p-5 flex items-center gap-3">

            <Bot
              size={22}
              className="text-cyan-400"
            />

            <span className="font-semibold">
              Creator Copilot
            </span>

            <span className="ml-auto text-green-400 text-sm">
              Ready
            </span>

          </div>

          <div className="h-[500px] overflow-y-auto p-6">

            <div className="max-w-2xl bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5">

              <div className="font-semibold text-cyan-400 mb-2">
                Mausam AI Assistant
              </div>

              <p className="text-gray-300">
                Welcome to Creator Copilot.

                Ask me to generate scripts,
                prompts, content ideas,
                SEO packs, workflows or
                creator research.
              </p>

            </div>

          </div>

          <div className="border-t border-white/10 p-5">

            <div className="flex gap-4">

              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-black/20 border border-white/10 rounded-2xl px-5 py-4"
              />

              <button
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center gap-2"
              >

                <Send size={18} />

                Send

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}