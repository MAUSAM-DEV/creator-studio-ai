export default function CreatorReadyCard() {
  return (
    <div className="border border-green-500/30 bg-green-500/10 rounded-2xl p-5">

      <div className="flex items-center gap-3">

        <div className="w-3 h-3 rounded-full bg-green-400" />

        <div>

          <div className="font-semibold text-green-300">
            Creator Ready
          </div>

          <div className="text-sm text-gray-400">
            Workflow configured and ready for production.
          </div>

        </div>

      </div>

    </div>
  );
}