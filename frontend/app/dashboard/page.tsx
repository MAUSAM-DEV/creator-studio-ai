import Link from "next/link";

import {
  ImageIcon,
  Clapperboard,
  Film,
  Music4,
  Workflow,
  Sparkles,
  Activity,
  FolderKanban,
} from "lucide-react";

const quickActions = [
  {
    title: "Image Studio",
    route: "/images",
    icon: ImageIcon,
  },

  {
    title: "Video Studio",
    route: "/videos",
    icon: Clapperboard,
  },

  {
    title: "Image To Video",
    route: "/image-to-video",
    icon: Film,
  },

  {
    title: "Music Studio",
    route: "/music",
    icon: Music4,
  },

  {
    title: "Production Workspace",
    route: "/workflows",
    icon: Workflow,
  },
];

const templates = [
  "YouTube Shorts",
  "AI Influencer Reel",
  "Faceless Channel",
  "Podcast Workflow",
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 mb-6">
            <Sparkles size={16} />
            Mausam AI Creator Studio
          </div>

          <h1 className="text-6xl font-bold leading-tight">
            Production
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Workspace
            </span>
          </h1>

          <p className="text-gray-400 text-xl mt-4 max-w-3xl">
            Professional AI content production platform for
            images, videos, music, automation and creator workflows.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2 space-y-8">

            {/* QUICK ACTIONS */}

            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Creator Tools
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                {quickActions.map((action) => {

                  const Icon = action.icon;

                  return (
                    <Link
                      key={action.route}
                      href={action.route}
                    >
                      <div className="group bg-black/20 hover:bg-black/40 border border-white/10 hover:border-cyan-500/30 rounded-3xl p-6 transition-all duration-300 cursor-pointer">

                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">

                          <Icon
                            size={26}
                            className="text-cyan-400"
                          />

                        </div>

                        <div className="font-semibold text-lg">
                          {action.title}
                        </div>

                      </div>
                    </Link>
                  );
                })}

              </div>

            </div>

            {/* TEMPLATES */}

            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Production Templates
              </h2>

              <div className="space-y-4">

                {templates.map((template) => (

                  <div
                    key={template}
                    className="bg-black/20 hover:bg-black/40 border border-white/10 rounded-2xl p-5 transition-all"
                  >
                    {template}
                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            {/* STATUS */}

            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <Activity
                  size={22}
                  className="text-green-400"
                />

                <h2 className="text-2xl font-bold">
                  Workflow Status
                </h2>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                <span className="text-green-400 font-medium">
                  Creator Ready
                </span>

              </div>

            </div>

            {/* PROJECT OVERVIEW */}

            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <FolderKanban
                  size={22}
                  className="text-cyan-400"
                />

                <h2 className="text-2xl font-bold">
                  Production Overview
                </h2>

              </div>

              <div className="space-y-4 text-gray-300">

                <div>
                  Total Projects: 0
                </div>

                <div>
                  Images Generated: 0
                </div>

                <div>
                  Videos Generated: 0
                </div>

                <div>
                  Music Generated: 0
                </div>

                <div>
                  Workflow Runs: 0
                </div>

              </div>

            </div>

            {/* SYSTEM STATUS */}

            <div className="bg-[#0b1120] border border-white/10 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                System Status
              </h2>

              <div className="space-y-4">

                <div className="text-green-400">
                  ● Core Engine Online
                </div>

                <div className="text-green-400">
                  ● Workflow Engine Online
                </div>

                <div className="text-green-400">
                  ● Template System Online
                </div>

                <div className="text-green-400">
                  ● Project Manager Online
                </div>

                <div className="text-green-400">
                  ● History Manager Online
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}