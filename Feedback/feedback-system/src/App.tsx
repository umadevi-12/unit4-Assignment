import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import { Feedback } from "./domain/types";
import { repo } from "./data/LocalStorageRepository";

export default function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [thankYou, setThankYou] = useState(false);

  useEffect(() => {
    repo.list().then(setFeedbacks);
  }, []);

  const handleSubmit = async (fb: Feedback) => {
    setThankYou(true);
    setFeedbacks(await repo.list());
    setTimeout(() => setThankYou(false), 2000); // hide thank you after 2 sec
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Aromatic Bar – Feedback System</h1>
      <FeedbackForm onSubmit={handleSubmit} />
      {thankYou && <p style={{ color: "green" }}>✅ Thank you for your feedback!</p>}
      <FeedbackList data={feedbacks} />
    </div>
  );
}
