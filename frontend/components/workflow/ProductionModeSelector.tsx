"use client";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

const modes = [
  {
    name: "Draft",
    description:
      "Fast Testing",
  },

  {
    name: "Standard",
    description:
      "Balanced Output",
  },

  {
    name: "Creative",
    description:
      "More Variations",
  },

  {
    name: "Studio",
    description:
      "Maximum Quality",
  },
];

export default function ProductionModeSelector({
  value,
  onChange,
}: Props) {
  return (
    <div>

      <h3 className="text-lg font-semibold mb-4">
        Production Mode
      </h3>

      <div className="grid grid-cols-2 gap-4">

        {modes.map((mode) => (

          <button
            key={mode.name}
            onClick={() =>
              onChange(
                mode.name
              )
            }
            className={`p-5 rounded-2xl border transition text-left
              ${
                value ===
                mode.name
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-white/10 bg-black/20 hover:bg-black/30"
              }`}
          >

            <div className="font-semibold">
              {mode.name}
            </div>

            <div className="text-sm text-gray-400 mt-1">
              {
                mode.description
              }
            </div>

          </button>

        ))}

      </div>

    </div>
  );
}