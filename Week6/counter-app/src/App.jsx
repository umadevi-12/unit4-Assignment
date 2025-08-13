import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>🧮 Redux Counter</h1>
      <h2 style={{ fontSize: "2rem", margin: "20px 0" }}>{count}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
