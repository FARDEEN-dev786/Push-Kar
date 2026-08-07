import { useEffect, useState } from "react";
import { getGoals, saveGoals } from "../utils/goalsStorage";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  useEffect(() => {
    setGoals(getGoals());
  }, []);

  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  const addGoal = () => {
    if (!newGoal.trim()) return;

    setGoals([
      ...goals,
      {
        id: Date.now(),
        text: newGoal,
        completed: false,
      },
    ]);

    setNewGoal("");
  };

  const toggleGoal = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? { ...goal, completed: !goal.completed }
          : goal
      )
    );
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl p-8 border border-slate-700">
      <h1 className="text-3xl font-bold mb-6">
        Daily Goals
      </h1>

      <div className="flex gap-3 mb-6">
        <input
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Add a goal..."
          className="flex-1 p-3 rounded-xl bg-slate-900"
        />

        <button
          onClick={addGoal}
          className="bg-cyan-500 hover:bg-cyan-600 px-5 rounded-xl font-bold"
        >
          Add
        </button>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="flex justify-between items-center bg-slate-900 p-4 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal.id)}
              />

              <span
                className={
                  goal.completed
                    ? "line-through text-gray-500"
                    : ""
                }
              >
                {goal.text}
              </span>
            </div>

            <button
              onClick={() => deleteGoal(goal.id)}
              className="text-red-400"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;