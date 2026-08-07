import { getPerformanceHistory } from "../utils/historyStorage";
import { calculateStreak } from "../utils/streakCalculator";
import PerformanceChart from "../components/PerformanceChart";
import WeeklyReport from "../components/WeeklyReport";
import HabitInsights from "../components/HabitInsights";
import MonthlyReport from "../components/MonthlyReport";

function Analytics() {
  const history = getPerformanceHistory();
  const streak = calculateStreak(history);

  if (history.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-400 mt-4">
          No performance data yet.
        </p>
      </div>
    );
  }

  const totalScore = history.reduce(
    (sum, day) => sum + day.score,
    0
  );

  const averageScore = (
    totalScore / history.length
  ).toFixed(1);

  const highestScore = Math.max(
    ...history.map((day) => day.score)
  );

  const lowestScore = Math.min(
    ...history.map((day) => day.score)
  );

  const averageSleep = (
    history.reduce(
      (sum, day) => sum + Number(day.sleep),
      0
    ) / history.length
  ).toFixed(1);

  const averageMood = (
    history.reduce(
      (sum, day) => sum + Number(day.mood),
      0
    ) / history.length
  ).toFixed(1);

  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Stat
          title="Average Score"
          value={averageScore}
        />

        <Stat
          title="Highest Score"
          value={highestScore}
        />

        <Stat
          title="Lowest Score"
          value={lowestScore}
        />

        <Stat
          title="Total Check-ins"
          value={history.length}
        />

        <Stat
          title="Average Sleep"
          value={`${averageSleep} hrs`}
        />

        <Stat
          title="Average Mood"
          value={`${averageMood}/10`}
        />
        <Stat
          title="Current Streak"
          value={`${streak.current} Days 🔥`}
        />

        <Stat
          title="Longest Streak"
          value={`${streak.longest} Days 🏆`}
        />
        <PerformanceChart />
        <WeeklyReport />
        <MonthlyReport />
        <HabitInsights />

      </div>

    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <h2 className="text-gray-400">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-3">
        {value}
      </p>
    </div>
  );
}

export default Analytics;