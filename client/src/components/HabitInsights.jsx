import { getPerformanceHistory } from "../utils/historyStorage";
import { analyzeHabits } from "../utils/habitAnalysis";

function HabitInsights() {
  const history = getPerformanceHistory();

  const insight = analyzeHabits(history);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
      
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">
          🧠
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Habit Insights
          </h2>

          <p className="text-gray-400 text-sm">
            Patterns discovered from your check-ins
          </p>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-5">
        
        <p className="text-cyan-300 leading-relaxed">
          {insight.message}
        </p>

      </div>

    </div>
  );
}

export default HabitInsights;