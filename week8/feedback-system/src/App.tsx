import React, { useState } from "react";
import "./App.css";

interface FeedbackData {
  name: string;
  email: string;
  rating: number;
  feedback: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      alert("Please fill all fields!");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", rating: 0, feedback: "" }); 
  };

  return (
    <div className="container">
      <h1>Feedback Form</h1>
      {!submitted ? (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={formData.rating || ""}
            onChange={handleChange}
            min="1"
            max="5"
          />

          <textarea
            name="feedback"
            placeholder="Write your feedback"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="confirmation">
          <h2>✅ Feedback Submitted!</h2>
          <p>Thank you for your feedback 🙌</p>
        </div>
      )}
    </div>
  );
};

export default App;
