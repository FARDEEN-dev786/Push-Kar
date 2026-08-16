import { getWeeklyComparison } from "../utils/weeklyComparison";
import { ArrowUp, ArrowDown, Minus, BarChart3 } from "lucide-react";

function WeeklyComparison() {
  const { current, previous } = getWeeklyComparison();

  const metrics = [
    {
      label: "Average Score",
      current: current.score,
      previous: previous.score,
      suffix: "",
      decimals: 0,
    },
    {
      label: "Average Sleep",
      current: current.sleep,
      previous: previous.sleep,
      suffix: " hrs",
      decimals: 1,
    },
    {
      label: "Average Mood",
      current: current.mood,
      previous: previous.mood,
      suffix: "/10",
      decimals: 1,
    },
    {
      label: "Average Energy",
      current: current.energy,
      previous: previous.energy,
      suffix: "/10",
      decimals: 1,
    },
    {
      label: "Water",
      current: current.water,
      previous: previous.water,
      suffix: " L",
      decimals: 1,
    },
    {
      label: "Study",
      current: current.study,
      previous: previous.study,
      suffix: " hrs",
      decimals: 1,
    },
    {
      label: "Focus",
      current: current.focus,
      previous: previous.focus,
      suffix: " hrs",
      decimals: 1,
    },
    {
      label: "Exercise Days",
      current: current.exercise,
      previous: previous.exercise,
      suffix: "",
      decimals: 0,
    },
  ];

  return (
    <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-start gap-3">

        <div className="rounded-xl bg-[var(--pk-secondary)]/10 p-2.5 text-[var(--pk-secondary)]">
          <BarChart3 size={21} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Week vs Previous Week
          </h2>

          <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
            See how your performance is changing over time.
          </p>
        </div>

      </div>


      {/* Metrics */}
      <div className="space-y-3">

        {metrics.map((metric) => {

          const difference =
            metric.current - metric.previous;

          const percentageChange =
            metric.previous === 0
              ? null
              : (difference / metric.previous) * 100;

          const improved = difference > 0;
          const declined = difference < 0;

          let statusColor = "text-[var(--pk-text-muted)]";
          let statusBackground = "bg-[var(--pk-surface-soft)]";
          let StatusIcon = Minus;

          if (improved) {
            statusColor = "text-emerald-400";
            statusBackground = "bg-emerald-400/10";
            StatusIcon = ArrowUp;
          }

          if (declined) {
            statusColor = "text-rose-400";
            statusBackground = "bg-rose-400/10";
            StatusIcon = ArrowDown;
          }

          return (
            <div
              key={metric.label}
              className="rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface-soft)] p-4 transition-all duration-200 hover:border-[var(--pk-primary)]/30"
            >

              <div className="flex items-center justify-between gap-4">

                {/* Current */}
                <div className="min-w-0">

                  <p className="text-xs font-medium text-[var(--pk-text-muted)]">
                    {metric.label}
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    {metric.current.toFixed(metric.decimals)}
                    {metric.suffix}
                  </p>

                </div>


                {/* Previous + Change */}
                <div className="flex items-center gap-3">

                  <div className="hidden text-right sm:block">

                    <p className="text-[11px] text-[var(--pk-text-muted)]">
                      Previous
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {metric.previous.toFixed(
                        metric.decimals
                      )}
                      {metric.suffix}
                    </p>

                  </div>


                  <div
                    className={`flex items-center gap-1.5 rounded-xl px-3 py-2 ${statusBackground} ${statusColor}`}
                  >

                    <StatusIcon size={15} />

                    <span className="text-xs font-semibold">

                      {percentageChange === null
                        ? "No data"
                        : `${Math.abs(
                            percentageChange
                          ).toFixed(1)}%`}

                    </span>

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default WeeklyComparison;