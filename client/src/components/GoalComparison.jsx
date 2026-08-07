import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";
import { getGoals } from "../utils/goalsStorage";
import { compareGoals } from "../utils/goalComparison";

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

    return (
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mt-6">
            <h2 className="text-2xl font-bold mb-6">
                🎯 Goal Comparison
            </h2>

            <div className="space-y-4">

                {comparison.map((goal) => (

                    <div
                        key={goal.id}
                        className="bg-slate-900 rounded-xl p-4"
                    >

                        <h3 className="font-semibold capitalize">
                            {goal.type}
                        </h3>

                        <p>
                            Goal:{" "}
                            {goal.type === "exercise"
                                ? "Yes"
                                : goal.target}
                        </p>

                        <p>
                            Actual:{" "}
                            {goal.type === "exercise"
                                ? goal.actual
                                    ? "Yes"
                                    : "No"
                                : goal.actual}
                        </p>

                        <p
                            className={
                                goal.status === "success"
                                    ? "text-green-400"
                                    : goal.status === "warning"
                                        ? "text-yellow-400"
                                        : "text-red-400"
                            }
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