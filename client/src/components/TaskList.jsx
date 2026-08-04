import { useState } from "react";
import { Trash2 } from "lucide-react";

function TaskList() {
  // Stores all tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Go to Gym", completed: false },
    { id: 3, text: "Read 20 pages", completed: false },
  ]);

  // Stores what's typed in the input box
  const [newTask, setNewTask] = useState("");

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Add a new task
  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        completed: false,
      },
    ]);

    setNewTask("");
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-5">
        Today's Tasks
      </h2>

      {/* Input and Add Button */}
      <div className="flex gap-3 mb-5">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-3 outline-none"
        />

        <button
          onClick={addTask}
          className="bg-cyan-500 hover:bg-cyan-600 px-5 rounded-xl font-semibold transition"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center bg-slate-900 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5"
              />

              <span
                className={
                  task.completed
                    ? "line-through text-gray-500"
                    : ""
                }
              >
                {task.text}
              </span>
            </div>

            <button onClick={() => deleteTask(task.id)}>
              <Trash2 className="text-red-400 hover:text-red-600 transition" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;