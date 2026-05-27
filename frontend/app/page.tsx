"use client";

import Link from "next/link";

import {
  Sparkles,
  ImageIcon,
  Video,
  Workflow,
  Settings,
} from "lucide-react";

const tools = [
  {
    title: "AI Images",
    desc: "Generate cinematic AI artwork and concept visuals.",
    icon: ImageIcon,
    href: "/images",
  },
  {
    title: "AI Videos",
    desc: "Create futuristic AI generated cinematic videos.",
    icon: Video,
    href: "/videos",
  },
  {
    title: "Workflows",
    desc: "Automate your creator pipelines with AI agents.",
    icon: Workflow,
    href: "/workflows",
  },
  {
    title: "Settings",
    desc: "Control APIs, models, rendering and exports.",
    icon: Settings,
    href: "/settings",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_40%)]" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
            <Sparkles size={16} />
            Creator Studio OS
          </div>

          <h1 className="text-6xl md:text-7xl font-black leading-tight max-w-5xl">
            Build The Future Of{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              AI Creation
            </span>
          </h1>

          <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-relaxed">
            Professional AI creator operating system for cinematic images,
            videos, automation and next generation creator workflows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <Link
                key={index}
                href={tool.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:border-cyan-400/30
                  hover:bg-white/[0.06]
                  hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    from-cyan-400/5
                    to-purple-500/5
                    pointer-events-none
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-cyan-400/10
                      flex
                      items-center
                      justify-center
                      mb-10
                    "
                  >
                    <Icon
                      size={30}
                      className="text-cyan-300"
                    />
                  </div>

                  <h2 className="text-3xl font-bold mb-4">
                    {tool.title}
                  </h2>

                  <p className="text-zinc-400 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}