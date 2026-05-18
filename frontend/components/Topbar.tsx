export default function Topbar() {
  return (
    <header className="w-full h-16 border-b border-gray-800 bg-[#0f0f0f] flex items-center justify-between px-6">

      <div>
        <h2 className="text-xl font-semibold">
          Creator Studio AI
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-2 rounded-xl text-sm font-medium">
          Upgrade
        </button>

        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
          M
        </div>

      </div>

    </header>
  );
}