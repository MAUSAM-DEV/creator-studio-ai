"use client";

interface Props {
  title: string;
  options: string[];
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function ProviderSelector({
  title,
  options,
  value,
  onChange,
}: Props) {
  return (
    <div>

      <h3 className="text-lg font-semibold mb-4">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

        {options.map(
          (option) => (

            <button
              key={option}
              onClick={() =>
                onChange(option)
              }
              className={`rounded-xl p-4 border transition
              ${
                value === option
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-white/10 bg-black/20 hover:bg-black/30"
              }`}
            >
              {option}
            </button>

          )
        )}

      </div>

    </div>
  );
}