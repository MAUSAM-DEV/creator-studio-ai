import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="flex-1 flex flex-col">

  <Topbar />

  <div className="p-10">

    <h1 className="text-4xl font-bold mb-4">
      Creator Studio AI
    </h1>

    <p className="text-gray-400 text-lg mb-10">
      Professional AI Creator Platform
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      <DashboardCard
        title="AI Image Generation"
        description="Generate cinematic AI images and artwork."
      />

      <DashboardCard
        title="AI Video Generation"
        description="Create AI cinematic videos and reels."
      />

      <DashboardCard
        title="Workflow Automation"
        description="Build automated AI content pipelines."
      />

    </div>

  </div>

</section>

    </main>
  );
}