import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../store/feedbackSlice";
import type { Feedback } from "../store/feedbackSlice"; // ✅ type-only import
import type { AppDispatch } from "../store/store";

export const FeedbackForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFeedback: Feedback = {
      id: Date.now(),
      name,
      email,
      rating,
      comments,
      date: new Date().toISOString(),
    };
    dispatch(addFeedback(newFeedback));
    setName(""); setEmail(""); setRating(1); setComments("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Rating (1-5)"
        type="number"
        min={1}
        max={5}
        value={rating}
        onChange={e => setRating(Number(e.target.value))}
        required
      />
      <textarea
        placeholder="Comments"
        value={comments}
        onChange={e => setComments(e.target.value)}
        required
      />
      <button
        type="submit"
        style={{
          padding: "10px",
          background: "#212eb9ff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit Feedback
      </button>
    </form>
  );
};
