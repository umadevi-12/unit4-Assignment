import { Feedback } from "../domain/types";

interface Props {
  data: Feedback[];
}

export default function FeedbackList({ data }: Props) {
  if (data.length === 0) return <p>No feedback yet.</p>;

  return (
    <div>
      <h2>All Feedback</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Visit Type</th>
            <th>Food</th>
            <th>Service</th>
            <th>Ambience</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fb) => (
            <tr key={fb.id}>
              <td>{new Date(fb.submittedAt).toLocaleString()}</td>
              <td>{fb.customer.name}</td>
              <td>{fb.visitType}</td>
              <td>{fb.ratings.food}</td>
              <td>{fb.ratings.service}</td>
              <td>{fb.ratings.ambience}</td>
              <td>{fb.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
