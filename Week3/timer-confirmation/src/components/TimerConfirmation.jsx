import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TimerConfirmation({ onCancel }) {
  const [timer, setTimer] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onCancel();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onCancel]);

  const handleYes = () => {
    navigate("/data");
  };

  const handleNo = () => {
    onCancel();
  };

  return (
    <div>
      <h2> fetch the data TimerConfirmation</h2>
      <h1 style={{ color: timer > 5 ? "green" : "red" }}>{timer}</h1>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
}

export default TimerConfirmation;
