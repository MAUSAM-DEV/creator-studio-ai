import Link from "next/link";
import {
  LayoutDashboard,
  ImageIcon,
  Video,
  Workflow,
  FolderOpen,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black border-r border-gray-900 p-6">

      <h1 className="text-5xl font-bold text-white mb-14 leading-tight">
        Creator Studio
      </h1>

      <nav className="space-y-8 text-gray-300">

        <Link
          href="/"
          className="flex items-center gap-4 hover:text-white transition-all"
        >
          <LayoutDashboard size={22} />
          Dashboard
        </Link>

        <Link
          href="/images"
          className="flex items-center gap-4 hover:text-white transition-all"
        >
          <ImageIcon size={22} />
          AI Images
        </Link>

        <Link
          href="/videos"
          className="flex items-center gap-4 hover:text-white transition-all"
        >
          <Video size={22} />
          AI Videos
        </Link>

        <Link
          href="/workflows"
          className="flex items-center gap-4 hover:text-white transition-all"
        >
          <Workflow size={22} />
          Workflows
        </Link>

        <Link
          href="/exports"
          className="flex items-center gap-4 hover:text-white transition-all"
        >
          <FolderOpen size={22} />
          Exports
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-4 hover:text-white transition-all"
        >
          <Settings size={22} />
          Settings
        </Link>

      </nav>
    </aside>
  );
}