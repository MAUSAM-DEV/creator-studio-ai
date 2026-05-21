"use client";

const tools = [
  {
    category: "Images",
    items: [
      "FLUX",
      "Ideogram",
      "Recraft",
      "Imagen",
    ],
  },

  {
    category: "Videos",
    items: [
      "Kling",
      "Seedance",
      "Google Veo",
      "Higgsfield",
      "Runway",
      "PixVerse",
      "Hailuo",
      "Luma",
    ],
  },

  {
    category: "Music",
    items: [
      "Suno",
      "Udio",
      "Mureka",
      "Stable Audio",
      "ElevenLabs Music",
    ],
  },

  {
    category: "Providers",
    items: [
      "FAL",
      "OpenAI",
      "Replicate",
      "Segmind",
      "RunPod",
      "ComfyUI",
    ],
  },
];

export default function ToolsStudio() {
  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold mb-8">
        AI Tools Marketplace
      </h1>

      <div className="space-y-8">

        {tools.map((section) => (

          <div
            key={section.category}
            className="bg-[#0b1120] border border-white/10 rounded-3xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4">
              {section.category}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {section.items.map((tool) => (

                <div
                  key={tool}
                  className="bg-black/20 border border-white/10 rounded-xl p-4 text-center"
                >
                  {tool}
                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}