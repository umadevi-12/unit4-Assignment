import React from "react";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
  return (
    <li
      style={{
        marginBottom: "10px",
        padding: "10px",
        border: "3px solid #ddd",
        borderRadius: "6px",
        backgroundColor: task.completed ? "#e0ffe0" : "#fff",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        style={{ marginRight: "10px" }}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.description}
      </span>
      <small>[{task.priority}]</small>
    </li>
  );
};

export default TaskItem;
