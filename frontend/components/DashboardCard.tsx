type DashboardCardProps = {
  title: string;
  description: string;
};

export default function DashboardCard({
  title,
  description,
}: DashboardCardProps) {
  return (
    <div className="bg-[#151515] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300">

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>

    </div>
  );
}