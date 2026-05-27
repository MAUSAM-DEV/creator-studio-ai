"use client";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

const platforms = [
  {
    name: "Multi Platform",
    description:
      "Generate Once, Publish Everywhere",
  },

  {
    name: "YouTube Shorts",
    description:
      "Short Form Video",
  },

  {
    name: "Instagram Reels",
    description:
      "Reels Optimized",
  },

  {
    name: "Facebook Reels",
    description:
      "Social Distribution",
  },

  {
    name: "TikTok",
    description:
      "Viral Short Content",
  },
];

export default function PlatformSelector({
  value,
  onChange,
}: Props) {
  return (
    <div>

      <h3 className="text-lg font-semibold mb-4">
        Distribution Platform
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {platforms.map(
          (platform) => (

            <button
              key={platform.name}
              onClick={() =>
                onChange(
                  platform.name
                )
              }
              className={`p-5 rounded-2xl border transition text-left
              ${
                value ===
                platform.name
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-white/10 bg-black/20 hover:bg-black/30"
              }`}
            >

              <div className="font-semibold">
                {platform.name}
              </div>

              <div className="text-sm text-gray-400 mt-1">
                {
                  platform.description
                }
              </div>

            </button>

          )
        )}

      </div>

    </div>
  );
}