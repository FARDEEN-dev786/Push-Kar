import { TrendingUp } from "lucide-react";

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700 flex justify-between items-center">
      <div>
        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <h2 className="text-2xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div className="text-cyan-400">
        {icon}
      </div>
    </div>
  );
}

export default StatCard;