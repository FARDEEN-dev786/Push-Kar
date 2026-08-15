import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";
import { MessageCircle } from "lucide-react";

function TodaySummary() {
  const { performanceData } = useContext(PerformanceContext);

  let message = "";
  let color = "text-white";
  let status = "";

  if (performanceData.score >= 85) {
    message = "🔥 Outstanding day! Keep the momentum going.";
    color = "text-green-400";
    status = "Excellent";
  } else if (performanceData.score >= 70) {
    message =
      "💪 You're doing well. Small improvements can make today even better.";
    color = "text-cyan-400";
    status = "Good";
  } else if (performanceData.score >= 50) {
    message =
      "⚡ Decent progress. Focus on sleep, study, or hydration.";
    color = "text-yellow-400";
    status = "Needs Attention";
  } else {
    message =
      "🌱 Every day is a fresh start. Let's build a better tomorrow.";
    color = "text-red-400";
    status = "Keep Going";
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-3">

          <div className="bg-slate-900 p-2 rounded-xl text-cyan-400">
            <MessageCircle size={20} />
          </div>

          <h2 className="text-2xl font-bold">
            Today's Summary
          </h2>

        </div>

        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 ${color}`}
        >
          {status}
        </span>

      </div>

      {/* Message */}
      <div className="bg-slate-900 rounded-xl p-4">

        <p className={`${color} leading-relaxed`}>
          {message}
        </p>

      </div>

      {/* Score reference */}
      <div className="flex justify-between items-center mt-4 text-sm">

        <span className="text-gray-500">
          Today's score
        </span>

        <span className="font-semibold text-gray-300">
          {performanceData.score}/100
        </span>

      </div>

    </div>
  );
}

export default TodaySummary;