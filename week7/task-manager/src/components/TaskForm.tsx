import React, { useState } from "react";
import { Priority, Task } from "../types/Task";

interface TaskFormProps {
  addTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<Priority>(Priority.Low);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      description,
      priority,
      completed: false,
    };

    addTask(newTask);
    setDescription("");
    setPriority(Priority.Low);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        style={{ padding: "10px", marginRight: "10px" }}
      >
        {Object.values(Priority).map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      <button type="submit" style={{ padding: "10px 10px" }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
