"use client";

interface HeroSectionProps {
  topic: string;
  setTopic: (value: string) => void;
  onGenerate: () => void;
  loading: boolean;
}

export default function HeroSection({
  topic,
  setTopic,
  onGenerate,
  loading,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-10">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
          ✦ Mausam AI Creator Studio
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          CREATE
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ANYTHING
          </span>
        </h1>

        <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
          Images, Videos, Voiceovers, Music and Automated AI Workflows
          powered by multiple providers.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Describe what you want to create..."
            className="
              flex-1
              h-16
              rounded-2xl
              bg-black/40
              border
              border-white/10
              px-6
              text-lg
              outline-none
              focus:border-cyan-500/50
            "
          />

          <button
            onClick={onGenerate}
            disabled={loading}
            className="
              px-10
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              font-semibold
              hover:scale-[1.02]
              transition-all
            "
          >
            {loading ? "Generating..." : "Generate"}
          </button>

        </div>

      </div>
    </section>
  );
}