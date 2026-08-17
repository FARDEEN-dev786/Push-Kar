import { useContext } from "react";
import {
  Target,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

import { PerformanceContext } from "../context/PerformanceContext";
import { getGoals } from "../utils/goalsStorage";
import { compareGoals } from "../utils/goalComparison";

function GoalComparison() {
  const { performanceData } = useContext(PerformanceContext);

  const goals = getGoals();

  const comparison = compareGoals(
    goals,
    performanceData
  );

  if (!goals.length) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-[var(--pk-primary)]/10 p-2.5 text-[var(--pk-primary)]">
          <Target size={21} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Goal Comparison
          </h2>

          <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
            Today's progress against your goals
          </p>
        </div>

      </div>


      {/* Goals */}
      <div className="space-y-4">

        {comparison.map((goal) => {

          const isSuccess = goal.status === "success";
          const isWarning = goal.status === "warning";

          const Icon = isSuccess
            ? CheckCircle2
            : isWarning
              ? AlertTriangle
              : XCircle;

          const statusColor = isSuccess
            ? "text-emerald-400"
            : isWarning
              ? "text-amber-400"
              : "text-rose-400";

          const statusBackground = isSuccess
            ? "bg-emerald-400/10"
            : isWarning
              ? "bg-amber-400/10"
              : "bg-rose-400/10";

          return (
            <div
              key={goal.id}
              className="rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface-soft)] p-4 transition-all duration-200 hover:border-[var(--pk-primary)]/30"
            >

              {/* Goal title + status */}
              <div className="flex items-center justify-between gap-3">

                <div>
                  <h3 className="font-semibold capitalize">
                    {goal.type}
                  </h3>

                  <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
                    {goal.type === "exercise"
                      ? "Daily activity"
                      : "Daily target"}
                  </p>
                </div>

                <div
                  className={`rounded-lg p-2 ${statusBackground} ${statusColor}`}
                >
                  <Icon size={17} />
                </div>

              </div>


              {/* Values */}
              <div className="mt-4 flex items-end justify-between">

                <div>
                  <p className="text-xs text-[var(--pk-text-muted)]">
                    Progress
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    {goal.type === "exercise"
                      ? goal.actual
                        ? "Completed"
                        : "Not completed"
                      : `${goal.actual} / ${goal.target}`}
                  </p>
                </div>

                <p className={`text-sm font-bold ${statusColor}`}>
                  {goal.progress}%
                </p>

              </div>


              {/* Progress bar */}
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--pk-background)]">

                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isSuccess
                      ? "bg-emerald-400"
                      : isWarning
                        ? "bg-amber-400"
                        : "bg-rose-400"
                  }`}
                  style={{
                    width: `${goal.progress}%`,
                  }}
                />

              </div>


              {/* Status */}
              <p className={`mt-3 text-sm font-medium ${statusColor}`}>
                {goal.message}
              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default GoalComparison;