import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { getPerformanceHistory } from "../utils/historyStorage";

function PerformanceChart() {
  const history = getPerformanceHistory();

  const data = history.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-IN", {
      weekday: "short",
    }),
    score: item.score,
  }));

  return (
    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
      <h2 className="text-2xl font-bold mb-6">
        Performance Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#06b6d4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;