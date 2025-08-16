import React from "react";
import { useToggle } from "../hooks/useToggle";

export default function ToggleComponent() {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div className="p-4 border rounded">
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>Hello! This is a toggled message.</p>}
    </div>
  );
}
