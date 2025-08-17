import React, { useState, useEffect } from "react";

interface TimerState {
  time: number;
  isRunning: boolean;
}

const Timer: React.FC = () => {
  const [timer, setTimer] = useState<TimerState>({
    time: 0,
    isRunning: false,
  });

  
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timer.isRunning) {
      interval = setInterval(() => {
        setTimer(prev => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    } else if (!timer.isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer.isRunning]);

  const start = () => setTimer(prev => ({ ...prev, isRunning: true }));
  const stop = () => setTimer(prev => ({ ...prev, isRunning: false }));
  const reset = () => setTimer({ time: 0, isRunning: false });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⏱ Timer</h1>
      <p>Time: {timer.time} seconds</p>
      <button onClick={start} style={{ marginRight: "10px" }}>Start</button>
      <button onClick={stop} style={{ marginRight: "10px" }}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
