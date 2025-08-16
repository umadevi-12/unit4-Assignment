import React from "react";
import { useToggleItems } from "./hooks/useToggleItems";
import './index.css';

export default function App() {
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🔄 useToggleItems Hook</h1>
      <p className="text-5xl mb-6">
        Current Item: <span className="font-mono">{state}</span>
      </p>
      <button
        onClick={toggleState}
        className="px-8 py-4 text-2xl bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200"
      >
        Toggle Item
      </button>
    </div>
  );
}
