import { useContext, useEffect, useState } from "react";
import { getGoals, saveGoals } from "../utils/goalsStorage";
import { compareGoals } from "../utils/goalComparison";
import { PerformanceContext } from "../context/PerformanceContext";

import {
  Target,
  Plus,
  Trash2,
  Check,
  BookOpen,
  Moon,
  Droplets,
  Clock,
  Dumbbell,
} from "lucide-react";

const goalOptions = [
  {
    value: "study",
    label: "Study",
    icon: BookOpen,
  },
  {
    value: "sleep",
    label: "Sleep",
    icon: Moon,
  },
  {
    value: "water",
    label: "Water",
    icon: Droplets,
  },
  {
    value: "focus",
    label: "Focus",
    icon: Clock,
  },
  {
    value: "exercise",
    label: "Exercise",
    icon: Dumbbell,
  },
];

function Goals() {
  const [goals, setGoals] = useState([]);
  const [goalType, setGoalType] = useState("study");
  const [target, setTarget] = useState("");

  const { performanceData } = useContext(PerformanceContext);

  useEffect(() => {
    setGoals(getGoals());
  }, []);



  const addGoal = () => {
    if (!target || Number(target) <= 0) return;

    const newGoal = {
      id: Date.now(),
      type: goalType,
      target: Number(target),
      completed: false,
    };

    const updatedGoals = [...goals, newGoal];

    setGoals(updatedGoals);
    saveGoals(updatedGoals);

    setTarget("");
  };

  const toggleGoal = (id) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id
        ? { ...goal, completed: !goal.completed }
        : goal
    );

    setGoals(updatedGoals);
    saveGoals(updatedGoals);
  };

  const deleteGoal = (id) => {
    const updatedGoals = goals.filter(
      (goal) => goal.id !== id
    );

    setGoals(updatedGoals);
    saveGoals(updatedGoals);
  };

  const comparison = compareGoals(
    goals,
    performanceData
  );

  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  return (
    <div className="mx-auto max-w-4xl">

      {/* Header */}
      <div className="mb-8">

        <div className="mb-3 flex items-center gap-2 text-[var(--pk-primary)]">
          <Target size={18} />

          <span className="text-sm font-semibold">
            Personal Goals
          </span>
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">
              Daily Goals
            </h1>

            <p className="mt-2 text-[var(--pk-text-muted)]">
              Set small targets and stay consistent.
            </p>
          </div>

          {goals.length > 0 && (
            <div className="rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface)] px-4 py-3">

              <p className="text-xs text-[var(--pk-text-muted)]">
                Manual Progress
              </p>

              <p className="mt-1 font-bold">
                {completedGoals}/{goals.length} completed
              </p>

            </div>
          )}

        </div>

      </div>


      {/* Add Goal */}
      <div className="mb-6 rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-5 shadow-lg sm:p-6">

        <div className="mb-5">

          <h2 className="text-lg font-bold">
            Create a goal
          </h2>

          <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
            Choose a habit and set a target for yourself.
          </p>

        </div>


        <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">

          {/* Goal Type */}
          <select
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
            className="w-full appearance-none rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface-soft)] p-3.5 text-sm outline-none transition focus:border-[var(--pk-primary)]"
          >
            {goalOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>


          {/* Target */}
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="Target"
            min="0"
            step="0.1"
            className="w-full rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface-soft)] p-3.5 text-sm outline-none transition placeholder:text-[var(--pk-text-muted)] focus:border-[var(--pk-primary)] focus:ring-2 focus:ring-[var(--pk-primary)]/10"
          />


          {/* Add */}
          <button
            onClick={addGoal}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[var(--pk-primary)] px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
          >
            <Plus size={18} />
            Add Goal
          </button>

        </div>

      </div>


      {/* Goals */}
      {goals.length === 0 ? (

        <div className="rounded-3xl border border-dashed border-[var(--pk-border)] bg-[var(--pk-surface)] p-10 text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--pk-primary)]/10 text-[var(--pk-primary)]">
            <Target size={26} />
          </div>

          <h2 className="font-bold">
            No goals yet
          </h2>

          <p className="mt-2 text-sm text-[var(--pk-text-muted)]">
            Create your first goal above and start building momentum.
          </p>

        </div>

      ) : (

        <div className="space-y-3">

          {comparison.map((goal) => {

            const option = goalOptions.find(
              (item) => item.value === goal.type
            );

            const Icon = option?.icon || Target;

            const isSuccess = goal.status === "success";
            const isWarning = goal.status === "warning";

            const progressColor = isSuccess
              ? "bg-emerald-400"
              : isWarning
                ? "bg-amber-400"
                : "bg-[var(--pk-primary)]";

            return (
              <div
                key={goal.id}
                className={`rounded-2xl border p-4 transition-all duration-200 ${goal.completed
                  ? "border-emerald-400/20 bg-emerald-400/5"
                  : "border-[var(--pk-border)] bg-[var(--pk-surface)] hover:border-[var(--pk-primary)]/30"
                  }`}
              >

                <div className="flex items-center gap-4">

                  {/* Checkbox */}
                  <button
                    onClick={() => toggleGoal(goal.id)}
                    aria-label="Toggle goal"
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${goal.completed
                      ? "border-emerald-400 bg-emerald-400 text-white"
                      : "border-[var(--pk-border)] bg-[var(--pk-surface-soft)] text-transparent hover:border-[var(--pk-primary)]"
                      }`}
                  >
                    <Check size={18} />
                  </button>


                  {/* Icon */}
                  <div
                    className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex ${goal.completed
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-[var(--pk-primary)]/10 text-[var(--pk-primary)]"
                      }`}
                  >
                    <Icon size={19} />
                  </div>


                  {/* Goal Info */}
                  <div className="min-w-0 flex-1">

                    <p
                      className={`font-semibold ${goal.completed
                        ? "text-[var(--pk-text-muted)] line-through"
                        : ""
                        }`}
                    >
                      {option?.label || goal.type}
                    </p>

                    <p className="mt-1 text-xs text-[var(--pk-text-muted)]">
                      Target: {goal.type === "exercise"
                        ? "Complete exercise"
                        : goal.target}
                    </p>

                  </div>


                  {/* Today's progress */}
                  <div className="hidden text-right sm:block">

                    <p className="text-xs text-[var(--pk-text-muted)]">
                      Today
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      {goal.type === "exercise"
                        ? goal.actual
                          ? "Done"
                          : "Not done"
                        : `${goal.actual} / ${goal.target}`}
                    </p>

                  </div>


                  {/* Percentage */}
                  <div className="min-w-[55px] text-right">

                    <p className="text-sm font-bold">
                      {goal.progress}%
                    </p>

                    <p className="text-[10px] text-[var(--pk-text-muted)]">
                      progress
                    </p>

                  </div>


                  {/* Delete */}
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    aria-label="Delete goal"
                    className="rounded-xl p-2 text-[var(--pk-text-muted)] transition hover:bg-rose-400/10 hover:text-rose-400"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>


                {/* Progress Bar */}
                <div className="ml-14 mt-4">

                  <div className="h-2 overflow-hidden rounded-full bg-[var(--pk-background)]">

                    <div
                      className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
                      style={{
                        width: `${goal.progress}%`,
                      }}
                    />

                  </div>

                  <p
                    className={`mt-2 text-xs ${isSuccess
                      ? "text-emerald-400"
                      : isWarning
                        ? "text-amber-400"
                        : "text-[var(--pk-text-muted)]"
                      }`}
                  >
                    {goal.message}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      )}

    </div>
  );
}

export default Goals;