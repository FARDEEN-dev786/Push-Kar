import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";

function TodaySummary() {
  const { performanceData } = useContext(PerformanceContext);

  let message = "";
  let color = "text-white";

  if (performanceData.score >= 85) {
    message = "🔥 Outstanding day! Keep the momentum going.";
    color = "text-green-400";
  } else if (performanceData.score >= 70) {
    message = "💪 You're doing well. Small improvements can make today even better.";
    color = "text-cyan-400";
  } else if (performanceData.score >= 50) {
    message = "⚡ Decent progress. Focus on sleep, study, or hydration.";
    color = "text-yellow-400";
  } else {
    message = "🌱 Every day is a fresh start. Let's build a better tomorrow.";
    color = "text-red-400";
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-3">
        Today's Summary
      </h2>

      <p className={color}>
        {message}
      </p>
    </div>
  );
}

export default TodaySummary;