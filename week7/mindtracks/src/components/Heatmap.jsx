import React from "react";

export default function Heatmap({ entries }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "400px" }}>
      {entries.map((e, i) => (
        <div key={i} style={{
          width: "20px", height: "20px", margin: "2px",
          background: e.study > 2 ? "#4f46e5" : "#ddd"
        }} title={e.date}></div>
      ))}
    </div>
  );
}
