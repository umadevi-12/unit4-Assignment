import React from "react";
import TimerComponent from "./components/TimerComponent";
import "./index.css";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <TimerComponent />
    </div>
  );
}
