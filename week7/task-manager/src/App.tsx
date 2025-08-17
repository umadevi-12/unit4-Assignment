import React, { useState } from "react";
import { Task } from "./types/Task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

enum Filter {
  All = "All",
  Completed = "Completed",
  Incomplete = "Incomplete",
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === Filter.Completed) return task.completed;
    if (filter === Filter.Incomplete) return !task.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>✅ Task Manager</h1>
      <TaskForm addTask={addTask} />

      <div style={{ marginBottom: "20px"  }}>
        <label>Filter: </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as Filter)}
        >
          {Object.values(Filter).map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;
