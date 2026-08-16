import { getPerformanceHistory } from "../utils/historyStorage";
import { analyzeHabits } from "../utils/habitAnalysis";
import { Brain, Sparkles } from "lucide-react";

function HabitInsights() {
  const history = getPerformanceHistory();

  const insight = analyzeHabits(history);

  return (
    <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-[var(--pk-primary)]/10 p-2.5 text-[var(--pk-primary)]">
          <Brain size={21} />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Habit Insights
          </h2>

          <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
            Patterns discovered from your check-ins
          </p>
        </div>

      </div>


      {/* Insight */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--pk-primary)]/15 bg-[var(--pk-primary)]/5 p-5">

        {/* Decorative glow */}
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--pk-primary)] opacity-10 blur-2xl" />

        <div className="relative flex gap-3">

          <Sparkles
            size={18}
            className="mt-1 shrink-0 text-[var(--pk-primary)]"
          />

          <p className="leading-relaxed text-[var(--pk-text)]">
            {insight.message}
          </p>

        </div>

      </div>

    </div>
  );
}

export default HabitInsights;