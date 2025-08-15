import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasks, addTask, updateTask, deleteTask } from "../api/firebase";

// Debounce helper function
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

const TASKS_PER_PAGE = 5;

function ProjectDetails() {
  const { id } = useParams(); // projectId
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("medium");
  const [newDueDate, setNewDueDate] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterCompletion, setFilterCompletion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch tasks from Firebase
  const fetchTasks = async () => {
    const data = await getTasks(id);
    setTasks(data ? Object.entries(data) : []);
  };

  useEffect(() => {
    fetchTasks();
  }, [id]);

  // Add task
  const handleAddTask = async () => {
    if (!newTask) return;
    await addTask(id, {
      title: newTask,
      completed: false,
      priority: newPriority,
      dueDate: newDueDate ? new Date(newDueDate).getTime() : null,
      createdAt: Date.now(),
    });
    setNewTask("");
    setNewPriority("medium");
    setNewDueDate("");
    fetchTasks();
  };

  // Toggle completed
  const toggleTask = async (taskId, completed) => {
    await updateTask(id, taskId, { completed: !completed });
    fetchTasks();
  };

  // Delete task
  const handleDelete = async (taskId) => {
    await deleteTask(id, taskId);
    fetchTasks();
  };

  // Debounced search
  const handleSearch = debounce((value) => setSearchTerm(value.toLowerCase()), 300);

  // Filter + sort
  const filteredTasks = tasks
    .filter(([_, task]) => (filterPriority ? task.priority === filterPriority : true))
    .filter(([_, task]) => (filterCompletion ? (filterCompletion === "completed" ? task.completed : !task.completed) : true))
    .filter(([_, task]) => task.title.toLowerCase().includes(searchTerm))
    .sort(([_, a], [__, b]) => {
      if (sortBy === "created") return a.createdAt - b.createdAt;
      if (sortBy === "priority") {
        const order = { high: 1, medium: 2, low: 3 };
        return order[a.priority] - order[b.priority];
      }
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredTasks.length / TASKS_PER_PAGE);
  const paginatedTasks = filteredTasks.slice((currentPage - 1) * TASKS_PER_PAGE, currentPage * TASKS_PER_PAGE);

  // Task progress
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(([_, task]) => task.completed).length;

  const isOverdue = (dueDate) => dueDate && dueDate < Date.now() && !completedTasks;

  return (
    <div>
      <h1>Tasks</h1>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="date" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input type="text" placeholder="Search Tasks" onChange={(e) => handleSearch(e.target.value)} />
        <select onChange={(e) => setFilterPriority(e.target.value)} defaultValue="">
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select onChange={(e) => setFilterCompletion(e.target.value)} defaultValue="">
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)} defaultValue="">
          <option value="">Sort By</option>
          <option value="created">Created Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <p>Progress: {completedTasks} of {totalTasks} tasks completed</p>

      {paginatedTasks.map(([taskId, task]) => (
        <div key={taskId} style={{ marginBottom: "5px", color: task.dueDate && task.dueDate < Date.now() && !task.completed ? "red" : "black" }}>
          <input type="checkbox" checked={task.completed} onChange={() => toggleTask(taskId, task.completed)} />
          {task.title} - {task.priority} {task.dueDate && `(Due: ${new Date(task.dueDate).toLocaleDateString()})`}
          <button onClick={() => handleDelete(taskId)} style={{ marginLeft: "10px" }}>Delete</button>
        </div>
      ))}

      {totalPages > 1 && (
        <div>
          <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Prev</button>
          <span> Page {currentPage} of {totalPages} </span>
          <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}

      {filteredTasks.length === 0 && <p>No tasks found.</p>}
    </div>
  );
}

export default ProjectDetails;
