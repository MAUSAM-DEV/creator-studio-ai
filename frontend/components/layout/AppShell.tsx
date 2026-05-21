import Sidebar from "./Sidebar";
import Header from "./Header";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-[#030712]">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}