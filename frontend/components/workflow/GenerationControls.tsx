"use client";

interface Props {
  imageCount: number;
  setImageCount: (value: number) => void;

  videoCount: number;
  setVideoCount: (value: number) => void;

  duration: number;
  setDuration: (value: number) => void;

  aspectRatio: string;
  setAspectRatio: (value: string) => void;
}

export default function GenerationControls({
  imageCount,
  setImageCount,
  videoCount,
  setVideoCount,
  duration,
  setDuration,
  aspectRatio,
  setAspectRatio,
}: Props) {
  return (
    <div className="bg-black/20 border border-white/10 rounded-2xl p-6">

      <h3 className="text-xl font-semibold mb-6">
        Generation Controls
      </h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2">
            Image Count
          </label>

          <input
            type="number"
            min={1}
            max={10}
            value={imageCount}
            onChange={(e) =>
              setImageCount(
                Number(e.target.value)
              )
            }
            className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-2">
            Video Count
          </label>

          <input
            type="number"
            min={1}
            max={5}
            value={videoCount}
            onChange={(e) =>
              setVideoCount(
                Number(e.target.value)
              )
            }
            className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-2">
            Duration (seconds)
          </label>

          <select
            value={duration}
            onChange={(e) =>
              setDuration(
                Number(e.target.value)
              )
            }
            className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={60}>60</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">
            Aspect Ratio
          </label>

          <select
            value={aspectRatio}
            onChange={(e) =>
              setAspectRatio(
                e.target.value
              )
            }
            className="w-full bg-black/30 border border-white/10 rounded-xl p-3"
          >
            <option value="9:16">
              9:16 Vertical
            </option>

            <option value="16:9">
              16:9 Landscape
            </option>

            <option value="1:1">
              1:1 Square
            </option>

            <option value="4:5">
              4:5 Social
            </option>

          </select>
        </div>

      </div>

    </div>
  );
}