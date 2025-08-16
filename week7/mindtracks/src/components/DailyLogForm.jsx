import React, { useState } from "react";
import { saveEntry } from "../utils/localStorage";
import { toast } from "react-toastify";
import dayjs from "dayjs";

export default function DailyLogForm({ onNewEntry }) {
  const [study, setStudy] = useState("");
  const [breaks, setBreaks] = useState("");
  const [sleep, setSleep] = useState("");
  const [stress, setStress] = useState("");
  const [focus, setFocus] = useState("");
  const [reflection, setReflection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      date: dayjs().format("YYYY-MM-DD"),
      study: Number(study),
      breaks: Number(breaks),
      sleep: Number(sleep),
      stress: Number(stress),
      focus: Number(focus),
      reflection,
    };
    saveEntry(entry);
    onNewEntry();
    toast.success("Entry saved!");
    setStudy(""); setBreaks(""); setSleep(""); setStress(""); setFocus(""); setReflection("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "400px" }}>
      <input type="number" placeholder="Study Hours" value={study} onChange={(e) => setStudy(e.target.value)} required/>
      <input type="number" placeholder="Break Time (minutes)" value={breaks} onChange={(e) => setBreaks(e.target.value)} required/>
      <input type="number" placeholder="Sleep Hours" value={sleep} onChange={(e) => setSleep(e.target.value)} required/>
      <input type="number" placeholder="Stress Level (1-10)" value={stress} onChange={(e) => setStress(e.target.value)} required/>
      <input type="number" placeholder="Focus Level (1-10)" value={focus} onChange={(e) => setFocus(e.target.value)} required/>
      <textarea placeholder="Reflection (Markdown supported)" value={reflection} onChange={(e) => setReflection(e.target.value)} />
      <button type="submit" style={{ background: "#4f46e5", color: "#fff", padding: "0.5rem", border: "none" }}>Save Entry</button>
    </form>
  );
}
