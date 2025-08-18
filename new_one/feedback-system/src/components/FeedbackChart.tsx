import React from "react";
import { useSelector } from "react-redux";
import type  { RootState } from "../store/store";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

export const FeedbackChart: React.FC = () => {
  const feedbacks = useSelector((state: RootState) => state.feedback);

  const ratingsCount = [0, 0, 0, 0, 0];
  feedbacks.forEach(f => { ratingsCount[f.rating - 1] += 1; });

  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Number of Ratings",
        data: ratingsCount,
        backgroundColor: "rgba(234, 234, 23, 0.6)",
      }
    ]
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <Bar data={data} />
    </div>
  );
};
