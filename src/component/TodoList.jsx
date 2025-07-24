import { useState } from "react";

const TodoList = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const toggleDone = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const newItem = {
      id: Date.now(),
      task: newTask,
      due: dueDate || "No due date",
      done: false,
    };

    setTasks(prev => [...prev, newItem]);
    setNewTask("");
    setDueDate("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">To-Do List</h2>

      <form className="sm:flex flex-1 gap-2 mb-4" onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="border border-gray-300 rounded  sm:mb-0 mb-2 px-3 py-2 w-full"
        />
        <input
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="Due date"
          className="border border-gray-300 rounded sm:mb-0 mb-2 px-3 py-2 sm:w-40 w-full"
        />
        <button
          type="submit"
          className="bg-[#0097A7] text-white  px-4 py-2 rounded hover:bg-[#006064]"
        >
          Add
        </button>
      </form>

      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <li key={task.id} className="py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(task.id)}
              />
              <span className={task.done ? "line-through text-gray-400" : ""}>
                {task.task}
              </span>
            </div>
            <span className="text-sm text-gray-500">Due {task.due}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


