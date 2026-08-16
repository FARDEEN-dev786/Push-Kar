import { getPerformanceHistory } from "../utils/historyStorage";
import { generateWeeklyReport } from "../utils/reportGenerator";
import { CalendarDays, TrendingUp } from "lucide-react";

function WeeklyReport() {
  const history = getPerformanceHistory();
  const report = generateWeeklyReport(history);

  if (!report) {
    return (
      <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6">
        <p className="text-sm text-[var(--pk-text-muted)]">
          No weekly data available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-[var(--pk-primary)]/10 p-2.5 text-[var(--pk-primary)]">
            <CalendarDays size={21} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Weekly Report
            </h2>

            <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
              A snapshot of your last 7 days
            </p>
          </div>

        </div>

        <TrendingUp
          size={20}
          className="text-[var(--pk-secondary)]"
        />

      </div>


      {/* Metrics */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

        <ReportItem
          label="Average Score"
          value={`${report.averageScore}/100`}
          highlight
        />

        <ReportItem
          label="Best Score"
          value={report.bestScore}
          highlight
        />

        <ReportItem
          label="Average Sleep"
          value={`${report.averageSleep} hrs`}
        />

        <ReportItem
          label="Average Mood"
          value={`${report.averageMood}/10`}
        />

        <ReportItem
          label="Average Energy"
          value={`${report.averageEnergy}/10`}
        />

        <ReportItem
          label="Average Water"
          value={`${report.averageWater} L`}
        />

        <ReportItem
          label="Study Hours"
          value={`${report.totalStudy} hrs`}
        />

      </div>

    </div>
  );
}


function ReportItem({
  label,
  value,
  highlight = false,
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition-colors ${
        highlight
          ? "border-[var(--pk-primary)]/20 bg-[var(--pk-primary)]/5"
          : "border-[var(--pk-border)] bg-[var(--pk-surface-soft)]"
      }`}
    >

      <p className="text-xs font-medium text-[var(--pk-text-muted)]">
        {label}
      </p>

      <p
        className={`mt-2 text-xl font-bold ${
          highlight
            ? "text-[var(--pk-primary)]"
            : ""
        }`}
      >
        {value}
      </p>

    </div>
  );
}

export default WeeklyReport;