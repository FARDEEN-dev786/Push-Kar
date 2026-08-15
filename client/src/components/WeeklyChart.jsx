import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { TrendingUp } from "lucide-react";

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
    <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-[var(--pk-secondary)]/10 p-2.5 text-[var(--pk-secondary)]">
            <TrendingUp size={21} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Weekly Performance
            </h2>

            <p className="text-xs text-[var(--pk-text-muted)] mt-1">
              Your performance throughout the week
            </p>
          </div>

        </div>

        <div className="hidden sm:block rounded-full bg-[var(--pk-surface-soft)] px-3 py-1 text-xs font-semibold text-[var(--pk-text-muted)]">
          This Week
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
              stroke="var(--pk-border)"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--pk-text-muted)",
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--pk-text-muted)",
                fontSize: 12,
              }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--pk-surface-soft)",
                border: "1px solid var(--pk-border)",
                borderRadius: "12px",
                color: "var(--pk-text)",
              }}
              labelStyle={{
                color: "var(--pk-text-muted)",
              }}
              formatter={(value) => [
                `${value}/100`,
                "Score",
              ]}
            />

            <Line
              type="monotone"
              dataKey="score"
              stroke="var(--pk-primary)"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "var(--pk-primary)",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 6,
                fill: "var(--pk-secondary)",
                strokeWidth: 0,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WeeklyChart;