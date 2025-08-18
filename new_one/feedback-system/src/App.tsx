import React from "react";
import { FeedbackForm } from "./components/FeedbackForm";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackChart } from "./components/FeedbackChart";

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Advanced Feedback System</h1>
      <FeedbackForm />
      <FeedbackChart />
      <FeedbackList />
    </div>
  );
};

export default App;
