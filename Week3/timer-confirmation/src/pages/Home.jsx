import React, { useState } from "react";
import TimerConfirmation from "../components/TimerConfirmation";

function Home() {
  const [timer, setTimer] = useState(false);

  const handleClick = () => setTimer(true);
  const handleCancel = () => setTimer(false);

  return (
    <div
      style={{ display: "flex",justifyContent: "center", alignItems: "center",  height: "100vh", width: "100vw", backgroundColor: "#f9f9f9",}} >
      {timer ? (
        <TimerConfirmation onCancel={handleCancel} />
      ) : (
        <button onClick={handleClick} style={{ padding: "14px 28px", fontSize: "18px",borderRadius: "8px",border: "1px solid #ccc",
            backgroundColor: "#9136a3ff",
            color: "#fff",
            cursor: "pointer",
          }}>
          Fetch Data
        </button>
      )}
    </div>
  );
}

export default Home;
