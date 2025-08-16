import React, { useEffect, useState } from "react";
import { getEntries } from "../utils/localStorage";
import JournalEntry from "./JournalEntry";

export default function MentorDashboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Mentor Dashboard (Anonymized)</h1>
      {entries.map((e, idx) => <JournalEntry key={idx} entry={e} />)}
    </div>
  );
}
