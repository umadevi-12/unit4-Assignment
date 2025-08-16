import React from "react";
import ReactMarkdown from "react-markdown";

export default function JournalEntry({ entry }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "0.5rem", marginBottom: "0.5rem" }}>
      <div><strong>{entry.date}</strong></div>
      <div>Study: {entry.study} hrs | Breaks: {entry.breaks} min | Sleep: {entry.sleep} hrs | Stress: {entry.stress} | Focus: {entry.focus}</div>
      <ReactMarkdown>{entry.reflection}</ReactMarkdown>
    </div>
  );
}
