import { getPerformanceHistory } from "../utils/historyStorage";
import { CalendarRange, Trophy } from "lucide-react";

function MonthlyReport() {
  const history = getPerformanceHistory();

  const month = history.slice(-30);

  if (!month.length) {
    return (
      <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6">
        <p className="text-sm text-[var(--pk-text-muted)]">
          No monthly data available.
        </p>
      </div>
    );
  }

  const average = (key) =>
    (
      month.reduce(
        (sum, day) => sum + Number(day[key] || 0),
        0
      ) / month.length
    ).toFixed(1);

  const totalStudy = month.reduce(
    (sum, day) => sum + Number(day.study || 0),
    0
  );

  const exerciseDays = month.filter(
    (d) => d.exercise
  ).length;

  const bestDay = month.reduce((best, day) =>
    day.score > best.score ? day : best
  );

  return (
    <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-[var(--pk-secondary)]/10 p-2.5 text-[var(--pk-secondary)]">
            <CalendarRange size={21} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Monthly Report
            </h2>

            <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
              Your performance across the last 30 days
            </p>
          </div>

        </div>

        <div className="hidden items-center gap-1.5 rounded-full bg-[var(--pk-surface-soft)] px-3 py-1.5 text-xs font-medium text-[var(--pk-text-muted)] sm:flex">
          {month.length} days
        </div>

      </div>


      {/* Metrics */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

        <Card
          title="Average Score"
          value={average("score")}
          suffix="/100"
          highlight
        />

        <Card
          title="Best Score"
          value={bestDay.score}
          icon={<Trophy size={16} />}
          highlight
        />

        <Card
          title="Average Sleep"
          value={average("sleep")}
          suffix=" hrs"
        />

        <Card
          title="Average Mood"
          value={average("mood")}
          suffix="/10"
        />

        <Card
          title="Study Hours"
          value={totalStudy}
          suffix=" hrs"
        />

        <Card
          title="Exercise Days"
          value={exerciseDays}
          suffix=" days"
        />

      </div>

    </div>
  );
}


function Card({
  title,
  value,
  suffix = "",
  icon,
  highlight = false,
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition-all duration-200 ${
        highlight
          ? "border-[var(--pk-secondary)]/20 bg-[var(--pk-secondary)]/5"
          : "border-[var(--pk-border)] bg-[var(--pk-surface-soft)]"
      }`}
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs font-medium text-[var(--pk-text-muted)]">
            {title}
          </p>

          <p
            className={`mt-2 text-xl font-bold ${
              highlight
                ? "text-[var(--pk-secondary)]"
                : ""
            }`}
          >
            {value}
            <span className="ml-1 text-xs font-medium text-[var(--pk-text-muted)]">
              {suffix}
            </span>
          </p>

        </div>

        {icon && (
          <div className="text-[var(--pk-secondary)]">
            {icon}
          </div>
        )}

      </div>

    </div>
  );
}

export default MonthlyReport;