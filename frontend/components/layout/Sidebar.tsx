"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  ImageIcon,
  Clapperboard,
  Film,
  Music4,
  Workflow,
  Home,
  FolderKanban,
  Library,
  History,
  ListOrdered,
  Settings,
} from "lucide-react";

const mainLinks = [
  {
    name: "Home",
    route: "/",
    icon: Home,
  },
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: LayoutDashboard,
  },
];

const createLinks = [
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

const assetLinks = [
  {
    name: "Projects",
    route: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Library",
    route: "/library",
    icon: Library,
  },
  {
    name: "History",
    route: "/history",
    icon: History,
  },
  {
    name: "Queue",
    route: "/queue",
    icon: ListOrdered,
  },
];

const systemLinks = [
  {
    name: "Settings",
    route: "/settings",
    icon: Settings,
  },
];

function LinkGroup({
  title,
  links,
}: {
  title?: string;
  links: {
    name: string;
    route: string;
    icon: any;
  }[];
}) {
  return (
    <div className="space-y-2">
      {title && (
        <div className="pt-4">
          <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-3">
            {title}
          </div>
          <div className="border-t border-white/10 mb-3" />
        </div>
      )}

      {links.map((link) => {
        const Icon = link.icon;

        return (
          <Link key={link.route} href={link.route}>
            <div className="group flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5 p-4 rounded-2xl transition-all duration-200">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-all">
                <Icon
                  size={20}
                  className="group-hover:text-cyan-400 transition-all"
                />
              </div>

              <span className="font-medium">{link.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#0b1120] border-r border-white/10 p-6">
      <h1 className="text-3xl font-bold text-white mb-10">
        Mausam AI
      </h1>

      <nav className="space-y-4">
        <LinkGroup links={mainLinks} />

        <LinkGroup
          title="Create"
          links={createLinks}
        />

        <LinkGroup
          title="Assets"
          links={assetLinks}
        />

        <LinkGroup
          title="System"
          links={systemLinks}
        />
      </nav>
    </aside>
  );
}