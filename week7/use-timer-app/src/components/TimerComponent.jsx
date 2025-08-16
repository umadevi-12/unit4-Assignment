import React from "react";
import { useTimer } from "../hooks/useTimer";

export default function TimerComponent() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="p-6 border rounded-2xl shadow-lg bg-white text-center w-80">
      <h2 className="text-2xl font-bold mb-6">⏱ useTimer Hook</h2>
      <p className="text-lg font-mono mb-6">Time: {timer} seconds</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed"
        >
          Start
        </button>

        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed"
        >
          Stop
        </button>

        <button
          onClick={resetTimer}
          className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
