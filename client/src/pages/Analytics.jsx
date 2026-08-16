import { getPerformanceHistory } from "../utils/historyStorage";
import { calculateStreak } from "../utils/streakCalculator";

import PerformanceChart from "../components/PerformanceChart";
import WeeklyReport from "../components/WeeklyReport";
import HabitInsights from "../components/HabitInsights";
import MonthlyReport from "../components/MonthlyReport";
import WeeklyComparison from "../components/WeeklyComparison";

import {
  TrendingUp,
  TrendingDown,
  Moon,
  Smile,
  Flame,
  Trophy,
  ClipboardCheck,
} from "lucide-react";

function Analytics() {
  const history = getPerformanceHistory();
  const streak = calculateStreak(history);

  if (history.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--pk-primary)]/10 text-[var(--pk-primary)]">
            <TrendingUp size={26} />
          </div>

          <h1 className="text-3xl font-bold">
            Analytics
          </h1>

          <p className="mt-3 text-[var(--pk-text-muted)]">
            Complete a few daily check-ins to unlock your analytics.
          </p>

        </div>
      </div>
    );
  }

  const totalScore = history.reduce(
    (sum, day) => sum + Number(day.score || 0),
    0
  );

  const averageScore = (
    totalScore / history.length
  ).toFixed(1);

  const highestScore = Math.max(
    ...history.map((day) => Number(day.score || 0))
  );

  const lowestScore = Math.min(
    ...history.map((day) => Number(day.score || 0))
  );

  const averageSleep = (
    history.reduce(
      (sum, day) => sum + Number(day.sleep || 0),
      0
    ) / history.length
  ).toFixed(1);

  const averageMood = (
    history.reduce(
      (sum, day) => sum + Number(day.mood || 0),
      0
    ) / history.length
  ).toFixed(1);

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="mt-1 text-sm text-[var(--pk-text-muted)]">
          Understand your performance and discover your patterns.
        </p>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <AnalyticsStat
          title="Average Score"
          value={averageScore}
          suffix="/100"
          icon={<TrendingUp size={20} />}
          accent="primary"
        />

        <AnalyticsStat
          title="Highest Score"
          value={highestScore}
          suffix="/100"
          icon={<Trophy size={20} />}
          accent="success"
        />

        <AnalyticsStat
          title="Lowest Score"
          value={lowestScore}
          suffix="/100"
          icon={<TrendingDown size={20} />}
          accent="danger"
        />

        <AnalyticsStat
          title="Total Check-ins"
          value={history.length}
          icon={<ClipboardCheck size={20} />}
          accent="secondary"
        />

      </div>


      {/* Secondary Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <AnalyticsStat
          title="Average Sleep"
          value={averageSleep}
          suffix="hrs"
          icon={<Moon size={20} />}
          accent="secondary"
        />

        <AnalyticsStat
          title="Average Mood"
          value={averageMood}
          suffix="/10"
          icon={<Smile size={20} />}
          accent="primary"
        />

        <AnalyticsStat
          title="Current Streak"
          value={streak.current}
          suffix="days"
          icon={<Flame size={20} />}
          accent="warning"
        />

        <AnalyticsStat
          title="Longest Streak"
          value={streak.longest}
          suffix="days"
          icon={<Trophy size={20} />}
          accent="success"
        />

      </div>


      {/* Main Chart */}
      <PerformanceChart />


      {/* Reports */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <WeeklyReport />

        <WeeklyComparison />

      </div>


      {/* Monthly + Insights */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <MonthlyReport />

        <HabitInsights />

      </div>

    </div>
  );
}


/* -------------------------------- */
/* Analytics Stat Card              */
/* -------------------------------- */

function AnalyticsStat({
  title,
  value,
  suffix,
  icon,
  accent,
}) {
  const accentClasses = {
    primary: {
      icon: "text-[var(--pk-primary)]",
      background: "bg-[var(--pk-primary)]/10",
    },

    secondary: {
      icon: "text-[var(--pk-secondary)]",
      background: "bg-[var(--pk-secondary)]/10",
    },

    success: {
      icon: "text-emerald-400",
      background: "bg-emerald-400/10",
    },

    warning: {
      icon: "text-amber-400",
      background: "bg-amber-400/10",
    },

    danger: {
      icon: "text-rose-400",
      background: "bg-rose-400/10",
    },
  };

  const colors =
    accentClasses[accent] ||
    accentClasses.primary;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-[var(--pk-text-muted)]">
            {title}
          </p>

          <div className="mt-2 flex items-baseline gap-1.5">

            <span className="text-2xl font-bold">
              {value}
            </span>

            {suffix && (
              <span className="text-xs text-[var(--pk-text-muted)]">
                {suffix}
              </span>
            )}

          </div>
        </div>

        <div
          className={`rounded-xl p-2.5 ${colors.background} ${colors.icon}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default Analytics;