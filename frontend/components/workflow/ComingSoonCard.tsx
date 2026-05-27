interface Props {
  title: string;
  description: string;
}

export default function ComingSoonCard({
  title,
  description,
}: Props) {
  return (
    <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

      <div className="flex items-center justify-between">

        <div>

          <div className="font-semibold">
            {title}
          </div>

          <div className="text-sm text-gray-400 mt-1">
            {description}
          </div>

        </div>

        <div className="text-yellow-400 text-sm">
          Coming Soon
        </div>

      </div>

    </div>
  );
}