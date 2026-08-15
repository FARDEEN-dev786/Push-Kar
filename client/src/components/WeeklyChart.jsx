import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
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
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">

      {/* Header */}
      <div className="flex justify-between items-start mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Weekly Performance
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Your performance throughout the week
          </p>
        </div>

        <div className="text-xs font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full">
          7 Days
        </div>

      </div>

      {/* Chart */}
      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#e2e8f0",
              }}
              labelStyle={{
                color: "#94a3b8",
              }}
            />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#22d3ee",
              }}
              activeDot={{
                r: 6,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WeeklyChart;