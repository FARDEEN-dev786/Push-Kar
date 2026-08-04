import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", score: 70 },
  { day: "Tue", score: 78 },
  { day: "Wed", score: 82 },
  { day: "Thu", score: 76 },
  { day: "Fri", score: 91 },
  { day: "Sat", score: 88 },
  { day: "Sun", score: 95 },
];

function WeeklyChart() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">
        Weekly Performance
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#22d3ee"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeeklyChart;