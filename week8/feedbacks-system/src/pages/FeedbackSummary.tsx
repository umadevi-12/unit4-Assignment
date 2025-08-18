import { Link } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";

const FeedbackSummary = () => {
  const { feedback } = useFeedback();

  return (
    <div className="summary-container">
      <h2>Feedback Summary</h2>
      <p><strong>Name:</strong> {feedback.name}</p>
      <p><strong>Email:</strong> {feedback.email}</p>
      <p><strong>Rating:</strong> {feedback.rating}</p>
      <p><strong>Comments:</strong> {feedback.feedback}</p>

      <Link to="/">Go Back</Link>
    </div>
  );
};

export default FeedbackSummary;
