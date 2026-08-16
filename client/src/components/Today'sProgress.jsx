import { getGoals } from "../utils/goalsStorage";
import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";
import {
  BookOpen,
  Target,
  Droplets,
  Moon,
  Dumbbell,
  Check,
} from "lucide-react";

const icons = {
  study: BookOpen,
  focus: Target,
  water: Droplets,
  sleep: Moon,
  exercise: Dumbbell,
};

const units = {
  study: "hrs",
  focus: "hrs",
  water: "L",
  sleep: "hrs",
};

function TodaysProgress() {
  const { performanceData } = useContext(PerformanceContext);
  const goals = getGoals();

  if (!goals.length) {
    return (
      <div className="pk-surface rounded-2xl p-6">
        <h2 className="text-xl font-bold pk-text">
          Today's Progress
        </h2>

        <p className="pk-muted mt-2">
          Add some goals to start tracking your daily progress.
        </p>
      </div>
    );
  }

  const completedGoals = goals.filter((goal) => {
    if (goal.type === "exercise") {
      return performanceData.exercise;
    }

    return (
      Number(performanceData[goal.type] || 0) >=
      Number(goal.target)
    );
  }).length;

  return (
    <div className="pk-surface rounded-2xl p-6 pk-glow">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold pk-text">
            Today's Progress
          </h2>

          <p className="text-sm pk-muted mt-1">
            Keep pushing toward your goals.
          </p>
        </div>

        <div className="text-sm font-semibold pk-primary">
          {completedGoals}/{goals.length} completed
        </div>
      </div>

      {/* Goals */}
      <div className="space-y-5">
        {goals.map((goal) => {
          const Icon = icons[goal.type] || Target;
          const actual = performanceData[goal.type];

          if (goal.type === "exercise") {
            const completed = Boolean(actual);

            return (
              <div key={goal.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        completed
                          ? "pk-primary-bg text-white"
                          : "pk-surface-soft pk-muted"
                      }`}
                    >
                      {completed ? (
                        <Check size={18} />
                      ) : (
                        <Icon size={18} />
                      )}
                    </div>

                    <span className="font-medium pk-text">
                      Exercise
                    </span>
                  </div>

                  <span
                    className={
                      completed
                        ? "text-emerald-400 font-semibold"
                        : "pk-muted"
                    }
                  >
                    {completed ? "Completed" : "Not completed"}
                  </span>
                </div>

                {!completed && (
                  <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                    <div className="h-full w-0 rounded-full pk-primary-bg" />
                  </div>
                )}
              </div>
            );
          }

          const current = Number(actual || 0);
          const target = Number(goal.target || 0);

          const percentage =
            target > 0
              ? Math.min((current / target) * 100, 100)
              : 0;

          const completed = current >= target;

          return (
            <div key={goal.id} className="space-y-2">
              {/* Label */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl ${
                      completed
                        ? "pk-primary-bg text-white"
                        : "pk-surface-soft pk-primary"
                    }`}
                  >
                    {completed ? (
                      <Check size={18} />
                    ) : (
                      <Icon size={18} />
                    )}
                  </div>

                  <span className="font-medium pk-text capitalize">
                    {goal.type}
                  </span>
                </div>

                <span className="text-sm pk-muted">
                  {current} / {target} {units[goal.type] || ""}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full pk-gradient transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* Status */}
              <div className="flex justify-between text-xs">
                <span className="pk-muted">
                  {Math.round(percentage)}% complete
                </span>

                {completed && (
                  <span className="text-emerald-400 font-medium">
                    Goal achieved 🎉
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodaysProgress;