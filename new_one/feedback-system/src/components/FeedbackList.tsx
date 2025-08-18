import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store"; 

export const FeedbackList: React.FC = () => {
  const feedbacks = useSelector((state: RootState) => state.feedback);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      {feedbacks.map(f => (
        <div
          key={f.id}
          style={{
            border: "43px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>{f.name}</strong> ({f.email})
          </p>
          <p>Rating: {f.rating}</p>
          <p>{f.comments}</p>
          <p>Date: {new Date(f.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};
