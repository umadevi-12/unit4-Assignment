import React from "react";
import JournalEntry from "./JournalEntry";
import Heatmap from "./Heatmap";
import { calculateStreak, generateInsights } from "../utils/insights";

export default function Dashboard({ entries, onExportPDF }) {
  const streak = calculateStreak(entries);
  const insights = generateInsights(entries);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>📊 Dashboard</h2>
      <h3>Streak: {streak} days</h3>

      <div>
        {insights.map((insight, idx) => (
          <p key={idx}>💡 {insight}</p>
        ))}
      </div>

      <button onClick={onExportPDF} style={{ marginBottom: "1rem", background: "#4f46e5", color: "#fff", padding: "0.5rem", border: "none", borderRadius: "4px" }}>
        Export PDF
      </button>

      <Heatmap entries={entries} />

      <div id="journal" style={{ marginTop: "1rem" }}>
        {entries.map((entry, idx) => (
          <JournalEntry key={idx} entry={entry} />
        ))}
      </div>
    </div>
  );
}
