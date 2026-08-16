import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { TrendingUp } from "lucide-react";
import { getPerformanceHistory } from "../utils/historyStorage";

function PerformanceChart() {
  const history = getPerformanceHistory();

  const data = history.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-IN", {
      weekday: "short",
    }),
    score: Number(item.score || 0),
  }));

  return (
    <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-[var(--pk-primary)]/10 p-2.5 text-[var(--pk-primary)]">
            <TrendingUp size={21} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Performance Trend
            </h2>

            <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
              Your performance over time
            </p>
          </div>

        </div>

        <div className="hidden rounded-full bg-[var(--pk-surface-soft)] px-3 py-1 text-xs font-semibold text-[var(--pk-text-muted)] sm:block">
          {history.length} check-ins
        </div>

      </div>


      {/* Chart */}
      <div className="h-[300px]">

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
              stroke="var(--pk-border)"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="date"
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
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
              labelStyle={{
                color: "var(--pk-text-muted)",
                marginBottom: "4px",
              }}
              formatter={(value) => [
                `${value}/100`,
                "Performance",
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

export default PerformanceChart;