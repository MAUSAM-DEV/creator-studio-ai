import Sidebar from "./layout/Sidebar";
import Topbar from './Topbar';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex">
      <Sidebar />

      <div className="flex-1 ml-24">
        <Topbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}