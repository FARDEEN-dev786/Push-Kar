import { useState } from "react";
import {
  Trash2,
  Plus,
  Check,
  ListChecks,
} from "lucide-react";

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

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-[var(--pk-primary)]/10 p-2.5 text-[var(--pk-primary)]">
            <ListChecks size={21} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Today's Tasks
            </h2>

            <p className="text-xs text-[var(--pk-text-muted)] mt-1">
              {completedTasks} of {tasks.length} completed
            </p>
          </div>

        </div>

        <div className="rounded-full bg-[var(--pk-surface-soft)] px-3 py-1 text-xs font-semibold text-[var(--pk-text-muted)]">
          {tasks.length} tasks
        </div>

      </div>


      {/* Add Task */}
      <div className="flex gap-3 mb-5">

        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          placeholder="What do you want to accomplish?"
          className="min-w-0 flex-1 rounded-xl border border-[var(--pk-border)] bg-[var(--pk-surface-soft)] px-4 py-3 text-sm outline-none placeholder:text-[var(--pk-text-muted)] focus:border-[var(--pk-primary)] focus:ring-2 focus:ring-[var(--pk-primary)]/20"
        />

        <button
          onClick={addTask}
          className="flex items-center gap-2 rounded-xl bg-[var(--pk-primary)] px-4 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
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

          <div className="rounded-xl border border-dashed border-[var(--pk-border)] p-8 text-center">
            <p className="text-sm text-[var(--pk-text-muted)]">
              No tasks yet. Add something you want to accomplish today.
            </p>
          </div>

        ) : (

          tasks.map((task) => (

            <div
              key={task.id}
              className="group flex items-center justify-between gap-3 rounded-xl border border-transparent bg-[var(--pk-surface-soft)] p-4 transition-all duration-200 hover:border-[var(--pk-border)]"
            >

              <div className="flex min-w-0 items-center gap-3">

                {/* Custom checkbox */}
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
                    task.completed
                      ? "border-[var(--pk-primary)] bg-[var(--pk-primary)] text-white"
                      : "border-[var(--pk-border)] hover:border-[var(--pk-primary)]"
                  }`}
                  aria-label={
                    task.completed
                      ? "Mark task incomplete"
                      : "Mark task complete"
                  }
                >
                  {task.completed && (
                    <Check size={13} strokeWidth={3} />
                  )}
                </button>

                <span
                  className={`truncate text-sm transition-all ${
                    task.completed
                      ? "text-[var(--pk-text-muted)] line-through"
                      : "text-[var(--pk-text)]"
                  }`}
                >
                  {task.text}
                </span>

              </div>


              {/* Delete */}
              <button
                onClick={() => deleteTask(task.id)}
                className="shrink-0 rounded-lg p-2 text-[var(--pk-text-muted)] opacity-60 transition-all hover:bg-red-500/10 hover:text-red-400 group-hover:opacity-100"
                aria-label="Delete task"
              >
                <Trash2 size={17} />
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default TaskList;