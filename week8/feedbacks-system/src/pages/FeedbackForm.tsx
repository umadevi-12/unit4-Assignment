import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { feedback, setFeedback } = useFeedback();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.name || !feedback.email || !feedback.rating || !feedback.feedback) {
      alert("Please fill in all fields.");
      return;
    }
    navigate("/summary");
  };

  return (
    <div className="form-container">
      <h2>Customer Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={feedback.name}
          onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={feedback.email}
          onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={feedback.rating}
          onChange={(e) => setFeedback({ ...feedback, rating: Number(e.target.value) })}
        />
        <textarea
          placeholder="Your feedback"
          value={feedback.feedback}
          onChange={(e) => setFeedback({ ...feedback, feedback: e.target.value })}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
