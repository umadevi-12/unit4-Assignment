import React, { useState } from "react";
import "./App.css";

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const addTask = () => {
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    setTasks((prev) =>
      [...prev, newTask].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    );
    setTitle("");
    setPriority("Medium");
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchPriority = priorityFilter === "All" || task.priority === priorityFilter;
    const matchStatus =
      statusFilter === "All" ||
      (statusFilter === "Completed" && task.completed) ||
      (statusFilter === "Incomplete" && !task.completed);
    return matchPriority && matchStatus;
  });

  return (
    <div className="app">
      <h1>Advanced Task Manager</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      
      <div className="filters">
        <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.priority === "High" ? "high-priority" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.title} ({task.priority})
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
        {filteredTasks.length === 0 && <p>No tasks to show.</p>}
      </ul>
    </div>
  );
}

export default App;
