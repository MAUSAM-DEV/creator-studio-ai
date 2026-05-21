"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  ImageIcon,
  Clapperboard,
  Film,
  Music4,
  Workflow,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Images",
    route: "/images",
    icon: ImageIcon,
  },

  {
    name: "Videos",
    route: "/videos",
    icon: Clapperboard,
  },

  {
    name: "Image To Video",
    route: "/image-to-video",
    icon: Film,
  },

  {
    name: "Music",
    route: "/music",
    icon: Music4,
  },

  {
    name: "Workflows",
    route: "/workflows",
    icon: Workflow,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#0b1120] border-r border-white/10 p-6">

      <h1 className="text-3xl font-bold text-white mb-10">
        Mausam AI
      </h1>

      <nav className="space-y-3">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.route}
              href={link.route}
            >
              <div className="group flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 p-4 rounded-2xl transition-all duration-200">

                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-all">

                  <Icon
                    size={20}
                    className="group-hover:text-cyan-400 transition-all"
                  />

                </div>

                <span className="font-medium">
                  {link.name}
                </span>

              </div>
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}