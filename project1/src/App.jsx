import React, { useState, useEffect } from "react";
// import "./App.css";

const App = () => {
  // State for current input value
  const [task, setTask] = useState("");

  // State for all tasks (initialize from localStorage if available)
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // State to manage the index of the task being edited
  const [editingIndex, setEditingIndex] = useState(null);
  // State to store the value while editing a task
  const [editText, setEditText] = useState("");
  // state to change of darkmode
  const [darkmode, setDarkmode] = useState(() => {
    const stored = localStorage.getItem("darkmode");
    return stored ? JSON.parse(stored) : false;
  });

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //save mode of screen
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  }, [darkmode]);

  // Add a new task to the list
  const addTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, { text: task, completed: false }]);
    setTask(""); // Clear input after adding
  };

  // Toggle task's completed status
  const toggleComplete = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  // Delete a task by filtering it out
  const deleteTask = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  };

  // Save changes after editing a task
  const saveEdit = (index) => {
    if (editText.trim() === "") return;
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, text: editText } : t
    );
    setTasks(updated);
    setEditingIndex(null); // Reset editing state
    setEditText("");
  };
  const compeletedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.length - compeletedCount;
  return (
    // <div className=" min-h-screen bg-gray-100 p-4 flex flex-col items-center">
    <div
      className={`min-h-screen p-4 flex flex-col items-center ${
        darkmode ? "bg-gray-600 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {" "}
      <button
        onClick={() => setDarkmode(!darkmode)}
        className="text-sm px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-70 mb-2"
      >
        {darkmode ? " ☀️ Light mode " : " 🌙 Dark mode"}
      </button>
      <div
        className={`second-box w-full max-w-md rounded-xl shadow-md p-6 ${
          darkmode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          Daily Task Tracker
        </h1>

        {/* Input for adding a new task */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter task..."
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className={`flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              darkmode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
            }`}
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>
        {/* task status */}
        <div className="mb-4 text-sm text-gray-700 dark:text-gray-300">
          {" "}
          Total : {tasks.length}, Completed : {compeletedCount}, pending:{" "}
          {pendingCount}
        </div>
        {/* List of all tasks */}
        <ul className="space-y-2">
          {tasks.map((t, i) => (
            <li
              key={i}
              className={`flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm ${
                darkmode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              }`}
            >
              <div className="flex items-center gap-2 w-full">
                {/* Checkbox to mark task as completed */}
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleComplete(i)}
                  className="accent-indigo-500"
                />

                {/* Conditional rendering for editing or showing task text */}
                {editingIndex === i ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-grow border border-gray-400 rounded px-2 py-1"
                  />
                ) : (
                  <span
                    className={`flex-grow ${
                      t.completed ? "line-through text-gray-400" : ""
                    } ${darkmode ? "text-white" : "text-gray-800"}`}
                  >
                    {t.text}
                  </span>
                )}

                {/* Show save/cancel button if editing, else show edit button */}
                {editingIndex === i ? (
                  <>
                    <button
                      onClick={() => saveEdit(i)}
                      className="text-green-500 hover:text-green-700 ml-2"
                    >
                      💾
                    </button>
                    <button
                      onClick={() => {
                        setEditingIndex(null);
                        setEditText("");
                      }}
                      className="text-gray-500 hover:text-gray-700 ml-1"
                    >
                      ❌
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setEditingIndex(i);
                      setEditText(t.text);
                    }}
                    className="text-blue-500 hover:text-blue-700 ml-2"
                  >
                    ✏️
                  </button>
                )}

                {/* Delete task button */}
                <button
                  onClick={() => deleteTask(i)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
