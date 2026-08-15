import { useState } from "react";
import { Trash2, Plus, Check } from "lucide-react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Go to Gym", completed: false },
    { id: 3, text: "Read 20 pages", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
      },
    ]);

    setNewTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">

        <div>
          <h2 className="text-2xl font-bold">
            Today's Tasks
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            {completedTasks} of {tasks.length} completed
          </p>
        </div>

        <div className="text-sm text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full">
          {tasks.length} Tasks
        </div>

      </div>

      {/* Add Task */}
      <div className="flex gap-3 mb-5">

        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What do you want to accomplish?"
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
        />

        <button
          onClick={addTask}
          className="bg-cyan-500 hover:bg-cyan-600 px-4 sm:px-5 rounded-xl font-semibold transition flex items-center gap-2"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">
            Add
          </span>
        </button>

      </div>

      {/* Tasks */}
      <div className="space-y-3">

        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No tasks yet. Add something you want to accomplish.
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between gap-3 bg-slate-900 rounded-xl p-4 border border-transparent hover:border-slate-700 transition ${
                task.completed ? "opacity-70" : ""
              }`}
            >

              {/* Task */}
              <button
                onClick={() => toggleTask(task.id)}
                className="flex items-center gap-3 text-left flex-1"
              >
                <span
                  className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 transition ${
                    task.completed
                      ? "bg-cyan-500 border-cyan-500"
                      : "border-slate-600 hover:border-cyan-400"
                  }`}
                >
                  {task.completed && (
                    <Check
                      size={16}
                      className="text-slate-950"
                    />
                  )}
                </span>

                <span
                  className={
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-200"
                  }
                >
                  {task.text}
                </span>
              </button>

              {/* Delete */}
              <button
                onClick={() => deleteTask(task.id)}
                className="p-2 rounded-lg hover:bg-red-400/10 transition"
                aria-label="Delete task"
              >
                <Trash2
                  size={18}
                  className="text-red-400 hover:text-red-300"
                />
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default TaskList;