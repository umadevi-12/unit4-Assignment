import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask } from "./tasksSlice";

function App() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>📋 Task List</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a task"
          style={{ flex: 1, padding: "8px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleAddTask}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f9f9f9",
              padding: "8px",
              marginBottom: "8px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#888" : "#000",
              }}
            >
              {task.text}
            </span>
            <div>
              <button
                onClick={() => dispatch(toggleTask(task.id))}
                style={{
                  backgroundColor: "#ffc107",
                  border: "none",
                  padding: "5px 8px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                Toggle
              </button>
              <button
                onClick={() => dispatch(removeTask(task.id))}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "5px 8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
