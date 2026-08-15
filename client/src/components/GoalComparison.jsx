import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";
import { getGoals } from "../utils/goalsStorage";
import { compareGoals } from "../utils/goalComparison";
import { Target, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

function GoalComparison() {
  const { performanceData } = useContext(PerformanceContext);

  const goals = getGoals();

  const comparison = compareGoals(
    goals,
    performanceData
  );

  if (!goals.length) {
    return null;
  }

  const getStatusIcon = (status) => {
    if (status === "success") {
      return (
        <CheckCircle2
          size={18}
          className="text-green-400"
        />
      );
    }

    if (status === "warning") {
      return (
        <AlertTriangle
          size={18}
          className="text-yellow-400"
        />
      );
    }

    return (
      <XCircle
        size={18}
        className="text-red-400"
      />
    );
  };

  const getStatusColor = (status) => {
    if (status === "success") {
      return "text-green-400";
    }

    if (status === "warning") {
      return "text-yellow-400";
    }

    return "text-red-400";
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <div className="bg-cyan-400/10 text-cyan-400 p-2 rounded-xl">
          <Target size={20} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Goal Comparison
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Compare today's performance with your goals
          </p>
        </div>

      </div>


      {/* Goals */}
      <div className="space-y-3">

        {comparison.map((goal) => (

          <div
            key={goal.id}
            className="bg-slate-900 rounded-xl p-4 border border-transparent hover:border-slate-700 transition"
          >

            {/* Goal title */}
            <div className="flex justify-between items-center gap-3">

              <h3 className="font-semibold capitalize">
                {goal.type}
              </h3>

              {getStatusIcon(goal.status)}

            </div>


            {/* Goal vs Actual */}
            <div className="grid grid-cols-2 gap-3 mt-4">

              <div className="bg-slate-800 rounded-lg p-3">

                <p className="text-gray-500 text-xs">
                  Goal
                </p>

                <p className="font-semibold mt-1">
                  {goal.type === "exercise"
                    ? "Yes"
                    : goal.target}
                </p>

              </div>


              <div className="bg-slate-800 rounded-lg p-3">

                <p className="text-gray-500 text-xs">
                  Actual
                </p>

                <p className="font-semibold mt-1">
                  {goal.type === "exercise"
                    ? goal.actual
                      ? "Yes"
                      : "No"
                    : goal.actual}
                </p>

              </div>

            </div>


            {/* Status message */}
            <p
              className={`text-sm mt-3 ${getStatusColor(
                goal.status
              )}`}
            >
              {goal.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default GoalComparison;