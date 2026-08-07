import { getPerformanceHistory } from "../utils/historyStorage";
import { analyzeHabits } from "../utils/habitAnalysis";

function HabitInsights() {
  const history = getPerformanceHistory();

  const insight = analyzeHabits(history);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        🧠 Habit Insights
      </h2>

      <p className="text-cyan-300">
        {insight.message}
      </p>
    </div>
  );
}

export default HabitInsights;