import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";
import { Sparkles } from "lucide-react";

function TodaySummary() {
  const { performanceData } = useContext(PerformanceContext);

  let message = "";
  let color = "text-[var(--pk-text)]";
  let accent = "var(--pk-primary)";
  let label = "Keep going";

  if (performanceData.score >= 85) {
    message = "Outstanding day! Keep the momentum going.";
    color = "text-emerald-400";
    accent = "var(--pk-success)";
    label = "Excellent";
  } else if (performanceData.score >= 70) {
    message =
      "You're doing well. Small improvements can make today even better.";
    color = "text-[var(--pk-secondary)]";
    accent = "var(--pk-secondary)";
    label = "Doing well";
  } else if (performanceData.score >= 50) {
    message =
      "Decent progress. Focus on sleep, study, or hydration.";
    color = "text-amber-400";
    accent = "var(--pk-warning)";
    label = "Room to improve";
  } else {
    message =
      "Every day is a fresh start. Let's build a better tomorrow.";
    color = "text-rose-400";
    accent = "var(--pk-danger)";
    label = "Fresh start";
  }

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg"
      style={{
        "--summary-accent": accent,
      }}
    >

      {/* Accent glow */}
      <div
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-15 blur-3xl"
        style={{
          backgroundColor: "var(--summary-accent)",
        }}
      />

      <div className="relative">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div
              className="rounded-xl p-2.5"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--summary-accent) 12%, transparent)",
                color: "var(--summary-accent)",
              }}
            >
              <Sparkles size={20} />
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Today's Summary
              </h2>

              <p className="text-xs text-[var(--pk-text-muted)]">
                Your current momentum
              </p>
            </div>

          </div>

          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--summary-accent) 12%, transparent)",
              color: "var(--summary-accent)",
            }}
          >
            {label}
          </span>

        </div>


        {/* Message */}
        <div className="mt-5">

          <p className={`text-sm leading-6 ${color}`}>
            {message}
          </p>

        </div>


        {/* Score indicator */}
        <div className="mt-5">

          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-[var(--pk-text-muted)]">
              Today's score
            </span>

            <span className="text-xs font-semibold">
              {performanceData.score}/100
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[var(--pk-surface-soft)]">

            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(
                  Math.max(performanceData.score, 0),
                  100
                )}%`,
                backgroundColor: "var(--summary-accent)",
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default TodaySummary;